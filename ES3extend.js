/*!
 * ES3extend.js v0.1.0 <https://github.com/zensh/ES3extend>
 * Copyright 2013 zensh <https://github.com/zensh>
 * Available under MIT license <http://mths.be/mit>
 */
;(function() {
  'use strict';

    Object.keys = Object.keys || function(obj) {
        if(typeof obj !== 'object') throw TypeError('Object.keys called on non-object');
        var result = [];
        for(var key in obj) {
            if(obj.hasOwnProperty(key)) result.push(key);
        }
        return result;
    };

    Array.isArray = Array.isArray || function(obj) {
        return  typeof obj === 'object' && Object.prototype.toString.call(obj) === '[object Array]';
    };

    Array.prototype.forEach = Array.prototype.forEach || function(callback, obj) {
        if(typeof callback !== 'function') throw TypeError('The first argument is non-function');
        if(obj && typeof obj !== 'object') throw TypeError('The second argument is non-object');
        for(var i = 0, len = this.length; i < len; i++) {
            if(obj) callback.call(obj, this[i], i, this);
            else callback(this[i], i, this);
        }
    };
}());
