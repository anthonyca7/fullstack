'use strict';

angular.module('fullstackApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
