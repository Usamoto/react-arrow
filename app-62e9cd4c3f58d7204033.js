webpackJsonp([0xd2a57dc1d8840000],{"./.cache/api-runner-browser.js":function(e,n){"use strict";var o=[];e.exports=function(e,n,t){var r=o.map(function(o){if(o.plugin[e]){var t=o.plugin[e](n,o.options);return t}});return r=r.filter(function(e){return"undefined"!=typeof e}),r.length>0?r:t?[t]:[]}},"./.cache/async-requires.js":function(e,n,o){"use strict";n.components={"page-component---src-pages-404-js":o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-404-js!./src/pages/404.js"),"page-component---src-pages-index-js":o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-index-js!./src/pages/index.js")},n.json={"404.json":o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json"),"index.json":o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json"),"404-html.json":o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json")},n.layouts={index:o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=layout-component---index!./src/layouts/index.js")}},"./.cache/component-renderer.js":function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var r=o("./node_modules/babel-runtime/helpers/extends.js"),a=t(r),s=o("./node_modules/babel-runtime/core-js/object/get-prototype-of.js"),i=t(s),u=o("./node_modules/babel-runtime/helpers/classCallCheck.js"),c=t(u),l=o("./node_modules/babel-runtime/helpers/createClass.js"),d=t(l),m=o("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),p=t(m),f=o("./node_modules/babel-runtime/helpers/inherits.js"),h=t(f),g=o("./node_modules/react/react.js"),b=t(g),j=o("./.cache/loader.js"),v=t(j),_=o("./.cache/emitter.js"),y=t(_),x=function(e){function n(e){(0,c.default)(this,n);var o=(0,p.default)(this,(n.__proto__||(0,i.default)(n)).call(this));return o.state={location:e.location,pageResources:v.default.getResourcesForPathname(e.location.pathname)},o}return(0,h.default)(n,e),(0,d.default)(n,[{key:"componentWillReceiveProps",value:function(e){var n=this;if(this.state.location.pathname!==e.location.pathname){var o=v.default.getResourcesForPathname(e.location.pathname);o?this.setState({location:e.location,pageResources:o}):v.default.getResourcesForPathname(e.location.pathname,function(o){n.setState({location:e.location,pageResources:o})})}}},{key:"componentDidMount",value:function(){var e=this;y.default.on("onPostLoadPageResources",function(n){n.page.path===v.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:n.pageResources})})}},{key:"shouldComponentUpdate",value:function(e,n){return this.state.pageResources.component!==n.pageResources.component||(this.state.pageResources.json!==n.pageResources.json||!(this.state.location.key===n.location.key||!n.pageResources.page||!n.pageResources.page.matchPath))}},{key:"render",value:function(){return this.state.pageResources?(0,g.createElement)(this.state.pageResources.component,(0,a.default)({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null}}]),n}(b.default.Component);n.default=x},"./.cache/emitter.js":function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var r=o("./node_modules/mitt/dist/mitt.js"),a=t(r),s=(0,a.default)();e.exports=s},"./.cache/find-page.js":function(e,n,o){"use strict";var t=o("./node_modules/react-router-dom/index.js"),r={};e.exports=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(o){var a=o.slice(n.length);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),r[a])return r[a];var s=void 0;return e.some(function(e){if(e.matchPath){if((0,t.matchPath)(a,{path:e.path})||(0,t.matchPath)(a,{path:e.matchPath}))return s=e,r[a]=e,!0}else if((0,t.matchPath)(a,{path:e.path,exact:!0}))return s=e,r[a]=e,!0;return!1}),s}}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---404-html!./.cache/json/404-html.json":function(e,n,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(0xa2868bfb69fc9000,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o("./node_modules/json-loader/index.js!./.cache/json/404-html.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---404!./.cache/json/404.json":function(e,n,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(0xe70826b53c045000,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o("./node_modules/json-loader/index.js!./.cache/json/404.json")})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=path---index!./.cache/json/index.json":function(e,n,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(0x81b8806e42603000,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o("./node_modules/json-loader/index.js!./.cache/json/index.json")})})}},"./.cache/loader.js":function(e,n,o){(function(n){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var r=o("./node_modules/babel-runtime/core-js/get-iterator.js"),a=t(r),s=o("./.cache/find-page.js"),i=t(s),u=o("./.cache/emitter.js"),c=t(u),l=void 0,d={},m={},p={},f={},h={},g=[],b=[],j={},v=[],_={},y=function(e){return e&&e.default||e},x=void 0,w=!0;x=o("./.cache/prefetcher.js")({getNextQueuedResources:function(){return v.slice(-1)[0]},createResourceDownload:function(e){E(e,function(){v=v.filter(function(n){return n!==e}),x.onResourcedFinished(e)})}}),c.default.on("onPreLoadPageResources",function(e){x.onPreLoadPageResources(e)}),c.default.on("onPostLoadPageResources",function(e){x.onPostLoadPageResources(e)});var R=function(e,n){return _[e]>_[n]?1:_[e]<_[n]?-1:0},P=function(e,n){return j[e]>j[n]?1:j[e]<j[n]?-1:0},E=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(f[e])n.nextTick(function(){o(null,f[e])});else{var t="page-c"===e.slice(0,6)?m.components[e]:m.json[e];t(function(n,t){f[e]=t,o(n,t)})}},D=function(e,o){h[e]?n.nextTick(function(){o(null,h[e])}):E(e,function(n,t){if(n)o(n);else{var r=y(t());h[e]=r,o(n,r)}})},k=1,N={empty:function(){b=[],j={},_={},v=[],g=[]},addPagesArray:function(e){g=e;var n="";n="/react-arrow",l=(0,i.default)(e,n)},addDevRequires:function(e){d=e},addProdRequires:function(e){m=e},dequeue:function(e){return b.pop()},enqueue:function(e){if(!g.some(function(n){return n.path===e}))return!1;var n=1/k;k+=1,j[e]?j[e]+=1:j[e]=1,N.has(e)||b.unshift(e),b.sort(P);var o=l(e);return o.jsonName&&(_[o.jsonName]?_[o.jsonName]+=1+n:_[o.jsonName]=1+n,v.indexOf(o.jsonName)!==-1||f[o.jsonName]||v.unshift(o.jsonName)),o.componentChunkName&&(_[o.componentChunkName]?_[o.componentChunkName]+=1+n:_[o.componentChunkName]=1+n,v.indexOf(o.componentChunkName)!==-1||f[o.jsonName]||v.unshift(o.componentChunkName)),v.sort(R),x.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:v,resourcesCount:_}},getPages:function(){return{pathArray:b,pathCount:j}},getPage:function(e){return l(e)},has:function(e){return b.some(function(n){return n===e})},getResourcesForPathname:function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};w&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(l(e)||navigator.serviceWorker.getRegistrations().then(function(e){var n=!0,o=!1,t=void 0;try{for(var r,s=(0,a.default)(e);!(n=(r=s.next()).done);n=!0){var i=r.value;i.unregister()}}catch(e){o=!0,t=e}finally{try{!n&&s.return&&s.return()}finally{if(o)throw t}}window.location.reload()})),w=!1;var t=l(e);if(!t)return void console.log("A page wasn't found for \""+e+'"');if(e=t.path,p[e])return n.nextTick(function(){o(p[e]),c.default.emit("onPostLoadPageResources",{page:t,pageResources:p[e]})}),p[e];c.default.emit("onPreLoadPageResources",{path:e});var r=void 0,s=void 0,i=function(){if(r&&s){p[e]={component:r,json:s,page:t};var n={component:r,json:s,page:t};o(n),c.default.emit("onPostLoadPageResources",{page:t,pageResources:n})}};return D(t.componentChunkName,function(e,n){e&&console.log("Loading the component for "+t.path+" failed"),r=n,i()}),void D(t.jsonName,function(e,n){e&&console.log("Loading the JSON for "+t.path+" failed"),s=n,i()})},peek:function(e){return b.slice(-1)[0]},length:function(){return b.length},indexOf:function(e){return b.length-b.indexOf(e)-1}};e.exports=N}).call(n,o("./node_modules/process/browser.js"))},"./.cache/pages.json":function(e,n){e.exports=[{componentChunkName:"page-component---src-pages-404-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"page-component---src-pages-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"page-component---src-pages-404-js",jsonName:"404-html.json",path:"/404.html"}]},"./.cache/prefetcher.js":function(e,n){"use strict";e.exports=function(e){var n=e.getNextQueuedResources,o=e.createResourceDownload,t=[],r=[],a=function(){var e=n();e&&(r.push(e),o(e))},s=function(e){switch(e.type){case"RESOURCE_FINISHED":r=r.filter(function(n){return n!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":t.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":t=t.filter(function(n){return n!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===t.length&&a()},0)};return{onResourcedFinished:function(e){s({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){s({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){s({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){s({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:t,resourcesDownloading:r}},empty:function(){t=[],r=[]}}}},0:function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function r(e){window.___history||(window.___history=e,e.listen(function(e,n){(0,c.default)("onRouteUpdate",{location:e,action:n})}))}function a(e,n){var o=n.location.pathname,t=(0,c.default)("shouldUpdateScroll",{prevRouterProps:e,pathname:o});if(t.length>0)return t[0];if(e){var r=e.location.pathname;if(r===o)return!1}return!0}var s=o("./node_modules/babel-runtime/helpers/extends.js"),i=t(s),u=o("./.cache/api-runner-browser.js"),c=t(u),l=o("./node_modules/react/react.js"),d=t(l),m=o("./node_modules/react-dom/index.js"),p=t(m),f=o("./node_modules/react-router-dom/index.js"),h=o("./node_modules/react-router-scroll/lib/index.js"),g=o("./node_modules/history/createBrowserHistory.js"),b=t(g),j=o("./.cache/emitter.js"),v=t(j),_=o("./.cache/pages.json"),y=t(_),x=o("./.cache/component-renderer.js"),w=t(x),R=o("./.cache/async-requires.js"),P=t(R),E=o("./.cache/loader.js"),D=t(E);window.___emitter=v.default,D.default.addPagesArray(y.default),D.default.addProdRequires(P.default),window.asyncRequires=P.default,window.___loader=D.default,window.matchPath=f.matchPath,(0,c.default)("onClientEntry"),(0,c.default)("registerServiceWorker").length>0&&o("./.cache/register-service-worker.js");var k=function(e){function n(t){t.page.path===D.default.getPage(e).path&&(v.default.off("onPostLoadPageResources",n),clearTimeout(o),window.___history.push(e))}if(window.location.pathname!==e){var o=setTimeout(function(){v.default.off("onPostLoadPageResources",n),v.default.emit("onDelayedLoadPageResources",{pathname:e}),window.___history.push(e)},1e3);D.default.getResourcesForPathname(e)?(clearTimeout(o),window.___history.push(e)):v.default.on("onPostLoadPageResources",n)}};window.___navigateTo=k;var N=(0,b.default)();(0,c.default)("onRouteUpdate",{location:N.location,action:N.action});var O=(0,c.default)("replaceRouterComponent",{history:N})[0],C=function(e){var n=e.children;return d.default.createElement(f.BrowserRouter,{history:N},n)},T=function(e){P.default.layouts.index?P.default.layouts.index(function(n,o){var t=o();e(t)}):e(function(e){return d.default.createElement("div",null,e.children())})};T(function(e){D.default.getResourcesForPathname(window.location.pathname,function(){var n=function(){return(0,l.createElement)(O?O:C,null,(0,l.createElement)(h.ScrollContext,{shouldUpdateScroll:a},(0,l.createElement)((0,f.withRouter)(e),{children:function(e){return(0,l.createElement)(f.Route,{render:function(n){r(n.history);var o=e?e:n;return D.default.getPage(o.location.pathname)?(0,l.createElement)(w.default,(0,i.default)({},o)):(0,l.createElement)(w.default,{location:{pathname:"/404.html"}})}})}})))},o=(0,c.default)("wrapRootComponent",{Root:n},n)[0];p.default.render(d.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0)})})},"./.cache/register-service-worker.js":function(e,n,o){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var r=o("./.cache/emitter.js"),a=t(r),s="/";s="/react-arrow/","serviceWorker"in navigator&&navigator.serviceWorker.register(s+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var n=e.installing;console.log("installingWorker",n),n.addEventListener("statechange",function(){switch(n.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js":function(e,n,o){"use strict";function t(){function e(e){var n=t.lastChild;return"SCRIPT"!==n.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",n)):void(n.onload=n.onerror=function(){n.onload=n.onerror=null,setTimeout(e,0)})}var n,t=document.querySelector("head"),r=o.e,a=o.s;o.e=function(t,s){var i=!1,u=!0,c=function(e){s&&(s(o,e),s=null)};return!a&&n&&n[t]?void c(!0):(r(t,function(){i||(i=!0,u?setTimeout(function(){c()}):c())}),void(i||(u=!1,e(function(){i||(i=!0,a?a[t]=void 0:(n||(n={}),n[t]=!0),c(!0))}))))}}t()},"./node_modules/hoist-non-react-statics/index.js":function(e,n){"use strict";var o={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,arguments:!0,arity:!0},r="function"==typeof Object.getOwnPropertySymbols;e.exports=function(e,n,a){if("string"!=typeof n){var s=Object.getOwnPropertyNames(n);r&&(s=s.concat(Object.getOwnPropertySymbols(n)));for(var i=0;i<s.length;++i)if(!(o[s[i]]||t[s[i]]||a&&a[s[i]]))try{e[s[i]]=n[s[i]]}catch(e){}}return e}},"./node_modules/mitt/dist/mitt.js":function(e,n){function o(e){return e=e||Object.create(null),{on:function(n,o){(e[n]||(e[n]=[])).push(o)},off:function(n,o){e[n]&&e[n].splice(e[n].indexOf(o)>>>0,1)},emit:function(n,o){(e[n]||[]).map(function(e){e(o)}),(e["*"]||[]).map(function(e){e(n,o)})}}}e.exports=o},"./node_modules/process/browser.js":function(e,n){function o(){throw new Error("setTimeout has not been defined")}function t(){throw new Error("clearTimeout has not been defined")}function r(e){if(l===setTimeout)return setTimeout(e,0);if((l===o||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(n){try{return l.call(null,e,0)}catch(n){return l.call(this,e,0)}}}function a(e){if(d===clearTimeout)return clearTimeout(e);if((d===t||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(n){try{return d.call(null,e)}catch(n){return d.call(this,e)}}}function s(){h&&p&&(h=!1,p.length?f=p.concat(f):g=-1,f.length&&i())}function i(){if(!h){var e=r(s);h=!0;for(var n=f.length;n;){for(p=f,f=[];++g<n;)p&&p[g].run();g=-1,n=f.length}p=null,h=!1,a(e)}}function u(e,n){this.fun=e,this.array=n}function c(){}var l,d,m=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:o}catch(e){l=o}try{d="function"==typeof clearTimeout?clearTimeout:t}catch(e){d=t}}();var p,f=[],h=!1,g=-1;m.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)n[o-1]=arguments[o];f.push(new u(e,n)),1!==f.length||h||r(i)},u.prototype.run=function(){this.fun.apply(null,this.array)},m.title="browser",m.browser=!0,m.env={},m.argv=[],m.version="",m.versions={},m.on=c,m.addListener=c,m.once=c,m.off=c,m.removeListener=c,m.removeAllListeners=c,m.emit=c,m.prependListener=c,m.prependOnceListener=c,m.listeners=function(e){return[]},m.binding=function(e){throw new Error("process.binding is not supported")},m.cwd=function(){return"/"},m.chdir=function(e){throw new Error("process.chdir is not supported")},m.umask=function(){return 0}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=layout-component---index!./src/layouts/index.js":function(e,n,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(0xef47e37750d80000,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/michael/Development/mine/react-arrow/docs/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/michael/Development/mine/react-arrow/docs/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/michael/Development/mine/react-arrow/docs/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/michael/Development/mine/react-arrow/docs/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/michael/Development/mine/react-arrow/docs/node_modules/babel-preset-env/lib/index.js","/Users/michael/Development/mine/react-arrow/docs/node_modules/babel-preset-stage-0/lib/index.js","/Users/michael/Development/mine/react-arrow/docs/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/layouts/index.js')})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-404-js!./src/pages/404.js":function(e,n,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(0x7107efd8fd846000,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/michael/Development/mine/react-arrow/docs/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/michael/Development/mine/react-arrow/docs/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/michael/Development/mine/react-arrow/docs/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/michael/Development/mine/react-arrow/docs/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/michael/Development/mine/react-arrow/docs/node_modules/babel-preset-env/lib/index.js","/Users/michael/Development/mine/react-arrow/docs/node_modules/babel-preset-stage-0/lib/index.js","/Users/michael/Development/mine/react-arrow/docs/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/404.js')})})}},"./node_modules/gatsby/dist/loaders/gatsby-module-loader/index.js?name=page-component---src-pages-index-js!./src/pages/index.js":function(e,n,o){o("./node_modules/gatsby/dist/loaders/gatsby-module-loader/patch.js"),e.exports=function(e){return o.e(0x37beb808d31a9600,function(n,t){t?(console.log("bundle loading error",t),e(!0)):e(null,function(){return o('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/michael/Development/mine/react-arrow/docs/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/michael/Development/mine/react-arrow/docs/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/michael/Development/mine/react-arrow/docs/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/michael/Development/mine/react-arrow/docs/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/michael/Development/mine/react-arrow/docs/node_modules/babel-preset-env/lib/index.js","/Users/michael/Development/mine/react-arrow/docs/node_modules/babel-preset-stage-0/lib/index.js","/Users/michael/Development/mine/react-arrow/docs/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/index.js')})})}}});
//# sourceMappingURL=app-62e9cd4c3f58d7204033.js.map