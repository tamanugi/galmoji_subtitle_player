webpackJsonp([1],{100:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(245),i=n.n(s),a=n(206),o=n.n(a),r=n(234),u=(n.n(r),n(92)),c=n(193),d=n.n(c);e.default={name:"player",data:function(){return{current:this.$route.query.t||0,player:null,srt:{},debug:!1}},computed:{subtitle:function(){return this.$store.state.subtitle},videoid:{get:function(){return this.$store.state.videoid},set:function(t){this.$store.commit("setVideoid",t)}}},methods:{clickPlayButton:function(){this.loadYoutube(),this.fetchLangSubtitle("ja"),this.getVideoTitle(),this.playYoutube()},loadYoutube:function(){var t=this;this.player||(this.player=i()("video-player")),this.player.loadVideoById(this.videoid),this.player.on("ready",function(){t.update()}),this.player.stopVideo()},playYoutube:function(){this.player.playVideo()},getVideoTitle:function(){var t=this;d()("https://www.googleapis.com/youtube/v3/videos?part=snippet&id="+this.$store.state.videoid+"&key=AIzaSyCw7vhR-PVHXcKtSqrTdj9T44Hh4xmwv6U").json.then(function(e){t.$store.commit("setVideTitle",e.items[0].snippet.title)})},fetchLangSubtitle:function(t){var e=this,s="https://www.youtube.com/api/timedtext?fmt=srv3&lang="+t+"&v="+this.$store.state.videoid;this.srt={},o.a.get(s,function(s){var i="";s.setEncoding("utf8"),s.on("data",function(t){i+=t}),s.on("end",function(s){n.i(r.parseString)(i,function(s,i){s||console.dir(i);var a=i.timedtext.body[0].p||[];e.srt[t]=a.map(function(t){return{_:n.i(u.a)(t._),$:t.$}})})})}).on("error",function(t){console.log(t.message)})},update:function(){var t=this;this.player&&this.player.getCurrentTime().then(function(e){e=Math.floor(1e3*e),t.current=e;var n=t.getSubtitle("ja");t.$store.commit("setSubtitle",n)}),setTimeout(this.update,50)},getSubtitle:function(t){var e="",n=this.srt[t];if(n)for(var s=0;s<n.length;s++){var i=n[s],a=Number(i.$.t),o=a+Number(i.$.d);if(a<=this.current&&this.current<=o){e=i._;break}}return e}},mounted:function(){this.$route.query.v&&(this.$store.commit("setVideoid",this.$route.query.v),this.loadYoutube(),this.fetchLangSubtitle("ja"),this.getVideoTitle())}}},101:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"social-area",computed:{tweetUrl:function(){var t=encodeURI("ぎゃるもじまくぷれ〜や〜"),e=location.href;this.$store.state.videoid&&(e=e.split("?")[0],e=e+"?v="+this.$store.state.videoid);var n=encodeURI(e);return"https://twitter.com/intent/tweet?text="+encodeURI(this.$store.state.subtitle+" / "+this.$store.state.videoTitle)+"&hashtags="+t+"&url="+n}}}},139:function(t,e){},140:function(t,e){},141:function(t,e){},142:function(t,e){},143:function(t,e){},144:function(t,e){},211:function(t,e,n){t.exports=n.p+"static/img/gal_tukaikata.dcbeeea.png"},212:function(t,e){t.exports="data:image/png;base64,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"},213:function(t,e,n){t.exports=n.p+"static/img/share_yoro.c1515d6.png"},217:function(t,e,n){n(144);var s=n(12)(n(97),n(227),null,null);t.exports=s.exports},218:function(t,e,n){n(143);var s=n(12)(n(98),n(226),"data-v-fbcd2698",null);t.exports=s.exports},219:function(t,e,n){n(140);var s=n(12)(n(99),n(223),"data-v-70ed74fa",null);t.exports=s.exports},220:function(t,e,n){n(142);var s=n(12)(n(100),n(225),"data-v-d0b019c4",null);t.exports=s.exports},221:function(t,e,n){n(141);var s=n(12)(n(101),n(224),"data-v-7c4596d7",null);t.exports=s.exports},222:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("app-title"),t._v(" "),n("div",{staticClass:"row app_container"},[n("manual"),t._v(" "),n("router-view"),t._v(" "),n("social-area")],1),t._v(" "),n("app-footer")],1)},staticRenderFns:[]}},223:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-sm-3"},[s("img",{staticClass:"manual-img",attrs:{src:n(211)}})])}]}},224:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-sm-3"},[s("div",{staticClass:"socialButtons"},[s("div",{staticClass:"socialButtons_twitter"},[s("a",{attrs:{href:t.tweetUrl,rel:"nofollow",target:"_blank"}},[s("img",{staticClass:"twitter_icon",attrs:{src:n(212)}})])]),t._v(" "),t._m(0)]),t._v(" "),s("img",{staticClass:"shareyoro-img",attrs:{src:n(213)}})])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"socialButtons_hatena"},[n("a",{staticClass:"hatena-bookmark-button",attrs:{href:"http://b.hatena.ne.jp/entry/s/tamanugi.github.io/galmoji_subtitle_player/","data-hatena-bookmark-layout":"basic-counter",title:"このエントリーをはてなブックマークに追加"}},[n("img",{staticStyle:{border:"none"},attrs:{src:"https://b.st-hatena.com/images/entry-button/button-only@2x.png",alt:"このエントリーをはてなブックマークに追加",width:"20",height:"20"}})])])}]}},225:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"player col-sm-6"},[n("div",{attrs:{id:"player-area"}},[n("div",{attrs:{id:"video-player"}}),t._v(" "),n("div",{staticClass:"caption-window caption-window-ja"},[n("span",{staticClass:"captions"},[n("span",{staticClass:"subtitle"},[t._v(t._s(t.subtitle))])])])]),t._v(" "),n("div",{staticClass:"input-group videoid-input-group"},[n("span",{staticClass:"input-group-addon"},[t._v("https://www.youtube.com/watch?v=")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.videoid,expression:"videoid"}],staticClass:"form-control",attrs:{type:"text","aria-describedby":"basic-addon3"},domProps:{value:t.videoid},on:{input:function(e){e.target.composing||(t.videoid=e.target.value)}}}),t._v(" "),n("span",{staticClass:"input-group-btn"},[n("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:t.clickPlayButton}},[n("span",{staticClass:"glyphicon glyphicon-play-circle",attrs:{"aria-hidden":"true"}}),t._v("\n        さﾚヽせﾚヽ\n      ")])])]),t._v(" "),t.debug?n("div",[t._v(t._s(t.current))]):t._e(),t._v(" "),t.debug?n("div",[t._v(t._s(t.srt.ja))]):t._e()])},staticRenderFns:[]}},226:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("ぎゃゑもι″ま＜   ､ζ､°れ〜ゃ〜 （ゝω・）v")])])}]}},227:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"footer_container"},[t._v("\n    font by "),n("a",{attrs:{href:"http://sozaiya405.chu.jp/405/",title:"「素材屋405番地」",target:"_blank"}},[t._v("「素材屋405番地」 ")]),t._v(" "),n("br"),t._v("\n    illust by "),n("a",{attrs:{href:"http://www.irasutoya.com/",title:"いらすとや",target:"_blank"}},[t._v("いらすとや")])])])}]}},247:function(t,e){},248:function(t,e){},89:function(t,e,n){"use strict";var s=n(42),i=n.n(s),a=n(228),o=n(220),r=n.n(o);i.a.use(a.a),e.a=new a.a({mode:"history",base:location.pathname,routes:[{path:"/",name:"Player",component:r.a}]})},90:function(t,e,n){"use strict";var s=n(42),i=n.n(s),a=n(230),o=n(95);i.a.use(a.a),e.a=new a.a.Store({state:o.a,mutations:o.b})},91:function(t,e,n){n(139);var s=n(12)(n(96),n(222),null,null);t.exports=s.exports},92:function(t,e,n){"use strict";function s(t){return t.split("").reduce(function(t,e){return t+=i[e]?" "+i[e]+" ":e})}e.a=s;var i=n(93)},93:function(t,e){t.exports={"上":"㊤","下":"㊦","中":"㊥","右":"㊨","左":"㊧","％":"㌫","，":"、","．":"。","ー":"─","あ":"ぁ","い":"ﾚヽ","う":"ぅ","え":"ぇ","お":"ぉ","カ":"ヵ","ガ":"ヵ″","か":"ヵゝ","が":"ヵヾ","き":"､ｷ","ぎ":"､ｷ″","く":"＜","ぐ":"＜″","け":"ﾚﾅ","げ":"ﾚﾅ″","こ":"⊇","さ":"､ﾅ","ざ":"､ﾅ″","し":"ι","じ":"ι″","そ":"ξ","ぞ":"ξ″","た":"ﾅﾆ","だ":"ﾅﾆ″","つ":"⊃","づ":"⊃″","て":"τ","で":"τ″","と":"ー⊂","ど":"ー⊂″","な":"ﾅょ","に":"ﾚﾆ","の":"＠","び":"ひ″","ぴ":"ひ°","ふ":"､ζ､","ぶ":"､ζ､″","ぷ":"､ζ､°","へ":"∧","べ":"∧″","ぺ":"∧°","ほ":"ﾚま","ぼ":"ﾚま″","ぽ":"ﾚま°","み":"ゐ","む":"￡ヽ","や":"ゃ","ゆ":"ゅ","よ":"ょ","る":"ゑ","わ":"ゎ","は":"ﾚよ","ば":"ﾚよ″","ぱ":"ﾚよ°","り":"丶,","ろ":"з","ん":"ω","ア":"了","イ":"ｨ","ウ":"ｩ","ヴ":"ｩ″","エ":"工","オ":"才","キ":"≠","ギ":"≠″","ク":"勹","グ":"勹″","ケ":"ヶ","ゲ":"ヶ″","コ":"］","ゴ":"］″","サ":"廾","ザ":"廾″","シ":"ﾞ/","ジ":"ﾞ/″","ス":"ｽ","ズ":"ｽ″","セ":"ｾ","ゼ":"ｾ″","ソ":"｀／","ゾ":"｀／″","タ":"勺","ダ":"勺″","チ":"于","ヂ":"于″","ツ":'""/',"ヅ":'""/″',"テ":"〒","デ":"〒″","ト":"├","ド":"├″","ナ":"ﾅ","ニ":"二","ヌ":"ﾇ","ネ":"ﾈ","ノ":"丿","ハ":"ﾉヽ","バ":"ﾉヾ","パ":"ﾉヽ°","ヒ":"ｔ","ビ":"ｔ″","ピ":"ｔ°","フ":"┐","ブ":"┐″","プ":"┐°","ヘ":"∧","ベ":"∧″","ペ":"∧°","ホ":"朮","ボ":"朮″","ポ":"朮°","マ":"ﾏ","ミ":"彡","ム":"厶","メ":"乂","モ":"ﾓ","ヤ":"ﾔ","ャ":"ｬ","ユ":"ﾕ","ュ":"ｭ","ヨ":"∋","ョ":"ｮ","ラ":"ﾗ","リ":"└|","ル":"｣ﾚ","レ":"∠","ロ":"□","ワ":"ﾜ","ヲ":"ｦ","ン":"･/",1:"｜",2:"ｚ",3:"З",4:"４",5:"ｓ",6:"б",7:"ﾌ",8:"８",9:"q",0:"ｏ","１":"｜","２":"ｚ","３":"З","５":"ｓ","６":"б","７":"ﾌ","９":"q","０":"ｏ","阿":" 卩可 ","挨":" 才矣 ","悪":" 惡 ","握":" 才屋 ","旭":" 九日 ","鯵":" 魚参 ","扱":" 才及 ","姐":" 女且 ","飴":" 食台 ","絢":" 糸旬 ","鮎":" 魚占 ","按":" 才安 ","暗":" 日音 ","以":" レ丶人 ","伊":" イ尹 ","位":" イ立 ","依":" イ衣 ","偉":" イ韋 ","惟":" 小隹 ","移":" 禾夕夕 ","維":" 糸隹 ","緯":" 糸韋 ","違":" ぇ韋 ","遺":" ぇ貴 ","域":" 土或 ","郁":" 有卩 ","磯":" 石幾 ","逸":" ぇ免 ","鰯":" 魚弱 ","印":" Ｅ卩 ","咽":" ロ因 ","姻":" 女因 ","引":" 弓｜ ","飲":" 食欠 ","院":" 卩完 ","韻":" 音員 ","吋":" ロ寸 ","迂":" ぇ干 ","嘘":" ロ虚 ","唄":" ロ貝 ","鰻":" 魚曼 ","姥":" 女老 ","浦":" シ甫 ","噂":" ロ尊 ","運":" ぇ軍 ","餌":" 食耳 ","叡":" 睿又 ","影":" 景彡 ","映":" 日央 ","泳":" シ永 ","衛":" 彳韋テ ","鋭":" 金兌 ","液":" シ夜 ","駅":" 馬尺 ","小":" ノ丨ヽ ","悦":" 小兌 ","越":" 走戊 ","榎":" 木夏 ","延":" 廴正 ","援":" 才爰 ","演":" シ寅 ","縁":" 糸彖 ","艶":" 豊色 ","遠":" ぇ袁 ","甥":" 生男 ","往":" 彳主 ","押":" 才甲 ","横":" 木黄 ","欧":" 区欠 ","殴":" 区殳 ","沖":" ｼΦ ","億":" イ意 ","憶":" 小意 ","牡":" 牛土 ","俺":" イ奄 ","化":" イヒ ","仮":" イ反 ","何":" イ可 ","伽":" イ力ロ ","価":" イ西 ","佳":" イ圭 ","加":" 力ロ ","嫁":" 女家 ","科":" 禾斗 ","歌":" 哥欠 ","河":" シ可 ","火":" '人' ","稼":" 禾家 ","課":" 言果 ","嘩":" ロ華 ","迦":" ぇカロ ","過":" ぇ咼 ","蚊":" 虫文 ","俄":" イ我 ","峨":" 山我 ","臥":" 臣人 ","蛾":" 虫我 ","雅":" 牙隹 ","餓":" 食我 ","塊":" 土鬼 ","廻":" 廴回 ","快":" 小夬 ","悔":" 小毎 ","改":" 己攵 ","械":" 木戒 ","海":" シ毎 ","絵":" 糸会 ","階":" 卩皆 ","劾":" 亥力 ","外":" 夕ト ","咳":" ロ亥 ","慨":" 小艮旡 ","概":" 木艮旡 ","街":" 彳圭テ ","該":" 言亥 ","鎧":" 金豈 ","蛙":" 虫圭 ","柿":" 木市 ","嚇":" ロ赤赤 ","拡":" 才広 ","格":" 木各 ","核":" 木亥 ","殻":" 売殳 ","確":" 石寉 ","赫":" 赤赤 ","較":" 車交 ","郭":" 享卩 ","額":" 客頁 ","顎":" 咢頁 ","掛":" 才圭ト ","割":" 害リ ","括":" 才舌 ","活":" シ舌 ","渇":" シ曷 ","滑":" シ骨 ","鰹":" 魚堅 ","叶":" ロ十 ","椛":" 木花 ","樺":" 木華 ","鞄":" 革包 ","株":" 木朱 ","鎌":" 金兼 ","噛":" ロ歯 ","粥":" 弓米弓 ","刈":" 乂リ ","刊":" 干リ ","喚":" ロ奐 ","慣":" 小貫 ","換":" 才奐 ","柑":" 木甘 ","棺":" 木官 ","汗":" シ干 ","肝":" 月干 ","艦":" 舟監 ","鑑":" 金監 ","館":" 食官 ","玩":" 王元 ","眼":" 目艮 ","頑":" 元頁 ","顔":" 彦頁 ","願":" 原頁 ","伎":" イ支 ","嬉":" 女喜 ","机":" 木几 ","既":" 艮旡 ","期":" 其月 ","棋":" 木其 ","機":" 木幾 ","帰":" リ帚 ","汽":" シ气 ","祈":" ネ斤 ","紀":" 糸己 ","規":" 夫見 ","記":" 言己 ","起":" 走己 ","軌":" 車九 ","輝":" 光軍 ","飢":" 食几 ","騎":" 馬奇 ","偽":" イ為 ","儀":" イ義 ","妓":" 女支 ","戯":" 虚戈 ","技":" 才支 ","擬":" 才疑 ","欺":" 其欠 ","犠":" 牛義 ","祇":" ネ氏 ","蟻":" 虫義 ","誼":" 言宜 ","議":" 言義 ","吃":" ロ乞 ","喫":" ロ契 ","桔":" 木吉 ","詰":" 言吉 ","杵":" 木午 ","却":" 去卩 ","脚":" 月去卩 ","仇":" イ九 ","休":" イ木 ","吸":" ロ及 ","救":" 求攵 ","朽":" 木万 ","泣":" シ立 ","球":" 王求 ","級":" 糸及 ","給":" 糸合 ","旧":" ｌ日 ","拒":" 才巨 ","拠":" 才夂几 ","許":" 言午 ","距":" 足巨 ","鋸":" 金居 ","漁":" シ魚 ","供":" イ共 ","僑":" イ喬 ","協":" 十劦 ","境":" 土竟 ","怯":" 小去 ","教":" 孝攵 ","橋":" 木喬 ","況":" シ兄 ","鏡":" 金竟 ","仰":" イ卯 ","凝":" 冫疑 ","極":" 木亟 ","玉":" 王、 ","桐":" 木同 ","僅":" イ菫 ","勤":" 菫力 ","均":" 土匀 ","錦":" 金帛 ","欽":" 金欠 ","謹":" 言菫 ","近":" ぇ斤 ","吟":" ロ今 ","銀":" 金艮 ","倶":" イ具 ","躯":" 身区 ","駆":" 馬区 ","駈":" 馬丘 ","駒":" 馬句 ","遇":" ぇ禺 ","隅":" 卩禺 ","川":" 丿丨丨 ","釧":" 金川 ","掘":" 才屈 ","靴":" 革イヒ ","鍬":" 金禾火 ","訓":" 言川 ","群":" 君羊 ","郡":" 君卩 ","卦":" 圭ト ","係":" イ系 ","傾":" イヒ頁 ","掲":" 才曷 ","敬":" 苟攵 ","桂":" 木圭 ","計":" 言十 ","詣":" 言旨 ","鯨":" 魚京 ","桁":" 木彳テ ","決":" シ夬 ","結":" 糸吉 ","訣":" 言夬 ","件":" イ牛 ","健":" イ廴聿 ","剣":" 僉リ ","喧":" ロ宣 ","嫌":" 女兼 ","建":" 廴聿 ","検":" 木僉 ","犬":" 尤 ","献":" 南犬 ","軒":" 車干 ","険":" 卩僉 ","験":" 馬僉 ","幻":" 幺フ ","弦":" 弓玄 ","減":" シ咸 ","源":" シ原 ","現":" 王見 ","諺":" 言彦 ","限":" 卩艮 ","個":" イ固 ","呼":" ロ乎 ","姑":" 女古 ","孤":" 孑瓜 ","弧":" 弓瓜 ","故":" 古攵 ","枯":" 木古 ","湖":" シ古月 ","糊":" 米古月 ","股":" 月殳 ","胡":" 古月 ","娯":" 女呉 ","御":" 彳卸 ","悟":" 小吾 ","檎":" 木禽 ","語":" 言吾 ","誤":" 言呉 ","醐":" 酉古月 ","鯉":" 魚里 ","倖":" イ幸 ","功":" エ力 ","効":" 交力 ","喉":" ロ候 ","垢":" 土后 ","子":" 孑 ","好":" 女子 ","孔":" 孑Ｌ ","巧":" エ万 ","弘":" 弓厶 ","恒":" 小亘 ","慌":" 小荒 ","抗":" 才亢 ","拘":" 才句 ","控":" 才空 ","攻":" エ攵 ","校":" 木交 ","梗":" 木更 ","構":" 木冓 ","江":" シ工 ","洪":" シ共 ","浩":" シ告 ","港":" シ巷 ","溝":" シ冓 ","硬":" 石更 ","稿":" 禾高 ","糠":" 米康 ","紅":" 糸工 ","絞":" 糸交 ","綱":" 糸岡 ","耕":" 耒井 ","腔":" 月空 ","航":" 舟亢 ","行":" 彳テ ","講":" 言冓 ","購":" 貝冓 ","郊":" 交卩 ","酵":" 酉孝 ","鉱":" 金広 ","鋼":" 金岡 ","項":" エ頁 ","剛":" 岡リ ","壕":" 土豪 ","拷":" 才考 ","刻":" 亥リ ","酷":" 酉告 ","腰":" 月要 ","惚":" 小忽 ","込":" ぇ入 ","此":" 止ヒ ","頃":" ヒ頁 ","坤":" 土申 ","婚":" 女昏 ","恨":" 小兪 ","根":" 木艮 ","梱":" 木困 ","混":" シ昆 ","紺":" 糸甘 ","魂":" 云鬼 ","佐":" イ左 ","唆":" ロ夋 ","嵯":" 山差 ","沙":" シ少 ","瑳":" 王差 ","砂":" 石少 ","詐":" 言乍 ","挫":" 才坐 ","債":" イ責 ","催":" イ崔 ","彩":" 采彡 ","採":" 才采 ","済":" シ斉 ","砕":" 石卆 ","細":" 糸田 ","剤":" 斉リ ","材":" 木オ ","財":" 貝才 ","冴":" ン牙 ","坂":" 土反 ","阪":" 卩反 ","堺":" 土界 ","榊":" 木ネ申 ","崎":" 山奇 ","埼":" 土奇 ","作":" イ乍 ","削":" 肖リ ","昨":" 日乍 ","錯":" 金昔 ","鮭":" 魚圭 ","撮":" 才最 ","擦":" 才察 ","札":" 木Ｌ ","鯖":" 魚青 ","錆":" 金青 ","鮫":" 魚交 ","晒":" 日西 ","惨":" 小参 ","讃":" 言賛 ","酸":" 酉夋 ","斬":" 車斤 ","仕":" イ士 ","使":" イ吏 ","刺":" 朿リ ","始":" 女台 ","姉":" 女市 ","指":" 才旨 ","孜":" 孑攵 ","斯":" 其斤 ","枝":" 木支 ","死":" 歹ヒ ","私":" 禾厶 ","紙":" 糸氏 ","肢":" 月支 ","脂":" 月旨 ","視":" ネ見 ","詞":" 言司 ","詩":" 言寺 ","試":" 言式 ","誌":" 言志 ","雌":" 止ヒ隹 ","飼":" 食司 ","事":" 亊 ","似":" イ以 ","侍":" イ寺 ","持":" 才寺 ","時":" 日寺 ","次":" ン欠 ","治":" シ台 ","磁":" 石茲 ","辞":" 舌辛 ","式":" ｪ弋 ","識":" 言音戈 ","軸":" 車由 ","叱":" ロ匕 ","執":" 幸丸 ","嫉":" 女疾 ","偲":" イ思 ","縞":" 糸高 ","射":" 身寸 ","捨":" 才舎 ","赦":" 赤攵 ","斜":" 余斗 ","社":" ネ土 ","紗":" 糸少 ","謝":" 言身寸 ","遮":" ぇ庶 ","蛇":" 虫它 ","邪":" 牙卩 ","借":" イ昔 ","灼":" 火勺 ","釈":" 釆尺 ","錫":" 金易 ","取":" 耳又 ","殊":" 歹朱 ","珠":" 王朱 ","種":" 禾重 ","腫":" 月重 ","趣":" 走耳又 ","酒":" シ酉 ","儒":" イ需 ","呪":" ロ兄 ","授":" 才受 ","就":" 京尤 ","秋":" 禾火 ","終":" 糸冬 ","蹴":" 足京尤 ","週":" ぇ周 ","酬":" 酉州 ","什":" イ十 ","住":" イ主 ","汁":" シ十 ","縦":" 糸従 ","銃":" 金充 ","祝":" ネ兄 ","縮":" 糸宿 ","術":" 彳朮テ ","述":" ぇ朮 ","俊":" イ夋 ","瞬":" 目舜 ","駿":" 馬夋 ","循":" 彳盾 ","楯":" 木盾 ","殉":" 歹旬 ","淳":" シ享 ","潤":" シ閏 ","純":" 糸屯 ","巡":" ぇ巛 ","順":" 川頁 ","処":" 夂几 ","初":" ネ刀 ","所":" 戸斤 ","緒":" 糸者 ","諸":" 言者 ","助":" 且力 ","叙":" 余又 ","徐":" 彳余 ","除":" 卩余 ","償":" イ賞 ","勝":" 月券 ","唱":" ロ昌 ","彰":" 章彡 ","招":" 才召 ","昭":" 日召 ","松":" 木公 ","樟":" 木章 ","沼":" シ召 ","消":" シ肖 ","湘":" シ木目 ","焼":" 火尭 ","礁":" 石焦 ","称":" 禾尓 ","粧":" 米庄 ","紹":" 糸召 ","訟":" 言公 ","証":" 言正 ","詳":" 言羊 ","鐘":" 金童 ","障":" 卩章 ","剰":" 乗リ ","城":" 土成 ","場":" 土易 ","嬢":" 女襄 ","情":" 小青 ","杖":" 木丈 ","浄":" シ争 ","状":" ﾝ|犬 ","錠":" 金定 ","拭":" 才式 ","植":" 木直 ","殖":" 歹直 ","織":" 糸音戈 ","職":" 耳音戈 ","触":" 角虫 ","伸":" イ申 ","信":" イ言 ","娠":" 女辰 ","慎":" 小真 ","振":" 才辰 ","新":" 辛斤 ","神":" ネ申 ","紳":" 糸申 ","進":" ぇ隹 ","針":" 金十 ","仁":" イ二 ","陣":" 卩車 ","靭":" 革刃 ","諏":" 言耳又 ","須":" 彡頁 ","酢":" 酉乍 ","吹":" ロ欠 ","推":" 才隹 ","水":" ﾌＫ ","炊":" 火欠 ","睡":" 目垂 ","粋":" 米卆 ","酔":" 酉卆 ","錘":" 金垂 ","随":" 卩ぇ有 ","髄":" 骨ぇ有 ","枢":" 木区 ","据":" 才居 ","杉":" 木彡 ","頗":" 皮頁 ","摺":" 才習 ","瀬":" シ束頁 ","凄":" 冫妻 ","姓":" 女生 ","征":" 彳正 ","性":" 小生 ","政":" 正攵 ","晴":" 日青 ","棲":" 木妻 ","栖":" 木西 ","清":" シ青 ","牲":" 牛生 ","精":" 米青 ","誠":" 言成 ","請":" 言青 ","逝":" ぇ才斤 ","醒":" 酉星 ","静":" 青争 ","税":" 禾兌 ","脆":" 月危 ","惜":" 小昔 ","積":" 禾責 ","績":" 糸責 ","跡":" 足亦 ","蹟":" 足責 ","切":" 七刀 ","拙":" 才出 ","接":" 才妾 ","折":" 才斤 ","設":" 言殳 ","説":" 言兌 ","絶":" 糸色 ","仙":" イ山 ","戦":" 単戈 ","栓":" 木全 ","洗":" シ先 ","潜":" シ替 ","線":" 糸泉 ","腺":" 月泉 ","詮":" 言全 ","選":" ぇ巽 ","鮮":" 魚羊 ","繕":" 糸善 ","噌":" ロ曾 ","疎":" 正束 ","祖":" ネ且 ","粗":" 米且 ","組":" 糸且 ","訴":" 言斥 ","僧":" イ曽 ","創":" 倉リ ","双":" 又又 ","掃":" 才帚 ","掻":" 才蚤 ","槍":" 木倉 ","槽":" 木曹 ","相":" 木目 ","糟":" 米曹 ","遭":" ぇ曹 ","鎗":" 金倉 ","騒":" 馬蚤 ","像":" イ象 ","増":" 土曽 ","憎":" 小曽 ","臓":" 月蔵 ","贈":" 貝曽 ","造":" ぇ告 ","促":" イ足 ","側":" イ貝リ ","則":" 貝リ ","即":" 艮卩 ","捉":" 才足 ","測":" シ貝リ ","速":" ぇ束 ","俗":" イ谷 ","賊":" 貝戎 ","続":" 糸売 ","揃":" 才前 ","孫":" 孑系 ","損":" 才員 ","村":" 木寸 ","他":" イ也 ","多":" 夕夕 ","打":" 才丁 ","舵":" 舟它 ","駄":" 馬太 ","体":" イ本 ","堆":" 土隹 ","対":" 文寸 ","耐":" 而寸 ","待":" 彳寺 ","滞":" シ帯 ","胎":" 月台 ","退":" ぇ艮 ","逮":" ぇ隶 ","鯛":" 魚同 ","代":" イ弋 ","醍":" 酉是 ","題":" 是頁 ","滝":" シ竜 ","択":" 才尺 ","拓":" 才石 ","沢":" シ尺 ","託":" 言モ ","濁":" シ蜀 ","諾":" 言若 ","蛸":" 虫肖 ","叩":" ロ卩 ","達":" ぇ幸 ","脱":" 月兌 ","棚":" 木月月 ","樽":" 木尊 ","誰":" 言隹 ","坦":" 土旦 ","担":" 才旦 ","淡":" シ炎 ","短":" 矢豆 ","綻":" 糸定 ","胆":" 月旦 ","誕":" 言延 ","鍛":" 金段 ","壇":" 土亶 ","弾":" 弓単 ","談":" 言炎 ","値":" イ直 ","知":" 矢ロ ","地":" 土也 ","弛":" 弓也 ","恥":" 耳心 ","池":" シ也 ","稚":" 禾隹 ","致":" 至攵 ","遅":" ぇ犀 ","竹":" ケケ ","逐":" ぇ豕 ","仲":" イ中 ","抽":" 才由 ","柱":" 木主 ","注":" シ主 ","註":" 言主 ","駐":" 馬主 ","帖":" 巾占 ","帳":" 巾長 ","張":" 弓長 ","彫":" 周彡 ","挑":" 才兆 ","暢":" 申易 ","潮":" シ朝 ","町":" 田丁 ","眺":" 目兆 ","調":" 言周 ","超":" 走召 ","跳":" 足兆 ","銚":" 金兆 ","頂":" 丁頁 ","捗":" 才歩 ","陳":" 卩東 ","津":" シ聿 ","椎":" 木隹 ","槌":" 木追 ","通":" ぇ甬 ","塚":" 土冢 ","槻":" 木夫見 ","漬":" シ責 ","辻":" ぇ十 ","鍔":" 金咢 ","椿":" 木春 ","潰":" シ貴 ","坪":" 土平 ","釣":" 金勺 ","鶴":" 寉鳥 ","低":" イ氏 ","停":" イ亭 ","偵":" イ貞 ","堤":" 土是 ","抵":" 才氏 ","提":" 才是 ","碇":" 石定 ","程":" 禾呈 ","締":" 糸帝 ","訂":" 言丁 ","諦":" 言帝 ","逓":" ぇ乕 ","釘":" 金丁 ","泥":" シ尼 ","的":" 白勺 ","溺":" シ弱 ","徹":" 彳育攵 ","鉄":" 金失 ","添":" シ忝 ","貼":" 貝占 ","転":" 車云 ","顛":" 真頁 ","伝":" イ云 ","殿":" 展殳 ","吐":" ロ土 ","妬":" 女石 ","徒":" 彳走 ","杜":" 木土 ","渡":" シ度 ","賭":" 貝者 ","途":" ぇ余 ","都":" 者卩 ","奴":" 女又 ","倒":" イ至リ ","凍":" ン東 ","悼":" 小卓 ","投":" 才殳 ","桃":" 木兆 ","棟":" 木東 ","涛":" シ寿 ","灯":" 火丁 ","燈":" 火登 ","糖":" 米唐 ","統":" 糸充 ","到":" 至リ ","討":" 言寸 ","踏":" 足沓 ","逃":" ぇ兆 ","透":" ぇ秀 ","頭":" 豆頁 ","働":" イ重力 ","動":" 重力 ","憧":" 小童 ","洞":" シ同 ","胴":" 月同 ","道":" ぇ首 ","銅":" 金同 ","涜":" シ売 ","特":" 牛寺 ","読":" 言売 ","敦":" 享攵 ","沌":" シ屯 ","豚":" 月豕 ","遁":" ぇ盾 ","頓":" 屯頁 ","鈍":" 金屯 ","謎":" 言ぇ米 ","灘":" シ難 ","捺":" 才奈 ","鍋":" 金咼 ","馴":" 馬川 ","縄":" 糸黽 ","楠":" 木南 ","軟":" 車欠 ","難":" 英隹 ","賑":" 貝辰 ","虹":" 虫工 ","如":" 女ロ ","任":" イ壬 ","妊":" 女壬 ","認":" 言忍 ","濡":" シ需 ","捻":" 才念 ","粘":" 米占 ","濃":" シ農 ","納":" 糸内 ","膿":" 月農 ","覗":" 司見 ","把":" 才巴 ","播":" 才番 ","杷":" 木巴 ","波":" シ皮 ","破":" 石皮 ","俳":" イ非 ","排":" 才非 ","敗":" 貝攵 ","杯":" 木不 ","肺":" 月市 ","配":" 酉己 ","媒":" 女某 ","梅":" 木毎 ","煤":" 火某 ","這":" ぇ言 ","伯":" イ白 ","博":" 十専 ","拍":" 才白 ","柏":" 木白 ","泊":" シ白 ","粕":" 米白 ","迫":" ぇ白 ","曝":" 日暴 ","漠":" シ莫 ","爆":" 火暴 ","縛":" 糸専 ","櫨":" 木盧 ","肌":" 月几 ","鉢":" 金本 ","抜":" 才友 ","鳩":" 九鳥 ","噺":" ロ新 ","蛤":" 虫合 ","伴":" イ半 ","判":" 半リ ","叛":" 半反 ","搬":" 才舟殳 ","斑":" 王文王 ","板":" 木反 ","版":" 片反 ","班":" 王リ王 ","畔":" 田半 ","般":" 舟殳 ","販":" 貝反 ","煩":" 火頁 ","頒":" 分頁 ","飯":" 食反 ","挽":" 才免 ","晩":" 日免 ","妃":" 女己 ","彼":" 彳皮 ","批":" 才上ヒ ","比":" 上ヒ ","秘":" 禾必 ","肥":" 月巴 ","被":" ネ皮 ","誹":" 言非 ","避":" ぇ辟 ","樋":" 木ぇ甬 ","枇":" 木上ヒ ","柊":" 木冬 ","肘":" 月寸 ","桧":" 木会 ","姫":" 女臣 ","紐":" 糸丑 ","俵":" イ表 ","彪":" 虎彡 ","標":" 木票 ","氷":" ﾗＫ ","漂":" シ票 ","瓢":" 票瓜 ","評":" 言平 ","豹":" 豸勺 ","描":" 才苗 ","秒":" 禾少 ","錨":" 金苗 ","鋲":" 金兵 ","彬":" 木木彡 ","浜":" シ兵 ","頻":" 歩頁 ","敏":" 毎攵 ","付":" イ寸 ","埠":" 土阜 ","婦":" 女帚 ","怖":" 小布 ","浮":" シ孚 ","譜":" 言普 ","賦":" 貝武 ","赴":" 走ト ","附":" 卩イ寸 ","侮":" イ毎 ","撫":" 才無 ","封":" 圭寸 ","楓":" 木風 ","伏":" イ犬 ","払":" 才厶 ","仏":" イ厶 ","物":" 牛勿 ","鮒":" 魚付 ","吻":" ロ勿 ","噴":" ロ賁 ","墳":" 土賁 ","憤":" 小賁 ","粉":" 米分 ","紛":" 糸分 ","併":" イ并 ","柄":" 木丙 ","偏":" イ扁 ","編":" 糸扁 ","辺":" ぇ刀 ","返":" ぇ反 ","遍":" ぇ扁 ","便":" イ更 ","勉":" 免力 ","娩":" 女免 ","鞭":" 革イ更 ","保":" イ呆 ","舗":" 舎甫 ","捕":" 才甫 ","補":" ネ甫 ","穂":" 禾恵 ","倣":" イ方攵 ","俸":" イ奉 ","抱":" 才包 ","放":" 方攵 ","朋":" 月月 ","法":" シ去 ","泡":" シ包 ","砲":" 石包 ","訪":" 言方 ","邦":" 手卩 ","飽":" 食包 ","傍":" イ旁 ","坊":" 土方 ","妨":" 女方 ","帽":" 巾昌 ","忙":" 小亡 ","棒":" 木奉 ","紡":" 糸方 ","肪":" 月方 ","膨":" 月彭 ","謀":" 言某 ","防":" 卩方 ","吠":" ロ犬 ","北":" ﾆ|ヒ ","朴":" 木ト ","牧":" 牛攵 ","釦":" 金ロ ","勃":" 孛力 ","没":" シ殳 ","殆":" 歹台 ","堀":" 土屈 ","幌":" 巾晃 ","本":" 夲 ","翻":" 番羽 ","埋":" 土里 ","妹":" 女未 ","昧":" 日未 ","枚":" 木攵 ","哩":" ロ里 ","膜":" 月莫 ","鮪":" 魚有 ","抹":" 才末 ","沫":" シ末 ","迄":" ぇ乞 ","慢":" 小曼 ","漫":" シ曼 ","味":" ロ未 ","魅":" 鬼未 ","稔":" 禾念 ","妙":" 女少 ","眠":" 目民 ","鵡":" 武鳥 ","婿":" 女胥 ","娘":" 女良 ","明":" 日月 ","迷":" ぇ米 ","銘":" 金名 ","鳴":" ロ鳥 ","姪":" 女至 ","綿":" 糸帛 ","麺":" 麦面 ","模":" 木莫 ","耗":" 耒毛 ","儲":" イ言者 ","餅":" 食并 ","紋":" 糸文 ","野":" 里予 ","弥":" 弓尓 ","役":" 彳殳 ","約":" 糸勺 ","訳":" 言尺 ","靖":" 立青 ","柳":" 木卯 ","鑓":" 金遣 ","愉":" 小兪 ","油":" シ由 ","輸":" 車兪 ","唯":" ロ隹 ","優":" イ憂 ","柚":" 木由 ","誘":" 言秀 ","遊":" ぇ方字 ","郵":" 垂卩 ","雄":" 広隹 ","預":" 予頁 ","幼":" 幺力 ","拗":" 才幺力 ","妖":" 女夭 ","揚":" 才易 ","擁":" 才雍 ","洋":" シ羊 ","溶":" シ容 ","熔":" 火容 ","陽":" 卩易 ","抑":" 才卯 ","欲":" 谷欠 ","浴":" シ谷 ","淀":" シ定 ","頼":" 束頁 ","絡":" 糸各 ","乱":" 舌Ｌ ","欄":" 木闌 ","濫":" シ監 ","利":" 禾リ ","理":" 王里 ","律":" 彳聿 ","掠":" 才京 ","略":" 田各 ","粒":" 米立 ","料":" 米斗 ","涼":" シ京 ","糧":" 米量 ","諒":" 言京 ","領":" 令頁 ","倫":" イ侖 ","林":" 木木 ","淋":" シ木木 ","輪":" 車侖 ","瑠":" 王留 ","涙":" シ戻 ","例":" イ歹リ ","冷":" ン令 ","礼":" ネＬ ","鈴":" 金令 ","齢":" 歯令 ","列":" 歹リ ","練":" 糸東 ","連":" ぇ車 ","錬":" 金東 ","櫓":" 木魯 ","炉":" 火戸 ","賂":" 貝各 ","路":" 足各 ","朗":" 良月 ","浪":" シ良 ","郎":" 良卩 ","肋":" 月力 ","論":" 言侖 ","倭":" イ委 ","和":" 禾ロ ","話":" 言舌 ","賄":" 貝有 ","脇":" 月劦 ","枠":" 木卆 ","鰐":" 魚咢 ","詫":" 言宅 ","椀":" 木宛 ","腕":" 月宛 ","做":" イ古攵 ","僥":" イ堯 ","儚":" イ夢 ","兢":" 克克 ","凛":" ン稟 ","剳":" 荅リ ","剽":" 票リ ","匏":" 夸包 ","卻":" 谷卩 ","呀":" ロ牙 ","吼":" ロ子Ｌ ","呟":" ロ玄 ","咀":" ロ且 ","咆":" ロ包 ","咬":" ロ交 ","咤":" ロ宅 ","哮":" ロ孝 ","唸":" ロ念 ","嗅":" ロ臭 ","嗄":" ロ夏 ","囁":" ロ聶 ","姆":" 女母 ","婀":" 女卩可 ","婢":" 女卑 ","媚":" 女眉 ","嬲":" 男女男 ","孵":" 卵孚 ","孺":" 孑需 ","峭":" 山肖 ","彷":" 彳方 ","彿":" 彳弗 ","徊":" 彳回 ","徘":" 彳非 ","徨":" 彳皇 ","忸":" 小丑 ","怙":" 小古 ","怩":" 小尼 ","恍":" 小光 ","恫":" 小同 ","悴":" 小卒 ","愕":" 小咢 ","愧":" 小鬼 ","慄":" 小栗 ","戡":" 甚戈 ","扠":" 才叉 ","扨":" 才匁 ","拆":" 才斥 ","拉":" 才立 ","挧":" 才羽 ","揉":" 木柔 ","搓":" 才差 ","撕":" 才其斤 ","擅":" 才亶 ","擂":" 才雷 ","攬":" 才覽 ","擲":" 才奠卩 ","敲":" 高攴 ","晰":" 日木斤 ","曖":" 日愛 ","朦":" 月蒙 ","朧":" 月龍 ","杼":" 木予 ","柤":" 木且 ","柎":" 木イ寸 ","檜":" 木會 ","梭":" 木夋 ","條":" ｲ1条 ","椏":" 木亞 ","椚":" 木門 ","楸":" 木禾火 ","楔":" 木契 ","槎":" 木差 ","榴":" 木留 ","檸":" 木寧 ","檬":" 木蒙 ","欖":" 木覧 ","欹":" 奇欠 ","歙":" 翕欠 ","沐":" シ木 ","泄":" シ世 ","洒":" シ西 ","涎":" シ廴正 ","涸":" シ固 ","渣":" シ査 ","滓":" シ宰 ","瀉":" シ寫 ","瀑":" シ暴 ","瀾":" シ闌 ","灑":" シ麗 ","炒":" 火少 ","炸":" 火乍 ","燼":" 火盡 ","爛":" 火闌 ","爼":" 爻且 ","珈":" 王力ロ ","珀":" 王白 ","琥":" 王虎 ","琲":" 王非 ","甦":" 更生 ","眩":" 目玄 ","瞑":" 目冥 ","矜":" 矛今 ","磋":" 石差 ","祀":" 示巳 ","祗":" 示氏 ","絆":" 糸半 ","絽":" 糸呂 ","縒":" 糸差 ","辮":" 辛糸辛 ","纜":" 糸覽 ","翔":" 羊羽 ","翹":" 堯羽 ","肛":" 月工 ","腑":" 月府 ","腱":" 月建 ","膵":" 月萃 ","臚":" 月盧 ","舐":" 舌氏 ","蛆":" 虫且 ","蛉":" 虫令 ","蛹":" 虫甬 ","蜻":" 虫靑 ","衒":" 彳玄テ ","褪":" ネ退 ","覘":" 占見 ","覯":" 冓見 ","覿":" 賣見 ","訝":" 言牙 ","訥":" 言内 ","誅":" 言朱 ","誦":" 言甬 ","諤":" 言咢 ","謗":" 言旁 ","譴":" 言遣 ","讀":" 言賣 ","豺":" 豸オ ","貂":" 豸召 ","貉":" 豸各 ","貅":" 豸イ木 ","貊":" 豸百 ","貍":" 豸里 ","貎":" 豸兒 ","豼":" 豸上ヒ ","貘":" 豸莫 ","貶":" 貝乏 ","躇":" 足著 ","躊":" 足壽 ","躓":" 足質 ","輛":" 車兩 ","輌":" 車両 ","鄂":" 咢卩 ","釵":" 金叉 ","錢":" 金戔 ","鍖":" 金甚 ","鎬":" 金高 ","鑢":" 金慮 ","鑰":" 金龠 ","鑷":" 金聶 ","鑽":" 金贊 ","鑚":" 金賛 ","靆":" 雲逮 ","靉":" 雲愛 ","勒":" 革力 ","靫":" 革叉 ","頷":" 含頁 ","顫":" 亶頁 ","颯":" 立風 ","馘":" 首或 ","騙":" 馬扁 ","驃":" 馬票 ","驗":" 馬僉 ","驤":" 馬襄 ","魏":" 委鬼 ","鮓":" 魚乍 ","鮨":" 魚旨 ","鰺":" 魚參 ","鰓":" 魚思 ","鱸":" 魚盧 ","鵲":" 昔鳥 ","鶉":" 享鳥 ","鶚":" 咢鳥 ","鶲":" 翁鳥 ","鷄":" 奚鳥 ","鷓":" 庶鳥 ","鸚":" 嬰鳥 ","齶":" 歯咢 ","孖":" 孑子 ","鸙":" 龠鳥 ","経":" 經 "}},94:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(42),i=n.n(s),a=n(91),o=n.n(a),r=n(89),u=n(90);new i.a({el:"#app",router:r.a,template:"<App/>",components:{App:o.a},store:u.a})},95:function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"b",function(){return i});var s={videoid:"NasyGUeNMTs",subtitle:"",videoTitle:"",debug:!1},i={setSubtitle:function(t,e){t.subtitle=e},setVideTitle:function(t,e){t.videoTitle=e},setVideoid:function(t,e){t.videoid=e}}},96:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(218),i=n.n(s),a=n(217),o=n.n(a),r=n(221),u=n.n(r),c=n(219),d=n.n(c);e.default={name:"app",components:{AppTitle:i.a,AppFooter:o.a,SocialArea:u.a,Manual:d.a}}},97:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app-footer"}},98:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app-title"}},99:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"manual"}}},[94]);
//# sourceMappingURL=app.156d205a6a8257363d12.js.map