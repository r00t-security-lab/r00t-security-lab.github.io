(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{273:function(e,t,r){e.exports=r.p+"assets/img/regexp-cn.c11fecb5.png"},392:function(e,t,r){"use strict";r.r(t);var _=r(14),v=Object(_.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"来源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#来源"}},[e._v("#")]),e._v(" 来源：")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/ziishaned/learn-regex",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/ziishaned/learn-regex"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"什么是正则表达式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是正则表达式"}},[e._v("#")]),e._v(" 什么是正则表达式？")]),e._v(" "),t("blockquote",[t("p",[e._v("正则表达式是一组由字母和符号组成的特殊文本，它可以用来从文本中找出满足你想要的格式的句子。")])]),e._v(" "),t("p",[e._v("一个正则表达式是一种从左到右匹配主体字符串的模式。\n“Regular expression”这个词比较拗口，我们常使用缩写的术语“regex”或“regexp”。\n正则表达式可以从一个基础字符串中根据一定的匹配模式替换文本中的字符串、验证表单、提取字符串等等。")]),e._v(" "),t("p",[e._v("想象你正在写一个应用，然后你想设定一个用户命名的规则，让用户名包含字符、数字、下划线和连字符，以及限制字符的个数，好让名字看起来没那么丑。\n我们使用以下正则表达式来验证一个用户名：")]),e._v(" "),t("p",[t("br"),t("br")]),e._v(" "),t("p",{attrs:{align:"center"}},[t("img",{attrs:{src:r(273),alt:"Regular expression"}})]),e._v(" "),t("p",[e._v("以上的正则表达式可以接受 "),t("code",[e._v("john_doe")]),e._v("、"),t("code",[e._v("jo-hn_doe")]),e._v("、"),t("code",[e._v("john12_as")]),e._v("。\n但不匹配"),t("code",[e._v("Jo")]),e._v("，因为它包含了大写的字母而且太短了。")]),e._v(" "),t("h2",{attrs:{id:"_1-基本匹配"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-基本匹配"}},[e._v("#")]),e._v(" 1. 基本匹配")]),e._v(" "),t("p",[e._v("正则表达式其实就是在执行搜索时的格式，它由一些字母和数字组合而成。\n例如：一个正则表达式 "),t("code",[e._v("the")]),e._v("，它表示一个规则：由字母"),t("code",[e._v("t")]),e._v("开始，接着是"),t("code",[e._v("h")]),e._v("，再接着是"),t("code",[e._v("e")]),e._v("。")]),e._v(" "),t("pre",[t("code",[e._v('"the" => The fat cat sat on '),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("the")])]),e._v(" mat.")]),e._v("\n")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://regex101.com/r/dmRygT/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("在线练习"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("正则表达式"),t("code",[e._v("123")]),e._v("匹配字符串"),t("code",[e._v("123")]),e._v("。它逐个字符的与输入的正则表达式做比较。")]),e._v(" "),t("p",[e._v("正则表达式是大小写敏感的，所以"),t("code",[e._v("The")]),e._v("不会匹配"),t("code",[e._v("the")]),e._v("。")]),e._v(" "),t("pre",[t("code",[e._v('"The" => '),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("The")])]),e._v(" fat cat sat on the mat.")]),e._v("\n")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://regex101.com/r/1paXsy/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("在线练习"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"_2-元字符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-元字符"}},[e._v("#")]),e._v(" 2. 元字符")]),e._v(" "),t("p",[e._v("正则表达式主要依赖于元字符。\n元字符不代表他们本身的字面意思，他们都有特殊的含义。一些元字符写在方括号中的时候有一些特殊的意思。以下是一些元字符的介绍：")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"center"}},[e._v("元字符")]),e._v(" "),t("th",[e._v("描述")])])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v(".")]),e._v(" "),t("td",[e._v("句号匹配任意单个字符除了换行符。")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("[ ]")]),e._v(" "),t("td",[e._v("字符种类。匹配方括号内的任意字符。")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("[^ ]")]),e._v(" "),t("td",[e._v("否定的字符种类。匹配除了方括号里的任意字符")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("*")]),e._v(" "),t("td",[e._v("匹配>=0个重复的在*号之前的字符。")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("+")]),e._v(" "),t("td",[e._v("匹配>=1个重复的+号前的字符。")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("?")]),e._v(" "),t("td",[e._v("标记?之前的字符为可选.")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("{n,m}")]),e._v(" "),t("td",[e._v("匹配num个大括号之间的字符 (n <= num <= m).")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("(xyz)")]),e._v(" "),t("td",[e._v("字符集，匹配与 xyz 完全相等的字符串.")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("|")]),e._v(" "),t("td",[e._v("或运算符，匹配符号前或后的字符.")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("\\")]),e._v(" "),t("td",[e._v("转义字符,用于匹配一些保留的字符 "),t("code",[e._v("[ ] ( ) { } . * + ? ^ $ \\ |")])])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("^")]),e._v(" "),t("td",[e._v("从开始行开始匹配.")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("$")]),e._v(" "),t("td",[e._v("从末端开始匹配.")])])])]),e._v(" "),t("h2",{attrs:{id:"_2-1-点运算符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-点运算符"}},[e._v("#")]),e._v(" 2.1 点运算符 "),t("code",[e._v(".")])]),e._v(" "),t("p",[t("code",[e._v(".")]),e._v("是元字符中最简单的例子。\n"),t("code",[e._v(".")]),e._v("匹配任意单个字符，但不匹配换行符。\n例如，表达式"),t("code",[e._v(".ar")]),e._v("匹配一个任意字符后面跟着是"),t("code",[e._v("a")]),e._v("和"),t("code",[e._v("r")]),e._v("的字符串。")]),e._v(" "),t("pre",[t("code",[e._v('".ar" => The '),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("car")])]),e._v(" "),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("par")])]),e._v("ked in the "),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("gar")])]),e._v("age.")]),e._v("\n")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://regex101.com/r/xc9GkU/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("在线练习"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"_2-2-字符集"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-字符集"}},[e._v("#")]),e._v(" 2.2 字符集")]),e._v(" "),t("p",[e._v("字符集也叫做字符类。\n方括号用来指定一个字符集。\n在方括号中使用连字符来指定字符集的范围。\n在方括号中的字符集不关心顺序。\n例如，表达式"),t("code",[e._v("[Tt]he")]),e._v(" 匹配 "),t("code",[e._v("the")]),e._v(" 和 "),t("code",[e._v("The")]),e._v("。")]),e._v(" "),t("pre",[t("code",[e._v('"[Tt]he" => '),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("The")])]),e._v(" car parked in "),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("the")])]),e._v(" garage.")]),e._v("\n")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://regex101.com/r/2ITLQ4/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("在线练习"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("方括号的句号就表示句号。\n表达式 "),t("code",[e._v("ar[.]")]),e._v(" 匹配 "),t("code",[e._v("ar.")]),e._v("字符串")]),e._v(" "),t("pre",[t("code",[e._v('"ar[.]" => A garage is a good place to park a c'),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("ar.")])])]),e._v("\n")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://regex101.com/r/wL3xtE/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("在线练习"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"_2-2-1-否定字符集"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-否定字符集"}},[e._v("#")]),e._v(" 2.2.1 否定字符集")]),e._v(" "),t("p",[e._v("一般来说 "),t("code",[e._v("^")]),e._v(" 表示一个字符串的开头，但它用在一个方括号的开头的时候，它表示这个字符集是否定的。\n例如，表达式"),t("code",[e._v("[^c]ar")]),e._v(" 匹配一个后面跟着"),t("code",[e._v("ar")]),e._v("的除了"),t("code",[e._v("c")]),e._v("的任意字符。")]),e._v(" "),t("pre",[t("code",[e._v('"[^c]ar" => The car '),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("par")])]),e._v("ked in the "),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("gar")])]),e._v("age.")]),e._v("\n")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://regex101.com/r/nNNlq3/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("在线练习"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"_2-3-重复次数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-重复次数"}},[e._v("#")]),e._v(" 2.3 重复次数")]),e._v(" "),t("p",[e._v("后面跟着元字符 "),t("code",[e._v("+")]),e._v("，"),t("code",[e._v("*")]),e._v(" or "),t("code",[e._v("?")]),e._v(" 的，用来指定匹配子模式的次数。\n这些元字符在不同的情况下有着不同的意思。")]),e._v(" "),t("h3",{attrs:{id:"_2-3-1-号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-1-号"}},[e._v("#")]),e._v(" 2.3.1 "),t("code",[e._v("*")]),e._v(" 号")]),e._v(" "),t("p",[t("code",[e._v("*")]),e._v("号匹配 在"),t("code",[e._v("*")]),e._v("之前的字符出现"),t("code",[e._v("大于等于0")]),e._v("次。\n例如，表达式 "),t("code",[e._v("a*")]),e._v(" 匹配0或更多个以a开头的字符。表达式"),t("code",[e._v("[a-z]*")]),e._v(" 匹配一个行中所有以小写字母开头的字符串。")]),e._v(" "),t("pre",[t("code",[e._v('"[a-z]*" => T'),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("he")])]),e._v(" "),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("car")])]),e._v(" "),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("parked")])]),e._v(" "),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("in")])]),e._v(" "),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("the")])]),e._v(" "),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("garage")])]),e._v(" #21.")]),e._v("\n")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://regex101.com/r/7m8me5/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("在线练习"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("code",[e._v("*")]),e._v("字符和"),t("code",[e._v(".")]),e._v("字符搭配可以匹配所有的字符"),t("code",[e._v(".*")]),e._v("。\n"),t("code",[e._v("*")]),e._v("和表示匹配空格的符号"),t("code",[e._v("\\s")]),e._v("连起来用，如表达式"),t("code",[e._v("\\s*cat\\s*")]),e._v("匹配0或更多个空格开头和0或更多个空格结尾的cat字符串。")]),e._v(" "),t("pre",[t("code",[e._v('"\\s*cat\\s*" => The fat'),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v(" cat ")])]),e._v("sat on the con"),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("cat")])]),e._v("enation.")]),e._v("\n")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://regex101.com/r/gGrwuz/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("在线练习"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"_2-3-2-号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-2-号"}},[e._v("#")]),e._v(" 2.3.2 "),t("code",[e._v("+")]),e._v(" 号")]),e._v(" "),t("p",[t("code",[e._v("+")]),e._v("号匹配"),t("code",[e._v("+")]),e._v("号之前的字符出现 >=1 次。\n例如表达式"),t("code",[e._v("c.+t")]),e._v(" 匹配以首字母"),t("code",[e._v("c")]),e._v("开头以"),t("code",[e._v("t")]),e._v("结尾，中间跟着至少一个字符的字符串。")]),e._v(" "),t("pre",[t("code",[e._v('"c.+t" => The fat '),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("cat sat on the mat")])]),e._v(".")]),e._v("\n")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://regex101.com/r/Dzf9Aa/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("在线练习"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"_2-3-3-号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-3-号"}},[e._v("#")]),e._v(" 2.3.3 "),t("code",[e._v("?")]),e._v(" 号")]),e._v(" "),t("p",[e._v("在正则表达式中元字符 "),t("code",[e._v("?")]),e._v(" 标记在符号前面的字符为可选，即出现 0 或 1 次。\n例如，表达式 "),t("code",[e._v("[T]?he")]),e._v(" 匹配字符串 "),t("code",[e._v("he")]),e._v(" 和 "),t("code",[e._v("The")]),e._v("。")]),e._v(" "),t("pre",[t("code",[e._v('"[T]he" => '),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("The")])]),e._v(" car is parked in the garage.")]),e._v("\n")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://regex101.com/r/cIg9zm/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("在线练习"),t("OutboundLink")],1)]),e._v(" "),t("pre",[t("code",[e._v('"[T]?he" => '),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("The")])]),e._v(" car is parked in t"),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("he")])]),e._v(" garage.")]),e._v("\n")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://regex101.com/r/kPpO2x/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("在线练习"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"_2-4-号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-号"}},[e._v("#")]),e._v(" 2.4 "),t("code",[e._v("{}")]),e._v(" 号")]),e._v(" "),t("p",[e._v("在正则表达式中 "),t("code",[e._v("{}")]),e._v(" 是一个量词，常用来一个或一组字符可以重复出现的次数。\n例如， 表达式 "),t("code",[e._v("[0-9]{2,3}")]),e._v(" 匹配最少 2 位最多 3 位 0~9 的数字。")]),e._v(" "),t("pre",[t("code",[e._v('"[0-9]{2,3}" => The number was 9.'),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("999")])]),e._v("7 but we rounded it off to "),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("10")])]),e._v(".0.")]),e._v("\n")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://regex101.com/r/juM86s/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("在线练习"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("我们可以省略第二个参数。\n例如，"),t("code",[e._v("[0-9]{2,}")]),e._v(" 匹配至少两位 0~9 的数字。")]),e._v(" "),t("pre",[t("code",[e._v('"[0-9]{2,}" => The number was 9.'),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("9997")])]),e._v(" but we rounded it off to "),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("10")])]),e._v(".0.")]),e._v("\n")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://regex101.com/r/Gdy4w5/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("在线练习"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("如果逗号也省略掉则表示重复固定的次数。\n例如，"),t("code",[e._v("[0-9]{3}")]),e._v(" 匹配3位数字")]),e._v(" "),t("pre",[t("code",[e._v('"[0-9]{3}" => The number was 9.'),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("999")])]),e._v("7 but we rounded it off to 10.0.")]),e._v("\n")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://regex101.com/r/Sivu30/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("在线练习"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"_2-5-特征标群"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-特征标群"}},[e._v("#")]),e._v(" 2.5 "),t("code",[e._v("(...)")]),e._v(" 特征标群")]),e._v(" "),t("p",[e._v("特征标群是一组写在 "),t("code",[e._v("(...)")]),e._v(" 中的子模式。例如之前说的 "),t("code",[e._v("{}")]),e._v(" 是用来表示前面一个字符出现指定次数。但如果在 "),t("code",[e._v("{}")]),e._v(" 前加入特征标群则表示整个标群内的字符重复 N 次。例如，表达式 "),t("code",[e._v("(ab)*")]),e._v(" 匹配连续出现 0 或更多个 "),t("code",[e._v("ab")]),e._v("。")]),e._v(" "),t("p",[e._v("我们还可以在 "),t("code",[e._v("()")]),e._v(" 中用或字符 "),t("code",[e._v("|")]),e._v(" 表示或。例如，"),t("code",[e._v("(c|g|p)ar")]),e._v(" 匹配 "),t("code",[e._v("car")]),e._v(" 或 "),t("code",[e._v("gar")]),e._v(" 或 "),t("code",[e._v("par")]),e._v(".")]),e._v(" "),t("pre",[t("code",[e._v('"(c|g|p)ar" => The '),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("car")])]),e._v(" is "),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("par")])]),e._v("ked in the "),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("gar")])]),e._v("age.")]),e._v("\n")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://regex101.com/r/tUxrBG/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("在线练习"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"_2-6-或运算符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-或运算符"}},[e._v("#")]),e._v(" 2.6 "),t("code",[e._v("|")]),e._v(" 或运算符")]),e._v(" "),t("p",[e._v("或运算符就表示或，用作判断条件。")]),e._v(" "),t("p",[e._v("例如 "),t("code",[e._v("(T|t)he|car")]),e._v(" 匹配 "),t("code",[e._v("(T|t)he")]),e._v(" 或 "),t("code",[e._v("car")]),e._v("。")]),e._v(" "),t("pre",[t("code",[e._v('"(T|t)he|car" => '),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("The")])]),e._v(" "),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("car")])]),e._v(" is parked in "),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("the")])]),e._v(" garage.")]),e._v("\n")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://regex101.com/r/fBXyX0/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("在线练习"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"_2-7-转码特殊字符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-转码特殊字符"}},[e._v("#")]),e._v(" 2.7 转码特殊字符")]),e._v(" "),t("p",[e._v("反斜线 "),t("code",[e._v("\\")]),e._v(" 在表达式中用于转码紧跟其后的字符。用于指定 "),t("code",[e._v("{ } [ ] / \\ + * . $ ^ | ?")]),e._v(" 这些特殊字符。如果想要匹配这些特殊字符则要在其前面加上反斜线 "),t("code",[e._v("\\")]),e._v("。")]),e._v(" "),t("p",[e._v("例如 "),t("code",[e._v(".")]),e._v(" 是用来匹配除换行符外的所有字符的。如果想要匹配句子中的 "),t("code",[e._v(".")]),e._v(" 则要写成 "),t("code",[e._v("\\.")]),e._v(" 以下这个例子 "),t("code",[e._v("\\.?")]),e._v("是选择性匹配"),t("code",[e._v(".")])]),e._v(" "),t("pre",[t("code",[e._v('"(f|c|m)at\\.?" => The '),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("fat")])]),e._v(" "),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("cat")])]),e._v(" sat on the "),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("mat.")])])]),e._v("\n")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://regex101.com/r/DOc5Nu/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("在线练习"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"_2-8-锚点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-8-锚点"}},[e._v("#")]),e._v(" 2.8 锚点")]),e._v(" "),t("p",[e._v("在正则表达式中，想要匹配指定开头或结尾的字符串就要使用到锚点。"),t("code",[e._v("^")]),e._v(" 指定开头，"),t("code",[e._v("$")]),e._v(" 指定结尾。")]),e._v(" "),t("h3",{attrs:{id:"_2-8-1-号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-8-1-号"}},[e._v("#")]),e._v(" 2.8.1 "),t("code",[e._v("^")]),e._v(" 号")]),e._v(" "),t("p",[t("code",[e._v("^")]),e._v(" 用来检查匹配的字符串是否在所匹配字符串的开头。")]),e._v(" "),t("p",[e._v("例如，在 "),t("code",[e._v("abc")]),e._v(" 中使用表达式 "),t("code",[e._v("^a")]),e._v(" 会得到结果 "),t("code",[e._v("a")]),e._v("。但如果使用 "),t("code",[e._v("^b")]),e._v(" 将匹配不到任何结果。因为在字符串 "),t("code",[e._v("abc")]),e._v(" 中并不是以 "),t("code",[e._v("b")]),e._v(" 开头。")]),e._v(" "),t("p",[e._v("例如，"),t("code",[e._v("^(T|t)he")]),e._v(" 匹配以 "),t("code",[e._v("The")]),e._v(" 或 "),t("code",[e._v("the")]),e._v(" 开头的字符串。")]),e._v(" "),t("pre",[t("code",[e._v('"(T|t)he" => '),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("The")])]),e._v(" car is parked in "),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("the")])]),e._v(" garage.")]),e._v("\n")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://regex101.com/r/5ljjgB/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("在线练习"),t("OutboundLink")],1)]),e._v(" "),t("pre",[t("code",[e._v('"^(T|t)he" => '),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("The")])]),e._v(" car is parked in the garage.")]),e._v("\n")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://regex101.com/r/jXrKne/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("在线练习"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"_2-8-2-号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-8-2-号"}},[e._v("#")]),e._v(" 2.8.2 "),t("code",[e._v("$")]),e._v(" 号")]),e._v(" "),t("p",[e._v("同理于 "),t("code",[e._v("^")]),e._v(" 号，"),t("code",[e._v("$")]),e._v(" 号用来匹配字符是否是最后一个。")]),e._v(" "),t("p",[e._v("例如，"),t("code",[e._v("(at\\.)$")]),e._v(" 匹配以 "),t("code",[e._v("at.")]),e._v(" 结尾的字符串。")]),e._v(" "),t("pre",[t("code",[e._v('"(at\\.)" => The fat c'),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("at.")])]),e._v(" s"),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("at.")])]),e._v(" on the m"),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("at.")])])]),e._v("\n")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://regex101.com/r/y4Au4D/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("在线练习"),t("OutboundLink")],1)]),e._v(" "),t("pre",[t("code",[e._v('"(at\\.)$" => The fat cat. sat. on the m'),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("at.")])])]),e._v("\n")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://regex101.com/r/t0AkOd/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("在线练习"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"_3-简写字符集"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-简写字符集"}},[e._v("#")]),e._v(" 3. 简写字符集")]),e._v(" "),t("p",[e._v("正则表达式提供一些常用的字符集简写。如下:")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"center"}},[e._v("简写")]),e._v(" "),t("th",[e._v("描述")])])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v(".")]),e._v(" "),t("td",[e._v("除换行符外的所有字符")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("\\w")]),e._v(" "),t("td",[e._v("匹配所有字母数字，等同于 "),t("code",[e._v("[a-zA-Z0-9_]")])])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("\\W")]),e._v(" "),t("td",[e._v("匹配所有非字母数字，即符号，等同于： "),t("code",[e._v("[^\\w]")])])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("\\d")]),e._v(" "),t("td",[e._v("匹配数字： "),t("code",[e._v("[0-9]")])])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("\\D")]),e._v(" "),t("td",[e._v("匹配非数字： "),t("code",[e._v("[^\\d]")])])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("\\s")]),e._v(" "),t("td",[e._v("匹配所有空格字符，等同于： "),t("code",[e._v("[\\t\\n\\f\\r\\p{Z}]")])])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("\\S")]),e._v(" "),t("td",[e._v("匹配所有非空格字符： "),t("code",[e._v("[^\\s]")])])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("\\f")]),e._v(" "),t("td",[e._v("匹配一个换页符")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("\\n")]),e._v(" "),t("td",[e._v("匹配一个换行符")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("\\r")]),e._v(" "),t("td",[e._v("匹配一个回车符")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("\\t")]),e._v(" "),t("td",[e._v("匹配一个制表符")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("\\v")]),e._v(" "),t("td",[e._v("匹配一个垂直制表符")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("\\p")]),e._v(" "),t("td",[e._v("匹配 CR/LF（等同于 "),t("code",[e._v("\\r\\n")]),e._v("），用来匹配 DOS 行终止符")])])])]),e._v(" "),t("h2",{attrs:{id:"_4-零宽度断言-前后预查"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-零宽度断言-前后预查"}},[e._v("#")]),e._v(" 4. 零宽度断言（前后预查）")]),e._v(" "),t("p",[e._v("先行断言和后发断言都属于"),t("strong",[e._v("非捕获簇")]),e._v("（不捕获文本 ，也不针对组合计进行计数）。\n先行断言用于判断所匹配的格式是否在另一个确定的格式之前，匹配结果不包含该确定格式（仅作为约束）。")]),e._v(" "),t("p",[e._v("例如，我们想要获得所有跟在 "),t("code",[e._v("$")]),e._v(" 符号后的数字，我们可以使用正后发断言 "),t("code",[e._v("(?<=\\$)[0-9\\.]*")]),e._v("。\n这个表达式匹配 "),t("code",[e._v("$")]),e._v(" 开头，之后跟着 "),t("code",[e._v("0,1,2,3,4,5,6,7,8,9,.")]),e._v(" 这些字符可以出现大于等于 0 次。")]),e._v(" "),t("p",[e._v("零宽度断言如下：")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"center"}},[e._v("符号")]),e._v(" "),t("th",[e._v("描述")])])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("?=")]),e._v(" "),t("td",[e._v("正先行断言-存在")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("?!")]),e._v(" "),t("td",[e._v("负先行断言-排除")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("?<=")]),e._v(" "),t("td",[e._v("正后发断言-存在")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("?<!")]),e._v(" "),t("td",[e._v("负后发断言-排除")])])])]),e._v(" "),t("h3",{attrs:{id:"_4-1-正先行断言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-正先行断言"}},[e._v("#")]),e._v(" 4.1 "),t("code",[e._v("?=...")]),e._v(" 正先行断言")]),e._v(" "),t("p",[t("code",[e._v("?=...")]),e._v(" 正先行断言，表示第一部分表达式之后必须跟着 "),t("code",[e._v("?=...")]),e._v("定义的表达式。")]),e._v(" "),t("p",[e._v("返回结果只包含满足匹配条件的第一部分表达式。\n定义一个正先行断言要使用 "),t("code",[e._v("()")]),e._v("。在括号内部使用一个问号和等号： "),t("code",[e._v("(?=...)")]),e._v("。")]),e._v(" "),t("p",[e._v("正先行断言的内容写在括号中的等号后面。\n例如，表达式 "),t("code",[e._v("(T|t)he(?=\\sfat)")]),e._v(" 匹配 "),t("code",[e._v("The")]),e._v(" 和 "),t("code",[e._v("the")]),e._v("，在括号中我们又定义了正先行断言 "),t("code",[e._v("(?=\\sfat)")]),e._v(" ，即 "),t("code",[e._v("The")]),e._v(" 和 "),t("code",[e._v("the")]),e._v(" 后面紧跟着 "),t("code",[e._v("(空格)fat")]),e._v("。")]),e._v(" "),t("pre",[t("code",[e._v('"(T|t)he(?=\\sfat)" => '),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("The")])]),e._v(" fat cat sat on the mat.")]),e._v("\n")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://regex101.com/r/IDDARt/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("在线练习"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"_4-2-负先行断言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-负先行断言"}},[e._v("#")]),e._v(" 4.2 "),t("code",[e._v("?!...")]),e._v(" 负先行断言")]),e._v(" "),t("p",[e._v("负先行断言 "),t("code",[e._v("?!")]),e._v(" 用于筛选所有匹配结果，筛选条件为 其后不跟随着断言中定义的格式。\n"),t("code",[e._v("正先行断言")]),e._v("  定义和 "),t("code",[e._v("负先行断言")]),e._v(" 一样，区别就是 "),t("code",[e._v("=")]),e._v(" 替换成 "),t("code",[e._v("!")]),e._v(" 也就是 "),t("code",[e._v("(?!...)")]),e._v("。")]),e._v(" "),t("p",[e._v("表达式 "),t("code",[e._v("(T|t)he(?!\\sfat)")]),e._v(" 匹配 "),t("code",[e._v("The")]),e._v(" 和 "),t("code",[e._v("the")]),e._v("，且其后不跟着 "),t("code",[e._v("(空格)fat")]),e._v("。")]),e._v(" "),t("pre",[t("code",[e._v('"(T|t)he(?!\\sfat)" => The fat cat sat on '),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("the")])]),e._v(" mat.")]),e._v("\n")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://regex101.com/r/V32Npg/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("在线练习"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"_4-3-正后发断言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-正后发断言"}},[e._v("#")]),e._v(" 4.3 "),t("code",[e._v("?<= ...")]),e._v(" 正后发断言")]),e._v(" "),t("p",[e._v("正后发断言 记作"),t("code",[e._v("(?<=...)")]),e._v(" 用于筛选所有匹配结果，筛选条件为 其前跟随着断言中定义的格式。\n例如，表达式 "),t("code",[e._v("(?<=(T|t)he\\s)(fat|mat)")]),e._v(" 匹配 "),t("code",[e._v("fat")]),e._v(" 和 "),t("code",[e._v("mat")]),e._v("，且其前跟着 "),t("code",[e._v("The")]),e._v(" 或 "),t("code",[e._v("the")]),e._v("。")]),e._v(" "),t("pre",[t("code",[e._v('"(?<=(T|t)he\\s)(fat|mat)" => The '),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("fat")])]),e._v(" cat sat on the "),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("mat")])]),e._v(".")]),e._v("\n")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://regex101.com/r/avH165/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("在线练习"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"_4-4-负后发断言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-负后发断言"}},[e._v("#")]),e._v(" 4.4 "),t("code",[e._v("?<!...")]),e._v(" 负后发断言")]),e._v(" "),t("p",[e._v("负后发断言 记作 "),t("code",[e._v("(?<!...)")]),e._v(" 用于筛选所有匹配结果，筛选条件为 其前不跟随着断言中定义的格式。\n例如，表达式 "),t("code",[e._v("(?<!(T|t)he\\s)(cat)")]),e._v(" 匹配 "),t("code",[e._v("cat")]),e._v("，且其前不跟着 "),t("code",[e._v("The")]),e._v(" 或 "),t("code",[e._v("the")]),e._v("。")]),e._v(" "),t("pre",[t("code",[e._v('"(?<!(T|t)he\\s)(cat)" => The cat sat on '),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("cat")])]),e._v(".")]),e._v("\n")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://regex101.com/r/8Efx5G/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("在线练习"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"_5-标志"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-标志"}},[e._v("#")]),e._v(" 5. 标志")]),e._v(" "),t("p",[e._v("标志也叫模式修正符，因为它可以用来修改表达式的搜索结果。\n这些标志可以任意的组合使用，它也是整个正则表达式的一部分。")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"center"}},[e._v("标志")]),e._v(" "),t("th",[e._v("描述")])])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("i")]),e._v(" "),t("td",[e._v("忽略大小写。")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("g")]),e._v(" "),t("td",[e._v("全局搜索。")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[e._v("m")]),e._v(" "),t("td",[e._v("多行修饰符：锚点元字符 "),t("code",[e._v("^")]),e._v(" "),t("code",[e._v("$")]),e._v(" 工作范围在每行的起始。")])])])]),e._v(" "),t("h3",{attrs:{id:"_5-1-忽略大小写-case-insensitive"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-忽略大小写-case-insensitive"}},[e._v("#")]),e._v(" 5.1 忽略大小写（Case Insensitive）")]),e._v(" "),t("p",[e._v("修饰语 "),t("code",[e._v("i")]),e._v(" 用于忽略大小写。\n例如，表达式 "),t("code",[e._v("/The/gi")]),e._v(" 表示在全局搜索 "),t("code",[e._v("The")]),e._v("，在后面的 "),t("code",[e._v("i")]),e._v(" 将其条件修改为忽略大小写，则变成搜索 "),t("code",[e._v("the")]),e._v(" 和 "),t("code",[e._v("The")]),e._v("，"),t("code",[e._v("g")]),e._v(" 表示全局搜索。")]),e._v(" "),t("pre",[t("code",[e._v('"The" => '),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("The")])]),e._v(" fat cat sat on the mat.")]),e._v("\n")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://regex101.com/r/dpQyf9/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("在线练习"),t("OutboundLink")],1)]),e._v(" "),t("pre",[t("code",[e._v('"/The/gi" => '),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("The")])]),e._v(" fat cat sat on "),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("the")])]),e._v(" mat.")]),e._v("\n")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://regex101.com/r/ahfiuh/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("在线练习"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"_5-2-全局搜索-global-search"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-全局搜索-global-search"}},[e._v("#")]),e._v(" 5.2 全局搜索（Global search）")]),e._v(" "),t("p",[e._v("修饰符 "),t("code",[e._v("g")]),e._v(" 常用于执行一个全局搜索匹配，即（不仅仅返回第一个匹配的，而是返回全部）。\n例如，表达式 "),t("code",[e._v("/.(at)/g")]),e._v(" 表示搜索 任意字符（除了换行）+ "),t("code",[e._v("at")]),e._v("，并返回全部结果。")]),e._v(" "),t("pre",[t("code",[e._v('"/.(at)/" => The '),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("fat")])]),e._v(" cat sat on the mat.")]),e._v("\n")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://regex101.com/r/jnk6gM/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("在线练习"),t("OutboundLink")],1)]),e._v(" "),t("pre",[t("code",[e._v('"/.(at)/g" => The '),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("fat")])]),e._v(" "),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("cat")])]),e._v(" "),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("sat")])]),e._v(" on the "),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("mat")])]),e._v(".")]),e._v("\n")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://regex101.com/r/dO1nef/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("在线练习"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"_5-3-多行修饰符-multiline"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-多行修饰符-multiline"}},[e._v("#")]),e._v(" 5.3 多行修饰符（Multiline）")]),e._v(" "),t("p",[e._v("多行修饰符 "),t("code",[e._v("m")]),e._v(" 常用于执行一个多行匹配。")]),e._v(" "),t("p",[e._v("像之前介绍的 "),t("code",[e._v("(^,$)")]),e._v(" 用于检查格式是否是在待检测字符串的开头或结尾。但我们如果想要它在每行的开头和结尾生效，我们需要用到多行修饰符 "),t("code",[e._v("m")]),e._v("。")]),e._v(" "),t("p",[e._v("例如，表达式 "),t("code",[e._v("/at(.)?$/gm")]),e._v(" 表示小写字符 "),t("code",[e._v("a")]),e._v(" 后跟小写字符 "),t("code",[e._v("t")]),e._v(" ，末尾可选除换行符外任意字符。根据 "),t("code",[e._v("m")]),e._v(" 修饰符，现在表达式匹配每行的结尾。")]),e._v(" "),t("pre",[t("code",[e._v('"/.at(.)?$/" => The fat\n                cat sat\n                on the '),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("mat.")])])]),e._v("\n")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://regex101.com/r/hoGMkP/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("在线练习"),t("OutboundLink")],1)]),e._v(" "),t("pre",[t("code",[e._v('"/.at(.)?$/gm" => The '),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("fat")])]),e._v("\n                  cat "),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("sat")])]),e._v("\n                  on the "),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("mat.")])])]),e._v("\n")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://regex101.com/r/E88WE2/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("在线练习"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"_6-贪婪匹配与惰性匹配-greedy-vs-lazy-matching"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-贪婪匹配与惰性匹配-greedy-vs-lazy-matching"}},[e._v("#")]),e._v(" 6. 贪婪匹配与惰性匹配（Greedy vs lazy matching）")]),e._v(" "),t("p",[e._v("正则表达式默认采用贪婪匹配模式，在该模式下意味着会匹配尽可能长的子串。我们可以使用 "),t("code",[e._v("?")]),e._v(" 将贪婪匹配模式转化为惰性匹配模式。")]),e._v(" "),t("pre",[t("code",[e._v('"/(.*at)/" => '),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("The fat cat sat on the mat")])]),e._v(". ")])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://regex101.com/r/AyAdgJ/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("在线练习"),t("OutboundLink")],1)]),e._v(" "),t("pre",[t("code",[e._v('"/(.*?at)/" => '),t("a",{attrs:{href:"#learn-regex"}},[t("strong",[e._v("The fat")])]),e._v(" cat sat on the mat. ")])]),e._v(" "),t("p",[t("a",{attrs:{href:"https://regex101.com/r/AyAdgJ/2",target:"_blank",rel:"noopener noreferrer"}},[e._v("在线练习"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"贡献"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#贡献"}},[e._v("#")]),e._v(" 贡献")]),e._v(" "),t("ul",[t("li",[e._v("报告问题")]),e._v(" "),t("li",[e._v("开放合并请求")]),e._v(" "),t("li",[e._v("传播此文档")]),e._v(" "),t("li",[e._v("直接和我联系 ziishaned@gmail.com 或 "),t("a",{attrs:{href:"https://twitter.com/ziishaned",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://img.shields.io/twitter/url/https/twitter.com/ziishaned.svg?style=social&label=Follow%20%40ziishaned",alt:"Twitter URL"}}),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"许可证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#许可证"}},[e._v("#")]),e._v(" 许可证")]),e._v(" "),t("p",[e._v("MIT © "),t("a",{attrs:{href:"https://twitter.com/ziishaned",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zeeshan Ahmad"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=v.exports}}]);