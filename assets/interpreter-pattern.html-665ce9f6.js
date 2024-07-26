const s=JSON.parse('{"key":"v-88808e6e","path":"/basic-skill/design-pattern/interpreter/interpreter-pattern.html","title":"解释器","lang":"zh-CN","frontmatter":{"description":"解释器 解释器设计模式有啥用？语法分析树？个人因为基础还未夯实，暂时不去研究这一块了，写一个系统中的使用 问题 为什么写这篇文章，因为重新梳理算法的时候，想到了之前系统权限和校验的一些瓶颈和错误 源代码 Evaluate.java 算法和之前设计模式产生了一些共鸣 // java Evaluate // ( 1 + ( ( 2 + 3 ) * ( 4 * 5 ) ) ) // 101.0 public class Evaluate { public static void main(String[] args) { Stack&lt;String&gt; ops = new Stack&lt;String&gt;(); Stack&lt;Double&gt; vals = new Stack&lt;Double&gt;(); while (!StdIn.isEmpty()) { String s = StdIn.readString(); if (s.equals(\\"(\\")) ; else if (s.equals(\\"+\\")) ops.push(s); else if (s.equals(\\"-\\")) ops.push(s); else if (s.equals(\\"*\\")) ops.push(s); else if (s.equals(\\"/\\")) ops.push(s); else if (s.equals(\\"sqrt\\")) ops.push(s); else if (s.equals(\\")\\")) { String op = ops.pop(); double v = vals.pop(); if (op.equals(\\"+\\")) v = vals.pop() + v; else if (op.equals(\\"-\\")) v = vals.pop() - v; else if (op.equals(\\"*\\")) v = vals.pop() * v; else if (op.equals(\\"/\\")) v = vals.pop() / v; else if (op.equals(\\"sqrt\\")) v = Math.sqrt(v); vals.push(v); } else vals.push(Double.parseDouble(s)); } StdOut.println(vals.pop()); } }","head":[["meta",{"property":"og:url","content":"https://renfakai.com/basic-skill/design-pattern/interpreter/interpreter-pattern.html"}],["meta",{"property":"og:site_name","content":"天道酬勤"}],["meta",{"property":"og:title","content":"解释器"}],["meta",{"property":"og:description","content":"解释器 解释器设计模式有啥用？语法分析树？个人因为基础还未夯实，暂时不去研究这一块了，写一个系统中的使用 问题 为什么写这篇文章，因为重新梳理算法的时候，想到了之前系统权限和校验的一些瓶颈和错误 源代码 Evaluate.java 算法和之前设计模式产生了一些共鸣 // java Evaluate // ( 1 + ( ( 2 + 3 ) * ( 4 * 5 ) ) ) // 101.0 public class Evaluate { public static void main(String[] args) { Stack&lt;String&gt; ops = new Stack&lt;String&gt;(); Stack&lt;Double&gt; vals = new Stack&lt;Double&gt;(); while (!StdIn.isEmpty()) { String s = StdIn.readString(); if (s.equals(\\"(\\")) ; else if (s.equals(\\"+\\")) ops.push(s); else if (s.equals(\\"-\\")) ops.push(s); else if (s.equals(\\"*\\")) ops.push(s); else if (s.equals(\\"/\\")) ops.push(s); else if (s.equals(\\"sqrt\\")) ops.push(s); else if (s.equals(\\")\\")) { String op = ops.pop(); double v = vals.pop(); if (op.equals(\\"+\\")) v = vals.pop() + v; else if (op.equals(\\"-\\")) v = vals.pop() - v; else if (op.equals(\\"*\\")) v = vals.pop() * v; else if (op.equals(\\"/\\")) v = vals.pop() / v; else if (op.equals(\\"sqrt\\")) v = Math.sqrt(v); vals.push(v); } else vals.push(Double.parseDouble(s)); } StdOut.println(vals.pop()); } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-26T04:04:33.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-26T04:04:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"解释器\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-26T04:04:33.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"问题","slug":"问题","link":"#问题","children":[]},{"level":3,"title":"源代码","slug":"源代码","link":"#源代码","children":[]},{"level":3,"title":"解释器设计模式解释","slug":"解释器设计模式解释","link":"#解释器设计模式解释","children":[]},{"level":3,"title":"UML 图","slug":"uml-图","link":"#uml-图","children":[]},{"level":3,"title":"阿里巴巴案例","slug":"阿里巴巴案例","link":"#阿里巴巴案例","children":[]},{"level":3,"title":"复杂选择该怎么处理？","slug":"复杂选择该怎么处理","link":"#复杂选择该怎么处理","children":[]},{"level":3,"title":"应用场景","slug":"应用场景","link":"#应用场景","children":[]}],"git":{"createdTime":1721966673000,"updatedTime":1721966673000,"contributors":[{"name":"renfakai","email":"rfk1118@gmail.com","commits":1}]},"readingTime":{"minutes":3.81,"words":1144},"filePathRelative":"basic-skill/design-pattern/interpreter/interpreter-pattern.md","localizedDate":"2024年7月26日","excerpt":"<h1> 解释器</h1>\\n<p>解释器设计模式有啥用？语法分析树？个人因为基础还未夯实，暂时不去研究这一块了，写一个系统中的使用</p>\\n<h3> 问题</h3>\\n<p>为什么写这篇文章，因为重新梳理算法的时候，想到了之前系统权限和校验的一些瓶颈和错误</p>\\n<h3> 源代码</h3>\\n<p><a href=\\"https://algs4.cs.princeton.edu/13stacks/Evaluate.java.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Evaluate.java</a>\\n算法和之前设计模式产生了一些共鸣</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code> <span class=\\"token comment\\">//  java Evaluate</span>\\n <span class=\\"token comment\\">//  ( 1 + ( ( 2 + 3 ) * ( 4 * 5 ) ) )</span>\\n <span class=\\"token comment\\">//  101.0</span>\\n<span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Evaluate</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">public</span> <span class=\\"token keyword\\">static</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">String</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span> args<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token class-name\\">Stack</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">String</span><span class=\\"token punctuation\\">&gt;</span></span> ops  <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Stack</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">String</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token class-name\\">Stack</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">Double</span><span class=\\"token punctuation\\">&gt;</span></span> vals <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Stack</span><span class=\\"token generics\\"><span class=\\"token punctuation\\">&lt;</span><span class=\\"token class-name\\">Double</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">!</span><span class=\\"token class-name\\">StdIn</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">isEmpty</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n            <span class=\\"token class-name\\">String</span> s <span class=\\"token operator\\">=</span> <span class=\\"token class-name\\">StdIn</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">readString</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token keyword\\">if</span>      <span class=\\"token punctuation\\">(</span>s<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">equals</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"(\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>               <span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token keyword\\">else</span> <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>s<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">equals</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"+\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>    ops<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">push</span><span class=\\"token punctuation\\">(</span>s<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token keyword\\">else</span> <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>s<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">equals</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"-\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>    ops<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">push</span><span class=\\"token punctuation\\">(</span>s<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token keyword\\">else</span> <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>s<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">equals</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"*\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>    ops<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">push</span><span class=\\"token punctuation\\">(</span>s<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token keyword\\">else</span> <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>s<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">equals</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"/\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>    ops<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">push</span><span class=\\"token punctuation\\">(</span>s<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token keyword\\">else</span> <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>s<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">equals</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"sqrt\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> ops<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">push</span><span class=\\"token punctuation\\">(</span>s<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token keyword\\">else</span> <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>s<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">equals</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\")\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n                <span class=\\"token class-name\\">String</span> op <span class=\\"token operator\\">=</span> ops<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">pop</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n                <span class=\\"token keyword\\">double</span> v <span class=\\"token operator\\">=</span> vals<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">pop</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n                <span class=\\"token keyword\\">if</span>      <span class=\\"token punctuation\\">(</span>op<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">equals</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"+\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>    v <span class=\\"token operator\\">=</span> vals<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">pop</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">+</span> v<span class=\\"token punctuation\\">;</span>\\n                <span class=\\"token keyword\\">else</span> <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>op<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">equals</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"-\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>    v <span class=\\"token operator\\">=</span> vals<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">pop</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">-</span> v<span class=\\"token punctuation\\">;</span>\\n                <span class=\\"token keyword\\">else</span> <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>op<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">equals</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"*\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>    v <span class=\\"token operator\\">=</span> vals<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">pop</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">*</span> v<span class=\\"token punctuation\\">;</span>\\n                <span class=\\"token keyword\\">else</span> <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>op<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">equals</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"/\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>    v <span class=\\"token operator\\">=</span> vals<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">pop</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">/</span> v<span class=\\"token punctuation\\">;</span>\\n                <span class=\\"token keyword\\">else</span> <span class=\\"token keyword\\">if</span> <span class=\\"token punctuation\\">(</span>op<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">equals</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"sqrt\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> v <span class=\\"token operator\\">=</span> <span class=\\"token class-name\\">Math</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">sqrt</span><span class=\\"token punctuation\\">(</span>v<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n                vals<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">push</span><span class=\\"token punctuation\\">(</span>v<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n            <span class=\\"token punctuation\\">}</span>\\n            <span class=\\"token keyword\\">else</span> vals<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">push</span><span class=\\"token punctuation\\">(</span><span class=\\"token class-name\\">Double</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">parseDouble</span><span class=\\"token punctuation\\">(</span>s<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token punctuation\\">}</span>\\n        <span class=\\"token class-name\\">StdOut</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">println</span><span class=\\"token punctuation\\">(</span>vals<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">pop</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{},"autoDesc":true}');export{s as data};
