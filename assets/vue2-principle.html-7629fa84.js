const e=JSON.parse('{"key":"v-5ab36d76","path":"/posts/Web/Vue/vue2-principle.html","title":"Vue2响应式原理解析","lang":"zh-CN","frontmatter":{"title":"Vue2响应式原理解析","icon":"customize","date":"2023-05-16T00:00:00.000Z","star":true,"headerDepth":3,"cover":"https://w.wallhaven.cc/full/5w/wallhaven-5wmyo8.jpg","category":["Vue"],"tag":["Vue响应式"],"description":"前言 首先要知道vue2 是2013年 基于 ES5开发出来的，我们常说的重渲染就是重新运行render函数 vue2 的响应式原理是利⽤ES5 的⼀个 API ，Object.defineProperty()对数据进⾏劫持结合发布订阅模式的⽅式来实现的。","head":[["meta",{"property":"og:url","content":"https://oragekk.me/blogs/posts/Web/Vue/vue2-principle.html"}],["meta",{"property":"og:site_name","content":"茜茜的博客"}],["meta",{"property":"og:title","content":"Vue2响应式原理解析"}],["meta",{"property":"og:description","content":"前言 首先要知道vue2 是2013年 基于 ES5开发出来的，我们常说的重渲染就是重新运行render函数 vue2 的响应式原理是利⽤ES5 的⼀个 API ，Object.defineProperty()对数据进⾏劫持结合发布订阅模式的⽅式来实现的。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://w.wallhaven.cc/full/5w/wallhaven-5wmyo8.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-24T08:54:35.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Vue2响应式原理解析"}],["meta",{"property":"article:author","content":"茜茜"}],["meta",{"property":"article:tag","content":"Vue响应式"}],["meta",{"property":"article:published_time","content":"2023-05-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-24T08:54:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Vue2响应式原理解析\\",\\"image\\":[\\"https://w.wallhaven.cc/full/5w/wallhaven-5wmyo8.jpg\\"],\\"datePublished\\":\\"2023-05-16T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-24T08:54:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"茜茜\\",\\"url\\":\\"https://orgaekk.me\\"}]}"]]},"headers":[{"level":2,"title":"1. 思路","slug":"_1-思路","link":"#_1-思路","children":[]},{"level":2,"title":"2. 原理","slug":"_2-原理","link":"#_2-原理","children":[]},{"level":2,"title":"3. 深入了解","slug":"_3-深入了解","link":"#_3-深入了解","children":[]},{"level":2,"title":"4. Observer","slug":"_4-observer","link":"#_4-observer","children":[{"level":3,"title":"4.1. 手动转换响应式对象","slug":"_4-1-手动转换响应式对象","link":"#_4-1-手动转换响应式对象","children":[]},{"level":3,"title":"4.2. data","slug":"_4-2-data","link":"#_4-2-data","children":[]},{"level":3,"title":"4.3. 「动态添加或删除属性」","slug":"_4-3-「动态添加或删除属性」","link":"#_4-3-「动态添加或删除属性」","children":[]},{"level":3,"title":"4.4. 「关于数组」","slug":"_4-4-「关于数组」","link":"#_4-4-「关于数组」","children":[]}]},{"level":2,"title":"5. Dep","slug":"_5-dep","link":"#_5-dep","children":[]},{"level":2,"title":"6. watcher","slug":"_6-watcher","link":"#_6-watcher","children":[]},{"level":2,"title":"7. Scheduler","slug":"_7-scheduler","link":"#_7-scheduler","children":[]},{"level":2,"title":"8. 异步更新队列","slug":"_8-异步更新队列","link":"#_8-异步更新队列","children":[]},{"level":2,"title":"9. 总流程图","slug":"_9-总流程图","link":"#_9-总流程图","children":[]}],"git":{"createdTime":1690188875000,"updatedTime":1690188875000,"contributors":[{"name":"Zzhgitup","email":"99540215+Zzhgitup@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":11.18,"words":3353},"filePathRelative":"posts/Web/Vue/vue2-principle.md","localizedDate":"2023年5月16日","excerpt":"<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">前言</p>\\n<p>首先要知道vue2 是2013年 基于 ES5开发出来的，我们常说的重渲染就是重新运行<code>render</code>函数</p>\\n<p>vue2 的响应式原理是利⽤ES5 的⼀个 API ，<code>Object.defineProperty()</code>对数据进⾏劫持结合发布订阅模式的⽅式来实现的。</p>\\n</div>\\n","copyright":{"author":"Oragekk","license":"CC BY-NC-SA 4.0"},"autoDesc":true}');export{e as data};