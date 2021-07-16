import{o as n,c as s,a}from"./app.384067ab.js";const t='{"title":"路由","description":"","frontmatter":{},"headers":[{"level":2,"title":"配置","slug":"配置"},{"level":3,"title":"模块说明","slug":"模块说明"},{"level":3,"title":"多级路由","slug":"多级路由"},{"level":3,"title":"Meta 配置说明","slug":"meta-配置说明"},{"level":3,"title":"外部页面嵌套","slug":"外部页面嵌套"},{"level":3,"title":"外链","slug":"外链"},{"level":2,"title":"图标","slug":"图标"},{"level":2,"title":"新增路由","slug":"新增路由"},{"level":3,"title":"如何新增一个路由模块","slug":"如何新增一个路由模块"},{"level":3,"title":"验证","slug":"验证"},{"level":2,"title":"路由刷新","slug":"路由刷新"},{"level":3,"title":"实现","slug":"实现"},{"level":3,"title":"Redirect","slug":"redirect"},{"level":2,"title":"页面跳转","slug":"页面跳转"},{"level":3,"title":"方式","slug":"方式"},{"level":2,"title":"多标签页","slug":"多标签页"},{"level":3,"title":"如何开启页面缓存","slug":"如何开启页面缓存"},{"level":3,"title":"如何让某个页面不缓存","slug":"如何让某个页面不缓存"}],"relativePath":"guide/router.md","lastUpdated":1626420122773}',p={},o=a('<h1 id="路由"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h1><p>项目路由配置存放于<a href="https://github.com/anncwb/vue-vben-admin/tree/main/src/router/routes" target="_blank" rel="noopener noreferrer">src/router/routes</a> 下面。 <a href="https://github.com/anncwb/vue-vben-admin/tree/main/src/router/routes/modules" target="_blank" rel="noopener noreferrer">src/router/routes/modules</a>用于存放路由模块,在该文件下内的文件会自动注册</p><p>vue-ts-vite-admin&gt; <code>yarn add vue-router@next</code></p><p>package.json</p><div class="language-js"><pre><code>  <span class="token string">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token string">&quot;vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.0.5&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;vue-router&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^4.0.10&quot;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre></div><h2 id="配置"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><h3 id="模块说明"><a class="header-anchor" href="#模块说明" aria-hidden="true">#</a> 模块说明</h3><p>在<a href="https://github.com/anncwb/vue-vben-admin/tree/main/src/router/routes/modules" target="_blank" rel="noopener noreferrer">src/router/routes/modules</a>内的一个<code>.ts</code>文件会被视为一个路由模块。</p><p>一个路由模块包含以下结构</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> AppRouteModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/router/types&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">LAYOUT</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/router/constant&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> t <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/hooks/web/useI18n&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> dashboard<span class="token operator">:</span> AppRouteModule <span class="token operator">=</span> <span class="token punctuation">{</span>\n  path<span class="token operator">:</span> <span class="token string">&#39;/dashboard&#39;</span><span class="token punctuation">,</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;Dashboard&#39;</span><span class="token punctuation">,</span>\n  component<span class="token operator">:</span> <span class="token constant">LAYOUT</span><span class="token punctuation">,</span>\n  redirect<span class="token operator">:</span> <span class="token string">&#39;/dashboard/analysis&#39;</span><span class="token punctuation">,</span>\n  meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n    icon<span class="token operator">:</span> <span class="token string">&#39;ion:grid-outline&#39;</span><span class="token punctuation">,</span>\n    title<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;routes.dashboard.dashboard&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  children<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      path<span class="token operator">:</span> <span class="token string">&#39;analysis&#39;</span><span class="token punctuation">,</span>\n      name<span class="token operator">:</span> <span class="token string">&#39;Analysis&#39;</span><span class="token punctuation">,</span>\n      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/@/views/dashboard/analysis/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n        affix<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        title<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;routes.dashboard.analysis&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      path<span class="token operator">:</span> <span class="token string">&#39;workbench&#39;</span><span class="token punctuation">,</span>\n      name<span class="token operator">:</span> <span class="token string">&#39;Workbench&#39;</span><span class="token punctuation">,</span>\n      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/@/views/dashboard/workbench/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n        title<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;routes.dashboard.workbench&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> dashboard<span class="token punctuation">;</span>\n</code></pre></div><h3 id="多级路由"><a class="header-anchor" href="#多级路由" aria-hidden="true">#</a> 多级路由</h3><div class="tip custom-block"><p class="custom-block-title">注意事项</p><ul><li>整个项目所有路由 name 不能重复</li><li>所有的多级路由最终都会转成二级路由，所以不能内嵌子路由</li><li>除了 layout 对应的 path 前面需要加 <code>/</code>，其余子路由都不要以<code>/</code>开头</li></ul></div><p><strong>示例</strong></p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> AppRouteModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/router/types&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> getParentLayout<span class="token punctuation">,</span> <span class="token constant">LAYOUT</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/router/constant&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> t <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/hooks/web/useI18n&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> permission<span class="token operator">:</span> AppRouteModule <span class="token operator">=</span> <span class="token punctuation">{</span>\n  path<span class="token operator">:</span> <span class="token string">&#39;/level&#39;</span><span class="token punctuation">,</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;Level&#39;</span><span class="token punctuation">,</span>\n  component<span class="token operator">:</span> <span class="token constant">LAYOUT</span><span class="token punctuation">,</span>\n  redirect<span class="token operator">:</span> <span class="token string">&#39;/level/menu1/menu1-1/menu1-1-1&#39;</span><span class="token punctuation">,</span>\n  meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n    icon<span class="token operator">:</span> <span class="token string">&#39;ion:menu-outline&#39;</span><span class="token punctuation">,</span>\n    title<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;routes.demo.level.level&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  children<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      path<span class="token operator">:</span> <span class="token string">&#39;menu1&#39;</span><span class="token punctuation">,</span>\n      name<span class="token operator">:</span> <span class="token string">&#39;Menu1Demo&#39;</span><span class="token punctuation">,</span>\n      component<span class="token operator">:</span> <span class="token function">getParentLayout</span><span class="token punctuation">(</span><span class="token string">&#39;Menu1Demo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n        title<span class="token operator">:</span> <span class="token string">&#39;Menu1&#39;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      redirect<span class="token operator">:</span> <span class="token string">&#39;/level/menu1/menu1-1/menu1-1-1&#39;</span><span class="token punctuation">,</span>\n      children<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n          path<span class="token operator">:</span> <span class="token string">&#39;menu1-1&#39;</span><span class="token punctuation">,</span>\n          name<span class="token operator">:</span> <span class="token string">&#39;Menu11Demo&#39;</span><span class="token punctuation">,</span>\n          component<span class="token operator">:</span> <span class="token function">getParentLayout</span><span class="token punctuation">(</span><span class="token string">&#39;Menu11Demo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n          meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n            title<span class="token operator">:</span> <span class="token string">&#39;Menu1-1&#39;</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          redirect<span class="token operator">:</span> <span class="token string">&#39;/level/menu1/menu1-1/menu1-1-1&#39;</span><span class="token punctuation">,</span>\n          children<span class="token operator">:</span> <span class="token punctuation">[</span>\n            <span class="token punctuation">{</span>\n              path<span class="token operator">:</span> <span class="token string">&#39;menu1-1-1&#39;</span><span class="token punctuation">,</span>\n              name<span class="token operator">:</span> <span class="token string">&#39;Menu111Demo&#39;</span><span class="token punctuation">,</span>\n              <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/@/views/demo/level/Menu111.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n              meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n                title<span class="token operator">:</span> <span class="token string">&#39;Menu111&#39;</span><span class="token punctuation">,</span>\n              <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> permission<span class="token punctuation">;</span>\n</code></pre></div><h3 id="meta-配置说明"><a class="header-anchor" href="#meta-配置说明" aria-hidden="true">#</a> Meta 配置说明</h3><div class="language-ts"><pre><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">RouteMeta</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 路由title  一般必填</span>\n  title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  <span class="token comment">// 是否忽略权限，只在权限模式为Role的时候有效</span>\n  ignoreAuth<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>\n  <span class="token comment">// 可以访问的角色，只在权限模式为Role的时候有效</span>\n  roles<span class="token operator">?</span><span class="token operator">:</span> RoleEnum<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token comment">// 是否忽略KeepAlive缓存</span>\n  ignoreKeepAlive<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>\n  <span class="token comment">// 是否固定标签</span>\n  affix<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>\n  <span class="token comment">// 图标，也是菜单图标</span>\n  icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  <span class="token comment">// 内嵌iframe的地址</span>\n  frameSrc<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  <span class="token comment">// 指定该路由切换的动画名</span>\n  transitionName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  <span class="token comment">// 隐藏该路由在面包屑上面的显示</span>\n  hideBreadcrumb<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>\n  <span class="token comment">// 如果该路由会携带参数，且需要在tab页上面显示。则需要设置为true</span>\n  carryParam<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>\n  <span class="token comment">// 隐藏所有子菜单</span>\n  hideChildrenInMenu<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>\n  <span class="token comment">// 当前激活的菜单。用于配置详情页时左侧激活的菜单路径</span>\n  currentActiveMenu<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  <span class="token comment">// 当前路由不再标签页显示</span>\n  hideTab<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>\n  <span class="token comment">// 当前路由不再菜单显示</span>\n  hideMenu<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>\n  <span class="token comment">// 菜单排序，只对第一级有效</span>\n  orderNo<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="外部页面嵌套"><a class="header-anchor" href="#外部页面嵌套" aria-hidden="true">#</a> 外部页面嵌套</h3><p>只需要将 frameSrc 设置为需要跳转的地址即可</p><div class="language-ts"><pre><code><span class="token keyword">const</span> <span class="token function-variable function">IFrame</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/@/views/sys/iframe/FrameBlank.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">{</span>\n  path<span class="token operator">:</span> <span class="token string">&#39;doc&#39;</span><span class="token punctuation">,</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;Doc&#39;</span><span class="token punctuation">,</span>\n  component<span class="token operator">:</span> IFrame<span class="token punctuation">,</span>\n  meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n    frameSrc<span class="token operator">:</span> <span class="token string">&#39;https://vvbin.cn/doc-next/&#39;</span><span class="token punctuation">,</span>\n    title<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;routes.demo.iframe.doc&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre></div><h3 id="外链"><a class="header-anchor" href="#外链" aria-hidden="true">#</a> 外链</h3><p>只需要将 path 设置为需要跳转的<strong>HTTP 地址</strong>即可</p><div class="language-ts"><pre><code><span class="token punctuation">{</span>\n  path<span class="token operator">:</span> <span class="token string">&#39;https://vvbin.cn/doc-next/&#39;</span><span class="token punctuation">,</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;DocExternal&#39;</span><span class="token punctuation">,</span>\n  component<span class="token operator">:</span> IFrame<span class="token punctuation">,</span>\n  meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n    title<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;routes.demo.iframe.docExternal&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="图标"><a class="header-anchor" href="#图标" aria-hidden="true">#</a> 图标</h2><p>这里的 icon 配置，会同步到 <strong>菜单</strong></p><p>icon 的值可以查看 <a href="./../components/icon.html">Icon</a></p><h2 id="新增路由"><a class="header-anchor" href="#新增路由" aria-hidden="true">#</a> 新增路由</h2><h3 id="如何新增一个路由模块"><a class="header-anchor" href="#如何新增一个路由模块" aria-hidden="true">#</a> 如何新增一个路由模块</h3><ol><li>在<a href="https://github.com/anncwb/vue-vben-admin/tree/main/src/router/routes/modules" target="_blank" rel="noopener noreferrer">src/router/routes/modules</a>内新增一个模块文件</li></ol><p>示例,在<a href="https://github.com/anncwb/vue-vben-admin/tree/main/src/router/routes/modules" target="_blank" rel="noopener noreferrer">src/router/routes/modules</a>下新增 test.ts 文件</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> AppRouteModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/router/types&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">LAYOUT</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/router/constant&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> t <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/hooks/web/useI18n&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> dashboard<span class="token operator">:</span> AppRouteModule <span class="token operator">=</span> <span class="token punctuation">{</span>\n  path<span class="token operator">:</span> <span class="token string">&#39;/about&#39;</span><span class="token punctuation">,</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;About&#39;</span><span class="token punctuation">,</span>\n  component<span class="token operator">:</span> <span class="token constant">LAYOUT</span><span class="token punctuation">,</span>\n  redirect<span class="token operator">:</span> <span class="token string">&#39;/about/index&#39;</span><span class="token punctuation">,</span>\n  meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n    icon<span class="token operator">:</span> <span class="token string">&#39;simple-icons:about-dot-me&#39;</span><span class="token punctuation">,</span>\n    title<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;routes.dashboard.about&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  children<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      path<span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>\n      name<span class="token operator">:</span> <span class="token string">&#39;AboutPage&#39;</span><span class="token punctuation">,</span>\n      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/@/views/sys/about/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n        title<span class="token operator">:</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;routes.dashboard.about&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        icon<span class="token operator">:</span> <span class="token string">&#39;simple-icons:about-dot-me&#39;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> dashboard<span class="token punctuation">;</span>\n</code></pre></div><p>到这里你路由已经添加完成，不需要手动引入，放在<a href="https://github.com/anncwb/vue-vben-admin/tree/main/src/router/routes/modules" target="_blank" rel="noopener noreferrer">src/router/routes/modules</a>内的文件会自动被加载</p><h3 id="验证"><a class="header-anchor" href="#验证" aria-hidden="true">#</a> 验证</h3><p>您可以尝试访问 <strong>ip:端口/about/index</strong>出现对应组件内容即代表成功</p><h2 id="路由刷新"><a class="header-anchor" href="#路由刷新" aria-hidden="true">#</a> 路由刷新</h2><p>项目中采用的是<strong>重定向</strong>方式</p><h3 id="实现"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h3><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useRedo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/hooks/web/usePage&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> redo <span class="token operator">=</span> <span class="token function">useRedo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// 执行刷新</span>\n    <span class="token function">redo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h3 id="redirect"><a class="header-anchor" href="#redirect" aria-hidden="true">#</a> Redirect</h3><p><a href="https://github.com/anncwb/vue-vben-admin/tree/main/src/views/sys/redirect/index.vue" target="_blank" rel="noopener noreferrer">src/views/sys/redirect/index.vue</a></p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> unref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;Redirect&#39;</span><span class="token punctuation">,</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> currentRoute<span class="token punctuation">,</span> replace <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> params<span class="token punctuation">,</span> query <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">unref</span><span class="token punctuation">(</span>currentRoute<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> path <span class="token punctuation">}</span> <span class="token operator">=</span> params<span class="token punctuation">;</span>\n    <span class="token keyword">const</span> _path <span class="token operator">=</span> <span class="token builtin">Array</span><span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token operator">?</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token operator">:</span> path<span class="token punctuation">;</span>\n    <span class="token function">replace</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      path<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span> <span class="token operator">+</span> _path<span class="token punctuation">,</span>\n      query<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="页面跳转"><a class="header-anchor" href="#页面跳转" aria-hidden="true">#</a> 页面跳转</h2><p>页面跳转建议采用项目提供的 <strong>useGo</strong></p><h3 id="方式"><a class="header-anchor" href="#方式" aria-hidden="true">#</a> 方式</h3><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useGo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;/@/hooks/web/usePage&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> go <span class="token operator">=</span> <span class="token function">useGo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 执行刷新</span>\n    <span class="token function">go</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">go</span><span class="token punctuation">(</span>PageEnum<span class="token punctuation">.</span>Home<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="多标签页"><a class="header-anchor" href="#多标签页" aria-hidden="true">#</a> 多标签页</h2><p>标签页使用的是<code> keep-alive</code> 和 <code>router-view</code> 实现，实现切换 tab 后还能保存切换之前的状态。</p><h3 id="如何开启页面缓存"><a class="header-anchor" href="#如何开启页面缓存" aria-hidden="true">#</a> 如何开启页面缓存</h3><p>开启缓存有 3 个条件</p><ol><li>在<a href="https://github.com/anncwb/vue-vben-admin/tree/main/src/settings/projectSetting.ts" target="_blank" rel="noopener noreferrer">src/settings/projectSetting.ts</a>内将<code>openKeepAlive</code>设置为<code>true</code></li><li>路由设置 name,且<strong>不能重复</strong></li><li>路由对应的组件加上 name,与路由设置的 name 保持一致</li></ol><div class="language-ts"><pre><code> <span class="token punctuation">{</span>\n   <span class="token operator">...</span><span class="token punctuation">,</span>\n    <span class="token comment">// name</span>\n    name<span class="token operator">:</span> <span class="token string">&#39;Login&#39;</span><span class="token punctuation">,</span>\n    <span class="token comment">// 对应组件组件的name</span>\n    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;/@/views/sys/login/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token operator">...</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  <span class="token comment">// /@/views/sys/login/index.vue</span>\n  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token comment">// 需要和路由的name一致</span>\n    name<span class="token operator">:</span><span class="token string">&quot;Login&quot;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><div class="tip custom-block"><p class="custom-block-title">注意</p><p>keep-alive 生效的前提是</p><p><strong>include - 字符串或正则表达式，只有名称匹配的组件会被缓存</strong></p><p>所以需要将路由的 name 属性及对应的页面的 name 设置成一样</p></div><h3 id="如何让某个页面不缓存"><a class="header-anchor" href="#如何让某个页面不缓存" aria-hidden="true">#</a> 如何让某个页面不缓存</h3><p><strong>可在 router.meta 下配置</strong></p><p>可以将 <code>ignoreKeepAlive</code>配置成<code>true</code>即可关闭缓存。</p><div class="language-ts"><pre><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">RouteMeta</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 是否忽略KeepAlive缓存</span>\n  ignoreKeepAlive<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',55);p.render=function(a,t,p,e,c,u){return n(),s("div",null,[o])};export default p;export{t as __pageData};
