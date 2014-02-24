(function() {
	'use strict';
	/**
	 * AngularJS directive that simulates the effect of typing on a text editor - with a blinking cursor.
	 * This directive works as an attribute to any HTML element, and it lets customize the speed/delay of its animation.
	 * 
	 * To do th
	 * There's also a simple less file included for basic styling of the dialog, which can be overridden.
	 * The config object also lets the user define custom CSS classes for the modal.
	 *
	 *  How to use:
	 *
	 *  Just add the desired text to the 'text' attribute of the element and the directive takes care of the rest.
	 *  
	 * These are the optional preferences:
	 *  1 - initial delay: set an 'initial-delay' property for the element 
	 *  2 - typing speed: set a 'typing-delay' property for the element
	 *  3 - specify cursor : set a 'cursor' property for the element, specifying which cursor to use
	 *  5 - turn off cursor blinking speed: set the 'blink-cursor' property  to "false"
	 *  5 - cursor blinking speed: set a 'blink-delay' property for the element
	 *
	 * Note: 
	 * Each time/delay value should be set either on seconds (1s) or milisseconds (1000)
	 *
	 * Dependencies: 
	 * The directive needs the css file provided in order to replicate the cursor blinking effect.
	 */


	app.directive('typewrite', ['$timeout', function ($timeout) {
		function linkFunction (scope, iElement, iAttrs) {
			var timer = null,
				initialDelay = iAttrs.initialDelay ? getTypeDelay(iAttrs.initialDelay) : 200,
				typeDelay = iAttrs.typeDelay ? getTypeDelay(iAttrs.typeDelay) : 200,
				blinkDelay = iAttrs.blinkDelay ? getAnimationDelay(iAttrs.blinkDelay) : false,
				cursor = iAttrs.cursor ? iAttrs.cursor : '|',
				blinkCursor = iAttrs.blinkCursor ? iAttrs.blinkCursor === 'true' : true,
				auxStyle;
			if (iAttrs.text) {
				timer = $timeout(function() {
					updateIt(iElement, 0, iAttrs.text);
				}, initialDelay);
			}

			function updateIt(element, i, text){
				if (i <= text.length) {
					element.html(text.substring(0, i) + cursor);
					i++;
					timer = $timeout(function() {
						updateIt(iElement, i, iAttrs.text);
					}, typeDelay);
					return;
				} else {
					if (blinkCursor) {
						if (blinkDelay) {
							auxStyle = '-webkit-animation:blink-it steps(1) ' + blinkDelay + ' infinite;-moz-animation:blink-it steps(1) ' + blinkDelay + ' infinite ' +
										'-ms-animation:blink-it steps(1) ' + blinkDelay + ' infinite;-o-animation:blink-it steps(1) ' + blinkDelay + ' infinite; ' +
										'animation:blink-it steps(1) ' + blinkDelay + ' infinite;';
							element.html(text.substring(0, i) + '<span class="blink" style="' + auxStyle + '">' + cursor + '</span>');
						} else {
							element.html(text.substring(0, i) + '<span class="blink">' + cursor + '</span>');
						}
					} else {
						element.html(text.substring(0, i));
					}
				}
			}

			function getTypeDelay(delay) {
				if (typeof delay === 'string') {
					return delay.charAt(delay.length - 1) === 's' ? parseInt(delay.substring(0, delay.length - 1), 10) * 1000 : +delay;
				}
			}

			function getAnimationDelay(delay) {
				if (typeof delay === 'string') {
					return delay.charAt(delay.length - 1) === 's' ? delay : parseInt(delay.substring(0, delay.length - 1), 10) / 1000;
				}
			}

			scope.$on('$destroy', function() {
				if(timer) {
					$timeout.cancel(timer);
				}
			});
		}

		return {
			restrict: 'A',
			link: linkFunction,
			scope: false
		};

	}]);

}());