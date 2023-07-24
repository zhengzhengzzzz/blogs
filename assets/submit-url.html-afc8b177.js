import{_ as t,r as p,o as c,c as r,a as s,b as n,d as a,f as B,e as o}from"./app-6d1bfb61.js";const i={},y={class:"hint-container info"},d=s("p",{class:"hint-container-title"},"相关信息",-1),A=s("p",null,[n("这是一个利用"),s("code",null,"GitHub Actions"),n("自动触发的工作流进行解析更新的url并推送到搜索引擎的python脚本,除了之前介绍过的bing api之外，还增加了百度和Google的相关内容")],-1),F=s("code",null,"GitHub Actions",-1),u={href:"/tutorial/github/github-action",target:"_blank",rel:"noopener noreferrer"},v=s("code",null,"GitHub Actions",-1),m={href:"/blog/auto-push",target:"_blank",rel:"noopener noreferrer"},b=s("h2",{id:"流程图",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#流程图","aria-hidden":"true"},"#"),n(" 流程图")],-1),C=o(`<h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><details class="hint-container details"><summary>代码</summary><div class="language-python line-numbers-mode" data-ext="py"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">#!/usr/bin/python3</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># -*- coding: UTF-8 -*-</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> json</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> os</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> requests</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> argparse</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> xml.etree.ElementTree </span><span style="color:#C678DD;">as</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">ET</span></span>
<span class="line"><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> oauth2client.service_account </span><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> ServiceAccountCredentials</span></span>
<span class="line"><span style="color:#C678DD;">from</span><span style="color:#ABB2BF;"> googleapiclient.discovery </span><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 从命令行参数提取sitemap</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">def</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">get_sitemap_path</span><span style="color:#ABB2BF;">():</span></span>
<span class="line"><span style="color:#ABB2BF;">    parser </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> argparse.</span><span style="color:#61AFEF;">ArgumentParser</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">    parser.</span><span style="color:#61AFEF;">add_argument</span><span style="color:#ABB2BF;">(</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#98C379;">&#39;--sitemap&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">help</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&#39;Path to current file&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">required</span><span style="color:#56B6C2;">=</span><span style="color:#D19A66;">True</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    parser.</span><span style="color:#61AFEF;">add_argument</span><span style="color:#ABB2BF;">(</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#98C379;">&#39;--prevsitemap&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">help</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&#39;Path to prev file&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">required</span><span style="color:#56B6C2;">=</span><span style="color:#D19A66;">True</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    args </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> parser.</span><span style="color:#61AFEF;">parse_args</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">global</span><span style="color:#ABB2BF;"> sitemap_path</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">global</span><span style="color:#ABB2BF;"> prev_sitemap_path</span></span>
<span class="line"><span style="color:#ABB2BF;">    sitemap_path </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">getattr</span><span style="color:#ABB2BF;">(args, </span><span style="color:#98C379;">&#39;sitemap&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    prev_sitemap_path </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">getattr</span><span style="color:#ABB2BF;">(args, </span><span style="color:#98C379;">&#39;prevsitemap&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#56B6C2;">print</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">f</span><span style="color:#98C379;">&quot;当前：</span><span style="color:#D19A66;">{</span><span style="color:#ABB2BF;">sitemap_path</span><span style="color:#D19A66;">}</span><span style="color:#98C379;"> </span><span style="color:#56B6C2;">\\n</span><span style="color:#98C379;">上次: </span><span style="color:#D19A66;">{</span><span style="color:#ABB2BF;">prev_sitemap_path</span><span style="color:#D19A66;">}</span><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 从sitemap提取url</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">def</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">extract_urls_from_sitemap</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;font-style:italic;">sitemap_path</span><span style="color:#ABB2BF;">):</span></span>
<span class="line"><span style="color:#ABB2BF;">    urls </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> []</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">with</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">open</span><span style="color:#ABB2BF;">(sitemap_path, </span><span style="color:#98C379;">&#39;r&#39;</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">as</span><span style="color:#ABB2BF;"> f:</span></span>
<span class="line"><span style="color:#ABB2BF;">        tree </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">ET</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">parse</span><span style="color:#ABB2BF;">(f)</span></span>
<span class="line"><span style="color:#ABB2BF;">        root </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> tree.</span><span style="color:#61AFEF;">getroot</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;"> url </span><span style="color:#C678DD;">in</span><span style="color:#ABB2BF;"> root.</span><span style="color:#61AFEF;">findall</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;</span><span style="color:#D19A66;">{http</span><span style="color:#C678DD;">:</span><span style="color:#D19A66;">//www.sitemaps.org/schemas/sitemap/0.9}</span><span style="color:#98C379;">url&#39;</span><span style="color:#ABB2BF;">):</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#7F848E;font-style:italic;"># 获取 loc 元素的文本内容</span></span>
<span class="line"><span style="color:#ABB2BF;">            loc </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> url.</span><span style="color:#61AFEF;">find</span><span style="color:#ABB2BF;">(</span></span>
<span class="line"><span style="color:#ABB2BF;">                </span><span style="color:#98C379;">&#39;</span><span style="color:#D19A66;">{http</span><span style="color:#C678DD;">:</span><span style="color:#D19A66;">//www.sitemaps.org/schemas/sitemap/0.9}</span><span style="color:#98C379;">loc&#39;</span><span style="color:#ABB2BF;">).text</span></span>
<span class="line"><span style="color:#ABB2BF;">            urls.</span><span style="color:#61AFEF;">append</span><span style="color:#ABB2BF;">(loc)</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> urls</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 获取更新的url</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">def</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">diff_urls</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;font-style:italic;">urls</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;">prev_urls</span><span style="color:#ABB2BF;">):</span></span>
<span class="line"><span style="color:#ABB2BF;">    final_urls </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">list</span><span style="color:#ABB2BF;">(</span><span style="color:#56B6C2;">set</span><span style="color:#ABB2BF;">(urls) </span><span style="color:#56B6C2;">-</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">set</span><span style="color:#ABB2BF;">(prev_urls))</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> final_urls</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 推送URL列表到百度站长</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">def</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">push_urls_to_baidu</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;font-style:italic;">urls</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;">site_url</span><span style="color:#ABB2BF;">):</span></span>
<span class="line"><span style="color:#ABB2BF;">    token </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> os.environ[</span><span style="color:#98C379;">&quot;BAIDU_KEY&quot;</span><span style="color:#ABB2BF;">]  </span><span style="color:#7F848E;font-style:italic;"># 因为$前面是大写所以也是大写</span></span>
<span class="line"><span style="color:#ABB2BF;">    url </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;http://data.zz.baidu.com/urls?site=</span><span style="color:#D19A66;">{}</span><span style="color:#98C379;">&amp;token=</span><span style="color:#D19A66;">{}</span><span style="color:#98C379;">&#39;</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">format</span><span style="color:#ABB2BF;">(</span></span>
<span class="line"><span style="color:#ABB2BF;">        site_url, token)</span></span>
<span class="line"><span style="color:#ABB2BF;">    headers </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#98C379;">&#39;Content-Type&#39;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;text/plain&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#98C379;">&#39;User-Agent&#39;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;curl/7.12.1&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#98C379;">&#39;Host&#39;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;data.zz.baidu.com&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    data </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;</span><span style="color:#56B6C2;">\\n</span><span style="color:#98C379;">&#39;</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">join</span><span style="color:#ABB2BF;">(urls)</span></span>
<span class="line"><span style="color:#ABB2BF;">    response </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> requests.</span><span style="color:#61AFEF;">post</span><span style="color:#ABB2BF;">(url, </span><span style="color:#E06C75;font-style:italic;">headers</span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;">headers, </span><span style="color:#E06C75;font-style:italic;">data</span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;">data)</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> response.status_code </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">200</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#56B6C2;">print</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">f</span><span style="color:#98C379;">&quot;🎉百度推送成功!:</span><span style="color:#56B6C2;">\\n</span><span style="color:#D19A66;">{</span><span style="color:#ABB2BF;">response.content</span><span style="color:#D19A66;">}</span><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#56B6C2;">print</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">f</span><span style="color:#98C379;">&quot;🛎百度Error:</span><span style="color:#56B6C2;">\\n</span><span style="color:#D19A66;">{</span><span style="color:#ABB2BF;">response.content</span><span style="color:#D19A66;">}</span><span style="color:#98C379;"> &quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 调用Bing API提交URL</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">def</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">push_urls_to_bing</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;font-style:italic;">urls</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;">site_url</span><span style="color:#ABB2BF;">):</span></span>
<span class="line"><span style="color:#ABB2BF;">    bing_api_key </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> os.environ[</span><span style="color:#98C379;">&quot;BING_KEY&quot;</span><span style="color:#ABB2BF;">]</span></span>
<span class="line"><span style="color:#ABB2BF;">    bing_api_url </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlBatch?apikey=&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> bing_api_key</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    headers </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span><span style="color:#98C379;">&quot;Content-Type&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;application/json&quot;</span><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    data </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#98C379;">&quot;siteUrl&quot;</span><span style="color:#ABB2BF;">: site_url,</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#98C379;">&quot;urlList&quot;</span><span style="color:#ABB2BF;">: urls</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    response </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> requests.</span><span style="color:#61AFEF;">post</span><span style="color:#ABB2BF;">(bing_api_url, </span><span style="color:#E06C75;font-style:italic;">json</span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;">data, </span><span style="color:#E06C75;font-style:italic;">headers</span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;">headers)</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> response.status_code </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">200</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#56B6C2;">print</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">f</span><span style="color:#98C379;">&quot;🎉Bing推送成功!:</span><span style="color:#56B6C2;">\\n</span><span style="color:#D19A66;">{</span><span style="color:#ABB2BF;">response.content</span><span style="color:#D19A66;">}</span><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#56B6C2;">print</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">f</span><span style="color:#98C379;">&quot;🛎Bing Error:</span><span style="color:#56B6C2;">\\n</span><span style="color:#D19A66;">{</span><span style="color:#ABB2BF;">response.content</span><span style="color:#D19A66;">}</span><span style="color:#98C379;"> &quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># Google index API</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">def</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">push_urls_to_google</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;font-style:italic;">urls</span><span style="color:#ABB2BF;">):</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#D19A66;">SCOPES</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> [</span><span style="color:#98C379;">&quot;https://www.googleapis.com/auth/indexing&quot;</span><span style="color:#ABB2BF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;"># service_account_file.json is the private key that you created for your service account.</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#D19A66;">JSON_KEY_FILE</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> json.</span><span style="color:#61AFEF;">loads</span><span style="color:#ABB2BF;">(os.environ[</span><span style="color:#98C379;">&quot;GOOGLE_JSON&quot;</span><span style="color:#ABB2BF;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    credentials </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> ServiceAccountCredentials.</span><span style="color:#61AFEF;">from_json_keyfile_dict</span><span style="color:#ABB2BF;">(</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#D19A66;">JSON_KEY_FILE</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">scopes</span><span style="color:#56B6C2;">=</span><span style="color:#D19A66;">SCOPES</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;"># Build service</span></span>
<span class="line"><span style="color:#ABB2BF;">    service </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">build</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;indexing&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#98C379;">&#39;v3&#39;</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">credentials</span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;">credentials)</span></span>
<span class="line"><span style="color:#ABB2BF;">    batch </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> service.</span><span style="color:#61AFEF;">new_batch_http_request</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">callback</span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;">insert_event)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;"> url </span><span style="color:#C678DD;">in</span><span style="color:#ABB2BF;"> urls:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">        batch.</span><span style="color:#61AFEF;">add</span><span style="color:#ABB2BF;">(service.</span><span style="color:#61AFEF;">urlNotifications</span><span style="color:#ABB2BF;">().</span><span style="color:#61AFEF;">publish</span><span style="color:#ABB2BF;">(</span></span>
<span class="line"><span style="color:#ABB2BF;">            </span><span style="color:#E06C75;font-style:italic;">body</span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;">{</span><span style="color:#98C379;">&quot;url&quot;</span><span style="color:#ABB2BF;">: url, </span><span style="color:#98C379;">&quot;type&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;URL_UPDATED&#39;</span><span style="color:#ABB2BF;">}))</span></span>
<span class="line"><span style="color:#ABB2BF;">    batch.</span><span style="color:#61AFEF;">execute</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># goole批处理回调</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">def</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">insert_event</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;font-style:italic;">request_id</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;">response</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;font-style:italic;">exception</span><span style="color:#ABB2BF;">):</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> exception </span><span style="color:#C678DD;">is</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">not</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">None</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#56B6C2;">print</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">f</span><span style="color:#98C379;">&quot;🛎Google Exception:</span><span style="color:#56B6C2;">\\n</span><span style="color:#D19A66;">{</span><span style="color:#ABB2BF;">exception</span><span style="color:#D19A66;">}</span><span style="color:#98C379;"> &quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#56B6C2;">print</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">f</span><span style="color:#98C379;">&quot;🎉Google推送成功!:</span><span style="color:#56B6C2;">\\n</span><span style="color:#D19A66;">{</span><span style="color:#ABB2BF;">response</span><span style="color:#D19A66;">}</span><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># 主程序</span></span>
<span class="line"><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">__name__</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;__main__&#39;</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">    site_url </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;https://oragekk.me&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">    sitemap_path </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">    prev_sitemap_path </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">get_sitemap_path</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">    urls </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">extract_urls_from_sitemap</span><span style="color:#ABB2BF;">(sitemap_path)</span></span>
<span class="line"><span style="color:#ABB2BF;">    prev_urls </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">extract_urls_from_sitemap</span><span style="color:#ABB2BF;">(prev_sitemap_path)</span></span>
<span class="line"><span style="color:#ABB2BF;">    final_urls </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">diff_urls</span><span style="color:#ABB2BF;">(urls, prev_urls)</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#56B6C2;">print</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">f</span><span style="color:#98C379;">&quot;需要更新的url:</span><span style="color:#D19A66;">{</span><span style="color:#ABB2BF;">final_urls</span><span style="color:#D19A66;">}</span><span style="color:#98C379;">&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">len</span><span style="color:#ABB2BF;">(final_urls) </span><span style="color:#56B6C2;">&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#61AFEF;">push_urls_to_bing</span><span style="color:#ABB2BF;">(urls, site_url)</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#61AFEF;">push_urls_to_baidu</span><span style="color:#ABB2BF;">(urls, site_url)</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#61AFEF;">push_urls_to_google</span><span style="color:#ABB2BF;">(final_urls)</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">else</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#56B6C2;">print</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;✨未发现要更新的url&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>依赖库</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#abb2bf;">google_api_python_client==2.85.0</span></span>
<span class="line"><span style="color:#abb2bf;">oauth2client==4.1.3</span></span>
<span class="line"><span style="color:#abb2bf;">requests==2.28.2</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注意点" tabindex="-1"><a class="header-anchor" href="#注意点" aria-hidden="true">#</a> 注意点</h2>`,5),_=o("<li><p>此脚本不可直接使用，需配合GitHub Action，如果想要直接使用，请替换其中的环境变量为你的内容</p><ul><li><code>os.environ[&quot;BAIDU_KEY&quot;]</code> 百度推送token</li><li><code>os.environ[&quot;BING_KEY&quot;]</code> bing_api_key</li><li><code>os.environ[&quot;GOOGLE_JSON&quot;]</code> google indexing api 认证json</li><li>取消 <code>从命令行参数提取sitemap</code>的步骤，直接赋值</li></ul></li>",1),D={href:"https://developers.google.com/search/apis/indexing-api/v3/quickstart?hl=zh_CN",target:"_blank",rel:"noopener noreferrer"};function f(h,E){const l=p("ExternalLinkIcon"),e=p("Mermaid");return c(),r("div",null,[s("div",y,[d,A,s("p",null,[n("关于"),F,n("的介绍可以看这里👉"),s("a",u,[n("GitHub Actions"),a(l)])]),s("p",null,[n("关于"),v,n("的配置可以看这里👉"),s("a",m,[n("如何利用GitHub Actions推送URL到搜索引擎"),a(l)])])]),B(" more "),b,a(e,{id:"mermaid-15",code:"eJylkr9PwkAUx/f+FZey0qSUALGDCaUJC4kJ0cE0DEd7LY1n21wP0YWIcdOADpKok9EomwwaE4n+NbTU/8KWX7UkLHjb+75338+9e4/jOIaaFCMR+O+dyeAieHkMXkdMpOvYbqkNSCjYlRgQHrdZNwh0GqAIlKD74fX63vXXePQUPFx6vTP/ZliblmkmQSo1bQtUqlMBZhSW41yTokPosLMiKESaQ9BRUkeWlmTJQPG7g5/Tzl61ssZfC/0nt9/e5zNba7fbWmgtmZYxC7IKW7ZtA6MVQHFNC4DjtoGkjEfd+cP83lVY1iR4lirN7/n3b35/OLk7jzJRQo5sVQxdV0Y6KBOELAoNoJsYiymeVzWopl1K7AO0EnItU6MNUXCO06qNbSKmdF1f5DTohiMg8EQEOZBLIPYRDicUM/S6qmUzS0Yi3JQh4SaKCQK/pS6vrYSbEnYItIw/DL1Q4PNC3EU+/w9AuKnLX4pFKV2KsbEsL7qd7gfzC5FRH0E="}),C,s("ol",null,[_,s("li",null,[s("p",null,[n("google indexing api参考这里👉"),s("a",D,[n("Indexing API 快速入门"),a(l)])])])])])}const q=t(i,[["render",f],["__file","submit-url.html.vue"]]);export{q as default};
