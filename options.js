// Saves options to chrome.storage
function saveOptions() {
    debugger;
    const rulesString = document.getElementById("txtRules").value;
    let rules = rulesString.split("/");
    rules.map(rule => rule.replace(/^[\s]+/, "").replace(/[\s]+$/, ""));
    chrome.storage.local.set({ "rules": rules });

    // TODO: Trim off whitespace from beginning and end of each.

    //let message = document.getElementById('customMessage').value;
    //chrome.storage.sync.set({
    //    customMessage: message
    //}, function () {
    //    // Update status to let user know options were saved.
    //    let status = document.createElement('div');
    //    status.textContent = 'Options saved.';
    //    document.body.appendChild(status);
    //    setTimeout(function () {
    //        status.remove();
    //    }, 1000);
    //});
}

// Restores options from chrome.storage
function restoreOptions() {
    debugger;
    document.getElementById("txtRules").value = "https://www.example.com";
    chrome.storage.local.get("rules", function (rules) {
        if (rules) {
            const rulesString = rules.join("\n");
            document.getElementById("txtRules").value(rulesString);
        }        
    });
    //chrome.storage.sync.get('customMessage', function (items) {
    //    document.getElementById('customMessage').value = items.customMessage || 'Default message';
    //});
}

// Event listeners
document.getElementById("btnSave").addEventListener("click", saveOptions);
document.addEventListener('DOMContentLoaded', restoreOptions);