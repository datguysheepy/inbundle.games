(this["webpackJsonpinbundle.games"]=this["webpackJsonpinbundle.games"]||[]).push([[0],{1289:function(n,t,e){"use strict";e.r(t);var a=e(2),r=e(0),i=e.n(r),l=e(23),o=e.n(l);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=e(10),s=e(12),u=e(3);function m(){var n=Object(a.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tpadding: 0 2em;\n\n\th1 {\n\t\tcolor: #fff;\n\t\tfont-size: 24px;\n\n\t\t:hover {\n\t\t\topacity: 0.8;\n\t\t}\n\t}\n\n\ta {\n\t\tcolor: inherit;\n\t\ttext-decoration: none;\n\t}\n\n\tul {\n\t\ttext-transform: uppercase;\n\t\tlist-style: none;\n\t\tdisplay: flex;\n\t\tmargin-left: auto;\n\t\n\t\tli:first-of-type {\n\t\t\tmargin-right: 1em;\n\t\t}\n\t\n\t\ta:hover {\n\t\t\ttext-decoration: underline;\n\t\t}\n\t\n\t\t@media (max-width: 520px) {\n\t\t\tmargin: 0;\n\t\t\tpadding: 0;\n\t\t\twidth: 185.9px;\n\t\t\tjustify-content: center;\n\t\t}\n\t}\n\n\t@media (max-width: 520px) {\n\t\tflex-direction: column;\n\n\t\th1 {\n\t\t\tmargin-bottom: 6px;\n\t\t}\n\t}\n"]);return m=function(){return n},n}var d=u.b.nav(m());function p(){var n=Object(a.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tpadding: 16px 24px;\n\tpadding-bottom: 16px;\n\tflex-direction: column;\n\ttext-align: center;\n\n\t#md-span {\n\t\tcolor: #fff;\n\t\tmargin-right: 4px;\n\t}\n\n\ta {\n\t\tcolor: inherit;\n\t\ttext-decoration: none;\n\n\t\t:hover {\n\t\t\ttext-decoration: underline;\n\t\t}\n\t}\n\n\tp {\n\t\tmargin: 0;\n\t}\n\n\t#source-info {\n\t\tcolor: #aaa;\n\t\tfont-size: 12px;\n\t\tmargin-top: 4px;\n\n\t\ta {\n\t\t\ttext-decoration: underline;\n\t\t}\n\t}\n"]);return p=function(){return n},n}var f=u.b.footer(p());var h=e(6),g=e.n(h),b=e(11),x=e(8),v=e(28),E=e.n(v);function w(){var n=Object(a.a)(['\n  margin: 12px 0;\n\n  input {\n    padding: 0;\n    background-color: transparent;\n    border-radius: 0;\n    border: none;\n    color: #fff;\n    width: 480px;\n    font-size: 44px;\n    font-family: "Spartan", sans-serif;\n    font-weight: 400;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    height: 48px;\n\n    :focus,\n    :active {\n      outline: none;\n    }\n\n    @media (max-width: 960px) {\n      font-size: 24px;\n      height: 28px;\n    }\n\n    @media (max-width: 560px) {\n      width: 240px;\n    }\n\n    @media (max-width: 380px) {\n      font-size: 18px;\n      height: 22px;\n    }\n  }\n\n  label {\n    position: relative;\n    width: 480px;\n    display: block;\n    display: flex;\n    margin: 0 16px;\n    font-size: 44px;\n    font-weight: 400;\n    height: 50px;\n    align-items: flex-end;\n    border-bottom: 2px solid currentColor;\n    overflow: hidden;\n\n    #u-text {\n      color: #fff;\n    }\n\n    @media (max-width: 960px) {\n      font-size: 24px;\n      height: 30px;\n    }\n\n    @media (max-width: 560px) {\n      width: 240px;\n    }\n\n    @media (max-width: 380px) {\n      font-size: 18px;\n      height: 24px;\n    }\n  }\n']);return w=function(){return n},n}var y=u.b.form(w());var j=Object(s.f)((function(n){var t=Object(r.useState)(""),e=Object(x.a)(t,2),a=e[0],l=e[1],o=Object(r.useState)(!0),c=Object(x.a)(o,2),s=c[0],u=c[1],m=new URLSearchParams(document.location.search.substring(1)).get("title"),d=function(){var n=Object(b.a)(g.a.mark((function n(t){var e,a;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:u(!1),e=t.target,a=e.value,l(a);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return i.a.createElement(y,{onSubmit:function(t){t.preventDefault(),n.history.push({pathname:"/search",state:{game_title:a},search:"?title=".concat(a)})}},i.a.createElement("label",{id:"lb",className:n.propClass},i.a.createElement("span",{id:"u-text"},""===a?m?"":i.a.createElement(E.a,{text:["Grand Theft Auto V","Rimworld","My Friend Pedro","Fallout 76","Stardew Valley","Prison Architect","Frostpunk"],typingDelay:"1000",eraseDelay:"2000",speed:"200"}):""),i.a.createElement("input",{type:"text",value:m&&s?m:a,onChange:function(n){return d(n)},autoFocus:n.autoFocus})),i.a.createElement("input",{type:"submit",hidden:!0}))}));function O(){var n=Object(a.a)(["\n\tdisplay: grid;\n\tgrid-row-gap: 8px;\n\tmargin: 0;\n\tpadding: 0;\n"]);return O=function(){return n},n}function k(){var n=Object(a.a)(["\n\tmargin: 0 8px;\n"]);return k=function(){return n},n}function z(){var n=Object(a.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\tflex-wrap: wrap;\n\tmargin-bottom: 12px;\n\talign-items: flex-end;\n\n\th1 {\n\t\tfont-size: 28px;\n\t\tmargin: 0;\n\t\tcolor: #fff;\n\t\tfont-weight: normal;\n\t}\n\n\t#game-name {\n\t\tmargin: 0 6px;\n\t}\n"]);return z=function(){return n},n}function N(){var n=Object(a.a)(["\n\tmargin: 24px 0;\n\tbackground-color: #1a1a1a;\n\twidth: 928px;\n\ttext-align: center;\n\tpadding: 12px 16px;\n\tborder-radius: 6px;\n\n\t@media (max-width: 980px) {\n\t\twidth: 91%;\n\t}\n"]);return N=function(){return n},n}var A=u.b.div(N()),_=u.b.div(z()),S=u.b.span(k()),L=u.b.ul(O());function C(n){return i.a.createElement(A,null,i.a.createElement(_,null,i.a.createElement("h1",{id:"game-name"},n.title),i.a.createElement("h1",null,i.a.createElement(S,null,n.info.length<=1?"was in a bundle!":"was in a ".concat(n.info.length," bundles:")),i.a.createElement(B,{symbol:"\ud83d\ude42",label:"smile"}))),i.a.createElement(L,null,n.info.map((function(n,t){return i.a.createElement(pn,{key:t,bundle_name:n.name,bundle_start:1e3*parseInt(n.date_start),bundle_end:1e3*parseInt(n.date_end)})}))))}var B=function(n){return i.a.createElement("span",{className:"emoji",role:"img","aria-label":n.label?n.label:"","aria-hidden":n.label?"false":"true",style:{color:n.color?n.color:""}},n.symbol)};function I(){var n=Object(a.a)(["\n\twidth: 52px;\n\tborder-radius: 10px;\n\theight: 5px;\n\tbackground-color: #888;\n\n\t&.active {\n\t\tbackground-color: #fff;\n\t}\n"]);return I=function(){return n},n}function D(){var n=Object(a.a)(["\n\tposition: absolute;\n\tbottom: 0;\n\tdisplay: flex;\n\twidth: 100%;\n\tjustify-content: center;\n\tpadding-bottom: 12px;\n\n\t& > div {\n\t\tmargin-right: 10px;\n\n\t\t:last-of-type {\n\t\t\tmargin-right: 0;\n\t\t}\n\t}\n"]);return D=function(){return n},n}function P(){var n=Object(a.a)(["\n\tposition: absolute;\n\tcolor: #fff;\n\tright: 0;\n\tfont-size: 32px;\n\tcursor: pointer;\n\ttop: 40%;\n\tpadding: 4px 8px;\n\tborder-top-left-radius: 6px;\n\tborder-bottom-left-radius: 6px;\n\n\t:hover {\n\t\tbackground-color: #222;\n\t\topacity: 0.6;\n\t}\n"]);return P=function(){return n},n}function U(){var n=Object(a.a)(["\n\tposition: absolute;\n\tcolor: #fff;\n\tleft: 0;\n\tfont-size: 32px;\n\tcursor: pointer;\n\ttop: 40%;\n\tpadding: 4px 8px;\n\tborder-top-right-radius: 6px;\n\tborder-bottom-right-radius: 6px;\n\n\t:hover {\n\t\tbackground-color: #222;\n\t\topacity: 0.6;\n\t}\n"]);return U=function(){return n},n}function M(){var n=Object(a.a)(["\n\tbackground-image: url('","');\n\twidth: 100%;\n\theight: 100%;\n\tbackground-position: 50%;\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n\tborder-top-left-radius: 6px;\n\tborder-bottom-left-radius: 6px;\n\tdisplay: none;\n\n\t@media (max-width: 720px) {\n\t\tborder-radius: 6px;\n\t}\n"]);return M=function(){return n},n}function W(){var n=Object(a.a)(["\n\tposition: relative;\n\t\n\t@media (max-width: 720px) {\n\t\twidth: 420px;\n\t\theight: 280px;\n\t\tmargin: 0 auto;\n\t}\n\n\t@media (max-width: 480px) {\n\t\twidth: 280px;\n\t\theight: 160px;\n\t}\n"]);return W=function(){return n},n}var G=u.b.div(W()),T=u.b.div(M(),(function(n){return n.url})),Q=u.b.div(U()),R=u.b.div(P()),F=u.b.div(D()),H=u.b.div(I());function X(n){var t=0,e=document.getElementsByClassName("slide-img")||"",a=document.getElementsByClassName("slide-progress")||"";Object(r.useEffect)((function(){n.img_list&&e.length>0&&(e[0].style.display="block",a[0].classList.add("active"))}),[n.img_list,e,a]);var l=function(){if(n.img_list&&e.length>0){if(t>=e.length-1)return t=0,e[e.length-1].style.display="none",e[t].style.display="block",a[e.length-1].classList.remove("active"),void a[t].classList.add("active");e[t].style.display="none",e[t+1].style.display="block",a[t].classList.remove("active"),a[t+1].classList.add("active"),t+=1}};return i.a.createElement(G,null,i.a.createElement(Q,{onClick:function(){if(n.img_list&&e.length>0){var a=document.getElementsByClassName("slide-img"),r=document.getElementsByClassName("slide-progress");0===t?(a[t].style.display="none",a[a.length-1].style.display="block",r[t].classList.remove("active"),r[a.length-1].classList.add("active"),t=a.length-1):(a[t].style.display="none",a[t-1].style.display="block",r[t].classList.remove("active"),r[t-1].classList.add("active"),t-=1)}}},"\u2039"),n.img_list?n.img_list.map((function(n,t){return t<5?i.a.createElement(T,{url:n.image,key:t,className:"slide-img",onClick:l}):null})):null,i.a.createElement(R,{onClick:l},"\u203a"),i.a.createElement(F,null,n.img_list?n.img_list.map((function(n,t){return t<5?i.a.createElement(H,{key:t,className:"slide-progress"}):null})):null))}function J(){var n=Object(a.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\tflex-wrap: wrap;\n\talign-items: flex-end;\n\n\th1 {\n\t\tfont-size: 28px;\n\t\tmargin: 0;\n\t\tfont-weight: normal;\n\n\t\t@media (max-width: 480px) {\n\t\t\tfont-size: 21px;\n\t\t}\n\t}\n\n\t#game-name {\n\t\tmargin: 0 6px;\n\t}\n"]);return J=function(){return n},n}function V(){var n=Object(a.a)(["\n\tmargin: 24px 0;\n\tbackground-color: #1a1a1a;\n\twidth: 928px;\n\ttext-align: center;\n\tpadding: 12px 16px;\n\tborder-radius: 6px;\n\n\t@media (max-width: 980px) {\n\t\twidth: 91%;\n\t}\n"]);return V=function(){return n},n}var Y=u.b.div(V()),$=u.b.div(J());function q(n){return i.a.createElement(Y,null,i.a.createElement($,null,i.a.createElement("h1",{id:"game-name"},n.title),i.a.createElement("h1",null,"was not in a bundle! ",i.a.createElement(B,{symbol:"\ud83d\ude41",label:"sad"}))))}var K=e(13),Z=function(n){return i.a.createElement("span",{className:"svg-icon"},"PC"===n.name?i.a.createElement(K.Windows,{size:12}):"Linux"===n.name?i.a.createElement(K.Linux,{size:12}):"PlaysStation 4"===n.name||"PlayStation 3"===n.name?i.a.createElement(K.Playstation,{size:12}):"Xbox One"===n.name||"Xbox 360"===n.name?i.a.createElement(K.Xbox,{size:12}):"Nintendo Switch"===n.name?i.a.createElement(K.Nintendoswitch,{size:12}):"Android"===n.name?i.a.createElement(K.Android,{size:12}):"iOS"===n.name||"macOS"===n.name?i.a.createElement(K.Apple,{size:12}):null)};function nn(){var n=Object(a.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\n\t.svg-icon {\n\t\tmargin-right: 4px;\n\t}\n"]);return nn=function(){return n},n}function tn(){var n=Object(a.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\n\th3 {\n\t\tcolor: #fff;\n\t\tfont-size: 16px;\n\t\tmargin: 0;\n\t\tmargin-top: 2px;\n\t}\n"]);return tn=function(){return n},n}function en(){var n=Object(a.a)(["\n\theight: 54px;\n\twidth: 43px;\n\tmargin-right: 12px; \n\tbackground-image: url(",");\n\tbackground-position: 50%;\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n\tborder-radius: 6px;\n"]);return en=function(){return n},n}function an(){var n=Object(a.a)(["\n\tposition: relative;\n\theight: 74px;\n\tdisplay: flex;\n\tcursor: pointer;\n\talign-items: center;\n\n\t#border-elem {\n\t\tposition: absolute;\n\t\tborder-bottom: 1px solid #2a2a2a;\n\t\twidth: 92%;\n\t\tbottom: 0;\n\t\tleft: 0;\n\t\tright: 0;\n\t\tmargin: 0 auto;\n\t}\n\n\t:hover, :active {\n\t\topacity: 0.62;\n\t}\n"]);return an=function(){return n},n}var rn=u.b.div(an()),ln=u.b.div(en(),(function(n){return n.game_cover?n.game_cover:""})),on=u.b.div(tn()),cn=u.b.div(nn());var sn=Object(s.f)((function(n){var t=n.platforms||[];return i.a.createElement(rn,{onClick:function(){n.history.push({pathname:"/game",search:"?title=".concat(n.game_title,"&id=").concat(n.game_id)})}},i.a.createElement(ln,{game_cover:n.game_cover}),i.a.createElement(on,null,i.a.createElement(cn,null,t.map((function(n,t){return t<=5?i.a.createElement(Z,{name:n.platform.name,key:t}):null})),t.length>5?i.a.createElement("span",{style:{fontSize:12}},"+",t.length-5):null),i.a.createElement("h3",null,n.game_title)),i.a.createElement("div",{id:"border-elem"}))})),un=function(n){var t=new Date(n),e=t.getDate();e<10&&(e="0".concat(e));var a=t.getMonth()+1;return a<10&&(a="0".concat(a)),e+"-"+a+"-"+t.getFullYear()};function mn(){var n=Object(a.a)(["\n\tmargin: 0 auto;\n\n\tp {\n\t\tmargin: 0;\n\t}\n\n\t#bundle-name {\n\t\tfont-size: 18px;\n\t\tletter-spacing: 2px;\n\t\tfont-weight: bold;\n\t\tmargin: 2px 0;\n\t}\n\n\t#bundle-date {\n\t\tfont-size: 14px;\n\t\tcolor: #fff;\n\t}\n"]);return mn=function(){return n},n}var dn=u.b.li(mn());function pn(n){return i.a.createElement(dn,null,i.a.createElement("p",{id:"bundle-name"},n.bundle_name),i.a.createElement("p",{id:"bundle-date"},"from ",un(n.bundle_start)," to ",un(n.bundle_end)))}function fn(){var n=Object(a.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 32px 0;\n\n  h1 {\n    font-size: 62px;\n    font-weight: 600;\n    margin: 0;\n\n    @media (max-width: 960px) {\n      font-size: 32px;\n    }\n\n    @media (max-width: 380px) {\n      font-size: 24px;\n    }\n  }\n\n  @media (max-width: 1240px) {\n    flex-wrap: wrap;\n    padding: 0 24px;a\n  }\n"]);return fn=function(){return n},n}function hn(){var n=Object(a.a)(["\n  width: 100%;\n  color: inherit;\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return hn=function(){return n},n}var gn=u.b.div(hn()),bn=u.b.div(fn());function xn(){var n=Object(a.a)(["\n\twidth: 760px;\n\tmargin: 21px auto;\n\tcolor: inherit;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tflex-direction: column;\n\tfont-size: 18px;\n\tflex: 1;\n\n\tdiv {\n\t\tborder-left: 2px solid currentColor;\n\t\tpadding-left: 32px;\n\n\t\tp {\n\t\t\tcolor: #fff;\n\t\t\tline-height: 1.3em;\n\n\t\t\t.color {\n\t\t\t\tcolor: var(--main-color);\n\t\t\t}\n\t\t}\n\t}\n\n\ta {\n\t\tcolor: var(--main-color);\n\t\ttext-decoration: none;\n\t\tfont-size: 18px;\n\n\t\t:hover {\n\t\t\topacity: 0.8;\n\t\t}\n\t}\n\n\t#sources {\n\t\tmargin: 32px 0;\n\n\t\tul {\n\t\t\tmargin: 6px 0;\n\n\t\t\tli {\n\t\t\t\tfont-size: 16px;\n\t\t\t\tcolor: #aaa;\n\t\t\t}\n\t\t}\n\t}\n\n\t@media (max-width: 760px) {\n\t\twidth: 90%;\n\t}\n"]);return xn=function(){return n},n}var vn=u.b.div(xn());var En=e(21),wn=e(17),yn=e.n(wn);function jn(){var n=Object(a.a)(["\n  color: #fff;\n  font-size: 18px;\n  text-align: center;\n"]);return jn=function(){return n},n}function On(){var n=Object(a.a)(["\n  margin: 24px 0;\n  width: 640px;\n  display: flex;\n  flex-direction: column;\n  background-color: #1a1a1a;\n  border-radius: 6px;\n  padding: 12px 16px;\n\n  @media (max-width: 980px) {\n    width: 90%;\n  }\n"]);return On=function(){return n},n}function kn(){var n=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  animation: "," ease-out 0.4s;\n  position: relative;\n\n  h1 {\n    font-size: 21px;\n    margin: 0;\n  }\n\n  @media (max-width: 1240px) {\n    margin-top: 24px;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n\n  @media (max-width: 520px) {\n    animation: none;\n  }\n"]);return kn=function(){return n},n}function zn(){var n=Object(a.a)(["\n\t0% {\n\t\ttop: -80px;\n\t}\n\t\n\t100% {\n\t\ttop: 0;\n\t}\n"]);return zn=function(){return n},n}function Nn(){var n=Object(a.a)(["\n  width: 980px;\n  margin: 0 auto;\n  color: inherit;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  flex: 1;\n\n  .loader {\n    margin: 21px 0;\n  }\n\n  .top-input {\n    font-size: 21px;\n    height: 27px;\n    width: 260px;\n\n    input {\n      font-size: 21px;\n      height: 25px;\n      width: 260px;\n    }\n  }\n\n  @media (max-width: 980px) {\n    width: 90%;\n  }\n"]);return Nn=function(){return n},n}var An=u.b.div(Nn()),_n=Object(u.c)(zn()),Sn=u.b.div(kn(),_n),Ln=u.b.div(On()),Cn=u.b.p(jn());function Bn(){var n=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 12px 0;\n\n  h1 {\n    color: #fff;\n    font-size: 18px;\n    min-width: 72%;\n    text-align: center;\n    margin: 0;\n    padding-bottom: 12px;\n    border-bottom: 2px solid gray;\n  }\n\n  section {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 12px 0;\n    border-bottom: 2px solid gray;\n    width: 72%;\n    text-align: center;\n\n    :last-of-type {\n      border-bottom: none;\n    }\n  }\n\n  .detailsQ {\n    margin-right: 4px;\n    line-height: 1.6em;\n  }\n\n  .detailsA {\n    color: #fff;\n    font-size: 14px;\n\n    a {\n      color: inherit;\n      margin-right: 6px;\n    }\n  }\n\n  .svg-icon {\n    margin-right: 4px;\n  }\n"]);return Bn=function(){return n},n}function In(){var n=Object(a.a)(["\n  display: grid;\n  grid-template-columns: 52% 1fr;\n  margin-top: 6px;\n  background-color: #1a1a1a;\n  width: 960px;\n  border-radius: 6px;\n\n  @media (max-width: 980px) {\n    width: 96%;\n  }\n\n  @media (max-width: 720px) {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 30px;\n  }\n"]);return In=function(){return n},n}function Dn(){var n=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  position: relative;\n\n  h1 {\n    font-size: 21px;\n    margin: 0;\n  }\n\n  @media (max-width: 1240px) {\n    margin-top: 24px;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n"]);return Dn=function(){return n},n}function Pn(){var n=Object(a.a)(["\n  width: 980px;\n  margin: 0 auto;\n  color: inherit;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  flex: 1;\n\n  .top-input {\n    font-size: 21px;\n    height: 27px;\n    width: 260px;\n\n    input {\n      font-size: 21px;\n      height: 25px;\n      width: 260px;\n    }\n  }\n\n  @media (max-width: 980px) {\n    width: 96%;\n  }\n"]);return Pn=function(){return n},n}var Un=u.b.div(Pn()),Mn=u.b.div(Dn()),Wn=u.b.div(In()),Gn=u.b.div(Bn());function Tn(){var n=Object(a.a)(["\n\thtml, body {\n\t\tmargin: 0;\n\t\tbackground-color: #111;\n\t\tcolor: var(--main-color);\n\t\tfont-family: 'Spartan', sans-serif;\n\t}\n\n\t:root {\n\t\t--main-color: rgb(",");\n\t}\n"]);return Tn=function(){return n},n}function Qn(){var n=Object(a.a)(["\n\tmin-height: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n"]);return Qn=function(){return n},n}var Rn=u.b.div(Qn()),Fn=Object(u.a)(Tn(),function(n,t,e){var a,r,i;0===n&&(n=Math.random()),n+=.618033988749895,n%=1;var l=Math.floor(6*n),o=6*n-l,c=e*(1-t),s=e*(1-o*t),u=e*(1-(1-o)*t);switch(l%6){case 0:a=e,r=u,i=c;break;case 1:a=s,r=e,i=c;break;case 2:a=c,r=e,i=u;break;case 3:a=c,r=s,i=e;break;case 4:a=u,r=c,i=e;break;case 5:a=e,r=c,i=s}return[Math.round(255*a)+","+Math.round(255*r)+","+Math.round(255*i)]}(0,.7,.95)),Hn=i.a.createElement(c.a,null,i.a.createElement(Fn,null),i.a.createElement(Rn,null,i.a.createElement((function(){var n=Object(s.e)();return i.a.createElement(d,null,i.a.createElement("h1",null,i.a.createElement(c.b,{to:"/"},"inbundle.games")),i.a.createElement("ul",null,i.a.createElement("li",null,"/about"===n.pathname?i.a.createElement(c.b,{to:"/"},"HOME"):i.a.createElement(c.b,{to:"/about"},"ABOUT")),i.a.createElement("li",null,i.a.createElement("a",{href:"https://github.com/datguysheepy/inbundle.games"},"GITHUB"))))}),null),i.a.createElement(s.a,{exact:!0,path:"/",component:function(){return i.a.createElement(gn,null,i.a.createElement(bn,null,i.a.createElement("h1",null,"WAS"),i.a.createElement(j,{autoFocus:!0}),i.a.createElement("h1",null,"IN A BUNDLE?")))}}),i.a.createElement(s.a,{path:"/about",component:function(){return i.a.createElement(vn,null,i.a.createElement("div",null,i.a.createElement("p",null,"inbundle.games is a simple online tool to ",i.a.createElement("span",{className:"color"},"check if a specific games has ever been in bundle")," at Humble Bundle - number of bundles it was in and their exact names and dates on which they were available for purchase. Now, if you've ever wondered if game was bundled then the answer is a few clicks away!"),i.a.createElement("p",null,"inbundle.games stores information about bundles with games for PCs, consoles and mobile phones and our site ",i.a.createElement("span",{className:"color"},'goes back to the first available bundle from Humble Bundle - "The Humble Indie Bundle" from May 2010'),"."),i.a.createElement("p",null,i.a.createElement("span",{className:"color"},"Warning!")," If game has a special version such as: complete edition, game of the year etc., please also check its basic version, because information about its presence in bundles may sometimes be incorrect for special editions. Our site ",i.a.createElement("span",{className:"color"},"does not display")," information about occurrences in bundles for ",i.a.createElement("span",{className:"color"},"DLCs"),"!"),i.a.createElement("p",{id:"sources"},"Creating this page would not be possible without the following pages:",i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:"https://barter.vg/"},"Barter.vg")),i.a.createElement("li",null,i.a.createElement("a",{href:"https://www.steamgifts.com/discussions/deals"},"Steamgifts.com")),i.a.createElement("li",null,i.a.createElement("a",{href:"https://www.reddit.com/r/GameDeals/"},"r/GameDeals")),i.a.createElement("li",null,i.a.createElement("a",{href:"https://isthereanydeal.com/specials/#/filter:page/humblebundle"},"IsThereAnyDEAL")),i.a.createElement("li",null,i.a.createElement("a",{href:"https://en.everybodywiki.com/List_of_Humble_Bundles"},"EverybodyWiki")),i.a.createElement("li",null,i.a.createElement("a",{href:"https://rawg.io/"},"RAWG API")," - their wonderful API allows us to display game details and screenshots"))),i.a.createElement("p",null,"And one more thing ... ",i.a.createElement("span",{className:"color"},"thank you for using my site and I hope it was a pleasant visit"),". Remember if you have encountered an error or you want to report finding incorrect information on our site, you can use ",i.a.createElement("a",{href:"https://github.com/datguysheepy/inbundle.games/issues"},"THIS")," link to do so.")))}}),i.a.createElement(s.a,{path:"/search",component:function(n){var t=Object(r.useState)(!0),e=Object(x.a)(t,2),a=e[0],l=e[1],o=Object(r.useState)([]),c=Object(x.a)(o,2),s=c[0],u=c[1],m=new URLSearchParams(document.location.search.substring(1)).get("title");return Object(r.useEffect)((function(){u([]),function(){var t=Object(b.a)(g.a.mark((function t(){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.rawg.io/api/games?search=".concat(m,"&key=a4f2b0f2ba644c9db2ed4fbcc863365e"),{headers:{"User-Agent":"inbundle.games"}}).then((function(n){return n.json()})).then((function(t){u(t.results),l(!1),t.next&&n(t.next)})).catch((function(n){console.error("Error:",n)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()();var n=function(){var n=Object(b.a)(g.a.mark((function n(t){return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(t),{headers:{"User-Agent":"inbundle.games"}}).then((function(n){return n.json()})).then((function(n){u((function(t){return[].concat(Object(En.a)(t),Object(En.a)(n.results))}))})).catch((function(n){console.error("Error:",n)}));case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}),[m]),i.a.createElement(An,null,i.a.createElement(Sn,null,i.a.createElement("h1",null,"WAS"),i.a.createElement(j,{propClass:"top-input"}),i.a.createElement("h1",null,"IN A BUNDLE?")),a?i.a.createElement(yn.a,{className:"loader",type:"TailSpin",color:"#fff",height:42,width:200,timeout:2500}):s.length>0?i.a.createElement(Ln,null,s.map((function(n,t){return i.a.createElement(sn,{game_title:n.name,game_cover:n.background_image,platforms:n.platforms,game_id:n.id,game_screenshots:n.short_screenshots,key:t})}))):a?null:i.a.createElement(Cn,null,"Sorry, we couldn't find what you were looking for."))}}),i.a.createElement(s.a,{path:"/game",component:function(n){var t=Object(r.useState)(!0),e=Object(x.a)(t,2),a=e[0],l=e[1],o=Object(r.useState)([]),c=Object(x.a)(o,2),s=c[0],u=c[1],m=Object(r.useState)([]),d=Object(x.a)(m,2),p=d[0],f=d[1],h=Object(r.useState)([]),v=Object(x.a)(h,2),E=v[0],w=v[1],y=new URLSearchParams(document.location.search.substring(1)),O=y.get("title"),k=y.get("id");return Object(r.useEffect)((function(){(function(){var n=Object(b.a)(g.a.mark((function n(){return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.rawg.io/api/games/".concat(k,"?key=a4f2b0f2ba644c9db2ed4fbcc863365e"),{headers:{"User-Agent":"inbundle.games"}}).then((function(n){return n.json()})).then((function(n){u(n)})).catch((function(n){console.error("Error:",n)}));case 2:return n.next=4,fetch("https://api.rawg.io/api/games/".concat(k,"/screenshots?key=a4f2b0f2ba644c9db2ed4fbcc863365e"),{headers:{"User-Agent":"inbundle.games"}}).then((function(n){return n.json()})).then((function(n){f(n.results),l(!1)})).catch((function(n){console.error("Error:",n)}));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()(),function(){var n=Object(b.a)(g.a.mark((function n(){var t;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=window.location.href.includes("localhost")?"http://localhost:8888":"https://db.inbundle.games",n.next=3,fetch("".concat(t,"/api/v1/games?title=").concat(O.toUpperCase())).then((function(n){return n.json()})).then((function(n){w(n)})).catch((function(n){console.error("Error:",n)}));case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()()}),[O,k]),i.a.createElement(Un,null,i.a.createElement(Mn,null,i.a.createElement("h1",null,"WAS"),i.a.createElement(j,{propClass:"top-input"}),i.a.createElement("h1",null,"IN A BUNDLE?")),E.length>0?i.a.createElement(C,{title:O,info:E}):i.a.createElement(q,{title:O}),a?i.a.createElement(yn.a,{className:"loader",type:"TailSpin",color:"#fff",height:42,width:200,timeout:2500}):i.a.createElement(Wn,null,i.a.createElement(X,{img_list:p}),i.a.createElement(Gn,null,i.a.createElement("h1",null,"GAME DETAILS:"),i.a.createElement("section",null,i.a.createElement("div",null,i.a.createElement("span",{className:"detailsQ"},"Release date:"),i.a.createElement("span",{className:"detailsA"},s.released)),i.a.createElement("div",null,i.a.createElement("span",{className:"detailsQ"},"Publisher:"),i.a.createElement("span",{className:"detailsA"},s.publishers&&s.publishers.length>0?s.publishers[0].name:null)),i.a.createElement("div",null,i.a.createElement("span",{className:"detailsQ"},"Developer:"),i.a.createElement("span",{className:"detailsA"},s.developers&&s.developers.length>0?s.developers[0].name:null))),i.a.createElement("section",null,i.a.createElement("div",null,i.a.createElement("span",{className:"detailsQ"},"Platforms:"),i.a.createElement("span",{className:"detailsA"},s.platforms?s.platforms.map((function(n,t){return t<=5?i.a.createElement(Z,{name:n.platform.name,key:t}):null})):null,s.platforms&&s.platforms.length>5?i.a.createElement("span",{style:{fontSize:12}},"+",s.platforms.length-5):null)),i.a.createElement("div",null,i.a.createElement("span",{className:"detailsQ"},"Genres:"),i.a.createElement("span",{className:"detailsA"},s.genres?s.genres.map((function(n,t){return s.genres.length>1?i.a.createElement("span",{key:t},n.name,", "):i.a.createElement("span",{key:t},n.name," ")})):null))),i.a.createElement("section",null,i.a.createElement("div",null,i.a.createElement("span",{className:"detailsQ"},"Website:"),i.a.createElement("a",{href:s.website,className:"detailsA"},s.developers&&s.developers.length>0?s.developers[0].name:null)),i.a.createElement("div",null,i.a.createElement("span",{className:"detailsQ"},"Stores:"),i.a.createElement("span",{className:"detailsA"},s.stores?s.stores.map((function(n,t){return i.a.createElement("a",{key:t,href:n.url},n.store.name)})):null))))))}}),i.a.createElement((function(){return i.a.createElement(f,null,i.a.createElement("p",null,i.a.createElement("span",{id:"md-span"},"Made with ",i.a.createElement(B,{symbol:"\u2764\ufe0f",label:"heart",color:"red"})," by "),i.a.createElement("a",{href:"https://github.com/datguysheepy/"}," @datguysheepy")),i.a.createElement("p",{id:"source-info"},"INBUNDLE.GAMES uses ",i.a.createElement("a",{href:"https://rawg.io/apidocs"},"RAWG database API")," to display game details and screenshots."))}),null)));o.a.render(Hn,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))},30:function(n,t,e){n.exports=e(1289)}},[[30,1,2]]]);
//# sourceMappingURL=main.4e26e31c.chunk.js.map