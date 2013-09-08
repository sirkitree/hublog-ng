# hublog-ng
_Jekyll-based blogging on GitHub with an AngularJS app._
http://jeradbitner.com/2013/08/angularjs-posting-interface-for-your-github-jekyll-site/

## Installation

1. Install Jekyll
 * `~ $ gem install jekyll`
 * `~ $ jekyll new my-awesome-site`
 * `~ $ cd my-awesome-site`

1. Grab the AngularJS app to control your site
 * `~/my-awesome-site $ git clone git@github.com:sirkitree/hublog-ng.git`

 This should give you the following custom files:
 * `~/my-awesome-site/hublog-ng/new.html` - this is the app for creating new posts
 * `~/my-awesome-site/hublog-ng/js/filters.js` - required by github.js
 * `~/my-awesome-site/hublog-ng/js/githubpost.js` - custom controllers for authentication with github.js
 
 As well as some components from bower:
 * `angular` - angularjs library
 * `angular-github-adapter` - PascalPrecht's Angular adapter module for github.js
 * `github` - library for github integration, utilized by the adapter module
 * `jquery` - jquery library
 * `jquery-autosize` - jquery autosize library for expanding the textarea as you type
 * `marked` - for realtime markdown conversion (used as an Angular filter)

1. Copy your default layout (_layouts/default.html) to new.html
 * `~ $ cp ~/my-awesome-site/_layouts/default.html ~/my-awesome-site/_layouts/new.html`

1. Edit your new.html layout and add in the following directives to the body tag:
 * `data-ng-app="app" data-ng-controller="AuthCtrl"`

1. *optional* : The new.html from hublog-ng has classes for bootstrap to make it looks nicer than the default css that comes with jekyll. It is recommended to add in bootstrap to the top of your new.html inside of `_layouts`.
```html
<!-- bootstrap cdn -->
<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css">
```

1. *optional* : Test this out by running `~/my-awesome-site $ jekyll serve` and opening `localhost:4000/hublog-ng-new.html` in your browser.

1. Since this is a repo that we want to access inside of another, let's delete hublog-ng's .git file
 * `~/my-awesome-site $ rm -rf hublog-ng/.git`

1. Turn this project into it's own repository on GitHub.
 * create a [new repository](https://github.com/new)
 * `~/my-awesome-site $ git init`
 * `~/my-awesome-site $ git checkout -b gh-pages` (this is github specific branch that tells github you want to run it through jekyll)
 * `~/my-awesome-site $ git add .`
 * `~/my-awesome-site $ git commit -m "initial commit"`
 * `~/my-awesome-site $ git remote add origin git@github.com:[your-username]/[your-repository].git`
 * `~/my-awesome-site $ git push -u origin gh-pages`


That's it. Now you just customize your Jekkyl site as you normally might.