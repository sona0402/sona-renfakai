(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{377:function(t,v,_){t.exports=_.p+"assets/img/components.334d6816.png"},525:function(t,v,_){"use strict";_.r(v);var e=_(8),o=Object(e.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"netty"}},[t._v("Netty")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),v("p",[t._v("本篇文章很多概念和思想来源于"),v("a",{attrs:{href:"https://book.douban.com/subject/27038538/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《Netty 实战》"),v("OutboundLink")],1)])]),t._v(" "),v("p",[v("a",{attrs:{href:"https://netty.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Netty"),v("OutboundLink")],1),t._v(" 是一款异步事件驱动的网络应用程序框架，支持快速地开发可维护的、高性能的、面向协议的服务器和客户端。")]),t._v(" "),v("div",{staticClass:"custom-block center"},[v("p",[v("img",{attrs:{src:_(377),alt:"An image"}}),t._v("图来自"),v("a",{attrs:{href:"https://netty.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),v("OutboundLink")],1)])]),t._v(" "),v("p",[v("code",[t._v("Netty、Jetty、Undertow、Tomcat")]),t._v(" 是 "),v("a",{attrs:{href:"./doug-lea/nio.pdf"}},[t._v("Reactor模型")]),t._v("实践者，\n"),v("code",[t._v("Tomcat、Jetty、Undertow")]),t._v("是以服务器形式存在的，"),v("code",[t._v("Netty")]),t._v("则是被大量应到到轻量级Rpc框架中，\n优秀应用案例可以从"),v("a",{attrs:{href:"https://book.douban.com/subject/27038538/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《Netty 实战》"),v("OutboundLink")],1),t._v("中进行了解。")]),t._v(" "),v("h2",{attrs:{id:"名词解释"}},[t._v("名词解释")]),t._v(" "),v("ul",[v("li",[t._v("Accept为服务器创建连接的，一般情况下为CPU密集型，不会成为阻塞点；")]),t._v(" "),v("li",[t._v("Handler为服务器处理任务抽象，其包含CPU密集型、IO密集型、混合型。\n"),v("ul",[v("li",[t._v("CPU密集型主要处理内存中的数据，例如Redis；")]),t._v(" "),v("li",[t._v("IO密集型主要从磁盘读取数据，例如Mysql、Oracle等。")])])])]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),v("p",[t._v("一般情况下业务服务器都会涉及到磁盘读取数据，主要为IO密集型、混合型，所以在做优化时，使用Redis缓存其根本原因是将两种类型转换成CPU密集型")])]),t._v(" "),v("h2",{attrs:{id:"设计理念"}},[t._v("设计理念")]),t._v(" "),v("p",[t._v("设计项目，需要思考那些因素，无论是开源项目还是业务项目，一般情况下按照三个方向去考虑。")]),t._v(" "),v("ol",[v("li",[t._v("解耦合，业务与领域关注点分离，例如"),v("code",[t._v("Netty")]),t._v("将业务和网络解耦合；")]),t._v(" "),v("li",[t._v("模块化、复用性；\n"),v("ul",[v("li",[t._v("模块化，保证包依赖的传递性，越是底层包越需要稳定，服务依赖亦是如此，可以参考"),v("a",{attrs:{href:"https://book.douban.com/subject/30333919/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《结构整洁之道》 第14章 组件耦合"),v("OutboundLink")],1),t._v("关于"),v("code",[t._v("Component")]),t._v("依赖讲解；")]),t._v(" "),v("li",[t._v("复用性，"),v("a",{attrs:{href:"https://github.com/rfk1118/books/blob/main/doug/groups.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Doug lea 《Objects in Groups》"),v("OutboundLink")],1),t._v("讲了"),v("code",[t._v("bean")]),t._v("的不被侵入性，保证复用性。")])])]),t._v(" "),v("li",[t._v("可测试性，可测试性是保证大型系统稳定性的保证，可以在开发、测试阶段暴露问题，而不是将问题推迟到外部引用（开源项目）、线上（业务系统）。")])]),t._v(" "),v("h3",{attrs:{id:"可伸缩性"}},[t._v("可伸缩性")]),t._v(" "),v("p",[t._v("可伸缩性可以应用到服务器层面和代码层面，服务器一般为"),v("code",[t._v("Serverless")]),t._v("，可伸缩性使用"),v("code",[t._v("k8s")]),t._v("的编排能力即可，程序员更多的关注代码层面处理，代码层面包含以下特征：")]),t._v(" "),v("ol",[v("li",[t._v("非阻塞网络调用使得我们可以不必等待一个操作的完成。完全异步的 I/O 正是基于这个特性构建的，并且更进一步异步方法会立即返回，并且在它完成时，会直接或者在稍后的某个时间点通知用户，关于异步转同步可以查看"),v("RouterLink",{attrs:{to:"/languages/java/thread/java/juc/future.html"}},[t._v("Future")]),t._v("。")],1),t._v(" "),v("li",[t._v("Selector使得我们能够通过较少的线程便可监视许多连接上的事件。")])]),t._v(" "),v("h2",{attrs:{id:"io"}},[t._v("IO")]),t._v(" "),v("h3",{attrs:{id:"bio"}},[t._v("BIO")]),t._v(" "),v("p",[t._v("BIO同步阻塞IO，使用同步阻塞IO时，因为其阻塞原因，需要将"),v("code",[t._v("Accept")]),t._v("的连接交接给其他线程做处理，其他线程可以使用每次创建、池话两种处理方式处理。")]),t._v(" "),v("ol",[v("li",[t._v("任何时候都可能有大量的线程处于休眠状态，只是等待输入或者输出数据就绪，会产生资源浪费；")]),t._v(" "),v("li",[t._v("需要为每个线程的调用栈都分配内存，其默认值 大小区间为 64 KB 到 1 MB，具体取决于操作系统；\n"),v("ul",[v("li",[t._v("关于这里有一些补充，例如在"),v("code",[t._v("Jvm")]),t._v("中"),v("code",[t._v("Xss 参数")]),t._v("指定的情况下，如果无限制的创建线程也会导致OOM；")])])]),t._v(" "),v("li",[t._v("Java 虚拟机在物理上可以支持非常大数量的线程，但是远在到达该极限之前，上下文切换（从内存加载数据到寄存器或虚拟机栈）所带来的开销会很大。Java代码中经典案例是Juc非公平锁，非公平锁下当被唤醒节点被唤醒到抢占锁这段时间（内核线程调度、上下文加载）会被其他线程抢占先机，这也就是为什么非公平锁性能很高。\n"),v("ul",[v("li",[t._v("寄存器数据加载，普通寄存器（加载运行数据）、CS、IP寄存器（代码运行指示器）等；")]),t._v(" "),v("li",[t._v("虚拟机栈加载，对栈帧加载，PC寄存器加载等；")])])])]),t._v(" "),v("p",[t._v("在此基础上，使用池话可以降低创建线程的开销，但无法解决线程阻塞等待资源问题。")]),t._v(" "),v("h3",{attrs:{id:"nio"}},[t._v("NIO")]),t._v(" "),v("p",[t._v("NIO同步非阻塞IO，使用非阻塞IO时，将"),v("code",[t._v("Accept")]),t._v("的连接交接给其他线程做处理，其他线程可以使用每次创建、池话两种处理方式处理。")]),t._v(" "),v("p",[t._v("使用每次创建是不太合理的，线程在不阻塞时间段是可以处理其他任务的，所以使用池话比较合理，使用池话可以使用少量线程处理大量任务，"),v("code",[t._v("handler")]),t._v("生命周期和任务固定的情况下，线程会一直运行不会被销毁，其和"),v("code",[t._v("Juc")]),t._v("线程下的"),v("code",[t._v("work")]),t._v("理论是一致的，所以其性能相当高，与"),v("code",[t._v("Go")]),t._v("语言的"),v("code",[t._v("GPM")]),t._v("基本一致。")]),t._v(" "),v("ol",[v("li",[t._v("使用较少的线程便可以处理许多连接，因此也减少了内存管理和上下文切换所带来开销;")]),t._v(" "),v("li",[t._v("当没有 "),v("code",[t._v("I/O")]),t._v(" 操作需要处理的时候，线程也可以被用于其他任务。")])]),t._v(" "),v("h3",{attrs:{id:"aio"}},[t._v("AIO")]),t._v(" "),v("p",[t._v("AIO为异步非阻塞IO，在BSD、Linux系统上支持不是很好，在Windows上支持比较好，而服务器一般部署在Linux系统上。Netty5时基于AIO进行编写的，使用"),v("code",[t._v("BenchMark")]),t._v("对Netty5和Netty4进行对比，发现Netty5性能上没有质变差异，并且代码量复杂高，维护成本非常高，所以社区对"),v("code",[t._v("Netty5")]),t._v("进行废弃，不在维护。")]),t._v(" "),v("h3",{attrs:{id:"池话线程多还是少"}},[t._v("池话线程多还是少")]),t._v(" "),v("p",[t._v("池话线程是一个需要动态调整的过程，主要包含一下原因：")]),t._v(" "),v("ol",[v("li",[t._v("线程较少，导致某些任务排队过长；")]),t._v(" "),v("li",[t._v("线程较多，导致休眠、上下文切换竞争加剧问题。")])]),t._v(" "),v("h2",{attrs:{id:"netty-nio为什么性能高"}},[t._v("Netty NIO为什么性能高")]),t._v(" "),v("ul",[v("li",[t._v("线程常驻，不会产生上下文切换；")]),t._v(" "),v("li",[t._v("BossGroup（一般情况下一个线程）监控连接，并创建连接；")]),t._v(" "),v("li",[t._v("WorkGroup生命周期按照模版进行处理，Channel处理是基于Selector事件进行处理；")]),t._v(" "),v("li",[t._v("BossGroup向WorkGroup异步提交任务；")]),t._v(" "),v("li",[t._v("NioEventLoop无锁设计；")]),t._v(" "),v("li",[t._v("对内存数据管理机制。")])])])}),[],!1,null,null,null);v.default=o.exports}}]);