(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{101:function(e,n,i){"use strict";i.r(n);var t=i(102),a=i.n(t);for(var s in t)"default"!==s&&function(e){i.d(n,e,function(){return t[e]})}(s);n.default=a.a},102:function(e,n,i){"use strict";var t=function(e){return e&&e.__esModule?e:{default:e}}(i(188));e.exports={name:"events-page",props:{},data:function(){return{eventsQuery:i(78),sections:[{title:"Participating",filters:{isParticipating:!0,NOT:{status:"Cancelled"}}},{title:"Other",filters:{isParticipating:!1,NOT:{status:"Cancelled"}}}]}},methods:{rounds:function(e){return e.currentRound?e.currentRound.index+1+" / "+e.numRounds:e.numRounds},host:function(e){return e.host.username},linker:function(e){return"/events/"+e.slug}},metaInfo:function(){return{title:function(){return"List of events"},meta:[{name:"description",content:"List of events."}]}},apollo:{currentUser:{query:i(21)}},components:{EventsList:t.default}}},103:function(e,n,i){"use strict";i.r(n);var t=i(104),a=i.n(t);for(var s in t)"default"!==s&&function(e){i.d(n,e,function(){return t[e]})}(s);n.default=a.a},104:function(e,n,i){"use strict";e.exports={name:"events-list",props:{name:String,isParticipating:Boolean,status:[Array,String],limit:Number,hostUserId:Number,maxDescription:Number},computed:{variables:function(){return{details:!1,isParticipating:this.isParticipating,status:this.status,limit:this.limit,hostUserId:this.hostUserId,maxDescription:this.maxDescription}}},methods:{pathToUser:function(e){return"/users/"+e},formatText:function(e){return e.replace(/(?:\r\n|\r|\n)/g,"<br />")},readMore:function(e){this.$router.push({path:"/events/"+e.slug})},join:function(e){console.warn("TODO")}},data:function(){return{}},apollo:{currentUser:{query:i(21)}}}},105:function(e,n,i){var t=i(190);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);(0,i(10).default)("273a0a8a",t,!0,{})},106:function(e,n,i){var t=i(192);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);(0,i(10).default)("1f555640",t,!0,{})},188:function(e,n,i){"use strict";i.r(n);var t=i(281),a=i(103);for(var s in a)"default"!==s&&function(e){i.d(n,e,function(){return a[e]})}(s);i(189);var r=i(4),d=Object(r.a)(a.default,t.a,t.b,!1,null,"d4ce5346",null);n.default=d.exports},189:function(e,n,i){"use strict";var t=i(105);i.n(t).a},190:function(e,n,i){(e.exports=i(9)(!1)).push([e.i,"\n.events-list-name[data-v-d4ce5346]{border-bottom:1px solid #c0c0c0;font-weight:bold\n}\n.events[data-v-d4ce5346]{margin-top:15px\n}\n.event[data-v-d4ce5346]{font-size:0.9em;padding:5px;background-color:#ffffff;border:1px solid #c0c0c0;margin:5px;padding:5px;box-shadow:2px 2px 3px 0 rgba(0,0,0,0.75)\n}\n.event>div[data-v-d4ce5346]{padding-top:5px;padding-bottom:5px\n}\n.event-top[data-v-d4ce5346]{overflow:auto;clear:both\n}\n.event-name[data-v-d4ce5346]{font-weight:bold;float:left\n}\n.event-host[data-v-d4ce5346]{text-align:right\n}\n.event-num-participants[data-v-d4ce5346]{text-align:right\n}\n.event-rounds[data-v-d4ce5346]{text-align:right\n}\n.event-description[data-v-d4ce5346]{clear:both\n}\n.event-actions[data-v-d4ce5346]{text-align:center;clear:both;overflow:auto;padding-top:7px;padding-bottom:7px\n}\n.event-action[data-v-d4ce5346]{display:inline\n}\n.event-action[data-v-d4ce5346]:not(:first-child){margin-left:15px\n}\n",""])},191:function(e,n,i){"use strict";var t=i(106);i.n(t).a},192:function(e,n,i){(e.exports=i(9)(!1)).push([e.i,"\n.events-paginator[data-v-cac02c2e]{margin-top:25px\n}\n.section-title[data-v-cac02c2e]{font-weight:bold;border-bottom:1px solid #c0c0c0;margin-bottom:5px\n}\n",""])},281:function(e,n,i){"use strict";var t=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ApolloQuery",{staticClass:"events",attrs:{query:i(78),variables:e.variables},scopedSlots:e._u([{key:"default",fn:function(n){var i=n.result,a=i.data,s=i.loading;return[a&&!s?[0==a.events.length?t("div",[e._v("None found")]):e._e(),e._v(" "),e._l(a.events,function(n){return a.events.length>0?t("div",{staticClass:"event"},[t("div",{staticClass:"event-top"},[t("div",{staticClass:"event-name"},[e._v(e._s(n.name))]),e._v(" "),t("div",{staticClass:"event-host"},[e._v("\n            admin: "),t("router-link",{attrs:{to:e.pathToUser(n.host.slug)}},[e._v("\n              "+e._s(n.host.username)+"\n            ")]),e._v(" "),t("img",{attrs:{src:n.host.gravatar}})],1),e._v(" "),n.numParticipants>0?t("div",{staticClass:"event-num-participants"},[t("strong",[e._v(e._s(n.numParticipants))]),e._v("\n            "+e._s(n.numParticipants>1?"participants":"participant")+"\n          ")]):e._e(),e._v(" "),"Started"==n.status&&n.currentRound?t("div",{staticClass:"event-rounds"},[e._v("\n            Round\n            "),t("strong",[e._v(e._s(n.currentRound.index))]),e._v(" of\n            "),t("strong",[e._v(e._s(n.numRounds))])]):e._e()]),e._v(" "),t("div",{staticClass:"event-description",domProps:{innerHTML:e._s(e.formatText(n.description))}}),e._v(" "),t("div",{staticClass:"event-actions"},[t("div",{staticClass:"event-action button is-info",on:{click:function(i){e.readMore(n)}}},[e._v("\n            Read more\n          ")]),e._v(" "),n.isParticipant||"Complete"==n.status?e._e():t("div",{staticClass:"event-action button is-link",on:{click:function(i){e.join(n)}}},[e._v("\n            Join\n          ")])]),e._v(" "),t("div",{staticClass:"event-tags"},[n.isAdministrator?t("span",{staticClass:"tag"},[e._v("Administrator")]):e._e(),e._v(" "),n.isParticipant?t("span",{staticClass:"tag"},[e._v("Participant")]):e._e(),e._v(" "),t("span",{staticClass:"tag"},[e._v(e._s(n.status))])])]):e._e()})]:e._e()]}}])})},a=[];i.d(n,"a",function(){return t}),i.d(n,"b",function(){return a})},283:function(e,n,i){"use strict";var t=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",[i("hero",{attrs:{title:"Events",subtitle:"Find an event to take part in"}}),e._v(" "),i("div",{staticClass:"columns is-centered"},[i("section",{staticClass:"content-box column is-three-quarters"},[i("div",[e.currentUser?i("router-link",{staticClass:"button",attrs:{to:{path:"/create-event"}}},[e._v("\n          New event\n        ")]):e._e()],1),e._v(" "),e._l(e.sections,function(n){return i("div",{staticClass:"events-paginator"},[i("div",{staticClass:"section-title"},[e._v(e._s(n.title))]),e._v(" "),i("paginator",{attrs:{resource:"events",query:e.eventsQuery,"show-headers":!0,headers:[{field:"name",title:"Name",sortable:!0},{field:"status",title:"Status",sortable:!0},{field:e.host,title:"Host",sortable:!0,sortField:"hostUserId",tooltip:"The username of the user hosting the event"},{field:"numParticipants",title:"Participants",sortable:!0,tooltip:"The number of currently signed up participants"},{field:e.rounds,title:"Rounds",sortable:!0,tooltip:"Number of rounds in the event and (possibly) the current round"},{field:"isPublic",title:"Public",sortable:!0,tooltip:"Whether the event is available for everyone"},{field:"isScheduleVisible",title:"Visible schedule",sortable:!0,tooltip:"Whether the swap schedule is visible for everyone who can see the event"},{field:"areChangesVisible",title:"Visible changes",sortable:!0,tooltip:"Whether uploaded files should be public everyone who can see the event"}],linker:e.linker,sort:"status",descending:!1,filters:n.filters}})],1)})],2)])],1)},a=[];i.d(n,"a",function(){return t}),i.d(n,"b",function(){return a})},58:function(e,n,i){"use strict";i.r(n);var t=i(283),a=i(101);for(var s in a)"default"!==s&&function(e){i.d(n,e,function(){return a[e]})}(s);i(191);var r=i(4),d=Object(r.a)(a.default,t.a,t.b,!1,null,"cac02c2e",null);n.default=d.exports},77:function(e,n){var i={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"userParts"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"username"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"gravatar"},arguments:[{kind:"Argument",name:{kind:"Name",value:"size"},value:{kind:"Variable",name:{kind:"Name",value:"gravatarSize"}}}],directives:[]}]}}],loc:{start:0,end:87}};i.loc.source={body:" fragment userParts on User {\n  id\n  slug\n  username\n  gravatar(size: $gravatarSize)\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};e.exports=i},78:function(e,n,i){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"Events"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"details"}},type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}},defaultValue:{kind:"BooleanValue",value:!1}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"offset"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},defaultValue:{kind:"IntValue",value:"0"}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"limit"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},defaultValue:{kind:"IntValue",value:"500"}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"maxDescription"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},defaultValue:{kind:"NullValue"}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"gravatarSize"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},defaultValue:{kind:"IntValue",value:"40"}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"filters"}},type:{kind:"NamedType",name:{kind:"Name",value:"EventsFilter"}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"sort"}},type:{kind:"NamedType",name:{kind:"Name",value:"EventsSortField"}},defaultValue:{kind:"EnumValue",value:"id"}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"descending"}},type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}},defaultValue:{kind:"BooleanValue",value:!1}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"events"},arguments:[{kind:"Argument",name:{kind:"Name",value:"selection"},value:{kind:"ObjectValue",fields:[{kind:"ObjectField",name:{kind:"Name",value:"offset"},value:{kind:"Variable",name:{kind:"Name",value:"offset"}}},{kind:"ObjectField",name:{kind:"Name",value:"limit"},value:{kind:"Variable",name:{kind:"Name",value:"limit"}}},{kind:"ObjectField",name:{kind:"Name",value:"sort"},value:{kind:"Variable",name:{kind:"Name",value:"sort"}}},{kind:"ObjectField",name:{kind:"Name",value:"descending"},value:{kind:"Variable",name:{kind:"Name",value:"descending"}}},{kind:"ObjectField",name:{kind:"Name",value:"filters"},value:{kind:"Variable",name:{kind:"Name",value:"filters"}}}]}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[{kind:"Argument",name:{kind:"Name",value:"maxLength"},value:{kind:"Variable",name:{kind:"Name",value:"maxDescription"}}}],directives:[]},{kind:"Field",name:{kind:"Name",value:"currentRound"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"index"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"currentRoundsubmission"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"roundsubmissionParts"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"numRounds"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"numParticipants"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"roundsubmissions"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"include"},arguments:[{kind:"Argument",name:{kind:"Name",value:"if"},value:{kind:"Variable",name:{kind:"Name",value:"details"}}}]}],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"roundsubmissionParts"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"participants"},arguments:[],directives:[{kind:"Directive",name:{kind:"Name",value:"include"},arguments:[{kind:"Argument",name:{kind:"Name",value:"if"},value:{kind:"Variable",name:{kind:"Name",value:"details"}}}]}],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"userParts"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"host"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"userParts"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"areChangesVisible"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"isScheduleVisible"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"isParticipant"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"isAdministrator"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"isPublic"},arguments:[],directives:[]},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"AdministeredEvent"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"initialFile"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"filename"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"sizeHuman"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"downloadUrl"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"invitedUsers"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"userParts"},directives:[]}]}}]}}]}}]}}],loc:{start:0,end:1210}};t.loc.source={body:'#import "./fragments/userParts.gql"\r\n#import "./fragments/roundsubmissionParts.gql"\r\n\r\nquery Events (\r\n  $details: Boolean = false,\r\n  $offset: Int = 0,\r\n  $limit: Int = 500,\r\n  $maxDescription: Int = null,\r\n  $gravatarSize: Int = 40,\r\n  $filters: EventsFilter,\r\n  $sort: EventsSortField = id,\r\n  $descending: Boolean = false\r\n) {\r\n  events(selection: {\r\n    offset: $offset,\r\n    limit: $limit,\r\n    sort: $sort,\r\n    descending: $descending,\r\n    filters: $filters\r\n  }) {\r\n    id\r\n    slug\r\n    name\r\n    status\r\n    description(maxLength: $maxDescription)\r\n    currentRound {\r\n      id\r\n      index\r\n    }\r\n    currentRoundsubmission {\r\n      ...roundsubmissionParts\r\n    }\r\n    numRounds\r\n    numParticipants\r\n    roundsubmissions @include(if: $details) {\r\n      ...roundsubmissionParts\r\n    }\r\n    participants @include(if: $details)  {\r\n      ...userParts\r\n    }\r\n    host {\r\n      ...userParts\r\n    }\r\n    areChangesVisible\r\n    isScheduleVisible\r\n    isParticipant\r\n    isAdministrator\r\n    isPublic\r\n    ... on AdministeredEvent {\r\n      initialFile {\r\n        id\r\n        filename\r\n        sizeHuman\r\n        downloadUrl\r\n      }\r\n      invitedUsers {\r\n        ...userParts\r\n      }\r\n    }\r\n  }\r\n}\r\n',name:"GraphQL request",locationOffset:{line:1,column:1}};var a={};function s(e){return e.filter(function(e){if("FragmentDefinition"!==e.kind)return!0;var n=e.name.value;return!a[n]&&(a[n]=!0,!0)})}t.definitions=t.definitions.concat(s(i(77).definitions)),t.definitions=t.definitions.concat(s(i(79).definitions));var r={};function d(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}t.definitions.forEach(function(e){if(e.name){var n=new Set;!function e(n,i){if("FragmentSpread"===n.kind)i.add(n.name.value);else if("VariableDefinition"===n.kind){var t=n.type;"NamedType"===t.kind&&i.add(t.name.value)}n.selectionSet&&n.selectionSet.selections.forEach(function(n){e(n,i)}),n.variableDefinitions&&n.variableDefinitions.forEach(function(n){e(n,i)}),n.definitions&&n.definitions.forEach(function(n){e(n,i)})}(e,n),r[e.name.value]=n}}),e.exports=t,e.exports.Events=function(e,n){var i={kind:e.kind,definitions:[d(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);for(var t=r[n]||new Set,a=new Set,s=new Set(t);s.size>0;){var l=s;s=new Set,l.forEach(function(e){a.has(e)||(a.add(e),(r[e]||new Set).forEach(function(e){s.add(e)}))})}return a.forEach(function(n){var t=d(e,n);t&&i.definitions.push(t)}),i}(t,"Events")},79:function(e,n){var i={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"roundsubmissionParts"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Roundsubmission"}},directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"round"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"index"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"participant"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"userParts"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"originalParticipant"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"userParts"},directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"song"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"fileSeeded"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"filename"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"downloadUrl"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"fileSubmitted"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"filename"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"downloadUrl"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:308}};i.loc.source={body:"fragment roundsubmissionParts on Roundsubmission {\n  id\n  status\n  round {\n    id\n    index\n  }\n  participant {\n    ...userParts\n  },\n  originalParticipant {\n    ...userParts\n  }\n  song { id }\n  fileSeeded {\n    id\n    filename\n    downloadUrl\n  }\n  fileSubmitted {\n    id\n    filename\n    downloadUrl\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};e.exports=i}}]);