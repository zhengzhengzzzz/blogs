const e=JSON.parse('{"key":"v-2dd751d5","path":"/posts/iOS/source/YYMemoryCache.html","title":"YYMemoryCache 源码分析","lang":"zh-CN","frontmatter":{"title":"YYMemoryCache 源码分析","date":"2019-04-26T16:08:25.000Z","category":["iOS"],"tag":["iOS"],"description":"YYMemoryCache 源码分析 提示 YYMemoryCache 是内存缓存，所以存取速度非常快，主要用到两种数据结构的 LRU 淘汰算法 LRU 淘汰算法 LRU（Least recently used，最近最少使用）算法根据数据的历史访问记录来进行淘汰数据，其核心思想是“如果数据最近被访问过，那么将来被访问的几率也更高”。 最常见的实现是使用一个链表保存缓存数据 【命中率】 当存在热点数据时，LRU 的效率很好，但偶发性的、周期性的批量操作会导致 LRU 命中率急剧下降，缓存污染情况比较严重。 Cache 的容量是有限的，当 Cache 的空间都被占满后，如果再次发生缓存失效，就必须选择一个缓存块来替换掉。LRU 法是依据各块使用的情况， 总是选择那个最长时间未被使用的块替换。这种方法比较好地反映了程序局部性规律","head":[["meta",{"property":"og:url","content":"https://oragekk.me/blogs/posts/iOS/source/YYMemoryCache.html"}],["meta",{"property":"og:site_name","content":"茜茜的博客"}],["meta",{"property":"og:title","content":"YYMemoryCache 源码分析"}],["meta",{"property":"og:description","content":"YYMemoryCache 源码分析 提示 YYMemoryCache 是内存缓存，所以存取速度非常快，主要用到两种数据结构的 LRU 淘汰算法 LRU 淘汰算法 LRU（Least recently used，最近最少使用）算法根据数据的历史访问记录来进行淘汰数据，其核心思想是“如果数据最近被访问过，那么将来被访问的几率也更高”。 最常见的实现是使用一个链表保存缓存数据 【命中率】 当存在热点数据时，LRU 的效率很好，但偶发性的、周期性的批量操作会导致 LRU 命中率急剧下降，缓存污染情况比较严重。 Cache 的容量是有限的，当 Cache 的空间都被占满后，如果再次发生缓存失效，就必须选择一个缓存块来替换掉。LRU 法是依据各块使用的情况， 总是选择那个最长时间未被使用的块替换。这种方法比较好地反映了程序局部性规律"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-24T08:54:35.000Z"}],["meta",{"property":"article:author","content":"茜茜"}],["meta",{"property":"article:tag","content":"iOS"}],["meta",{"property":"article:published_time","content":"2019-04-26T16:08:25.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-24T08:54:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"YYMemoryCache 源码分析\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-04-26T16:08:25.000Z\\",\\"dateModified\\":\\"2023-07-24T08:54:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"茜茜\\",\\"url\\":\\"https://orgaekk.me\\"}]}"]]},"headers":[],"git":{"createdTime":1690188875000,"updatedTime":1690188875000,"contributors":[{"name":"Zzhgitup","email":"99540215+Zzhgitup@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":4.74,"words":1422},"filePathRelative":"posts/iOS/source/YYMemoryCache.md","localizedDate":"2019年4月26日","excerpt":"<h1> YYMemoryCache 源码分析</h1>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">提示</p>\\n<p>YYMemoryCache 是内存缓存，所以存取速度非常快，主要用到两种数据结构的 LRU 淘汰算法</p>\\n</div>\\n<ol>\\n<li>\\n<p>LRU 淘汰算法</p>\\n<blockquote>\\n<p>LRU（Least recently used，最近最少使用）算法根据数据的历史访问记录来进行淘汰数据，其核心思想是“如果数据最近被访问过，那么将来被访问的几率也更高”。</p>\\n<p>最常见的实现是使用一个链表保存缓存数据</p>\\n<p>【命中率】</p>\\n<p>当存在热点数据时，LRU 的效率很好，但偶发性的、周期性的批量操作会导致 LRU 命中率急剧下降，缓存污染情况比较严重。</p>\\n<p>Cache 的容量是有限的，当 Cache 的空间都被占满后，如果再次发生缓存失效，就必须选择一个缓存块来替换掉。LRU 法是依据各块使用的情况， 总是选择那个最长时间未被使用的块替换。这种方法比较好地反映了程序局部性规律</p>\\n</blockquote>\\n</li>\\n</ol>\\n","copyright":{"author":"Oragekk","license":"CC BY-NC-SA 4.0"},"autoDesc":true}');export{e as data};
