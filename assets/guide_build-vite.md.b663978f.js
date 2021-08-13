import{o as n,c as s,a}from"./app.e385d985.js";const e='{"title":"build\\\\vite\\\\plugin","description":"","frontmatter":{},"headers":[{"level":3,"title":"Vite配置-server.hmr","slug":"vite配置-server-hmr"},{"level":3,"title":"Vite配置-build.minify","slug":"vite配置-build-minify"},{"level":3,"title":"Vite配置-build.brotlisize","slug":"vite配置-build-brotlisize"},{"level":3,"title":"Vite配置-build.chunksizewarninglimit","slug":"vite配置-build-chunksizewarninglimit"},{"level":3,"title":"Vite配置- css.preprocessorOptions","slug":"vite配置-css-preprocessoroptions"}],"relativePath":"guide/build-vite.md","lastUpdated":1628827130468}',t={},p=a('<h1 id="build-vite-plugin"><a class="header-anchor" href="#build-vite-plugin" aria-hidden="true">#</a> build\\vite\\plugin</h1><h3 id="vite配置-server-hmr"><a class="header-anchor" href="#vite配置-server-hmr" aria-hidden="true">#</a> <a href="https://cn.vitejs.dev/config/#server-hmr" target="_blank" rel="noopener noreferrer">Vite配置-server.hmr</a></h3><p>禁用或配置 HMR 连接（用于 HMR websocket 必须使用不同的 http 服务器地址的情况）。</p><p>设置 server.hmr.overlay 为 false 可以禁用服务器错误遮罩层。</p><p>这个就是配置Vite的热更新的。文档中说的服务器错误遮罩层，就是你在代码中编写编写错误的代码，编译不通过的时候，浏览器页面也会同时展示一个灰屏上面显示你的代码错误。</p><p>build\\vite\\plugin</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> configHmrPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./hmr&#39;</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// TODO</span>\n  <span class="token operator">!</span>isBuild <span class="token operator">&amp;&amp;</span> vitePlugins<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">configHmrPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h3 id="vite配置-build-minify"><a class="header-anchor" href="#vite配置-build-minify" aria-hidden="true">#</a> <a href="https://cn.vitejs.dev/config/#build-minify" target="_blank" rel="noopener noreferrer">Vite配置-build.minify</a></h3><p>默认为 Terser，虽然 <a href="https://github.com/terser/terser" target="_blank" rel="noopener noreferrer">Terser</a> 相对较慢，但大多数情况下构建后的文件体积更小。ESbuild 最小化混淆更快但构建后的文件相对更大</p><p>其实不用配置，默认即可。</p><p>build\\vite\\plugin</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> configHtmlPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./html&#39;</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// vite-plugin-html</span>\n  vitePlugins<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">configHtmlPlugin</span><span class="token punctuation">(</span>viteEnv<span class="token punctuation">,</span> isBuild<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p>vite.config.ts</p><div class="language-js"><pre><code>build<span class="token operator">:</span> <span class="token punctuation">{</span>\n    terserOptions<span class="token operator">:</span> <span class="token punctuation">{</span>\n    compress<span class="token operator">:</span> <span class="token punctuation">{</span>\n        keep_infinity<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 通过true以防止Infinity被压缩为1/0，这可能会导致Chrome出现性能问题。</span>\n        <span class="token comment">// Used to delete console in production environment 用于删除生产环境中的console</span>\n        drop_console<span class="token operator">:</span> <span class="token constant">VITE_DROP_CONSOLE</span><span class="token punctuation">,</span> <span class="token comment">// -传递true以放弃对console.*函数的调用。 .env.development false | .env.production : true</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre></div><h3 id="vite配置-build-brotlisize"><a class="header-anchor" href="#vite配置-build-brotlisize" aria-hidden="true">#</a> <a href="https://cn.vitejs.dev/config/#build-brotlisize" target="_blank" rel="noopener noreferrer">Vite配置-build.brotlisize</a></h3><p>启用/禁用 brotli 压缩大小报告。压缩大型输出文件可能会很慢，因此禁用该功能可能会提高大型项目的构建性能。</p><p>禁用就好。</p><p>vite.config.ts</p><div class="language-js"><pre><code>build<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span>   \n    <span class="token comment">// Turning off brotliSize display can slightly reduce packaging time</span>\n    brotliSize<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n</code></pre></div><h3 id="vite配置-build-chunksizewarninglimit"><a class="header-anchor" href="#vite配置-build-chunksizewarninglimit" aria-hidden="true">#</a> <a href="https://cn.vitejs.dev/config/#build-chunksizewarninglimit" target="_blank" rel="noopener noreferrer">Vite配置-build.chunksizewarninglimit</a></h3><p>在编写代码时，您可能已经添加了许多代码拆分点以按需加载内容。编译后，您可能会注意到一些块太小了-造成更大的HTTP开销。LimitChunkCountPlugin可以通过合并来对您的块进行后处理。</p><p>vite.config.ts</p><div class="language-js"><pre><code>build<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span>   \n    chunkSizeWarningLimit<span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>\n</code></pre></div><h3 id="vite配置-css-preprocessoroptions"><a class="header-anchor" href="#vite配置-css-preprocessoroptions" aria-hidden="true">#</a> <a href="https://www.pipipi.net/vite/config/#css-preprocessoroptions" target="_blank" rel="noopener noreferrer">Vite配置- css.preprocessorOptions</a></h3><p>指定传递给 CSS 预处理器的选项。</p><p>vite.config.ts</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> generateModifyVars <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./build/generate/generateModifyVars&#39;</span><span class="token punctuation">;</span>\ncss<span class="token operator">:</span> <span class="token punctuation">{</span>\n    preprocessorOptions<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 用于全局导入，以避免需要单独导入每个样式文件。</span>\n        less<span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token comment">// 在全局less文件后面添加变量的配置。modifyVars对应的对象属性名会加上@追加到less文件后。</span>\n            modifyVars<span class="token operator">:</span> <span class="token function">generateModifyVars</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            javascriptEnabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre></div><p>Antd框架使用的是<code>less</code><br><code>src\\design\\index.less</code>：全局样式，在<code>main.ts</code>中使用。<br><code>src\\design\\config.less</code>：全局变量，在<code>vite.config.ts</code>中使用。</p>',28);t.render=function(a,e,t,o,i,c){return n(),s("div",null,[p])};export default t;export{e as __pageData};
