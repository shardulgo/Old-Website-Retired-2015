/**
 * Created by Krys on 9/17/2016.
 */
(function () {
	'use strict';

	/**
	 * @ngdoc module
	 * @name starterAngularFractal.module:starterAngularFractal
	 * @description Gets some squirrels on the scope.
	 */
	angular.module('shardulGo').controller('ExperienceController', ExperienceController);

	/* @ngInject */
	function ExperienceController($scope, $window, $location, $route, preloader) {
		var vm = this;
		var player;
		var $ = function(id) { return document.getElementById(id); }
		var $$ = function(tagname) { return document.getElementsByTagName(tagname); }

		vm.route = route;
		vm.triggerAnimations = triggerAnimations;

		vm.currentRoute = $route;

		function route(url) {
			$location.path(url);
		}

		init();
		function init() {
			$window.ga('send', 'pageview', { page: $location.url() });
			console.log();
		}

		function triggerAnimations() {
			return "animate fadeIn";
		}
		
		function onYouTubeIframeAPIReady() {
     var videos = $$('iframe'), // the iframes elements
         players = [], // an array where we stock each videos youtube instances class
         playingID = null; // stock the current playing video
     for (var i = 0; i < videos.length; i++) // for each iframes
     {
         var currentIframeID = videos[i].id; // we get the iframe ID
         players[currentIframeID] = new YT.Player(currentIframeID); // we stock in the array the instance
         // note, the key of each array element will be the iframe ID

         videos[i].onmouseover = function(e) { // assigning a callback for this event
             var currentHoveredElement = e.target;
             if (playingID) // if a video is currently played
             {
                 players[playingID].pauseVideo();
             }
             players[currentHoveredElement.id].playVideo();
             playingID = currentHoveredElement.id;
         };
     }

 }
 onYouTubeIframeAPIReady();
	}
})();
