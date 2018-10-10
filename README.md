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

1. **Run a Chrome Developer Tools Lighthouse Audit**

Run an initial Chrome Dev Tools audit to get an idea of what we need to do to make Google Ecommerce a PWA, and then **re-run an audit after each step to make sure everything's working fine**.

2a. **Add a Manifest and Re-Run the Lighthouse Audit**

The manifest will include various details such as a title, description, a set of icons, splash screen extra.

Resources:
- https://www.pwabuilder.com
- https://www.favicon-generator.org/

3. **Add a Vanilla Service Worker and Re-Run the Lighthouse Audit**

Resources:
- https://www.pwabuilder.com
- https://serviceworke.rs/

4. **(Optional) Add/Change Vanilla Service Worker to use Workbox**

Resources:
- https://developers.google.com/web/tools/workbox/

### The Tips, Warnings and Resources:

...

## The Template:

- Template Name: Goggles Ecommerce Category Bootstrap Responsive Web Template
- Template URL: https://w3layouts.com/goggles-ecommerce-category-bootstrap-responsive-web-template/
- Template License: W3layouts templates are under Creative Commons Attribution 3.0 unported (https://creativecommons.org/licenses/by/3.0/)
