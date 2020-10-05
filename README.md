CONTENTS OF THIS FILE
---------------------

 * INTRODUCTION
 * index.html
 * my-kittens.html
 * gallery.html
 * style.css
 * script.js
 * Web Accessibility Initiative
 * WebAIM


INTRODUCTION
------------

This file generally documented all the modifications that had done based on the assignment 1. 

 * For a full view of this, visit the project page:
   https://yuke-liu-a2.glitch.me/

 * Assignment 1 link, or track changes:
   https://yuke-liu-assignment1.glitch.me/my-kittens.html
   

index.html
----------

  1. Moved my picture from top right into the navigation section. 
  2. Moved self-introduction and schedule into one container, and one article in order to wrap view while user scaling the browsers. 
  3. Added a comment section for user to submit their comment and only shown the latest five comments. 
  4. For all sections had a same container called container in style.css, in order to have a general setting of the webpage.


my-kittens.html
---------------

  1. Moved two kitty image into one container, and one article in order to have the wrap view while user scaling the browser. 
  2. Added a comment section. 
  3. Added picture tag around two images for responsive view on smaller devices. 
  
  
gallery.html
------------

  1. Added a new page called gallery.html
  2. Added control button to show the previous and next image in the gallery.
  3. When image changes, the desciption below the image changes as well. 
  4. Added a comment section. 


style.css
---------
  1. Changed all the different containers in assignment 1 into one general container called "container".
  2. "container" wrap all the content in different sections seperately but with one same basic design. 
  3. In different devices (different width of screen), the background color will change. 
  4. Style of the button had designed to match the website. 
  5. Added hover and active effects on the hyperlinks.
  6. Added hover effect on the images that shown on all three webpages.
  7. When user scale the browser, the content size will change and won't messed up. The images on my-kittens.html had two sizes based on the browser screen size. 
  8. Fonts had changed.
  
  
script.js
---------  

  1. Added function of image gallery slider to gallery.html
  2. Added function to shown latest 5 user input comments to all pages.


Web Accessibility Initiative
----------------------------

 * Page titles are shown differently on differnt pages
 * Images alt had all included. 
 * Contrast ratio see WebAIM section
 * Heading of all the sections are in correct order, as well as the text size
 * Comment can submitted by hit ENTER on keyboard, and all the buttons and hyperlinks can be access with TAB and ENTER 
 * There is not Blinking, Moving or Flashing happened in these pages. 
 * css validation found no errors
 * HTML validation found no errors
 * Accessibility tools:
   https://webaccessibility.com/
   All three pages passes all automated accessibility tests.
 

   
WebAIM
------

* Small devices (phones, 600px and up):
  background-color: #0A4049
  text-color: white
  contrast ratro: 11.39:1
  https://webaim.org/resources/contrastchecker/?fcolor=0A4049&bcolor=FFFFFF

* Medium devices (tablets, 979px and up):
  background-color: #6F5306
  text-color: white
  contrast ratro: 7.2:1
  https://webaim.org/resources/contrastchecker/?fcolor=6F5306&bcolor=FFFFFF

* Large devices (desktops, 960px and up):
  background-color: #4D5B48
  text-color: white
  contrast ratro: 7.22:1
  https://webaim.org/resources/contrastchecker/?fcolor=4D5B48&bcolor=FFFFFF
