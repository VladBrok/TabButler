import { TabData } from "./types";

export const COMMANDS = {
  TOGGLE_TAB_SEARCH: "toggle-tab-search",
};

export const MESSAGES = {
  TOGGLE_SEARCH: "toggle-search",
};

export async function getCurrentTab() {
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true }); // what is the difference between currentWindow and lastFocused?
  return tab;
}

export async function getTabsInCurrentWindow() {
  let tabs = await chrome.tabs.query({ currentWindow: true });
  console.log(tabs)
  return tabs
    .filter((tab) => {
        // will all pages have a title?
      return (
        tab.id &&
        tab.id !== chrome.tabs.TAB_ID_NONE &&
        tab.url
      );
    })
    .map(({ id, favIconUrl, index, title, url }) => {
      // we know that these properties will be present
      const tabData: TabData = {
        tabId: id!,
        favIcon: favIconUrl || null,
        tabTitle: title || null,
        tabIndex: index!,
        tabUrl: url!,
        // muted info
      };
      return tabData;
    });
}
