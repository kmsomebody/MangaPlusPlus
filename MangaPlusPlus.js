// ==UserScript==
// @name         MangaPlusPlus
// @namespace    http://tampermonkey.net/
// @version      1.3.0
// @description  Overhaul for the MangaPlus reader
// @author       Somebody
// @match        https://mangaplus.shueisha.co.jp/*
// @run-at       document-body
// @grant        none
// ==/UserScript==



/* STYLE */
(function (css)
{
    var style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
})(`

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
div[class*="Modal-module_settings"]
{
    background: var(--color-dark-gray) !important;
}
div[class*="Modal-module_modal"]
{
    background-color: #000d !important;
}



/*
 * HEADER
 */
div[class*="Navigation-module_header"]
{
    display: flex !important;
    flex-direction: column !important;
    align-items: stretch !important;
    border-left: 2px solid var(--color-gray) !important;
    z-index: 3 !important;
    position: fixed !important;
    left: unset; right: 0 !important;
    top: 0 !important;
    width: calc(18em + 6px) !important;
    height: calc(100% - 0.6em) !important;
    background: var(--color-dark-gray) !important;
    box-sizing: content-box !important;
    box-shadow: unset !important;
    -webkit-box-shadow: unset !important;
}
.mpp-menu-collapsed div[class*="Navigation-module_header"]
{
    display: none !important;
}
.mpp-no-progress-bar div[class*="Navigation-module_header"]
{
    height: calc(var(--vh, 1vh) * 100) !important;
}


/*
 * MENU BUTTON
 */
.mpp-expand 
{
    position: absolute;
    display: none;
    right: 8px;
    top: 8px;
    z-index: 4;
    background: var(--color-dark-gray);
    border: 1px solid var(--color-gray);
    padding: 0.5em 0.75em;
    border-radius: 8px;
    opacity: 0.5;
    cursor: pointer;
}
.mpp-expand:hover 
{
    opacity: 1;
}
.mpp-menu-collapsed .mpp-expand
{
    display: block;
}


/*
 * HEADER: LOGO AND COLLAPSE
 */
.mpp-collapse 
{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em;
    cursor: pointer;
    border-right: 1px solid var(--color-gray);
}
div[class*="Navigation-module_imageContainer"]
{
    display: flex !important;
    flex-direction: row !important;
    margin: 0 !important;
    flex-grow: 0 !important;
}
div[class*="Navigation-module_imageContainer"] a
{
    flex-grow: 1 !important;
}
div[class*="Navigation-module_imageContainer"] a:hover,
.mpp-collapse:hover
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
    display: block !important;
    flex-direction: row !important;
    align-items: start !important;
    justify-content: flex-start !important;
    flex-grow: 0 !important;
    box-sizing: border-box;
    border-top: 1px solid var(--color-gray) !important;
    padding: 1em !important;
    flex-wrap: wrap !important;
    flex-basis: unset !important;
}
div[class*="Navigation-module_detailContainer"] h1
{
    font-size: 1.2em !important;
    line-height: unset !important;
    padding: 0 !important;
    height: unset !important;
}
div[class*="Navigation-module_detailContainer"] a
{
    display: block !important;
}
div[class*="Navigation-module_chapterTitleWrapper"]
{
    width: 100%;
    padding-right: unset !important;
    display: block;
    margin-top: 8px;
}
p[class*="Navigation-module_chapterTitle"]
{
    width: 100%;
    display: block !important;
    font-size: 1.1em !important;
}
div[class*="Navigation-module_chapterTitleWrapper"]:hover,
div[class*="Navigation-module_detailContainer"] a:hover
{
    opacity: var(--hover-opacity);
}
p[class*="Navigation-module_chapterTitle"]::after
{
    display: none !important;
}
div[class*="SideMenu-module_sideMenu_"] {
    background-color: #000d;
    z-index: 4;
}
div[class*="SideMenu-module_modal_"] {
    background: var(--color-dark-gray) !important;
}
    
/*
 * HEADER: SETTINGS BUTTON
 */
div[class*="Navigation-module_settingsContainer"]
{
    flex-grow: 1 !important;
    border-top: 1px solid var(--color-gray) !important;
    padding: 1em !important;
    flex-basis: unset !important;
}
div[class*="Navigation-module_settingsContainer"]:hover
{
    background-color: var(--color-gray);
}
div[class*="Navigation-module_kebabMenu"]
{
    margin: 0 !important;
    padding: 0 !important;
    width: max-content !important;
}
div[class*="Navigation-module_kebabMenu"]::before
{
    content: "Settings...";
    margin-right: 1em;
    font-size: 1em;
    font-weight: normal;
}
div[class*="Navigation-module_circle"]
{
    display: none !important;
}

/*
 * COMMENTS
 */
div.mpp-comments
{
    border-top: 1px solid var(--color-gray);
}
div.mpp-comments a
{
    display: block;
    padding: 1em;
    font-weight: normal;
}
div.mpp-comments a:hover
{
    background-color: var(--color-gray);
}

/*
 * CUSTOM SETTINGS
 */
div.mpp-settings
{
    border-top: 1px solid var(--color-gray);
    padding: 1em;
    flex-grow: 99999;
    overflow-y: scroll;
}
div.mpp-settings h2
{
    font-size: 1em;
    margin-bottom: 1em;
    font-weight: normal;
    animation: unset !important;
    -webkit-animation: unset !important;
    text-shadow: unset !important;
    text-transform: unset !important;
    margin-top: 0 !important;
    font-family: Roboto,Sans-Serif;
    color: #fff;
}

div.mpp-settings p
{
    color: #ccc;
    background: #0004;
    border: 1px solid var(--color-gray);
    border-radius: 8px;
    padding: 0.75em 1em;
    margin-top: 0.5em;
    display: block;
    font-weight: normal;
    cursor: pointer;
    font-size: 0.9em;
    user-select: none;
}

div.mpp-settings p:hover
{
    background-color: var(--color-gray);
}
div.mpp-nav
{
    display: flex;
    flex-direction: row;
    align-items: stretch;
    border-top: 1px solid var(--color-gray);
}

div.mpp-nav-btn
{
    width: 50%;
    flex-grow: 1;
    text-align: center;
    padding: 2em;
    cursor: pointer;
    user-select: none;
}
div.mpp-nav-btn:first-child
{
    border-right: 1px solid var(--color-gray);
}
div.mpp-nav-btn:hover
{
    background-color: var(--color-gray);
}
.mpp-disabled,
.mpp-disabled:hover
{
    color: var(--color-dark-gray) !important;
    background-color: var(--color-gray-lt) !important;
    cursor: default;
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
    display: none !important;
}


/*
 * FOOTER
 */
div[class*="Viewer-module_footer"]
{
    height: 0.6em !important;
    bottom: 0 !important;
    z-index: 4 !important;
    position: relative !important;
    background-color: var(--color-gray) !important;
    padding: 0;
    position: relative;
}
div[class*="Viewer-module_footer"] div[class*="Viewer-module_container"]
{
    margin-top: 0;
}
div[class*="Viewer-module_slider"]
{
    width: 100% !important;
    left: 0 !important;
}
.mpp-no-progress-bar div[class*="Viewer-module_footer"]
{
    display: none !important
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
 * HIDE COMMENTS
 */
div[class*="Viewer-module_container"] a
{
    display: none !important;
}


/*
 * IMAGE CONTAINER
 */
div[class*="Viewer-module_viewerContainer"]
{
    height: calc(var(--vh, 1vh) * 100 - 0.6em) !important;
    width: calc(100% - 18em - 8px) !important;
}
.mpp-menu-collapsed div[class*="Viewer-module_viewerContainer"]
{
    width: 100vw !important;
}
.mpp-no-progress-bar div[class*="Viewer-module_viewerContainer"]
{
    height: calc(var(--vh, 1vh) * 100) !important;
}
.mpp-alt-nav img.zao-image
{
    cursor: pointer !important;
}
`);



(function()
{
    /*
     * Class that checks against a condition
     */
    class MppEnabledCondition
    {
        constructor(enabledCondition, expectedResult)
        {
            this.name = enabledCondition;
            this.expectedResult = expectedResult;
        }

        isEnabled()
        {
            var result = window.localStorage[this.name];
            return result == this.expectedResult;
        }
    }


    /*
     * Class that represents an option in the sidebar
     */
    class MppAdvancedOption
    {
        constructor(name, enabledCondition, options, disabledIndex, defaultIndex, delegate = () => {})
        {
            this.name = name;
            this.id = "mpp-" + name.toLowerCase().replace(/ /g, '-');
            this.valueId = this.id + "-value";
            this.options = options;
            this.disabledOption = disabledIndex;
            this.defaultOption = defaultIndex;
            this.currentOption = parseInt(window.localStorage[this.id]) || this.defaultOption;
            this.enabledCondition = enabledCondition;
            this.element = null;
            this.valueElement = null;
            this.delegate = delegate;
        }

        initHtml(parent)
        {
            // Create html
            var enabled = this.canBeChanged();
            var html = document.createElement("p");
            html.id = this.id;
            html.className = enabled ? "" : "mpp-disabled";
            html.innerHTML = `${this.name}: <span id="${this.valueId}">${this.getValue()}</span>`;

            // Set elements
            this.element = parent.appendChild(html);
            this.valueElement = document.getElementById(this.valueId);
        }

        canBeChanged()
        {
            return this.enabledCondition ? this.enabledCondition.isEnabled() : true;
        }

        getValue()
        {
            return this.options[this.canBeChanged() ? this.currentOption : this.disabledOption];
        }

        update()
        {
            this.element.className = this.canBeChanged() ? "" : "mpp-disabled";
            this.valueElement.innerHTML = this.getValue();
            this.delegate();
        }

        next()
        {
            this.currentOption = (this.currentOption + 1) % this.options.length;
            window.localStorage[this.id] = this.currentOption;
        }
    }


    /*
     * Class that collects and updates options
     */
    class MppAdvancedOptionCollection
    {
        constructor()
        {
            this.options = [];
        }

        addOption(option)
        {
            this.options.push(option);
            this[option.name] = option;
        }

        update()
        {
            for (var i = 0; i < this.options.length; ++i)
            {
                this.options[i].update();
            }
        }

        getOption(name)
        {
            return this[name];
        }

        initHtml(parent)
        {
            var settingsElement = (function()
                                   {
                var html = document.createElement("div");
                html.className = "mpp-settings";
                html.innerHTML = "<h2>Advanced Options</h2>";
                return parent.appendChild(html);
            })();

            var self = this;
            var onclick = function()
            {
                if (this.canBeChanged())
                {
                    this.next();
                    self.update();
                }
            };

            for (var i = 0; i < this.options.length; ++i)
            {
                var option = this.options[i];
                option.initHtml(settingsElement);
                option.element.addEventListener("click", onclick.bind(option));
            }

            this.update();
        }
    };



    /* Key event */
    function keyEvent(key)
    {
        var e = new KeyboardEvent("keydown",
        {
            code : key,
            key: key
        });
        document.dispatchEvent(e);
    }

    /* Removes a class from an element */
    function mppRemoveClass(element, className)
    {
        if (element.className.includes(className))
        {
            element.className = element.className.replace(" " + className, "");
            return true;
        }

        return false;
    }

    /* Adds a class to an element */
    function mppAddClass(element, className)
    {
        if(!element.className.includes(className))
        {
            element.className += " " + className;
            return true;
        }

        return false;
    }

    /* Add or remove class from root, depending on condition */
    function mppSetConditionalClass(element, condition, className)
    {
        return condition ? mppAddClass(element, className) : mppRemoveClass(element, className);
    }

    /* Add or remove class from root, depending on condition */
    function mppSetConditionalRootClass(condition, className)
    {
        return mppSetConditionalClass(document.getElementById("app"), condition, className);
    }

    /* Recursively search for element with class that contains a certain string */
    function mppGetElementByPartialClassName(element, className)
    {
        if (element.className.includes(className))
        {
            return element;
        }

        for (var i = 0; i < element.children.length; ++i)
        {
            var found = mppGetElementByPartialClassName(element.children[i], className);
            if (found)
            {
                return found;
            }
        }

        return null;
    }

    /* Init html */
    function mppInitHtml(header)
    {
        // Initial menu state
        try {
            const collapsed = window.localStorage.getItem("mpp-menu-collapsed") === "1";
            mppSetConditionalRootClass(collapsed, "mpp-menu-collapsed");
            if (collapsed) {                
                window.dispatchEvent(new Event('resize'));
            }
        } catch { }

        // Expand menu
        const htmlExpand = document.createElement("div");
        htmlExpand.className = "mpp-expand";
        htmlExpand.innerHTML = "&#9776;";
        htmlExpand.onclick = () => {
            mppSetConditionalRootClass(false, "mpp-menu-collapsed");
            localStorage.setItem("mpp-menu-collapsed", "0");
            window.dispatchEvent(new Event('resize'));
        }
        header.parentElement.appendChild(htmlExpand);

        // Collapse menu
        const htmlCollapse = document.createElement("div");
        htmlCollapse.className = "mpp-collapse";
        htmlCollapse.innerHTML = "&#187;";
        htmlCollapse.onclick = () => {
            mppSetConditionalRootClass(true, "mpp-menu-collapsed");
            localStorage.setItem("mpp-menu-collapsed", "1");
            window.dispatchEvent(new Event('resize'));
        }
        header.firstChild.insertBefore(htmlCollapse, header.firstChild.firstChild);

        // Comment link
        const htmlComments = document.createElement("div");
        htmlComments.className = "mpp-comments";
        htmlComments.innerHTML = `<a href="/comments/${window.location.pathname.split('/').at(2)}">Comments</a>`;
        header.appendChild(htmlComments);

        // Settings
        mppSettings.initHtml(header);

        // Navigation buttons
        const htmlNav = document.createElement("div");
        htmlNav.className = "mpp-nav";
        htmlNav.innerHTML = `<div id="mpp-nav-left" class="mpp-btn mpp-nav-btn ${READ_HORIZONTAL.isEnabled() ? "" : "mpp-disabled"}">Next</div>
                             <div id="mpp-nav-right" class="mpp-btn mpp-nav-btn ${READ_HORIZONTAL.isEnabled() ? "" : "mpp-disabled"}">Previous</div>`;
        header.appendChild(htmlNav);

        document.getElementById("mpp-nav-left").addEventListener("click", function(e)
        {
            if(READ_HORIZONTAL.isEnabled())
            {
                keyEvent("ArrowLeft");
            }
        });

        document.getElementById("mpp-nav-right").addEventListener("click", function(e)
        {
            if(READ_HORIZONTAL.isEnabled())
            {
                keyEvent("ArrowRight");
            }
        });

        // Go forward on image click
        document.getElementsByClassName("zao")[0].addEventListener("click", function(e)
        {
            if (mppSettings[MPP_ALT_NAV].getValue() == "On")
            {
                e.stopPropagation();

                if (e.target.className == "zao-image")
                {
                    keyEvent("ArrowLeft");
                }
            }
        }, true);
    }

    function mppInitApp()
    {
        if (mppLoadedUrl === window.location.href )
        {
            return;
        }

        mppLoadedUrl = window.location.href;
        if (!window.location.href.includes("mangaplus.shueisha.co.jp/viewer/"))
        {
            return;
        }

        // Look for header until it's found and then initialize it
        var interval = setInterval(function()
        {
            var header = mppGetElementByPartialClassName(document.getElementById("app"), "Navigation-module_header");
            if (header)
            {
                clearInterval(interval);
                mppInitHtml(header);
            }
        }, 50);
    }





    /*
     * Constants
     */
    const MPP_ALT_NAV = "Alt Navigation";
    const MPP_SHOW_PROG = "Progress Bar";
    const READ_HORIZONTAL = new MppEnabledCondition("viewerMode", "horizontal"); // Reading mode condition


    var mppLoadedUrl = null;


    /* Settings */
    var mppSettings = (function()
    {
        var settings = new MppAdvancedOptionCollection();
        settings.addOption(new MppAdvancedOption(MPP_ALT_NAV, READ_HORIZONTAL, ["Off", "On"], 0, 1, function()
        {
            mppSetConditionalRootClass(mppSettings[MPP_ALT_NAV].getValue() == "On", "mpp-alt-nav");
        }));
        settings.addOption(new MppAdvancedOption(MPP_SHOW_PROG, READ_HORIZONTAL, ["Off", "On"], 0, 1, function()
        {
            if (mppSetConditionalRootClass(settings.getOption(MPP_SHOW_PROG).getValue() == "Off", "mpp-no-progress-bar"))
            {
                window.dispatchEvent(new Event('resize'));
            }
        }));

        return settings;
    })();



    /* HTML */
    window.addEventListener("load", mppInitApp);

    window.addEventListener("popstate", mppInitApp);

    // Allow context menu
    window.addEventListener("contextmenu", e => {
        e.stopPropagation();
    }, true);

    // Allow middle mouse scrolling
    document.addEventListener("mousedown", function(e)
    {
        if (e && (e.which == 2 || e.button == 4 ))
        {
            e.stopPropagation();
        }
    }, true);

    // Allow page refresh
    document.addEventListener("keydown", function(e)
    {
        if (e.key == "BrowserRefresh" || e.key == "F5" || e.key == "F11")
        {
            e.stopPropagation();
        }
    }, true);

    // Refresh UI
    document.addEventListener("click", function(e)
    {
        if (mppLoadedUrl)
        {
            setTimeout(() =>
            {
                if (mppLoadedUrl != window.location.href)
                {
                    mppInitApp();
                    return;
                }

                mppSettings.update();
                mppSetConditionalClass(document.getElementById("mpp-nav-left"), !READ_HORIZONTAL.isEnabled(), "mpp-disabled");
                mppSetConditionalClass(document.getElementById("mpp-nav-right"), !READ_HORIZONTAL.isEnabled(), "mpp-disabled");
            }, 500);
        }
    }, true);

})();
