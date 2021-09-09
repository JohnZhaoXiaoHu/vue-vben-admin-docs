import{o as s,c as a,a as n}from"./app.7716e933.js";const t='{"title":"package.json","description":"","frontmatter":{},"headers":[{"level":2,"title":"http-server","slug":"http-server"}],"relativePath":"dep/package.md","lastUpdated":1631172204159}',e={},p=n('<h1 id="package-json"><a class="header-anchor" href="#package-json" aria-hidden="true">#</a> package.json</h1><h2 id="http-server"><a class="header-anchor" href="#http-server" aria-hidden="true">#</a> <a href="https://www.npmjs.com/package/http-server" target="_blank" rel="noopener noreferrer">http-server</a></h2><p>项目编译之后的静态文件是不能直接本地访问的。因为本地访问使用的是<code>file://</code>协议。而<code>file://</code>不支持跨域和一些其他特性。比如JavaScript模块、PWA等等。</p><p>那么此时就需要换一种访问本地文件的方式了，就是让本地成为一个服务器。通过http来访问。</p><p><code>http-server</code>就可以实现以http形式访问本地文件的目的。</p><p><code>yarn add http-server -D</code></p><p>package.json</p><div class="language-js"><pre><code><span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  <span class="token string">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n    <span class="token string">&quot;test:gzip&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http-server dist --cors --gzip -c-1&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;test:br&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http-server dist --cors --brotli -c-1&quot;</span><span class="token punctuation">,</span>\n    <span class="token comment">// ...</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',8);e.render=function(n,t,e,o,r,c){return s(),a("div",null,[p])};export default e;export{t as __pageData};
