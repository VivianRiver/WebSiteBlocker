(function () {
    "use strict";

    const messageHtml = "<div style='font-size:24px; margin-top:50px;'>Service Unavailable.</div><div></div>"

    const blockedUrls =
        ["r/conservative", "breitbart.com", "dailymail.co.uk", "michaelsavage.com", "michaelsavage.wnd.com", "reddit.com"];

    const url = window.location;
    console.log(`Navigated to ${url}`);
    if (url) {
        const urlString = url.toString().toLowerCase();
        const blocked = blockedUrls
            .map((url) => url.toLowerCase())
            .some((url) => urlString.indexOf(url) >= 1);                
        if (blocked) {
            document.documentElement.innerHTML = messageHtml;

            document.body.innerHtml = messageHtml;

            /*window.location = "replacement.html";*/

            window.location.href = chrome.runtime.getURL("replacement.html");

            console.log("blocked");
        } else {
            console.log("allowed");
        }
    } else {
        console.log("no url");
    }

    console.log("done");
    
}());

console.log('This script runs on every page!');
