let activeTabUrl = '';
let startTime = 0;

chrome.tabs.onActivated.addListener(async (activeInfo) => {
  await trackTime();
  const tab = await chrome.tabs.get(activeInfo.tabId);
  activeTabUrl = new URL(tab.url).hostname;
  startTime = Date.now();
});

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (tab.active && changeInfo.status === 'complete') {
    await trackTime();
    activeTabUrl = new URL(tab.url).hostname;
    startTime = Date.now();
  }
});

async function trackTime() {
  if (!activeTabUrl || !startTime) return;

  const timeSpent = Math.floor((Date.now() - startTime) / 1000);
  const data = await chrome.storage.local.get(["usage"]);
  const usage = data.usage || {};
  usage[activeTabUrl] = (usage[activeTabUrl] || 0) + timeSpent;
  await chrome.storage.local.set({ usage });

  startTime = 0;
}
