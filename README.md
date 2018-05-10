# REPRODUCTION

Install Node

Install Polymer-cli

  $ npm install -g polymer-cli@next

Install Dependencies

  $ npm install

# Goals: Line waiting
    zero skilled labour
    money for time
      
# Google Map API
    set / create locations
    price bubble
    purchase order
    research: how much are people willing to pay.
    location depentant prices

# Pages
    Login / sign up / membership
    map landing page
    my account - controls
    create


# Firebase Authentication
    Google
    Facebook
    Email
    SMS

# Firebase Database
    rating system / reputation
    client / buyer
    prices
    location 

# Financial Payment System
    Create wallet
    paypal
    email transactions
    strike

# [NODEJS](https://nodejs.org/en/)

  Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

# [WEBCOMPONENTS 2.0.0-beta.2](https://github.com/webcomponents/webcomponentsjs/tree/v2)

  [webcomponents.org](https://www.webcomponents.org/)

  Web components are a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps. Custom components and widgets build on the Web Component standards, will work across modern browsers, and can be used with any JavaScript library or framework that works with HTML.

  Web components are based on existing web standards. Features to support web components are currently being added to the HTML and DOM specs, letting web developers easily extend HTML with new elements with encapsulated styling and custom behavior.

  Web components are based on four main specifications:

  [Custom Elements](https://w3c.github.io/webcomponents/spec/custom/) [V1](https://hayato.io/2016/shadowdomv1/)

  [Shadow DOM](https://w3c.github.io/webcomponents/spec/shadow/)

  [JAVASCRIPT imports](https://w3c.github.io/webcomponents/spec/imports/)
  
  [HTML Template](https://html.spec.whatwg.org/multipage/scripting.html#the-template-element/)

# [SHADY CSS](https://github.com/webcomponents/shadycss)

  ShadyCSS provides a library to simulate ShadowDOM style encapsulation (ScopingShim), a shim for the proposed CSS mixin @apply syntax (ApplyShim), and a library to integrate document-level stylesheets with both of the former libraries (CustomStyleInterface).

  [CSS @apply Rule](https://tabatkins.github.io/specs/css-apply-rule/)

  the @apply rule, which allows an author to store a set of properties in a named variable, then reference them in other style rules.

# [POLYMER 3.0.0-pre.13](https://www.polymer-project.org/2.0/docs/devguide/feature-overview)

  The Polymer library provides a set of features for creating custom elements. These features are designed to make it easier and faster to make custom elements that work like standard DOM elements. Similar to standard DOM elements, Polymer elements can be:

  Instantiated using a constructor or document.createElement.

  Configured using attributes or properties.

  Populated with internal DOM inside each instance.

  Responsive to property and attribute changes.

  Styled with internal defaults or externally.

  Responsive to methods that manipulate its internal state.

  [LitElement](https://www.npmjs.com/package/@polymer/lit-element)

  [Polymer Library](https://www.polymer-project.org/2.0/docs/devguide/feature-overview)

  [Liscense](https://github.com/Polymer/polymer/blob/master/LICENSE.txt)

  [About](https://www.polymer-project.org/about)

  [Blog](https://www.polymer-project.org/blog/)

  [Glossary](https://www.polymer-project.org/2.0/docs/glossary)

  [Rendertron](https://render-tron.appspot.com/)

  [Properties](https://www.polymer-project.org/2.0/docs/devguide/properties)

  [Observers](https://www.polymer-project.org/2.0/docs/devguide/observers)

# [POLYMER-CLI@1.7.0-pre.17](https://github.com/Polymer/tools/tree/master/packages/cli)

    $ npm install -g polymer-cli@next

  Polymer CLI is the official command line tool for Polymer projects and Web Components. It includes a build pipeline, a boilerplate generator for creating elements and apps, a linter, a development server, and a test runner.

  1. Create a class that extends PolymerElement.

  2. Implement a static properties getter that describes the element's public property/attribute API (these automatically become observed attributes).

  3. Then implement a template getter that returns an HTMLTemplateElement describing the element's rendering, including encapsulated styling and any property bindings.

  "entrypoint" (Defaults to index.html): The main entrypoint to your app.

  "shell" (Optional): The app shell.

  "fragments" (Optional): A list of other entrypoints into your application.

  "root" (Defaults to current working directory): The web root of your application, can be a subfolder of your project directory.

  "sources" (Defaults to src/**/*): The source files in your application.


 "builds":
 
    [

      {
        "name":                 "esm-bundled",
        "browserCapabilities":  [ "es2015", "modules" ],
        "js":                   { "minify": true },
        "css":                  { "minify": true },
        "html":                 { "minify": true },
        "bundle":               { "inlineScripts": false },
        "addServiceWorker":     true
      },

      {
        "name":                 "es6-bundled",
        "browserCapabilities":  [ "es2015" ],
        "js":                   { "minify": true, "transformModulesToAmd": true },
        "css":                  { "minify": true },
        "html":                 { "minify": true },
        "bundle":               { "inlineScripts": false },
        "addServiceWorker":     true
      },
      
      {
        "name":                 "es5-bundled",
        "js":                   { "minify": true, "compile": true, "transformModulesToAmd": true },
        "css":                  { "minify": true },
        "html":                 { "minify": true },
        "bundle":               { "inlineScripts": false },
        "addServiceWorker":     true
      }
      
    ]

# [FIREBASE-TOOLS](https://www.npmjs.com/package/firebase-tools)

    $ npm install -g firebase-tools

# [GITHUB](https://git-scm.com/docs)

  GitHub is how people build software.
  We’re supporting a community where more than 27 million* people learn, share, and work together to build software.

  ...create a new repository on the command line
  echo "# projectName" >> README.md

  git init

  git add README.md

  git commit -m "first commit"

  git remote add origin https://github.com/user/project.git

  git push -u origin master

  …or push an existing repository from the command line

  git remote add origin https://github.com/user/project.git

  git push -u origin master

