var contextMenuItem = {
  id: "GetDoi",
  title: "get doi: %s",
  contexts: ["selection"],
};

chrome.contextMenus.create(contextMenuItem);
 
chrome.contextMenus.onClicked.addListener((info, tab) => {
   chrome.tabs.sendMessage(tab.id, {text: info.selectionText}, response => {
    console.log(response.data);
  });
});
 