# README - 0 to PWA in Minutes

## Intro:

**0 to PWA in Minutes**

A lightning journey on the fundamentals required to convert an existing site into a Progressive Web App.


## The Plan:

The plan's to take an existing ecommerce template (Goggles Ecommerce by w3layouts.com) and to convert it into a Progressive Web App.


## The Prerequisites:

You'll want to enable SSL when building a Progressive Web App.

If you have a Mac, have a look at https://medium.freecodecamp.org/how-to-get-https-working-on-your-local-development-environment-in-5-minutes-7af615770eec to get an idea of how to get SSL working locally.

After going through the tutorial. If run `npm install` and you want to use the `http-server` node module to host locally.

You should be able to use something like the command below to run in SSL mode:

`./node_modules/.bin/http-server ./dist --ssl --key ./cert/server.key --cert ./cert/server.crt -a localhost -p 8080 -o`

Note though that you might still get a warning the the Chrome Dev Tools Progressive Web App audit that states "Does not redirect HTTP traffic to HTTPS" with `http-server` setup to run using SSL.

That's why, if possible, it's a good idea to deploy to something like Firebase hosting (https://firebase.google.com/docs/hosting/) every now and then to run a proper audit to keep track of your changes.


## The Steps:

**(1) Run a Chrome Developer Tools Lighthouse Audit**

Run an initial Chrome Dev Tools audit to get an idea of what we need to do to make Google Ecommerce a PWA, and then **re-run an audit after each step to make sure everything's working fine**.


**(2) Add a Manifest and Re-Run the Lighthouse Audit**

The manifest will include various details such as a title, description, a set of icons, splash screen extra.


**(3a) Add a Vanilla Service Worker and Re-Run the Lighthouse Audit**

Add a vanilla service worker and setup a basic caching strategy.


**(3b) Add/Change Service Worker to Workbox**

Workbox is a set of libraries and node modules that make it easy to cache assets, and take full advantage of features used to build Progressive Web Apps.

While not absolutely necessary, it does come with some useful libraries that contain pre-canned caching strategories, expiration, Google Analytics, etc.


***Word of Warning in Regards to Workbox:***

Even though Workbox is pretty awesome. I/we have run into issues in the past with both Firefox and Edge where both browsers have completely locked up, requiring a hard refresh, due to both browsers not playing nice with Workbox.

For example, when Firefox 62.x.x rolled out. It started throwing a `Corrupted Content Error` (https://support.mozilla.org/en-US/questions/1232935) due to issues with fetching the `workbox.expiration` library.

Instead of Firefox just ignoring a bad service worker request. It would lock up the browser completely, requiring the user to do a hard refresh.

Interestingly, the way that Firefox locks up and throws a `Corrupted Content Error` has been around since at least 2014 (https://support.mozilla.org/en-US/questions/1011249);


### Notes:

...


### Resources:

- https://medium.freecodecamp.org/how-to-get-https-working-on-your-local-development-environment-in-5-minutes-7af615770eec
- https://github.com/indexzero/http-server
- https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/
- https://developers.google.com/web/fundamentals/primers/service-workers/
- https://developers.google.com/web/tools/workbox/
- https://serviceworke.rs/
- https://medium.com/dev-channel/learn-how-to-build-a-pwa-in-under-5-minutes-c860ad406ed
- https://vaadin.com/pwa/build (ES6+)
- https://www.pwabuilder.com
- https://www.favicon-generator.org/
- https://firebase.google.com/docs/hosting/


## The Template:

- Template Name: Goggles Ecommerce Category Bootstrap Responsive Web Template
- Template URL: https://w3layouts.com/goggles-ecommerce-category-bootstrap-responsive-web-template/
- Template License: W3layouts templates are under Creative Commons Attribution 3.0 unported (https://creativecommons.org/licenses/by/3.0/)
