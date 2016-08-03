webpackJsonp([34,135],{678:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(6),a(4)),o=t(p),c=(a(171),a(170)),e=t(c),u=a(1),i=t(u),l=a(2);t(l);n.exports={content:[["p","\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002"]],meta:{order:0,title:"\u57fa\u672c",filename:"components/notification/demo/basic.md",id:"components-notification-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Button<span class="token punctuation" >,</span> notification <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> openNotification <span class="token operator" >=</span> <span class="token keyword" >function</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  notification<span class="token punctuation" >.</span><span class="token function" >open</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n    message<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u662f\u6807\u9898\'</span><span class="token punctuation" >,</span>\n    description<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\'</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>openNotification<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u6253\u5f00\u901a\u77e5\u63d0\u9192\u6846<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=function(){e["default"].open({message:"\u8fd9\u662f\u6807\u9898",description:"\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848"})};return i["default"].createElement(o["default"],{type:"primary",onClick:n},"\u6253\u5f00\u901a\u77e5\u63d0\u9192\u6846")}}},679:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(6),a(4)),o=t(p),c=(a(171),a(170)),e=t(c),u=a(1),i=t(u),l=a(2);t(l);n.exports={content:[["p","\u81ea\u5b9a\u4e49\u901a\u77e5\u6846\u81ea\u52a8\u5173\u95ed\u7684\u5ef6\u65f6\uff0c\u9ed8\u8ba4",["code","4.5s"],"\uff0c\u53d6\u6d88\u81ea\u52a8\u5173\u95ed\u53ea\u8981\u5c06\u8be5\u503c\u8bbe\u4e3a ",["code","0"]," \u5373\u53ef\u3002"]],meta:{order:1,title:"\u81ea\u52a8\u5173\u95ed\u7684\u5ef6\u65f6",filename:"components/notification/demo/duration.md",id:"components-notification-demo-duration"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Button<span class="token punctuation" >,</span> notification <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> openNotification <span class="token operator" >=</span> <span class="token keyword" >function</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >const</span> args <span class="token operator" >=</span> <span class="token punctuation" >{</span>\n    message<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u662f\u6807\u9898\'</span><span class="token punctuation" >,</span>\n    description<span class="token punctuation" >:</span> <span class="token string" >\'\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\'</span><span class="token punctuation" >,</span>\n    duration<span class="token punctuation" >:</span> <span class="token number" >0</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  notification<span class="token punctuation" >.</span><span class="token function" >open</span><span class="token punctuation" >(</span>args<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>openNotification<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u6253\u5f00\u901a\u77e5\u63d0\u9192\u6846<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=function(){var n={message:"\u8fd9\u662f\u6807\u9898",description:"\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\uff0c\u6211\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed",duration:0};e["default"].open(n)};return i["default"].createElement(o["default"],{type:"primary",onClick:n},"\u6253\u5f00\u901a\u77e5\u63d0\u9192\u6846")}}},680:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(6),a(4)),o=t(p),c=(a(171),a(170)),e=t(c),u=a(1),i=t(u),l=a(2);t(l);n.exports={content:[["p","\u81ea\u5b9a\u4e49\u5173\u95ed\u6309\u94ae\u7684\u6837\u5f0f\u548c\u6587\u5b57\u3002"]],meta:{order:4,title:"\u81ea\u5b9a\u4e49",filename:"components/notification/demo/with-btn.md",id:"components-notification-demo-with-btn"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Button<span class="token punctuation" >,</span> notification <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> close <span class="token operator" >=</span> <span class="token keyword" >function</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token string" >\'\u6211\u88ab\u9ed8\u8ba4\u7684\u5173\u95ed\u6309\u94ae\u5173\u95ed\u4e86\uff01\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> openNotification <span class="token operator" >=</span> <span class="token keyword" >function</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >const</span> key <span class="token operator" >=</span> <span class="token template-string" ><span class="token string" >`open</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>Date<span class="token punctuation" >.</span><span class="token function" >now</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" >`</span></span><span class="token punctuation" >;</span>\n  <span class="token keyword" >const</span> btnClick <span class="token operator" >=</span> <span class="token keyword" >function</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token comment" spellcheck="true">// \u9690\u85cf\u63d0\u9192\u6846</span>\n    notification<span class="token punctuation" >.</span><span class="token function" >close</span><span class="token punctuation" >(</span>key<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token keyword" >const</span> btn <span class="token operator" >=</span> <span class="token punctuation" >(</span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>btnClick<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      \u81ea\u5b9a\u4e49\u5173\u95ed\u6309\u94ae\u5e76\u89e6\u53d1\u56de\u8c03\u51fd\u6570\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n  <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  notification<span class="token punctuation" >.</span><span class="token function" >open</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n    message<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u662f\u6807\u9898\'</span><span class="token punctuation" >,</span>\n    description<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\'</span><span class="token punctuation" >,</span>\n    btn<span class="token punctuation" >,</span>\n    key<span class="token punctuation" >,</span>\n    onClose<span class="token punctuation" >:</span> close<span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>openNotification<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u6253\u5f00\u901a\u77e5\u63d0\u9192\u6846<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span>\nmountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=function(){console.log("\u6211\u88ab\u9ed8\u8ba4\u7684\u5173\u95ed\u6309\u94ae\u5173\u95ed\u4e86\uff01")},s=function(){var s="open"+Date.now(),a=function(){e["default"].close(s)},t=i["default"].createElement(o["default"],{type:"primary",size:"small",onClick:a},"\u81ea\u5b9a\u4e49\u5173\u95ed\u6309\u94ae\u5e76\u89e6\u53d1\u56de\u8c03\u51fd\u6570");e["default"].open({message:"\u8fd9\u662f\u6807\u9898",description:"\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848",btn:t,key:s,onClose:n})};return i["default"].createElement("div",null,i["default"].createElement(o["default"],{type:"primary",onClick:s},"\u6253\u5f00\u901a\u77e5\u63d0\u9192\u6846"))}}},681:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(6),a(4)),o=t(p),c=(a(171),a(170)),e=t(c),u=a(1),i=t(u),l=a(2);t(l);n.exports={content:[["p","\u901a\u77e5\u63d0\u9192\u6846\u5de6\u4fa7\u6709\u56fe\u6807\u3002"]],meta:{order:2,title:"\u5e26\u6709Icon\u7684\u901a\u77e5\u63d0\u9192\u6846",filename:"components/notification/demo/with-icon.md",id:"components-notification-demo-with-icon"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Button<span class="token punctuation" >,</span> notification <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> openNotificationWithIcon <span class="token operator" >=</span> <span class="token keyword" >function</span> <span class="token punctuation" >(</span>type<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >return</span> <span class="token keyword" >function</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    notification<span class="token punctuation" >[</span>type<span class="token punctuation" >]</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      message<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u662f\u6807\u9898\'</span><span class="token punctuation" >,</span>\n      description<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\'</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token function" >openNotificationWithIcon</span><span class="token punctuation" >(</span><span class="token string" >\'success\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u6210\u529f<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token function" >openNotificationWithIcon</span><span class="token punctuation" >(</span><span class="token string" >\'info\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u6d88\u606f<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token function" >openNotificationWithIcon</span><span class="token punctuation" >(</span><span class="token string" >\'warning\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u8b66\u544a<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token function" >openNotificationWithIcon</span><span class="token punctuation" >(</span><span class="token string" >\'error\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u9519\u8bef<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=function(n){return function(){e["default"][n]({message:"\u8fd9\u662f\u6807\u9898",description:"\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u662f\u63d0\u793a\u6846\u7684\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6846\u7684\u6587\u6848"})}};return i["default"].createElement("div",null,i["default"].createElement(o["default"],{onClick:n("success")},"\u6210\u529f"),i["default"].createElement(o["default"],{onClick:n("info")},"\u6d88\u606f"),i["default"].createElement(o["default"],{onClick:n("warning")},"\u8b66\u544a"),i["default"].createElement(o["default"],{onClick:n("error")},"\u9519\u8bef"))},style:"\n.code-box-demo .ant-btn {\n  margin-right: 1em;\n}\n"}},977:function(n,s,a){n.exports={basic:a(678),duration:a(679),"with-btn":a(680),"with-icon":a(681)}}});