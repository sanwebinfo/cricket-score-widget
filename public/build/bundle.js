var cricketwidget=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function o(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t){t.parentNode&&t.parentNode.removeChild(t)}let i;function u(t){i=t}const s=[],d=[];let l=[];const f=[],h=Promise.resolve();let $=!1;function p(t){l.push(t)}const m=new Set;let g=0;function b(){if(0!==g)return;const t=i;do{try{for(;g<s.length;){const t=s[g];g++,u(t),y(t.$$)}}catch(t){throw s.length=0,g=0,t}for(u(null),s.length=0,g=0;d.length;)d.pop()();for(let t=0;t<l.length;t+=1){const e=l[t];m.has(e)||(m.add(e),e())}l.length=0}while(s.length);for(;f.length;)f.pop()();$=!1,m.clear(),u(t)}function y(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(p)}}const w=new Set;function _(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];l.forEach((r=>-1===t.indexOf(r)?e.push(r):n.push(r))),n.forEach((t=>t())),l=e}(n.after_update),r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function v(t,e){-1===t.$$.dirty[0]&&(s.push(t),$||($=!0,h.then(b)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function k(c,s,d,l,f,h,$,m=[-1]){const g=i;u(c);const y=c.$$={fragment:null,ctx:[],props:h,update:t,not_equal:f,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(g?g.$$.context:[])),callbacks:n(),dirty:m,skip_bound:!1,root:s.target||g.$$.root};$&&$(y.root);let _=!1;if(y.ctx=d?d(c,s.props||{},((t,e,...n)=>{const r=n.length?n[0]:e;return y.ctx&&f(y.ctx[t],y.ctx[t]=r)&&(!y.skip_bound&&y.bound[t]&&y.bound[t](r),_&&v(c,t)),e})):[],y.update(),_=!0,r(y.before_update),y.fragment=!!l&&l(y.ctx),s.target){if(s.hydrate){const t=(L=s.target,Array.from(L.childNodes));y.fragment&&y.fragment.l(t),t.forEach(a)}else y.fragment&&y.fragment.c();s.intro&&((k=c.$$.fragment)&&k.i&&(w.delete(k),k.i(x))),function(t,n,c){const{fragment:a,after_update:i}=t.$$;a&&a.m(n,c),p((()=>{const n=t.$$.on_mount.map(e).filter(o);t.$$.on_destroy?t.$$.on_destroy.push(...n):r(n),t.$$.on_mount=[]})),i.forEach(p)}(c,s.target,s.anchor),b()}var k,x,L;u(g)}async function x(){const t=document.getElementsByClassName("hello_cricket"),e=document.querySelector('link[rel="canonical"]')?document.querySelector('link[rel="canonical"]'):document.createElement("link"),n="undefined"!=typeof window?window.location.href:"";e.setAttribute("rel","canonical"),e.setAttribute("href",n),document.head.appendChild(e);let r=new URL(window.location);const o=new URLSearchParams(r.search).get("match")||null;try{const e=await fetch(`https://criscore.deno.dev/match/${o}`),n=await e.json();if(!1===n||"Data Not Found"===n.current){if(null!=t){L(t,"<br><b><hr><p><code>🔴 Currently No Live Match 🔴</code></p><hr><b><br>")}}else if(null!=t){document.getElementsByTagName("meta").namedItem("description").setAttribute("content",`Live - ${n.title} - Get Real-time Live Cricket Score Update without refreshing the page.`),document.title=`${n.title} Live Cricket Score 🏏`,L(t,`\n\t\t\t\t         <table>\n                 <tbody>\n                 <tr>\n                 <th>🏏 Match</th>\n                 <td>${n.title}</td>\n                 </tr>\n                 <tr>\n                 <th>📊 Status</th>\n                 <td>${n.update}</td>\n                 </tr>\n                 <tr>\n                 <th>🔴 Live</th>\n                 <td>${n.current}</td>\n                 </tr>\n                 <tr>\n                 <th>📉 Run rate</th>\n                 <td>${n.runrate}</td>\n                 </tr>\n                 <tr>\n                 <th>Current 🏏 Batsman</th>\n                 <td>${n.batsman} (${n.batsmanrun} Runs)</td>\n                 </tr>\n                 <tr>\n                 <th>Current 🏏 Bowler</th>\n                 <td>${n.bowler} - Overs ${n.bowlerover}</td>\n                 </tr>\n                 </tbody>\n                 </table>`)}}catch(e){if(null!=t){L(t,"<p>🔴 Connection Lost or Enter a valid Match URL</p>")}}}function L(t,e){for(let n=0;n<t.length;n++)t[n].innerHTML="<br><b><hr><p><code>🔵 Fetching the Live Score 🔵</code></p><hr><br><br>",setTimeout((()=>{t[n].innerHTML=e}),1e3)}function E(t){return x(),setInterval(x,12e4),[]}"undefined"!=typeof window&&(window.__svelte||(window.__svelte={v:new Set})).v.add("4");return new class extends class{$$=void 0;$$set=void 0;$destroy(){_(this,1),this.$destroy=t}$on(e,n){if(!o(n))return t;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const t=r.indexOf(n);-1!==t&&r.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),k(this,t,E,null,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
