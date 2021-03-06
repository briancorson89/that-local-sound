'use strict';
// Setting up route
angular.module('users').config(['$stateProvider','$urlRouterProvider',
	function($stateProvider) {
		// Users state routing
		// going to try and put the dashboard controller here,
		// my thought is that it is connect the use class, so all it needs is the user.
		$stateProvider.
		state('dashboard.profile', {
			url: '/profile',
			templateUrl: 'modules/users/views/settings/edit-profile.client.view.html',
		}).
		state('password', {
			url: '/settings/password',
			templateUrl: 'modules/users/views/settings/change-password.client.view.html'
		}).
		state('accounts', {
			url: '/settings/accounts',
			templateUrl: 'modules/users/views/settings/social-accounts.client.view.html'
		}).
		state('signup', {
			url: '/signup',
			templateUrl: 'modules/users/views/authentication/signup.client.view.html'
		}).
		state('signin', {
			url: '/signin',
			templateUrl: 'modules/users/views/authentication/signin.client.view.html'
		}).
		state('forgot', {
			url: '/password/forgot',
			templateUrl: 'modules/users/views/password/forgot-password.client.view.html'
		}).
		state('reset-invalid', {
			url: '/password/reset/invalid',
			templateUrl: 'modules/users/views/password/reset-password-invalid.client.view.html'
		}).
		state('reset-success', {
			url: '/password/reset/success',
			templateUrl: 'modules/users/views/password/reset-password-success.client.view.html'
		}).
		state('reset', {
			url: '/password/reset/:token',
			templateUrl: 'modules/users/views/password/reset-password.client.view.html'
		}).
		state('dashboard', {
			url: '/dashboard/',
			templateUrl: 'modules/users/views/dashboard/dashboard.client.view.html'
		}).
		state('gigs', {
			url: '/gigs/',
			templateUrl: 'modules/users/views/dashboard/gigs.client.view.html'
		}).
		state('contact', {
			url: '/contact/',
			templateUrl: 'modules/users/views/dashboard/contacts.client.view.html'
		});

	}
]);
