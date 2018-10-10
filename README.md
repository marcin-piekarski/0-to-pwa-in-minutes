# README - 0 to PWA in Minutes

## Intro:

**0 to PWA in Minutes**

A lightning journey on the fundamentals required to convert an existing site into a Progressive Web App.

## The Plan:

The plans to take an existing ecommerce template (Goggles Ecommerce by w3layouts.com) and to convert it into a Progressive Web App.

## The Prerequisites:

You will need HTTPS as a prerequisite when building a Progressive Web App.

I have added `http-server` as a depedency to this project and if you do an `npm install` you should be able to follow the steps found here Look here: https://stackoverflow.com/questions/35127383/npm-http-server-with-ssl on how to get a local certificate working.

## The Steps:

**(1) Run a Chrome Developer Tools Lighthouse Audit**

Run an initial Chrome Dev Tools audit to get an idea of what we need to do to make Google Ecommerce a PWA, and then **re-run an audit after each step to make sure everything's working fine**.

**(2) Add a Manifest and Re-Run the Lighthouse Audit**

The manifest will include various details such as a title, description, a set of icons, splash screen extra.

Resources:
- https://www.favicon-generator.org/
- https://www.pwabuilder.com

**(3) Add a Vanilla Service Worker and Re-Run the Lighthouse Audit**

Resources:
- https://developers.google.com/web/fundamentals/primers/service-workers/
- https://serviceworke.rs/
- https://www.pwabuilder.com

**(4) Add Workbox**

Workbox is a set of libraries and node modules that make it easy to cache assets, and take full advantage of features used to build Progressive Web Apps.

While not absolutely necessary, it does come with some useful libraries that contain pre-canned caching strategories, expiration, Google Analytics, etc.

Resources:
- https://developers.google.com/web/tools/workbox/

**Word of Warning in Regards to Workbox:**

Even though Workbox is pretty awesome.

I/we have run into issues in the past with both Firefox and Edge where both browsers have completely locked up, requiring a hard refresh, due to both browsers not playing nice with Workbox.

For example, when Firefox 62.x.x rolled out. It started throwing a `Corrupted Content Error` (https://support.mozilla.org/en-US/questions/1232935) due to issues with fetching the `workbox.expiration` library.

So instead of Firefox just ignoring a bad service worker request. It'd lock up the browser completely, requiring the user to do a hard refresh.

Interestingly, the way that Firefox locks up and throws a `Corrupted Content Error` has been around since at least 2014 (https://support.mozilla.org/en-US/questions/1011249);

### The Tips, Warnings and Resources:

...

## The Template:

- Template Name: Goggles Ecommerce Category Bootstrap Responsive Web Template
- Template URL: https://w3layouts.com/goggles-ecommerce-category-bootstrap-responsive-web-template/
- Template License: W3layouts templates are under Creative Commons Attribution 3.0 unported (https://creativecommons.org/licenses/by/3.0/)
