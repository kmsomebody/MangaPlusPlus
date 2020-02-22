// ==UserScript==
// @name         MangaPlusPlus
// @namespace    http://tampermonkey.net/
// @version      1.1.2
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
    style.type = "text/css";
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
    background-color: var(--color-dark-gray) !important;
    box-sizing: content-box !important;
    box-shadow: unset !important;
    -webkit-box-shadow: unset !important;
}
.mpp-no-progress-bar div[class*="Navigation-module_header"]
{
    height: calc(var(--vh, 1vh) * 100) !important;
}


/*
 * HEADER: LOGO
 */
div[class*="Navigation-module_imageContainer"]
{
    margin: 0 !important;
    flex-grow: 0 !important;
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
    display: flex !important;
    flex-direction: row !important;
    align-items: baseline !important;
    justify-content: space-between !important;
    flex-grow: 0 !important;
    box-sizing: border-box;
    border-top: 1px solid var(--color-gray) !important;
    padding: 1.5em 2em !important;
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
p[class*="Navigation-module_chapterTitle"]
{
    font-size: 1.1em !important;
}
div[class*="Navigation-module_chapterTitleWrapper"]:hover,
div[class*="Navigation-module_detailContainer"] a:hover
{
    opacity: var(--hover-opacity);
}
p[class*="Navigation-module_chapterTitle"]::after
{
    display: inline-block !important;
    position: relative !important;
    right: unset !important;
    bottom: 4px !important;
    margin-left: 0.5em;
}


/*
 * HEADER: SETTINGS BUTTON
 */
div[class*="Navigation-module_settingsContainer"]
{
    flex-grow: 0 !important;
    border-top: 1px solid var(--color-gray) !important;
    padding: 1.5em 2em !important;
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
 * CUSTOM SETTINGS
 */
div.mpp-settings
{
    border-top: 1px solid var(--color-gray);
    padding: 1.5em 2em;
    flex-grow: 99999;
    overflow-y: scroll;
}
div.mpp-settings h2
{
    font-size: 1em;
    margin-bottom: 1em;
    font-weight: normal;
}

div.mpp-settings p
{
    border: 1px solid var(--color-gray);
    padding: 0.75em 1em;
    margin-top: 0.5em;
    display: block;
    font-weight: lighter;
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
    color: var(--color-dark-gray);
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
 * IMAGE CONTAINER
 */
div[class*="Viewer-module_viewerContainer"]
{
    height: calc(var(--vh, 1vh) * 100 - 0.6em) !important;
    width: calc(100% - 18em - 8px) !important;
}
.mpp-no-progress-bar div[class*="Viewer-module_viewerContainer"]
{
    height: calc(var(--vh, 1vh) * 100) !important;
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
            var onclick = function(e)
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
        return condition ? mppRemoveClass(element, className) : mppAddClass(element, className);
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
        // Settings
        mppSettings.initHtml(header);

        // Navigation buttons
        var htmlNav = document.createElement("div");
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
    }



    /*
     * Constants
     */
    const MPP_ALT_NAV = "Alternate Navigation";
    const MPP_SHOW_PROG = "Show Progress Bar";
    const READ_HORIZONTAL = new MppEnabledCondition("viewerMode", "horizontal"); // Reading mode condition



    /* Settings */
    var mppSettings = (function()
    {
        var settings = new MppAdvancedOptionCollection();
        settings.addOption(new MppAdvancedOption(MPP_ALT_NAV, READ_HORIZONTAL, ["Off", "On"], 0, 1));
        settings.addOption(new MppAdvancedOption(MPP_SHOW_PROG, READ_HORIZONTAL, ["Off", "On"], 0, 1, function()
        {
            if (mppSetConditionalRootClass(settings.getOption(MPP_SHOW_PROG).getValue() == "On", "mpp-no-progress-bar"))
            {
                window.dispatchEvent(new Event('resize'));
            }
        }));

        return settings;
    })();



    /* HTML */
    document.addEventListener("DOMContentLoaded", function()
    {
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
    });



    /* Events */
    window.addEventListener("load", function()
    {
        // Refresh UI
        document.addEventListener("click", function(e)
        {
            setTimeout(() =>
            {
                mppSettings.update();
                mppSetConditionalClass(document.getElementById("mpp-nav-left"), READ_HORIZONTAL.isEnabled(), "mpp-disabled");
                mppSetConditionalClass(document.getElementById("mpp-nav-right"), READ_HORIZONTAL.isEnabled(), "mpp-disabled");
            }, 500);
        }, true);

        // Go forward on image click
        document.getElementsByClassName("zao")[0].addEventListener("click", function(e)
        {
            if (mppSettings[MPP_ALT_NAV].getValue() == "On")
            {
                e.stopPropagation();

                if (e.target.className == "zao-image")
                {
                    console.log("image clicked");
                    keyEvent("ArrowLeft");
                }
            }
        }, true);

        // Allow context menu
        window.addEventListener("contextmenu", function(e)
                                {
            e.stopPropagation();
        }, true);

    }, false);

})();
