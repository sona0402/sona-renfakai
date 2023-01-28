(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{365:function(s,t,a){s.exports=a.p+"assets/img/AbstractOwnableSynchronizer.b7765399.png"},366:function(s,t,a){s.exports=a.p+"assets/img/aqs.1da9a75e.png"},510:function(s,t,a){"use strict";a.r(t);var e=a(8),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"exclusively"}},[s._v("exclusively")]),s._v(" "),t("p",[s._v("线程独占拥有的同步器。此类为创建所有权概念的锁和相关同步器提供了基础。"),t("code",[s._v("AbstractOwnableSynchronizer")]),s._v("类本身不管理或使用此信息。但是，子类和工具可以使用适当维护的值来帮助控制和监视访问并提供诊断。")]),s._v(" "),t("h2",{attrs:{id:"核心api"}},[s._v("核心api")]),s._v(" "),t("p",[t("img",{attrs:{src:a(365),alt:"An image"}})]),s._v(" "),t("ul",[t("li",[s._v("setExclusiveOwnerThread(Thread thread)\n"),t("ul",[t("li",[t("code",[s._v("setExclusiveOwnerThread(Thread.currentThread());")]),s._v("访问权限的线程")]),s._v(" "),t("li",[t("code",[s._v("setExclusiveOwnerThread(null);")]),s._v("清空访问权限的线程，都可以访问")])])]),s._v(" "),t("li",[s._v("getExclusiveOwnerThread()\n"),t("ul",[t("li",[s._v("返回最后由"),t("code",[s._v("setExclusiveOwnerThread")]),s._v("设置的线程，如果从未设置，则返回null")])])])]),s._v(" "),t("h2",{attrs:{id:"继承关系"}},[s._v("继承关系")]),s._v(" "),t("p",[t("img",{attrs:{src:a(366),alt:"An image"}})]),s._v(" "),t("h2",{attrs:{id:"代码"}},[s._v("代码")]),s._v(" "),t("ol",[t("li",[t("code",[s._v("AbstractOwnableSynchronizer")]),s._v("，从代码中可以看到此使用的是独占模式")])]),s._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("abstract")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AbstractOwnableSynchronizer")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("java"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("io"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),s._v("Serializable")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// todo 其他无用的删除")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("transient")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Thread")]),s._v(" exclusiveOwnerThread"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 独占模式那个线程占用")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setExclusiveOwnerThread")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Thread")]),s._v(" thread"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        exclusiveOwnerThread "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" thread"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 返回锁的持有者")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("final")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Thread")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getExclusiveOwnerThread")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" exclusiveOwnerThread"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("h2",{attrs:{id:"总结"}},[s._v("总结")]),s._v(" "),t("p",[s._v("为子类提供最后持有访问权限查询和设置接口")])])}),[],!1,null,null,null);t.default=n.exports}}]);