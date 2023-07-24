import{_ as l,r as e,o,c as p,a as s,b as n,d as i,e as c}from"./app-6d1bfb61.js";const t={},r=s("blockquote",null,[s("p",null,"记录一下 iOS8 之后的新控件 WKWebView，用以替代之前的 UIWebView，因为需求是在 TableView 的 Cell 中放一个 WebView。就产生了滑动手势冲突，为了解决这个问题就需要让 webView 高度自适应")],-1),B=s("h2",{id:"一、新特性",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#一、新特性","aria-hidden":"true"},"#"),n(" 一、新特性")],-1),d=s("li",null,"在性能、稳定性、功能方面有很大的提升，最明显的就是内存占用降低了很多。",-1),y=s("li",null,"允许 JavaScript 的 Nitro 库加载并使用（UIWebView 中限制）",-1),v=s("li",null,"支持了更多的 HTML5 特性；",-1),F=s("li",null,"高达 60fps 的滚动刷新率以及内置手势（支持右滑返回）；",-1),b={href:"https://developer.apple.com/reference/webkit",target:"_blank",rel:"noopener noreferrer"},u=c(`<h2 id="二、初始化" tabindex="-1"><a class="header-anchor" href="#二、初始化" aria-hidden="true">#</a> 二、初始化</h2><ul><li>首先需要引入 WebKit 库</li></ul><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#C678DD;">#import</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;WebKit/WebKit.h&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>采用 configuration 的方式初始化（可选）</li></ul><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">- (WKWebView *)webView {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#56B6C2;">!</span><span style="color:#ABB2BF;">_webView) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        WKWebViewConfiguration *config </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [WKWebViewConfiguration </span><span style="color:#61AFEF;">new</span><span style="color:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">//初始化偏好设置属性：preferences</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">config</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">preferences</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [WKPreferences </span><span style="color:#61AFEF;">new</span><span style="color:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">//The minimum font size in points default is 0;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">config</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">preferences</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">minimumFontSize</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">10</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">//是否支持JavaScript</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">config</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">preferences</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">javaScriptEnabled</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">YES</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">//不通过用户交互，是否可以打开窗口</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">config</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">preferences</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">javaScriptCanOpenWindowsAutomatically</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">NO</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        _webView </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [[WKWebView </span><span style="color:#61AFEF;">alloc</span><span style="color:#ABB2BF;">]initWithFrame:</span><span style="color:#61AFEF;">CGRectMake</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">self</span><span style="color:#ABB2BF;">.view.width, </span><span style="color:#E5C07B;">self</span><span style="color:#ABB2BF;">.view.height) </span><span style="color:#61AFEF;">configuration:</span><span style="color:#ABB2BF;">config];</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">_webView</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">UIDelegate</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#E5C07B;">self</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">_webView</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">navigationDelegate</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">self</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">// 此处因为高度自适应所以不应该让webview内部可以滚动</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">_webView</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">scrollView</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">scrollEnabled</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">NO</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> _webView;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>加载网页</li></ul><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">WKWebView *webView </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [[WKWebView </span><span style="color:#61AFEF;">alloc</span><span style="color:#ABB2BF;">] </span><span style="color:#61AFEF;">initWithFrame:</span><span style="color:#E5C07B;">self</span><span style="color:#ABB2BF;">.view.bounds];</span></span>
<span class="line"><span style="color:#ABB2BF;">[webView </span><span style="color:#61AFEF;">loadRequest:</span><span style="color:#ABB2BF;">[</span><span style="color:#E5C07B;">NSURLRequest</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">requestWithURL:</span><span style="color:#ABB2BF;">[</span><span style="color:#E5C07B;">NSURL</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">URLWithString:</span><span style="color:#98C379;">@&quot;http://m.baidu.com&quot;</span><span style="color:#ABB2BF;">]]];</span></span>
<span class="line"><span style="color:#ABB2BF;">[</span><span style="color:#E5C07B;">self</span><span style="color:#ABB2BF;">.view </span><span style="color:#61AFEF;">addSubview:</span><span style="color:#ABB2BF;">webView];</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、wkwebview-代理方法" tabindex="-1"><a class="header-anchor" href="#三、wkwebview-代理方法" aria-hidden="true">#</a> 三、WKWebView 代理方法</h2><p>1.WKNavigationDelegate</p><p>该代理提供的方法，可以用来追踪加载过程（页面开始加载、加载完成、加载失败）、决定是否执行跳转。</p><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 页面开始加载时调用</span></span>
<span class="line"><span style="color:#ABB2BF;">- (</span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;">)webView:(WKWebView *)webView didStartProvisionalNavigation:(WKNavigation *)navigation;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 当内容开始返回时调用</span></span>
<span class="line"><span style="color:#ABB2BF;">- (</span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;">)webView:(WKWebView *)webView didCommitNavigation:(WKNavigation *)navigation;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 页面加载完成之后调用</span></span>
<span class="line"><span style="color:#ABB2BF;">- (</span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;">)webView:(WKWebView *)webView didFinishNavigation:(WKNavigation *)navigation;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 页面加载失败时调用</span></span>
<span class="line"><span style="color:#ABB2BF;">- (</span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;">)webView:(WKWebView *)webView didFailProvisionalNavigation:(WKNavigation *)navigation;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>页面跳转的代理方法有三种，分为（收到跳转与决定是否跳转两种）</p><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 接收到服务器跳转请求之后调用</span></span>
<span class="line"><span style="color:#ABB2BF;">- (</span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;">)webView:(WKWebView *)webView didReceiveServerRedirectForProvisionalNavigation:(WKNavigation *)navigation;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 在收到响应后，决定是否跳转</span></span>
<span class="line"><span style="color:#ABB2BF;">- (</span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;">)webView:(WKWebView *)webView decidePolicyForNavigationResponse:(WKNavigationResponse *)navigationResponse decisionHandler:(</span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> (^)(WKNavigationResponsePolicy))decisionHandler;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 在发送请求之前，决定是否跳转</span></span>
<span class="line"><span style="color:#ABB2BF;">- (</span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;">)webView:(WKWebView *)webView decidePolicyForNavigationAction:(WKNavigationAction *)navigationAction decisionHandler:(</span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> (^)(WKNavigationActionPolicy))decisionHandler;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.WKUIDelegate</p><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 创建一个新的WebView</span></span>
<span class="line"><span style="color:#ABB2BF;">- (WKWebView *)webView:(WKWebView *)webView createWebViewWithConfiguration:(WKWebViewConfiguration *)configuration forNavigationAction:(WKNavigationAction *)navigationAction windowFeatures:(WKWindowFeatures *)windowFeatures;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>剩下三个代理方法全都是与界面弹出提示框相关的，针对于 web 界面的三种提示框（警告框、确认框、输入框）分别对应三种代理方法。下面只举了警告框的例子</p><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> *  web界面中有弹出警告框时调用</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> *</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> *  @param webView           实现该代理的webview</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> *  @param message           警告框中的内容</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> *  @param frame             主窗口</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> *  @param completionHandler 警告框消失调用</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#ABB2BF;">- (</span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;">)webView:(WKWebView *)webView runJavaScriptAlertPanelWithMessage:(</span><span style="color:#E5C07B;">NSString</span><span style="color:#ABB2BF;"> *)message initiatedByFrame:(</span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> (^)())completionHandler;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.WKScriptMessageHandler</p><p>这个协议中包含一个必须实现的方法，这个方法是提高 App 与 web 端交互的关键，它可以直接将接收到的 JS 脚本转为 OC 或 Swift 对象</p><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 从web界面中接收到一个脚本时调用</span></span>
<span class="line"><span style="color:#ABB2BF;">- (</span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;">)userContentController:(WKUserContentController *)userContentController didReceiveScriptMessage:(WKScriptMessage *)message;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、wkwebview-加载-js" tabindex="-1"><a class="header-anchor" href="#四、wkwebview-加载-js" aria-hidden="true">#</a> 四、WKWebView 加载 JS</h2><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// js代码</span></span>
<span class="line"><span style="color:#E5C07B;">NSString</span><span style="color:#ABB2BF;"> *js </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">@&quot;	var count = document.images.length;for (var i = 0; i &lt; count; i++) {var image = document.images[i];image.style.width=320;};window.alert(&#39;找到&#39; + count + &#39;张图&#39;);&quot;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 根据JS字符串初始化WKUserScript对象</span></span>
<span class="line"><span style="color:#ABB2BF;">WKUserScript *script </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [[WKUserScript </span><span style="color:#61AFEF;">alloc</span><span style="color:#ABB2BF;">] </span><span style="color:#61AFEF;">initWithSource:</span><span style="color:#ABB2BF;">js </span><span style="color:#61AFEF;">injectionTime:</span><span style="color:#ABB2BF;">WKUserScriptInjectionTimeAtDocumentEnd </span><span style="color:#61AFEF;">forMainFrameOnly:</span><span style="color:#D19A66;">YES</span><span style="color:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 根据生成的WKUserScript对象，初始化WKWebViewConfiguration</span></span>
<span class="line"><span style="color:#ABB2BF;">WKWebViewConfiguration *config </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [[WKWebViewConfiguration </span><span style="color:#61AFEF;">alloc</span><span style="color:#ABB2BF;">] </span><span style="color:#61AFEF;">init</span><span style="color:#ABB2BF;">]; [config.userContentController </span><span style="color:#61AFEF;">addUserScript:</span><span style="color:#ABB2BF;">script]; _webView </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [[WKWebView </span><span style="color:#61AFEF;">alloc</span><span style="color:#ABB2BF;">] </span><span style="color:#61AFEF;">initWithFrame:</span><span style="color:#E5C07B;">self</span><span style="color:#ABB2BF;">.view.bounds </span><span style="color:#61AFEF;">configuration:</span><span style="color:#ABB2BF;">config];</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// 加载html字符串</span></span>
<span class="line"><span style="color:#ABB2BF;">[_webView </span><span style="color:#61AFEF;">loadHTMLString:</span><span style="color:#98C379;">@&quot;&lt;head&gt;&lt;/head&gt;&lt;img src=&#39;http://www.nsu.edu.cn/v/2014v3/img/background/3.jpg&#39; /&gt;&quot;</span><span style="color:#61AFEF;">baseURL:</span><span style="color:#D19A66;">nil</span><span style="color:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#ABB2BF;">[</span><span style="color:#E5C07B;">self</span><span style="color:#ABB2BF;">.view </span><span style="color:#61AFEF;">addSubview:</span><span style="color:#ABB2BF;">_webView];</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、作为-cell-自适应行高" tabindex="-1"><a class="header-anchor" href="#五、作为-cell-自适应行高" aria-hidden="true">#</a> 五、作为 cell 自适应行高</h2><figure><img src="https://storage2.cuntuku.com/2017/05/27/2.gif" alt="2.gif" tabindex="0" loading="lazy"><figcaption>2.gif</figcaption></figure><ul><li>在 didFinishNavigation 方法中获取行高，然后刷新表格，网上资料所说的获取 webview.scrollview.contentsize.height 本人测试不可行，此处采用调用 js 通过 ajax 获取高度</li></ul><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// 页面加载完成之后调用 此方法会调用多次</span></span>
<span class="line"><span style="color:#ABB2BF;">- (</span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;">)webView:(WKWebView *)webView didFinishNavigation:(null_unspecified WKNavigation *)navigation {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">__block</span><span style="color:#ABB2BF;"> CGFloat webViewHeight;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">self</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">height</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">webView</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">frame</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">size</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">height</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">//获取内容实际高度（像素）@&quot;document.getElementById(\\&quot;content\\&quot;).offsetHeight;&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">    [webView </span><span style="color:#61AFEF;">evaluateJavaScript:</span><span style="color:#98C379;">@&quot;document.body.scrollHeight&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">completionHandler:</span><span style="color:#ABB2BF;">^(</span><span style="color:#C678DD;">id</span><span style="color:#ABB2BF;"> _Nullable result,</span><span style="color:#E5C07B;">NSError</span><span style="color:#ABB2BF;"> * _Nullable error) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">// 此处js字符串采用scrollHeight而不是offsetHeight是因为后者并获取不到高度，看参考资料说是对于加载html字符串的情况下使用后者可以，但如果是和我一样直接加载原站内容使用前者更合适</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">//获取页面高度，并重置webview的frame</span></span>
<span class="line"><span style="color:#ABB2BF;">        webViewHeight </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [result </span><span style="color:#61AFEF;">doubleValue</span><span style="color:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#56B6C2;">NSLog</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">@&quot;</span><span style="color:#D19A66;">%f</span><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;">,webViewHeight);</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#61AFEF;">dispatch_async</span><span style="color:#ABB2BF;">(</span><span style="color:#61AFEF;">dispatch_get_main_queue</span><span style="color:#ABB2BF;">(), ^{</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (webViewHeight </span><span style="color:#56B6C2;">!=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">self</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">height</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#E5C07B;">webView</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">frame</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">CGRectMake</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#E5C07B;">self</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">view</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">frame</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">size</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">width</span><span style="color:#ABB2BF;">, webViewHeight);</span></span>
<span class="line"><span style="color:#ABB2BF;">                [</span><span style="color:#E5C07B;">self</span><span style="color:#ABB2BF;">.tableView </span><span style="color:#61AFEF;">reloadData</span><span style="color:#ABB2BF;">];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">            }</span></span>
<span class="line"><span style="color:#ABB2BF;">        });</span></span>
<span class="line"><span style="color:#ABB2BF;">    }];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#56B6C2;">NSLog</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">@&quot;结束加载&quot;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>此处完成之后需要在 heightforrow 方法中设置 cell 的高为 webview 的高，但是会出现一个问题就是内容显示不全。还需要调用下面这个方法进行重布局</li></ul><div class="language-objc line-numbers-mode" data-ext="objc"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">- (</span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;">)scrollViewDidScroll:(UIScrollView *)scrollView {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> ([scrollView </span><span style="color:#61AFEF;">isKindOfClass:</span><span style="color:#ABB2BF;">[</span><span style="color:#E5C07B;">self</span><span style="color:#ABB2BF;">.tableView </span><span style="color:#61AFEF;">class</span><span style="color:#ABB2BF;">]]) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        [</span><span style="color:#E5C07B;">self</span><span style="color:#ABB2BF;">.webView </span><span style="color:#61AFEF;">setNeedsLayout</span><span style="color:#ABB2BF;">];</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六、小结" tabindex="-1"><a class="header-anchor" href="#六、小结" aria-hidden="true">#</a> 六、小结</h2><blockquote><p>自适应行高是本文的重点，是我自己试验了多种方法之后确定可行的方法</p></blockquote><blockquote><p>下篇文章将介绍拦截 url 进行原生跳转</p></blockquote>`,31);function A(w,m){const a=e("ExternalLinkIcon");return o(),p("div",null,[r,B,s("ul",null,[d,y,v,F,s("li",null,[n("将 UIWebViewDelegate 与 UIWebView 重构成了 14 类与 3 个协议（"),s("a",b,[n("查看苹果官方文档"),i(a)]),n("）；")])]),u])}const C=l(t,[["render",A],["__file","WKWebView.html.vue"]]);export{C as default};
