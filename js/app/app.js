'use strict';

var db;

$(document).ready(initialize);

function initialize(){
  $(document).foundation();
  db = new Firebase('enter-firebase-database-url-here');
}
