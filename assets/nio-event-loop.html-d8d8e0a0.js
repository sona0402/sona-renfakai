const n=JSON.parse('{"key":"v-6375575d","path":"/middleware/netty/nio/event-loop/nio-event-loop.html","title":"EventLoop","lang":"zh-CN","frontmatter":{"description":"EventLoop 线程开启 所有的EventLoop线程初始化和绑定关系，都是在eventLoop.execute()接受任后开始的，如果当前EventLoop没有初始化的话，会进行初始化，并将线程引用绑定到EventLoop中。 // 提交任务到eventloop里面 @Override public void execute(Runnable task) { if (task == null) { throw new NullPointerException(\\"task\\"); } boolean inEventLoop = inEventLoop(); addTask(task); if (!inEventLoop) { // 这里会开启一个线程 startThread(); if (isShutdown() &amp;&amp; removeTask(task)) { reject(); } } if (!addTaskWakesUp &amp;&amp; wakesUpForTask(task)) { wakeup(inEventLoop); } }","head":[["meta",{"property":"og:url","content":"https://renfakai.com/middleware/netty/nio/event-loop/nio-event-loop.html"}],["meta",{"property":"og:site_name","content":"天道酬勤"}],["meta",{"property":"og:title","content":"EventLoop"}],["meta",{"property":"og:description","content":"EventLoop 线程开启 所有的EventLoop线程初始化和绑定关系，都是在eventLoop.execute()接受任后开始的，如果当前EventLoop没有初始化的话，会进行初始化，并将线程引用绑定到EventLoop中。 // 提交任务到eventloop里面 @Override public void execute(Runnable task) { if (task == null) { throw new NullPointerException(\\"task\\"); } boolean inEventLoop = inEventLoop(); addTask(task); if (!inEventLoop) { // 这里会开启一个线程 startThread(); if (isShutdown() &amp;&amp; removeTask(task)) { reject(); } } if (!addTaskWakesUp &amp;&amp; wakesUpForTask(task)) { wakeup(inEventLoop); } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://renfakai.com/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-26T04:04:33.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"EventLoop"}],["meta",{"property":"article:modified_time","content":"2024-07-26T04:04:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"EventLoop\\",\\"image\\":[\\"https://renfakai.com/\\"],\\"dateModified\\":\\"2024-07-26T04:04:33.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"线程开启","slug":"线程开启","link":"#线程开启","children":[]},{"level":3,"title":"EventLoop 进行死循环","slug":"eventloop-进行死循环","link":"#eventloop-进行死循环","children":[]},{"level":3,"title":"任务 Consumer","slug":"任务-consumer","link":"#任务-consumer","children":[]},{"level":3,"title":"如何产生 SocketChannel","slug":"如何产生-socketchannel","link":"#如何产生-socketchannel","children":[]},{"level":3,"title":"NioSockectChannel","slug":"niosockectchannel","link":"#niosockectchannel","children":[]}],"git":{"createdTime":1721966673000,"updatedTime":1721966673000,"contributors":[{"name":"renfakai","email":"rfk1118@gmail.com","commits":1}]},"readingTime":{"minutes":4.61,"words":1382},"filePathRelative":"middleware/netty/nio/event-loop/nio-event-loop.md","localizedDate":"2024年7月26日","excerpt":"<h1> EventLoop</h1>\\n<h3> 线程开启</h3>\\n<ol>\\n<li>所有的<code>EventLoop</code>线程初始化和绑定关系，都是在<code>eventLoop.execute()</code>接受任后开始的，如果当前<code>EventLoop</code>没有初始化的话，会进行初始化，并将线程引用绑定到<code>EventLoop</code>中。</li>\\n</ol>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token comment\\">// 提交任务到eventloop里面</span>\\n<span class=\\"token annotation punctuation\\">@Override</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">execute</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">Runnable</span> task<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>task <span class=\\"token operator\\">==</span> <span class=\\"token keyword\\">null</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">throw</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">NullPointerException</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"task\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token keyword\\">boolean</span> inEventLoop <span class=\\"token operator\\">=</span> <span class=\\"token function\\">inEventLoop</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token function\\">addTask</span><span class=\\"token punctuation\\">(</span>task<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">!</span>inEventLoop<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token comment\\">// 这里会开启一个线程</span>\\n        <span class=\\"token function\\">startThread</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token function\\">isShutdown</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">&amp;&amp;</span> <span class=\\"token function\\">removeTask</span><span class=\\"token punctuation\\">(</span>task<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token function\\">reject</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">!</span>addTaskWakesUp <span class=\\"token operator\\">&amp;&amp;</span> <span class=\\"token function\\">wakesUpForTask</span><span class=\\"token punctuation\\">(</span>task<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token function\\">wakeup</span><span class=\\"token punctuation\\">(</span>inEventLoop<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{},"autoDesc":true}');export{n as data};
