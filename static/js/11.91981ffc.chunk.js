(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{477:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var a=n(475),r=n.n(a),i=n(476),o=n(28),c=n(43),s=n(30),l=n(29),u=n(31),p=n(478),f=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"uploadPaper",value:function(){var e=Object(i.a)(r.a.mark(function e(t){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetch({path:"/papers",method:p.a.POST,body:{paperDraft:t}});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"modifyPaper",value:function(){var e=Object(i.a)(r.a.mark(function e(t,n){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetch({path:"/papers/".concat(t),method:p.a.PUT,body:{paperDraft:n}});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()},{key:"getPapers",value:function(){var e=Object(i.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetch({path:"/papers",method:p.a.GET});case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getPaper",value:function(){var e=Object(i.a)(r.a.mark(function e(t){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetch({path:"/papers/".concat(t),method:p.a.GET});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getPaperScore",value:function(){var e=Object(i.a)(r.a.mark(function e(t){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetch({path:"/papers/".concat(t,"/score"),method:p.a.GET});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getPaperComments",value:function(){var e=Object(i.a)(r.a.mark(function e(t){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetch({path:"/papers/".concat(t,"/comment"),method:p.a.GET});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"scorePaper",value:function(){var e=Object(i.a)(r.a.mark(function e(t,n){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetch({path:"/papers/".concat(t,"/score"),body:{score:n},method:p.a.POST});case 2:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()},{key:"getPaperStar",value:function(){var e=Object(i.a)(r.a.mark(function e(t){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.fetch({path:"/papers/".concat(t,"/star"),method:p.a.GET}),e.abrupt("return",n);case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"starPaper",value:function(){var e=Object(i.a)(r.a.mark(function e(t,n){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetch({path:"/papers/".concat(t,"/star"),body:{star:"star"==n},method:p.a.POST});case 2:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()},{key:"commentPaper",value:function(){var e=Object(i.a)(r.a.mark(function e(t,n){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetch({path:"/papers/".concat(t,"/comment"),body:{comment:n},method:p.a.POST});case 2:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()},{key:"getPaperRefGraph",value:function(){var e=Object(i.a)(r.a.mark(function e(t){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.fetch({path:"/papers/".concat(t,"/refs"),method:p.a.GET}),e.abrupt("return",n);case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}(p.b)},478:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return f});var a,r=n(475),i=n.n(r),o=n(476),c=n(28),s=n(43),l=n(491),u=n.n(l);!function(e){e.GET="GET",e.POST="POST",e.DELETE="DELETE",e.PATCH="PATCH",e.PUT="PUT"}(a||(a={}));var p=u.a.create({baseURL:"http://36.103.228.127:5000",headers:{"Content-Type":"application/json "}}),f=function(){function e(){Object(c.a)(this,e)}return Object(s.a)(e,[{key:"fetch",value:function(){var e=Object(o.a)(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p({method:t.method,url:t.path,params:t.params,data:t.body});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:if(e.prev=7,e.t0=e.catch(0),!e.t0.response){e.next=13;break}throw e.t0;case 13:if(!e.t0.request){e.next=17;break}throw{status:-1,data:null};case 17:throw{status:-2,data:null};case 18:case"end":return e.stop()}},e,null,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()},{key:"axios",get:function(){return p}}]),e}()},479:function(e,t,n){"use strict";var a=n(480),r=n(475),i=n.n(r),o=n(476),c=n(28),s=n(43),l=n(30),u=n(29),p=n(31),f=n(477),m=n(90),h=[{userId:"2",time:"1232132132131",content:"\u597d\uff01",stars:10},{userId:"3",time:"1232142141",content:"\u597d\uff01\uff01\uff01",stars:4}],d=[{paperId:"1",authors:["123","1"],paper:{title:"Bug Localization with Semantic and Structural Features using Convolutional Neural Network and Cascade Forest",refs:[{type:"published",doi:"10.1145/3210459.3210469",content:"123"},{type:"chainpaper",paperId:"2",title:"123",content:"Poor H V. An introduction to signal detection and estimation[M]. Springer Science & Business Media, 2013."}],keywords:"case study",abstractContent:"Background: Correctly localizing buggy \ufb01les for bug reports together with their semantic and structural information is a crucial task, which would essentially improve the accuracy of bug localization techniques. Aims: To empirically evaluate and demonstrate the e\ufb00ects of both semantic and structural information in bug reports and source \ufb01les on improving the performance of bug localization, we propose CNN Forest involving convolutional neural network and ensemble of random forests that have excellent performance in the tasks of semantic parsing and structural information extraction. Method: We \ufb01rst employ convolutional neural network with multiple \ufb01lters and an ensemble of random forests with multi-grained scanning to extract semantic and structural features from the word vectors derived from bug reports and source \ufb01les. And a subsequent cascade forest (a cascade of ensembles of random forests) is used to further extract deeper features and observe the correlated relationships between bug reports and source \ufb01les. CNN Forest is then empirically evaluated over 10,754 bug reports extracted from AspectJ, Eclipse UI, JDT, SWT, and Tomcat projects. Results: The experiments empirically demonstrate the signi\ufb01cance of including semantic and structural information in bug localization, and further show that the proposed CNN Forest achieves higher Mean Average Precision and Mean Reciprocal Rank measures than the best results of the four current state-of-the-art approaches (NPCNN, LR+WE, DNNLOC, and BugLocator). Conclusion: CNN Forest is capable of de\ufb01ning the correlated relationships between bug reports and source \ufb01les, and we empirically show that semantic and structural information in bug reports and source \ufb01les are crucial in improving bug localization.",introduction:"123",content:"string",conclusion:"1321",acknowledgement:"1232132121"},uploadTime:"1231232131",score:10,stars:10,comments:h,state:"open"}],y=(f.a,a.a,n(481));y.a;n.d(t,"a",function(){return v});var g=[[a.a,a.a],[f.a,f.a],[y.a,y.a]],b=new Map;function v(e){return b.get(e)}g.forEach(function(e){b.set(e[0],new e[1])})},480:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var a=n(475),r=n.n(a),i=n(476),o=n(28),c=n(43),s=n(30),l=n(29),u=n(31),p=n(478),f=n(44),m=function(e){function t(){var e;Object(o.a)(this,t),e=Object(s.a)(this,Object(l.a)(t).call(this));var n=Object(f.b)();return n&&e.setToken(n.token),e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"login",value:function(){var e=Object(i.a)(r.a.mark(function e(t,n){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.fetch({method:p.a.GET,params:{username:t,password:n},path:"/login"});case 3:return(a=e.sent).token&&this.setToken(a.token),e.abrupt("return",a);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0.data);case 11:case"end":return e.stop()}},e,this,[[0,8]])}));return function(t,n){return e.apply(this,arguments)}}()},{key:"register",value:function(){var e=Object(i.a)(r.a.mark(function e(t,n,a){var i,o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.fetch({method:p.a.POST,body:{username:t,password:n,role:a},path:"/register"});case 3:return i=e.sent,e.abrupt("return",i);case 7:return e.prev=7,e.t0=e.catch(0),o=e.t0,e.abrupt("return",o.data);case 11:case"end":return e.stop()}},e,this,[[0,7]])}));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"getUserInfo",value:function(){var e=Object(i.a)(r.a.mark(function e(t){var n,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.fetch({method:p.a.GET,path:"/user/".concat(t)});case 3:return n=e.sent,e.abrupt("return",n);case 7:return e.prev=7,e.t0=e.catch(0),a=e.t0,e.abrupt("return",a.data);case 11:case"end":return e.stop()}},e,this,[[0,7]])}));return function(t){return e.apply(this,arguments)}}()},{key:"setToken",value:function(e){e?this.axios.defaults.headers.common.Authorization="Bearer ".concat(e):delete this.axios.defaults.headers.common.Authorization}}]),t}(p.b)},481:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var a=n(475),r=n.n(a),i=n(476),o=n(28),c=n(43),s=n(30),l=n(29),u=n(31),p=n(478),f=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"requestCollabration",value:function(){var e=Object(i.a)(r.a.mark(function e(t){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetch({path:"/collabration/request",body:{paperId:t},method:p.a.POST});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"acceptCollabrationRequest",value:function(){var e=Object(i.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetch({path:"collabration/request/".concat(t),method:p.a.POST});case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"inviteCollabration",value:function(){var e=Object(i.a)(r.a.mark(function e(t,n){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetch({path:"/collabration/invitation",body:{paperId:t,inviteeId:n},method:p.a.POST});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()},{key:"acceptCollabrationInvitation",value:function(){var e=Object(i.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetch({path:"/collabration/invitation/".concat(t),method:p.a.POST});case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getCollabrationInvitationInfo",value:function(){var e=Object(i.a)(r.a.mark(function e(t){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetch({path:"/collabration/invitation/".concat(t),method:p.a.GET});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getCollabrationRequestInfo",value:function(){var e=Object(i.a)(r.a.mark(function e(t){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.fetch({path:"/collabration/request/".concat(t),method:p.a.GET}),e.abrupt("return",n);case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}(p.b)},482:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(28),r=n(43),i=n(30),o=n(29),c=n(31),s=n(0),l=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).state={loading:!0,error:null,data:void 0},n.fetch=function(){n.setState({loading:!0}),n.props.call().then(function(e){n.setState({loading:!1,error:null,data:e})}).catch(function(e){n.setState({loading:!1,error:e,data:void 0})})},n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.fetch()}},{key:"render",value:function(){var e=this.state,t=e.data,n=e.loading,a=e.error;return this.props.children(t,n,a,this.fetch)}}]),t}(s.PureComponent)},520:function(e,t,n){},521:function(e,t,n){"use strict";n(89);var a=n(11),r=(n(116),n(37)),i=(n(117),n(25));function o(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var c=n(115),s=(n(155),n(68)),l=(n(484),n(487)),u=(n(114),n(45)),p=(n(161),n(82)),f=(n(20),n(520),n(0)),m=n.n(f),h=n(1),d=n.n(h),y=n(3),g=n.n(y),b=n(14),v=n.n(b),x=n(5),S=n.n(x),E=n(4),O=n.n(E),w=n(6),k=n.n(w),j=n(7),C=n(2),T=n.n(C),P=n(94),z=n.n(P);function A(){if("undefined"!==typeof window&&window.document&&window.document.documentElement){var e=window.document.documentElement;return"flex"in e.style||"webkitFlex"in e.style||"Flex"in e.style||"msFlex"in e.style}return!1}var N=function(e){function t(n){S()(this,t);var a=O()(this,e.call(this,n));return a.onStepClick=function(e){var t=a.props,n=t.onChange,r=t.current;n&&r!==e&&n(e)},a.calcStepOffsetWidth=function(){if(!A()){var e=Object(j.findDOMNode)(a);e.children.length>0&&(a.calcTimeout&&clearTimeout(a.calcTimeout),a.calcTimeout=setTimeout(function(){var t=(e.lastChild.offsetWidth||0)+1;a.state.lastStepOffsetWidth===t||Math.abs(a.state.lastStepOffsetWidth-t)<=3||a.setState({lastStepOffsetWidth:t})}))}},a.state={flexSupported:!0,lastStepOffsetWidth:0},a.calcStepOffsetWidth=z()(a.calcStepOffsetWidth,150),a}return k()(t,e),t.prototype.componentDidMount=function(){this.calcStepOffsetWidth(),A()||this.setState({flexSupported:!1})},t.prototype.componentDidUpdate=function(){this.calcStepOffsetWidth()},t.prototype.componentWillUnmount=function(){this.calcTimeout&&clearTimeout(this.calcTimeout),this.calcStepOffsetWidth&&this.calcStepOffsetWidth.cancel&&this.calcStepOffsetWidth.cancel()},t.prototype.render=function(){var e,t=this,n=this.props,a=n.prefixCls,r=n.style,i=void 0===r?{}:r,o=n.className,c=n.children,s=n.direction,l=n.labelPlacement,u=n.iconPrefix,p=n.status,h=n.size,d=n.current,y=n.progressDot,b=n.initial,x=n.icons,S=n.onChange,E=v()(n,["prefixCls","style","className","children","direction","labelPlacement","iconPrefix","status","size","current","progressDot","initial","icons","onChange"]),O=this.state,w=O.lastStepOffsetWidth,k=O.flexSupported,j=m.a.Children.toArray(c).filter(function(e){return!!e}),C=j.length-1,P=y?"vertical":l,z=T()(a,a+"-"+s,o,((e={})[a+"-"+h]=h,e[a+"-label-"+P]="horizontal"===s,e[a+"-dot"]=!!y,e[a+"-flex-not-supported"]=!k,e));return m.a.createElement("div",g()({className:z,style:i},E),f.Children.map(j,function(e,n){if(!e)return null;var r=b+n,o=g()({stepNumber:""+(r+1),stepIndex:r,prefixCls:a,iconPrefix:u,wrapperStyle:i,progressDot:y,icons:x,onStepClick:S&&t.onStepClick},e.props);return k||"vertical"===s||n===C||(o.itemWidth=100/C+"%",o.adjustMarginRight=-Math.round(w/C+1)),"error"===p&&n===d-1&&(o.className=a+"-next-error"),e.props.status||(o.status=r===d?p:r<d?"finish":"wait"),Object(f.cloneElement)(e,o)}))},t}(f.Component);N.propTypes={prefixCls:d.a.string,className:d.a.string,iconPrefix:d.a.string,direction:d.a.string,labelPlacement:d.a.string,children:d.a.any,status:d.a.string,size:d.a.string,progressDot:d.a.oneOfType([d.a.bool,d.a.func]),style:d.a.object,initial:d.a.number,current:d.a.number,icons:d.a.shape({finish:d.a.node,error:d.a.node}),onChange:d.a.func},N.defaultProps={prefixCls:"rc-steps",iconPrefix:"rc",direction:"horizontal",labelPlacement:"horizontal",initial:0,current:0,status:"process",size:"",progressDot:!1};var F=N;function W(e){return"string"===typeof e}var H=function(e){function t(){var n,a,r;S()(this,t);for(var i=arguments.length,o=Array(i),c=0;c<i;c++)o[c]=arguments[c];return n=a=O()(this,e.call.apply(e,[this].concat(o))),I.call(a),r=n,O()(a,r)}return k()(t,e),t.prototype.renderIconNode=function(){var e,t=this.props,n=t.prefixCls,a=t.progressDot,r=t.stepNumber,i=t.status,o=t.title,c=t.description,s=t.icon,l=t.iconPrefix,u=t.icons,p=T()(n+"-icon",l+"icon",((e={})[l+"icon-"+s]=s&&W(s),e[l+"icon-check"]=!s&&"finish"===i&&u&&!u.finish,e[l+"icon-close"]=!s&&"error"===i&&u&&!u.error,e)),f=m.a.createElement("span",{className:n+"-icon-dot"});return a?"function"===typeof a?m.a.createElement("span",{className:n+"-icon"},a(f,{index:r-1,status:i,title:o,description:c})):m.a.createElement("span",{className:n+"-icon"},f):s&&!W(s)?m.a.createElement("span",{className:n+"-icon"},s):u&&u.finish&&"finish"===i?m.a.createElement("span",{className:n+"-icon"},u.finish):u&&u.error&&"error"===i?m.a.createElement("span",{className:n+"-icon"},u.error):s||"finish"===i||"error"===i?m.a.createElement("span",{className:p}):m.a.createElement("span",{className:n+"-icon"},r)},t.prototype.render=function(){var e,t=this.props,n=t.className,a=t.prefixCls,r=t.style,i=t.itemWidth,o=t.status,c=void 0===o?"wait":o,s=(t.iconPrefix,t.icon),l=(t.wrapperStyle,t.adjustMarginRight),u=(t.stepNumber,t.description),p=t.title,f=(t.progressDot,t.tailContent),h=(t.icons,t.stepIndex,t.onStepClick),d=t.onClick,y=v()(t,["className","prefixCls","style","itemWidth","status","iconPrefix","icon","wrapperStyle","adjustMarginRight","stepNumber","description","title","progressDot","tailContent","icons","stepIndex","onStepClick","onClick"]),b=T()(a+"-item",a+"-item-"+c,n,((e={})[a+"-item-custom"]=s,e)),x=g()({},r);i&&(x.width=i),l&&(x.marginRight=l);var S={};return h&&(S.role="button",S.tabIndex=0,S.onClick=this.onClick),m.a.createElement("div",g()({onClick:d},S,y,{className:b,style:x}),m.a.createElement("div",{className:a+"-item-tail"},f),m.a.createElement("div",{className:a+"-item-icon"},this.renderIconNode()),m.a.createElement("div",{className:a+"-item-content"},m.a.createElement("div",{className:a+"-item-title"},p),u&&m.a.createElement("div",{className:a+"-item-description"},u)))},t}(m.a.Component);H.propTypes={className:d.a.string,prefixCls:d.a.string,style:d.a.object,wrapperStyle:d.a.object,itemWidth:d.a.oneOfType([d.a.number,d.a.string]),status:d.a.string,iconPrefix:d.a.string,icon:d.a.node,adjustMarginRight:d.a.oneOfType([d.a.number,d.a.string]),stepNumber:d.a.string,stepIndex:d.a.number,description:d.a.any,title:d.a.any,progressDot:d.a.oneOfType([d.a.bool,d.a.func]),tailContent:d.a.any,icons:d.a.shape({finish:d.a.node,error:d.a.node}),onClick:d.a.func,onStepClick:d.a.func};var I=function(){var e=this;this.onClick=function(){var t=e.props,n=t.onClick,a=t.onStepClick,r=t.stepIndex;n&&n.apply(void 0,arguments),a(r)}},R=H;F.Step=R;var D=F,L=n(9);function M(e){return(M="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function q(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function U(e,t){return!t||"object"!==M(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var J=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=U(this,_(t).apply(this,arguments))).renderSteps=function(t){var n=t.getPrefixCls,r=n("steps",e.props.prefixCls),i=n("",e.props.iconPrefix),o={finish:f.createElement(a.a,{type:"check",className:"".concat(r,"-finish-icon")}),error:f.createElement(a.a,{type:"close",className:"".concat(r,"-error-icon")})};return f.createElement(D,G({icons:o},e.props,{prefixCls:r,iconPrefix:i}))},e}var n,r,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(t,f["Component"]),n=t,(r=[{key:"render",value:function(){return f.createElement(L.a,null,this.renderSteps)}}])&&q(n.prototype,r),i&&q(n,i),t}();J.Step=D.Step,J.defaultProps={current:0},J.propTypes={prefixCls:h.string,iconPrefix:h.string,current:h.number};var K=n(506),V=n.n(K),Q=n(479),X=n(477),Y=n(157),Z=(n(488),n(489)),$=n(475),ee=n.n($),te=(n(485),n(486)),ne=n(476),ae=s.a.TabPane,re=function(e){var t=Object(Q.a)(X.a),n=Object(f.useState)(""),a=Object(c.a)(n,2),r=a[0],i=a[1],o=Object(f.useState)(""),u=Object(c.a)(o,2),p=u[0],h=u[1],d=Object(f.useState)("published"),y=Object(c.a)(d,2),g=y[0],b=y[1];return m.a.createElement(Z.a,{title:"\u6dfb\u52a0\u6587\u732e",visible:e.show,onOk:Object(ne.a)(ee.a.mark(function n(){var a;return ee.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if("published"!==g){n.next=4;break}e.onAdd({type:"published",doi:p}),n.next=15;break;case 4:if("chainpaper"!==g){n.next=15;break}return n.prev=5,n.next=8,t.getPaper(r);case 8:a=n.sent,e.onAdd({type:"chainpaper",paperId:r,title:a.paper.paper.title,content:a.paper.authors.join(",")+":"+a.paper.paper.title+","+a.paper.uploadTime}),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(5),te.a.error("\u65e0\u8be5\u8bba\u6587");case 15:e.close();case 16:case"end":return n.stop()}},n,null,[[5,12]])})),onCancel:function(){e.close()}},m.a.createElement(s.a,{defaultActiveKey:"published",onChange:function(e){b(e)}},m.a.createElement(ae,{tab:"\u5df2\u53d1\u8868\u8bba\u6587",key:"published"},m.a.createElement(l.a,{placeholder:"\u8f93\u5165doi",value:p,onChange:function(e){h(e.target.value)}})),m.a.createElement(ae,{tab:"\u672c\u5e73\u53f0\u8bba\u6587",key:"chainpaper"},m.a.createElement(l.a,{placeholder:"\u8f93\u5165\u8bba\u6587\u53f7",value:r,onChange:function(e){i(e.target.value)}}))))},ie=J.Step,oe=(p.a.Sider,p.a.Content,u.a.Group),ce=l.a.TextArea;s.a.TabPane,t.a=function(e){var t=e.paperDraft,n=e.onSubmit,s=(Object(Q.a)(X.a),Object(f.useState)(t?t.title:"")),l=Object(c.a)(s,2),p=l[0],h=l[1],d=Object(f.useState)(t?t.keywords:""),y=Object(c.a)(d,2),g=y[0],b=y[1],v=Object(f.useState)(t?t.abstractContent:""),x=Object(c.a)(v,2),S=x[0],E=x[1],O=Object(f.useState)(t?t.introduction:""),w=Object(c.a)(O,2),k=w[0],j=w[1],C=Object(f.useState)(t?t.content:""),T=Object(c.a)(C,2),P=T[0],z=T[1],A=Object(f.useState)(t?t.conclusion:""),N=Object(c.a)(A,2),F=N[0],W=N[1],H=Object(f.useState)(t?t.acknowledgement:""),I=Object(c.a)(H,2),R=I[0],D=I[1],L=Object(f.useState)(t?t.refs:[]),M=Object(c.a)(L,2),G=M[0],q=M[1],U=Object(f.useState)(!1),_=Object(c.a)(U,2),B=_[0],K=_[1],Z=Object(f.useState)(0),$=Object(c.a)(Z,2),ee=$[0],te=$[1];return m.a.createElement("div",null,m.a.createElement(re,{show:B,close:function(){return K(!1)},onAdd:function(e){return q([].concat(o(G),[e]))}}),m.a.createElement(Y.a,null,m.a.createElement(J,{current:ee,style:{padding:"30px"}},m.a.createElement(ie,{title:"\u586b\u5199"}),m.a.createElement(ie,{title:"\u9884\u89c8"}),m.a.createElement(ie,{title:"\u63d0\u4ea4"})),0==ee?m.a.createElement("div",null,m.a.createElement("div",{style:{textAlign:"center",margin:"20px",marginTop:"20px"}},m.a.createElement(ce,{style:{fontFamily:"SimHei",fontSize:"24px",textAlign:"center",width:"60%"},placeholder:"\u6807\u9898",value:p,onChange:function(e){h(e.target.value)},autosize:!0})),m.a.createElement("div",{style:{textAlign:"center",margin:"20px"}},m.a.createElement("div",{style:{marginLeft:"15%",marginRight:"15%"}},m.a.createElement(r.a,null,m.a.createElement(i.a,{span:3},m.a.createElement("p",{style:{fontFamily:"SimHei",fontSize:"18px",fontWeight:"bold",display:"inline-block"}},"\u6458 \u8981")),m.a.createElement(i.a,{span:21},m.a.createElement(ce,{style:{fontFamily:"SimSun",fontSize:"14px",lineHeight:"20px",display:"inline-block"},placeholder:"\u4e2d\u6587\u6458\u8981",value:S,onChange:function(e){E(e.target.value)},autosize:!0}))))),m.a.createElement("div",{style:{textAlign:"center",margin:"20px"}},m.a.createElement("div",{style:{marginLeft:"15%",marginRight:"15%"}},m.a.createElement(r.a,null,m.a.createElement(i.a,{span:3},m.a.createElement("p",{style:{fontFamily:"SimHei",fontSize:"18px",fontWeight:"bold",display:"inline"}},"\u5173\u952e\u8bcd")),m.a.createElement(i.a,{span:21},m.a.createElement(ce,{style:{fontFamily:"SimSun",fontSize:"14px",fontWeight:"bold",lineHeight:"20px",display:"inline"},value:g,onChange:function(e){b(e.target.value)},placeholder:"\u4e2d\u6587\u5173\u952e\u8bcd",autosize:!0}))))),m.a.createElement("div",{style:{textAlign:"center",margin:"20px"}},m.a.createElement("p",{style:{fontFamily:"SimHei",fontSize:"18px",fontWeight:"bold"}},"\u7eea \u8bba"),m.a.createElement(ce,{style:{fontFamily:"SimSun",fontSize:"14px",textAlign:"center",width:"60%",lineHeight:"20px"},placeholder:"\u7eea\u8bba",value:k,onChange:function(e){j(e.target.value)},autosize:!0})),m.a.createElement("div",{style:{textAlign:"center",margin:"20px"}},m.a.createElement("p",{style:{fontFamily:"SimHei",fontSize:"18px",fontWeight:"bold"}},"\u6b63 \u6587"),m.a.createElement(ce,{style:{fontFamily:"SimSun",fontSize:"14px",width:"70%",lineHeight:"20px"},placeholder:"\u6b63\u6587",value:P,onChange:function(e){z(e.target.value)},autosize:!0})),m.a.createElement("div",{style:{textAlign:"center",margin:"20px"}},m.a.createElement("p",{style:{fontFamily:"SimHei",fontSize:"18px",fontWeight:"bold"}},"\u7ed3\u675f\u8bed"),m.a.createElement(ce,{style:{fontFamily:"SimSun",fontSize:"14px",textAlign:"center",width:"70%",lineHeight:"20px"},placeholder:"\u7ed3\u675f\u8bed",value:F,onChange:function(e){W(e.target.value)},autosize:!0})),m.a.createElement("div",{style:{textAlign:"center",margin:"20px"}},m.a.createElement("p",{style:{fontFamily:"SimHei",fontSize:"18px",fontWeight:"bold"}},"\u81f4 \u8c22"),m.a.createElement(ce,{style:{fontFamily:"SimSun",fontSize:"14px",textAlign:"center",width:"70%",lineHeight:"20px"},value:R,placeholder:"\u81f4\u8c22",onChange:function(e){D(e.target.value)},autosize:!0})),m.a.createElement("div",{style:{textAlign:"center",margin:"20px"}},m.a.createElement("div",null,m.a.createElement("p",{style:{fontFamily:"SimHei",fontSize:"18px",fontWeight:"bold",display:"inline"}},"\u53c2\u8003\u6587\u732e"),m.a.createElement(oe,{style:{display:"inline",margin:"10px"}},m.a.createElement(u.a,{onClick:function(){var e=G;e=e.slice(0,e.length-1),q(e)}},m.a.createElement(a.a,{type:"minus"})),m.a.createElement(u.a,{onClick:function(){K(!0)}},m.a.createElement(a.a,{type:"plus"})))),m.a.createElement("div",{style:{borderRadius:"4px",backgroundColor:"#f5f5f5",minHeight:"32px",padding:"4px 11px",fontSize:"14px",lineHeight:"1.5",border:"1px solid #d9d9d9",margin:"10px",marginLeft:"15%",marginRight:"15%"}},G.map(function(e,t){return m.a.createElement("p",null,"\u3010",t+1,"\u3011","published"===e.type?e.doi:e.content)}))),m.a.createElement("div",{style:{textAlign:"center",margin:"20px"}},m.a.createElement(u.a,{type:"primary",size:"large",onClick:function(){te(1)}},"\u4e0b\u4e00\u6b65",m.a.createElement(a.a,{type:"right"})))):null,1==ee?m.a.createElement("div",null,m.a.createElement("div",{style:{fontFamily:"SimHei",fontSize:"24px",textAlign:"center"}},p),m.a.createElement("div",{style:{margin:"20px"}},m.a.createElement("div",{style:{marginLeft:"15%",marginRight:"15%"}},m.a.createElement(r.a,null,m.a.createElement(i.a,{span:3},m.a.createElement("p",{style:{fontFamily:"SimHei",fontSize:"18px",fontWeight:"bold",display:"inline-block"}},"\u6458 \u8981")),m.a.createElement(i.a,{span:21},m.a.createElement("div",{style:{fontFamily:"SimSun",fontSize:"14px",lineHeight:"20px",display:"inline-block"}},S))))),m.a.createElement("div",{style:{margin:"20px"}},m.a.createElement("div",{style:{marginLeft:"15%",marginRight:"15%"}},m.a.createElement(r.a,null,m.a.createElement(i.a,{span:3},m.a.createElement("p",{style:{fontFamily:"SimHei",fontSize:"18px",fontWeight:"bold",display:"inline"}},"\u5173\u952e\u8bcd")),m.a.createElement(i.a,{span:21},m.a.createElement("div",{style:{fontFamily:"SimSun",fontSize:"14px",fontWeight:"bold",lineHeight:"20px",display:"inline"}},g))))),m.a.createElement("div",{style:{textAlign:"center",margin:"20px",marginLeft:"15%",marginRight:"15%"}},m.a.createElement("p",{style:{fontFamily:"SimHei",fontSize:"18px",fontWeight:"bold"}},"\u7eea \u8bba"),m.a.createElement("div",{style:{fontFamily:"SimSun",fontSize:"14px",textAlign:"center",lineHeight:"20px"}},k)),m.a.createElement("div",{style:{textAlign:"center",margin:"20px",marginLeft:"15%",marginRight:"15%"}},m.a.createElement("p",{style:{fontFamily:"SimHei",fontSize:"18px",fontWeight:"bold"}},"\u6b63 \u6587"),m.a.createElement(V.a,{style:{fontFamily:"SimSun",fontSize:"14px",lineHeight:"20px"}},P)),m.a.createElement("div",{style:{textAlign:"center",margin:"20px",marginLeft:"15%",marginRight:"15%"}},m.a.createElement("p",{style:{fontFamily:"SimHei",fontSize:"18px",fontWeight:"bold"}},"\u7ed3\u675f\u8bed"),m.a.createElement("div",{style:{fontFamily:"SimSun",fontSize:"14px",textAlign:"center",lineHeight:"20px"}},F)),m.a.createElement("div",{style:{textAlign:"center",margin:"20px",marginLeft:"15%",marginRight:"15%"}},m.a.createElement("p",{style:{fontFamily:"SimHei",fontSize:"18px",fontWeight:"bold"}},"\u81f4 \u8c22"),m.a.createElement("div",{style:{fontFamily:"SimSun",fontSize:"14px",textAlign:"center",lineHeight:"20px"}},R)),m.a.createElement("div",{style:{textAlign:"center",margin:"20px"}},m.a.createElement("p",{style:{fontFamily:"SimHei",fontSize:"18px",fontWeight:"bold"}},"\u53c2\u8003\u6587\u732e"),G.map(function(e,t){return m.a.createElement("p",{style:{fontFamily:"SimSun",fontSize:"14px",lineHeight:"20px"}},"\u3010",t+1,"\u3011","published"===e.type?e.doi:e.content)})),m.a.createElement("div",{style:{textAlign:"center",margin:"20px"}},m.a.createElement(oe,null,m.a.createElement(u.a,{type:"primary",size:"large",onClick:function(){te(0)}},m.a.createElement(a.a,{type:"left"}),"\u4e0a\u4e00\u6b65"),m.a.createElement(u.a,{type:"primary",size:"large",onClick:function(){te(2)}},"\u4e0b\u4e00\u6b65",m.a.createElement(a.a,{type:"right"}))))):null,2==ee?m.a.createElement("div",{style:{textAlign:"center",paddingBottom:"50px"}},m.a.createElement("div",{style:{fontFamily:"SimHei",fontSize:"24px",textAlign:"center",margin:"20px"}},"\u786e\u5b9a\u63d0\u4ea4\uff1f"),m.a.createElement(u.a,{type:"default",size:"large",style:{margin:"10px"},onClick:function(){te(1)}},"\u53d6\u6d88"),m.a.createElement(u.a,{type:"primary",size:"large",style:{margin:"10px"},onClick:function(){return n({title:p,abstractContent:S,keywords:g,introduction:k,content:P,conclusion:F,acknowledgement:R,refs:G})}},"\u786e\u5b9a")):null))}},578:function(e,t,n){"use strict";n.r(t);n(485);var a=n(486),r=n(0),i=n.n(r),o=n(26),c=n(521),s=n(479),l=n(477),u=n(74),p=n(482);t.default=function(e){var t=e.paperId,n=Object(s.a)(l.a);return i.a.createElement(p.a,{call:function(){return n.getPaper(t)}},function(e,r){return r?i.a.createElement(u.a,null):i.a.createElement(c.a,{paperDraft:e.paper.paper,onSubmit:function(e){n.modifyPaper(t,e).then(function(){a.a.success("\u7f16\u8f91\u6210\u529f!"),Object(o.d)("/papers/".concat(t))})}})})}}}]);
//# sourceMappingURL=11.91981ffc.chunk.js.map