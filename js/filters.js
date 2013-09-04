'use strict';

/* Filters */

angular.module('app.filters', []).
  filter('convert', function() {
    return function(text, convert) {
      if (typeof text !== 'undefined') {
        var converted = marked(text);
        return converted;
      }
    }
  });
