(self.webpackChunklego_website=self.webpackChunklego_website||[]).push([[835],{1596:(A,e,t)=>{var r={"./arms.png":1614,"./axles.png":3708,"./biscuits.png":9687,"./bushing.png":3116,"./connectors-spacers.png":2385,"./connectors.png":9946,"./frames.png":9243,"./gears.png":2465,"./links.png":3683,"./perp-connector-multi.png":3959,"./perpendicular-connectors.png":9540,"./pins.png":5652,"./plates.png":5507,"./spacers.png":3303};function a(A){var e=n(A);return t(e)}function n(A){if(!t.o(r,A)){var e=new Error("Cannot find module '"+A+"'");throw e.code="MODULE_NOT_FOUND",e}return r[A]}a.keys=function(){return Object.keys(r)},a.resolve=n,A.exports=a,a.id=1596},3905:(A,e,t)=>{"use strict";t.d(e,{Zo:()=>o,kt:()=>u});var r=t(7294);function a(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function n(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,r)}return t}function s(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?n(Object(t),!0).forEach((function(e){a(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function c(A,e){if(null==A)return{};var t,r,a=function(A,e){if(null==A)return{};var t,r,a={},n=Object.keys(A);for(r=0;r<n.length;r++)t=n[r],e.indexOf(t)>=0||(a[t]=A[t]);return a}(A,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);for(r=0;r<n.length;r++)t=n[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(a[t]=A[t])}return a}var l=r.createContext({}),i=function(A){var e=r.useContext(l),t=e;return A&&(t="function"==typeof A?A(e):s(s({},e),A)),t},o=function(A){var e=i(A.components);return r.createElement(l.Provider,{value:e},A.children)},p={inlineCode:"code",wrapper:function(A){var e=A.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(A,e){var t=A.components,a=A.mdxType,n=A.originalType,l=A.parentName,o=c(A,["components","mdxType","originalType","parentName"]),d=i(t),u=a,m=d["".concat(l,".").concat(u)]||d[u]||p[u]||n;return t?r.createElement(m,s(s({ref:e},o),{},{components:t})):r.createElement(m,s({ref:e},o))}));function u(A,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof A||a){var n=t.length,s=new Array(n);s[0]=d;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=A,c.mdxType="string"==typeof A?A:a,s[1]=c;for(var i=2;i<n;i++)s[i]=t[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},947:(A,e,t)=>{"use strict";t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));t(3708);const n=JSON.parse('{"D":[{"desc":"If a part has an X shaped cross bar to it, it\'s an <i>axle</i>. Axles and pins are the most common technic parts and can be found as features on many other pieces. An \'axle\' is just an axle, a part that combines features would be named \'something and axle\', e.g. the common blue connectors are \'axle and pin connectors\'.","label":"Axles","img":"axles.png"},{"desc":"A piece that connects two technic pieces is a <i>pin</i>. Pins can be \'frictionless\' or have \'friction ridges\' and can also be combined with other parts like axles.","label":"Pins","img":"pins.png"},{"desc":"The standard technic piece is called a liftarm, or arm for short. Arms that aren\'t straight are described by their shape, e.g. L-shape arm, Bent arm, double-bent arm.","label":"Arms (Liftarms)","img":"arms.png"},{"desc":"These small pieces are \'bushings\', pieces that are used for their friction to keep other pieces in place.","label":"Bushing (Bush)","img":"bushing.png"},{"desc":"These pieces are similar to bushings but they are used to space out parts frictionlessly.","label":"Spacers","img":"spacers.png"},{"desc":"Connectors connect pins together and can act as larger spacers.","label":"Connectors","img":"connectors-spacers.png"},{"desc":"Almost anything with teeth is a gear. Gears are usually referred to by the number of teeth and their thickness.","label":"Gears","img":"gears.png"},{"desc":"These parts are commonly called <i>biscuits</i> and are great at securing multiple sections of a project together.","label":"Pin Connector Block (a.k.a. The Biscuit)","img":"biscuits.png"},{"desc":"These parts have three features, they connect two axles together, have a spot for a pin, and are often angled.","label":"Axle & Pin connector","img":"connectors.png"},{"desc":"These square/rectangular liftarms are referred to as \'frames\'.","label":"Frames","img":"frames.png"},{"desc":"These pieces link together liftarms across gaps or to account for moving parts.","label":"Links","img":"links.png"},{"desc":"These pieces connect pins and axles perpendicularly (at right angles). Describe them by their size (2L, 3L) and where their pin hole is (e.g. 3L perpendicular connector with center pin hole).","label":"Perpendicular Connectors","img":"perpendicular-connectors.png"},{"desc":"These perpendicular connectors are described by the number of pins, their length, and any other features, e.g. double, triple, double 4L, double split.","label":"(More) Perpendicular Connectors","img":"perp-connector-multi.png"},{"desc":"Plates are used as large, clean-looking frames. They do not have many attachment points and are mostly decorative.","label":"Plates","img":"plates.png"}]}'),s={sidebar_position:3},c="Technic Glossary",l={unversionedId:"technic/glossary",id:"technic/glossary",title:"Technic Glossary",description:"To build Lego robots on a team you must first learn how to communicate.",source:"@site/docs/technic/glossary.mdx",sourceDirName:"technic",slug:"/technic/glossary",permalink:"/docs/technic/glossary",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/technic/glossary.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Technic Tips",permalink:"/docs/technic/"},next:{title:"Tutorials",permalink:"/docs/category/tutorials"}},i={},o=n.D.map((A=>{let{label:e,img:r,desc:n}=A;return(0,a.kt)("tr",null,(0,a.kt)("td",{style:{width:"40%"}},(0,a.kt)("img",{src:t(1596)(`./${r}`).default})),(0,a.kt)("td",null,(0,a.kt)("h4",null,e)),(0,a.kt)("td",null,(0,a.kt)("p",{dangerouslySetInnerHTML:{__html:n}})))})),p=[],d={toc:p};function u(A){let{components:e,...t}=A;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"technic-glossary"},"Technic Glossary"),(0,a.kt)("p",null,"To build Lego robots on a team you must first learn how to communicate."),(0,a.kt)("table",null,o),(0,a.kt)("p",null,"Hey"))}u.isMDXComponent=!0},1614:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>r});const r=t.p+"assets/images/arms-8637b19682d6ab0a517e98f862d98d40.png"},3708:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>r});const r=t.p+"assets/images/axles-557cd6f7afaffc72f2bdf100017069f4.png"},9687:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>r});const r=t.p+"assets/images/biscuits-bbc58c7d711b83b7a30f7fcf4d4d98d2.png"},3116:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>r});const r="data:image/png;base64,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"},2385:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>r});const r=t.p+"assets/images/connectors-spacers-af562338036fd3841eb0684be580470e.png"},9946:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>r});const r=t.p+"assets/images/connectors-1872ec1ba838865b89940e301be74bf6.png"},9243:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>r});const r=t.p+"assets/images/frames-2802de76b401c7f33d79d483023862fc.png"},2465:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>r});const r=t.p+"assets/images/gears-697e60d245d95b668c007cb84b4b2ab9.png"},3683:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>r});const r=t.p+"assets/images/links-d6356b1e884b063e0afa070f1ac99dda.png"},3959:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>r});const r=t.p+"assets/images/perp-connector-multi-3d25056ccf1986191ab777fe256ee1d8.png"},9540:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>r});const r=t.p+"assets/images/perpendicular-connectors-500046edaddda9f1ba967ebf42223706.png"},5652:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>r});const r=t.p+"assets/images/pins-28d393020310bb477113f5d98c10e0da.png"},5507:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>r});const r=t.p+"assets/images/plates-11aa286a92d21bc4b083c9b676f735a9.png"},3303:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>r});const r="data:image/png;base64,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bFfQuHZ4SNKC7g/yT//ytVO6QOhcKBfmf28BhcgCphUDKwMBgkVz+kxTktS3NtBNgz3q6/W1sT/Utl+ravPGUFLR7rDqVAmvvFbXMz+eUGMsnrMNSRzlvY1mZNVozT3qTauZZj7LanomUyvqGt4qDms7l7Xv/gcXOHyVu/eSz7y84asrvukVsNQIECyaT+0aPTBwXWWkv6+kWtXX6TOxetcEuumGit7/nrXq7wvyZR3F8FJm80D5+qNH9cLhhhTlVUcrsvmwVJRXG80oD4yZRj49d7qeaWom00zDKula+xHFc6qOMUn33v/g6GV9UP/j1//5lKR71V4cOO9WIK7rizn5cWlhcunhBKwg/nJfAK5tf/Q7m4bTzA5bmylLra7b2CPrnNLUausta9S/LtTho638XlBOnW2vZIy23FKTMcob5HFegeRDWK6oPpzqjbwKiRNXTNzKq4907tKSfZLuu8zKo+O5nz3/8q+/545DTvps55uu/ZA/ad+N0Dkn17kjoe30SuYZk/SRp7799P9cyXUBy4UAwaL64/uGDhnp880oVrnkyfeM1veV1GhkCkNP120oadttVb12vKVmK/9T3lqnyalE77tjg8olT624WEUeOzVbefXRaDrNNPIwaU/NTYoA6RquGlFedez75jPj01fj/RQh8veSeuXUucthewZWHhrq3Mp2/lEYk/Rvku578ttPv3w1rgtYDmz1hkX37KPb9544ObnL2kyl0GjTxrypnhXrNjxP8j2j7/3fOX3nx+fzNYOp059+7ja96/aaPN8oitprOooGepTPrsqslNni+dwF5k/c/+DoZd1AaiH+8LP37bTO7XbODjvrZJ2VtVbWuuLRytpMWf58RNIjTz79FA1zXBMIECy6b/7NDYM33dh/0rMzKgWe5BlFqeSsVRI7uWInd88YnTkb6xtPjetnL7b09tvX6Au7bleSdm1NUiwIbDfeM5uv7+jqNYxIeuT+B0eX/EP693/394adc8PW2jFr7YBtB0pmRw789xOs8cA1hwDBkjj06PY9oYl2l/xEYeipFUtR6mRcXj207/7qlPdADv28rh8enNaffW6LpmcyzTTzrUlS21V5ZHOGq8aUz7Das0xvEfiVQ4BgyTz36B0HesvNHWGQ35Rpsu5knZGnVFmW9w5su4kuqdnKtHZdn44ca8p4nmw2O1yVzh2uGpH0wJU2yQEsDNN4sWSs8/Y0k7IkozD0tHFdIMnIKugsJnQu3+LE96VqJV9wWO7x89XnWTHDajY8xpQvCryX8ACWHhUIltSh/duHa5X04NpKJhlfM81M041sdhqstTKSrAvkBWUZY/TaiZaaraLXMWuf8kY5DWlgmRAgWHKH9m/f2xNmu3orieLEqd7IlFrJ87p2tzWhjBfIOU+vHo8007LdjfJH6HUAy48hLCy5937m2QeixN83WS8pim2x7YhVFGWytp0SiWwWScpXlRfh8YSkIcIDWBmoQLBsDu3fvkeyu5K4MbC535fvSa+fihUERps3BJpuljXTkg4fjcYk7aTPAawsBAiW1cj+7YPO2ccD3wyvq6byPadWbBQlnhLr6/SZ5InxyfSB+x8c5WZLwApDgGBFOLR/+/DZc/Ge/r7SsKQB5cNVD7z3M88SHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAa9n/A/rtbqr91gjDAAAAAElFTkSuQmCC"}}]);