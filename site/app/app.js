(function () {
	'use strict';

	angular
		.module('shardulGo', [
		//Angular dependencies
			'ngCookies',
			'ngResource',
			'ngSanitize',
			'ngRoute',
			//3rd Party dependencies
			'tmixCaching',
			'ui.bootstrap',
			'ui.materialize',
			'uiGmapgoogle-maps'
			//Custom dependencies
		])
		.config(config);

	/* ngInject */
	function config($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'home/home.html',
				controller: 'HomeController',
				controllerAs: 'vm',
				activeTab: 'home'
			})
			.when('/about', {
				templateUrl: 'about/about.html',
				controller: 'AboutController',
				controllerAs: 'vm',
				activeTab: 'about'
			})
			.when('/education', {
				templateUrl: 'education/education.html',
				controller: 'EducationController',
				controllerAs: 'vm',
				activeTab: 'education'
			})
			.when('/blog', {
				templateUrl: 'blog/blog.html',
				controller: 'BlogController',
				controllerAs: 'vm',
				activeTab: 'blog'
			})
			.when('/experience', {
				templateUrl: 'experience/experience.html',
				controller: 'ExperienceController',
				controllerAs: 'vm',
				activeTab: 'experience'
			})
			.when('/contact', {
				templateUrl: 'contact/contact.html',
				controller: 'ContactController',
				controllerAs: 'vm',
				activeTab: 'contact'
			})
			.otherwise({
				redirectTo: '/'
			});
	}
})();
