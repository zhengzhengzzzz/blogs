const e=JSON.parse('{"key":"v-b3a94540","path":"/posts/iOS/system/Reduced-App-%20volume.html","title":"减小iOS-App或者静态库体积","lang":"zh-CN","frontmatter":{"title":"减小iOS-App或者静态库体积","date":"2016-11-04T18:11:56.000Z","category":["iOS"],"tag":["iOS"],"description":"把打包好的.ipa 文件的后缀改为.zip 并解压。右键.appbundle 选择显示包内容。有些情况下，大一点的文件压缩后反而比小一点的文件压缩后的体积小，而我们真正关心的时候解压后的真实体积，所以一定要解压里面的资源文件，看解压后的 size。从 APP Store 下载的.ipa 文件要比自己本地打包的要大，因为 APP Store 对 ipa 包又做了加密处理。Xcode 的 Organizer window 的 Estimate Size 功能能估计本地打包文件从 APP Store 下载时的大小。根据优化的 28 定律和常识，首先当然是多媒体资源的体积啦。","head":[["meta",{"property":"og:url","content":"https://oragekk.me/blogs/posts/iOS/system/Reduced-App-%20volume.html"}],["meta",{"property":"og:site_name","content":"茜茜的博客"}],["meta",{"property":"og:title","content":"减小iOS-App或者静态库体积"}],["meta",{"property":"og:description","content":"把打包好的.ipa 文件的后缀改为.zip 并解压。右键.appbundle 选择显示包内容。有些情况下，大一点的文件压缩后反而比小一点的文件压缩后的体积小，而我们真正关心的时候解压后的真实体积，所以一定要解压里面的资源文件，看解压后的 size。从 APP Store 下载的.ipa 文件要比自己本地打包的要大，因为 APP Store 对 ipa 包又做了加密处理。Xcode 的 Organizer window 的 Estimate Size 功能能估计本地打包文件从 APP Store 下载时的大小。根据优化的 28 定律和常识，首先当然是多媒体资源的体积啦。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-24T08:54:35.000Z"}],["meta",{"property":"article:author","content":"茜茜"}],["meta",{"property":"article:tag","content":"iOS"}],["meta",{"property":"article:published_time","content":"2016-11-04T18:11:56.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-24T08:54:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"减小iOS-App或者静态库体积\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2016-11-04T18:11:56.000Z\\",\\"dateModified\\":\\"2023-07-24T08:54:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"茜茜\\",\\"url\\":\\"https://orgaekk.me\\"}]}"]]},"headers":[{"level":2,"title":"图片","slug":"图片","link":"#图片","children":[]},{"level":2,"title":"音频","slug":"音频","link":"#音频","children":[]},{"level":2,"title":"视频","slug":"视频","link":"#视频","children":[]},{"level":2,"title":"Assets","slug":"assets","link":"#assets","children":[]},{"level":2,"title":"编译设置","slug":"编译设置","link":"#编译设置","children":[]},{"level":2,"title":"其他","slug":"其他","link":"#其他","children":[]},{"level":2,"title":"编译选项","slug":"编译选项","link":"#编译选项","children":[{"level":3,"title":"第三方库统计","slug":"第三方库统计","link":"#第三方库统计","children":[]},{"level":3,"title":"ARC->MRC","slug":"arc-mrc","link":"#arc-mrc","children":[]},{"level":3,"title":"无用代码","slug":"无用代码","link":"#无用代码","children":[]},{"level":3,"title":"类/方法名长度","slug":"类-方法名长度","link":"#类-方法名长度","children":[]},{"level":3,"title":"冗余字符串","slug":"冗余字符串","link":"#冗余字符串","children":[]},{"level":3,"title":"CheckList","slug":"checklist","link":"#checklist","children":[]}]}],"git":{"createdTime":1690188875000,"updatedTime":1690188875000,"contributors":[{"name":"Zzhgitup","email":"99540215+Zzhgitup@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":9.24,"words":2771},"filePathRelative":"posts/iOS/system/Reduced-App- volume.md","localizedDate":"2016年11月4日","excerpt":"<figure><img src=\\"https://zero-space.s3.amazonaws.com/photos/2e6cc210-e9a6-4a0f-9c05-2c4056a982acx840.jpg\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<blockquote>\\n<p>把打包好的.ipa 文件的后缀改为.zip 并解压。右键.appbundle 选择显示包内容。有些情况下，大一点的文件压缩后反而比小一点的文件压缩后的体积小，而我们真正关心的时候解压后的真实体积，所以一定要解压里面的资源文件，看解压后的 size。从 APP Store 下载的.ipa 文件要比自己本地打包的要大，因为 APP Store 对 ipa 包又做了加密处理。Xcode 的 Organizer window 的 Estimate Size 功能能估计本地打包文件从 APP Store 下载时的大小。根据优化的 28 定律和常识，首先当然是多媒体资源的体积啦。</p>\\n</blockquote>","copyright":{"author":"Oragekk","license":"CC BY-NC-SA 4.0"},"autoDesc":true}');export{e as data};
