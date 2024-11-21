/* eslint-disable @typescript-eslint/no-explicit-any */
import mixpanel from "mixpanel-browser";
import Cookies from "js-cookie";
import { v4 as uuidv4 } from "uuid";

import { detect } from "detect-browser";

const MAINNET_KEY = "2d5bfa2ab7c166e208bce5091c1b8b86";

mixpanel.init(MAINNET_KEY, { debug: true });

interface GeneralTrackingParams {
  userId: string;
  sessionId: string;
  referrerUrl: string;
  deviceType: string;
  browser: string;
  os: string;
  screenSize: string;
  timestamp: string;
  scrollPosition?: number;
  timeOnPage?: number;
}

export function trackEvent(
  event: MIXPANEL_EVENTS,
  specificParams: Record<string, unknown> = {}
) {
  const generalParams = getGeneralTrackingParams();

  const eventParams = {
    ...generalParams,
    ...specificParams,
  };

  const isDevelopment = process.env.NODE_ENV === "development";

  if (isDevelopment) return;

  mixpanel.track(event, eventParams);
}

function getGeneralTrackingParams(): GeneralTrackingParams {
  return {
    userId: getUserId(),
    sessionId: getSessionId(),
    referrerUrl: document.referrer,
    deviceType: getDeviceType(),
    browser: getBrowser(),
    os: getOS(),
    screenSize: getScreenSize(),
    timestamp: new Date().toISOString(),
    scrollPosition: getScrollPosition(),
    timeOnPage: getTimeOnPage(),
  };
}

function getUserId(): string {
  const cookieName = "userId";

  let userId = Cookies.get(cookieName);

  if (!userId) {
    userId = uuidv4();
    Cookies.set(cookieName, userId, { expires: 365 });
  }

  return userId;
}

function getSessionId(): string {
  const sessionKey = "sessionId";

  let sessionId = sessionStorage.getItem(sessionKey);

  if (!sessionId) {
    sessionId = uuidv4();
    sessionStorage.setItem(sessionKey, sessionId);
  }

  return sessionId;
}

function getDeviceType() {
  if ((navigator as any).userAgentData) {
    const deviceType = (navigator as any).userAgentData.mobile
      ? "mobile"
      : "desktop";
    return deviceType;
  }

  const isMobile = /Mobile|Android|iPhone|iPad|iPod/.test(navigator.userAgent);
  return isMobile ? "mobile" : "desktop";
}

function getBrowser() {
  const browser = detect();

  if (!browser) {
    return "Unknown";
  }

  return browser.name;
}

function getOS() {
  const userAgent = navigator.userAgent;

  if (userAgent.includes("Win")) {
    return "Windows";
  } else if (userAgent.includes("Mac")) {
    return "macOS";
  } else if (userAgent.includes("Linux")) {
    return "Linux";
  } else if (/Android/.test(userAgent)) {
    return "Android";
  } else if (/iPhone|iPad|iPod/.test(userAgent)) {
    return "iOS";
  } else {
    return "Unknown";
  }
}

function getScreenSize() {
  return `${window.innerWidth}x${window.innerHeight}`;
}

function getScrollPosition() {
  const totalScrollableHeight = document.body.scrollHeight - window.innerHeight;
  if (totalScrollableHeight <= 0) {
    return 0;
  }
  return Math.round((window.scrollY / totalScrollableHeight) * 100);
}

function getTimeOnPage() {
  return Math.round(performance.now() / 1000);
}

export enum MIXPANEL_EVENTS {
  PAGE_LOADED = "Page_Loaded",
  SESSION_START = "Session_Start",
  SESSION_END = "Session_End",
  HEADER_CLICK_TRADE_NOW = "Header_Click_Trade_Now",
  HEADER_CLICK_LIGHT = "Header_Click_Light",
  HEADER_CLICK_DARK = "Header_Click_Dark",
  HEADER_CLICK_WHAT_IS_SPARK = "Header_Click_What_Is_Spark",
  HEADER_CLICK_BLOG = "Header_Click_Blog",
  HEADER_CLICK_LIMIT = "Header_Click_Limit",
  HEADER_CLICK_DOCS = "Header_Click_Docs",
  HEADER_CLICK_GITHUB = "Header_Click_Github",
  HEADER_CLICK_FAUCET = "Header_Click_Faucet",
  HEADER_CLICK_LIQUIDITY = "Header_Click_Liquidity",
  HERO_CLICK_TRADE_NOW = "Hero_Click_Trade_Now",
  CARD_CLICK_VIEW_AUDIT = "Card_Click_View_Audit",
  CARD_CLICK_VIEW_CODE = "Card_Click_View_Code",
  CARD_CLICK_TRADE_NOW = "Card_Click_Trade_Now",
  CARD_CLICK_LIQUIDITY = "Card_Click_Liquidity",
  CARD_CLICK_BUILD = "Card_Click_Build",
  BANNER_CLICK_TRADE_NOW = "Banner_Click_Trade_Now",
  LAST_VIEW_AUDIT = "Last_View_Audit",
  LAST_CLICK_X = "Last_Click_X",
  LAST_CLICK_DISCORD = "Last_Click_Discord",
  LAST_CLICK_BLOG = "Last_Click_Blog",
  LAST_CLICK_GITHUB = "Last_Click_Github",
  FOOTER_CLICK_DOCS = "Footer_Click_Docs",
  FOOTER_CLICK_SUPPORT = "Footer_Click_Support",
  FOOTER_CLICK_CAREERS = "Footer_Click_Careers",
  FOOTER_CLICK_X = "Footer_Click_X",
  FOOTER_CLICK_DISCORD = "Footer_Click_Discord",
  FOOTER_CLICK_BLOG = "Footer_Click_Blog",
  FOOTER_CLICK_GITHUB = "Footer_Click_Github",
}
