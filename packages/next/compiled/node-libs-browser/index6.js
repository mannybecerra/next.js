(()=>{var r={750:(r,e,t)=>{var o=t(685);var a=t(310);var i=r.exports;for(var p in o){if(o.hasOwnProperty(p))i[p]=o[p]}i.request=function(r,e){r=validateParams(r);return o.request.call(this,r,e)};i.get=function(r,e){r=validateParams(r);return o.get.call(this,r,e)};function validateParams(r){if(typeof r==="string"){r=a.parse(r)}if(!r.protocol){r.protocol="https:"}if(r.protocol!=="https:"){throw new Error('Protocol "'+r.protocol+'" not supported. Expected "https:"')}return r}},685:r=>{"use strict";r.exports=require("http")},310:r=>{"use strict";r.exports=require("url")}};var e={};function __nccwpck_require__(t){var o=e[t];if(o!==undefined){return o.exports}var a=e[t]={exports:{}};var i=true;try{r[t](a,a.exports,__nccwpck_require__);i=false}finally{if(i)delete e[t]}return a.exports}if(typeof __nccwpck_require__!=="undefined")__nccwpck_require__.ab=__dirname+"/";var t=__nccwpck_require__(750);module.exports=t})();