mergeInto(LibraryManager.library, {
    LoadIframe: function() {
        var iframe = document.createElement('iframe');
        iframe.src="https://www.youtube.com/embed/AK9BPC5Qosc";
        iframe.style.position = "absolute";
        iframe.style.top = "0px";
        iframe.style.left = "0px";
        iframe.style.width = "1280px";
        iframe.style.height = "720px";
        iframe.style.zIndex = "0";

        document.body.insertBefore(iframe, document.body.childNodes[0]);

        var gameContainer = document.getElementsByClassName("webgl-content")[0];
        gameContainer.style.position = "absolute";
        gameContainer.style.top = "0px";
        gameContainer.style.left = "0px";
        gameContainer.style.width = "1280px";
        gameContainer.style.height = "720px";
        gameContainer.style.zIndex = "1";
  },
});
