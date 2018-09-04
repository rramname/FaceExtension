//document.getElementById("login").addEventListener("click", Getin);
chrome.runtime.onMessage.addListener(function(tabId, changeInfo, tab) {
  chrome.tabs.executeScript({
    code:'Getin()'
})
 });
