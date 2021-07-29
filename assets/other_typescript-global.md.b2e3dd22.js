import{o as n,c as s,a}from"./app.54a6f769.js";const e='{"title":"TS扩展全局变量类型推导","description":"","frontmatter":{},"headers":[{"level":2,"title":"noImplicitAny","slug":"noimplicitany"},{"level":2,"title":"References","slug":"references"}],"relativePath":"other/typescript-global.md","lastUpdated":1627551455974}',t={},o=a('<h1 id="ts扩展全局变量类型推导"><a class="header-anchor" href="#ts扩展全局变量类型推导" aria-hidden="true">#</a> TS扩展全局变量类型推导</h1><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>declare問題 修改 tsconfig.json</p></div><p>types\\global.d.ts <code>declare</code></p><blockquote><p>A &#39;declare&#39; modifier cannot be used in an already ambient context.ts(1038)</p></blockquote><p>这里的意思是我们在一个已经存在的模块中使用了declare，因为global作用域作用在全局，应该是一个内置的模块</p><p>tsconfig.json文件配置<code>skipLibCheck: true</code> <a href="https://www.typescriptlang.org/tsconfig#skipLibCheck" target="_blank" rel="noopener noreferrer">skipLibCheck链接</a>（vben中采用的方式）</p><p>tsconfig.json</p><div class="language-js"><pre><code><span class="token string">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token string">&quot;skipLibCheck&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>include中加入我们对全局可以引用的文件</p><div class="language-js"><pre><code>  <span class="token string">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token operator">...</span>\n    <span class="token string">&quot;types/**/*.d.ts&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;types/**/*.ts&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;vite.config.ts&quot;</span>\n  <span class="token punctuation">]</span>\n</code></pre></div><p>skipLibCheck的实际作用：启用它会阻止Typescript对整个导入的库进行类型检查。 相反，Typescript只会针对这些类型对您使用的代码进行类型检查。 skipLibCheck会降低类型检查的能力，理想情况下我们不会使用它。但是并不是每个库都提供完美的类型，因此跳过它可能会很好。</p><p>build\\generate\\generateModifyVars.ts</p><blockquote><p>Could not find a declaration file for module &#39;ant-design-vue/dist/theme&#39;</p></blockquote><div class="language-js"><pre><code>  <span class="token string">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token operator">...</span>\n    <span class="token string">&quot;build/**/*.ts&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;build/**/*.d.ts&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;vite.config.ts&quot;</span>\n  <span class="token punctuation">]</span>\n</code></pre></div><h2 id="noimplicitany"><a class="header-anchor" href="#noimplicitany" aria-hidden="true">#</a> noImplicitAny</h2><p>tsconfig.json</p><div class="language-js"><pre><code><span class="token string">&quot;noImplicitAny&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n</code></pre></div><p>noImplicitAny意思是是否不允許typescript編譯時隱性將沒有設定類型的變數設定為any。如果設定為true的話，如果typescript裡面有沒有設定類型的變數則會產生錯誤訊息</p><h2 id="references"><a class="header-anchor" href="#references" aria-hidden="true">#</a> References</h2><p><a href="https://sunboyzgz.github.io/2021/05/20/typescript-global/" target="_blank" rel="noopener noreferrer">TS扩展全局变量类型推导</a></p>',20);t.render=function(a,e,t,p,c,i){return n(),s("div",null,[o])};export default t;export{e as __pageData};
