# Example intergation of Silex with 11ty and strapi

This is a simple example of how to integrate Silex with 11ty and strapi.

Links:

- [Silex](https://www.silex.me/)
- [11ty](https://www.11ty.dev/)
- [strapi](https://strapi.io/)

## Installation

```bash
$ npm install
```

## Usage

Start strapi with this command, it will start a server on http://localhost:1337

```bash
$ npm run strapi
```

Start Silex with this command, it will start a server on http://localhost:3000

```bash
$ npm run silex
```

Now when you publish your site in Silex or change the content in strapi, you can rebuild the 11ty site with this command:

```bash
$ npm run build
```

## How it works

In Silex you define the content of your pages using data from strapi. When you publish your site, Silex generates these files for each page containing data from strapi:

- `{{pageName}}.11tydata.js` contains code to fetch the required data from strapi
- `{{pageName}}.html` contains the HTML code for the page with liquidjs tags to insert the data
- `{{pageName}}.css` contains the CSS code for the page

When you run `npm run build`, 11ty generates the final HTML pages from these files.

## About the intgeration

This website was setup with the following steps:

* Create a new 11ty website according to 11ty documentation + the fetch plugin
* Add Silex to the project according to Silex documentation + the 11ty plugin
* Add strapi to the project according to strapi documentation + add strapi to Silex config, see `.silex.js`
