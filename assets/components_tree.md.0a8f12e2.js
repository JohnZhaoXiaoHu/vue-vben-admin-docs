import{o as n,c as s,a as t}from"./app.f39318f9.js";const a='{"title":"Tree","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Slots","slug":"slots"},{"level":2,"title":"Methods","slug":"methods"}],"relativePath":"components/tree.md","lastUpdated":1628236722440}',p={},e=t('<h1 id="tree"><a class="header-anchor" href="#tree" aria-hidden="true">#</a> Tree</h1><p>对<code>antv</code>的 tree 组件进行封装</p><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BasicTree</span> <span class="token attr-name">:treeData</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>treeData<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> BasicTree <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Tree/index&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> treeData <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./data&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> CollapseContainer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Container/index&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">import</span> <span class="token punctuation">{</span> TreeItem <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/components/Tree/index&#39;</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">export</span> <span class="token keyword">const</span> treeData<span class="token operator">:</span> TreeItem<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      title<span class="token operator">:</span> <span class="token string">&#39;parent 1&#39;</span><span class="token punctuation">,</span>\n      key<span class="token operator">:</span> <span class="token string">&#39;0-0&#39;</span><span class="token punctuation">,</span>\n      icon<span class="token operator">:</span> <span class="token string">&#39;home|svg&#39;</span><span class="token punctuation">,</span>\n      children<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">&#39;leaf&#39;</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">&#39;0-0-0&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n          title<span class="token operator">:</span> <span class="token string">&#39;leaf&#39;</span><span class="token punctuation">,</span>\n          key<span class="token operator">:</span> <span class="token string">&#39;0-0-1&#39;</span><span class="token punctuation">,</span>\n          children<span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">&#39;leaf&#39;</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">&#39;0-0-0-0&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">&#39;leaf&#39;</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">&#39;0-0-0-1&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      title<span class="token operator">:</span> <span class="token string">&#39;parent 2&#39;</span><span class="token punctuation">,</span>\n      key<span class="token operator">:</span> <span class="token string">&#39;1-1&#39;</span><span class="token punctuation">,</span>\n      icon<span class="token operator">:</span> <span class="token string">&#39;home|svg&#39;</span><span class="token punctuation">,</span>\n      children<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">&#39;leaf&#39;</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">&#39;1-1-0&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">&#39;leaf&#39;</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">&#39;1-1-1&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      title<span class="token operator">:</span> <span class="token string">&#39;parent 3&#39;</span><span class="token punctuation">,</span>\n      key<span class="token operator">:</span> <span class="token string">&#39;2-2&#39;</span><span class="token punctuation">,</span>\n      icon<span class="token operator">:</span> <span class="token string">&#39;home|svg&#39;</span><span class="token punctuation">,</span>\n      children<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">&#39;leaf&#39;</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">&#39;2-2-0&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span> title<span class="token operator">:</span> <span class="token string">&#39;leaf&#39;</span><span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token string">&#39;2-2-1&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    components<span class="token operator">:</span> <span class="token punctuation">{</span> BasicTree<span class="token punctuation">,</span> CollapseContainer <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span> treeData <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><div class="tip custom-block"><p class="custom-block-title">温馨提醒</p><p>除以下参数外，官方文档内的 props 也都支持，具体可以参考 <a href="https://2x.antdv.com/components/tree-cn/#Tree-props" target="_blank" rel="noopener noreferrer">antv tree</a></p></div><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>可选值</th><th>说明</th><th>版本</th></tr></thead><tbody><tr><td>treeData</td><td><code>TreeItem[]</code></td><td>-</td><td>-</td><td>树组件数据</td><td></td></tr><tr><td>rightMenuList</td><td><code>ContextMenuItem[]</code></td><td>-</td><td>-</td><td>右键菜单列表</td><td></td></tr><tr><td>beforeRightClick</td><td><code>（）=&gt;ContextMenuItem[]</code></td><td>-</td><td>-</td><td>点击右键之前生成右键菜单</td><td></td></tr><tr><td>checkedKeys</td><td><code>string[]</code></td><td>-</td><td>-</td><td>勾选的节点</td><td></td></tr><tr><td>selectedKeys</td><td><code>string[]</code></td><td>-</td><td>-</td><td>选中的节点</td><td></td></tr><tr><td>expandedKeys</td><td><code>string[]</code></td><td>-</td><td>-</td><td>展开的节点</td><td></td></tr><tr><td>actionList</td><td><code>ActionItem[]</code></td><td>-</td><td>-</td><td>鼠标移动上去右边操作按钮列表</td><td></td></tr><tr><td>defaultExpandLevel</td><td><code>string ｜ number</code></td><td>-</td><td>-</td><td>初次渲染后默认展开的层级</td><td>2.4.1</td></tr><tr><td>defaultExpandAll</td><td><code>boolean</code></td><td><code>false</code></td><td><code>true/false</code></td><td>初次渲染后默认全部</td><td>2.4.1</td></tr></tbody></table><p><strong>ActionItem</strong></p><div class="language-ts"><pre><code><span class="token punctuation">{</span>\n  <span class="token comment">// 渲染的图标</span>\n  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span>record<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><strong>ContextMenuItem</strong></p><div class="language-ts"><pre><code><span class="token punctuation">{</span>\n  <span class="token comment">// 文本</span>\n  label<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  <span class="token comment">// 图标</span>\n  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  <span class="token comment">// 是否禁用</span>\n  disabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>\n  <span class="token comment">// 事件</span>\n  handler<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token operator">...</span>arg<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="slots"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> Slots</h2><div class="tip custom-block"><p class="custom-block-title">温馨提醒</p><p>除以下参数外，官方文档内的 slot 也都支持，具体可以参考 <a href="https://2x.antdv.com/components/tree-cn/#Tree-props" target="_blank" rel="noopener noreferrer">antv tree</a></p></div><h2 id="methods"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h2><table><thead><tr><th>名称</th><th>回调参数</th><th>说明</th></tr></thead><tbody><tr><td>checkAll</td><td><code>(checkAll: boolean) =&gt; void</code></td><td>选择所有</td></tr><tr><td>expandAll</td><td><code>(expandAll: boolean) =&gt; void</code></td><td>展开所有</td></tr><tr><td>setExpandedKeys</td><td><code>(keys: Keys) =&gt; void</code></td><td>设置展开节点</td></tr><tr><td>getExpandedKeys</td><td><code>() =&gt; Keys</code></td><td>获取展开节点</td></tr><tr><td>setSelectedKeys</td><td><code>(keys: Keys) =&gt; void</code></td><td>设置选中节点</td></tr><tr><td>getSelectedKeys</td><td><code>() =&gt; Keys</code></td><td>获取选中节点</td></tr><tr><td>setCheckedKeys</td><td><code>(keys: CheckKeys) =&gt; void</code></td><td>设置勾选节点</td></tr><tr><td>getCheckedKeys</td><td><code>() =&gt; CheckKeys</code></td><td>获取勾选节点</td></tr><tr><td>filterByLevel</td><td><code>(level: number) =&gt; void</code></td><td>显示指定等级</td></tr><tr><td>insertNodeByKey</td><td><code>(opt: InsertNodeParams) =&gt; void</code></td><td>插入子节点到指定节点内</td></tr><tr><td>deleteNodeByKey</td><td><code>(key: string) =&gt; void</code></td><td>根据 key 删除节点</td></tr><tr><td>updateNodeByKey</td><td><code>(key: string, node: Omit&lt;TreeItem, &#39;key&#39;&gt;) =&gt; void</code></td><td>根据 key 更新节点</td></tr></tbody></table>',15);p.render=function(t,a,p,o,c,l){return n(),s("div",null,[e])};export default p;export{a as __pageData};