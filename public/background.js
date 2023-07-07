chrome.windows.getCurrent(function (currentWindow) {
    chrome.windows.update(currentWindow.id, { state: "maximized", width: '1000px', innerHeight: screen.availHeight });
});