// Public GA4 measurement ID supplied by the website owner, not a credential.
export const measurementId = 'G-L3DWKK55NR';
export const consentKey = 'tatvix-analytics-consent-v1';
const lifetime = 180 * 24 * 60 * 60 * 1000;
type Choice = 'accepted' | 'rejected';
type AnalyticsWindow = Window & {dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void; [key: `ga-disable-${string}`]: boolean | undefined};
let initialized = false;
let lastPage = '';
let sessionChoice: Choice | null = null;

export function productionBrowser() {
  return typeof window !== 'undefined' && window.location.hostname === 'www.tatvixtech.com';
}
export function readConsent(): Choice | null {
  try {
    const value = JSON.parse(window.localStorage.getItem(consentKey) || 'null');
    return value && ['accepted', 'rejected'].includes(value.choice) && value.expires > Date.now() ? value.choice : null;
  } catch { return null; }
}
export function currentConsent() { return sessionChoice || readConsent(); }
function analyticsWindow() { return window as unknown as AnalyticsWindow; }
function clearAnalyticsCookies() {
  for (const cookie of document.cookie.split(';')) {
    const name = cookie.trim().split('=')[0];
    if (!/^_ga(?:_|$)|^_gid$|^_gat(?:_|$)/.test(name)) continue;
    for (const domain of ['', '; domain=www.tatvixtech.com', '; domain=.tatvixtech.com']) {
      document.cookie = `${name}=; Max-Age=0; path=/${domain}; SameSite=Lax; Secure`;
    }
  }
}
export function saveConsent(choice: Choice) {
  sessionChoice = choice;
  try { window.localStorage.setItem(consentKey, JSON.stringify({choice, expires: Date.now() + lifetime})); } catch { /* Session-only choice if storage is unavailable. */ }
  if (choice === 'rejected') {
    const target = analyticsWindow();
    target[`ga-disable-${measurementId}`] = true;
    target.gtag?.('consent', 'update', {analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied'});
    clearAnalyticsCookies();
    // Unload the already downloaded tag so no later automatic events can run.
    if (initialized) window.location.reload();
  }
}
function safeReferrer() {
  try { const url = new URL(document.referrer); return url.origin === window.location.origin ? url.origin + url.pathname : url.origin + '/'; } catch { return ''; }
}
export function trackPage(path: string) {
  if (!initialized || analyticsWindow()[`ga-disable-${measurementId}`] || lastPage === path) return;
  lastPage = path;
  // Exclude query strings and fragments, which can contain personal information.
  analyticsWindow().gtag?.('event', 'page_view', {page_location: window.location.origin + path.split(/[?#]/)[0], page_title: document.title, page_referrer: safeReferrer()});
}
export function startAnalytics(path: string) {
  if (!productionBrowser() || (sessionChoice || readConsent()) !== 'accepted') return;
  const target = analyticsWindow();
  target[`ga-disable-${measurementId}`] = false;
  if (!initialized) {
    initialized = true;
    target.dataLayer = target.dataLayer || [];
    // Google tags expect an Arguments object in the command queue.
    // eslint-disable-next-line prefer-rest-params
    target.gtag = function () { target.dataLayer!.push(arguments); };
    target.gtag('consent', 'default', {analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied'});
    target.gtag('consent', 'update', {analytics_storage: 'granted'});
    target.gtag('js', new Date());
    target.gtag('config', measurementId, {send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false, cookie_expires: 15552000, cookie_update: false, page_location: window.location.origin + path.split(/[?#]/)[0], page_referrer: safeReferrer()});
    const script = document.createElement('script');
    script.id = 'tatvix-google-analytics'; script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
  }
  trackPage(path);
}
export function trackSuccessfulEnquiry() {
  if (!productionBrowser() || !initialized || analyticsWindow()[`ga-disable-${measurementId}`]) return;
  // Never pass form data or identifiers to Analytics.
  try { analyticsWindow().gtag?.('event', 'generate_lead', {form_id: 'project_enquiry'}); } catch { /* Measurement must never interfere with enquiry confirmation. */ }
}
