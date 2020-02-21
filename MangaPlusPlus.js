// ==UserScript==
// @name         MangaPlusPlus
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Overhaul for the MangaPlus reader
// @author       Somebody
// @match        https://mangaplus.shueisha.co.jp/*
// @run-at       document-start
// ==/UserScript==


/* Remove annoying shadow */
(function()
{
    var style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = `


/*
 * FIX FOR BACKGROUND COLOR ON FIRST PAGE
 */
.zao-surface
{
    background-color: transparent !important;
}


/*
 * SETTINGS
 */
div[class*="Modal-module_modal"]
{
    z-index: 5 !important;
}


/*
 * CHAPTER LIST
 */
div[class*="SideMenu-module_sideMenu"]
{
    top: 0 !important;
}


/*
 * HEADER
 */
div[class*="Navigation-module_header"]
{
    border-left: 2px solid var(--color-gray) !important;
    z-index: 3 !important;
    display: block !important;
    position: fixed !important;
    left: unset; right: 0 !important;
    top: 0 !important;
    width: calc(18em + 6px) !important;
    height: calc(100% - 10px) !important;
    background-color: var(--color-dark-gray) !important;
    box-sizing: content-box !important;
    box-shadow: unset !important;
    -webkit-box-shadow: unset !important;
}


/*
 * HEADER: LOGO
 */
div[class*="Navigation-module_imageContainer"]
{
    margin: 0 !important;
    border-bottom: 1px solid var(--color-gray) !important;
}
div[class*="Navigation-module_imageContainer"]:hover
{
  background-color: var(--color-gray) !important;
}
img[class*="Navigation-module_logo"]
{
    margin: 0 auto !important;
    padding: 20px 0 !important;
    display: block !important;
}


/*
 * HEADER: SERIES TITLE AND CHAPTER
 */
div[class*="Navigation-module_detailContainer"]
{
    display: inline-block !important;
    padding: 0 !important;
    margin: 1.5em 2em !important;
    box-sizing: border-box;
    width: 12em !important;
}
div[class*="Navigation-module_detailContainer"] h1
{
    padding: 0 !important;
    height: unset !important;
}
div[class*="Navigation-module_detailContainer"] a
{
    display: block !important;
}
div[class*="Navigation-module_chapterTitleWrapper"]:hover,
div[class*="Navigation-module_detailContainer"] a:hover
{
    opacity: var(--hover-opacity);
}
div[class*="Navigation-module_chapterTitleWrapper"]
{
    margin-top: 16px !important;
}


/*
 * HEADER: SETTINGS BUTTON
 */
div[class*="Navigation-module_settingsContainer"]
{
    display: inline-block !important;
    vertical-align: top !important;
    margin: 1.5em 0.5em 0px 0.5em !important;
}
div[class*="Navigation-module_kebabMenu"]
{
    margin: 0 !important;
    padding: 0 0.5em !important;
}
div[class*="Navigation-module_circle"]
{
    margin: 0 0 4px 0 !important;
    width: 6px !important;
    height: 6px !important;

}


/*
 * PAGE NUMBER
 */
p[class*="Viewer-module_pageNumber"]
{
    font-size: 1em !important;
    position: fixed !important;
    bottom: calc(10px + 1em) !important;
    width: calc(18em + 6px) !important;
    right: 0 !important;
    line-height: unset !important;
}


/*
 * FOOTER
 */
div[class*="Viewer-module_footer"]
{
    height: 10px !important;
    bottom: 0 !important;
    z-index: 4 !important;
    position: relative !important;
    background-color: var(--color-gray) !important;
}
div[class*="Viewer-module_slider"]
{
    width: 100% !important;
    left: 0 !important;
}


/*
 * FOOTER: SLIDER COLOR
 */
.zao-slider-button::before
{
    background-color: var(--color-black) !important;
}
.zao-slider-button,
.zao-slider-bar-previous
{
    background-color: var(--color-gray-lt) !important;
}
.zao-slider-bar-next
{
    background-color: var(--color-gray) !important;
}


/*
 * IMAGE CONTAINER
 */
div[class*="Viewer-module_viewerContainer"]
{
    height: calc(var(--vh, 1vh) * 100 - 10px) !important;
    width: calc(100% - 18em - 8px) !important;
}

`;
    document.head.appendChild(style);
})();
