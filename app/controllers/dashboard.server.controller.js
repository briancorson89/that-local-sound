'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    _ = require('lodash');

/*
This holds the general calendar, profile
*/
exports.index = function(req, res) {
  res.render('index', {
    user: req.user || null,
    request: req
  });
};

/**
 * Create a Dashboard
 */
exports.create = function(req, res) {

};

/**
 * Show the current Dashboard
 */
exports.read = function(req, res) {

};

/**
 * Update a Dashboard
 */
exports.update = function(req, res) {

};

/**
 * Delete an Dashboard
 */
exports.delete = function(req, res) {

};

/**
 * List of Dashboards
 */
exports.list = function(req, res) {

};
