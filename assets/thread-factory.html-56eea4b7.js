const a=JSON.parse('{"key":"v-c59ef2da","path":"/languages/java/thread/java/juc/thread-factory.html","title":"ThreadFactory","lang":"zh-CN","frontmatter":{"description":"ThreadFactory 按需创建新线程的对象。 使用线程工厂消除了对new Thread调用的直接生成，使应用程序能够使用特殊的线程子类、优先级等。 这个接口最简单的实现就是： class SimpleThreadFactory implements ThreadFactory { public Thread newThread(Runnable r) { return new Thread(r); } }","head":[["meta",{"property":"og:url","content":"https://renfakai.com/languages/java/thread/java/juc/thread-factory.html"}],["meta",{"property":"og:site_name","content":"天道酬勤"}],["meta",{"property":"og:title","content":"ThreadFactory"}],["meta",{"property":"og:description","content":"ThreadFactory 按需创建新线程的对象。 使用线程工厂消除了对new Thread调用的直接生成，使应用程序能够使用特殊的线程子类、优先级等。 这个接口最简单的实现就是： class SimpleThreadFactory implements ThreadFactory { public Thread newThread(Runnable r) { return new Thread(r); } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-26T04:04:33.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-26T04:04:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ThreadFactory\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-26T04:04:33.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"接口","slug":"接口","link":"#接口","children":[{"level":3,"title":"实现","slug":"实现","link":"#实现","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1721966673000,"updatedTime":1721966673000,"contributors":[{"name":"renfakai","email":"rfk1118@gmail.com","commits":1}]},"readingTime":{"minutes":1.16,"words":349},"filePathRelative":"languages/java/thread/java/juc/thread-factory.md","localizedDate":"2024年7月26日","excerpt":"<h1> ThreadFactory</h1>\\n<p>按需创建新线程的对象。 使用线程工厂消除了对<code>new Thread</code>调用的直接生成，使应用程序能够使用特殊的线程子类、优先级等。</p>\\n<p>这个接口最简单的实现就是：</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">SimpleThreadFactory</span> <span class=\\"token keyword\\">implements</span> <span class=\\"token class-name\\">ThreadFactory</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">Thread</span> <span class=\\"token function\\">newThread</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">Runnable</span> r<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token keyword\\">return</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Thread</span><span class=\\"token punctuation\\">(</span>r<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{},"autoDesc":true}');export{a as data};
