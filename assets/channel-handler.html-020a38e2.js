import{_ as n,V as a,W as s,a0 as t}from"./framework-1bd9c91b.js";const p="/assets/channel-init-8fe6f8ca.jpg",e="/assets/acceptor-95b0e587.jpg",c="/assets/Multiple-Reactors-0256f3d6.jpg",o={},l=t(`<h1 id="channel-handler" tabindex="-1"><a class="header-anchor" href="#channel-handler" aria-hidden="true">#</a> Channel-handler</h1><h3 id="handle-初始化" tabindex="-1"><a class="header-anchor" href="#handle-初始化" aria-hidden="true">#</a> handle 初始化</h3><ol><li>之前在<code>DefaultChannelPipeline#pendingHandlerCallbackHead</code>设置的任务，在<code>register0#pipeline.invokeHandlerAddedIfNeeded();</code>中要被处理了。</li><li>在<code>callHandlerAddedForAllHandlers</code>拿到刚才的<code>ChannelInitializer</code>的任务。</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>     <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">callHandlerAddedForAllHandlers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">final</span> <span class="token class-name">PendingHandlerCallback</span> pendingHandlerCallbackHead<span class="token punctuation">;</span>
        <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">assert</span> <span class="token operator">!</span>registered<span class="token punctuation">;</span>
            registered <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

            <span class="token comment">// 刚才设置的task</span>
            pendingHandlerCallbackHead <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>pendingHandlerCallbackHead<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>pendingHandlerCallbackHead <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">PendingHandlerCallback</span> task <span class="token operator">=</span> pendingHandlerCallbackHead<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>task <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 刚才的任务进行处理</span>
            task<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            task <span class="token operator">=</span> task<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

   <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">callHandlerAdded0</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">AbstractChannelHandlerContext</span> ctx<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token comment">// 设置增加完成</span>
            ctx<span class="token punctuation">.</span><span class="token function">setAddComplete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 拿到处理器进行增加</span>
            ctx<span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">handlerAdded</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Throwable</span> t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 去除异常情况代码</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>从下图可以看出这个 <code>handler</code> 就是刚才那个<code>ChannelInitializer</code>。</li></ol><p><img src="`+p+`" alt="An image"></p><ol start="4"><li>先初始化，在移除自己，因为<code>ChannelInitializer</code>产生的这个上下文作用就是为了初始化而存在的。</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>   <span class="token keyword">private</span> <span class="token keyword">boolean</span> <span class="token function">initChannel</span><span class="token punctuation">(</span><span class="token class-name">ChannelHandlerContext</span> ctx<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>initMap<span class="token punctuation">.</span><span class="token function">putIfAbsent</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token class-name">Boolean</span><span class="token punctuation">.</span><span class="token constant">TRUE</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// Guard against re-entrance.</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token comment">// 初始化initChannel</span>
                <span class="token function">initChannel</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">C</span><span class="token punctuation">)</span> ctx<span class="token punctuation">.</span><span class="token function">channel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Throwable</span> cause<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">exceptionCaught</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> cause<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
                <span class="token function">remove</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 上面的代码会调用到之前的增加的initChannel</span>
p<span class="token punctuation">.</span><span class="token function">addLast</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ChannelInitializer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Channel</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">initChannel</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">Channel</span> ch<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
            <span class="token keyword">final</span> <span class="token class-name">ChannelPipeline</span> pipeline <span class="token operator">=</span> ch<span class="token punctuation">.</span><span class="token function">pipeline</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">ChannelHandler</span> handler <span class="token operator">=</span> config<span class="token punctuation">.</span><span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>handler <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                pipeline<span class="token punctuation">.</span><span class="token function">addLast</span><span class="token punctuation">(</span>handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            ch<span class="token punctuation">.</span><span class="token function">eventLoop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token annotation punctuation">@Override</span>
                <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    pipeline<span class="token punctuation">.</span><span class="token function">addLast</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ServerBootstrapAcceptor</span><span class="token punctuation">(</span>
                            ch<span class="token punctuation">,</span> currentChildGroup<span class="token punctuation">,</span> currentChildHandler<span class="token punctuation">,</span> currentChildOptions<span class="token punctuation">,</span> currentChildAttrs<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>在<code>ChannelInitializer</code>初始化后，这里会在重复一次流程处理，主要为<code>ServerSocketChannel</code>增加<code>ServerBootstrapAcceptor</code>。</li></ol><p><img src="`+e+'" alt="An image"></p><div class="hint-container tip"><p class="hint-container-title">提示</p><p><code>ServerBootstrapAcceptor</code> = <code>acceptor</code> 。</p></div><p><img src="'+c+`" alt="An image"></p><ol start="6"><li>两次栈轨迹分别如下:</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//  第一次新增ChannelInitializer</span>
<span class="token class-name">Breakpoint</span> reached
  at <span class="token class-name"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>channel<span class="token punctuation">.</span></span>DefaultChannelPipeline</span><span class="token punctuation">.</span><span class="token function">callHandlerAdded0</span><span class="token punctuation">(</span><span class="token class-name">DefaultChannelPipeline</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">636</span><span class="token punctuation">)</span>
  at <span class="token class-name"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>channel<span class="token punctuation">.</span></span>DefaultChannelPipeline</span><span class="token punctuation">.</span>access$<span class="token function">000</span><span class="token punctuation">(</span><span class="token class-name">DefaultChannelPipeline</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">46</span><span class="token punctuation">)</span>
  at <span class="token class-name"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>channel<span class="token punctuation">.</span></span>DefaultChannelPipeline</span>$<span class="token class-name">PendingHandlerAddedTask</span><span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token class-name">DefaultChannelPipeline</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">1487</span><span class="token punctuation">)</span>
  at <span class="token class-name"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>channel<span class="token punctuation">.</span></span>DefaultChannelPipeline</span><span class="token punctuation">.</span><span class="token function">callHandlerAddedForAllHandlers</span><span class="token punctuation">(</span><span class="token class-name">DefaultChannelPipeline</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">1161</span><span class="token punctuation">)</span>
  at <span class="token class-name"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>channel<span class="token punctuation">.</span></span>DefaultChannelPipeline</span><span class="token punctuation">.</span><span class="token function">invokeHandlerAddedIfNeeded</span><span class="token punctuation">(</span><span class="token class-name">DefaultChannelPipeline</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">686</span><span class="token punctuation">)</span>
  at <span class="token class-name"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>channel<span class="token punctuation">.</span></span>AbstractChannel</span>$<span class="token class-name">AbstractUnsafe</span><span class="token punctuation">.</span><span class="token function">register0</span><span class="token punctuation">(</span><span class="token class-name">AbstractChannel</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">510</span><span class="token punctuation">)</span>
  at <span class="token class-name"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>channel<span class="token punctuation">.</span></span>AbstractChannel</span>$<span class="token class-name">AbstractUnsafe</span><span class="token punctuation">.</span>access$<span class="token function">200</span><span class="token punctuation">(</span><span class="token class-name">AbstractChannel</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">423</span><span class="token punctuation">)</span>
  at <span class="token class-name"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>channel<span class="token punctuation">.</span></span>AbstractChannel</span>$<span class="token class-name">AbstractUnsafe</span>$<span class="token number">1.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">AbstractChannel</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">482</span><span class="token punctuation">)</span>
  at <span class="token class-name"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span>AbstractEventExecutor</span><span class="token punctuation">.</span>safeExecute$$$<span class="token function">capture</span><span class="token punctuation">(</span><span class="token class-name">AbstractEventExecutor</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">163</span><span class="token punctuation">)</span>
  at <span class="token class-name"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span>AbstractEventExecutor</span><span class="token punctuation">.</span><span class="token function">safeExecute</span><span class="token punctuation">(</span><span class="token class-name">AbstractEventExecutor</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
  at <span class="token class-name"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span>SingleThreadEventExecutor</span><span class="token punctuation">.</span><span class="token function">runAllTasks</span><span class="token punctuation">(</span><span class="token class-name">SingleThreadEventExecutor</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">404</span><span class="token punctuation">)</span>
  at <span class="token class-name"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>channel<span class="token punctuation">.</span>nio<span class="token punctuation">.</span></span>NioEventLoop</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">NioEventLoop</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">462</span><span class="token punctuation">)</span>
  at <span class="token class-name"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span>SingleThreadEventExecutor</span>$<span class="token number">5.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">SingleThreadEventExecutor</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">897</span><span class="token punctuation">)</span>
  at <span class="token class-name"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span>FastThreadLocalRunnable</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">FastThreadLocalRunnable</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">30</span><span class="token punctuation">)</span>
  at <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>Thread</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">748</span><span class="token punctuation">)</span>
<span class="token comment">//  ServerBootstrapAcceptor</span>
<span class="token class-name">Breakpoint</span> reached at <span class="token class-name"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>channel<span class="token punctuation">.</span></span>DefaultChannelPipeline</span><span class="token punctuation">.</span><span class="token function">callHandlerAdded0</span><span class="token punctuation">(</span><span class="token class-name">DefaultChannelPipeline</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">636</span><span class="token punctuation">)</span>
<span class="token class-name">Breakpoint</span> reached
  at <span class="token class-name"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>channel<span class="token punctuation">.</span></span>DefaultChannelPipeline</span><span class="token punctuation">.</span><span class="token function">callHandlerAdded0</span><span class="token punctuation">(</span><span class="token class-name">DefaultChannelPipeline</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">636</span><span class="token punctuation">)</span>
  at <span class="token class-name"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>channel<span class="token punctuation">.</span></span>DefaultChannelPipeline</span><span class="token punctuation">.</span><span class="token function">addLast</span><span class="token punctuation">(</span><span class="token class-name">DefaultChannelPipeline</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">235</span><span class="token punctuation">)</span>
  at <span class="token class-name"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>channel<span class="token punctuation">.</span></span>DefaultChannelPipeline</span><span class="token punctuation">.</span><span class="token function">addLast</span><span class="token punctuation">(</span><span class="token class-name">DefaultChannelPipeline</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">409</span><span class="token punctuation">)</span>
  at <span class="token class-name"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>channel<span class="token punctuation">.</span></span>DefaultChannelPipeline</span><span class="token punctuation">.</span><span class="token function">addLast</span><span class="token punctuation">(</span><span class="token class-name">DefaultChannelPipeline</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">396</span><span class="token punctuation">)</span>
  at <span class="token class-name"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>bootstrap<span class="token punctuation">.</span></span>ServerBootstrap</span>$<span class="token number">1</span>$<span class="token number">1.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">ServerBootstrap</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">181</span><span class="token punctuation">)</span>
  at <span class="token class-name"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span>AbstractEventExecutor</span><span class="token punctuation">.</span>safeExecute$$$<span class="token function">capture</span><span class="token punctuation">(</span><span class="token class-name">AbstractEventExecutor</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">163</span><span class="token punctuation">)</span>
  at <span class="token class-name"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span>AbstractEventExecutor</span><span class="token punctuation">.</span><span class="token function">safeExecute</span><span class="token punctuation">(</span><span class="token class-name">AbstractEventExecutor</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
  at <span class="token class-name"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span>SingleThreadEventExecutor</span><span class="token punctuation">.</span><span class="token function">runAllTasks</span><span class="token punctuation">(</span><span class="token class-name">SingleThreadEventExecutor</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">404</span><span class="token punctuation">)</span>
  at <span class="token class-name"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>channel<span class="token punctuation">.</span>nio<span class="token punctuation">.</span></span>NioEventLoop</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">NioEventLoop</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">462</span><span class="token punctuation">)</span>
  at <span class="token class-name"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span>SingleThreadEventExecutor</span>$<span class="token number">5.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">SingleThreadEventExecutor</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">897</span><span class="token punctuation">)</span>
  at <span class="token class-name"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span>FastThreadLocalRunnable</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">FastThreadLocalRunnable</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">30</span><span class="token punctuation">)</span>
  at <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>Thread</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">748</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>我们开发时候会为 <code>boss</code> 设置一些 <code>handler</code> ，而 <code>netty</code> 使用 <code>ChannelInitializer</code> 获取到 <code>boss</code> 的 <code>handler</code> ，在其基础上增加 <code>ServerBootstrapAcceptor</code> 。 因为服务器的流程是固定的，所以增加 <code>ServerBootstrapAcceptor</code> 可以保存 <code>work socketchannel</code> 的一些属性。</p>`,16),u=[l];function i(k,r){return a(),s("div",null,u)}const v=n(o,[["render",i],["__file","channel-handler.html.vue"]]);export{v as default};