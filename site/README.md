# starter-angular-babel

This repository is used as a starting point for an AngularJS-based application.

To see how this starter has evolved over time, checkout the [Changelog](CHANGELOG.md).

## What is a fractal hierarchy?
Fractal hierarchies are great way to control the structure of your app - each page and component gets its own folder, making it easier to understand the structure of your app as it grows. The approach is described [Google's recommendations for AngularJS applications][google-recommendations].

## Where do my services/directives/controllers/views/styles go?
Again, read [Google's recommendations for AngularJS applications][google-recommendations]. Basically, think of your app as a hierarchy of components. You will put your services/directives/controllers/styles in a component folder under app (i.e. app/profile/profileController.js). Component folders contain js/html/(s)css for a specific component; a component can be anything - a page, a widget, an html include.

## What happens when my code is shared?
In the case of a directive, it just becomes a self-contained component that is not nested under another component. You could put it at the top level, e.g. `app/shared-component/`, or perhaps under a `shared/shared-component/` folder if you end up with a lot of shared components.

It doesn't matter where your component code goes; as long as it is located in the `app` folder, the build system will pick it up.

For shared services, it's a bit different than a directive, but the principles are the same. The shared service could be thought of as a single component, so they could all live in a shared `app/services/` folder for a simple project. Or maybe you have a collection of services that all manage getting/updating/posting widgets in a more complex app; those services could all live in `app/shared/widget-service/`.

The important thing is that you build your application as a hierarchy of components, and that you structure those components in a way that makes sense to your team :).

## Use this starter with [intc-cli][intc-cli]
The fastest and best way to use this starter is with the [intc-cli application generator][intc-cli]. Assuming you have intc-cli installed, just run:
```
intc gen-ui -t babel
```

## Use this starter manually
Don't want to use intc-cli? Follow the below manual steps:

- Clone the starter-angular-babel branch to a folder with the name of your app (or whatever name you want for the folder)
	
	```
	git clone -b starter-angular-babel --single-branch https://github.intel.com/intc/starterbot-9000.git [your-app-name]
	```
- Do the usual `npm install` and `bower install`
	
	```
	npm install && bower install
	```
- Rename the project to the name of your app
	
	```
	gulp rename-project -n [your-app-name]
	```
- Nuke your git history
	
	```
	rm -rf .git
	```
- Create a new git repository for your app
	
	```
	git init
    git add .
    git commit -m "Initial commit"
    git remote add origin https://github.intel.com/[your-app-org]/[your-app-repo].git
    git push -u origin master
	```


[intc-cli]: https://github.intel.com/intc/intc-cli
[angular-starter]: https://github.intel.com/intc/angular-starter
[starterbot-9000]: https://github.intel.com/intc/starterbot-9000
[google-recommendations]: http://goo.gl/DQtY4y
