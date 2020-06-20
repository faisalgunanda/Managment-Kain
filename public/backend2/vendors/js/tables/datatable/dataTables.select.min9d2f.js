!function(e){"function"==typeof define&&define.amd?define(["jquery","datatables.net"],function(t){return e(t,window,document)}):"object"==typeof exports?module.exports=function(t,l){return t||(t=window),l&&l.fn.dataTable||(l=require("datatables.net")(t,l).$),e(l,t,t.document)}:e(jQuery,window,document)}(function(e,t,l,s){function c(e,t,l){var s=function(t,l){if(t>l){var s=l;l=t,t=s}var c=!1;return e.columns(":visible").indexes().filter(function(e){return e===t&&(c=!0),e===l?(c=!1,!0):c})},c=function(t,l){var s=e.rows({search:"applied"}).indexes();if(s.indexOf(t)>s.indexOf(l)){var c=l;l=t,t=c}var n=!1;return s.filter(function(e){return e===t&&(n=!0),e===l?(n=!1,!0):n})};e.cells({selected:!0}).any()||l?(s=s(l.column,t.column),l=c(l.row,t.row)):(s=s(0,t.column),l=c(0,t.row)),l=e.cells(l,s).flatten(),e.cells(t,{selected:!0}).any()?e.cells(l).deselect():e.cells(l).select()}function n(t){var l=t.settings()[0]._select.selector;e(t.table().container()).off("mousedown.dtSelect",l).off("mouseup.dtSelect",l).off("click.dtSelect",l),e("body").off("click.dtSelect"+t.table().node().id)}function a(l){var s,c=e(l.table().container()),n=l.settings()[0],a=n._select.selector;c.on("mousedown.dtSelect",a,function(e){(e.shiftKey||e.metaKey||e.ctrlKey)&&c.css("-moz-user-select","none").one("selectstart.dtSelect",a,function(){return!1}),t.getSelection&&(s=t.getSelection())}).on("mouseup.dtSelect",a,function(){c.css("-moz-user-select","")}).on("click.dtSelect",a,function(c){var n=l.select.items();if(s){var a=t.getSelection();if((!a.anchorNode||e(a.anchorNode).closest("table")[0]===l.table().node())&&a!==s)return}a=l.settings()[0];var i=e.trim(l.settings()[0].oClasses.sWrapper).replace(/ +/g,".");if(e(c.target).closest("div."+i)[0]==l.table().container()&&(i=l.cell(e(c.target).closest("td, th"))).any()){var r=e.Event("user-select.dt");o(l,r,[n,i,c]),r.isDefaultPrevented()||(r=i.index(),"row"===n?(n=r.row,d(c,l,a,"row",n)):"column"===n?(n=i.index().column,d(c,l,a,"column",n)):"cell"===n&&(n=i.index(),d(c,l,a,"cell",n)),a._select_lastCell=r)}}),e("body").on("click.dtSelect"+l.table().node().id,function(t){!n._select.blurable||e(t.target).parents().filter(l.table().container()).length||0===e(t.target).parents("html").length||e(t.target).parents("div.DTE").length||u(n,!0)})}function o(t,l,s,c){c&&!t.flatten().length||("string"==typeof l&&(l+=".dt"),s.unshift(t),e(t.table().node()).trigger(l,s))}function i(t){var l=t.settings()[0];if(l._select.info&&l.aanFeatures.i&&"api"!==t.select.style()){var s=t.rows({selected:!0}).flatten().length,c=t.columns({selected:!0}).flatten().length,n=t.cells({selected:!0}).flatten().length,a=function(l,s,c){l.append(e('<span class="select-item"/>').append(t.i18n("select."+s+"s",{_:"%d "+s+"s selected",0:"",1:"1 "+s+" selected"},c)))};e.each(l.aanFeatures.i,function(t,l){l=e(l),t=e('<span class="select-info"/>'),a(t,"row",s),a(t,"column",c),a(t,"cell",n);var o=l.children("span.select-info");o.length&&o.remove(),""!==t.text()&&l.append(t)})}}function r(t,l,s,c){var n=t[l+"s"]({search:"applied"}).indexes();c=e.inArray(c,n);var a=e.inArray(s,n);if(t[l+"s"]({selected:!0}).any()||-1!==c){if(c>a){var o=a;a=c,c=o}n.splice(a+1,n.length),n.splice(0,c)}else n.splice(e.inArray(s,n)+1,n.length);t[l](s,{selected:!0}).any()?(n.splice(e.inArray(s,n),1),t[l+"s"](n).deselect()):t[l+"s"](n).select()}function u(e,t){(t||"single"===e._select.style)&&((e=new h.Api(e)).rows({selected:!0}).deselect(),e.columns({selected:!0}).deselect(),e.cells({selected:!0}).deselect())}function d(e,t,l,s,n){var a=t.select.style(),o=t[s](n,{selected:!0}).any();"os"===a?e.ctrlKey||e.metaKey?t[s](n).select(!o):e.shiftKey?"cell"===s?c(t,n,l._select_lastCell||null):r(t,s,n,l._select_lastCell?l._select_lastCell[s]:null):(e=t[s+"s"]({selected:!0}),o&&1===e.flatten().length?t[s](n).deselect():(e.deselect(),t[s](n).select())):"multi+shift"==a&&e.shiftKey?"cell"===s?c(t,n,l._select_lastCell||null):r(t,s,n,l._select_lastCell?l._select_lastCell[s]:null):t[s](n).select(!o)}function f(e,t){return function(l){return l.i18n("buttons."+e,t)}}function m(e){return"draw.dt.DT"+(e=e._eventNamespace)+" select.dt.DT"+e+" deselect.dt.DT"+e}var h=e.fn.dataTable;h.select={},h.select.version="1.3.0",h.select.init=function(t){var l=t.settings()[0],c=l.oInit.select,n=h.defaults.select;c=c===s?n:c,n="row";var a="api",o=!1,i=!0,r="td, th",u="selected",d=!1;l._select={},!0===c?(a="os",d=!0):"string"==typeof c?(a=c,d=!0):e.isPlainObject(c)&&(c.blurable!==s&&(o=c.blurable),c.info!==s&&(i=c.info),c.items!==s&&(n=c.items),a=c.style!==s?c.style:"os",d=!0,c.selector!==s&&(r=c.selector),c.className!==s&&(u=c.className)),t.select.selector(r),t.select.items(n),t.select.style(a),t.select.blurable(o),t.select.info(i),l._select.className=u,e.fn.dataTable.ext.order["select-checkbox"]=function(t,l){return this.api().column(l,{order:"index"}).nodes().map(function(l){return"row"===t._select.items?e(l).parent().hasClass(t._select.className):"cell"===t._select.items&&e(l).hasClass(t._select.className)})},!d&&e(t.table().node()).hasClass("selectable")&&t.select.style("os")},e.each([{type:"row",prop:"aoData"},{type:"column",prop:"aoColumns"}],function(e,t){h.ext.selector[t.type].push(function(e,l,s){var c=[];if(!0!==(l=l.selected)&&!1!==l)return s;for(var n=0,a=s.length;n<a;n++){var o=e[t.prop][s[n]];(!0===l&&!0===o._select_selected||!1===l&&!o._select_selected)&&c.push(s[n])}return c})}),h.ext.selector.cell.push(function(e,t,l){var c=[];if((t=t.selected)===s)return l;for(var n=0,a=l.length;n<a;n++){var o=e.aoData[l[n].row];(!0===t&&o._selected_cells&&!0===o._selected_cells[l[n].column]||!(!1!==t||o._selected_cells&&o._selected_cells[l[n].column]))&&c.push(l[n])}return c});var _=h.Api.register,p=h.Api.registerPlural;_("select()",function(){return this.iterator("table",function(e){h.select.init(new h.Api(e))})}),_("select.blurable()",function(e){return e===s?this.context[0]._select.blurable:this.iterator("table",function(t){t._select.blurable=e})}),_("select.info()",function(e){return i===s?this.context[0]._select.info:this.iterator("table",function(t){t._select.info=e})}),_("select.items()",function(e){return e===s?this.context[0]._select.items:this.iterator("table",function(t){t._select.items=e,o(new h.Api(t),"selectItems",[e])})}),_("select.style()",function(t){return t===s?this.context[0]._select.style:this.iterator("table",function(l){l._select.style=t,l._select_init||function(t){var l=new h.Api(t);t.aoRowCreatedCallback.push({fn:function(l,s,c){for((s=t.aoData[c])._select_selected&&e(l).addClass(t._select.className),l=0,c=t.aoColumns.length;l<c;l++)(t.aoColumns[l]._select_selected||s._selected_cells&&s._selected_cells[l])&&e(s.anCells[l]).addClass(t._select.className)},sName:"select-deferRender"}),l.on("preXhr.dt.dtSelect",function(){var e=l.rows({selected:!0}).ids(!0).filter(function(e){return e!==s}),t=l.cells({selected:!0}).eq(0).map(function(e){var t=l.row(e.row).id(!0);return t?{row:t,column:e.column}:s}).filter(function(e){return e!==s});l.one("draw.dt.dtSelect",function(){l.rows(e).select(),t.any()&&t.each(function(e){l.cells(e.row,e.column).select()})})}),l.on("draw.dtSelect.dt select.dtSelect.dt deselect.dtSelect.dt info.dt",function(){i(l)}),l.on("destroy.dtSelect",function(){n(l),l.off(".dtSelect")})}(l);var c=new h.Api(l);n(c),"api"!==t&&a(c),o(new h.Api(l),"selectStyle",[t])})}),_("select.selector()",function(e){return e===s?this.context[0]._select.selector:this.iterator("table",function(t){n(new h.Api(t)),t._select.selector=e,"api"!==t._select.style&&a(new h.Api(t))})}),p("rows().select()","row().select()",function(t){var l=this;return!1===t?this.deselect():(this.iterator("row",function(t,l){u(t),t.aoData[l]._select_selected=!0,e(t.aoData[l].nTr).addClass(t._select.className)}),this.iterator("table",function(e,t){o(l,"select",["row",l[t]],!0)}),this)}),p("columns().select()","column().select()",function(t){var l=this;return!1===t?this.deselect():(this.iterator("column",function(t,l){u(t),t.aoColumns[l]._select_selected=!0,l=new h.Api(t).column(l),e(l.header()).addClass(t._select.className),e(l.footer()).addClass(t._select.className),l.nodes().to$().addClass(t._select.className)}),this.iterator("table",function(e,t){o(l,"select",["column",l[t]],!0)}),this)}),p("cells().select()","cell().select()",function(t){var l=this;return!1===t?this.deselect():(this.iterator("cell",function(t,l,c){u(t),(l=t.aoData[l])._selected_cells===s&&(l._selected_cells=[]),l._selected_cells[c]=!0,l.anCells&&e(l.anCells[c]).addClass(t._select.className)}),this.iterator("table",function(e,t){o(l,"select",["cell",l[t]],!0)}),this)}),p("rows().deselect()","row().deselect()",function(){var t=this;return this.iterator("row",function(t,l){t.aoData[l]._select_selected=!1,e(t.aoData[l].nTr).removeClass(t._select.className)}),this.iterator("table",function(e,l){o(t,"deselect",["row",t[l]],!0)}),this}),p("columns().deselect()","column().deselect()",function(){var t=this;return this.iterator("column",function(t,l){t.aoColumns[l]._select_selected=!1;var s=new h.Api(t),c=s.column(l);e(c.header()).removeClass(t._select.className),e(c.footer()).removeClass(t._select.className),s.cells(null,l).indexes().each(function(l){var s=t.aoData[l.row],c=s._selected_cells;!s.anCells||c&&c[l.column]||e(s.anCells[l.column]).removeClass(t._select.className)})}),this.iterator("table",function(e,l){o(t,"deselect",["column",t[l]],!0)}),this}),p("cells().deselect()","cell().deselect()",function(){var t=this;return this.iterator("cell",function(t,l,s){(l=t.aoData[l])._selected_cells[s]=!1,l.anCells&&!t.aoColumns[s]._select_selected&&e(l.anCells[s]).removeClass(t._select.className)}),this.iterator("table",function(e,l){o(t,"deselect",["cell",t[l]],!0)}),this});var v=0;return e.extend(h.ext.buttons,{selected:{text:f("selected","Selected"),className:"buttons-selected",limitTo:["rows","columns","cells"],init:function(t,l,s){var c=this;s._eventNamespace=".select"+v++,t.on(m(s),function(){c.enable(function(t,l){return!!(-1!==e.inArray("rows",l.limitTo)&&t.rows({selected:!0}).any()||-1!==e.inArray("columns",l.limitTo)&&t.columns({selected:!0}).any()||-1!==e.inArray("cells",l.limitTo)&&t.cells({selected:!0}).any())}(t,s))}),this.disable()},destroy:function(e,t,l){e.off(l._eventNamespace)}},selectedSingle:{text:f("selectedSingle","Selected single"),className:"buttons-selected-single",init:function(e,t,l){var s=this;l._eventNamespace=".select"+v++,e.on(m(l),function(){var t=e.rows({selected:!0}).flatten().length+e.columns({selected:!0}).flatten().length+e.cells({selected:!0}).flatten().length;s.enable(1===t)}),this.disable()},destroy:function(e,t,l){e.off(l._eventNamespace)}},selectAll:{text:f("selectAll","Select all"),className:"buttons-select-all",action:function(){this[this.select.items()+"s"]().select()}},selectNone:{text:f("selectNone","Deselect all"),className:"buttons-select-none",action:function(){u(this.settings()[0],!0)},init:function(e,t,l){var s=this;l._eventNamespace=".select"+v++,e.on(m(l),function(){var t=e.rows({selected:!0}).flatten().length+e.columns({selected:!0}).flatten().length+e.cells({selected:!0}).flatten().length;s.enable(0<t)}),this.disable()},destroy:function(e,t,l){e.off(l._eventNamespace)}}}),e.each(["Row","Column","Cell"],function(e,t){var l=t.toLowerCase();h.ext.buttons["select"+t+"s"]={text:f("select"+t+"s","Select "+l+"s"),className:"buttons-select-"+l+"s",action:function(){this.select.items(l)},init:function(e){var t=this;e.on("selectItems.dt.DT",function(e,s,c){t.active(c===l)})}}}),e(l).on("preInit.dt.dtSelect",function(e,t){"dt"===e.namespace&&h.select.init(new h.Api(t))}),h.select});