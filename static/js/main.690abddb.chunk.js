(window.webpackJsonpMiner=window.webpackJsonpMiner||[]).push([[0],{152:function(e,t,a){e.exports=a(239)},229:function(e,t,a){},238:function(e,t,a){},239:function(e,t,a){"use strict";a.r(t);a(153),a(179),a(181),a(182),a(184),a(185),a(186),a(187),a(188),a(189),a(190),a(191),a(193),a(194),a(195),a(196),a(197),a(198),a(199),a(200),a(201),a(202),a(204),a(205),a(206),a(207),a(208),a(209),a(210),a(211),a(212),a(213),a(214),a(215),a(216),a(217),a(218),a(219),a(220),a(221);var n=a(0),i=a.n(n),s=a(35),r=a.n(s),c=a(25),o=a.n(c),l=a(43),d=a(44),m=a(46),u=a(45),p=a(36),h=a(47),b=(a(84),a(229),a(85)),g=a.n(b),f=a(17),v=a(95),E=a.n(v),C=a(96),j=a.n(C),O=(a(238),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"card-button",onClick:function(){return e.props.goRef()},style:{backgroundImage:this.props.bg}},i.a.createElement("div",{className:"inner"},i.a.createElement("div",{className:"left"},i.a.createElement("div",{className:"title"},this.props.title),i.a.createElement("div",{className:"desc"},this.props.desc)),i.a.createElement("img",{className:"img",src:this.props.img})))}}]),t}(n.PureComponent)),y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={activePanel:"main",mainContextOpened:!1,popout:i.a.createElement(f.k,null),user:{first_name:"",last_name:"",photo_100:""},end:0,cardsMap:[],cards:null,maxCards:30,gold:"https://i.ibb.co/kHKsYbz/gold.png",emerald:"https://i.ibb.co/6bpJt6Y/emerald.png",iron:"https://i.ibb.co/KLs7Pjb/iron.png",cobblestone:"https://i.ibb.co/mvvLWTF/cobblestone.png"},a.componentDidMount=a.componentDidMount.bind(Object(p.a)(a)),a.initializeApp=a.initializeApp.bind(Object(p.a)(a)),a.setCards=a.setCards.bind(Object(p.a)(a)),a.toggleMainContext=a.toggleMainContext.bind(Object(p.a)(a)),a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.init({tool:["console"]}),o.a.subscribe((function(t){var a=t.detail,n=a.type,i=a.data;if(console.log(n,i),"VKWebAppUpdateConfig"===n){var s=document.createAttribute("scheme");s.value=i.scheme?i.scheme:"client_light",document.body.attributes.setNamedItem(s)}else"VKWebAppGetUserInfoResult"===n&&(e.setState({popout:null,user:i}),e.initializeApp())})),o.a.send("VKWebAppGetUserInfo")}},{key:"initializeApp",value:function(){var e=this;this.setCards(),setInterval((function(){if("mine"===e.state.activePanel){var t=e.state.end-1;e.setState({end:t}),t<0&&e.setCards()}}),1e3)}},{key:"randInt",value:function(e,t){return Math.floor(Math.random()*Math.floor(t+1))+e}},{key:"setCards",value:function(){var e=this;this.setState({end:5});for(var t=[],a=0;a<this.state.maxCards;a++)t.push(a);this.setState({cardsMap:t});var n=[],s=this.state,r=s.cobblestone,c=s.iron,o=s.emerald,l=s.gold;for(a=1;a<=this.state.maxCards;a++){var d=this.randInt(0,1),m=a%this.randInt(a,this.state.maxCards-a)===0?0===d?l:o:0===d?r:c,u=i.a.createElement("div",{className:"card",id:"card_"+(a-1)+"_"+m,onClick:function(t){var a=e.state.cards;a[t.currentTarget.id.split("_")[1]]=i.a.createElement("div",{className:"card"}),e.setState({cards:a})},style:{width:50,height:50}},i.a.createElement("div",{className:"card_content"}," ",i.a.createElement("img",{src:m,style:{height:"80%"}})));n.push(u)}this.setState({cards:n})}},{key:"toggleMainContext",value:function(){this.setState({mainContextOpened:!this.state.mainContextOpened})}},{key:"render",value:function(){var e=this;return i.a.createElement(f.l,{activePanel:this.state.activePanel,popout:this.state.popout},i.a.createElement(f.f,{id:"main"},i.a.createElement(f.j,null,i.a.createElement(f.h,{aside:i.a.createElement(j.a,{style:{transform:"rotate(".concat(this.state.mainContextOpened?"180deg":"0",")")}}),before:i.a.createElement(f.a,{size:36,src:this.state.user.photo_100}),onClick:function(){e.toggleMainContext()}},this.state.user.first_name+" "+this.state.last_name)),i.a.createElement(f.i,{opened:this.state.mainContextOpened,onClose:function(){e.toggleMainContext()}},i.a.createElement(f.e,null,i.a.createElement(f.b,{before:i.a.createElement(E.a,null),onClick:function(){e.toggleMainContext()}},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043d\u0438\u043a"))),i.a.createElement(O,{title:"\u0428\u0430\u0445\u0442\u0430",desc:"\u0414\u043e\u0431\u044b\u0432\u0430\u0439\u0442\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044b \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u0434\u0440\u0443\u0433\u0438\u043c\u0438 \u0438\u0433\u0440\u043e\u043a\u0430\u043c\u0438 \u043f\u043e \u0431\u043b\u0438\u0437\u043e\u0441\u0442\u0438.",bg:"linear-gradient(90deg, rgba(214,109,117,1) 0%, rgba(226,149,135,1) 100%)",img:"https://i.ibb.co/0GRjNQj/card-ic-vk.png",goRef:function(){}})),i.a.createElement(f.f,{id:"mine"},i.a.createElement(f.g,null,"\u0428\u0430\u0445\u0442\u0430"),i.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"}},i.a.createElement("div",{className:"grid"},this.state.cards)),i.a.createElement(f.c,null,i.a.createElement(f.d,null,"\u0414\u043e \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438: ",this.state.end))))}}]),t}(i.a.Component);o.a.send("VKWebAppInit"),r.a.render(i.a.createElement(y,null),document.getElementById("root"))}},[[152,1,2]]]);
//# sourceMappingURL=main.690abddb.chunk.js.map