'use strict';

var app = angular.module('app', ['app.filters', 'pascalprecht.github-adapter']);

app.controller('AuthCtrl', function ($scope, $log, $github) {
  $scope.postCategory = "blog";;
  $scope.postPublish = "false";
  $scope.auth = function () {

    $github.setCreds($scope.username, $scope.password, 'basic');

    var path = '_posts/' + determineFilename($scope);
    var content = "---\n"
      + "layout: post\n"
      + "title: \"" + $scope.postTitle + "\"\n"
      + "date: " + determineDate('dt') + "\n"
      + "comments: true\n"
      + "published: " + $scope.postPublish + "\n"
      + "category: [\"" + $scope.postCategory + "\"]\n"
      + "---\n" 
      + $scope.postContent;

    var commitmsg = ":skull: new post for " + determineDate('dt');

    // Since these are not promises, we do our 'write' operation inside of 'then'
    $github.getRepo($scope.username, $scope.repository).then(function (repo) {
      
      repo.write($scope.branch, path, content, commitmsg);
      var url = "https://github.com/" + $scope.username + "/" + $scope.repository + "/blob/" + $scope.branch + "/" + path;
      $scope.messages = "View your post <a href=\"" + url + "\">here</a>.";
    });
  };
});

function determineDate (which) {
  // Find the date and time in the correct formats
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;//January is 0!`
  var yyyy = today.getFullYear();
  if(dd<10) dd = '0' + dd;
  if(mm<10) mm = '0' + mm;
  var today_nice = yyyy + '-' + mm + '-' + dd;
  var date_time = today_nice + ' ' + today.getHours() + ':' + today.getMinutes();

  if (which == 'dt') {
    return date_time;
  } else if (which == 'tn') {
    return today_nice;
  }
  
}

function determineFilename ($scope) {
  // Determine the filename
  var post_title = $scope.postTitle;
  var filename = determineDate('tn') + '-' + post_title.replace(/[^\w]+/g, '-').toLowerCase() + '.md';
  return filename;  
}