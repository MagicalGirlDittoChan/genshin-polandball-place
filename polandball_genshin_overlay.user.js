// ==UserScript==
// @name         Polandball+Genshin overlay
// @namespace    https://reddit.com/r/polandball
// @version      0.0.2
// @description  This script made possibe by: https://github.com/r-PlaceTux/Overlay AND https://gitlab.com/alifurkany/overlayify
// @author       r/polandball
// @downloadURL  https://github.com/MagicalGirlDittoChan/genshin-polandball-place/raw/main/polandball_genshin_overlay.user.js
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// @license      GPL-3.0
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
        document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
            (function () {
                const i = document.createElement("img");
                i.src = "https://www.dropbox.com/s/0o6u1a0771qfd6d/overlay.png?raw=1";
                i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;";
                console.log(i);
                return i;
            })())
    }, false);
}
