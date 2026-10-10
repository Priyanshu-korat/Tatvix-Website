import handler from "vinext/server/fetch-handler";
import { runWithConnectorBinding } from "../lib/connector-context";
import type { ConnectorBinding } from "../lib/connector-contract.mjs";
import {isProductionHost,canonical} from '../lib/seo';
import {legacyDestination} from '../lib/seo-routes';

export default {
  async fetch(request: Request, env: Cloudflare.Env, ctx: ExecutionContext<{ CONNECTORS?: ConnectorBinding }>) {
    const url=new URL(request.url);
    if(url.hostname==='tatvixtech.com'||(isProductionHost(url.host)&&url.protocol==='http:'))return Response.redirect(canonical(url.pathname+url.search),301);
    const destination=legacyDestination(url.pathname);
    if(destination&&(request.method==='GET'||request.method==='HEAD'))return Response.redirect(new URL(destination+url.search,url.origin).href,301);
    let binding = ctx.props?.CONNECTORS;
    // Local preview emulates the same request-scoped capability. This branch and
    // the auxiliary service binding are absent from production builds.
    if (import.meta.env.DEV && !binding && env.CONNECTORS) {
      const preview = env.CONNECTORS;
      const expiresAt = Date.now() + 60_000;
      binding = {
        async getContext() {
          if (Date.now() >= expiresAt) return { status: "request_context_expired" };
          return preview.getContext?.() ?? { status: "binding_unavailable" };
        },
        async invoke(connectorId, actionName, args) {
          if (Date.now() >= expiresAt) {
            return { status: "request_context_expired", message: "This request has expired. Please try again." };
          }
          return preview.invoke(connectorId, actionName, args);
        },
      };
    }
    const response=await runWithConnectorBinding(binding, () => handler.fetch(request, env, ctx));
    if(isProductionHost(url.host))return response;
    const protectedResponse=new Response(response.body,response);
    protectedResponse.headers.set('X-Robots-Tag','noindex, follow');
    return protectedResponse;
  },
};
