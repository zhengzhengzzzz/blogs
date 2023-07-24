import{_ as o,o as e,c as a,e as i}from"./app-6d1bfb61.js";const c={},d=i('<blockquote><p>之前采用正常的 <code>sudo gem install cocoapods</code>更新 cocoapods 版本一直不成功，下面为和我遇到同样问题的兄弟们提供一个解决办法</p></blockquote><h4 id="先切换-gem-源" tabindex="-1"><a class="header-anchor" href="#先切换-gem-源" aria-hidden="true">#</a> 先切换 gem 源</h4><ul><li><code>gem sources --remove https://rubygems.org/</code></li><li><code>gem source -a https://gems.ruby-china.org</code></li><li>查看是否切换成功 <code>gem source -l</code><br> 如果出现下图这样的就说明切换成功了, 如果还是官方的源, 请手动重启电脑尝试<br><img src="http://upload-images.jianshu.io/upload_images/2076247-365912ab78be4906.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="" loading="lazy"></li></ul><h4 id="接下来就可以开始升级了-cocoapods-了" tabindex="-1"><a class="header-anchor" href="#接下来就可以开始升级了-cocoapods-了" aria-hidden="true">#</a> 接下来就可以开始升级了 cocoapods 了</h4><ul><li><code>sudo gem install -n /usr/local/bin cocoapods --pre</code></li><li>是的, 你没看错是这个命令, 然后终端会出现一大推东西, 别管他, 最后停下来是这样的就差不多了<br><img src="http://upload-images.jianshu.io/upload_images/2076247-81b6046594fe772b.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="" loading="lazy"></li><li>然后查看版本<code>pod --version</code><br> 出现 1.1.1，恭喜你已经安装成功了</li><li>接下来设置 pod 仓库 <code>pod setup</code></li></ul><p><img src="http://upload-images.jianshu.io/upload_images/2076247-cafa12def948db48.png?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="Paste_Image.png" loading="lazy"><br> 此处需要耐心等待，根据网络情况完成时间长短不一。<br> 可以在终端中 CD 到<code>~/.cocoapods</code>目录中输入 <code>du -sh *</code>查看下载进度</p><h3 id="至此-已经升级到-cocoapods1-1-1-了-可以愉快的把玩-swift3-0-的一些三方库了" tabindex="-1"><a class="header-anchor" href="#至此-已经升级到-cocoapods1-1-1-了-可以愉快的把玩-swift3-0-的一些三方库了" aria-hidden="true">#</a> 至此, 已经升级到 cocoapods1.1.1 了, 可以愉快的把玩 Swift3.0 的一些三方库了</h3>',7),s=[d];function t(r,l){return e(),a("div",null,s)}const n=o(c,[["render",t],["__file","Update-Cocoapods.html.vue"]]);export{n as default};
