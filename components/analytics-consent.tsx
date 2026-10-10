'use client';
import {useEffect, useRef, useState, useSyncExternalStore} from 'react';
import {usePathname} from 'next/navigation';
import {productionBrowser, currentConsent, saveConsent, startAnalytics, trackPage} from '@/lib/analytics';

function subscribe(notify: () => void) {
  window.addEventListener('storage', notify); window.addEventListener('tatvix-consent-change', notify);
  return () => {window.removeEventListener('storage', notify); window.removeEventListener('tatvix-consent-change', notify);};
}
function snapshot() { return productionBrowser() ? currentConsent() || 'unknown' : 'preview'; }
function serverSnapshot() { return 'server'; }

export function CookiePreferencesButton() {
  const value = useSyncExternalStore(subscribe, snapshot, serverSnapshot);
  const enabled = value !== 'server' && value !== 'preview';
  return enabled ? <button className="cookie-settings" onClick={() => window.dispatchEvent(new Event('tatvix-cookie-settings'))}>Cookie settings</button> : null;
}
export default function AnalyticsConsent() {
  const path = usePathname();
  const choice = useSyncExternalStore(subscribe, snapshot, serverSnapshot);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const visible = choice === 'unknown' || settingsOpen;
  const panel = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!productionBrowser()) return;
    const open = () => {setSettingsOpen(true); requestAnimationFrame(() => panel.current?.focus());};
    window.addEventListener('tatvix-cookie-settings', open);
    return () => window.removeEventListener('tatvix-cookie-settings', open);
  }, []);
  useEffect(() => { if (choice === 'accepted' && path) {startAnalytics(path); trackPage(path);} }, [path, choice]);
  function choose(value: 'accepted' | 'rejected') {
    saveConsent(value); setSettingsOpen(false); window.dispatchEvent(new Event('tatvix-consent-change'));
    if (value === 'accepted') startAnalytics(window.location.pathname);
  }
  if (!visible) return null;
  return <section ref={panel} tabIndex={-1} className="analytics-consent" aria-label="Analytics cookie preferences">
    <div><h2>A little insight. Your choice.</h2><p>With your permission, Google Analytics helps us understand visits and successful enquiries. Optional analytics stays off until you accept. <a href="/privacy#website-analytics">Privacy details</a></p></div>
    <div className="analytics-consent-actions"><button onClick={() => choose('rejected')}>Reject analytics</button><button onClick={() => choose('accepted')}>Accept analytics</button>{choice !== 'unknown' && <button className="cookie-close" onClick={() => setSettingsOpen(false)}>Close settings</button>}</div>
  </section>;
}
