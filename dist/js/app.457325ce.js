(function(t){function e(e){for(var r,c,i=e[0],s=e[1],l=e[2],d=0,m=[];d<i.length;d++)c=i[d],n[c]&&m.push(n[c][0]),n[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,i=1;i<a.length;i++){var s=a[i];0!==n[s]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=a[0]))}return t}var r={},n={app:0},o=[];function c(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=r,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(a,r,function(e){return t[e]}.bind(null,r));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=s;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("64a9"),n=a.n(r);n.a},"3ee7":function(t,e,a){"use strict";var r=a("d83a"),n=a.n(r);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("Home")],1)},o=[],c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header"},[a("h1",[t._v("Sistema de Carros")]),a("div",{attrs:{id:"nav"}})])}],s={name:"Header"},l=s,u=(a("3ee7"),a("2877")),d=Object(u["a"])(l,c,i,!1,null,"43ceb310",null),m=d.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t.isEdit?t._e():a("AddCar",{on:{"add-car":t.addCar}}),t.isEdit?a("EditCar",{on:{click:t.editCar}}):t._e(),a("Cars",{attrs:{cars:t.cars},on:{"del-car":t.deleteCar}})],1)},p=[],v=a("768b"),h=(a("ac6a"),a("ffc1"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.cars,function(e,r){return a("div",{key:e.id},[a("CarItem",{attrs:{car:e},on:{"del-car":function(a){return t.$emit("del-car",e.id,r)}}})],1)}),0)}),b=[],y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"todo-item"},[a("p",[t._v(t._s(t.car.marca)+", "+t._s(t.car.modelo)+", "+t._s(t.car.year)+"\n    "),a("button",{staticClass:"btn btn-danger btn-sm pull-right margin red",on:{click:function(e){return t.$emit("del-car",t.car.id)}}},[t._v("x")]),a("button",{staticClass:"btn btn-warning btn-sm pull-right margin yellow",on:{click:t.editCarSendEvent}},[t._v("Edit")])])])},g=[],_={name:"CarItem",props:["car"],methods:{editCarSendEvent:function(){(void 0).$emit("edit-car")}}},C=_,x=(a("f40d"),Object(u["a"])(C,y,g,!1,null,"d1b9a592",null)),w=x.exports,E={name:"Cars",components:{CarItem:w},props:["cars"]},j=E,O=Object(u["a"])(j,h,b,!1,null,"5dd93b56",null),$=O.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",[t._v("Adicionar um carro")]),a("br"),a("form",{staticClass:"form-group align-content-center",on:{submit:function(e){return e.preventDefault(),t.addCar(e)}}},[a("label",{attrs:{for:""}},[t._v("Escolha a marca")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.marca,expression:"marca"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.marca=e.target.multiple?a:a[0]}}},t._l(t.brands,function(e){return a("option",{key:e.id,domProps:{value:e.marca}},[t._v(t._s(e.marca))])}),0),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.modelo,expression:"modelo"}],staticClass:"form-control",attrs:{type:"text",name:"title",placeholder:"Modelo"},domProps:{value:t.modelo},on:{input:function(e){e.target.composing||(t.modelo=e.target.value)}}}),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.year,expression:"year"}],staticClass:"form-control",attrs:{type:"text",name:"title",placeholder:"Ano"},domProps:{value:t.year},on:{input:function(e){e.target.composing||(t.year=e.target.value)}}}),a("br"),a("input",{staticClass:"btn",attrs:{type:"submit",value:"Adicionar"}})])])},k=[],A=a("bc3a"),S=a.n(A),H={name:"AddCar",data:function(){return{marca:"",modelo:"",year:"",brands:[]}},methods:{addCar:function(t){t.preventDefault();var e={marca:this.marca,modelo:this.modelo,year:this.year};this.$emit("add-car",e),this.marca="",this.modelo="",this.year=""}},mounted:function(){var t=this;S.a.get("https://my-json-server.typicode.com/davidsouza20/api1/brand").then(function(e){return t.brands=e.data}).catch(function(t){return console.log(t)})}},M=H,N=(a("b62f"),Object(u["a"])(M,P,k,!1,null,"0abccea6",null)),D=N.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",[t._v("Editar um carro")]),a("br"),a("form",{staticClass:"form-group align-content-center",on:{submit:function(e){return e.preventDefault(),t.editCar(e)}}},[a("label",{attrs:{for:""}},[t._v("Escolha a marca")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.marca,expression:"marca"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.marca=e.target.multiple?a:a[0]}}},t._l(t.brands,function(e){return a("option",{key:e.id,domProps:{value:e.marca}},[t._v(t._s(e.marca))])}),0),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.modelo,expression:"modelo"}],staticClass:"form-control",attrs:{type:"text",name:"title",placeholder:"Modelo"},domProps:{value:t.modelo},on:{input:function(e){e.target.composing||(t.modelo=e.target.value)}}}),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:t.year,expression:"year"}],staticClass:"form-control",attrs:{type:"text",name:"title",placeholder:"Ano"},domProps:{value:t.year},on:{input:function(e){e.target.composing||(t.year=e.target.value)}}}),a("br"),a("input",{staticClass:"btn",attrs:{type:"submit",value:"Editar"}})])])},T=[],z={name:"EditCar",data:function(){return{marca:"",modelo:"",year:"",brands:[]}},methods:{editCar:function(t){t.preventDefault();var e={marca:this.marca,modelo:this.modelo,year:this.year};this.$emit("edit-car",e),this.marca="",this.modelo="",this.year=""}},mounted:function(){var t=this;S.a.get("https://my-json-server.typicode.com/davidsouza20/api1/brand").then(function(e){return t.brands=e.data}).catch(function(t){return console.log(t)})}},J=z,R=(a("df7d"),Object(u["a"])(J,I,T,!1,null,"f1af7d5a",null)),U=R.exports,q={name:"Home",components:{Cars:$,AddCar:D,EditCar:U},data:function(){return{cars:[],isEdit:!1}},methods:{deleteCar:function(t,e){var a=this;S.a.delete("http://localhost:8000/carros/".concat(t)).then(function(t){a.cars.splice(e,1)}).catch(function(t){return console.log(t)})},addCar:function(t){var e=this,a=Object.entries(t).map(function(t){var e=Object(v["a"])(t,2),a=e[0],r=e[1];return"".concat(a,"=").concat(encodeURIComponent(r))}).join("&"),r={headers:{"content-type":"application/x-www-form-urlencoded"}};S.a.post("http://localhost:8000/carros",a,r).then(function(t){return e.cars.unshift(t.data)}).catch(function(t){return console.log(t)})},editCar:function(){this.isEdit=!0,alert("test")}},created:function(){var t=this;S.a.get("http://localhost:8000/carros").then(function(e){return t.cars=e.data}).catch(function(t){return console.log(t)}),(void 0).$on("edit-car")}},B=q,F=(a("cccb"),Object(u["a"])(B,f,p,!1,null,null,null)),G=F.exports,K={name:"app",components:{Header:m,Home:G}},L=K,Q=(a("034f"),Object(u["a"])(L,n,o,!1,null,null,null)),V=Q.exports;r["a"].config.productionTip=!1,bus=new r["a"],new r["a"]({render:function(t){return t(V)}}).$mount("#app")},"64a9":function(t,e,a){},"8dd4":function(t,e,a){},b62f:function(t,e,a){"use strict";var r=a("caca"),n=a.n(r);n.a},c63c:function(t,e,a){},caca:function(t,e,a){},cccb:function(t,e,a){"use strict";var r=a("d563"),n=a.n(r);n.a},d563:function(t,e,a){},d83a:function(t,e,a){},df7d:function(t,e,a){"use strict";var r=a("c63c"),n=a.n(r);n.a},f40d:function(t,e,a){"use strict";var r=a("8dd4"),n=a.n(r);n.a}});
//# sourceMappingURL=app.457325ce.js.map