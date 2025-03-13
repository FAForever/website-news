---
layout: page
title: How we use IcoMoon
permalink: /contributing/icomoon

image:
  path: assets/images/default/default-contributing-thumbnail.png
  alt: A series of engineers of all factions are assisting to upgrade a Cybran land factory.
---

# IcoMoon

IcoMoon is a tool to turn a collection of icons into a font. You can then access them by giving an HTML tag the correct class. 

## Add new icons

You can use the [app of IcoMoon](https://icomoon.io/app/) to add new icons. Take the following steps in the app:

- 1) Import the current set of icons. You can find this in the [config](https://github.com/Garanas/Newshub/tree/main/config) folder. 
- 2) Update the selection of icons.
- 3) Generate the font and download the result.

The download is a zip file. Unpack the zip file. Inside the folder of the unpacked zip file you'll find various files and folders. Take the following steps to update the selection of the website:

- 1) Move the content of the fonts folder into the [fonts](https://github.com/Garanas/Newshub/tree/main/assets/fonts) folder of the repository. Override existing fonts with the same name.
- 2) Open the `style.css` file. Copy all `.icon-XYZ:before` classes that are at the bottom of the file. Overwrite all existing classes from the [_icomoon.scss](https://github.com/Garanas/Newshub/tree/main/_sass/_icomoon.scss) file. 
- 3) rename the `selection.json` file to `icomoon.json` and overwrite the `icomoon.json` file in the [config](https://github.com/Garanas/Newshub/tree/main/config) folder.

As a sanity check: the git diff of the [_icomoon.scss](https://github.com/Garanas/Newshub/tree/main/_sass/_icomoon.scss) should represent the changes made via the [app of IcoMoon](https://icomoon.io/app/).

## Reasoning

IcoMoon is used for two reasons:

- Convenience: IcoMoon has an extensive icon library and we can cherry-pick what we need. The website provides a convenient interface to select your icons.
- Performance: All icons are bundled into one asset (the font). The browser therefore can retrieve all icons with just a single HTTP call.

## References

- https://icomoon.io/

## FAQ

> Why don't we use an account to use the Quick Usage service of IcoMoon?

Because we do not want to throw around the credentials of it for every change of the icon set.