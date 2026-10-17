declare global {
  interface Window {
    gtag?: (command: string, eventName: string) => void;
  }
}

export function trackGA4Event(eventName: string) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName);
  }
}
