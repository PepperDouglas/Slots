!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){let r=n(1),o=r.symbols,l=r.prizeArr;function u(e){let t=[],n=a(e);for(let r=0;r<8;r++){let r=Math.floor(100*Math.random())+1;switch(!0){case r<=n[0]:t.push(e[0][1]);break;case r>n[0]&&r<=n[1]:t.push(e[1][1]);break;case r>n[1]&&r<=n[2]:t.push(e[2][1]);break;case r>n[2]&&r<=n[3]:t.push(e[3][1]);break;case r>n[3]&&r<=n[4]:t.push(e[4][1]);break;case r>n[4]:t.push(e[5][1])}}return t}function a(e){let t=[];for(let n=0;n<e.length;n++)0===n?t.push(e[n][0]):t.push(e[n][0]+t[n-1]);return t}function c(e){let t=[];for(let n=0;n<12;n++)t.push(u(e));return t}function i(e,t,n){let r=t;for(let t=0;t<e;t++)(r+=1)===n.length&&(r=0);return n[r]}function s(e){let t=[],n=e;return n[0]===n[1]&&n[0]===n[2]&&n[1]===n[3]&&t.push(n[0]),n[4]===n[5]&&n[4]===n[6]&&n[5]===n[7]&&t.push(n[4]),n[8]===n[9]&&n[8]===n[10]&&n[9]===n[11]&&t.push(n[8]),t}let f=1e3;let p=[],d=0;document.getElementById("cashAmount").innerText=f;document.getElementById("spinButton").addEventListener("click",()=>{f-=1;for(let e=0;e<12;e++)document.getElementById(e).innerHTML="";if(s(p=function(e){let t=[],n=c(e),r=0;for(let e=0;e<n.length;e++)r=Math.floor(7*Math.random())+1,t.push(i(5,r,n[e]));return t}(o)).length>0){let e=s(p);d+=function(e){let t=0;if(e.length>0)for(let n=0;n<e.length;n++)switch(e[n]){case"Circle":t+=l[0];break;case"Drop":t+=l[1];break;case"Eye":t+=l[2];break;case"Triangle":t+=l[3];break;case"Square":t+=l[4];break;case"Pentagram":t+=l[5]}return t}(e),f+=d}document.getElementById("cashAmount").innerText=f,function(e,t){let n=`${e[0]} - ${e[1]} - ${e[2]} - ${e[3]}\n`;n+=`${e[4]} - ${e[5]} - ${e[6]} - ${e[7]}\n`,n+=`${e[8]} - ${e[9]} - ${e[10]} - ${e[11]}\n`,console.log(n),t>0?console.log(`You have won ${t} currency!`):console.log("No win!")}(p,d),function(e){for(let t=0;t<12;t++){let n=document.getElementById(t);setTimeout(function(){n.insertAdjacentHTML("afterbegin",`<img src="../img/${e[t]}.png" width="90" height="120" title="image" alt="symbol"></img>`)},50*t)}}(p),d=0}),e.exports.symbols=o,e.exports.diffToHundred=a,e.exports.createReel=u,e.exports.allReels=c,e.exports.loopArray=i},function(e,t){e.exports.symbols=[[25,"Circle"],[20,"Drop"],[20,"Eye"],[15,"Triangle"],[15,"Square"],[5,"Pentagram"]],e.exports.prizeArr=[13,33,33,105,105,8533]}]);