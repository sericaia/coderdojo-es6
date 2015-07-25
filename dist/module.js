(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var CoderdojoClass = (function () {
  function CoderdojoClass(session) {
    _classCallCheck(this, CoderdojoClass);

    this.sessionNumber = session.number;
    this.sessionTopic = session.topic;

    this.champions = arguments[1];
    this.mentors = arguments[2];
    this.ninjas = arguments[3];
  }

  CoderdojoClass.prototype.getAllMentors = function getAllMentors() {
    return this.champions + this.mentors;
  };

  CoderdojoClass.prototype.getNinjas = function getNinjas() {
    return this.ninjas;
  };

  CoderdojoClass.prototype.getNinjasNumber = function getNinjasNumber() {
    return this.ninjas.length;
  };

  CoderdojoClass.prototype.getMentorsNumber = function getMentorsNumber() {
    return this.mentors.length + this.champions.length;
  };

  CoderdojoClass.prototype.getParticipants = function getParticipants() {
    return this.champions + this.mentors + this.ninjas;
  };

  CoderdojoClass.prototype.getParticipantsNumber = function getParticipantsNumber() {
    return this.champions.length + this.mentors.length + this.ninjas.length;
  };

  CoderdojoClass.prototype.getSessionInfo = function getSessionInfo() {
    return '#' + this.sessionNumber + ' This session is about ' + this.sessionTopic;
  };

  return CoderdojoClass;
})();

exports.CoderdojoClass = CoderdojoClass;

},{}],2:[function(require,module,exports){
'use strict';

var _coderdojoSession = require('./coderdojoSession');

// lets create a Coderdojo Session
var champions = ['Manuel'];
var mentors = ['Daniela', 'João'];
var ninjas = ['Ana', 'Henrique', 'Flávio', 'Joana'];

var sessionDetails = {
    topic: 'CSS',
    number: 99
};

var session = new _coderdojoSession.CoderdojoClass(sessionDetails, champions, mentors, ninjas);

console.log(session.getSessionInfo());

},{"./coderdojoSession":1}]},{},[2]);
