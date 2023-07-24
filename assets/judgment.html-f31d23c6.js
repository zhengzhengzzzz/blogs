const s=JSON.parse(`{"key":"v-5a5bf9fb","path":"/posts/Web/JavaScript/judgment.html","title":"通过UserAgent判断设备","lang":"zh-CN","frontmatter":{"title":"通过UserAgent判断设备","icon":"mobile","date":"2017-02-07T00:00:00.000Z","category":["JavaScript"],"tag":["JavaScript","前端开发"],"description":"通过 js 判断 moblie 端和 pc 端进而加载不同的 css 或者 js 废话不多说，上代码 &lt;script type=\\"text/javascript\\"&gt; function browserRedirect() { var sUserAgent = navigator.userAgent.toLowerCase(); var bIsIpad = sUserAgent.match(/ipad/i) == \\"ipad\\"; var bIsIphoneOs = sUserAgent.match(/iphone os/i) == \\"iphone os\\"; var bIsMidp = sUserAgent.match(/midp/i) == \\"midp\\"; var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == \\"rv:1.2.3.4\\"; var bIsUc = sUserAgent.match(/ucweb/i) == \\"ucweb\\"; var bIsAndroid = sUserAgent.match(/android/i) == \\"android\\"; var bIsCE = sUserAgent.match(/windows ce/i) == \\"windows ce\\"; var bIsWM = sUserAgent.match(/windows mobile/i) == \\"windows mobile\\"; // document.writeln(\\"您的浏览设备为：\\"); if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) { // alert(\\"手机浏览！\\"); } else { // alert(\\"PC浏览！\\"); document.write(\\"&lt;script type='text/javascript' size='150' alpha='0.8' zIndex='-10' src='../js/dist/ribbon.js'&gt;&lt;\\\\/script&gt;\\"); document.write(\\"&lt;script type='text/javascript' color='0,188,212' opacity='0.7' zIndex='-2' count='99' src='http://cdn.bootcss.com/canvas-nest.js/1.0.1/canvas-nest.min.js'&gt;&lt;\\\\/script&gt;\\"); \\t} } browserRedirect(); &lt;/script&gt;","head":[["meta",{"property":"og:url","content":"https://oragekk.me/blogs/posts/Web/JavaScript/judgment.html"}],["meta",{"property":"og:site_name","content":"茜茜的博客"}],["meta",{"property":"og:title","content":"通过UserAgent判断设备"}],["meta",{"property":"og:description","content":"通过 js 判断 moblie 端和 pc 端进而加载不同的 css 或者 js 废话不多说，上代码 &lt;script type=\\"text/javascript\\"&gt; function browserRedirect() { var sUserAgent = navigator.userAgent.toLowerCase(); var bIsIpad = sUserAgent.match(/ipad/i) == \\"ipad\\"; var bIsIphoneOs = sUserAgent.match(/iphone os/i) == \\"iphone os\\"; var bIsMidp = sUserAgent.match(/midp/i) == \\"midp\\"; var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == \\"rv:1.2.3.4\\"; var bIsUc = sUserAgent.match(/ucweb/i) == \\"ucweb\\"; var bIsAndroid = sUserAgent.match(/android/i) == \\"android\\"; var bIsCE = sUserAgent.match(/windows ce/i) == \\"windows ce\\"; var bIsWM = sUserAgent.match(/windows mobile/i) == \\"windows mobile\\"; // document.writeln(\\"您的浏览设备为：\\"); if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) { // alert(\\"手机浏览！\\"); } else { // alert(\\"PC浏览！\\"); document.write(\\"&lt;script type='text/javascript' size='150' alpha='0.8' zIndex='-10' src='../js/dist/ribbon.js'&gt;&lt;\\\\/script&gt;\\"); document.write(\\"&lt;script type='text/javascript' color='0,188,212' opacity='0.7' zIndex='-2' count='99' src='http://cdn.bootcss.com/canvas-nest.js/1.0.1/canvas-nest.min.js'&gt;&lt;\\\\/script&gt;\\"); \\t} } browserRedirect(); &lt;/script&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-24T08:54:35.000Z"}],["meta",{"property":"article:author","content":"茜茜"}],["meta",{"property":"article:tag","content":"JavaScript"}],["meta",{"property":"article:tag","content":"前端开发"}],["meta",{"property":"article:published_time","content":"2017-02-07T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-24T08:54:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"通过UserAgent判断设备\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2017-02-07T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-24T08:54:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"茜茜\\",\\"url\\":\\"https://orgaekk.me\\"}]}"]]},"headers":[{"level":2,"title":"废话不多说，上代码","slug":"废话不多说-上代码","link":"#废话不多说-上代码","children":[{"level":3,"title":"需要注意的是字符转义和引号嵌套的问题","slug":"需要注意的是字符转义和引号嵌套的问题","link":"#需要注意的是字符转义和引号嵌套的问题","children":[]}]}],"git":{"createdTime":1690188875000,"updatedTime":1690188875000,"contributors":[{"name":"Zzhgitup","email":"99540215+Zzhgitup@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":0.64,"words":191},"filePathRelative":"posts/Web/JavaScript/judgment.md","localizedDate":"2017年2月7日","excerpt":"<blockquote>\\n<p>通过 js 判断 moblie 端和 pc 端进而加载不同的 css 或者 js</p>\\n</blockquote>\\n<h2> 废话不多说，上代码</h2>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"shiki one-dark-pro\\" style=\\"background-color: #282c34\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color: #ABB2BF\\">&lt;</span><span style=\\"color: #E06C75\\">script</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66; font-style: italic\\">type</span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #98C379\\">\\"text/javascript\\"</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">function browserRedirect() </span><span style=\\"color: #C678DD\\">{</span></span>\\n<span class=\\"line\\"><span style=\\"color: #E06C75\\">var</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">sUserAgent</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">navigator</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #E5C07B\\">userAgent</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #61AFEF\\">toLowerCase</span><span style=\\"color: #ABB2BF\\">();</span></span>\\n<span class=\\"line\\"><span style=\\"color: #E06C75\\">var</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">bIsIpad</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">sUserAgent</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #61AFEF\\">match</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #E06C75\\">/ipad/</span><span style=\\"color: #C678DD\\">i</span><span style=\\"color: #ABB2BF\\">) </span><span style=\\"color: #56B6C2\\">==</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">\\"ipad\\"</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #E06C75\\">var</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">bIsIphoneOs</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">sUserAgent</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #61AFEF\\">match</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #E06C75\\">/iphone os/</span><span style=\\"color: #C678DD\\">i</span><span style=\\"color: #ABB2BF\\">) </span><span style=\\"color: #56B6C2\\">==</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">\\"iphone os\\"</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #E06C75\\">var</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">bIsMidp</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">sUserAgent</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #61AFEF\\">match</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #E06C75\\">/midp/</span><span style=\\"color: #C678DD\\">i</span><span style=\\"color: #ABB2BF\\">) </span><span style=\\"color: #56B6C2\\">==</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">\\"midp\\"</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #E06C75\\">var</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">bIsUc7</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">sUserAgent</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #61AFEF\\">match</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #E06C75\\">/rv:1.2.3.4/</span><span style=\\"color: #C678DD\\">i</span><span style=\\"color: #ABB2BF\\">) </span><span style=\\"color: #56B6C2\\">==</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">\\"rv:1.2.3.4\\"</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #E06C75\\">var</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">bIsUc</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">sUserAgent</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #61AFEF\\">match</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #E06C75\\">/ucweb/</span><span style=\\"color: #C678DD\\">i</span><span style=\\"color: #ABB2BF\\">) </span><span style=\\"color: #56B6C2\\">==</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">\\"ucweb\\"</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #E06C75\\">var</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">bIsAndroid</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">sUserAgent</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #61AFEF\\">match</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #E06C75\\">/android/</span><span style=\\"color: #C678DD\\">i</span><span style=\\"color: #ABB2BF\\">) </span><span style=\\"color: #56B6C2\\">==</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">\\"android\\"</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #E06C75\\">var</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">bIsCE</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">sUserAgent</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #61AFEF\\">match</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #E06C75\\">/windows ce/</span><span style=\\"color: #C678DD\\">i</span><span style=\\"color: #ABB2BF\\">) </span><span style=\\"color: #56B6C2\\">==</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">\\"windows ce\\"</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #E06C75\\">var</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">bIsWM</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">sUserAgent</span><span style=\\"color: #ABB2BF\\">.</span><span style=\\"color: #61AFEF\\">match</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #E06C75\\">/windows mobile/</span><span style=\\"color: #C678DD\\">i</span><span style=\\"color: #ABB2BF\\">) </span><span style=\\"color: #56B6C2\\">==</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">\\"windows mobile\\"</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\">// document.writeln(\\"您的浏览设备为：\\");</span></span>\\n<span class=\\"line\\"><span style=\\"color: #61AFEF\\">if</span><span style=\\"color: #ABB2BF\\"> (</span><span style=\\"color: #E06C75\\">bIsIpad</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">||</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">bIsIphoneOs</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">||</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">bIsMidp</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">||</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">bIsUc7</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">||</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">bIsUc</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">||</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">bIsAndroid</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">||</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">bIsCE</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">||</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E06C75\\">bIsWM</span><span style=\\"color: #ABB2BF\\">) {</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\">// alert(\\"手机浏览！\\");</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">} </span><span style=\\"color: #E06C75\\">else</span><span style=\\"color: #ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color: #7F848E; font-style: italic\\">// alert(\\"PC浏览！\\");</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">document.write(</span><span style=\\"color: #98C379\\">\\"&lt;script type='text/javascript' size='150' alpha='0.8' zIndex='-10' src='../js/dist/ribbon.js'&gt;&lt;</span><span style=\\"color: #56B6C2\\">\\\\/</span><span style=\\"color: #98C379\\">script&gt;\\"</span><span style=\\"color: #E06C75\\">);</span></span>\\n<span class=\\"line\\"><span style=\\"color: #E06C75\\">document.write(</span><span style=\\"color: #98C379\\">\\"&lt;script type='text/javascript' color='0,188,212' opacity='0.7' zIndex='-2' count='99' src='http://cdn.bootcss.com/canvas-nest.js/1.0.1/canvas-nest.min.js'&gt;&lt;</span><span style=\\"color: #56B6C2\\">\\\\/</span><span style=\\"color: #98C379\\">script&gt;\\"</span><span style=\\"color: #E06C75\\">);</span></span>\\n<span class=\\"line\\"><span style=\\"color: #E06C75\\">\\t}</span></span>\\n<span class=\\"line\\"><span style=\\"color: #E06C75\\">}</span></span>\\n<span class=\\"line\\"><span style=\\"color: #E06C75\\">browserRedirect();</span></span>\\n<span class=\\"line\\"><span style=\\"color: #E06C75\\">&lt;/script&gt;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"></span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"Oragekk","license":"CC BY-NC-SA 4.0"},"autoDesc":true}`);export{s as data};
