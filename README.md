# MangaPlusPlus
This is a simple user script that improves the [MangaPlus](https://mangaplus.shueisha.co.jp) reader to make it an overall better experience.

## Features
- Removes the red, obtrusive menu bars and shadows at the top and bottom of the page
- Adds a sidebar (with options and navigation buttons in horizontal mode only)
- Enables basic browser functions like right-click and page refresh, that are blocked by MangaPlus

![MangaPlusPlus Preview](/Images/preview.png)


## Compatibility
Tested on Firefox 73 with Tampermonkey.  
It should work with other browsers and script managers as well, but hasn't been tested.

## Installation
1. Install [Tampermonkey](https://www.tampermonkey.net/)
2. Open Tampermonkey and go to "Utilities". Install the script from this URL: 
    * `https://raw.githubusercontent.com/DarthSomebody/MangaPlusPlus/master/MangaPlusPlus.js`

## Advanced Options
These options currently only work in horizontal reading mode.

#### Alternate Navigation
* **On**: Go to next page when clicking on the image.
* **Off**: Go to the next page by clicking on the left area of the reader and the previous page by clicking on the right area. The middle area will do nothing.

#### Show Progress Bar
* **On**: Displays the progress bar at the bottom of the page.
* **Off**: Hides the progress bar.

## Planned Features
* Show page number in sidebar
* Integrate main settings into sidebar
* More navigation modes
* Collapsing sidebar
* Fullscreen button

If you have any suggestions, feel free to [open an issue](https://github.com/DarthSomebody/MangaPlusPlus/issues/new).
