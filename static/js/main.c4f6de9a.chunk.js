(window.webpackJsonpMiner=window.webpackJsonpMiner||[]).push([[0],{150:function(e,t,a){e.exports=a(236)},236:function(e,t,a){"use strict";a.r(t);a(151),a(177),a(179),a(180),a(182),a(183),a(184),a(185),a(186),a(187),a(188),a(189),a(191),a(192),a(193),a(194),a(195),a(196),a(197),a(198),a(199),a(200),a(202),a(203),a(204),a(205),a(206),a(207),a(208),a(209),a(210),a(211),a(212),a(213),a(214),a(215),a(216),a(217),a(218),a(219);var n=a(0),i=a.n(n),s=a(31),r=a.n(s),c=a(24),l=a.n(c),o=a(78),d=a(79),p=a(86),u=a(80),h=a(32),b=a(87),m=(a(227),a(15)),f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(p.a)(this,Object(u.a)(t).call(this,e))).state={activePanel:"main",popout:i.a.createElement(m.g,null),end:0,cardsMap:[],cards:null,maxCards:30,gold:"https://i.ibb.co/kHKsYbz/gold.png",emerald:"https://i.ibb.co/6bpJt6Y/emerald.png",iron:"https://i.ibb.co/KLs7Pjb/iron.png",cobblestone:"https://i.ibb.co/mvvLWTF/cobblestone.png"},a.componentDidMount=a.componentDidMount.bind(Object(h.a)(a)),a.initializeApp=a.initializeApp.bind(Object(h.a)(a)),a.setCards=a.setCards.bind(Object(h.a)(a)),a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;l.a.subscribe((function(t){var a=t.detail,n=a.type,i=a.data;if("VKWebAppUpdateConfig"===n){var s=document.createAttribute("scheme");s.value=i.scheme?i.scheme:"client_light",document.body.attributes.setNamedItem(s)}else"VKWebAppGetUserInfoResult"===n&&(e.setState({popout:null}),e.initializeApp())})),l.a.send("VKWebAppGetUserInfo")}},{key:"initializeApp",value:function(){var e=this;this.setCards(),setInterval((function(){var t=e.state.end-1;e.setState({end:t}),t<0&&e.setCards()}),1e3)}},{key:"randInt",value:function(e,t){return Math.floor(Math.random()*Math.floor(t+1))+e}},{key:"setCards",value:function(){var e=this;this.setState({end:5});for(var t=[],a=0;a<this.state.maxCards;a++)t.push(a);this.setState({cardsMap:t});var n=[],s=this.state,r=s.cobblestone,c=s.iron,l=s.emerald,o=s.gold;for(a=1;a<=this.state.maxCards;a++){var d=this.randInt(0,1),p=a%this.randInt(a,this.state.maxCards-5-a)===0?0===d?o:l:0===d?r:c,u=i.a.createElement(m.a,{id:"card_"+(a-1)+"_"+p,onClick:function(t){var a=e.state.cards;a[t.currentTarget.id.split("_")[1]]=i.a.createElement(m.a,{style:{width:50,height:50}}),e.setState({cards:a})},style:{width:50,height:50}},i.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:50,height:50}},i.a.createElement("img",{src:p,style:{height:"80%"}})));n.push(u)}this.setState({cards:n})}},{key:"render",value:function(){return i.a.createElement(m.h,{activePanel:this.state.activePanel,popout:this.state.popout},i.a.createElement(m.e,{id:"main"},i.a.createElement(m.f,null,"\u0428\u0430\u0445\u0442\u0430"),i.a.createElement(m.c,{style:{display:"flex",alignItems:"center",justifyContent:"center"}},i.a.createElement(m.b,null,this.state.cards)),i.a.createElement(m.c,null,i.a.createElement(m.d,null,"\u0414\u043e \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438: ",this.state.end))))}}]),t}(i.a.Component);l.a.send("VKWebAppInit"),r.a.render(i.a.createElement(f,null),document.getElementById("root"))}},[[150,1,2]]]);
//# sourceMappingURL=main.c4f6de9a.chunk.js.map