(()=>{"use strict";const t=t=>{const e=t.target.matches("[data-dropdown-button]");if(!e&&null!=t.target.closest("[data-dropdown]"))return;let n;e&&(function(t){const e=t.target.closest(".editContainer");if(null!=t.target.closest(".tile")){const t=document.getElementById("projectOption");t.classList.remove("hidden"),e.appendChild(t)}else if(null!=t.target.closest("li")){const t=document.getElementById("listOption");t.classList.remove("hidden"),e.appendChild(t)}}(t),n=t.target.closest("[data-dropdown]"),setTimeout((function(){n.classList.toggle("active")}),0)),document.querySelectorAll("[data-dropdown].active").forEach((t=>{t!==n&&t.classList.remove("active")}))},e=t=>{let e=t.target.parentNode.parentNode,s=e.parentNode;n(e),!0===r()&&(a(),i()),function(t){const e=t.parentNode,n=document.getElementById("renameForm");let r=t.querySelector(".projectName").textContent;n.querySelector("input").value=r,e.insertBefore(n,t)}(s),o(),document.getElementById("projectRenameInput").focus(),s.classList.add("hidden")},n=t=>{t.classList.remove("active")},r=()=>!document.querySelector("#renameForm").classList.contains("hidden");function a(){const t=document.getElementById("renameForm"),e=document.querySelector(".project");t.classList.add("hidden"),e.appendChild(t)}const o=()=>{const t=document.querySelector("#renameForm");setTimeout((function(){t.classList.remove("hidden")}),0)},i=()=>{document.querySelector("div.hidden").classList.remove("hidden")},s=t=>{let e=t.target.closest(".tile"),n=e.dataset.project;if(e.classList.contains("selected")){const t=document.querySelector("#today"),e=t.querySelector("[data-name]");t.classList.add("selected"),Lt(e)}d(),e.remove(),c(),Ct.splice(n,1),Dt()};function c(){let t=0;document.querySelectorAll(".project .tile").forEach((e=>{let n=e.dataset.project;e.dataset.project=t,Ct[n].dataProject=t,t++})),Ct.sort(((t,e)=>t.dataProject-e.dataProject)),Dt()}function d(){const t=document.querySelector("#projectOption");t.classList.add("hidden"),document.querySelector(".project").appendChild(t);const e=document.querySelector("#listOption");e.classList.add("hidden"),document.querySelector(".list-todo").appendChild(e)}const u={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function l(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const m={date:l({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:l({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:l({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},h={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function f(t){return(e,n)=>{let r;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,a=n?.width?String(n.width):e;r=t.formattingValues[a]||t.formattingValues[e]}else{const e=t.defaultWidth,a=n?.width?String(n.width):t.defaultWidth;r=t.values[a]||t.values[e]}return r[t.argumentCallback?t.argumentCallback(e):e]}}function g(t){return(e,n={})=>{const r=n.width,a=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],o=e.match(a);if(!o)return null;const i=o[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(s)?function(t,e){for(let e=0;e<t.length;e++)if(t[e].test(i))return e}(s):function(t,e){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].test(i))return e}(s);let d;return d=t.valueCallback?t.valueCallback(c):c,d=n.valueCallback?n.valueCallback(d):d,{value:d,rest:e.slice(i.length)}}}var p;const y={code:"en-US",formatDistance:(t,e,n)=>{let r;const a=u[t];return r="string"==typeof a?a:1===e?a.one:a.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:m,formatRelative:(t,e,n,r)=>h[t],localize:{ordinalNumber:(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:f({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:f({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:f({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:f({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:f({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(p={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(p.matchPattern);if(!n)return null;const r=n[0],a=t.match(p.parsePattern);if(!a)return null;let o=p.valueCallback?p.valueCallback(a[0]):a[0];return o=e.valueCallback?e.valueCallback(o):o,{value:o,rest:t.slice(r.length)}}),era:g({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:g({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:g({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:g({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:g({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};let w={};function b(){return w}Math.pow(10,8);const v=6048e5,S=864e5,L=36e5,k=Symbol.for("constructDateFrom");function q(t,e){return"function"==typeof t?t(e):t&&"object"==typeof t&&k in t?t[k](e):t instanceof Date?new t.constructor(e):new Date(e)}function E(t,e){return q(e||t,t)}function C(t){const e=E(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function M(t,e){const n=E(t,e?.in);return n.setHours(0,0,0,0),n}function D(t,e){const n=E(t,e?.in);return function(t,e,n){const[r,a]=function(t,...e){const n=q.bind(null,t||e.find((t=>"object"==typeof t)));return e.map(n)}(n?.in,t,e),o=M(r),i=M(a),s=+o-C(o),c=+i-C(i);return Math.round((s-c)/S)}(n,function(t,e){const n=E(t,e?.in);return n.setFullYear(n.getFullYear(),0,1),n.setHours(0,0,0,0),n}(n))+1}function x(t,e){const n=b(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,a=E(t,e?.in),o=a.getDay(),i=(o<r?7:0)+o-r;return a.setDate(a.getDate()-i),a.setHours(0,0,0,0),a}function N(t,e){return x(t,{...e,weekStartsOn:1})}function P(t,e){const n=E(t,e?.in),r=n.getFullYear(),a=q(n,0);a.setFullYear(r+1,0,4),a.setHours(0,0,0,0);const o=N(a),i=q(n,0);i.setFullYear(r,0,4),i.setHours(0,0,0,0);const s=N(i);return n.getTime()>=o.getTime()?r+1:n.getTime()>=s.getTime()?r:r-1}function j(t,e){const n=E(t,e?.in),r=+N(n)-+function(t,e){const n=P(t,e),r=q(e?.in||t,0);return r.setFullYear(n,0,4),r.setHours(0,0,0,0),N(r)}(n);return Math.round(r/v)+1}function T(t,e){const n=E(t,e?.in),r=n.getFullYear(),a=b(),o=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??a.firstWeekContainsDate??a.locale?.options?.firstWeekContainsDate??1,i=q(e?.in||t,0);i.setFullYear(r+1,0,o),i.setHours(0,0,0,0);const s=x(i,e),c=q(e?.in||t,0);c.setFullYear(r,0,o),c.setHours(0,0,0,0);const d=x(c,e);return+n>=+s?r+1:+n>=+d?r:r-1}function I(t,e){const n=E(t,e?.in),r=+x(n,e)-+function(t,e){const n=b(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,a=T(t,e),o=q(e?.in||t,0);return o.setFullYear(a,0,r),o.setHours(0,0,0,0),x(o,e)}(n,e);return Math.round(r/v)+1}function W(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const F={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return W("yy"===e?r%100:r,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):W(n+1,2)},d:(t,e)=>W(t.getDate(),e.length),a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>W(t.getHours()%12||12,e.length),H:(t,e)=>W(t.getHours(),e.length),m:(t,e)=>W(t.getMinutes(),e.length),s:(t,e)=>W(t.getSeconds(),e.length),S(t,e){const n=e.length,r=t.getMilliseconds();return W(Math.trunc(r*Math.pow(10,n-3)),e.length)}},B={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),r=e>0?e:1-e;return n.ordinalNumber(r,{unit:"year"})}return F.y(t,e)},Y:function(t,e,n,r){const a=T(t,r),o=a>0?a:1-a;return"YY"===e?W(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):W(o,e.length)},R:function(t,e){return W(P(t),e.length)},u:function(t,e){return W(t.getFullYear(),e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return W(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return W(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return F.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return W(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const a=I(t,r);return"wo"===e?n.ordinalNumber(a,{unit:"week"}):W(a,e.length)},I:function(t,e,n){const r=j(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):W(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):F.d(t,e)},D:function(t,e,n){const r=D(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):W(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return W(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const a=t.getDay(),o=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return W(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return W(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let a;switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let a;switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return F.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):F.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):W(r,e.length)},k:function(t,e,n){let r=t.getHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):W(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):F.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):F.s(t,e)},S:function(t,e){return F.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return O(r);case"XXXX":case"XX":return H(r);default:return H(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return O(r);case"xxxx":case"xx":return H(r);default:return H(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Y(r,":");default:return"GMT"+H(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Y(r,":");default:return"GMT"+H(r,":")}},t:function(t,e,n){return W(Math.trunc(+t/1e3),e.length)},T:function(t,e,n){return W(+t,e.length)}};function Y(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),a=Math.trunc(r/60),o=r%60;return 0===o?n+String(a):n+String(a)+e+W(o,2)}function O(t,e){return t%60==0?(t>0?"-":"+")+W(Math.abs(t)/60,2):H(t,e)}function H(t,e=""){const n=t>0?"-":"+",r=Math.abs(t);return n+W(Math.trunc(r/60),2)+e+W(r%60,2)}const A=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},z=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},Q={p:z,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return A(t,e);let o;switch(r){case"P":o=e.dateTime({width:"short"});break;case"PP":o=e.dateTime({width:"medium"});break;case"PPP":o=e.dateTime({width:"long"});break;default:o=e.dateTime({width:"full"})}return o.replace("{{date}}",A(r,e)).replace("{{time}}",z(a,e))}},G=/^D+$/,U=/^Y+$/,X=["D","DD","YY","YYYY"];function $(t){return!(!((e=t)instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e))&&"number"!=typeof t||isNaN(+E(t)));var e}const J=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,R=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Z=/^'([^]*?)'?$/,V=/''/g,_=/[a-zA-Z]/;function K(t){const e=t.match(Z);return e?e[1].replace(V,"'"):t}const tt={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},et=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,nt=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,rt=/^([+-])(\d{2})(?::?(\d{2}))?$/;function at(t){return t?parseInt(t):1}function ot(t){return t&&parseFloat(t.replace(",","."))||0}const it=[31,null,31,30,31,30,31,31,30,31,30,31];function st(t){return t%400==0||t%4==0&&t%100!=0}const ct=function(t,e){const n=()=>q(e?.in,NaN),r=e?.additionalDigits??2,a=function(t){const e={},n=t.split(tt.dateTimeDelimiter);let r;if(n.length>2)return e;if(/:/.test(n[0])?r=n[0]:(e.date=n[0],r=n[1],tt.timeZoneDelimiter.test(e.date)&&(e.date=t.split(tt.timeZoneDelimiter)[0],r=t.substr(e.date.length,t.length))),r){const t=tt.timezone.exec(r);t?(e.time=r.replace(t[1],""),e.timezone=t[1]):e.time=r}return e}(t);let o;if(a.date){const t=function(t,e){const n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),r=t.match(n);if(!r)return{year:NaN,restDateString:""};const a=r[1]?parseInt(r[1]):null,o=r[2]?parseInt(r[2]):null;return{year:null===o?a:100*o,restDateString:t.slice((r[1]||r[2]).length)}}(a.date,r);o=function(t,e){if(null===e)return new Date(NaN);const n=t.match(et);if(!n)return new Date(NaN);const r=!!n[4],a=at(n[1]),o=at(n[2])-1,i=at(n[3]),s=at(n[4]),c=at(n[5])-1;if(r)return function(t,e,n){return e>=1&&e<=53&&n>=0&&n<=6}(0,s,c)?function(t,e,n){const r=new Date(0);r.setUTCFullYear(t,0,4);const a=7*(e-1)+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+a),r}(e,s,c):new Date(NaN);{const t=new Date(0);return function(t,e,n){return e>=0&&e<=11&&n>=1&&n<=(it[e]||(st(t)?29:28))}(e,o,i)&&function(t,e){return e>=1&&e<=(st(t)?366:365)}(e,a)?(t.setUTCFullYear(e,o,Math.max(a,i)),t):new Date(NaN)}}(t.restDateString,t.year)}if(!o||isNaN(+o))return n();const i=+o;let s,c=0;if(a.time&&(c=function(t){const e=t.match(nt);if(!e)return NaN;const n=ot(e[1]),r=ot(e[2]),a=ot(e[3]);return function(t,e,n){return 24===t?0===e&&0===n:n>=0&&n<60&&e>=0&&e<60&&t>=0&&t<25}(n,r,a)?n*L+6e4*r+1e3*a:NaN}(a.time),isNaN(c)))return n();if(!a.timezone){const t=new Date(i+c),n=E(0,e?.in);return n.setFullYear(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()),n.setHours(t.getUTCHours(),t.getUTCMinutes(),t.getUTCSeconds(),t.getUTCMilliseconds()),n}return s=function(t){if("Z"===t)return 0;const e=t.match(rt);if(!e)return 0;const n="+"===e[1]?-1:1,r=parseInt(e[2]),a=e[3]&&parseInt(e[3])||0;return function(t,e){return e>=0&&e<=59}(0,a)?n*(r*L+6e4*a):NaN}(a.timezone),isNaN(s)?n():E(i+c+s,e?.in)};function dt(t){t.matches("#allTasks")?lt():t.matches("#today")?function(){ut();let t=Date.parse(function(t,e,n){const r=b(),a=n?.locale??r.locale??y,o=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=E(t,n?.in);if(!$(s))throw new RangeError("Invalid time value");let c=e.match(R).map((t=>{const e=t[0];return"p"===e||"P"===e?(0,Q[e])(t,a.formatLong):t})).join("").match(J).map((t=>{if("''"===t)return{isToken:!1,value:"'"};const e=t[0];if("'"===e)return{isToken:!1,value:K(t)};if(B[e])return{isToken:!0,value:t};if(e.match(_))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return{isToken:!1,value:t}}));a.localize.preprocessor&&(c=a.localize.preprocessor(s,c));const d={firstWeekContainsDate:o,weekStartsOn:i,locale:a};return c.map((r=>{if(!r.isToken)return r.value;const o=r.value;return(!n?.useAdditionalWeekYearTokens&&function(t){return U.test(t)}(o)||!n?.useAdditionalDayOfYearTokens&&function(t){return G.test(t)}(o))&&function(t,e,n){const r=function(t,e,n){const r="Y"===t[0]?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(t,e,n);if(console.warn(r),X.includes(t))throw new RangeError(r)}(o,e,String(t)),(0,B[o[0]])(s,o,a.localize,d)})).join("")}(new Date,"yyyy-MM-dd"));Ct.forEach((e=>{e.taskList.forEach((e=>{var n,r;n=Date.parse(e.date),r=t,+E(n)==+E(r)&&St(e.id,e.title,e.details,e.date,e.completed,e.important)}))})),mt()}():t.matches("#thisWeek")?(ut(),Ct.forEach((t=>{t.taskList.forEach((t=>{(function(t){let e=function(t,e,n){const r=E(t,n?.in);return isNaN(e)?q(n?.in||t,NaN):e?(r.setDate(r.getDate()+e),r):r}(new Date,8);return function(t,e,n){const r=+E(t,n?.in),[a,o]=[+E(e.start,n?.in),+E(e.end,n?.in)].sort(((t,e)=>t-e));return r>=a&&r<=o}(t,{start:new Date,end:e})})(ct(t.date))&&St(t.id,t.title,t.details,t.date,t.completed,t.important)}))})),mt()):t.matches("#important")&&(ut(),Ct.forEach((t=>{t.taskList.forEach((t=>{t.important&&St(t.id,t.title,t.details,t.date,t.completed,t.important)}))})),mt())}function ut(){document.querySelector("ul").textContent=""}function lt(){ut(),Ct.forEach((t=>{t.taskList.forEach((t=>{St(t.id,t.title,t.details,t.date,t.completed,t.important)}))})),Wt(),mt()}function mt(){""===document.querySelector("ul").textContent&&function(){const t=document.querySelector("ul"),e=document.createElement("div");e.classList.add("noTask"),e.textContent="Yay! No Tasks!",t.appendChild(e)}()}function ht(t){return Ct.reduce(((e,n)=>{let r=n.taskList.find((e=>e.id==t));return null!=r&&(e=r),e}),{})}function ft(t){const e=document.querySelector(".selected");if(null!=e.closest(".project"))vt(t);else{if(null==e.closest(".home"))return;dt(e)}}function gt(){const t=document.querySelector("#editListForm"),e=document.querySelector(".list-todo");t.classList.add("hidden"),e.appendChild(t)}function pt(){document.querySelector("li.hidden").classList.remove("hidden")}const yt=()=>{const t=document.querySelector(".wrapper"),e=document.querySelector("#listForm"),n=document.querySelector("#listInput"),r=document.querySelector("#listInputDetail"),a=document.querySelector("#listInputDate");n.value="",r.value="",a.value="",t.classList.add("hidden"),e.style.display="none"};let wt=Number(localStorage.getItem("currentId"))||0;function bt(t){let e;return e=t||"No Due Date",e}function vt(t){document.querySelector("ul").textContent="",Ct[t].taskList.forEach((t=>{St(t.id,t.title,t.details,t.date,t.completed,t.important)}))}function St(t,e,n,r,a,o){const i=document.querySelector("ul"),s=document.createElement("li");s.id=t,i.appendChild(s);const c=document.createElement("div");c.classList.add("unchecked"),s.appendChild(c);const d=document.createElement("div");d.classList.add("list-details"),s.appendChild(d),a&&(c.classList.toggle("checked"),d.classList.toggle("lineThrough"),d.classList.toggle("fade"));const u=document.createElement("div");u.classList.add("taskTitle"),u.textContent=e,d.appendChild(u);const l=document.createElement("div");l.classList.add("taskDetails"),l.textContent=n,d.appendChild(l);const m=document.createElement("div");m.classList.add("date"),m.textContent=r,s.appendChild(m);const h=document.createElement("div");h.classList.add("list-right"),s.appendChild(h);const f=Tt("star_outline");f.classList.add("star-outline"),h.appendChild(f);const g=Tt("star");g.classList.add("important"),h.appendChild(g),o?f.classList.add("listHidden"):g.classList.add("listHidden");const p=document.createElement("div");p.dataset.dropdown="",p.classList.add("editContainer"),h.appendChild(p);const y=Tt("more_vert");y.dataset.dropdownButton="",p.appendChild(y)}function Lt(t){document.querySelector(".title").textContent=t.textContent}function kt(t){t.target.matches("[data-drag]")&&(t.target.parentNode.draggable=!0)}function qt(t){t.addEventListener("dragstart",(()=>{t.classList.add("dragging")})),t.addEventListener("dragend",(()=>{t.classList.remove("dragging"),t.draggable=!1,c(),console.log(Ct)}))}function Et(t){t.preventDefault();const e=document.querySelector(".project"),n=document.querySelector(".dragging"),r=document.querySelector("#projectForm"),a=(o=t.clientY,[...document.querySelectorAll(".project .tile:not(.dragging)")].reduce(((t,e)=>{const n=e.getBoundingClientRect(),r=o-n.top-n.height/2;return r<0&&r>t.offset?{offset:r,element:e}:t}),{offset:Number.NEGATIVE_INFINITY}).element);var o;null==a?e.insertBefore(n,r):e.insertBefore(n,a)}let Ct=localStorage.getItem("myProjectList");Ct=JSON.parse(Ct||JSON.stringify([]));const Mt=t=>{let e=document.getElementById("projectInput").value,n=It();const r=xt(n,e);Ct.push(r),Dt(),jt(n,e),Pt(),t.preventDefault()};function Dt(){localStorage.setItem("myProjectList",JSON.stringify(Ct)),localStorage.setItem("currentId",wt.toString())}const xt=(t,e)=>{const n=[];return{dataProject:t,name:e,taskList:n,taskNum:n.length}},Nt=()=>{document.querySelector("#projectForm").classList.remove("hidden"),document.getElementById("projectInput").focus()},Pt=()=>{const t=document.querySelector("#projectForm");document.querySelector("#projectInput").value="",t.classList.add("hidden")},jt=(t,e)=>{const n=document.querySelector(".project"),r=document.querySelector("#projectForm"),a=document.createElement("div");a.setAttribute("data-project",`${t}`),a.classList.add("tile"),n.insertBefore(a,r);const o=Tt("menu");o.setAttribute("data-drag",""),a.appendChild(o);const i=document.createElement("div");i.classList.add("projectInfo"),a.appendChild(i);const s=document.createElement("div");s.classList.add("projectName"),s.textContent=e,i.appendChild(s);const c=document.createElement("div");c.classList.add("editContainer"),c.setAttribute("data-dropdown",""),a.appendChild(c);const d=Tt("more_vert");d.setAttribute("data-dropdown-button",""),c.appendChild(d),qt(a)},Tt=t=>{const e=document.createElement("span");return e.classList.add("material-icons-round"),e.textContent=t,e},It=()=>document.querySelectorAll("[data-project]").length;function Wt(){document.getElementById("addList").classList.add("hidden")}function Ft(t){let e=t.target.closest(".home .tile"),n=t.target.closest(".project .tile");if(null!=e){const t=e.querySelector("[data-name]");Bt(e),d(),dt(e),Lt(t),Wt()}else{if(null==n)return;{const t=n.querySelector(".projectName");let e=n.dataset.project;gt(),d(),vt(e),Bt(n),Lt(t),document.getElementById("addList").classList.remove("hidden")}}}const Bt=t=>{document.querySelector(".selected").classList.remove("selected"),t.classList.add("selected")};document.querySelector("#addList").addEventListener("click",(()=>{const t=document.querySelector(".wrapper"),e=document.querySelector("#listForm");t.classList.remove("hidden"),e.style.display="flex",document.getElementById("listInput").focus()})),document.querySelector(".listCancelBtn").addEventListener("click",yt),document.getElementById("listForm").addEventListener("submit",(function(t){let e=document.getElementById("listInput").value,n=document.getElementById("listInputDetail").value,r=document.getElementById("listInputDate").value,a=document.querySelector(".selected").dataset.project,o=bt(r),i=wt;const s=((t,e,n,r,a,o,i)=>({dataProject:t,id:e,title:n,details:r,completed:a,important:o,date:i}))(a,i,e,n,!1,!1,o);Ct[a].taskList.push(s),wt++,Dt(),St(i,e,n,o),yt(),t.preventDefault()})),document.querySelector(".list-todo").addEventListener("click",(function(t){let e=t.target.matches(".star-outline"),r=t.target.matches(".unchecked"),a=t.target.matches(".editTaskSubmitBtn"),o=t.target.matches(".editTaskCancelBtn"),i=t.target.matches("#listDelete"),s=t.target.matches("#listEdit");if(e)!function(t){t.target.classList.toggle("listHidden"),t.target.nextElementSibling.classList.toggle("listHidden")}(t),function(t){let e=ht(t.target.closest("li").id);e.important=!e.important,Dt(),d(),ft(e.dataProject)}(t);else if(r)!function(t){let e=t.target,n=t.target.closest("li").querySelector(".list-details");n.classList.toggle("lineThrough"),n.classList.toggle("fade"),e.classList.toggle("checked")}(t),function(t){let e=ht(t.target.closest("li").id);e.completed=!e.completed,Dt()}(t);else if(i)!function(t){let e=t.target.closest("li"),n=ht(e.id),r=n.dataProject;Ct[r].taskList=Ct[r].taskList.filter((t=>t!=n)),Dt(),d(),e.remove()}(t);else if(s)!function(t){let e=t.target.parentNode.parentNode;n(e),function(t){let e=t.target.closest("li"),n=e.parentNode;const r=document.getElementById("editListForm"),a=e.querySelector(".taskTitle").textContent,o=e.querySelector(".taskDetails").textContent,i=e.querySelector(".date").textContent,s=r.querySelector("#editListTitle"),c=r.querySelector("#editListInputDetail"),d=r.querySelector("#editListInputDate");s.value=a,c.value=o,d.value=i,e.classList.add("hidden"),r.classList.remove("hidden"),n.insertBefore(r,e)}(t),document.getElementById("editListTitle").focus()}(t);else if(a)!function(t){let e=document.querySelector("#editListTitle").value,n=document.querySelector("#editListInputDetail").value,r=document.querySelector("#editListInputDate").value,a=ht(document.querySelector("li.hidden").id);a.title=e,a.details=n,a.date=bt(r),Dt(),gt(),d(),pt(),ft(a.dataProject),t.preventDefault()}(t);else{if(!o)return;gt(),pt()}})),document.querySelector(".projectCancelBtn").addEventListener("click",Pt),document.getElementById("addProject").addEventListener("click",Nt),document.getElementById("projectForm").addEventListener("submit",Mt),document.querySelector(".leftPanel").addEventListener("click",Ft),Ct.forEach((t=>{jt(t.dataProject,t.name)})),function(){document.addEventListener("click",t);const n=document.querySelector(".project .option");n.firstElementChild.addEventListener("click",e),n.lastElementChild.addEventListener("click",s),document.querySelector(".rename-renameBtn").addEventListener("click",(function(t){(t=>{const e=document.querySelector(".project .tile.hidden");let n=document.getElementById("projectRenameInput").value;const r=e.querySelector(".projectName");r.textContent=n;let o=e.dataset.project;Ct[o].name=n,Dt(),i(),Lt(r),a()})(),t.preventDefault()})),document.querySelector(".rename-cancelBtn").addEventListener("click",(function(){a(),i()}))}(),function(){const t=document.querySelector(".project");t.addEventListener("mousedown",kt),document.querySelectorAll(".project .tile").forEach((t=>{qt(t)})),t.addEventListener("dragover",Et)}(),lt(),document.querySelector(".hiddenMenu").addEventListener("click",(()=>{document.querySelector(".leftPanel").classList.toggle("hidden")}))})();