(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{550:function(t,s,n){"use strict";n.r(s);var a=n(19),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"快速排序"}},[t._v("快速排序")]),t._v(" "),n("h2",{attrs:{id:"划分"}},[t._v("划分")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),n("p",[t._v("划分是快排的核心")])]),t._v(" "),n("p",[t._v("划分算法使用双指针进行工作，初始时两个指针分别指向数组的两头（这里的指针其实是数组的角标，而不是引用），在左边的指针，向右移动，而右边的指针向左移动。\n当"),n("code",[t._v("leftPtr")]),t._v("遇到比枢纽小的数据项时候，向右移动，因为这个数据已经在正确的位置了，当"),n("code",[t._v("rightPtr")]),t._v("遇到比枢纽大的数据项时候，向左移动，因为这个数据也已经在正确位置了。如果"),n("code",[t._v("leftPtr")]),t._v("大于了"),n("code",[t._v("rightPtr")]),t._v("说明已经处理完毕了。")]),t._v(" "),n("h2",{attrs:{id:"标准快排"}},[t._v("标准快排")]),t._v(" "),n("ol",[n("li",[t._v("标准版排序比较简单，"),n("a",{attrs:{href:"https://algs4.cs.princeton.edu/23quicksort/Quick.java.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("《算法4》QuickSort"),n("OutboundLink")],1),t._v("中使用第一个元素作为切割点")]),t._v(" "),n("li",[t._v("使用最后一个元素作为切割点的，例如《编程珠玑》")])]),t._v(" "),n("div",{staticClass:"language-Go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// QuickSort 标准快排，这里使用lo元素作为切割垫")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("QuickSort")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("QuickSortWithIndex")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// QuickSortWithIndex 对从low~high处的数据进行排序")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("QuickSortWithIndex")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" low"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" high "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" low "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" high "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里是排序的核心")]),t._v("\n  partition "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("partitionWithIndex")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" low"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" high"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("QuickSortWithIndex")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" low"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" partition"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("QuickSortWithIndex")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" partition"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" high"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  核心代码在这里也就是进行双轴 partition")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("partitionWithIndex")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" low "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" high "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  lowIndex "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" low "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  highIndex "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" high\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用最小元素作为partition")]),t._v("\n  pV "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("low"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 双轴交换大小值")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("lowIndex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" pV "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" lowIndex "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" high "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        lowIndex"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("highIndex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" pV "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" highIndex "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" low "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        highIndex"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果已经相遇，则跳出总循环")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" lowIndex "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" highIndex "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 交换内层数据")]),t._v("\n    num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("lowIndex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("highIndex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("highIndex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("lowIndex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将partition放到正确位置")]),t._v("\n  num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("low"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("highIndex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("highIndex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("low"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" highIndex\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"性能问题"}},[t._v("性能问题")]),t._v(" "),n("ol",[n("li",[t._v("标准版本，对"),n("code",[t._v("[9,8,7,6,5,4,3,2,1]")]),t._v("进行排序，每次的"),n("code",[t._v("partition")]),t._v("都无法正确切割数组，导致性能降低到O("),n("span",{staticClass:"katex"},[n("span",{staticClass:"katex-mathml"},[n("math",[n("semantics",[n("mrow",[n("msup",[n("mi",[t._v("n")]),n("mn",[t._v("2")])],1)],1),n("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("n^2")])],1)],1)],1),n("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[n("span",{staticClass:"strut",staticStyle:{height:"0.8141079999999999em"}}),n("span",{staticClass:"strut bottom",staticStyle:{height:"0.8141079999999999em","vertical-align":"0em"}}),n("span",{staticClass:"base textstyle uncramped"},[n("span",{staticClass:"mord"},[n("span",{staticClass:"mord mathit"},[t._v("n")]),n("span",{staticClass:"vlist"},[n("span",{staticStyle:{top:"-0.363em","margin-right":"0.05em"}},[n("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[n("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),n("span",{staticClass:"reset-textstyle scriptstyle uncramped"},[n("span",{staticClass:"mord mathrm"},[t._v("2")])])]),n("span",{staticClass:"baseline-fix"},[n("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[n("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])]),t._v(")；")]),t._v(" "),n("li",[t._v("标准版本，对"),n("code",[t._v("[9,8,3,6,3,3,3,2,1]")]),t._v("进行排序，性能也会降低，出现了大量相同元素。")])]),t._v(" "),n("h2",{attrs:{id:"优化方案"}},[t._v("优化方案")]),t._v(" "),n("h3",{attrs:{id:"切割数组"}},[t._v("切割数组")]),t._v(" "),n("ul",[n("li",[t._v("二分方案，从被切割数组中随机获取一个数字，也就是 "),n("code",[t._v("pV := num[low]")]),t._v(" 使用随机值。")])]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 随机出来一个大于lo,小于hi的整数")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" m "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("random")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("exch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("ul",[n("li",[t._v("三取样切分获取中位数，处理数据分布问题。")])]),t._v(" "),n("div",{staticClass:"language-java extra-class"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取中位数")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" m "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("median3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lo "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将数放到low,这样排序的时候就用不到了")]),t._v("\n "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("exch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h3",{attrs:{id:"相同元素"}},[t._v("相同元素")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),n("p",[t._v("20世纪70年代，快速排序发布不久后三向切分的快速排序就出现了，但它并没有流行开来，因为在数组中重复元素不多的普通情况下它比标准的二分法多使用了很多次交换。")])]),t._v(" "),n("p",[t._v("三向分切，解决数据重复比较多的问题，"),n("a",{attrs:{href:"https://algs4.cs.princeton.edu/23quicksort/Quick3way.java.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("算法4代码"),n("OutboundLink")],1)]),t._v(" "),n("div",{staticClass:"language-Go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// QuickSort3Way 切割成 x<T.....T<y")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("QuickSort3Way")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("QuickSortWithIndex3Way")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("len")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// QuickSortWithIndex3Way 对从low~high处的数据进行排序")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("QuickSortWithIndex3Way")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" low"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" high "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" low "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" high "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置双轴")]),t._v("\n  lt "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" low\n  gt "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" high\n  pV "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("low"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  index "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" low "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" index "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" gt "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// index向下走")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" pV "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("lt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("lt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      lt"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n      index"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" pV "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("gt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("gt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      gt"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      index"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//partition := partitionWithIndex(num, low, high)")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("QuickSortWithIndex3Way")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" low"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lt"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("QuickSortWithIndex3Way")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" gt"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" high"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"总结"}},[t._v("总结")]),t._v(" "),n("ul",[n("li",[t._v("时间复杂度O(nlogn)")]),t._v(" "),n("li",[t._v("不稳定排序")]),t._v(" "),n("li",[t._v("不是原地排序")]),t._v(" "),n("li",[t._v("空间负责度O(nlogn)")])])])}),[],!1,null,null,null);s.default=e.exports}}]);