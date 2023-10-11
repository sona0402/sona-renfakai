const s=JSON.parse('{"key":"v-dff339c2","path":"/basic-skill/algorithms/sort/sort.html","title":"概念","lang":"zh-CN","frontmatter":{"description":"概念 排序是重新排列一系列对象以使它们按某种逻辑顺序排列的过程。 验证 验证 对数器，保证算法正确性 运行时间，算法的稳定性 空间复杂度 函数调用栈，递归 固定数量变量 额外数组 Benchmark 时间复杂度相同，仅仅因为指令集不同 比较器 Comparable，根据语言非必选 稳定性 假设Ki​ = Kj​（1 ≤ i ≤ n，1 ≤ j ≤ n，i ≠ j），且在排序前的序列中Ki​领先于Kj​（即 i &lt; j）。 若在排序后的序列中Ki​仍领先于Kj​，则称所用的排序方法是稳定的； 反之，若可能使排序后的序列中Kj​领先于Ki​，则称所用的排序方法是不稳定的。","head":[["meta",{"property":"og:url","content":"https://renfakai.com/basic-skill/algorithms/sort/sort.html"}],["meta",{"property":"og:site_name","content":"天道酬勤"}],["meta",{"property":"og:title","content":"概念"}],["meta",{"property":"og:description","content":"概念 排序是重新排列一系列对象以使它们按某种逻辑顺序排列的过程。 验证 验证 对数器，保证算法正确性 运行时间，算法的稳定性 空间复杂度 函数调用栈，递归 固定数量变量 额外数组 Benchmark 时间复杂度相同，仅仅因为指令集不同 比较器 Comparable，根据语言非必选 稳定性 假设Ki​ = Kj​（1 ≤ i ≤ n，1 ≤ j ≤ n，i ≠ j），且在排序前的序列中Ki​领先于Kj​（即 i &lt; j）。 若在排序后的序列中Ki​仍领先于Kj​，则称所用的排序方法是稳定的； 反之，若可能使排序后的序列中Kj​领先于Ki​，则称所用的排序方法是不稳定的。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-11T07:08:31.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-11T07:08:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"概念\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-11T07:08:31.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"验证","slug":"验证","link":"#验证","children":[]},{"level":2,"title":"常见排序","slug":"常见排序","link":"#常见排序","children":[]}],"git":{"createdTime":1697008111000,"updatedTime":1697008111000,"contributors":[{"name":"renfakai","email":"rfk1118@gmail.com","commits":1}]},"readingTime":{"minutes":0.95,"words":285},"filePathRelative":"basic-skill/algorithms/sort/sort.md","localizedDate":"2023年10月11日","excerpt":"<h1> 概念</h1>\\n<p><a href=\\"https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">排序</a>是重新排列一系列对象以使它们按某种逻辑顺序排列的过程。</p>\\n<h2> 验证</h2>\\n<ul>\\n<li>验证\\n<ul>\\n<li>对数器，保证算法正确性</li>\\n<li>运行时间，算法的稳定性</li>\\n<li>空间复杂度\\n<ul>\\n<li>函数调用栈，递归</li>\\n<li>固定数量变量</li>\\n<li>额外数组</li>\\n</ul>\\n</li>\\n<li>Benchmark 时间复杂度相同，仅仅因为指令集不同</li>\\n</ul>\\n</li>\\n<li>比较器 Comparable，根据语言非必选</li>\\n<li>稳定性 假设<span class=\\"katex\\"><span class=\\"katex-mathml\\"></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.8333em;vertical-align:-0.15em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.07153em;\\">K</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3117em;\\"><span style=\\"top:-2.55em;margin-left:-0.0715em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\">i</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span></span></span></span> = <span class=\\"katex\\"><span class=\\"katex-mathml\\"></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.9694em;vertical-align:-0.2861em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.07153em;\\">K</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3117em;\\"><span style=\\"top:-2.55em;margin-left:-0.0715em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\" style=\\"margin-right:0.05724em;\\">j</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.2861em;\\"><span></span></span></span></span></span></span></span></span></span>（1 ≤ i ≤ n，1 ≤ j ≤ n，i ≠ j），且在排序前的序列中<span class=\\"katex\\"><span class=\\"katex-mathml\\"></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.8333em;vertical-align:-0.15em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.07153em;\\">K</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3117em;\\"><span style=\\"top:-2.55em;margin-left:-0.0715em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\">i</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span></span></span></span>领先于<span class=\\"katex\\"><span class=\\"katex-mathml\\"></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.9694em;vertical-align:-0.2861em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.07153em;\\">K</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3117em;\\"><span style=\\"top:-2.55em;margin-left:-0.0715em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\" style=\\"margin-right:0.05724em;\\">j</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.2861em;\\"><span></span></span></span></span></span></span></span></span></span>（即 i &lt; j）。\\n<ul>\\n<li>若在排序后的序列中<span class=\\"katex\\"><span class=\\"katex-mathml\\"></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.8333em;vertical-align:-0.15em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.07153em;\\">K</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3117em;\\"><span style=\\"top:-2.55em;margin-left:-0.0715em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\">i</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span></span></span></span>仍领先于<span class=\\"katex\\"><span class=\\"katex-mathml\\"></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.9694em;vertical-align:-0.2861em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.07153em;\\">K</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3117em;\\"><span style=\\"top:-2.55em;margin-left:-0.0715em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\" style=\\"margin-right:0.05724em;\\">j</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.2861em;\\"><span></span></span></span></span></span></span></span></span></span>，则称所用的排序方法是稳定的；</li>\\n<li>反之，若可能使排序后的序列中<span class=\\"katex\\"><span class=\\"katex-mathml\\"></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.9694em;vertical-align:-0.2861em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.07153em;\\">K</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3117em;\\"><span style=\\"top:-2.55em;margin-left:-0.0715em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\" style=\\"margin-right:0.05724em;\\">j</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.2861em;\\"><span></span></span></span></span></span></span></span></span></span>领先于<span class=\\"katex\\"><span class=\\"katex-mathml\\"></span><span class=\\"katex-html\\" aria-hidden=\\"true\\"><span class=\\"base\\"><span class=\\"strut\\" style=\\"height:0.8333em;vertical-align:-0.15em;\\"></span><span class=\\"mord\\"><span class=\\"mord mathnormal\\" style=\\"margin-right:0.07153em;\\">K</span><span class=\\"msupsub\\"><span class=\\"vlist-t vlist-t2\\"><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.3117em;\\"><span style=\\"top:-2.55em;margin-left:-0.0715em;margin-right:0.05em;\\"><span class=\\"pstrut\\" style=\\"height:2.7em;\\"></span><span class=\\"sizing reset-size6 size3 mtight\\"><span class=\\"mord mathnormal mtight\\">i</span></span></span></span><span class=\\"vlist-s\\">​</span></span><span class=\\"vlist-r\\"><span class=\\"vlist\\" style=\\"height:0.15em;\\"><span></span></span></span></span></span></span></span></span></span>，则称所用的排序方法是不稳定的。</li>\\n</ul>\\n</li>\\n</ul>","copyright":{},"autoDesc":true}');export{s as data};
