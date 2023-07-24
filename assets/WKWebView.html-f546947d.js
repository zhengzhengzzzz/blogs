const e=JSON.parse('{"key":"v-37265f5d","path":"/posts/iOS/system/WKWebView.html","title":"WKWebView使用及自适应高度","lang":"zh-CN","frontmatter":{"title":"WKWebView使用及自适应高度","date":"2017-05-26T15:47:40.000Z","category":["iOS"],"tag":["iOS"],"description":"记录一下 iOS8 之后的新控件 WKWebView，用以替代之前的 UIWebView，因为需求是在 TableView 的 Cell 中放一个 WebView。就产生了滑动手势冲突，为了解决这个问题就需要让 webView 高度自适应 一、新特性 在性能、稳定性、功能方面有很大的提升，最明显的就是内存占用降低了很多。 允许 JavaScript 的 Nitro 库加载并使用（UIWebView 中限制） 支持了更多的 HTML5 特性； 高达 60fps 的滚动刷新率以及内置手势（支持右滑返回）； 将 UIWebViewDelegate 与 UIWebView 重构成了 14 类与 3 个协议（查看苹果官方文档）；","head":[["meta",{"property":"og:url","content":"https://oragekk.me/blogs/posts/iOS/system/WKWebView.html"}],["meta",{"property":"og:site_name","content":"茜茜的博客"}],["meta",{"property":"og:title","content":"WKWebView使用及自适应高度"}],["meta",{"property":"og:description","content":"记录一下 iOS8 之后的新控件 WKWebView，用以替代之前的 UIWebView，因为需求是在 TableView 的 Cell 中放一个 WebView。就产生了滑动手势冲突，为了解决这个问题就需要让 webView 高度自适应 一、新特性 在性能、稳定性、功能方面有很大的提升，最明显的就是内存占用降低了很多。 允许 JavaScript 的 Nitro 库加载并使用（UIWebView 中限制） 支持了更多的 HTML5 特性； 高达 60fps 的滚动刷新率以及内置手势（支持右滑返回）； 将 UIWebViewDelegate 与 UIWebView 重构成了 14 类与 3 个协议（查看苹果官方文档）；"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-24T08:54:35.000Z"}],["meta",{"property":"article:author","content":"茜茜"}],["meta",{"property":"article:tag","content":"iOS"}],["meta",{"property":"article:published_time","content":"2017-05-26T15:47:40.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-24T08:54:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"WKWebView使用及自适应高度\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2017-05-26T15:47:40.000Z\\",\\"dateModified\\":\\"2023-07-24T08:54:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"茜茜\\",\\"url\\":\\"https://orgaekk.me\\"}]}"]]},"headers":[{"level":2,"title":"一、新特性","slug":"一、新特性","link":"#一、新特性","children":[]},{"level":2,"title":"二、初始化","slug":"二、初始化","link":"#二、初始化","children":[]},{"level":2,"title":"三、WKWebView 代理方法","slug":"三、wkwebview-代理方法","link":"#三、wkwebview-代理方法","children":[]},{"level":2,"title":"四、WKWebView 加载 JS","slug":"四、wkwebview-加载-js","link":"#四、wkwebview-加载-js","children":[]},{"level":2,"title":"五、作为 cell 自适应行高","slug":"五、作为-cell-自适应行高","link":"#五、作为-cell-自适应行高","children":[]},{"level":2,"title":"六、小结","slug":"六、小结","link":"#六、小结","children":[]}],"git":{"createdTime":1690188875000,"updatedTime":1690188875000,"contributors":[{"name":"Zzhgitup","email":"99540215+Zzhgitup@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":4.11,"words":1233},"filePathRelative":"posts/iOS/system/WKWebView.md","localizedDate":"2017年5月26日","excerpt":"<blockquote>\\n<p>记录一下 iOS8 之后的新控件 WKWebView，用以替代之前的 UIWebView，因为需求是在 TableView 的 Cell 中放一个 WebView。就产生了滑动手势冲突，为了解决这个问题就需要让 webView 高度自适应</p>\\n</blockquote>\\n<h2> 一、新特性</h2>\\n<ul>\\n<li>在性能、稳定性、功能方面有很大的提升，最明显的就是内存占用降低了很多。</li>\\n<li>允许 JavaScript 的 Nitro 库加载并使用（UIWebView 中限制）</li>\\n<li>支持了更多的 HTML5 特性；</li>\\n<li>高达 60fps 的滚动刷新率以及内置手势（支持右滑返回）；</li>\\n<li>将 UIWebViewDelegate 与 UIWebView 重构成了 14 类与 3 个协议（<a href=\\"https://developer.apple.com/reference/webkit\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">查看苹果官方文档</a>）；</li>\\n</ul>","copyright":{"author":"Oragekk","license":"CC BY-NC-SA 4.0"},"autoDesc":true}');export{e as data};
