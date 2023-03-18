import{_ as p,V as o,W as c,Y as n,a1 as s,Z as t,a0 as a,F as i}from"./framework-e54e0297.js";const l="/assets/architecture-691e7428.png",r="/assets/ng-work-d02a3379.png",u={},k=a('<h1 id="reactor" tabindex="-1"><a class="header-anchor" href="#reactor" aria-hidden="true">#</a> Reactor</h1><p>之前写作将<code>Reactor</code>模型放到<code>Netty</code>目录下，当时只学习了<code>Netty</code>源码，认为其思想主要是应用<code>Jetty、Undertow、Tomcat</code>，现在看当时眼光太低，像<code>redis，nginx</code>优秀框架都是使用这种思想(事件驱动代替父子进程、C10K问题)。</p>',2),d={id:"redis-ae-c",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#redis-ae-c","aria-hidden":"true"},"#",-1),v={href:"https://github.com/redis/redis/blob/unstable/src/ae.c",target:"_blank",rel:"noopener noreferrer"},f=a(`<p>核心代码如下，关注<code>wfileProc</code>和<code>wfileProc</code>。</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">aeProcessEvents</span><span class="token punctuation">(</span>aeEventLoop <span class="token operator">*</span>eventLoop<span class="token punctuation">,</span> <span class="token keyword">int</span> flags<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
        <span class="token comment">// 删除其他代码</span>
        <span class="token comment">/* Call the multiplexing API, will return only on timeout or when
         * some event fires. */</span>
        numevents <span class="token operator">=</span> <span class="token function">aeApiPoll</span><span class="token punctuation">(</span>eventLoop<span class="token punctuation">,</span> tvp<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 删除其他代码</span>
        <span class="token comment">/* After sleep callback. */</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>eventLoop<span class="token operator">-&gt;</span>aftersleep <span class="token operator">!=</span> <span class="token constant">NULL</span> <span class="token operator">&amp;&amp;</span> flags <span class="token operator">&amp;</span> AE_CALL_AFTER_SLEEP<span class="token punctuation">)</span>
            eventLoop<span class="token operator">-&gt;</span><span class="token function">aftersleep</span><span class="token punctuation">(</span>eventLoop<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span>j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> numevents<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> fd <span class="token operator">=</span> eventLoop<span class="token operator">-&gt;</span>fired<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">.</span>fd<span class="token punctuation">;</span>
            aeFileEvent <span class="token operator">*</span>fe <span class="token operator">=</span> <span class="token operator">&amp;</span>eventLoop<span class="token operator">-&gt;</span>events<span class="token punctuation">[</span>fd<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> mask <span class="token operator">=</span> eventLoop<span class="token operator">-&gt;</span>fired<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">.</span>mask<span class="token punctuation">;</span>
            <span class="token keyword">int</span> fired <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">/* Number of events fired for current fd. */</span>
            <span class="token keyword">int</span> invert <span class="token operator">=</span> fe<span class="token operator">-&gt;</span>mask <span class="token operator">&amp;</span> AE_BARRIER<span class="token punctuation">;</span>
            <span class="token comment">// read</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>invert <span class="token operator">&amp;&amp;</span> fe<span class="token operator">-&gt;</span>mask <span class="token operator">&amp;</span> mask <span class="token operator">&amp;</span> AE_READABLE<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                fe<span class="token operator">-&gt;</span><span class="token function">rfileProc</span><span class="token punctuation">(</span>eventLoop<span class="token punctuation">,</span>fd<span class="token punctuation">,</span>fe<span class="token operator">-&gt;</span>clientData<span class="token punctuation">,</span>mask<span class="token punctuation">)</span><span class="token punctuation">;</span>
                fired<span class="token operator">++</span><span class="token punctuation">;</span>
                fe <span class="token operator">=</span> <span class="token operator">&amp;</span>eventLoop<span class="token operator">-&gt;</span>events<span class="token punctuation">[</span>fd<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">/* Refresh in case of resize. */</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// wrtie</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>fe<span class="token operator">-&gt;</span>mask <span class="token operator">&amp;</span> mask <span class="token operator">&amp;</span> AE_WRITABLE<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>fired <span class="token operator">||</span> fe<span class="token operator">-&gt;</span>wfileProc <span class="token operator">!=</span> fe<span class="token operator">-&gt;</span>rfileProc<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    fe<span class="token operator">-&gt;</span><span class="token function">wfileProc</span><span class="token punctuation">(</span>eventLoop<span class="token punctuation">,</span>fd<span class="token punctuation">,</span>fe<span class="token operator">-&gt;</span>clientData<span class="token punctuation">,</span>mask<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    fired<span class="token operator">++</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>invert<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                fe <span class="token operator">=</span> <span class="token operator">&amp;</span>eventLoop<span class="token operator">-&gt;</span>events<span class="token punctuation">[</span>fd<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">/* Refresh in case of resize. */</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>fe<span class="token operator">-&gt;</span>mask <span class="token operator">&amp;</span> mask <span class="token operator">&amp;</span> AE_READABLE<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
                    <span class="token punctuation">(</span><span class="token operator">!</span>fired <span class="token operator">||</span> fe<span class="token operator">-&gt;</span>wfileProc <span class="token operator">!=</span> fe<span class="token operator">-&gt;</span>rfileProc<span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">{</span>
                    fe<span class="token operator">-&gt;</span><span class="token function">rfileProc</span><span class="token punctuation">(</span>eventLoop<span class="token punctuation">,</span>fd<span class="token punctuation">,</span>fe<span class="token operator">-&gt;</span>clientData<span class="token punctuation">,</span>mask<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    fired<span class="token operator">++</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            processed<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>flags <span class="token operator">&amp;</span> AE_TIME_EVENTS<span class="token punctuation">)</span>
        processed <span class="token operator">+=</span> <span class="token function">processTimeEvents</span><span class="token punctuation">(</span>eventLoop<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> processed<span class="token punctuation">;</span> <span class="token comment">/* return the number of processed file/time events */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),b={id:"nginx-workers-model",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#nginx-workers-model","aria-hidden":"true"},"#",-1),_={href:"http://www.aosabook.org/en/nginx.html",target:"_blank",rel:"noopener noreferrer"},g=a('<p>架构图中如下：</p><p><img src="'+l+'" alt="An image"></p><p>可以查看<code>work</code>模型，使用的是事件通知，基本与<code>Reactor</code>模型相等。</p><p><img src="'+r+'" alt="An image"></p><p>从图中可以看到<code>master</code>职责主要负责创建、绑定、关闭网络连接。<code>work池</code>负责接受、处理请求。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p><code>Reactor</code>模型是一个网络高并发常用模型，需要用心和时间去学习。</p>',7);function w(E,L){const e=i("ExternalLinkIcon");return o(),c("div",null,[k,n("h2",d,[m,s(),n("a",v,[s("Redis ae.c"),t(e)])]),f,n("h2",b,[h,s(),n("a",_,[s("nginx Workers Model"),t(e)])]),g])}const y=p(u,[["render",w],["__file","index.html.vue"]]);export{y as default};
