# Cricket Score Widget

![build-test](https://github.com/mskian/cricket-score-widget/workflows/build-test/badge.svg) [![jsdelivr](https://badgen.net/jsdelivr/hits/gh/mskian/cricket-score-widget?icon=jsdelivr)](https://www.jsdelivr.com/package/npm/cricket-score-widget)  

Live Cricket Score Javascript Widget Build using Svelte JS.  

**Note**: i am Closing this Widget for Public Usage due API Server Down issue - You can Self-host my Cricket API on your Server - Fork & Rebuild this widget according to your Needs.  

DEMO - <https://score.sanweb.info/>  
CDN - <https://www.jsdelivr.com/package/npm/cricket-score-widget>

## Features

- Just add the Javascript and CSS Bundle Files in your Website/blog - Done
- Live Auto Refresh - Auto Refresh the Score Every 1 Minutes
- Cricket Score API - <https://github.com/mskian/deno-cricket-api>
- Fetch API
- Dark Mode Support  

## Usage

- Add this Stylesheet on above `</head>`

```html
<link rel="preconnect" href="//cdn.jsdelivr.net">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/mskian/cricket-score-widget@main/public/build/bundle.css" integrity="sha512-Fekdf63Eah6fVX7CxwqrtwWcO0WM2jrxZJviGP2nnXBpfj2E6K69Ci96WW1AcLSfcgIqwgQt1G9RSkfDjD5qug==" crossorigin="anonymous">
```

- Add this Javascript on above closed body tag `</body>`

```html
<script src="https://cdn.jsdelivr.net/gh/mskian/cricket-score-widget@main/public/build/bundle.js" integrity="sha512-eVS7IPqUYFVeknj5kfYscBVKrMpRjfw+EhSmY2xwgVibpS5dc124lxMRhe/k0ZC3p92odF5Zoty+KP8yWQEEBA==" crossorigin="anonymous"></script>
```

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
git clone https://github.com/mskian/cricket-score-widget.git
cd cricket-score-widget
yarn
```

or

```sh
npx degit mskian/cricket-score-widget cricket-score-widget
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
