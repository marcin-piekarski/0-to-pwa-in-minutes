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


***Word of Warning on Workbox/Firefox:***

Even though Workbox is pretty awesome. I/we have run into issues in the past with both Firefox and Edge where both browsers have completely locked up, requiring a hard refresh, due to both browsers not playing nice with Workbox.

For example, when Firefox 62.x.x rolled out. It started throwing a `Corrupted Content Error` (https://support.mozilla.org/en-US/questions/1232935) due to issues with fetching the `workbox.expiration` library.

Instead of Firefox just ignoring a bad service worker request. It would lock up the browser completely, requiring the user to do a hard refresh.

Interestingly, the way that Firefox locks up and throws a `Corrupted Content Error` has been around since at least 2014 (https://support.mozilla.org/en-US/questions/1011249);


### Tips, Notes, Warnings, etc:

- Always keep in mind that not all browsers are the same. Make sure that you check Firefox, Safari and Edge when building your PWA. (See my word of warning about Workbox/Firefox above)
- Include a flag(s) which you can control, that can disable your service worker in production, and when you disable your service worker. Make sure you clean up caches, etc.
- Be careful using ES6+ features and make sure that you build your code for the browsers that you support. (https://caniuse.com)
- If your running server cache strategies in production (eg. Varnish). Make sure that your service worker isn't cached so that when you push an update, it's immediately picked up without having to cache bust.
- If the URL to your service worker changes, then your service worker will re-install/re-activate. For example, if you use a hash in the service worker URL and that changes. Your service worker will re-install/re-activate.
- CORS can become a bit annoying.  You might have to speak to your nice to your devops person about getting `www.yourdomain.com` and `cdn1.yourdomin.com` to play nice.
- Be careful with your caching strategies. You don't want to pick the wrong strategy and end up with a number of users that have bad code for a long period of time. If your using Workbox, then it's easy to add the expiration plugin which allows you to set a finite period of time for a resource that's cached.


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
