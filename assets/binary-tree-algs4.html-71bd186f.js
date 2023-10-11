const e=JSON.parse('{"key":"v-092aa95b","path":"/basic-skill/algorithms/tree/binary-tree-algs4.html","title":"二叉树-算法4","lang":"zh-CN","frontmatter":{"description":"二叉树-算法4 在读算法4的时候发现了一些知识点遗漏，进行梳理补充。 树的所有节点个数 使用二叉树套路计算树的节点个数，从图中我们可以看到一个二叉树可以分解成n个二叉树。 编写代码 func binaryTreeSize(tree *BinaryTree) int { // 如果子树为空返回0 if tree == nil { return 0 } // 递归计算左子树 lSize := binaryTreeSize(tree.leftNode) // 递归计算右子树 rSize := binaryTreeSize(tree.rightNode) // 加上当前节点 return rSize + lSize + 1 }","head":[["meta",{"property":"og:url","content":"https://renfakai.com/basic-skill/algorithms/tree/binary-tree-algs4.html"}],["meta",{"property":"og:site_name","content":"天道酬勤"}],["meta",{"property":"og:title","content":"二叉树-算法4"}],["meta",{"property":"og:description","content":"二叉树-算法4 在读算法4的时候发现了一些知识点遗漏，进行梳理补充。 树的所有节点个数 使用二叉树套路计算树的节点个数，从图中我们可以看到一个二叉树可以分解成n个二叉树。 编写代码 func binaryTreeSize(tree *BinaryTree) int { // 如果子树为空返回0 if tree == nil { return 0 } // 递归计算左子树 lSize := binaryTreeSize(tree.leftNode) // 递归计算右子树 rSize := binaryTreeSize(tree.rightNode) // 加上当前节点 return rSize + lSize + 1 }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://renfakai.com/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-11T07:08:31.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"二叉树-算法4"}],["meta",{"property":"article:modified_time","content":"2023-10-11T07:08:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"二叉树-算法4\\",\\"image\\":[\\"https://renfakai.com/\\"],\\"dateModified\\":\\"2023-10-11T07:08:31.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":3,"title":"树的所有节点个数","slug":"树的所有节点个数","link":"#树的所有节点个数","children":[]},{"level":3,"title":"Floor","slug":"floor","link":"#floor","children":[]},{"level":3,"title":"Ceiling","slug":"ceiling","link":"#ceiling","children":[]},{"level":3,"title":"Selection","slug":"selection","link":"#selection","children":[]},{"level":3,"title":"Rank","slug":"rank","link":"#rank","children":[]},{"level":3,"title":"Delete","slug":"delete","link":"#delete","children":[]},{"level":3,"title":"后继节点","slug":"后继节点","link":"#后继节点","children":[]}],"git":{"createdTime":1697008111000,"updatedTime":1697008111000,"contributors":[{"name":"renfakai","email":"rfk1118@gmail.com","commits":1}]},"readingTime":{"minutes":8.37,"words":2512},"filePathRelative":"basic-skill/algorithms/tree/binary-tree-algs4.md","localizedDate":"2023年10月11日","excerpt":"<h1> 二叉树-算法4</h1>\\n<p>在读<a href=\\"https://algs4.cs.princeton.edu/32bst/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">算法4</a>的时候发现了一些知识点遗漏，进行梳理补充。</p>\\n<h3> 树的所有节点个数</h3>\\n<ol>\\n<li>使用二叉树套路计算树的节点个数，从图中我们可以看到一个二叉树可以分解成n个二叉树。</li>\\n</ol>\\n<p></p>\\n<ol start=\\"2\\">\\n<li>编写代码</li>\\n</ol>\\n<div class=\\"language-go line-numbers-mode\\" data-ext=\\"go\\"><pre class=\\"language-go\\"><code><span class=\\"token keyword\\">func</span> <span class=\\"token function\\">binaryTreeSize</span><span class=\\"token punctuation\\">(</span>tree <span class=\\"token operator\\">*</span>BinaryTree<span class=\\"token punctuation\\">)</span> <span class=\\"token builtin\\">int</span> <span class=\\"token punctuation\\">{</span>\\n <span class=\\"token comment\\">// 如果子树为空返回0</span>\\n <span class=\\"token keyword\\">if</span> tree <span class=\\"token operator\\">==</span> <span class=\\"token boolean\\">nil</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token keyword\\">return</span> <span class=\\"token number\\">0</span>\\n <span class=\\"token punctuation\\">}</span>\\n <span class=\\"token comment\\">// 递归计算左子树</span>\\n lSize <span class=\\"token operator\\">:=</span> <span class=\\"token function\\">binaryTreeSize</span><span class=\\"token punctuation\\">(</span>tree<span class=\\"token punctuation\\">.</span>leftNode<span class=\\"token punctuation\\">)</span>\\n <span class=\\"token comment\\">// 递归计算右子树</span>\\n rSize <span class=\\"token operator\\">:=</span> <span class=\\"token function\\">binaryTreeSize</span><span class=\\"token punctuation\\">(</span>tree<span class=\\"token punctuation\\">.</span>rightNode<span class=\\"token punctuation\\">)</span>\\n <span class=\\"token comment\\">// 加上当前节点</span>\\n <span class=\\"token keyword\\">return</span> rSize <span class=\\"token operator\\">+</span> lSize <span class=\\"token operator\\">+</span> <span class=\\"token number\\">1</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{},"autoDesc":true}');export{e as data};
