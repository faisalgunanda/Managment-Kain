!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?e(require("jquery")):e(jQuery)}(function(e){"use strict";var t;e.support.htmlMenuitem="HTMLMenuItemElement"in window,e.support.htmlCommand="HTMLCommandElement"in window,e.support.eventSelectstart="onselectstart"in document.documentElement,e.ui&&e.widget||(e.cleanData=(t=e.cleanData,function(n){var o,a,s;for(s=0;null!=n[s];s++){a=n[s];try{(o=e._data(a,"events"))&&o.remove&&e(a).triggerHandler("remove")}catch(n){}}t(n)}));var n=null,o=!1,a=e(window),s=0,i={},c={},l={},r={selector:null,appendTo:null,trigger:"right",autoHide:!1,delay:200,reposition:!0,hideOnSecondTrigger:!1,selectableSubMenu:!1,classNames:{hover:"context-menu-hover",disabled:"context-menu-disabled",visible:"context-menu-visible",notSelectable:"context-menu-not-selectable",icon:"context-menu-icon",iconEdit:"context-menu-icon-edit",iconCut:"context-menu-icon-cut",iconCopy:"context-menu-icon-copy",iconPaste:"context-menu-icon-paste",iconDelete:"context-menu-icon-delete",iconAdd:"context-menu-icon-add",iconQuit:"context-menu-icon-quit",iconLoadingClass:"context-menu-icon-loading"},determinePosition:function(t){if(e.ui&&e.ui.position)t.css("display","block").position({my:"center top",at:"center bottom",of:this,offset:"0 5",collision:"fit"}).css("display","none");else{var n=this.offset();n.top+=this.outerHeight(),n.left+=this.outerWidth()/2-t.outerWidth()/2,t.css(n)}},position:function(e,t,n){var o;if(t||n){if("maintain"===t&&"maintain"===n)o=e.$menu.position();else{var s=e.$menu.offsetParent().offset();o={top:n-s.top,left:t-s.left}}var i=a.scrollTop()+a.height(),c=a.scrollLeft()+a.width(),l=e.$menu.outerHeight(),r=e.$menu.outerWidth();o.top+l>i&&(o.top-=l),o.top<0&&(o.top=0),o.left+r>c&&(o.left-=r),o.left<0&&(o.left=0),e.$menu.css(o)}else e.determinePosition.call(this,e.$menu)},positionSubmenu:function(t){if(void 0!==t)if(e.ui&&e.ui.position)t.css("display","block").position({my:"left top-5",at:"right top",of:this,collision:"flipfit fit"}).css("display","");else{var n={top:-9,left:this.outerWidth()-5};t.css(n)}},zIndex:1,animation:{duration:50,show:"slideDown",hide:"slideUp"},events:{preShow:e.noop,show:e.noop,hide:e.noop,activated:e.noop},callback:null,items:{}},u={timer:null,pageX:null,pageY:null},d={abortevent:function(e){e.preventDefault(),e.stopImmediatePropagation()},contextmenu:function(t){var o=e(this);if(!1!==t.data.events.preShow(o,t)&&("right"===t.data.trigger&&(t.preventDefault(),t.stopImmediatePropagation()),!("right"!==t.data.trigger&&"demand"!==t.data.trigger&&t.originalEvent||!(void 0===t.mouseButton||!t.data||"left"===t.data.trigger&&0===t.mouseButton||"right"===t.data.trigger&&2===t.mouseButton)||o.hasClass("context-menu-active")||o.hasClass("context-menu-disabled")))){if(n=o,t.data.build){var a=t.data.build(n,t);if(!1===a)return;if(t.data=e.extend(!0,{},r,t.data,a||{}),!t.data.items||e.isEmptyObject(t.data.items))throw window.console&&(console.error||console.log).call(console,"No items specified to show in contextMenu"),new Error("No Items specified");t.data.$trigger=n,m.create(t.data)}m.show.call(o,t.data,t.pageX,t.pageY)}},click:function(t){t.preventDefault(),t.stopImmediatePropagation(),e(this).trigger(e.Event("contextmenu",{data:t.data,pageX:t.pageX,pageY:t.pageY}))},mousedown:function(t){var o=e(this);n&&n.length&&!n.is(o)&&n.data("contextMenu").$menu.trigger("contextmenu:hide"),2===t.button&&(n=o.data("contextMenuActive",!0))},mouseup:function(t){var o=e(this);o.data("contextMenuActive")&&n&&n.length&&n.is(o)&&!o.hasClass("context-menu-disabled")&&(t.preventDefault(),t.stopImmediatePropagation(),(n=o).trigger(e.Event("contextmenu",{data:t.data,pageX:t.pageX,pageY:t.pageY}))),o.removeData("contextMenuActive")},mouseenter:function(t){var o=e(this),a=e(t.relatedTarget),s=e(document);a.is(".context-menu-list")||a.closest(".context-menu-list").length||n&&n.length||(u.pageX=t.pageX,u.pageY=t.pageY,u.data=t.data,s.on("mousemove.contextMenuShow",d.mousemove),u.timer=setTimeout(function(){u.timer=null,s.off("mousemove.contextMenuShow"),(n=o).trigger(e.Event("contextmenu",{data:u.data,pageX:u.pageX,pageY:u.pageY}))},t.data.delay))},mousemove:function(e){u.pageX=e.pageX,u.pageY=e.pageY},mouseleave:function(t){var n=e(t.relatedTarget);if(!n.is(".context-menu-list")&&!n.closest(".context-menu-list").length){try{clearTimeout(u.timer)}catch(t){}u.timer=null}},layerClick:function(t){var n,o,s=e(this).data("contextMenuRoot"),i=t.button,c=t.pageX,l=t.pageY,r=void 0===c;t.preventDefault(),setTimeout(function(){if(r)null!=s&&null!==s.$menu&&void 0!==s.$menu&&s.$menu.trigger("contextmenu:hide");else{var u,d="left"===s.trigger&&0===i||"right"===s.trigger&&2===i;if(document.elementFromPoint&&s.$layer){if(s.$layer.hide(),(n=document.elementFromPoint(c-a.scrollLeft(),l-a.scrollTop())).isContentEditable){var m=document.createRange(),p=window.getSelection();m.selectNode(n),m.collapse(!0),p.removeAllRanges(),p.addRange(m)}e(n).trigger(t),s.$layer.show()}if(s.hideOnSecondTrigger&&d&&null!==s.$menu&&void 0!==s.$menu)s.$menu.trigger("contextmenu:hide");else{if(s.reposition&&d)if(document.elementFromPoint){if(s.$trigger.is(n))return void s.position.call(s.$trigger,s,c,l)}else if(o=s.$trigger.offset(),u=e(window),o.top+=u.scrollTop(),o.top<=t.pageY&&(o.left+=u.scrollLeft(),o.left<=t.pageX&&(o.bottom=o.top+s.$trigger.outerHeight(),o.bottom>=t.pageY&&(o.right=o.left+s.$trigger.outerWidth(),o.right>=t.pageX))))return void s.position.call(s.$trigger,s,c,l);n&&d&&s.$trigger.one("contextmenu:hidden",function(){e(n).contextMenu({x:c,y:l,button:i})}),null!=s&&null!==s.$menu&&void 0!==s.$menu&&s.$menu.trigger("contextmenu:hide")}}},50)},keyStop:function(e,t){t.isInput||e.preventDefault(),e.stopPropagation()},key:function(e){var t={};n&&(t=n.data("contextMenu")||{}),void 0===t.zIndex&&(t.zIndex=0);var o=0,a=function(e){""!==e.style.zIndex?o=e.style.zIndex:null!==e.offsetParent&&void 0!==e.offsetParent?a(e.offsetParent):null!==e.parentElement&&void 0!==e.parentElement&&a(e.parentElement)};if(a(e.target),!(t.$menu&&parseInt(o,10)>parseInt(t.$menu.css("zIndex"),10))){switch(e.keyCode){case 9:case 38:if(d.keyStop(e,t),t.isInput){if(9===e.keyCode&&e.shiftKey)return e.preventDefault(),t.$selected&&t.$selected.find("input, textarea, select").blur(),void(null!==t.$menu&&void 0!==t.$menu&&t.$menu.trigger("prevcommand"));if(38===e.keyCode&&"checkbox"===t.$selected.find("input, textarea, select").prop("type"))return void e.preventDefault()}else if(9!==e.keyCode||e.shiftKey)return void(null!==t.$menu&&void 0!==t.$menu&&t.$menu.trigger("prevcommand"));break;case 40:if(d.keyStop(e,t),!t.isInput)return void(null!==t.$menu&&void 0!==t.$menu&&t.$menu.trigger("nextcommand"));if(9===e.keyCode)return e.preventDefault(),t.$selected&&t.$selected.find("input, textarea, select").blur(),void(null!==t.$menu&&void 0!==t.$menu&&t.$menu.trigger("nextcommand"));if(40===e.keyCode&&"checkbox"===t.$selected.find("input, textarea, select").prop("type"))return void e.preventDefault();break;case 37:if(d.keyStop(e,t),t.isInput||!t.$selected||!t.$selected.length)break;if(t.$selected.parent().hasClass("context-menu-root"))break;var s=t.$selected.parent().parent();return t.$selected.trigger("contextmenu:blur"),void(t.$selected=s);case 39:if(d.keyStop(e,t),t.isInput||!t.$selected||!t.$selected.length)break;var i=t.$selected.data("contextMenu")||{};if(i.$menu&&t.$selected.hasClass("context-menu-submenu"))return t.$selected=null,i.$selected=null,void i.$menu.trigger("nextcommand");break;case 35:case 36:return t.$selected&&t.$selected.find("input, textarea, select").length?void 0:((t.$selected&&t.$selected.parent()||t.$menu).children(":not(."+t.classNames.disabled+", ."+t.classNames.notSelectable+")")[36===e.keyCode?"first":"last"]().trigger("contextmenu:focus"),void e.preventDefault());case 13:if(d.keyStop(e,t),t.isInput){if(t.$selected&&!t.$selected.is("textarea, select"))return void e.preventDefault();break}return void(void 0!==t.$selected&&null!==t.$selected&&t.$selected.trigger("mouseup"));case 32:case 33:case 34:return void d.keyStop(e,t);case 27:return d.keyStop(e,t),void(null!==t.$menu&&void 0!==t.$menu&&t.$menu.trigger("contextmenu:hide"));default:var c=String.fromCharCode(e.keyCode).toUpperCase();if(t.accesskeys&&t.accesskeys[c])return void t.accesskeys[c].$node.trigger(t.accesskeys[c].$menu?"contextmenu:focus":"mouseup")}e.stopPropagation(),void 0!==t.$selected&&null!==t.$selected&&t.$selected.trigger(e)}},prevItem:function(t){t.stopPropagation();var n=e(this).data("contextMenu")||{},o=e(this).data("contextMenuRoot")||{};if(n.$selected){var a=n.$selected;(n=n.$selected.parent().data("contextMenu")||{}).$selected=a}for(var s=n.$menu.children(),i=n.$selected&&n.$selected.prev().length?n.$selected.prev():s.last(),c=i;i.hasClass(o.classNames.disabled)||i.hasClass(o.classNames.notSelectable)||i.is(":hidden");)if((i=i.prev().length?i.prev():s.last()).is(c))return;n.$selected&&d.itemMouseleave.call(n.$selected.get(0),t),d.itemMouseenter.call(i.get(0),t);var l=i.find("input, textarea, select");l.length&&l.focus()},nextItem:function(t){t.stopPropagation();var n=e(this).data("contextMenu")||{},o=e(this).data("contextMenuRoot")||{};if(n.$selected){var a=n.$selected;(n=n.$selected.parent().data("contextMenu")||{}).$selected=a}for(var s=n.$menu.children(),i=n.$selected&&n.$selected.next().length?n.$selected.next():s.first(),c=i;i.hasClass(o.classNames.disabled)||i.hasClass(o.classNames.notSelectable)||i.is(":hidden");)if((i=i.next().length?i.next():s.first()).is(c))return;n.$selected&&d.itemMouseleave.call(n.$selected.get(0),t),d.itemMouseenter.call(i.get(0),t);var l=i.find("input, textarea, select");l.length&&l.focus()},focusInput:function(){var t=e(this).closest(".context-menu-item"),n=t.data(),o=n.contextMenu,a=n.contextMenuRoot;a.$selected=o.$selected=t,a.isInput=o.isInput=!0},blurInput:function(){var t=e(this).closest(".context-menu-item").data(),n=t.contextMenu;t.contextMenuRoot.isInput=n.isInput=!1},menuMouseenter:function(){e(this).data().contextMenuRoot.hovering=!0},menuMouseleave:function(t){var n=e(this).data().contextMenuRoot;n.$layer&&n.$layer.is(t.relatedTarget)&&(n.hovering=!1)},itemMouseenter:function(t){var n=e(this),o=n.data(),a=o.contextMenu,s=o.contextMenuRoot;s.hovering=!0,t&&s.$layer&&s.$layer.is(t.relatedTarget)&&(t.preventDefault(),t.stopImmediatePropagation()),(a.$menu?a:s).$menu.children("."+s.classNames.hover).trigger("contextmenu:blur").children(".hover").trigger("contextmenu:blur"),n.hasClass(s.classNames.disabled)||n.hasClass(s.classNames.notSelectable)?a.$selected=null:n.trigger("contextmenu:focus")},itemMouseleave:function(t){var n=e(this),o=n.data(),a=o.contextMenu,s=o.contextMenuRoot;if(s!==a&&s.$layer&&s.$layer.is(t.relatedTarget))return void 0!==s.$selected&&null!==s.$selected&&s.$selected.trigger("contextmenu:blur"),t.preventDefault(),t.stopImmediatePropagation(),void(s.$selected=a.$selected=a.$node);a&&a.$menu&&a.$menu.hasClass("context-menu-visible")||n.trigger("contextmenu:blur")},itemClick:function(t){var n,o=e(this),a=o.data(),s=a.contextMenu,i=a.contextMenuRoot,c=a.contextMenuKey;if(!(!s.items[c]||o.is("."+i.classNames.disabled+", .context-menu-separator, ."+i.classNames.notSelectable)||o.is(".context-menu-submenu")&&!1===i.selectableSubMenu)){if(t.preventDefault(),t.stopImmediatePropagation(),e.isFunction(s.callbacks[c])&&Object.prototype.hasOwnProperty.call(s.callbacks,c))n=s.callbacks[c];else{if(!e.isFunction(i.callback))return;n=i.callback}!1!==n.call(i.$trigger,c,i,t)?i.$menu.trigger("contextmenu:hide"):i.$menu.parent().length&&m.update.call(i.$trigger,i)}},inputClick:function(e){e.stopImmediatePropagation()},hideMenu:function(t,n){var o=e(this).data("contextMenuRoot");m.hide.call(o.$trigger,o,n&&n.force)},focusItem:function(t){t.stopPropagation();var n=e(this),o=n.data(),a=o.contextMenu,s=o.contextMenuRoot;n.hasClass(s.classNames.disabled)||n.hasClass(s.classNames.notSelectable)||(n.addClass([s.classNames.hover,s.classNames.visible].join(" ")).parent().find(".context-menu-item").not(n).removeClass(s.classNames.visible).filter("."+s.classNames.hover).trigger("contextmenu:blur"),a.$selected=s.$selected=n,a&&a.$node&&a.$node.hasClass("context-menu-submenu")&&a.$node.addClass(s.classNames.hover),a.$node&&s.positionSubmenu.call(a.$node,a.$menu))},blurItem:function(t){t.stopPropagation();var n=e(this),o=n.data(),a=o.contextMenu,s=o.contextMenuRoot;a.autoHide&&n.removeClass(s.classNames.visible),n.removeClass(s.classNames.hover),a.$selected=null}},m={show:function(t,o,a){var s=e(this),i={};if(e("#context-menu-layer").trigger("mousedown"),t.$trigger=s,!1!==t.events.show.call(s,t))if(!1!==m.update.call(s,t)){if(t.position.call(s,t,o,a),t.zIndex){var c=t.zIndex;"function"==typeof t.zIndex&&(c=t.zIndex.call(s,t)),i.zIndex=function(e){for(var t=0,n=s;t=Math.max(t,parseInt(n.css("z-index"),10)||0),(n=n.parent())&&n.length&&!(-1<"html body".indexOf(n.prop("nodeName").toLowerCase())););return t}()+c}m.layer.call(t.$menu,t,i.zIndex),t.$menu.find("ul").css("zIndex",i.zIndex+1),t.$menu.css(i)[t.animation.show](t.animation.duration,function(){s.trigger("contextmenu:visible"),m.activated(t),t.events.activated(t)}),s.data("contextMenu",t).addClass("context-menu-active"),e(document).off("keydown.contextMenu").on("keydown.contextMenu",d.key),t.autoHide&&e(document).on("mousemove.contextMenuAutoHide",function(e){var n=s.offset();n.right=n.left+s.outerWidth(),n.bottom=n.top+s.outerHeight(),!t.$layer||t.hovering||e.pageX>=n.left&&e.pageX<=n.right&&e.pageY>=n.top&&e.pageY<=n.bottom||setTimeout(function(){t.hovering||null===t.$menu||void 0===t.$menu||t.$menu.trigger("contextmenu:hide")},50)})}else n=null;else n=null},hide:function(t,o){var a=e(this);if(t||(t=a.data("contextMenu")||{}),o||!t.events||!1!==t.events.hide.call(a,t)){if(a.removeData("contextMenu").removeClass("context-menu-active"),t.$layer){setTimeout((s=t.$layer,function(){s.remove()}),10);try{delete t.$layer}catch(o){t.$layer=null}}var s;n=null,t.$menu.find("."+t.classNames.hover).trigger("contextmenu:blur"),t.$selected=null,t.$menu.find("."+t.classNames.visible).removeClass(t.classNames.visible),e(document).off(".contextMenuAutoHide").off("keydown.contextMenu"),t.$menu&&t.$menu[t.animation.hide](t.animation.duration,function(){t.build&&(t.$menu.remove(),e.each(t,function(e){switch(e){case"ns":case"selector":case"build":case"trigger":return!0;default:t[e]=void 0;try{delete t[e]}catch(e){}return!0}})),setTimeout(function(){a.trigger("contextmenu:hidden")},10)})}},create:function(t,n){function o(t){var n=e("<span></span>");if(t._accesskey)t._beforeAccesskey&&n.append(document.createTextNode(t._beforeAccesskey)),e("<span></span>").addClass("context-menu-accesskey").text(t._accesskey).appendTo(n),t._afterAccesskey&&n.append(document.createTextNode(t._afterAccesskey));else if(t.isHtmlName){if(void 0!==t.accesskey)throw new Error("accesskeys are not compatible with HTML names and cannot be used together in the same item");n.html(t.name)}else n.text(t.name);return n}void 0===n&&(n=t),t.$menu=e('<ul class="context-menu-list"></ul>').addClass(t.className||"").data({contextMenu:t,contextMenuRoot:n}),e.each(["callbacks","commands","inputs"],function(e,o){t[o]={},n[o]||(n[o]={})}),n.accesskeys||(n.accesskeys={}),e.each(t.items,function(a,s){var i=e('<li class="context-menu-item"></li>').addClass(s.className||""),c=null,r=null;if(i.on("click",e.noop),"string"!=typeof s&&"cm_separator"!==s.type||(s={type:"cm_seperator"}),s.$node=i.data({contextMenu:t,contextMenuRoot:n,contextMenuKey:a}),void 0!==s.accesskey)for(var u,p=function(e){for(var t,n=e.split(/\s+/),o=[],a=0;t=n[a];a++)t=t.charAt(0).toUpperCase(),o.push(t);return o}(s.accesskey),f=0;u=p[f];f++)if(!n.accesskeys[u]){var h=(n.accesskeys[u]=s).name.match(new RegExp("^(.*?)("+u+")(.*)$","i"));h&&(s._beforeAccesskey=h[1],s._accesskey=h[2],s._afterAccesskey=h[3]);break}if(s.type&&l[s.type])l[s.type].call(i,s,t,n),e.each([t,n],function(n,o){o.commands[a]=s,!e.isFunction(s.callback)||void 0!==o.callbacks[a]&&void 0!==t.type||(o.callbacks[a]=s.callback)});else{switch("cm_seperator"===s.type?i.addClass("context-menu-separator "+n.classNames.notSelectable):"html"===s.type?i.addClass("context-menu-html "+n.classNames.notSelectable):"sub"!==s.type&&s.type?(c=e("<label></label>").appendTo(i),o(s).appendTo(c),i.addClass("context-menu-input"),t.hasTypes=!0,e.each([t,n],function(e,t){t.commands[a]=s,t.inputs[a]=s})):s.items&&(s.type="sub"),s.type){case"cm_seperator":break;case"text":r=e('<input type="text" value="1" name="" />').attr("name","context-menu-input-"+a).val(s.value||"").appendTo(c);break;case"textarea":r=e('<textarea name=""></textarea>').attr("name","context-menu-input-"+a).val(s.value||"").appendTo(c),s.height&&r.height(s.height);break;case"checkbox":r=e('<input type="checkbox" value="1" name="" />').attr("name","context-menu-input-"+a).val(s.value||"").prop("checked",!!s.selected).prependTo(c);break;case"radio":r=e('<input type="radio" value="1" name="" />').attr("name","context-menu-input-"+s.radio).val(s.value||"").prop("checked",!!s.selected).prependTo(c);break;case"select":r=e('<select name=""></select>').attr("name","context-menu-input-"+a).appendTo(c),s.options&&(e.each(s.options,function(t,n){e("<option></option>").val(t).text(n).appendTo(r)}),r.val(s.selected));break;case"sub":o(s).appendTo(i),s.appendTo=s.$node,i.data("contextMenu",s).addClass("context-menu-submenu"),s.callback=null,"function"==typeof s.items.then?m.processPromises(s,n,s.items):m.create(s,n);break;case"html":e(s.html).appendTo(i);break;default:e.each([t,n],function(n,o){o.commands[a]=s,!e.isFunction(s.callback)||void 0!==o.callbacks[a]&&void 0!==t.type||(o.callbacks[a]=s.callback)}),o(s).appendTo(i)}s.type&&"sub"!==s.type&&"html"!==s.type&&"cm_seperator"!==s.type&&(r.on("focus",d.focusInput).on("blur",d.blurInput),s.events&&r.on(s.events,t)),s.icon&&(e.isFunction(s.icon)?s._icon=s.icon.call(this,this,i,a,s):"string"!=typeof s.icon||"fab "!==s.icon.substring(0,4)&&"fas "!==s.icon.substring(0,4)&&"far "!==s.icon.substring(0,4)&&"fal "!==s.icon.substring(0,4)?"string"==typeof s.icon&&"fa-"===s.icon.substring(0,3)?s._icon=n.classNames.icon+" "+n.classNames.icon+"--fa fa "+s.icon:s._icon=n.classNames.icon+" "+n.classNames.icon+"-"+s.icon:(i.addClass(n.classNames.icon+" "+n.classNames.icon+"--fa5"),s._icon=e('<i class="'+s.icon+'"></i>')),"string"==typeof s._icon?i.addClass(s._icon):i.prepend(s._icon))}s.$input=r,s.$label=c,i.appendTo(t.$menu),!t.hasTypes&&e.support.eventSelectstart&&i.on("selectstart.disableTextSelect",d.abortevent)}),t.$node||t.$menu.css("display","none").addClass("context-menu-root"),t.$menu.appendTo(t.appendTo||document.body)},resize:function(t,n){var o;t.css({position:"absolute",display:"block"}),t.data("width",(o=t.get(0)).getBoundingClientRect?Math.ceil(o.getBoundingClientRect().width):t.outerWidth()+1),t.css({position:"static",minWidth:"0px",maxWidth:"100000px"}),t.find("> li > ul").each(function(){m.resize(e(this),!0)}),n||t.find("ul").addBack().css({position:"",display:"",minWidth:"",maxWidth:""}).outerWidth(function(){return e(this).data("width")})},update:function(t,n){var o=this;void 0===n&&(n=t,m.resize(t.$menu));var a=!1;return t.$menu.children().each(function(){var s,i=e(this),c=i.data("contextMenuKey"),l=t.items[c],r=e.isFunction(l.disabled)&&l.disabled.call(o,c,n)||!0===l.disabled;if((s=e.isFunction(l.visible)?l.visible.call(o,c,n):void 0===l.visible||!0===l.visible)&&(a=!0),i[s?"show":"hide"](),i[r?"addClass":"removeClass"](n.classNames.disabled),e.isFunction(l.icon)){i.removeClass(l._icon);var u=l.icon.call(this,o,i,c,l);"string"==typeof u?i.addClass(u):i.prepend(u)}if(l.type)switch(i.find("input, select, textarea").prop("disabled",r),l.type){case"text":case"textarea":l.$input.val(l.value||"");break;case"checkbox":case"radio":l.$input.val(l.value||"").prop("checked",!!l.selected);break;case"select":l.$input.val((0===l.selected?"0":l.selected)||"")}l.$menu&&m.update.call(o,l,n)&&(a=!0)}),a},layer:function(t,n){var o=t.$layer=e('<div id="context-menu-layer"></div>').css({height:a.height(),width:a.width(),display:"block",position:"fixed","z-index":n,top:0,left:0,opacity:0,filter:"alpha(opacity=0)","background-color":"#000"}).data("contextMenuRoot",t).insertBefore(this).on("contextmenu",d.abortevent).on("mousedown",d.layerClick);return void 0===document.body.style.maxWidth&&o.css({position:"absolute",height:e(document).height()}),o},processPromises:function(e,t,n){function o(e,t,n){void 0===n?(n={error:{name:"No items and no error item",icon:"context-menu-icon context-menu-icon-quit"}},window.console&&(console.error||console.log).call(console,'When you reject a promise, provide an "items" object, equal to normal sub-menu items')):"string"==typeof n&&(n={error:{name:n}}),a(e,t,n)}function a(e,t,n){void 0!==t.$menu&&t.$menu.is(":visible")&&(e.$node.removeClass(t.classNames.iconLoadingClass),e.items=n,m.create(e,t,!0),m.update(e,t),t.positionSubmenu.call(e.$node,e.$menu))}e.$node.addClass(t.classNames.iconLoadingClass),n.then(function(e,t,n){void 0===n&&o(void 0),a(e,t,n)}.bind(this,e,t),o.bind(this,e,t))},activated:function(t){var n=t.$menu,o=n.offset(),a=e(window).height(),s=e(window).scrollTop(),i=n.height();a<i?n.css({height:a+"px","overflow-x":"hidden","overflow-y":"auto",top:s+"px"}):(o.top<s||o.top+i>s+a)&&n.css({top:s+"px"})}};function p(t){return t.id&&e('label[for="'+t.id+'"]').val()||t.name}e.fn.contextMenu=function(t){var n=this,o=t;if(0<this.length)if(void 0===t)this.first().trigger("contextmenu");else if(void 0!==t.x&&void 0!==t.y)this.first().trigger(e.Event("contextmenu",{pageX:t.x,pageY:t.y,mouseButton:t.button}));else if("hide"===t){var a=this.first().data("contextMenu")?this.first().data("contextMenu").$menu:null;a&&a.trigger("contextmenu:hide")}else"destroy"===t?e.contextMenu("destroy",{context:this}):e.isPlainObject(t)?(t.context=this,e.contextMenu("create",t)):t?this.removeClass("context-menu-disabled"):t||this.addClass("context-menu-disabled");else e.each(c,function(){this.selector===n.selector&&(o.data=this,e.extend(o.data,{trigger:"demand"}))}),d.contextmenu.call(o.target,o);return this},e.contextMenu=function(t,n){"string"!=typeof t&&(n=t,t="create"),"string"==typeof n?n={selector:n}:void 0===n&&(n={});var a=e.extend(!0,{},r,n||{}),l=e(document),u=l,p=!1;switch(a.context&&a.context.length?(u=e(a.context).first(),a.context=u.get(0),p=!e(a.context).is(document)):a.context=document,t){case"update":if(p)m.update(u);else for(var f in c)c.hasOwnProperty(f)&&m.update(c[f]);break;case"create":if(!a.selector)throw new Error("No selector specified");if(a.selector.match(/.context-menu-(list|item|input)($|\s)/))throw new Error('Cannot bind to selector "'+a.selector+'" as it contains a reserved className');if(!a.build&&(!a.items||e.isEmptyObject(a.items)))throw new Error("No Items specified");if(s++,a.ns=".contextMenu"+s,p||(i[a.selector]=a.ns),(c[a.ns]=a).trigger||(a.trigger="right"),!o){var h="click"===a.itemClickEvent?"click.contextMenu":"mouseup.contextMenu",x={"contextmenu:focus.contextMenu":d.focusItem,"contextmenu:blur.contextMenu":d.blurItem,"contextmenu.contextMenu":d.abortevent,"mouseenter.contextMenu":d.itemMouseenter,"mouseleave.contextMenu":d.itemMouseleave};x[h]=d.itemClick,l.on({"contextmenu:hide.contextMenu":d.hideMenu,"prevcommand.contextMenu":d.prevItem,"nextcommand.contextMenu":d.nextItem,"contextmenu.contextMenu":d.abortevent,"mouseenter.contextMenu":d.menuMouseenter,"mouseleave.contextMenu":d.menuMouseleave},".context-menu-list").on("mouseup.contextMenu",".context-menu-input",d.inputClick).on(x,".context-menu-item"),o=!0}switch(u.on("contextmenu"+a.ns,a.selector,a,d.contextmenu),p&&u.on("remove"+a.ns,function(){e(this).contextMenu("destroy")}),a.trigger){case"hover":u.on("mouseenter"+a.ns,a.selector,a,d.mouseenter).on("mouseleave"+a.ns,a.selector,a,d.mouseleave);break;case"left":u.on("click"+a.ns,a.selector,a,d.click);break;case"touchstart":u.on("touchstart"+a.ns,a.selector,a,d.click)}a.build||m.create(a);break;case"destroy":var v;if(p){var g=a.context;e.each(c,function(t,n){if(!n)return!0;if(!e(g).is(n.selector))return!0;(v=e(".context-menu-list").filter(":visible")).length&&v.data().contextMenuRoot.$trigger.is(e(n.context).find(n.selector))&&v.trigger("contextmenu:hide",{force:!0});try{c[n.ns].$menu&&c[n.ns].$menu.remove(),delete c[n.ns]}catch(t){c[n.ns]=null}return e(n.context).off(n.ns),!0})}else if(a.selector){if(i[a.selector]){(v=e(".context-menu-list").filter(":visible")).length&&v.data().contextMenuRoot.$trigger.is(a.selector)&&v.trigger("contextmenu:hide",{force:!0});try{c[i[a.selector]].$menu&&c[i[a.selector]].$menu.remove(),delete c[i[a.selector]]}catch(t){c[i[a.selector]]=null}l.off(i[a.selector])}}else l.off(".contextMenu .contextMenuAutoHide"),e.each(c,function(t,n){e(n.context).off(n.ns)}),i={},s=0,o=!(c={}),e("#context-menu-layer, .context-menu-list").remove();break;case"html5":(!e.support.htmlCommand&&!e.support.htmlMenuitem||"boolean"==typeof n&&n)&&e('menu[type="context"]').each(function(){this.id&&e.contextMenu({selector:"[contextmenu="+this.id+"]",items:e.contextMenu.fromMenu(this)})}).css("display","none");break;default:throw new Error('Unknown operation "'+t+'"')}return this},e.contextMenu.setInputValues=function(t,n){void 0===n&&(n={}),e.each(t.inputs,function(e,t){switch(t.type){case"text":case"textarea":t.value=n[e]||"";break;case"checkbox":t.selected=!!n[e];break;case"radio":t.selected=(n[t.radio]||"")===t.value;break;case"select":t.selected=n[e]||""}})},e.contextMenu.getInputValues=function(t,n){return void 0===n&&(n={}),e.each(t.inputs,function(e,t){switch(t.type){case"text":case"textarea":case"select":n[e]=t.$input.val();break;case"checkbox":n[e]=t.$input.prop("checked");break;case"radio":t.$input.prop("checked")&&(n[t.radio]=t.value)}}),n},e.contextMenu.fromMenu=function(t){var n={};return function t(n,o,a){return a||(a=0),o.each(function(){var o,s,i=e(this),c=this,l=this.nodeName.toLowerCase();switch("label"===l&&i.find("input, textarea, select").length&&(o=i.text(),l=(c=(i=i.children().first()).get(0)).nodeName.toLowerCase()),l){case"menu":s={name:i.attr("label"),items:{}},a=t(s.items,i.children(),a);break;case"a":case"button":s={name:i.text(),disabled:!!i.attr("disabled"),callback:function(){i.get(0).click()}};break;case"menuitem":case"command":switch(i.attr("type")){case void 0:case"command":case"menuitem":s={name:i.attr("label"),disabled:!!i.attr("disabled"),icon:i.attr("icon"),callback:function(){i.get(0).click()}};break;case"checkbox":s={type:"checkbox",disabled:!!i.attr("disabled"),name:i.attr("label"),selected:!!i.attr("checked")};break;case"radio":s={type:"radio",disabled:!!i.attr("disabled"),name:i.attr("label"),radio:i.attr("radiogroup"),value:i.attr("id"),selected:!!i.attr("checked")};break;default:s=void 0}break;case"hr":s="-------";break;case"input":switch(i.attr("type")){case"text":s={type:"text",name:o||p(c),disabled:!!i.attr("disabled"),value:i.val()};break;case"checkbox":s={type:"checkbox",name:o||p(c),disabled:!!i.attr("disabled"),selected:!!i.attr("checked")};break;case"radio":s={type:"radio",name:o||p(c),disabled:!!i.attr("disabled"),radio:!!i.attr("name"),value:i.val(),selected:!!i.attr("checked")};break;default:s=void 0}break;case"select":s={type:"select",name:o||p(c),disabled:!!i.attr("disabled"),selected:i.val(),options:{}},i.children().each(function(){s.options[this.value]=e(this).text()});break;case"textarea":s={type:"textarea",name:o||p(c),disabled:!!i.attr("disabled"),value:i.val()};break;case"label":break;default:s={type:"html",html:i.clone(!0)}}s&&(n["key"+ ++a]=s)}),a}(n,e(t).children()),n},e.contextMenu.defaults=r,e.contextMenu.types=l,e.contextMenu.handle=d,e.contextMenu.op=m,e.contextMenu.menus=c});
