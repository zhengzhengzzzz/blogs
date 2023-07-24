const e=JSON.parse('{"key":"v-57010882","path":"/posts/iOS/system/NSError.html","title":"NSError","lang":"zh-CN","frontmatter":{"title":"NSError","date":"2018-05-31T00:00:00.000Z","category":["iOS"],"tag":["iOS"],"description":"前言 整理一下在iOS开发中NSError的错误代码 NSError NSError是系统错误信息类 初始化方法两个 // domain 不能为空 dict可以为空 - (instancetype)initWithDomain:(NSErrorDomain)domain code:(NSInteger)code userInfo:(nullable NSDictionary *)dict; + (instancetype)errorWithDomain:(NSErrorDomain)domain code:(NSInteger)code userInfo:(nullable NSDictionary *)dict;","head":[["meta",{"property":"og:url","content":"https://oragekk.me/blogs/posts/iOS/system/NSError.html"}],["meta",{"property":"og:site_name","content":"茜茜的博客"}],["meta",{"property":"og:title","content":"NSError"}],["meta",{"property":"og:description","content":"前言 整理一下在iOS开发中NSError的错误代码 NSError NSError是系统错误信息类 初始化方法两个 // domain 不能为空 dict可以为空 - (instancetype)initWithDomain:(NSErrorDomain)domain code:(NSInteger)code userInfo:(nullable NSDictionary *)dict; + (instancetype)errorWithDomain:(NSErrorDomain)domain code:(NSInteger)code userInfo:(nullable NSDictionary *)dict;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-24T08:54:35.000Z"}],["meta",{"property":"article:author","content":"茜茜"}],["meta",{"property":"article:tag","content":"iOS"}],["meta",{"property":"article:published_time","content":"2018-05-31T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-24T08:54:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"NSError\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-05-31T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-24T08:54:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"茜茜\\",\\"url\\":\\"https://orgaekk.me\\"}]}"]]},"headers":[{"level":2,"title":"NSError","slug":"nserror","link":"#nserror","children":[{"level":3,"title":"属性","slug":"属性","link":"#属性","children":[]},{"level":3,"title":"NSError错误code对照表","slug":"nserror错误code对照表","link":"#nserror错误code对照表","children":[]},{"level":3,"title":"有关网络请求失败的解释","slug":"有关网络请求失败的解释","link":"#有关网络请求失败的解释","children":[]}]}],"git":{"createdTime":1690188875000,"updatedTime":1690188875000,"contributors":[{"name":"Zzhgitup","email":"99540215+Zzhgitup@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":3.11,"words":934},"filePathRelative":"posts/iOS/system/NSError.md","localizedDate":"2018年5月31日","excerpt":"<blockquote>\\n<p>前言</p>\\n<p>整理一下在iOS开发中NSError的错误代码</p>\\n</blockquote>\\n<h2> NSError</h2>\\n<p>NSError是系统错误信息类</p>\\n<p>初始化方法两个</p>\\n<div class=\\"language-objc line-numbers-mode\\" data-ext=\\"objc\\"><pre class=\\"shiki one-dark-pro\\" style=\\"background-color: #282c34\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  </span><span style=\\"color: #7F848E; font-style: italic\\">// domain 不能为空 dict可以为空</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  </span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  - (</span><span style=\\"color: #C678DD\\">instancetype</span><span style=\\"color: #ABB2BF\\">)initWithDomain:(NSErrorDomain)domain code:(NSInteger)code userInfo:(nullable </span><span style=\\"color: #E5C07B\\">NSDictionary</span><span style=\\"color: #ABB2BF\\"> *)dict;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  + (</span><span style=\\"color: #C678DD\\">instancetype</span><span style=\\"color: #ABB2BF\\">)errorWithDomain:(NSErrorDomain)domain code:(NSInteger)code userInfo:(nullable </span><span style=\\"color: #E5C07B\\">NSDictionary</span><span style=\\"color: #ABB2BF\\"> *)dict;</span></span>\\n<span class=\\"line\\"></span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"Oragekk","license":"CC BY-NC-SA 4.0"},"autoDesc":true}');export{e as data};
