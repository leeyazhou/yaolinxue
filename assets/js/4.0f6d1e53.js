(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{414:function(t,n,e){},415:function(t,n,e){},421:function(t,n,e){"use strict";var r=e(414);e.n(r).a},422:function(t,n,e){"use strict";var r=e(415);e.n(r).a},423:function(t,n,e){var r=e(239),i=e(232),o=e(424),a=e(428);t.exports=function(t,n){if(null==t)return{};var e=r(a(t),(function(t){return[t]}));return n=i(n),o(t,e,(function(t,e){return n(t,e[0])}))}},424:function(t,n,e){var r=e(136),i=e(425),o=e(130);t.exports=function(t,n,e){for(var a=-1,s=n.length,u={};++a<s;){var p=n[a],c=r(t,p);e(c,p)&&i(u,o(p,t),c)}return u}},425:function(t,n,e){var r=e(426),i=e(130),o=e(134),a=e(95),s=e(65);t.exports=function(t,n,e,u){if(!a(t))return t;for(var p=-1,c=(n=i(n,t)).length,l=c-1,m=t;null!=m&&++p<c;){var f=s(n[p]),v=e;if(p!=l){var g=m[f];void 0===(v=u?u(g,f,m):void 0)&&(v=a(g)?g:o(n[p+1])?[]:{})}r(m,f,v),m=m[f]}return t}},426:function(t,n,e){var r=e(427),i=e(133),o=Object.prototype.hasOwnProperty;t.exports=function(t,n,e){var a=t[n];o.call(t,n)&&i(a,e)&&(void 0!==e||n in t)||r(t,n,e)}},427:function(t,n,e){var r=e(240);t.exports=function(t,n,e){"__proto__"==n&&r?r(t,n,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[n]=e}},428:function(t,n,e){var r=e(233),i=e(429),o=e(431);t.exports=function(t){return r(t,o,i)}},429:function(t,n,e){var r=e(132),i=e(430),o=e(234),a=e(235),s=Object.getOwnPropertySymbols?function(t){for(var n=[];t;)r(n,o(t)),t=i(t);return n}:a;t.exports=s},430:function(t,n,e){var r=e(238)(Object.getPrototypeOf,Object);t.exports=r},431:function(t,n,e){var r=e(236),i=e(432),o=e(135);t.exports=function(t){return o(t)?r(t,!0):i(t)}},432:function(t,n,e){var r=e(95),i=e(237),o=e(433),a=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return o(t);var n=i(t),e=[];for(var s in t)("constructor"!=s||!n&&a.call(t,s))&&e.push(s);return e}},433:function(t,n){t.exports=function(t){var n=[];if(null!=t)for(var e in Object(t))n.push(e);return n}},435:function(t,n,e){},441:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return m}));e(17);var r={data:function(){return{comp:null}},computed:{page:function(){return this.$pagination.paginationIndex+1}},mounted:function(){var t=this;e.e(2).then(e.t.bind(null,459,7)).then((function(n){t.comp=n.default}))},methods:{clickCallback:function(t){var n=this.$pagination.getSpecificPageLink(t-1);this.$router.push(n)}}},i=(e(421),e(8)),o=Object(i.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.comp?e(t.comp,{tag:"component",attrs:{value:t.page,"page-count":t.$pagination.length,"click-handler":t.clickCallback,"prev-text":t.$pagination.prevText,"next-text":t.$pagination.nextText,"container-class":"pagination","page-class":"page-item"}}):t._e()}),[],!1,null,null,null).exports,a=(e(422),Object(i.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"pagination simple-pagination"},[t.$pagination.hasPrev?e("router-link",{attrs:{to:t.$pagination.prevLink}},[t._v("\n    "+t._s(t.$pagination.prevText)+"\n  ")]):t._e(),t._v(" "),t.$pagination.hasNext?e("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("\n    "+t._s(t.$pagination.nextText)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports),s=(e(242),e(96)),u=e.n(s),p=e(423),c=e.n(p),l={props:{title:{type:[String,Function],required:!1},issueId:{type:[String,Number],required:!1},options:{type:Object,required:!1},shortname:{type:String,required:!1},identifier:{type:String,required:!1},url:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},computed:{propsWithoutEmptyProperties:function(){return c()(this.$props,u.a)},commentProps:function(){return Object.assign({},this.propsWithoutEmptyProperties,this.$frontmatter.comment)},vssueProps:function(){return Object.assign({title:this.$page.title},this.commentProps)},disqusProps:function(){return Object.assign({identifier:this.$page.key},this.commentProps)}}},m=Object(i.a)(l,(function(){var t=this.$createElement,n=this._self._c||t;return"vssue"===this.$service.comment.service?n("Vssue",this._b({},"Vssue",this.vssueProps,!1)):"disqus"===this.$service.comment.service?n("Disqus",this._b({},"Disqus",this.disqusProps,!1)):this._e()}),[],!1,null,null,null).exports},448:function(t,n,e){"use strict";var r=e(435);e.n(r).a},463:function(t,n,e){"use strict";e.r(n);e(64),e(2);var r=e(137),i=e.n(r),o=e(6),a=e(441),s={components:{NavigationIcon:o.n,ClockIcon:o.a,TagIcon:o.q},data:function(){return{paginationComponent:null}},computed:{pages:function(){return this.$pagination.pages}},created:function(){this.paginationComponent=this.getPaginationComponent()},methods:{getPaginationComponent:function(){return a.b},resolvePostDate:function(t){return i()(t).format(this.$themeConfig.dateFormat||"ddd MMM DD YYYY")},resolvePostTags:function(t){return!t||Array.isArray(t)?t:[t]}}},u=(e(448),e(8)),p=Object(u.a)(s,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"base-list-layout"}},[e("div",{staticClass:"ui-posts",attrs:{itemscope:"",itemtype:"http://schema.org/Blog"}},t._l(t.pages,(function(n){return e("article",{key:n.key,staticClass:"ui-post",attrs:{itemprop:"blogPost",itemscope:"",itemtype:"https://schema.org/BlogPosting"}},[e("meta",{attrs:{itemprop:"mainEntityOfPage",content:n.path}}),t._v(" "),e("header",{staticClass:"ui-post-title",attrs:{itemprop:"name headline"}},[e("NavLink",{attrs:{link:n.path}},[t._v(t._s(n.title))])],1),t._v(" "),n.excerpt?e("p",{staticClass:"ui-post-summary",attrs:{itemprop:"description"},domProps:{innerHTML:t._s(n.excerpt)}}):e("p",{staticClass:"ui-post-summary",attrs:{itemprop:"description"}},[t._v("\n        "+t._s(n.frontmatter.summary||n.summary)+"\n      ")]),t._v(" "),e("footer",[n.frontmatter.author?e("div",{staticClass:"ui-post-meta ui-post-author",attrs:{itemprop:"publisher author",itemtype:"http://schema.org/Person",itemscope:""}},[e("NavigationIcon"),t._v(" "),e("span",{attrs:{itemprop:"name"}},[t._v(t._s(n.frontmatter.author))]),t._v(" "),n.frontmatter.location?e("span",{attrs:{itemprop:"address"}},[t._v("\n              in "+t._s(n.frontmatter.location)+"\n          ")]):t._e()],1):t._e(),t._v(" "),n.frontmatter.date?e("div",{staticClass:"ui-post-meta ui-post-date"},[e("ClockIcon"),t._v(" "),e("time",{attrs:{pubdate:"",itemprop:"datePublished",datetime:n.frontmatter.date}},[t._v("\n            "+t._s(t.resolvePostDate(n.frontmatter.date))+"\n          ")])],1):t._e(),t._v(" "),n.frontmatter.tags?e("div",{staticClass:"ui-post-meta ui-post-tag",attrs:{itemprop:"keywords"}},[e("TagIcon"),t._v(" "),t._l(t.resolvePostTags(n.frontmatter.tags),(function(n){return e("router-link",{key:n,attrs:{to:"/tag/"+n}},[t._v("\n            "+t._s(n)+"\n          ")])}))],2):t._e()])])})),0),t._v(" "),t.$pagination.length>1&&t.paginationComponent?e(t.paginationComponent,{tag:"component"}):t._e()],1)}),[],!1,null,null,null);n.default=p.exports}}]);