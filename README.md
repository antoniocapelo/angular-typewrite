Angular Typewrite
===================

## Description
AngularJS directive that simulates the effect of typing on a text editor - with a blinking cursor.

This directive works as an attribute to any HTML element, and it changes the speed/delay of its animation.


##Installation
Just clone this repository or do ``bower install angular-typewrite --save``.
After including the **angular-typewrite.js** file on your app, inject it 'angularTypewrite' as a dependency on your AngularJS module:

	angular
		.module('yourAppName', [
		'rest',
		'of',
		'your'
		'dependencies',
		'angularTypewrite']);

For the blinking effect, add the **angular-typewrite.css** file to your loaded stylesheets.

##How to use

Just add the **typewrite** attribute to the desired HTML element, passing the text that should print as the **'text' attribute** and the directive takes care of the rest.

The 'text' attribute can be a single string or an array of string. In case an array is passed, the string on each index is erased so the next item can be printed. When the last index is reached, that string stays on the screen. (So if you want to erase the last string, just push an empty string to the end of the array).

##Preferences

 These are the optional preferences:

- **initial delay**: set an 'initial-delay' attribute for the element
- **type delay**: set a 'type-delay' attribute for the element
- **erase delay**: set a 'erase-delay' attribute for the element
- **specify cursor** : set a 'cursor' attribute for the element, specifying which cursor to use
- **turn off cursor blinking**: set the 'blink-cursor' attribute  to "false"
- **cursor blinking speed**: set a 'blink-delay' attribute for the element
- **control the typing start with scope variable**: set a 'start' attribute for the element
- **scope callback**: pass the desired scope callback as the 'callback-fn' attribute of the element

**Note:** Each time/delay value should be set either on seconds (1s) or milisseconds (1000)

##Dependencies
This directives only depends the core AngularJS file and on the CSS file provided (angular-typewrite.css) in order to replicate the cursor blinking effect.

## Demo

I created a [Simple Demo](http://antoniocapelo.github.io/angular-typewrite) to show the directive working.
