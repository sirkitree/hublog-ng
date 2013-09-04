# hublog-ng
_Jekyll-based blogging on GitHub with an AngularJS app._
http://jeradbitner.com/2013/08/angularjs-posting-interface-for-your-github-jekyll-site/

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