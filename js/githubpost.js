'use strict';

var app = angular.module('app', ['app.filters']);

app.controller('AuthCtrl', function($scope, $log) {
  $scope.username = '';
  $scope.password = '';
  $scope.success = false;
  $scope.postCategory = "blog";
  $scope.postPublish = "false";
  $scope.auth = function() {
    
    $scope.github = new Github({
      username: $scope.username,
      password: $scope.password,
      auth: "basic"
    });

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

    var repo = $scope.github.getRepo($scope.username, 'sirkitree.github.com');
    repo.write('master', path, content, commitmsg, function (err) {
      if (err !== null) {
        $log.log(err);
      } else {
        // go to the new blog page
        $scope.url = "https://github.com/sirkitree/sirkitree.github.com/blob/master/" + path;
        window.location = $scope.url;
      }
    });
  }
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