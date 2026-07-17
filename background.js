// Clicking the toolbar icon opens Site Scanner in its own tab (no popup),
// prefilled with the origin of the tab that was active when clicked. This
// mirrors how the ACG-State-Switcher extension's Site Inspector opened,
// minus the popup step, since Site Scanner has no other functionality to
// show in a popup.
chrome.action.onClicked.addListener(async (tab) => {
  let startUrl = "";

  try {
    if (tab && tab.url && /^https?:\/\//i.test(tab.url)) {
      startUrl = new URL(tab.url).origin + "/";
    }
  } catch (e) {
    // fall back to Site Scanner's own blank default
  }

  const target = startUrl
    ? chrome.runtime.getURL("site-scanner.html") + "?start=" + encodeURIComponent(startUrl)
    : chrome.runtime.getURL("site-scanner.html");

  chrome.tabs.create({ url: target });
});
