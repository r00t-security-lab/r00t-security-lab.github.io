(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{395:function(s,a,t){"use strict";t.r(a);var n=t(14),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"ctf-题目容器部署指南"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ctf-题目容器部署指南"}},[s._v("#")]),s._v(" CTF 题目容器部署指南")]),s._v(" "),a("h2",{attrs:{id:"web类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web类"}},[s._v("#")]),s._v(" web类")]),s._v(" "),a("p",[a("strong",[s._v("所有web题均需要部署docker")])]),s._v(" "),a("ol",[a("li",[a("p",[s._v("根据题目需要从"),a("a",{attrs:{href:"https://hub.docker.com/u/ctfhub",target:"_blank",rel:"noopener noreferrer"}},[s._v("ctfhub"),a("OutboundLink")],1),s._v("，拉取不同的镜像。本文以\nctfhub/base_web_nginx_php_74为例，Nginx+php7.4，其他的镜像的操作在文档中都有说明。")])]),s._v(" "),a("li",[a("p",[s._v("创建题目文件夹，本文为"),a("code",[s._v("web1")])])]),s._v(" "),a("li",[a("p",[s._v("编写"),a("code",[s._v("docker-compose.yml")]),s._v("文件")])])]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("web")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" .\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" web1\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8080:80"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" always\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" FLAG=r00t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("c604a883"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("8211"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("46ef"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("87a5"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("94b3ca74f489"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("其中image为题目名称。ports为"),a("code",[s._v("外部端口:内部端口")]),s._v("，外部端口根据需要修改，内部端口统一为80。environment中的FLAG根据需要修改。")]),s._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[s._v("编写"),a("code",[s._v("Dockerfile")]),s._v("文件")])]),s._v(" "),a("div",{staticClass:"language-Dockerfile line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" ctfhub/base_web_nginx_php_74")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" flag.sh /flag.sh")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" src /var/www/html")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("其中第一行FROM的镜像名称为最开始在ctfhub中找到的名称，COPY是将当前目录的文件复制到docker镜像中，根据需要编写")]),s._v(" "),a("p",[s._v("web目录统一在"),a("code",[s._v("/var/www/html")])]),s._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[s._v("创建flag.sh，题目初始化脚本，根据需要修改")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/sh")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$FLAG")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /flag "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将flag写入根目录")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("FLAG")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("not_flag\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("FLAG")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("not_flag\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" /flag.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("有文件上传或者代码执行的题目，一定要做好权限控制，防止题目被破坏。")]),s._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[a("p",[s._v("创建src文件夹，将题目web目录复制进去")])]),s._v(" "),a("li",[a("p",[s._v("在web1目录中，"),a("code",[s._v("docker-compose up -d")]),s._v(" 启动")])])]),s._v(" "),a("p",[s._v("使用"),a("code",[s._v("docker-compose stop")]),s._v(" 暂停运行")]),s._v(" "),a("p",[s._v("使用"),a("code",[s._v("docker-compose down")]),s._v(" 删除容器，用于环境重建")]),s._v(" "),a("p",[s._v("使用"),a("code",[s._v("docker-compose build")]),s._v(" 重新运行Dockerfile")]),s._v(" "),a("p",[s._v("目录结构")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("web1\n├── docker-compose.yml\n├── Dockerfile\n├── flag.sh\n└── src\n    └── index.php\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("注意事项")]),s._v(" "),a("ol",[a("li",[s._v("尽量不要出带有爆破，猜测的题目，避免比赛选手使用爆破工具给服务器带来较大压力")]),s._v(" "),a("li",[s._v("控制解题流程，避免非预期")]),s._v(" "),a("li",[s._v("带有文件上传或者代码执行的题目控制好权限，避免环境被破坏，注意：默认情况下www-data账户可以向web目录写入文件，可以使用"),a("code",[s._v("chown")]),s._v("变更web目录权限，权限初始化在flag.sh中操作")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);