import{_ as r,r as n,o as i,c as s,a as e,b as o,d as a,e as l}from"./app-6d1bfb61.js";const c={},d={href:"https://disqus.com/",target:"_blank",rel:"noopener noreferrer"},h={href:"http://changyan.kuaizhan.com/static/help/",target:"_blank",rel:"noopener noreferrer"},u=l('<h2 id="迁移过程" tabindex="-1"><a class="header-anchor" href="#迁移过程" aria-hidden="true">#</a> 迁移过程</h2><h3 id="_1-首先为了不丢失原有评论-导出多说评论" tabindex="-1"><a class="header-anchor" href="#_1-首先为了不丢失原有评论-导出多说评论" aria-hidden="true">#</a> 1.首先为了不丢失原有评论，导出多说评论</h3><figure><img src="http://i2.muimg.com/567571/f0d7b62ff410decf.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_2-文件转换" tabindex="-1"><a class="header-anchor" href="#_2-文件转换" aria-hidden="true">#</a> 2.文件转换</h3>',4),m={href:"https://github.com/JamesPan/duoshuo-migrator",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/JamesPan/duoshuo-migrator/blob/master/duoshuo-migrator.py?raw=true",target:"_blank",rel:"noopener noreferrer"},g=e("br",null,null,-1),p=e("img",{src:"http://i2.muimg.com/567571/f98e1281fec1cdd7.png",alt:"",loading:"lazy"},null,-1),f=e("li",null,[o("执行 "),e("code",null,"python duoshuo-migrator.py -i ~/Desktop/export.json -o disqus.xml"),o("命令"),e("br"),e("img",{src:"http://i2.muimg.com/567571/8e27bcddc31c29b2.png",alt:"",loading:"lazy"})],-1),b=e("li",null,[o("将转换完成文件导入"),e("br"),e("img",{src:"http://i2.muimg.com/567571/213761ad8cf62886.png",alt:"",loading:"lazy"})],-1);function x(k,y){const t=n("ExternalLinkIcon");return i(),s("div",null,[e("blockquote",null,[e("p",null,[o("由于多说评论系统将于 6 月 1 日下线，所以准备迁移至"),e("a",d,[o("disqus"),a(t)]),o("，相比较的话对于国内环境还是多说好用一点，毕竟加载快，支持各大媒体的分享，也不用小伙伴们翻墙；而 disqus 分享也只支持 Facebook 和 twitter。。PS:貌似现在又被墙了，以后有时间再换吧，目前就先这样，国内据说"),e("a",h,[o("畅言"),a(t)]),o("还不错")])]),u,e("ul",null,[e("li",null,[o("由于 disqus 不支持多说导出的.json 文件，所以需要进行转换为 xml 文件，此处使用 github 上的轮子"),e("a",m,[o("JamesPan/duoshuo-migrator"),a(t)])]),e("li",null,[o("使用步骤 "),e("ol",null,[e("li",null,[o("下载"),e("a",_,[o("duoshuo-migrator.py"),a(t)]),o("并安装依赖"),g,p]),f,b])])])])}const z=r(c,[["render",x],["__file","disqus.html.vue"]]);export{z as default};
