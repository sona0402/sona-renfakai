const e=JSON.parse('{"key":"v-788be30c","path":"/basic-skill/design-pattern/policy/spring-policy.html","title":"策略模式","lang":"zh-CN","frontmatter":{"description":"策略模式 策略设计模式其实就是多态，最好结合责任链、享元进行处理会更优。 问题 本章节主要是解决 Controller 和 Service 代码爆炸问题，在原有基础上进行了重构 . ├── service │ ├── TwoPolicyService.java │ ├── impl │ │ ├── HelloTwoPolicyServiceImpl.java │ │ ├── NilTwoPolicyServiceImpl.java │ │ └── WorldTwoPolicyServiceImpl.java │ └── manager │ └── TwoPolicyManager.java └── web ├── TwoPolicyController.http └── TwoPolicyController.java","head":[["meta",{"property":"og:url","content":"https://renfakai.com/basic-skill/design-pattern/policy/spring-policy.html"}],["meta",{"property":"og:site_name","content":"天道酬勤"}],["meta",{"property":"og:title","content":"策略模式"}],["meta",{"property":"og:description","content":"策略模式 策略设计模式其实就是多态，最好结合责任链、享元进行处理会更优。 问题 本章节主要是解决 Controller 和 Service 代码爆炸问题，在原有基础上进行了重构 . ├── service │ ├── TwoPolicyService.java │ ├── impl │ │ ├── HelloTwoPolicyServiceImpl.java │ │ ├── NilTwoPolicyServiceImpl.java │ │ └── WorldTwoPolicyServiceImpl.java │ └── manager │ └── TwoPolicyManager.java └── web ├── TwoPolicyController.http └── TwoPolicyController.java"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-11T07:08:31.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-11T07:08:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"策略模式\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-11T07:08:31.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"问题","slug":"问题","link":"#问题","children":[]},{"level":2,"title":"Github 地址","slug":"github-地址","link":"#github-地址","children":[]}],"git":{"createdTime":1697008111000,"updatedTime":1697008111000,"contributors":[{"name":"renfakai","email":"rfk1118@gmail.com","commits":1}]},"readingTime":{"minutes":2.59,"words":778},"filePathRelative":"basic-skill/design-pattern/policy/spring-policy.md","localizedDate":"2023年10月11日","excerpt":"<h1> 策略模式</h1>\\n<p>策略设计模式其实就是多态，最好结合责任链、享元进行处理会更优。</p>\\n<h2> 问题</h2>\\n<p>本章节主要是解决 Controller 和 Service 代码爆炸问题，在原有基础上进行了重构</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token punctuation\\">.</span>\\n├── service\\n│   ├── <span class=\\"token class-name\\">TwoPolicyService</span><span class=\\"token punctuation\\">.</span>java\\n│   ├── impl\\n│   │   ├── <span class=\\"token class-name\\">HelloTwoPolicyServiceImpl</span><span class=\\"token punctuation\\">.</span>java\\n│   │   ├── <span class=\\"token class-name\\">NilTwoPolicyServiceImpl</span><span class=\\"token punctuation\\">.</span>java\\n│   │   └── <span class=\\"token class-name\\">WorldTwoPolicyServiceImpl</span><span class=\\"token punctuation\\">.</span>java\\n│   └── manager\\n│       └── <span class=\\"token class-name\\">TwoPolicyManager</span><span class=\\"token punctuation\\">.</span>java\\n└── web\\n    ├── <span class=\\"token class-name\\">TwoPolicyController</span><span class=\\"token punctuation\\">.</span>http\\n    └── <span class=\\"token class-name\\">TwoPolicyController</span><span class=\\"token punctuation\\">.</span>java\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{},"autoDesc":true}');export{e as data};
