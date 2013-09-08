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

 This should give you the following custom files:
 * `~/my-awesome-site/hublog-ng/new.html` - this is the app for creating new posts
 * `~/my-awesome-site/hublog-ng/js/filters.js` - required by github.js
 * `~/my-awesome-site/hublog-ng/js/githubpost.js` - custom controllers for authentication with github.js
 
 As well as some components from bower:
 * `angular` - angularjs library
 * `angular-github-adapter` - PascalPrecht's Angular adapter module for github.js
 * `jquery` - jquery library
 * `jquery-autosize` - jquery autosize library for expanding the textarea as you type
 * `marked` - for realtime markdown conversion (used as an Angular filter)

3. Copy your default layout (_layouts/default.html) to new.html
 * `~ $ cp ~/my-awesome-site/_layouts/default.html ~/my-awesome-site/_layouts/new.html`

4. Edit your new.html layout and add in the following directives to the body tag:
 * `data-ng-app="app" data-ng-controller="AuthCtrl"`

5. *optional* : The new.html from hublog-ng has classes for bootstrap to make it looks nicer than the default css that comes with jekyll. It is recommended to add in bootstrap to the top of your new.html inside of `_layouts`.
```html
<!-- bootstrap cdn -->
<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css">
```
