---
layout: page
title: How to add a carousel to post
permalink: /contributing/04-add-carousel-to-post

image:
  path: assets/images/default/default-contributing-thumbnail.png
  alt: A series of engineers of all factions are assisting to upgrade a Cybran land factory.
---

## Brief
Addding the carousel container is simple to do as it is set up as a include file so from the psot side of thing you dont need to touch any of that code by desgin.

## Setting the frontmatter

first thing to do is to set up the collection of images that are going to be use on the carosel. the perk of this is the way it is formated 


In the front matter need to start with a `carousels:` this alows us to add mutiple sets of images.

```
carousels:
```

to create a set of we have to add the `- images`
```
carousels:
    - images:
```

adding the images to set set we jsut have to start with `- image:` and then the `Path` of the image

```
carousels:
    - images:
        - image: assets/images/2025/winter-slider/test1.png
        - image: assets/images/2025/winter-slider/test2.png
        - image: assets/images/2025/winter-slider/test3.jpg
        - image: assets/images/2025/winter-slider/test4.png
        - image: assets/images/2025/winter-slider/test5.png
```

this now create the set of images that will be used.

## Adding the Include line

to use the images we have jsut set up we now need to add the single inlude line.

```
{% include slider.html height="50" unit="%" duration="7" number="1" %}
```

to breack down this line is the follwoing.
- **include slider.html**: This is to ensure that we are pulling in the carocell code.
- **height**: this is were we can set the height of the carocsel
- **unit**: this is the unit of mesurement that were using for the hight mesurement
- **duration**: how long each image get befoer moving on.
- **number**: the set number of images if thier is more than once carosell on the page. 

And one this is all set is done and you have a working carocell on you page.