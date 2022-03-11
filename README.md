# Cricket Score Widget

![build-test](https://github.com/mskian/cricket-score-widget/workflows/build-test/badge.svg) [![jsdelivr](https://data.jsdelivr.com/v1/package/npm/cricket-score-widget/badge)](https://www.jsdelivr.com/package/npm/cricket-score-widget)  

Live Cricket Score Javascript Widget Build using Svelte JS.  

DEMO - <https://mskian.github.io/cricket-score-widget/public/>  

## Features

- Just add the Javascript and CSS Bundle Files in your Website/blog - Done
- Live Auto Refresh - Auto Refresh the Score Every 1 Minutes
- Cricket Score API - <https://github.com/mskian/cricket-api-nodejs>
- Fetch API
- Dark Mode Support  

## Usage

- Add this Stylesheet on above `</head>`

```html
<link rel="preconnect" href="//cdn.jsdelivr.net">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/cricket-score-widget@0.0.6/public/build/bundle.css" integrity="sha256-k31RXSyfVM1sRFBerc/RmoJSrw+Mm5jQ5wjlv1etsf4=" crossorigin="anonymous">
```

- Add this Javascript on above closed body tag `</body>`

```html
<script src="https://cdn.jsdelivr.net/npm/cricket-score-widget@0.0.6/public/build/bundle.js" integrity="sha256-yFEv5zhvso3oGaQ2zpa+4GPtQb3RIqFnbYJoZPHmQMs=" crossorigin="anonymous"></script>
```

- Add this HTML Div element to Display Live Cricket Score

```html
<div class="main-score">
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

- Production Build

```sh
yarn build
```

- Modify the Script - `/src/App.svelte`
- Build CSS and Javascript are Stored in `/public/` Folder

## LICENSE

MIT
