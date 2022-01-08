(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{437:function(t,s,a){t.exports=a.p+"assets/img/listenFdchannel.32bd4282.jpg"},438:function(t,s,a){t.exports=a.p+"assets/img/fd.5b509faa.jpg"},439:function(t,s,a){t.exports=a.p+"assets/img/spi-mac.b6c91667.jpg"},440:function(t,s,a){t.exports=a.p+"assets/img/Kqueue.591ac7ce.jpg"},441:function(t,s,a){t.exports=a.p+"assets/img/ServerSocketChannel.96dc0c51.jpg"},442:function(t,s,a){t.exports=a.p+"assets/img/socket-channel.bf13f746.jpg"},443:function(t,s,a){t.exports=a.p+"assets/img/SelectKey.96074f76.jpg"},444:function(t,s,a){t.exports=a.p+"assets/img/chanel_accept.cb132755.jpg"},445:function(t,s,a){t.exports=a.p+"assets/img/IOEvent.6bc0d767.jpg"},446:function(t,s,a){t.exports=a.p+"assets/img/read_set.9b886f28.jpg"},565:function(t,s,a){"use strict";a.r(s);var n=a(13),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"基础知识"}},[t._v("基础知识")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),n("p",[t._v("因特网连接和套接字接口基本复制与《深入理解计算机系统》")])]),t._v(" "),n("h2",{attrs:{id:"计算机-i-o"}},[t._v("计算机 I/O")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://book.douban.com/subject/26912767/",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解计算机系统（原书第 3 版）"),n("OutboundLink")],1),n("br"),t._v(" "),n("code",[t._v("Linux Shell")]),t._v(" 创建每个进程时都会打开三个文件：标准输入（ 描述符 0 )、标准输出（ 描述符 1 )和标准错误（ 描述符 2 )。")]),t._v(" "),n("h2",{attrs:{id:"网络编程"}},[t._v("网络编程")]),t._v(" "),n("p",[n("img",{attrs:{src:a(437),alt:"An image"}})]),t._v(" "),n("p",[n("img",{attrs:{src:a(438),alt:"An image"}})]),t._v(" "),n("p",[t._v("不同 I/O 抽象结果，其中 "),n("code",[t._v("open_listenfd")]),t._v(" 由 "),n("code",[t._v("ServerSocket")]),t._v(" 或 "),n("code",[t._v("ServerScoketChannel")]),t._v(" 进行创建，数据的读写由 "),n("code",[t._v("Socket")]),t._v(" 或 "),n("code",[t._v("SocketChannel")]),t._v(" 进行处理。")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("I/O")]),t._v(" "),n("th",{staticStyle:{"text-align":"right"}},[t._v("Socket")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("BIO")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("ServerSocket/Socket")])]),t._v(" "),n("tr",[n("td",[t._v("NIO")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("ServerScoketChannel/SocketChannel")])])])]),t._v(" "),n("h2",{attrs:{id:"netty-底层"}},[t._v("Netty 底层")]),t._v(" "),n("h3",{attrs:{id:"nio-编程"}},[t._v("Nio 编程")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Exception")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n         * Alternatively, use explicit SPI provider:\n         * SelectorProvider p = SelectorProvider.provider();\n         * selector = p.openSelector();\n         * serverSocket = p.openServerSocketChannel();\n         */")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Selector")]),t._v(" selector "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Selector")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServerSocketChannel")]),t._v(" serverSocketChannel "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ServerSocketChannel")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        serverSocketChannel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("configureBlocking")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        serverSocketChannel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("bind")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InetSocketAddress")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("8888")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        serverSocketChannel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("selector"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SelectionKey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OP_ACCEPT"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开启listenFd")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("selector"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("select")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Iterator")]),n("span",{pre:!0,attrs:{class:"token generics"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SelectionKey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" iterator "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" selector"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("selectedKeys")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("iterator")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("iterator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("hasNext")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n                    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SelectionKey")]),t._v(" selectionKey "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" iterator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    iterator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n                    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("selectionKey"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isAcceptable")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建connectionFd")]),t._v("\n                        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SocketChannel")]),t._v(" accept "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" serverSocketChannel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("accept")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                        accept"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("configureBlocking")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                        accept"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("selector"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SelectionKey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OP_READ"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("selectionKey"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isReadable")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// handler")]),t._v("\n                        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SocketChannel")]),t._v(" read "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SocketChannel")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" selectionKey"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("channel")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                        read"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("configureBlocking")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                        "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ByteBuffer")]),t._v(" dst "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ByteBuffer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("allocate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                        read"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("read")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dst"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                        read"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dst"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                        read"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h3",{attrs:{id:"selector"}},[t._v("Selector")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),n("p",[t._v("Alternatively, use explicit SPI provider: "),n("br"),t._v("\nSelectorProvider p = SelectorProvider.provider(); "),n("br"),t._v("\nselector = p.openSelector(); "),n("br"),t._v("\nserverSocket = p.openServerSocketChannel(); "),n("br")])]),t._v(" "),n("p",[t._v("让我们看 "),n("code",[t._v("selector")]),t._v("，在 "),n("code",[t._v("Doug lea")]),t._v(" 的 pdf 中出现了上面提示这一段话是什么意思？其实不同系统中 "),n("code",[t._v("java new io")]),t._v(" 调用的底层 "),n("code",[t._v("Nio")]),t._v(" 实现不一样，所以使用了 "),n("code",[t._v("spi")]),t._v(" 机制，具体如图所示:")]),t._v(" "),n("p",[n("img",{attrs:{src:a(439),alt:"An image"}})]),t._v(" "),n("p",[t._v("如图所示，可以看出 "),n("code",[t._v("SelectorProvider")]),t._v(" 在 "),n("code",[t._v("java.nio.channel.spi")]),t._v(" 下，并且注释为 "),n("code",[t._v("Returns the system-wide default selector provider for this invocation of the Java virtual machine.")]),t._v(" ，也就是不同平台下虚拟机调用返回实现是不一样的。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(440),alt:"An image"}})]),t._v(" "),n("p",[t._v("看上图，已经初始化了两个 fd ，并且包含 fdMap ，这里与计算机底层对齐了，关于不同系统提供的 "),n("code",[t._v("selector")]),t._v(" 如下所示：")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("os")]),t._v(" "),n("th",{staticStyle:{"text-align":"right"}},[t._v("selector")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("mac")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("KQueueSelector")])]),t._v(" "),n("tr",[n("td",[t._v("linux")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("EpollSelector")])]),t._v(" "),n("tr",[n("td",[t._v("win")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("WindowsSelector")])])])]),t._v(" "),n("h3",{attrs:{id:"channel"}},[t._v("Channel")]),t._v(" "),n("p",[t._v("关于 "),n("code",[t._v("channel")]),t._v("，我们发现 "),n("code",[t._v("ServerSocketChannel")]),t._v(" 和 "),n("code",[t._v("SocketChannel")]),t._v("两种，其底层可以认为是 "),n("code",[t._v("listenFd")]),t._v(" 和 "),n("code",[t._v("connectionFd")]),t._v("。让我们来看看其功能有什么区别。")]),t._v(" "),n("p",[n("img",{attrs:{src:a(441),alt:"An image"}})]),t._v(" "),n("p",[n("img",{attrs:{src:a(442),alt:"An image"}})]),t._v(" "),n("p",[t._v("从两张图中已经可以看出 "),n("code",[t._v("ServerSocketChannel")]),t._v(" 负责连接，其中包含 "),n("code",[t._v("accept()")]),t._v(" ， "),n("code",[t._v("SocketChannel")]),t._v(" 负责处理， "),n("code",[t._v("read()，write()")]),t._v(" 方法为核心。"),n("br"),t._v("\n在 "),n("code",[t._v("AbstractSelectableChannel")]),t._v(" 模版设计模式中 "),n("code",[t._v("validOps()")]),t._v(" 对关心事件进行验证。")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v("  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SelectionKey")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Selector")]),t._v(" sel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" ops"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                       "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" att"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ClosedChannelException")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("synchronized")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("regLock"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n           "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果关闭了丢出关闭异常")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isOpen")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ClosedChannelException")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在这里调用了子类的方法，并对不用的channle做了事件的校验")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ops "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("validOps")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IllegalArgumentException")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("blocking"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IllegalBlockingModeException")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SelectionKey")]),t._v(" k "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("findKey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("interestOps")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ops"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("attach")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("att"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// New registration")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("synchronized")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("keyLock"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("isOpen")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ClosedChannelException")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    k "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AbstractSelector")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("sel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ops"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" att"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addKey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" k"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("code",[t._v("ServerSocketChannel")]),t._v(" 中关心事件如下:")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("validOps")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SelectionKey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OP_ACCEPT"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[n("code",[t._v("SocketChannel")]),t._v(" 中关心事件如下:")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("validOps")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SelectionKey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OP_READ\n            "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SelectionKey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OP_WRITE\n            "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SelectionKey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("OP_CONNECT"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("这里做下总结， "),n("code",[t._v("ServerSocketChannel")]),t._v(" 只负责链接， "),n("code",[t._v("SocketChannel")]),t._v(" 负责处理数据，"),n("code",[t._v("server")]),t._v("和"),n("code",[t._v("client")]),t._v(" 处理数据使用的都是 "),n("code",[t._v("SocketChannel")]),t._v(" 。")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("SelectionKey")]),t._v(" "),n("th",{staticStyle:{"text-align":"right"}},[t._v("OP_ACCEPT")]),t._v(" "),n("th",{staticStyle:{"text-align":"right"}},[t._v("OP_WRITE")]),t._v(" "),n("th",{staticStyle:{"text-align":"right"}},[t._v("OP_WRITE")]),t._v(" "),n("th",{staticStyle:{"text-align":"right"}},[t._v("OP_CONNECT")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("ServerSocketChannel")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("O")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("N")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("N")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("N")])]),t._v(" "),n("tr",[n("td",[t._v("SocketChannel")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("N")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("O")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("O")]),t._v(" "),n("td",{staticStyle:{"text-align":"right"}},[t._v("O")])])])]),t._v(" "),n("h3",{attrs:{id:"selectionkey"}},[t._v("SelectionKey")]),t._v(" "),n("p",[n("code",[t._v("SelectionKey")]),t._v(" 里面包含了什么属性呢?")]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SelectionKeyImpl")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AbstractSelectionKey")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SelChImpl")]),t._v(" channel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SelectorImpl")]),t._v(" selector"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("volatile")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" interestOps"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" readyOps"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("我们对代码进行 "),n("code",[t._v("Debug")]),t._v(" 一下，看下结果，从下图显示其是把 "),n("code",[t._v("Channel")]),t._v(" 和 "),n("code",[t._v("Selector")]),t._v(" 绑定到一块")]),t._v(" "),n("p",[n("img",{attrs:{src:a(443),alt:"An image"}})]),t._v(" "),n("h2",{attrs:{id:"总结"}},[t._v("总结")]),t._v(" "),n("p",[t._v("Channels: Connections to files, sockets etc that support non-blocking reads")]),t._v(" "),n("p",[t._v("通道：链接文件，网络套接字等支持非阻塞(其实也就是 fd，文件描述符)")]),t._v(" "),n("p",[n("img",{attrs:{src:a(444),alt:"An image"}})]),t._v(" "),n("p",[t._v("Buffers: Array-like objects that can be directly read or written by Channels")]),t._v(" "),n("p",[t._v("缓冲区：对于通道的直接读和写，像数组一样的对象")]),t._v(" "),n("p",[t._v("Selectors: Tell which of a set of Channels have IO events")]),t._v(" "),n("p",[t._v("选择器: 管理一系列的通道事件，主要是管理 "),n("code",[t._v("Channels")]),t._v(" 的事件状态的，事件的状态使用状态机流转")]),t._v(" "),n("p",[n("img",{attrs:{src:a(445),alt:"An image"}})]),t._v(" "),n("p",[t._v("SelectionKeys: Maintain IO event status and bindings")]),t._v(" "),n("p",[t._v("选择器持：维持 IO 事件状态和绑定")]),t._v(" "),n("p",[n("img",{attrs:{src:a(446),alt:"An image"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);