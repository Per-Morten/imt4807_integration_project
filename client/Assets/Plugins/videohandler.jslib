mergeInto(LibraryManager.library, {
    LoadIframe: function (url) {
        // Set absolute position to ensure iframe and gameContainer is on top of each other
        let gameContainer = document.getElementById("gameContainer");
        gameContainer.style.position = "absolute";
        gameContainer.style.opacity = "0.5";
        gameContainer.style.zIndex = "1";

        let iframe = document.createElement("iframe");
        iframe.src = Pointer_stringify(url);
        iframe.style.position = gameContainer.style.position;
        iframe.style.top = gameContainer.style.top;
        iframe.style.left = gameContainer.style.left;
        iframe.style.width = gameContainer.style.width;
        iframe.style.height = gameContainer.style.height;
        iframe.style.border = "0";
        iframe.style.margin = "0";
        iframe.style.padding = "0";
        iframe.style.zIndex = "0";

        document.body.insertBefore(iframe, document.body.childNodes[0]);
    },
});
