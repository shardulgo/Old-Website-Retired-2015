/**
 * Created by Krys on 9/30/2016.
 */
(function () {
	'use strict';

	/**
	 * @ngdoc module
	 * @name starterAngularFractal.module:starterAngularFractal
	 * @description Gets some squirrels on the scope.
	 */
	angular.module('shardulGo').controller('ContactController', ContactController);

	/* @ngInject */
	function ContactController($scope,$timeout, $window, $location, $route, preloader) {
		var vm = this;
		vm.route = route;
		vm.triggerAnimations = triggerAnimations;
		vm.sendEventTracker = sendEventTracker;

		vm.delay = false;
		$timeout(function(){
			vm.delay = true;
		}, 1000);

		vm.currentRoute = $route;

		function route(url) {
			$location.path(url);
		}

		vm.collapsibleElements = [{
			icon: 'fa fa-envelope-o',
			title: 'Gmail',
			linkText: 'shardul.golwalkar@gmail.com',
			link: 'mailto:shardul.golwalkar@gmail.com',
			text: "Email me at: "
		},{
			icon: 'fa fa-linkedin',
			title: 'Linkedin',
			linkText: 'Linkedin Profile',
			link: 'https://www.linkedin.com/in/shardulgolwalkar',
			text: "Checkout my "
		},{
			icon: 'fa fa-github',
			title: 'Github',
			link: 'https://github.com/sgolwalkar',
			linkText: ' Github',
			text: "View my side projects on"
		}
		];

		vm.options = {
			scrollwheel: false,
			control:false,
			draggable:false,
			disableDoubleClickZoom:true,
			disableDefaultUI: true
		};

		vm.map = { center: { latitude: 45.53, longitude: -122.64 }, zoom: 9 };

		init();
		function init() {
			$window.ga('send', 'pageview', { page: $location.url() });
		}

		function triggerAnimations() {
			return "animate fadeIn";
		}

		function sendEventTracker(clicked){
			ga('send', 'event', clicked, 'clicked');
		}
	}
})();
