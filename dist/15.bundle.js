(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{137:function(e,n,i){"use strict";i.r(n);var a=i(138),t=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(n,e,function(){return a[e]})}(r);n.default=t.a},138:function(e,n,i){"use strict";e.exports={name:"users-page",data:function(){return{query:i(80)}},methods:{img:function(e){return'<img src="'+e.gravatar+'" />'},linker:function(e){return"/users/"+e.slug}},metaInfo:{title:"Users",meta:[{name:"description",content:"List of users."}]}}},139:function(e,n,i){var a=i(263);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,i(10).default)("eea269a0",a,!0,{})},262:function(e,n,i){"use strict";var a=i(139);i.n(a).a},263:function(e,n,i){(e.exports=i(9)(!1)).push([e.i,"\n.hero[data-v-1a6719ae]{margin-top:40px\n}\n",""])},290:function(e,n,i){"use strict";var a=function(){var e=this.$createElement,n=this._self._c||e;return n("div",[this._m(0),this._v(" "),n("div",{staticClass:"columns is-mobile is-centered"},[n("section",{staticClass:"content-box column is-two-thirds"},[n("paginator",{attrs:{resource:"users",query:this.query,headers:[{field:"id",title:"Id",sortable:!0},{field:"username",title:"Username",sortable:!0}],linker:this.linker,sort:"id",descending:!1}})],1)])])},t=[function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"columns is-mobile is-centered"},[n("section",{staticClass:"hero content-box column is-two-thirds"},[n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[this._v("Users")]),this._v(" "),n("h2",{staticClass:"subtitle"},[this._v("Members of the site")])])])])])}];i.d(n,"a",function(){return a}),i.d(n,"b",function(){return t})},68:function(e,n,i){"use strict";i.r(n);var a=i(290),t=i(137);for(var r in t)"default"!==r&&function(e){i.d(n,e,function(){return t[e]})}(r);i(262);var s=i(4),d=Object(s.a)(t.default,a.a,a.b,!1,null,"1a6719ae",null);n.default=d.exports},80:function(e,n){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"Users"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"offset"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},defaultValue:{kind:"IntValue",value:"0"}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"limit"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},defaultValue:{kind:"IntValue",value:"500"}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"gravatarSize"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},defaultValue:{kind:"IntValue",value:"40"}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"sort"}},type:{kind:"NamedType",name:{kind:"Name",value:"UsersSortField"}},defaultValue:{kind:"EnumValue",value:"id"}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"descending"}},type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}},defaultValue:{kind:"BooleanValue",value:!1}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"filters"}},type:{kind:"NamedType",name:{kind:"Name",value:"UsersFilter"}},defaultValue:{kind:"ObjectValue",fields:[]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"users"},arguments:[{kind:"Argument",name:{kind:"Name",value:"selection"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"offset"},value:{kind:"Variable",name:{kind:"Name",value:"offset"}}},{kind:"ObjectField",name:{kind:"Name",value:"limit"},value:{kind:"Variable",name:{kind:"Name",value:"limit"}}},{kind:"ObjectField",name:{kind:"Name",value:"sort"},value:{kind:"Variable",name:{kind:"Name",value:"sort"}}},{kind:"ObjectField",name:{kind:"Name",value:"descending"},value:{kind:"Variable",name:{kind:"Name",value:"descending"}}},{kind:"ObjectField",name:{kind:"Name",value:"filters"},value:{kind:"Variable",name:{kind:"Name",value:"filters"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"username"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"gravatar"},arguments:[{kind:"Argument",name:{kind:"Name",value:"size"},value:{kind:"Variable",name:{kind:"Name",value:"gravatarSize"}}}],directives:[]},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"AdministeredUser"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"firstname"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"lastname"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"OwnedUser"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"firstname"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"lastname"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:536}};i.loc.source={body:"query Users (\r\n  $offset: Int = 0,\r\n  $limit: Int = 500,\r\n  $gravatarSize: Int = 40,\r\n  $sort: UsersSortField = id,\r\n  $descending: Boolean = false,\r\n  $filters: UsersFilter = {}\r\n) {\r\n  users(selection: {\r\n    offset: $offset,\r\n    limit: $limit,\r\n    sort: $sort,\r\n    descending: $descending,\r\n    filters: $filters\r\n  }) {\r\n    id\r\n    slug\r\n    username\r\n    gravatar(size: $gravatarSize)\r\n    ... on AdministeredUser {\r\n      firstname lastname email\r\n    }\r\n    ... on OwnedUser {\r\n      firstname lastname email\r\n    }\r\n  }\r\n}\r\n",name:"GraphQL request",locationOffset:{line:1,column:1}};var a={};function t(e,n){for(var i=0;i<e.definitions.length;i++){var a=e.definitions[i];if(a.name&&a.name.value==n)return a}}i.definitions.forEach(function(e){if(e.name){var n=new Set;!function e(n,i){if("FragmentSpread"===n.kind)i.add(n.name.value);else if("VariableDefinition"===n.kind){var a=n.type;"NamedType"===a.kind&&i.add(a.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(n){e(n,i)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(n){e(n,i)}),n.definitions&&n.definitions.forEach(function(n){e(n,i)})}(e,n),a[e.name.value]=n}}),e.exports=i,e.exports.Users=function(e,n){var i={kind:e.kind,definitions:[t(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);for(var r=a[n]||new Set,s=new Set,d=new Set(r);d.size>0;){var l=d;d=new Set,l.forEach(function(e){s.has(e)||(s.add(e),(a[e]||new Set).forEach(function(e){d.add(e)}))})}return s.forEach(function(n){var a=t(e,n);a&&i.definitions.push(a)}),i}(i,"Users")}}]);