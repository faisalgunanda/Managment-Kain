!function(a,e,i){"use strict";i(".pickadate").pickadate(),i(".format-picker").pickadate({format:"mmmm, d, yyyy"}),i(".pickadate-limits").pickadate({min:[2019,3,20],max:[2019,5,28]}),i(".pickadate-disable").pickadate({disable:[1,[2019,3,6],[2019,3,20]]}),i(".pickadate-translations").pickadate({formatSubmit:"dd/mm/yyyy",monthsFull:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],monthsShort:["Jan","Fev","Mar","Avr","Mai","Juin","Juil","Aou","Sep","Oct","Nov","Dec"],weekdaysShort:["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],today:"aujourd'hui",clear:"clair",close:"Fermer"}),i(".pickadate-months").pickadate({selectYears:!1,selectMonths:!0}),i(".pickadate-months-year").pickadate({selectYears:!0,selectMonths:!0}),i(".pickadate-short-string").pickadate({weekdaysShort:["S","M","Tu","W","Th","F","S"],showMonthsShort:!0}),i(".pickadate-firstday").pickadate({firstDay:1}),i(".pickatime").pickatime(),i(".pickatime-format").pickatime({format:"T!ime selected: h:i a",formatLabel:"HH:i a",formatSubmit:"HH:i",hiddenPrefix:"prefix__",hiddenSuffix:"__suffix"}),i(".pickatime-formatlabel").pickatime({formatLabel:function(a){var e=(a.pick-this.get("now").pick)/60,i=e<0?" !hours to now":e>0?" !hours from now":"now";return"h:i a <sm!all>"+(e?Math.abs(e):"")+i+"</sm!all>"}}),i(".pickatime-min-max").pickatime({min:new Date(2015,3,20,7),max:new Date(2015,7,14,18,30)}),i(".pickatime-intervals").pickatime({interval:150}),i(".pickatime-disable").pickatime({disable:[3,5,7,13,17,21]}),i(".pickatime-close-action").pickatime({closeOnSelect:!1,closeOnClear:!1})}(window,document,jQuery);
