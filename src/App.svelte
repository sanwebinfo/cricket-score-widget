<script>
async function fetchscore() {
  const helloCricketClass = document.getElementsByClassName("hello_cricket");
  const link = document.querySelector('link[rel="canonical"]')
    ? document.querySelector('link[rel="canonical"]')
    : document.createElement("link");
  const pathname = typeof window !== "undefined" ? window.location.href : "";
  link.setAttribute("rel", "canonical");
  link.setAttribute("href", pathname);
  document.head.appendChild(link);

  let url = new URL(window.location);
  let searchParams = new URLSearchParams(url.search);
  const getInput = searchParams.get("match") || null;
  try {
    const response = await fetch(`https://cricketapi.deno.dev/match/${getInput}`);
    const data = await response.json();
    if (data === false || data.current === "Data Not Found") {
      if (helloCricketClass != null) {
        let score_msg =
          "<br><b><hr><p><code>🔴 Currently No Live Match 🔴</code></p><hr><b><br>";
        score_text(helloCricketClass, score_msg);
      }
    } else if (helloCricketClass != null) {
      document
        .getElementsByTagName("meta")
        .namedItem("description")
        .setAttribute(
          "content",
          `Live - ${data.title} - Get Real-time Live Cricket Score Update without refreshing the page.`
        );
      document.title = `${data.title} Live Cricket Score 🏏`;
      let score_msg = `
				         <table>
                 <tbody>
                 <tr>
                 <th>🏏 Match</th>
                 <td>${data.title}</td>
                 </tr>
                 <tr>
                 <th>📊 Status</th>
                 <td>${data.update}</td>
                 </tr>
                 <tr>
                 <th>🔴 Live</th>
                 <td>${data.current}</td>
                 </tr>
                 <tr>
                 <th>📉 Run rate</th>
                 <td>${data.runrate}</td>
                 </tr>
                 <tr>
                 <th>Current 🏏 Batsman</th>
                 <td>${data.batsman} (${data.batsmanrun} Runs)</td>
                 </tr>
                 <tr>
                 <th>Current 🏏 Bowler</th>
                 <td>${data.bowler} - Overs ${data.bowlerover}</td>
                 </tr>
                 </tbody>
                 </table>`;
      score_text(helloCricketClass, score_msg);
    }
  } catch (exception) {
    if (helloCricketClass != null) {
      let score_msg = "<p>🔴 Connection Lost or Enter a valid Match URL</p>";
      score_text(helloCricketClass, score_msg);
    }
  }
}
function score_text(helloCricketClass, text) {
  for (let i = 0; i < helloCricketClass.length; i++) {
    helloCricketClass[i].innerHTML =
      "<br><b><hr><p><code>🔵 Fetching the Live Score 🔵</code></p><hr><br><br>";
    setTimeout(() => {
      helloCricketClass[i].innerHTML = text;
    }, 1000);
  }
}
fetchscore();
setInterval(fetchscore, 60 * 2000);
</script>

<style>
	@font-face {
  font-family: system-ui;
  font-style: italic;
  font-weight: 300;
  src: local(".SFNSText-LightItalic"),
    local(".HelveticaNeueDeskInterface-Italic"), local(".LucidaGrandeUI"),
    local("Segoe UI Light Italic"), local("Ubuntu Light Italic"),
    local("Roboto-LightItalic"), local("DroidSans"), local("Tahoma");
}

@font-face {
  font-family: system-ui;
  font-style: normal;
  font-weight: 400;
  src: local(".SFNSText-Regular"), local(".HelveticaNeueDeskInterface-Regular"),
    local(".LucidaGrandeUI"), local("Segoe UI"), local("Ubuntu"),
    local("Roboto-Regular"), local("DroidSans"), local("Tahoma");
}

@font-face {
  font-family: system-ui;
  font-style: italic;
  font-weight: 400;
  src: local(".SFNSText-Italic"), local(".HelveticaNeueDeskInterface-Italic"),
    local(".LucidaGrandeUI"), local("Segoe UI Italic"), local("Ubuntu Italic"),
    local("Roboto-Italic"), local("DroidSans"), local("Tahoma");
}

@font-face {
  font-family: system-ui;
  font-style: normal;
  font-weight: 500;
  src: local(".SFNSText-Medium"), local(".HelveticaNeueDeskInterface-MediumP4"),
    local(".LucidaGrandeUI"), local("Segoe UI Semibold"), local("Ubuntu Medium"),
    local("Roboto-Medium"), local("DroidSans-Bold"), local("Tahoma Bold");
}

@font-face {
  font-family: system-ui;
  font-style: italic;
  font-weight: 500;
  src: local(".SFNSText-MediumItalic"),
    local(".HelveticaNeueDeskInterface-MediumItalicP4"),
    local(".LucidaGrandeUI"), local("Segoe UI Semibold Italic"),
    local("Ubuntu Medium Italic"), local("Roboto-MediumItalic"),
    local("DroidSans-Bold"), local("Tahoma Bold");
}

@font-face {
  font-family: system-ui;
  font-style: normal;
  font-weight: 700;
  src: local(".SFNSText-Bold"), local(".HelveticaNeueDeskInterface-Bold"),
    local(".LucidaGrandeUI"), local("Segoe UI Bold"), local("Ubuntu Bold"),
    local("Roboto-Bold"), local("DroidSans-Bold"), local("Tahoma Bold");
}

@font-face {
  font-family: system-ui;
  font-style: italic;
  font-weight: 700;
  src: local(".SFNSText-BoldItalic"),
    local(".HelveticaNeueDeskInterface-BoldItalic"), local(".LucidaGrandeUI"),
    local("Segoe UI Bold Italic"), local("Ubuntu Bold Italic"),
    local("Roboto-BoldItalic"), local("DroidSans-Bold"), local("Tahoma Bold");
}
:global(.main-score) {
  padding: 1em;
  max-width: 80%;
  margin: 0 auto;
  font-family: system-ui;
}
@media (min-width: 640px) {
:global(.main-score) {
    max-width: 50%;
  }
}
:global(.main-score, p) {
	text-align: center;
	font-size: 16px;
	font-family: system-ui;
}
@media (prefers-color-scheme: dark) {
  :global(.main-score, p) {
    color: #fff;
    text-align: center;
	  font-size: 16px;
	font-family: system-ui;
  }
}
:global(.table-score tr) {
  border: 1px solid rgb(51, 50, 50);
  padding: 8px 12px;
  color: #2d362e;
}
@media (prefers-color-scheme: dark) {
  :global(.table-score tr) {
  border: 1px solid rgb(25, 43, 32);
  padding: 8px 12px;
  color: #fff;
  background-color: #333;
  }
}
:global(.table-score th, .table-score td) {
  font-size: 13px;
}
:global(.table-score th) {
  font-size: 15px;
  padding: 20px;
}
:global(.table-score td) {
  font-size: 15px;
  padding: 20px;
}
@media screen and (max-width: 600px) {
  :global(.table-score) {
    border: 0;
  }
  :global(.table-score caption) {
    font-size: 14px;
  }
  :global(.table-score thead) {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  :global(.table-score tr) {
    display: block;
    margin-bottom: 1px;
  }
  :global(.table-score td) {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: 14px;
    text-align: right;
  }
  :global(.table-score td::before) {
    content: attr(data-label);
    float: left;
    font-weight: 700;
    text-transform: uppercase;
  }
  :global(.table-score td:last-child) {
    border-bottom: 0;
  }
}
:global(.table-score th) {
  overflow-wrap: break-word;
}
:global(.table-score table) {
  border-collapse: collapse;
  border-spacing: 50;
  border: 1px solid rgb(19, 13, 13);
  overflow-wrap: break-word;
  border-collapse: collapse;
  margin: 0.5em 0 2.5em;
  width: 100%;
  table-layout: fixed;
}
@media (prefers-color-scheme: dark) {
:global(.table-score table) {
  border-collapse: collapse;
  border-spacing: 50;
  border: 1px solid #a5fd99;
  overflow-wrap: break-word;
  border-collapse: collapse;
  margin: 0.5em 0 2.5em;
  width: 100%;
  table-layout: fixed;
 }
}
:global(.table-score th, td) {
  text-align: left;
  padding: 10px;
}
:global(.table-score tr:nth-child(even)) {
  background-color: #c2adad33;
}
@media (prefers-color-scheme: dark) {
  :global(.table-score tr:nth-child(even)) {
    color: #fff;
    background-color: #333;
  }
}
@media (prefers-color-scheme: dark) {
  :global(.table-score th) {
    color: #fff;
    background-color: #333;
  }
}
:global(.score-btn) {
  padding: 1em 2.1em 1.1em;
  border-radius: 3px;
  border: none;
  margin: 8px 8px 8px 8px;
  color: #fbdedb;
  background-color: #fbdedb;
  display: inline-block;
  background: #e74c3c;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  font-family: sans-serif;
  font-weight: 800;
  font-size: .85em;
  text-transform: uppercase;
  text-align: center;
  text-decoration: none;
  -webkit-box-shadow: 0em -0.3rem 0em rgba(0, 0, 0, 0.1) inset;
  -moz-box-shadow: 0em -0.3rem 0em rgba(0, 0, 0, 0.1) inset;
  box-shadow: 0em -0.3rem 0em rgba(0, 0, 0, 0.1) inset;
  cursor:pointer;
}
:global(.score-btn), :global(.score-btn:focus) {
  opacity: 0.8;
}
:global(.score-btn:active) {
  -webkit-transform: scale(0.80);
  -moz-transform: scale(0.80);
  -ms-transform: scale(0.80);
  -o-transform: scale(0.80);
  transform: scale(0.80);
}
:global(.score-btn.block) {
  display: block !important;
}
:global(.score-btn.circular) {
border-radius: 50em !important;
}
</style>