
# hublog-ng
_Jekyll-based blogging on GitHub with an AngularJS app._
http://jeradbitner.com/2013/08/angularjs-posting-interface-for-your-github-jekyll-site/

Note: this is still a work in progress and will not work as instructed yet.

## Installation
1. Install Jekyll
 * `~ $ gem install jekyll`
 * `~ $ jekyll new my-awesome-site`
 * `~ $ cd my-awesome-site`

2. Grab the AngularJS app to control your site
 * `~/my-awesome-site $ git clone git@github.com:sirkitree/hublog-ng.git hublog-ng`

 This should give you just a couple new files:
 * `~/my-awesome-site/hublog-ng/new.html` - this is the app for creating new posts
 * `~/my-awesome-site/hublog-ng/js/base64.js` - required by github.js
 * `~/my-awesome-site/hublog-ng/js/filters.js` - required by github.js
 * `~/my-awesome-site/hublog-ng/js/github.js` - from https://github.com/michael/github
 * `~/my-awesome-site/hublog-ng/js/githubpost.js` - custom controllers for authentication with github.js
 * `~/my-awesome-site/hublog-ng/js/jquery.autosize.js` - used to resize the new post textarea as you type
 * `~/my-awesome-site/hublog-ng/js/marked.js` - from https://github.com/chjj/marked used for markdown preview
 * `~/my-awesome-site/hublog-ng/js/underscore.js` - required by github.js


3. Copy your default layout (_layouts/default.html) to new.html
 * `~ $ cp ~/my-awesome-site/_layouts/default.html ~/my-awesome-site/_layouts/new.html 


4. Edit your new.html layout and add in the following directives to the body tag:
 * `data-ng-app="app" data-ng-controller="AuthCtrl"`