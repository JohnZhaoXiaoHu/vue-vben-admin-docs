import{o as t,c as a,a as n}from"./app.54a6f769.js";const s='{"title":"button 按钮","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":2,"title":"Props","slug":"props"}],"relativePath":"components/glob/button.md","lastUpdated":1627551455970}',o={},p=n('<h1 id="button-按钮"><a class="header-anchor" href="#button-按钮" aria-hidden="true">#</a> button 按钮</h1><p>二次封装按钮组件，且使用相同的组件名替换全局的<code>a-button</code>组件</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><ul><li>按钮不需要 import ,已经全局注册，直接使用 a-button 标签即可</li><li>如果是 Tsx 文件,需要手动 import</li></ul></div><h2 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>success<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>成功按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>error<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>错误按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>warning<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>警告按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="props"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><div class="tip custom-block"><p class="custom-block-title">提示</p><p><strong>保持</strong> <a href="https://2x.antdv.com/components/button-cn/" target="_blank" rel="noopener noreferrer">anv design button 组件</a> <strong>原有功能</strong>的情况下扩展以下属性</p></div><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>color</td><td><code>&#39;error&#39;,&#39;warning&#39;, &#39;success&#39;</code></td><td>-</td><td>按钮的颜色场景状态颜色，</td></tr><tr><td>preIcon</td><td><code>string</code></td><td>-</td><td>按钮文本前图标，参考 Icon 组件</td></tr><tr><td>postIcon</td><td><code>string</code></td><td>-</td><td>按钮文本后图标，参考 Icon 组件</td></tr><tr><td>iconSize</td><td><code>number</code></td><td><code>14</code></td><td>按钮图标大小</td></tr></tbody></table>',8);o.render=function(n,s,o,e,c,l){return t(),a("div",null,[p])};export default o;export{s as __pageData};