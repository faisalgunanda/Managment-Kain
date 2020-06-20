("function"==typeof define&&define.amd?define:function(e,t){"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):window.toastr=t(window.jQuery)})(["jquery"],function(e){return function(){function t(t,n){return t||(t=a()),(l=e("#"+t.containerId)).length?l:(n&&(l=function(t){return(l=e("<div/>").attr("id",t.containerId).addClass("toast-container").addClass(t.positionClass)).appendTo(e(t.target)),l}(t)),l)}function n(t){for(var n=l.children(),o=n.length-1;o>=0;o--)s(e(n[o]),t)}function s(t,n,s){var o=!(!s||!s.force)&&s.force;return!(!t||!o&&0!==e(":focus",t).length||(t[n.hideMethod]({duration:n.hideDuration,easing:n.hideEasing,complete:function(){r(t)}}),0))}function o(e){c&&c(e)}function i(n){function s(e){return null==e&&(e=""),e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function i(t){var n=t&&!1!==m.closeMethod?m.closeMethod:m.hideMethod,s=t&&!1!==m.closeDuration?m.closeDuration:m.hideDuration,i=t&&!1!==m.closeEasing?m.closeEasing:m.hideEasing;if(!e(":focus",v).length||t)return clearTimeout(b.intervalId),v[n]({duration:s,easing:i,complete:function(){r(v),clearTimeout(h),m.onHidden&&"hidden"!==D.state&&m.onHidden(),D.state="hidden",D.endTime=new Date,o(D)}})}function c(){(m.timeOut>0||m.extendedTimeOut>0)&&(h=setTimeout(i,m.extendedTimeOut),b.maxHideTime=parseFloat(m.extendedTimeOut),b.hideEta=(new Date).getTime()+b.maxHideTime)}function p(){clearTimeout(h),b.hideEta=0,v.stop(!0,!0)[m.showMethod]({duration:m.showDuration,easing:m.showEasing})}function g(){var e=(b.hideEta-(new Date).getTime())/b.maxHideTime*100;T.width(e+"%")}var m=a(),f=n.iconClass||m.iconClass;if(void 0!==n.optionsOverride&&(m=e.extend(m,n.optionsOverride),f=n.optionsOverride.iconClass||f),!function(e,t){if(e.preventDuplicates){if(t.message===d)return!0;d=t.message}return!1}(m,n)){u++,l=t(m,!0);var h=null,v=e("<div/>"),C=e("<div/>"),w=e("<div/>"),T=e("<div/>"),O=e(m.closeHtml),b={intervalId:null,hideEta:null,maxHideTime:null},D={toastId:u,state:"visible",startTime:new Date,options:m,map:n};return n.iconClass&&v.addClass(m.toastClass).addClass(f),function(){if(n.title){var e=n.title;m.escapeHtml&&(e=s(n.title)),C.append(e).addClass(m.titleClass),v.append(C)}}(),function(){if(n.message){var e=n.message;m.escapeHtml&&(e=s(n.message)),w.append(e).addClass(m.messageClass),v.append(w)}}(),m.closeButton&&(O.addClass(m.closeClass).attr("role","button"),v.prepend(O)),m.progressBar&&(T.addClass(m.progressClass),v.prepend(T)),m.rtl&&v.addClass("rtl"),m.newestOnTop?l.prepend(v):l.append(v),function(){var e="";switch(n.iconClass){case"toast-success":case"toast-info":e="polite";break;default:e="assertive"}v.attr("aria-live",e)}(),v.hide(),v[m.showMethod]({duration:m.showDuration,easing:m.showEasing,complete:m.onShown}),m.timeOut>0&&(h=setTimeout(i,m.timeOut),b.maxHideTime=parseFloat(m.timeOut),b.hideEta=(new Date).getTime()+b.maxHideTime,m.progressBar&&(b.intervalId=setInterval(g,10))),m.closeOnHover&&v.hover(p,c),!m.onclick&&m.tapToDismiss&&v.click(i),m.closeButton&&O&&O.click(function(e){e.stopPropagation?e.stopPropagation():void 0!==e.cancelBubble&&!0!==e.cancelBubble&&(e.cancelBubble=!0),m.onCloseClick&&m.onCloseClick(e),i(!0)}),m.onclick&&v.click(function(e){m.onclick(e),i()}),o(D),m.debug&&console&&console.log(D),v}}function a(){return e.extend({},{tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:300,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:1e3,hideEasing:"swing",onHidden:void 0,closeMethod:!1,closeDuration:!1,closeEasing:!1,closeOnHover:!0,extendedTimeOut:1e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:5e3,titleClass:"toast-title",messageClass:"toast-message",escapeHtml:!1,target:"body",closeHtml:'<button type="button">&times;</button>',closeClass:"toast-close-button",newestOnTop:!0,preventDuplicates:!1,progressBar:!1,progressClass:"toast-progress",rtl:!1},g.options)}function r(e){l||(l=t()),e.is(":visible")||(e.remove(),e=null,0===l.children().length&&(l.remove(),d=void 0))}var l,c,d,u=0,p={error:"error",info:"info",success:"success",warning:"warning"},g={clear:function(e,o){var i=a();l||t(i),s(e,i,o)||n(i)},remove:function(n){var s=a();return l||t(s),n&&0===e(":focus",n).length?void r(n):void(l.children().length&&l.remove())},error:function(e,t,n){return i({type:p.error,iconClass:a().iconClasses.error,message:e,optionsOverride:n,title:t})},getContainer:t,info:function(e,t,n){return i({type:p.info,iconClass:a().iconClasses.info,message:e,optionsOverride:n,title:t})},options:{},subscribe:function(e){c=e},success:function(e,t,n){return i({type:p.success,iconClass:a().iconClasses.success,message:e,optionsOverride:n,title:t})},version:"2.1.3",warning:function(e,t,n){return i({type:p.warning,iconClass:a().iconClasses.warning,message:e,optionsOverride:n,title:t})}};return g}()});
