(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{296:function(t,s,n){t.exports=n.p+"assets/img/sortColor.36427a0d.jpg"},446:function(t,s,n){"use strict";n.r(s);var a=n(8),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"荷兰国旗"}},[t._v("荷兰国旗")]),t._v(" "),s("h2",{attrs:{id:"原题"}},[s("a",{attrs:{href:"https://leetcode-cn.com/problems/sort-colors/",target:"_blank",rel:"noopener noreferrer"}},[t._v("原题"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。")]),t._v(" "),s("p",[t._v("此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("ul",[s("li",[t._v("来源：力扣（LeetCode）")]),t._v(" "),s("li",[t._v("链接："),s("a",{attrs:{href:"https://leetcode-cn.com/problems/sort-colors",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://leetcode-cn.com/problems/sort-colors"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。")])])]),t._v(" "),s("h2",{attrs:{id:"算法4"}},[t._v("算法4")]),t._v(" "),s("ul",[s("li",[t._v("Dijkstra的解法如“三向切分的快速排序”中极为简洁的切分代码所示。\n"),s("ul",[s("li",[t._v("它从左到右遍历数组一次")]),t._v(" "),s("li",[t._v("维护一个指针lt使得a[lo..lt-1]中的元素都小于v")]),t._v(" "),s("li",[t._v("一个指针gt使得a[gt+1..hi]中的元素都大于v")]),t._v(" "),s("li",[t._v("一个指针i使得a[lt..i-1]中的元素都等于v")]),t._v(" "),s("li",[t._v("a[i..gt]中的元素都还未确定")])])])]),t._v(" "),s("p",[t._v("如图所示。一开始i和lo相等，我们使用Comparable接口（而非less()）对a[i]进行三向比较来直接处理以下情况：")]),t._v(" "),s("p",[s("img",{attrs:{src:n(296),alt:"An image"}})]),t._v(" "),s("ul",[s("li",[t._v("a[i]小于v，将a[lt]和a[i]交换，将lt和i加一；\n"),s("ul",[s("li",[t._v("因为数据小于v，直接将数据放到[lo..lt-1]区域")]),t._v(" "),s("li",[t._v("lt索引增加，i索引增加相当于窗口向后滑动一个位置")])])]),t._v(" "),s("li",[t._v("a[i]大于v，将a[gt]和a[i]交换，将gt减一；\n"),s("ul",[s("li",[t._v("因为当前a[i]大于v，所以将当前元素交换到[gt+1..hi]")]),t._v(" "),s("li",[t._v("被交换过来的元素因为没有进行任何比较，这时候可能会出现三种结果，仍然大于a[i]，等于a[i]，小于a[i]，所以在i位置进行新的一轮比较")])])]),t._v(" "),s("li",[t._v("a[i]等于v，将i加一。\n"),s("ul",[s("li",[t._v("因为这里a[i] = v，所以校验元素和特定值相等，所以这里只需要将索引向后走一步")])])])]),t._v(" "),s("h2",{attrs:{id:"代码"}},[t._v("代码")]),t._v(" "),s("div",{staticClass:"language-Go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sortColors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sortCol")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("len")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sortCol")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" low"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" high "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" low "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" high "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 先设置小于区域")]),t._v("\n  lowIndex "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" low\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在设置index，其实这个index可以等于low,等于low,多一次循环走index++")]),t._v("\n  index "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" low "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 大于区域")]),t._v("\n  highIndex "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" high\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用第一个元素为对比数据")]),t._v("\n  compareV "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("low"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" index "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" highIndex "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果当前元素大于对比元素，将index放到[lo..lt-1]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" compareV "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("lowIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("lowIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      lowIndex"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n      index"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" compareV "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果当前元素大于对比元素，将index放到[gt+1..hi]")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 被交换过来的元素因为还是一个？，所以需要在此index在走一遍")]),t._v("\n      nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("highIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("highIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      highIndex"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 等于元素，直接index++")]),t._v("\n      index"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sortCol")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" low"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lowIndex"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sortCol")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nums"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" highIndex"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" high"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"错误案例"}},[t._v("错误案例")]),t._v(" "),s("ol",[s("li",[t._v("在编写代码时候没有对左边和右边在进行处理，导致"),s("code",[t._v("[2,0,2,1,1,0]")]),t._v("排序后出现了"),s("code",[t._v("[0 1 1 0 2 2]")]),t._v("结果，所以对原数据排序后需要对"),s("code",[t._v("lowIndex-1")]),t._v("和"),s("code",[t._v("highIndex+1")]),t._v("重复上面处理。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);