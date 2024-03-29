# Cricket Score Widget

![build-test](https://github.com/sanwebinfo/cricket-score-widget/workflows/build-test/badge.svg) [![JS Delivr](https://data.jsdelivr.com/v1/package/npm/cricket-score-widget/badge?style=rounded)](https://www.jsdelivr.com/package/npm/cricket-score-widget) [![netlify-pages](https://github.com/sanwebinfo/cricket-score-widget/actions/workflows/deploy.yml/badge.svg)](https://github.com/sanwebinfo/cricket-score-widget/actions/workflows/deploy.yml)  

Live Cricket Score Javascript Widget Build using Svelte JS.  

**API is not working due to the Cricbuzz Mobile site being Fully Redesigned - The full Site Structure was Changed it's a bit complex to get data - Please Consider using the Python Cricket API Version - <https://github.com/sanwebinfo/cricket-api>**

**Note**: i am Closing this Widget for Public Usage due API Server Down issue - You can Self-host my Cricket API on your Server - Fork & Rebuild this widget according to your Needs.  

DEMO - <https://score.sanweb.info/>  
CDN - <https://www.jsdelivr.com/package/npm/cricket-score-widget>

## Features

- Just add the Javascript and CSS Bundle Files in your Website/blog - Done
- Live Auto Refresh - Auto Refresh the Score Every 1 Minutes
- Cricket Score API - <https://github.com/sanwebinfo/deno-cricket-api>
- Fetch API
- Dark Mode Support  

## Usage

- Add this Stylesheet on above `</head>`

```html
<link rel="preconnect" href="//cdn.jsdelivr.net">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/cricket-score-widget@<PACKAGE-VERSION>/public/build/bundle.css" integrity="sha256-yvi81Q3KOkEooohCFxO74GKJQndjbKaJM9Rk9zoi2/c=" crossorigin="anonymous">
```

- Add this Javascript on above closed body tag `</body>`

```html
<script src="https://cdn.jsdelivr.net/npm/cricket-score-widget@<PACKAGE-VERSION>/public/build/bundle.js" integrity="sha256-2DByz5abCmWBxzV1R6+opStZ4rbkVjYCXv1BQL/sUnM=" crossorigin="anonymous"></script>
```

**Note**: Get Updated CDN URL From `https://www.jsdelivr.com/package/npm/cricket-score-widget`

- Add this HTML Div element to Display Live Cricket Score

```html
<div class="main-score">
<div class="table-score">
<div class="hello_cricket"></div>
</div>
</div>
```

- Fetch Live score via Match ID

```html
https://score.sanweb.info/?match=Match-ID
```

## Development

- Clone or Download the Repo

```sh
git clone https://github.com/sanwebinfo/cricket-score-widget.git
cd cricket-score-widget
yarn
```

or

```sh
npx degit sanwebinfo/cricket-score-widget cricket-score-widget
cd cricket-score-widget
yarn
```

- Test the Script

```sh
yarn dev
```

- Production Build

```sh
yarn build
```

- Modify the Script - `/src/App.svelte`
- Build CSS and Javascript are Stored in `/public/` Folder

## LICENSE

MIT
