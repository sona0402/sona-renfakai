(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{357:function(a,t,s){a.exports=s.p+"assets/img/stack.0f2633b5.jpg"},358:function(a,t,s){a.exports=s.p+"assets/img/vframe-all.d51d27ef.jpg"},501:function(a,t,s){"use strict";s.r(t);var e=s(8),n=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"stacks"}},[a._v("Stacks")]),a._v(" "),t("h2",{attrs:{id:"java-virtual-machine-stacks"}},[a._v("Java-Virtual-Machine-Stacks")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("官方文档")]),a._v(" "),t("p",[a._v("Each Java Virtual Machine thread has a private Java Virtual Machine stack, created at the same time as the thread. A Java Virtual Machine stack stores frames (§2.6). A Java Virtual Machine stack is analogous to the stack of a conventional language such as C: it holds local variables and partial results, and plays a part in method invocation and return. Because the Java Virtual Machine stack is never manipulated directly except to push and pop frames, frames may be heap allocated. The memory for a Java Virtual Machine stack does not need to be contiguous.")]),a._v(" "),t("p",[a._v("This specification permits Java Virtual Machine stacks either to be of a fixed size or to dynamically expand and contract as required by the computation. If the Java Virtual Machine stacks are of a fixed size, the size of each Java Virtual Machine stack may be chosen independently when that stack is created.\nA Java Virtual Machine implementation may provide the programmer or the user control over the initial size of Java Virtual Machine stacks, as well as, in the case of dynamically expanding or contracting Java Virtual Machine stacks, control over the maximum and minimum sizes.\nThe following exceptional conditions are associated with Java Virtual Machine stacks:\n• If the computation in a thread requires a larger Java Virtual Machine stack than is permitted, the Java Virtual Machine throws a StackOverflowError.\n• If Java Virtual Machine stacks can be dynamically expanded, and expansion is attempted but insufficient memory can be made available to effect the expansion, or if insufficient memory can be made available to create the initial Java Virtual Machine stack for a new thread, the Java Virtual Machine throws an OutOfMemoryError.")])]),a._v(" "),t("p",[a._v("每个Java虚拟机线程都有一个与线程同时创建的专用Java虚拟机堆栈。Java虚拟机堆栈存储帧（§2.6）。Java虚拟机堆栈类似于C等传统语言的堆栈：它包含局部变量和部分结果，并在方法调用和返回中发挥作用。由于Java虚拟机堆栈除了推送和弹出帧外从未直接操作，因此帧可能会被分配堆。Java虚拟机堆栈的内存不需要连续。\n本规范允许Java虚拟机堆栈具有固定大小，或根据计算要求动态扩展和收缩。如果Java虚拟机堆栈的大小固定，则可以在创建该堆栈时独立选择每个Java虚拟机堆栈的大小。")]),a._v(" "),t("p",[a._v("Java虚拟机实现可以为程序员或用户提供对Java虚拟机堆栈初始大小的控制，以及在动态扩展或收缩Java虚拟机堆栈的情况下，对最大和最小大小的控制。")]),a._v(" "),t("p",[a._v("以下特殊条件与Java虚拟机堆栈相关联：")]),a._v(" "),t("ul",[t("li",[a._v("如果线程中的计算需要比允许更大的Java虚拟机堆栈，Java虚拟机将抛出堆栈溢出错误。")]),a._v(" "),t("li",[a._v("如果Java虚拟机堆栈可以动态扩展，并尝试扩展，但可用于实现扩展的内存不足，或者如果可用于为新线程创建初始Java虚拟机堆栈的内存不足，Java虚拟机将抛出内存错误。")])]),a._v(" "),t("h3",{attrs:{id:"堆栈溢出"}},[a._v("堆栈溢出")]),a._v(" "),t("p",[a._v("虚拟机栈使用"),t("code",[a._v("-Xss")]),a._v("进行设定，从图中可以看出，虚拟机栈包含"),t("code",[a._v("Frames")]),a._v("。如果想要"),t("code",[a._v("StackOverflowError")]),a._v("，可以从下面那种方式出发:")]),a._v(" "),t("ol",[t("li",[a._v("无跳出递归产生"),t("code",[a._v("Frame")])]),a._v(" "),t("li",[a._v("局部变量表无限大")])]),a._v(" "),t("p",[t("img",{attrs:{src:s(357),alt:"An image"}})]),a._v(" "),t("h3",{attrs:{id:"oom"}},[a._v("oom")]),a._v(" "),t("p",[a._v("由于Java不允许对虚拟机栈进行动态扩容，所以想"),t("code",[a._v("oom")]),a._v("，在"),t("code",[a._v("-Xss")]),a._v("大小指定的情况下，创建线程过多，也会导致内存不足。")]),a._v(" "),t("h3",{attrs:{id:"vframe"}},[a._v("vframe")]),a._v(" "),t("p",[a._v("vframes 是表示源级激活的虚拟堆栈帧。与优化代码一起存储的调试使我们能够将帧展开为"),t("code",[a._v("vframe")]),a._v("堆栈。")]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// vframes are virtual stack frames representing source level activations.")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// A single frame may hold several source level activations in the case of")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// optimized code. The debugging stored with the optimized code enables")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// us to unfold a frame as a stack of vframes.")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// A cVFrame represents an activation of a non-java method.")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// The vframe inheritance hierarchy:")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// - vframe")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//   - javaVFrame")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//     - interpretedVFrame")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//     - compiledVFrame     ; (used for both compiled Java methods and native stubs)")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//   - externalVFrame")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//     - entryVFrame        ; special frame created when calling Java from C")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// - BasicLock")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" vframe"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ResourceObj")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("protected")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 真实的frame")]),a._v("\n  frame        _fr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("      "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Raw frame behind the virtual frame.")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("RegisterMap")]),a._v("  _reg_map"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Register map for the raw frame (used to handle callee-saved registers).")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("JavaThread")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v("  _thread"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// The thread owning the raw frame.")]),a._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vframe")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" frame"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" fr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("RegisterMap")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" reg_map"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("JavaThread")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" thread"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("vframe")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" frame"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" fr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("JavaThread")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" thread"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Factory methods for creating vframes")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" vframe"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("new_vframe")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" frame"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" f"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("RegisterMap")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v("reg_map"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("JavaThread")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" thread"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" vframe"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("new_vframe")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("StackFrameStream")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v(" fst"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("JavaThread")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" thread"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Accessors")]),a._v("\n  frame              "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("fr")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("           "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" _fr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("       "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("CodeBlob")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v("          "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cb")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("         "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" _fr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cb")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("CompiledMethod")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v("   "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("nm")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("         "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("assert")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cb")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[a._v("NULL")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cb")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("is_compiled")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"usage"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("CompiledMethod")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cb")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// ???? Does this need to be a copy?")]),a._v("\n  frame"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v("             "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("frame_pointer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("_fr"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("       "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("RegisterMap")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("register_map")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),a._v("_reg_map"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("JavaThread")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v("        "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("thread")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("       "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" _thread"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Returns the sender vframe")]),a._v("\n  virtual vframe"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sender")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Returns the next javaVFrame on the stack (skipping all other kinds of frame)")]),a._v("\n  javaVFrame "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("java_sender")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Answers if the this is the top vframe in the frame, i.e., if the sender vframe")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// is in the caller frame")]),a._v("\n  virtual bool "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("is_top")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 返回栈顶")]),a._v("\n  virtual vframe"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("top")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n  virtual bool "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("is_entry_frame")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("       "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  virtual bool "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("is_java_frame")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  virtual bool "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("is_interpreted_frame")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  virtual bool "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("is_compiled_frame")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("从图中可以看出"),t("code",[a._v("vframe")]),a._v("是从线程内存进行分配的，调用了"),t("code",[a._v("Thread::current()->resource_area()->allocate_bytes(size, alloc_failmode);")]),a._v("方法。\n"),t("img",{attrs:{src:s(358),alt:"An image"}})]),a._v(" "),t("h2",{attrs:{id:"native-method-stacks"}},[a._v("Native-Method-Stacks")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("官方文档")]),a._v(" "),t("p",[a._v('An implementation of the Java Virtual Machine may use conventional stacks, colloquially called "C stacks," to support native methods (methods written in a language other than the Java programming language). Native method stacks may also be used by the implementation of an interpreter for the Java Virtual Machine\'s instruction set in a language such as C. Java Virtual Machine implementations that cannot load native methods and that do not themselves rely on conventional stacks need not supply native method stacks. If supplied, native method stacks are typically allocated per thread when each thread is created.\nThis specification permits native method stacks either to be of a fixed size or to dynamically expand and contract as required by the computation. If the native method stacks are of a fixed size, the size of each native method stack may be chosen independently when that stack is created.\nA Java Virtual Machine implementation may provide the programmer or the user control over the initial size of the native method stacks, as well as, in the case of varying-size native method stacks, control over the maximum and minimum method stack sizes.\nThe following exceptional conditions are associated with native method stacks:\n• If the computation in a thread requires a larger native method stack than is\npermitted, the Java Virtual Machine throws a StackOverflowError.\n• If native method stacks can be dynamically expanded and native method stack expansion is attempted but insufficient memory can be made available, or if insufficient memory can be made available to create the initial native method stack for a new thread, the Java Virtual Machine throws an OutOfMemoryError.')])]),a._v(" "),t("p",[a._v("Java虚拟机的实现可以使用常规堆栈，俗称“C堆栈”，来支持本机方法（用Java编程语言以外的语言编写的方法）。本机方法堆栈也可以用于用C等语言实现Java虚拟机指令集的解释器。无法加载本机方法且本身不依赖于常规堆栈的Java虚拟机实现不需要提供本机方法堆栈。如果提供了本机方法堆栈，通常在创建每个线程时分配给每个线程。")]),a._v(" "),t("p",[a._v("本规范允许本机方法堆栈具有固定大小，或根据计算要求动态扩展和收缩。如果本机方法堆栈的大小固定，则可以在创建该堆栈时独立选择每个本机方法堆栈的大小。")]),a._v(" "),t("p",[a._v("Java虚拟机实现可以为程序员或用户提供对本机方法堆栈初始大小的控制，以及在不同大小的本机方法堆栈的情况下，对最大和最小方法堆栈大小的控制。")]),a._v(" "),t("p",[a._v("以下特殊条件与本机方法堆栈相关联：")]),a._v(" "),t("ul",[t("li",[a._v("如果线程中的计算需要比现在更大的本机方法堆栈允许，Java虚拟机抛出StackOverflowError。")]),a._v(" "),t("li",[a._v("如果本机方法堆栈可以动态扩展，并尝试本机方法堆栈扩展，但内存不足，或者如果内存不足，无法为新线程创建初始本机方法堆栈，Java虚拟机将抛出OutOfMemoryError。")])]),a._v(" "),t("p",[a._v("本地方法栈使用"),t("code",[a._v("-Xoss")]),a._v("进行设定，但实际上是没有任何效果。")]),a._v(" "),t("h2",{attrs:{id:"参考材料"}},[a._v("参考材料")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://book.douban.com/subject/34907497/",target:"_blank",rel:"noopener noreferrer"}},[a._v("《深入理解Java虚拟机（第3版）》"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://docs.oracle.com/javase/specs/jvms/se17/jvms17.pdf",target:"_blank",rel:"noopener noreferrer"}},[a._v("The Java® VirtualMachine Specification"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://hg.openjdk.java.net/jdk8/jdk8/hotspot/file/c40fbf634c90/src/share/vm/runtime/vframe.cpp",target:"_blank",rel:"noopener noreferrer"}},[a._v("vframe.cpp"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);