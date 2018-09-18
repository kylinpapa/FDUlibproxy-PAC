﻿function FindProxyForURL(url, host) {
//proxy="自己学校/机构的代理服务器和端口"
	proxy = "PROXY libproxy.fudan.edu.cn:8080"
//shExpMatch后面跟括号，表示这是一个函数，括号中的内容代表函数输入值。
//这个函数是用来计算url是否等于逗号右边所规定的那个东西，函数的输出值是布尔运算TRUE/FALSE。
	if (shExpMatch(url, "*.nature.com*")) {return proxy;}
	if (shExpMatch(url, "*.springer.com*")) {return proxy;}
	if (shExpMatch(url, "*.ovid.com*")) {return proxy;}
	if (shExpMatch(url, "*.jamanetwork.com*")) {return proxy;}
	if (shExpMatch(url, "*.jpain.org*")) {return proxy;}
	if (shExpMatch(url, "*.clinicalkey.com*")) {return proxy;}
	if (shExpMatch(url, "*.sciencedirect.com*")) {return proxy;}
	if (shExpMatch(url, "*.thelancet.com*")) {return proxy;}
	if (shExpMatch(url, "*.njem.org*")) {return proxy;}
	if (shExpMatch(url, "*.lww.com*")) {return proxy;}
	if (shExpMatch(url, "*.doi.org*")) {return proxy;}
	if (shExpMatch(url, "*.oxfordscholarship.com*")) {return proxy;}
	if (shExpMatch(url, "*.pqdt.calis.edu.cn*")) {return proxy;}
	if (shExpMatch(url, "*.proquest.com*")) {return proxy;}
	if (shExpMatch(url, "*isiknowledge.com*")) {return proxy;}
	if (shExpMatch(url, "*.wiley.com*")) {return proxy;}
	if (shExpMatch(url, "*.cambridge.org*")) {return proxy;}
	if (shExpMatch(url, "*.sciencemag.org*")) {return proxy;}
	if (shExpMatch(url, "*.cqvip.*")) {return proxy;}
	if (shExpMatch(url, "*.cnki.*")) {return proxy;}
	if (shExpMatch(url, "*.wanfangdata.com.cn*")) {return proxy;}
	if (shExpMatch(url, "*.pnas.org*")) {return proxy;}
	if (shExpMatch(url, "*.oup.com*")) {return proxy;}
	//接下来是常用的国内网站（并不常用），走直接连接
	if (shExpMatch(url, "*.baidu.com*")) {return "DIRECT";}
    if (shExpMatch(url, "*.sina.com*")) {return "DIRECT";}
    if (shExpMatch(url, "*.163.com*")) {return "DIRECT";}
    if (shExpMatch(url, "*.taobao.com*")) {return "DIRECT";}
    if (shExpMatch(url, "*.tmall.com*")) {return "DIRECT";}
    if (shExpMatch(url, "*.jd.com*")) {return "DIRECT";}
    if (shExpMatch(url, "*.weibo.com*")) {return "DIRECT";}
    if (shExpMatch(url, "*.qq.com*")) {return "DIRECT";}
    if (shExpMatch(url, "*.fudan.edu.cn*")) {return "DIRECT";}
    if (shExpMatch(url, "*.zhihu.com*")) {return "DIRECT";}
    if (shExpMatch(url, "*.jianshu.com*")) {return "DIRECT";}
    if (shExpMatch(url, "*.dxj.com*")) {return "DIRECT";}
    if (shExpMatch(url, "*.jjwxc.net*")) {return "DIRECT";}
    if (shExpMatch(url, "*.bilibili.com*")) {return "DIRECT";}
//其他的就用shadowsocks系统代理。127.0.0.1代表本地，1080是设置过的代理端口。
//不知道什么是shadowsocks的朋友，没有翻墙需求的朋友，请把下面那句改成return "DIRECT"
    return "PROXY 127.0.0.1:1080"
}