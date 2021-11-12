# Cricket Score Widget

![build-test](https://github.com/mskian/cricket-score-widget/workflows/build-test/badge.svg)  

Live Cricket Score Javascript Widget Build using Svelte JS.  

## Features

- Just add the Javascript and CSS Bundle Files in your Website/blog - Done
- Live Auto Refresh - Auto Refresh the Score Every 1 Minutes
- Cricket Score API - <https://github.com/mskian/cricket-api-nodejs>
- Fetch API
- Dark Mode Support  

## Usage

- Add this Script and Stylesheet on above `</head>`

```html
<link rel='stylesheet' href='https://unpkg.com/cricket-score-widget@0.0.2/dist/build/bundle.css'>
<script src="https://unpkg.com/cricket-score-widget@0.0.2/dist/build/bundle.js"></script>
```

- Add this HTML Div element to Display Live Cricket Score

```html
<div class="main">
<div class="table-score">
<div class="hello_cricket"></div>
</div>
</div>
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

- Prouction Build

```sh
yarn build
```

- Modify the Script - `/src/App.svelte`
- Build CSS and Javascript are Stored in `/public/` Foler

## LICENSE

MIT
