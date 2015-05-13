chrome.webNavigation.onCompleted.addListener(function(page) {
    chrome.tabs.executeScript(details.tabId, {
        code: "console.log(\"123\")"
    });
});