(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-078e592f"],{"57b3":function(n,e,t){},"58fa":function(n,e,t){"use strict";t.r(e);var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"container"},[t("h2",[n._v("picker 选择器组件")]),t("h3",[n._v("选择器组件")]),t("Pcode",{attrs:{code:n.code}}),t("h3",[n._v("属性")]),t("PAttrTable",{attrs:{data:n.attrs}}),t("h3",[n._v("事件")]),t("PEventTable",{attrs:{data:n.events}})],1)},o=[],l=(t("cadf"),t("551c"),t("097d"),t("9fd4")),i=t("4393"),r=t("eab5"),s={name:"button",components:{PAttrTable:l["a"],PEventTable:i["a"],Pcode:r["a"]},data:function(){return{attrs:[{param:"mode",desc:"选择器类型",type:"String",optional:"selector,multiSelector,time,date...",default:"normal"},{param:"start",desc:"开始时间或者日期(当mode选择为time或者date时生效)",type:"String",optional:"-",default:"2015-09-01"},{param:"end",desc:"结束时间或者日期(当mode选择为time或者date时生效)",type:"String",optional:"-",default:"2020-09-01"},{param:"list",desc:"选择器数据",type:"String",optional:"-",default:"-"},{param:"rangeKey",desc:"选择器需要展示的key",type:"String",optional:"-",default:"label"},{param:"value",desc:"默认显示选中的值",type:"Array",optional:"-",default:"-"}],events:[{name:"confirmClick",desc:"点击确认时执行的方法",param:"选中的值"}],code:"\n<script>\n    import Taro, { Component } from '@tarojs/taro'\n    import { View } from '@tarojs/components'\n    import {\n        WiPicker,\n    } from 'hosjoy-wi-ui'\n\n    export default class Index extends Component {\n        constructor(props){\n            super(props)\n            this.state = {\n                lists:[]\n            }\n        }\n\n        onConfirmTest(val){\n            console.log('点击确认后执行的方法')\n        }\n\n        render () {\n          const _list = [\n              {\n                  label:'美国',\n                  children:[\n                      {\n                          label:'上海',\n                          children:[\n                              {\n                                  label:'江宁'\n                              },\n                              {\n                                  label:'江北'\n                              },\n                              {\n                                  label:'建业'\n                              },\n                          ]\n                      },\n                      {\n                          label:'北京',\n                          children:[\n                              {\n                                  label:'管店'\n                              },\n                              {\n                                  label:'杨庙'\n                              },\n                              {\n                                  label:'石坝'\n                              },\n                          ]\n                      },\n                      {\n                          label:'南京'\n                      },\n                      {\n                          label:'深圳'\n                      },\n                  ]\n              },\n              {\n                  label:'中国',\n                  children:[\n                      {\n                          label:'芜湖',\n                          children:[\n                              {\n                                  label:'明光'\n                              },\n                              {\n                                  label:'蚯蚓'\n                              },\n                              {\n                                  label:'天长'\n                              },\n                          ]\n                      },\n                      {\n                          label:'合肥',\n                          children:[\n                              {\n                                  label:'涧西'\n                              },\n                              {\n                                  label:'古沛'\n                              },\n                              {\n                                  label:'魏刚'\n                              },\n                          ]\n                      },\n                      {\n                          label:'滁州'\n                      },\n                  ]\n              },\n              {\n                  label:'巴西',\n                  children:[\n                      {\n                          label:'上海'\n                      },\n                      {\n                          label:'北京'\n                      },\n                      {\n                          label:'南京'\n                      },\n                  ]\n              },\n              {\n                  label:'日本',\n                  children:[\n                      {\n                          label:'上海'\n                      },\n                      {\n                          label:'北京'\n                      },\n                      {\n                          label:'南京'\n                      },\n                  ]\n              }\n          ]\n          return (\n              <View className='index'>\n                  <WiPicker\n                      list={_lists}\n                      rangeKey='name'\n                      confirmClick={this.onConfirmTest.bind(this)}\n                  >\n                      <View>弹出</View>\n                  </WiPicker>\n\n              </View>\n          )\n        }\n}\n<\/script>"}}},c=s,d=(t("d370"),t("2877")),u=Object(d["a"])(c,a,o,!1,null,"ea8a3e36",null);u.options.__file="index.vue";e["default"]=u.exports},"9f23":function(n,e,t){},d370:function(n,e,t){"use strict";var a=t("9f23"),o=t.n(a);o.a},e650:function(n,e,t){"use strict";var a=t("57b3"),o=t.n(a);o.a},eab5:function(n,e,t){"use strict";var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"demo-block",on:{mouseover:n.onShowTip,mouseout:n.onHideTip}},[t("div",{directives:[{name:"show",rawName:"v-show",value:n.isShowCode,expression:"isShowCode"}],staticClass:"meta"},[t("pre",[n._v("            "),t("code",{staticClass:"language-html",domProps:{textContent:n._s(n.realCode)}},[n._v("\n            ")]),n._v("\n        ")])])])},o=[],l=(t("ac6a"),t("1487")),i=t.n(l),r=(t("eba2"),{name:"p-code",props:{code:{type:String,default:""}},data:function(){return{isHovering:!1,isShowCode:!0}},computed:{realCode:function(){return this.code}},methods:{onShowTip:function(){this.isHovering=!0},onHideTip:function(){this.isHovering=!1},onSwitchCodeDisplay:function(){this.isShowCode=!this.isShowCode},highlightCode:function(){var n=document.querySelectorAll("pre code");n.forEach(function(n){i.a.highlightBlock(n)})}},mounted:function(){this.$nextTick(function(){this.highlightCode()})}}),s=r,c=(t("e650"),t("2877")),d=Object(c["a"])(s,a,o,!1,null,"29a83b62",null);d.options.__file="Pcode.vue";e["a"]=d.exports}}]);