import{o as n,c as s,a}from"./app.1e087f38.js";const t='{"title":"vite","description":"","frontmatter":{},"headers":[{"level":2,"title":"vite.config.ts","slug":"vite-config-ts"},{"level":2,"title":"vite-plugin-purge-icons","slug":"vite-plugin-purge-icons"},{"level":2,"title":"script","slug":"script"}],"relativePath":"other/build.md","lastUpdated":1629882865863}',p={},e=a('<h1 id="vite"><a class="header-anchor" href="#vite" aria-hidden="true">#</a> vite</h1><p>vite\\plugin\\theme.ts</p><blockquote><p>process.cwd() 返回 Node.js 进程的当前工作目录。</p></blockquote><div class="language-js"><pre><code>   <span class="token function">antdDarkThemePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      preloadFiles<span class="token operator">:</span> <span class="token punctuation">[</span>\n        path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;node_modules/ant-design-vue/dist/antd.less&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;src/design/index.less&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n</code></pre></div><h2 id="vite-config-ts"><a class="header-anchor" href="#vite-config-ts" aria-hidden="true">#</a> vite.config.ts</h2><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> generateModifyVars <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./build/generate/generateModifyVars&#39;</span><span class="token punctuation">;</span>\n    css<span class="token operator">:</span> <span class="token punctuation">{</span>\n      preprocessorOptions<span class="token operator">:</span> <span class="token punctuation">{</span>\n        less<span class="token operator">:</span> <span class="token punctuation">{</span>\n          modifyVars<span class="token operator">:</span> <span class="token function">generateModifyVars</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n          javascriptEnabled<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre></div><p>build\\generate\\icon\\index.ts</p><p><a href="https://www.npmjs.com/package/fs-extra" target="_blank" rel="noopener noreferrer">fs-extra</a></p><blockquote><p>fs-extra adds file system methods that aren&#39;t included in the native fs module and adds promise support to the fs methods.</p></blockquote><p><a href="https://www.npmjs.com/package/inquirer" target="_blank" rel="noopener noreferrer">inquirer</a></p><blockquote><p>A collection of common interactive command line user interfaces.</p></blockquote><p><a href="https://www.npmjs.com/package/@iconify/json" target="_blank" rel="noopener noreferrer">@iconify/json</a></p><blockquote><p>This is collection of SVG icons created by various authors, released under various free licenses.</p></blockquote><p><code>yarn add fs-extra @types/fs-extra -D</code><br><code>yarn add inquirer @types/inquirer -D</code><br><code>yarn add @iconify/json -D</code></p><h2 id="vite-plugin-purge-icons"><a class="header-anchor" href="#vite-plugin-purge-icons" aria-hidden="true">#</a> vite-plugin-purge-icons</h2><p><code>yarn add @iconify/iconify</code><br><code>yarn add vite-plugin-purge-icons @iconify/json -D</code></p><p>build\\vite\\plugin\\index.ts</p><div class="language-js"><pre><code><span class="token keyword">import</span> purgeIcons <span class="token keyword">from</span> <span class="token string">&#39;vite-plugin-purge-icons&#39;</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// vite-plugin-purge-icons</span>\n  vitePlugins<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">purgeIcons</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p>components\\Icon\\src\\Icon.vue</p><div class="language-js"><pre><code>  <span class="token keyword">import</span> Iconify <span class="token keyword">from</span> <span class="token string">&#39;@purge-icons/generated&#39;</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> svg <span class="token operator">=</span> Iconify<span class="token punctuation">.</span><span class="token function">renderSVG</span><span class="token punctuation">(</span>icon<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p>vite.config.ts</p><div class="language-js"><pre><code>    optimizeDeps<span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token comment">// @iconify/iconify: The dependency is dynamically and virtually loaded by @purge-icons/generated, so it needs to be specified explicitly</span>\n      include<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token string">&#39;@iconify/iconify&#39;</span><span class="token punctuation">,</span>\n</code></pre></div><h2 id="script"><a class="header-anchor" href="#script" aria-hidden="true">#</a> script</h2><p>script是用于Vben的动态配置环境变量的。</p><p>生成配置文件<br><code>build\\script\\buildConf.ts</code></p><p><code>yarn add fs-extra @types/fs-extra --dev</code></p><div class="language-js"><pre><code><span class="token keyword">import</span> fs<span class="token punctuation">,</span> <span class="token punctuation">{</span> writeFileSync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;fs-extra&#39;</span><span class="token punctuation">;</span>\n <span class="token comment">// ↓创建dist文件夹</span>\n  fs<span class="token punctuation">.</span><span class="token function">mkdirp</span><span class="token punctuation">(</span><span class="token function">getRootPath</span><span class="token punctuation">(</span><span class="token constant">OUTPUT_DIR</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">// ↓将字符串写入到dist文件下的指定JS文件名的文件中</span>\n  <span class="token function">writeFileSync</span><span class="token punctuation">(</span><span class="token function">getRootPath</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token constant">OUTPUT_DIR</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>configFileName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span> configStr<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">runBuildConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ↓获取我们可以配置的环境变量对象</span>\n  <span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token function">getEnvConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">// ↓获取配置文件的JS名</span>\n  <span class="token keyword">const</span> configFileName <span class="token operator">=</span> <span class="token function">getConfigFileName</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token comment">// ↓创建文件</span>\n  <span class="token function">createConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span> config<span class="token punctuation">,</span> configName<span class="token operator">:</span> configFileName <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><a href="https://www.npmjs.com/package/yargs" target="_blank" rel="noopener noreferrer">yargs</a>：读取你执行的命令行命令中的参数选项。</p><div class="language-sh"><pre><code>yarn add yargs --dev\nyarn add @types/yargs --dev\n</code></pre></div><p>脚本触发文件 <code>build\\script\\postBuild.ts</code></p><p><a href="https://www.npmjs.com/package/esno" target="_blank" rel="noopener noreferrer">esno</a> 命令行执行一个TS文件</p><p>TypeScript / ESNext node runtime powered by esbuild</p><p>package.json</p><div class="language-js"><pre><code>    <span class="token string">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cross-env NODE_ENV=production vite build &amp;&amp; esno ./build/script/postBuild.ts&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;build:test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cross-env vite build --mode test &amp;&amp; esno ./build/script/postBuild.ts&quot;</span><span class="token punctuation">,</span>\n</code></pre></div><p>index.html注入配置文件</p><p><code>build\\vite\\plugin\\html.ts</code></p>',36);p.render=function(a,t,p,o,c,i){return n(),s("div",null,[e])};export default p;export{t as __pageData};