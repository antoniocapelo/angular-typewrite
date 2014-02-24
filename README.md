AngularJS-Typewrite
===================

## Description
AngularJS directive that simulates the effect of typing on a text editor - with a blinking cursor.

This directive works as an attribute to any HTML element, and it lets customize the speed/delay of its animations.


##How to use

Just add the desired text to the 'text' attribute of the element and the directive takes care of the rest.

##Preferences

The following default values can be changed:

* initial delay: set an 'initial-delay' property for the element 
* typing speed: set a 'typing-delay' property for the element
* specify cursor : set a 'cursor' property for the element, specifying which cursor to use
* turn off cursor blinking speed: set the 'blink-cursor' property  to "false"
* cursor blinking speed: set a 'blink-delay' property for the element

**Note:** Each time/delay value should be set either on seconds (1s) or milisseconds (1000)

##Dependencies
This directives only depends on the CSS file provided (typewriter-styles.css) in order to replicate the cursor blinking effect.

## Demo

I created a [Codepen Demo](http://codepen.io/capelo/pen/Bmbgn) to show the directive working with different setups.
