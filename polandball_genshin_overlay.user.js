// ==UserScript==
// @name         The Gacha Alliance r/place Script
// @namespace    http://tampermonkey.net/
// @version      5.1
// @description  The GFL/Va-11 Peppy OGs - Gacha Alliance official userscript
// @downloadURL  https://github.com/MagicalGirlDittoChan/genshin-polandball-place/raw/main/polandball_genshin_overlay.user.js
// @author       soreikomori, LeftHandedBread and every single fellow weeb
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// @license      MIT
// ==/UserScript==

// NOTE: This has been updated to the version used by the gacha alliance! Please see the authors for proper attribution. It is posted here for convenience only.

if (window.top !== window.self) {
    window.addEventListener('load', () => {
        // Load the image
        const image = document.createElement("img");
        image.src = "https://www.dropbox.com/s/jr4crnn654mjxwz/overlay.png?raw=1";
        image.onload = () => {
            image.style = `position: absolute; left: 0; top: 0; width: 2000px; height: 2000px; image-rendering: pixelated; z-index: 1`;
        };
      
        // Add the image as overlay
        const camera = document.querySelector("mona-lisa-embed").shadowRoot.querySelector("mona-lisa-camera");
        const canvas = camera.querySelector("mona-lisa-canvas");
        canvas.shadowRoot.querySelector('.container').appendChild(image);
      
        // Add a style to put a hole in the pixel preview (to see the current or desired color)
        const waitForPreview = setInterval(() => {
            const preview = camera.querySelector("mona-lisa-pixel-preview");
            if (preview) {
              clearInterval(waitForPreview);
              const style = document.createElement('style')
              style.innerHTML = '.pixel { clip-path: polygon(-20% -20%, -20% 120%, 37% 120%, 37% 37%, 62% 37%, 62% 62%, 37% 62%, 37% 120%, 120% 120%, 120% -20%); }'
              preview.shadowRoot.appendChild(style);
            }
        }, 100);
    }, false);
}

