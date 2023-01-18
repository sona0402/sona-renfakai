(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{484:function(t,s,a){"use strict";a.r(s);var n=a(8),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"di概念"}},[t._v("DI概念")]),t._v(" "),s("p",[s("code",[t._v("DI")]),t._v(" 依赖反转是一种思想，无论 "),s("code",[t._v("is-a")]),t._v(" 、 "),s("code",[t._v("has-a")]),t._v(" 都会使用面向接口编程，接口实现后续如果有替换，如果没有 "),s("code",[t._v("DI")]),t._v(" ，每次变更都需要修改多处代码，所以DI重要性就显得极其重要。")]),t._v(" "),s("p",[t._v("了解 "),s("code",[t._v("DI")]),t._v(" 需要了解 "),s("code",[t._v("bean")]),t._v(" 的生命周期，构造器注入、填充属性也就是 "),s("code",[t._v("DI")]),t._v(" 依赖注入，在依赖注入时需要对对象进行查找，所以在设计时需要 "),s("code",[t._v("Context")]),t._v(" 查找特定的 "),s("code",[t._v("bean")]),t._v(" 。")]),t._v(" "),s("h2",{attrs:{id:"为什么要有di"}},[t._v("为什么要有DI")]),t._v(" "),s("p",[t._v("如果没有 "),s("code",[t._v("DI")]),t._v(" ，项目中在特定的位置就会出现下面的代码，后续需要修改默认策略怎么办？改代码。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里需要改")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RejectedExecutionHandler")]),t._v(" defaultHandler "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AbortPolicy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ThreadPoolExecutor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" corePoolSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" maximumPoolSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" keepAliveTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                          "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TimeUnit")]),t._v(" unit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                          "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BlockingQueue")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Runnable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" workQueue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                          "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ThreadFactory")]),t._v(" threadFactory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("corePoolSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" maximumPoolSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" keepAliveTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" unit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" workQueue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里需要改defaultHandler")]),t._v("\n          threadFactory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" defaultHandler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("如果代码在项目中被引用的位置很多怎么办？向 "),s("code",[t._v("Spring")]),t._v(" 学习，不直接 "),s("code",[t._v("new")]),t._v(" ，而是封装到一个方法中，修改范围更小。其实我们使用日志文件门面 "),s("code",[t._v("SLF4J")]),t._v(" 也是相同原理，做到可插拔。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("K")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("V")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashMap")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("K")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("V")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("newHashMap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" expectedSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HashMap")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("expectedSize "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DEFAULT_LOAD_FACTOR")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DEFAULT_LOAD_FACTOR")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),t._v(" "),s("h2",{attrs:{id:"di核心理论"}},[t._v("DI核心理论")]),t._v(" "),s("ol",[s("li",[s("RouterLink",{attrs:{to:"/framework/spring/di.html"}},[t._v("Bean填充属性")]),t._v("，也就是DI核心基础，DI前置条件是里氏替换；")],1),t._v(" "),s("li",[t._v("Bean在多线程下是否有副作用，这里引申出bean的作用域；")]),t._v(" "),s("li",[t._v("元信息标签；\n"),s("ol",[s("li",[t._v("xml")]),t._v(" "),s("li",[t._v("注解")]),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/framework/spring/initialize-bean.html"}},[t._v("接口")])],1),t._v(" "),s("li",[t._v("泛型")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);