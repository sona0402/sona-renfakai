(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{461:function(t,s,n){t.exports=n.p+"assets/img/event-loop.752b5f05.jpg"},462:function(t,s,n){t.exports=n.p+"assets/img/boos-0.ff471e3c.jpg"},463:function(t,s,n){t.exports=n.p+"assets/img/boss-1.ef76c96e.jpg"},464:function(t,s,n){t.exports=n.p+"assets/img/boss-group-2-1.d5d8cb3b.jpg"},465:function(t,s,n){t.exports=n.p+"assets/img/boss-group-2-2.5cfa5250.jpg"},466:function(t,s,n){t.exports=n.p+"assets/img/NioEventLoopGroup.34afcd09.png"},467:function(t,s,n){t.exports=n.p+"assets/img/NioEventLoop.25d55dee.png"},573:function(t,s,n){"use strict";n.r(s);var a=n(13),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"eventloopgroup"}},[t._v("EventLoopGroup")]),t._v(" "),a("h3",{attrs:{id:"boss-选择"}},[t._v("Boss 选择")]),t._v(" "),a("p",[t._v("Boss EventLoopGroup 要处理的是 acceptor，也就是 "),a("code",[t._v("listenfd")]),t._v(" ，所以如果需要开启一个端口，使用一个 "),a("code",[t._v("EventLoop")]),t._v(" 即可，如果需要开启多个端口，则需要多个 "),a("code",[t._v("EventLoop")]),t._v(" 。")]),t._v(" "),a("h3",{attrs:{id:"绑定一个端口"}},[t._v("绑定一个端口")]),t._v(" "),a("p",[t._v("对于程序来说，开启一个 "),a("code",[t._v("listen")]),t._v(" 端口，就是为"),a("code",[t._v("EventLoop")]),t._v("开启一个线程， "),a("code",[t._v("boss")]),t._v(" 使用 "),a("code",[t._v("new NioEventLoopGroup(1)")]),t._v(" 会好一些，即使使用默认策略也没多大关系，没有端口开启就不会有 "),a("code",[t._v("channel")]),t._v(" 提交到其他 "),a("code",[t._v("EventLoop")]),t._v(" 里面，也就不会开启相应的线程。")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("EventLoopGroup group")]),t._v(" 会管理所有的 "),a("code",[t._v("EventLoop")]),t._v(" ，如果使用默认策略会产生 "),a("code",[t._v("NettyRuntime.availableProcessors() * 2")]),t._v(" 个 "),a("code",[t._v("EventLoop")]),t._v(" 。")])]),t._v(" "),a("p",[a("img",{attrs:{src:n(461),alt:"An image"}})]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("code",[t._v("EventLoop[0]")]),t._v(" 由于被 "),a("code",[t._v("ChooserFactory")]),t._v(" 选到了，并且初始化 "),a("code",[t._v("ServerSocketChannle")]),t._v(" 时创建了线程，所以线程不为空。")])]),t._v(" "),a("p",[a("img",{attrs:{src:n(462),alt:"An image"}})]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[a("code",[t._v("EventLoop[1-15]")]),t._v(" 后面没有在处理注册，开启端口，所以线程都为空。")])]),t._v(" "),a("p",[a("img",{attrs:{src:n(463),alt:"An image"}})]),t._v(" "),a("h3",{attrs:{id:"绑定多个端口"}},[t._v("绑定多个端口")]),t._v(" "),a("ol",[a("li",[t._v("绑定多个端口的"),a("code",[t._v("demo")]),t._v("如下")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EchoServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EchoServerHandler")]),t._v(" echoServerHandler "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EchoServerHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EventLoopGroup")]),t._v(" boss "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NioEventLoopGroup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EventLoopGroup")]),t._v(" work "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NioEventLoopGroup")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServerBootstrap")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServerBootstrap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("group")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("boss"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" work"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("channel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NioServerSocketChannel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("childHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChannelInitializer")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SocketChannel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                      "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n                      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initChannel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SocketChannel")]),t._v(" ch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                          ch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pipeline")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addLast")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("echoServerHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 绑定多个端口")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChannelFuture")]),t._v(" bind "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChannelFuture")]),t._v(" bind1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9090")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChannelFuture")]),t._v(" bind2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9091")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          bind"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("channel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("closeFuture")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          bind1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("channel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("closeFuture")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          bind2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("channel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("closeFuture")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("finally")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          boss"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("shutdownGracefully")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          work"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("shutdownGracefully")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("看一下"),a("code",[t._v("Eventloop")]),t._v("。")])]),t._v(" "),a("p",[a("img",{attrs:{src:n(464),alt:"An image"}})]),t._v(" "),a("p",[a("img",{attrs:{src:n(465),alt:"An image"}})]),t._v(" "),a("h3",{attrs:{id:"group"}},[t._v("Group")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("根据 OCP 原则，选择 "),a("code",[t._v("EventLoopGroup")]),t._v(" 和 "),a("code",[t._v("EventLoop")]),t._v(" 进行展示")])]),t._v(" "),a("ol",[a("li",[t._v("从名字中可以看出"),a("code",[t._v("EventLoopGroup")]),t._v("有组的概念，其中以"),a("code",[t._v("MultithreadEventExecutorGroup")]),t._v("为主线全部都是与线程有关系的，其保证了"),a("code",[t._v("channel")]),t._v("注册的时候支持异步事件。\n而 "),a("code",[t._v("EventLoopGroup")]),t._v(" 主要是为 "),a("code",[t._v("channel")]),t._v(" 找到需要被注册到的 "),a("code",[t._v("EventLoop")]),t._v(" ，其所有接口都与注册有关系。而 "),a("code",[t._v("NioEventLoopGroup")]),t._v(" 其组内包含 "),a("code",[t._v("1...n")]),t._v(" 个 "),a("code",[t._v("EventLoop")]),t._v(" ，所以其设计需要一个选择 "),a("code",[t._v("EventLoop next();")]),t._v(" 的方法，下面视图根据 OCP 原则，选择 "),a("code",[t._v("NioEventLoopGroup")]),t._v(" 进行展示。")])]),t._v(" "),a("p",[a("img",{attrs:{src:n(466),alt:"An image"}})]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("code",[t._v("EventLoop")]),t._v("也就是事件循环，其是"),a("code",[t._v("EventLoopGroup")]),t._v("扩展，因为从其继承关系，我们看到其继承了"),a("code",[t._v("EventLoopGroup")]),t._v("，对于"),a("code",[t._v("NioEventLoop")]),t._v("继承了"),a("code",[t._v("SingleThreadEventLoop")]),t._v("也就是自己为一组，这里展现出，其实"),a("code",[t._v("Netty")]),t._v("的支持组内在分组的，只是因为其业务这里使用了"),a("code",[t._v("SingleThreadEventLoop")]),t._v("。")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EventLoop")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OrderedEventExecutor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EventLoopGroup")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EventLoopGroup")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SingleThreadEventLoop 返回的是this")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EventExecutor")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// private final EventExecutorChooserFactory.EventExecutorChooser chooser;")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// EventLoopGroup 选择的时候使用的是EventExecutorChooser")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EventExecutor")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" chooser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:n(467),alt:"An image"}})]),t._v(" "),a("h3",{attrs:{id:"总结"}},[t._v("总结")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("netty")]),t._v("支持 1 ～ N 个端口绑定，"),a("code",[t._v("boss group")]),t._v("属于 CPU 密集型，处理速度很快，在一般场景下不需要多个"),a("code",[t._v("Eventloop")]),t._v("，所以建议开启一个端口即可。")]),t._v(" "),a("li",[t._v("对于组的设计，支持多种方式，根据业务不同未来可以设计出符合自己的实现。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);