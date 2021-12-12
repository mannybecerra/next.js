(()=>{var e={607:function(e,r,o){e=o.nmd(e);
/*! https://mths.be/punycode v1.4.1 by @mathias */(function(o){var n=true&&r&&!r.nodeType&&r;var i=true&&e&&!e.nodeType&&e;var t=typeof global=="object"&&global;if(t.global===t||t.window===t||t.self===t){o=t}var a,f=2147483647,u=36,c=1,d=26,s=38,l=700,p=72,v=128,_="-",h=/^xn--/,w=/[^\x20-\x7E]/,g=/[\x2E\u3002\uFF0E\uFF61]/g,b={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},m=u-c,x=Math.floor,y=String.fromCharCode,C;function error(e){throw new RangeError(b[e])}function map(e,r){var o=e.length;var n=[];while(o--){n[o]=r(e[o])}return n}function mapDomain(e,r){var o=e.split("@");var n="";if(o.length>1){n=o[0]+"@";e=o[1]}e=e.replace(g,".");var i=e.split(".");var t=map(i,r).join(".");return n+t}function ucs2decode(e){var r=[],o=0,n=e.length,i,t;while(o<n){i=e.charCodeAt(o++);if(i>=55296&&i<=56319&&o<n){t=e.charCodeAt(o++);if((t&64512)==56320){r.push(((i&1023)<<10)+(t&1023)+65536)}else{r.push(i);o--}}else{r.push(i)}}return r}function ucs2encode(e){return map(e,(function(e){var r="";if(e>65535){e-=65536;r+=y(e>>>10&1023|55296);e=56320|e&1023}r+=y(e);return r})).join("")}function basicToDigit(e){if(e-48<10){return e-22}if(e-65<26){return e-65}if(e-97<26){return e-97}return u}function digitToBasic(e,r){return e+22+75*(e<26)-((r!=0)<<5)}function adapt(e,r,o){var n=0;e=o?x(e/l):e>>1;e+=x(e/r);for(;e>m*d>>1;n+=u){e=x(e/m)}return x(n+(m+1)*e/(e+s))}function decode(e){var r=[],o=e.length,n,i=0,t=v,a=p,s,l,h,w,g,b,m,y,C;s=e.lastIndexOf(_);if(s<0){s=0}for(l=0;l<s;++l){if(e.charCodeAt(l)>=128){error("not-basic")}r.push(e.charCodeAt(l))}for(h=s>0?s+1:0;h<o;){for(w=i,g=1,b=u;;b+=u){if(h>=o){error("invalid-input")}m=basicToDigit(e.charCodeAt(h++));if(m>=u||m>x((f-i)/g)){error("overflow")}i+=m*g;y=b<=a?c:b>=a+d?d:b-a;if(m<y){break}C=u-y;if(g>x(f/C)){error("overflow")}g*=C}n=r.length+1;a=adapt(i-w,n,w==0);if(x(i/n)>f-t){error("overflow")}t+=x(i/n);i%=n;r.splice(i++,0,t)}return ucs2encode(r)}function encode(e){var r,o,n,i,t,a,s,l,h,w,g,b=[],m,C,I,k;e=ucs2decode(e);m=e.length;r=v;o=0;t=p;for(a=0;a<m;++a){g=e[a];if(g<128){b.push(y(g))}}n=i=b.length;if(i){b.push(_)}while(n<m){for(s=f,a=0;a<m;++a){g=e[a];if(g>=r&&g<s){s=g}}C=n+1;if(s-r>x((f-o)/C)){error("overflow")}o+=(s-r)*C;r=s;for(a=0;a<m;++a){g=e[a];if(g<r&&++o>f){error("overflow")}if(g==r){for(l=o,h=u;;h+=u){w=h<=t?c:h>=t+d?d:h-t;if(l<w){break}k=l-w;I=u-w;b.push(y(digitToBasic(w+k%I,0)));l=x(k/I)}b.push(y(digitToBasic(l,0)));t=adapt(o,C,n==i);o=0;++n}}++o;++r}return b.join("")}function toUnicode(e){return mapDomain(e,(function(e){return h.test(e)?decode(e.slice(4).toLowerCase()):e}))}function toASCII(e){return mapDomain(e,(function(e){return w.test(e)?"xn--"+encode(e):e}))}a={version:"1.4.1",ucs2:{decode:ucs2decode,encode:ucs2encode},decode:decode,encode:encode,toASCII:toASCII,toUnicode:toUnicode};if(typeof define=="function"&&typeof define.amd=="object"&&define.amd){define("punycode",(function(){return a}))}else if(n&&i){if(e.exports==n){i.exports=a}else{for(C in a){a.hasOwnProperty(C)&&(n[C]=a[C])}}}else{o.punycode=a}})(this)}};var r={};function __nccwpck_require__(o){var n=r[o];if(n!==undefined){return n.exports}var i=r[o]={id:o,loaded:false,exports:{}};var t=true;try{e[o].call(i.exports,i,i.exports,__nccwpck_require__);t=false}finally{if(t)delete r[o]}i.loaded=true;return i.exports}(()=>{__nccwpck_require__.nmd=e=>{e.paths=[];if(!e.children)e.children=[];return e}})();if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var o=__nccwpck_require__(607);module.exports=o})();