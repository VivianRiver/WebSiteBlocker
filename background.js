//chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
//    if (changeInfo.status == 'complete') {
//        // Maybe do something here if you want to react when a page finishes loading
//    }
//    console.log(`tab onUpdated ${changeInfo.status}`);

//});

//(function () {
//    "use strict";

//    const messageHtml = "<div style='font-size:24px; margin-top:50px;'>Service Unavailable.</div><div></div>"
        

//    const blockedUrls =
//        ["r/conservative", "breitbart.com", "dailymail.co.uk", "michaelsavage.com"];

//    chrome.webRequest.onBeforeRequest.addListener(
//        function (details) {
//            const urlString = details.url.toLowerCase();
//            const blocked = blockedUrls
//                .map((url) => url.toLowerCase())
//                .some((url) => urlString.indexOf(url) >= 1);
//            if (blocked) {                
//                console.log(`${url} blocked`);
//                return {
//                    redirectUrl: chrome.runtime.getURL("replacement.html")
//                };
//            } else {
//                console.log(`${url} allowed`);
//            }            
//        },
//        { urls: ["<all_urls>"] },
//        ["blocking"]
//    );

//}());