var App = require('scoutfile/lib/browser/application');
var loader = require('scoutfile/lib/browser/loader');
var appConfig = require('scoutfile/lib/browser/appConfig');
var projectName = '${projectName}';
var config = require('json!./config.json');
var MyApp = App(projectName);

MyApp.config = config;
MyApp.loadScript = loader.loadScript;

var baseUrl = config.scoutHost + projectName;
var scoutVersion = getQueryVariable('scout');
var language = 'en_US';

if (window.SharpSpring && window.SharpSpring.user && window.SharpSpring.user.locale) {
  language = window.SharpSpring.user.locale;
}

if (scoutVersion === 'dev') {
  baseUrl = config.scoutHostLocal;
} else if (scoutVersion) {
  baseUrl += '-dev/' + scoutVersion + '/';
} else {
  baseUrl += '-prod/' + appConfig.hash + '/';
}

loader.loadScript(baseUrl + language + '.' + config.appJS);

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split('&');

  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return false;
}
