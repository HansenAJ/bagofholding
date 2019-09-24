(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){},25:function(e,t,a){e.exports=a(35)},30:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),c=a.n(l),o=(a(30),a(1)),i=a(2),m=a(4),p=a(3),s=a(5),u=a(9),h=a(12),y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={message:"this is new text"},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,this.state.message))}}]),t}(n.Component),d=(a(20),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(m.a)(this,Object(p.a)(t).call(this))).state={message:[],parties:[]},e}return Object(s.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/lootapi/helloworld").then(function(e){return e.json()}).then(function(t){e.setState({message:t})})}},{key:"componentWillMount",value:function(){var e=this;fetch("/partyapi/getallparty").then(function(e){return e.json()}).then(function(t){var a=t.map(function(e){return r.a.createElement("div",{class:"partyDisp"},r.a.createElement("form",{action:"/partylist/".concat(e._id)},r.a.createElement("input",{type:"submit",value:e.name,class:"button"})),r.a.createElement("img",{src:e.picture,class:"picDisp"}),r.a.createElement("form",{method:"POST",action:"/partyapi/deleteparty/".concat(e._id,"?_method=DELETE")},r.a.createElement("input",{type:"submit",value:"Total Party Kill",class:"button"})))});e.setState({parties:a})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{class:"homecontainer"},r.a.createElement("div",{class:"partycontainer"},this.state.parties)),r.a.createElement("form",{method:"POST",action:"/partyapi/addparty"},r.a.createElement("label",null,"Party Name"),r.a.createElement("input",{type:"text",name:"name",placeholder:"Murder Hobos Inc."}),r.a.createElement("label",null,"Upload Picture"),r.a.createElement("input",{type:"text",name:"picture",placeholder:"Direct Image Path Only"}),r.a.createElement("input",{type:"submit",value:"New Party",class:"button"})))}}]),t}(n.Component)),b=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={message:["Party List State Message"],players:[],partyBag:[]},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this;fetch("/playerapi/getallplayers/".concat(this.props.match.params.partyID)).then(function(e){return e.json()}).then(function(t){var a=t.map(function(t){return r.a.createElement("div",{class:"partyDisp"},r.a.createElement("img",{src:t.picture,alt:"Character Image"}),r.a.createElement("form",{action:"/playerpage/".concat(t._id,"/").concat(e.props.match.params.partyID)},r.a.createElement("input",{type:"submit",value:t.name,class:"button"})))});e.setState({players:a})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{class:"homecontainer"},r.a.createElement("div",{class:"partycontainer"},this.state.players)),r.a.createElement("form",{method:"POST",action:"/playerapi/addplayer/"},r.a.createElement("label",null,"Player Name"),r.a.createElement("input",{type:"text",name:"name",placeholder:"Blast HardCheese"}),r.a.createElement("label",null,"Upload Picture"),r.a.createElement("input",{type:"text",name:"picture",placeholder:"Direct Image Path Only"}),r.a.createElement("input",{type:"hidden",name:"partyID",value:this.props.match.params.partyID}),r.a.createElement("input",{type:"submit",value:"Add New Player",class:"button"})))}}]),t}(n.Component),E=a(11),f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).inputHandler=function(e){var t=Object(E.a)({},a.state.newItem);t[e.target.name]=e.target.value,a.setState({newItem:t}),console.log(t[e.target.name])},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state.newItem.name),a.props.addItem(a.state.newItem)},a.state={message:["Item Add State Message"],newItem:{name:"Default Item",weight:1,quantity:1,value:1,notes:"Notes",bookRef:"Book",ownBagID:a.props.playerID}},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Add New Item"),r.a.createElement("form",{method:"POST",onSubmit:this.handleSubmit},r.a.createElement("label",null,"Item Name"),r.a.createElement("input",{type:"text",name:"name",placeholder:"A Pointy Stick",onChange:this.inputHandler}),r.a.createElement("label",null,"Weight"),r.a.createElement("input",{type:"number",name:"weight",min:"0",onChange:this.inputHandler}),r.a.createElement("label",null,"Quantity"),r.a.createElement("input",{type:"number",name:"quantity",onChange:this.inputHandler}),r.a.createElement("label",null,"Value"),r.a.createElement("input",{type:"number",name:"value",onChange:this.inputHandler}),r.a.createElement("label",null,"Notes"),r.a.createElement("input",{type:"text",name:"notes",onChange:this.inputHandler}),r.a.createElement("label",null,"BookRef"),r.a.createElement("input",{type:"text",name:"bookRef",onChange:this.inputHandler}),r.a.createElement("input",{type:"submit",value:"Add New Item"})))}}]),t}(n.Component),g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={message:["Item Display State Message"],item:[]},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log("".concat(this.props.item)),r.a.createElement("div",null,r.a.createElement("span",null,"Name = ",this.props.item.name),r.a.createElement("span",null,"Weight = ",this.props.item.weight),r.a.createElement("span",null,"Quantity = ",this.props.item.quantity),r.a.createElement("span",null,"Value = ",this.props.item.value),r.a.createElement("span",null,"BookRef = ",this.props.item.bookRef),r.a.createElement("span",null,"Notes = ",this.props.item.notes),r.a.createElement("form",{method:"POST",action:"/lootapi/deleteitem/".concat(this.props.item._id,"/").concat(this.props.playerID,"/").concat(this.props.partyID,"?_method=DELETE")},r.a.createElement("input",{type:"submit",value:"Discard Item"})))}}]),t}(n.Component),O=(n.Component,function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).AddItem=function(e){console.log("AddItem DataName: "+e.name),fetch("/lootapi/additem",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then(function(){a.getAll()})},a.getAll=function(){fetch("/lootapi/getallitems/".concat(a.props.match.params.playerID)).then(function(e){return e.json()}).then(function(e){a.setState({items:e})})},a.state={message:["Player State Message"],items:[],wealth:{plat:10,gold:9,elec:8,silv:7,copp:6}},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getAll()}},{key:"render",value:function(){var e=this;Object(E.a)({},this.state.wealth);return r.a.createElement("div",null,r.a.createElement(u.b,{to:"/homepage"},"Home"),r.a.createElement(u.b,{to:"/partylist/".concat(this.props.match.params.partyID)},"Back to Party"),this.state.items.map(function(t){return r.a.createElement(g,{item:t,playerID:e.props.match.params.playerID,partyID:e.props.match.params.partyID})}),r.a.createElement(f,{addItem:this.AddItem,playerID:this.props.match.params.playerID}))}}]),t}(n.Component)),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).AddItem=function(e){console.log("AddItem DataName: "+e.name),fetch("/lootapi/additem",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then(function(){a.getAll()})},a.getAll=function(){fetch("/lootapi/getallitems/".concat(a.props.match.params.playerID)).then(function(e){return e.json()}).then(function(e){a.setState({items:e})})},a.state={message:["Player State Message"],items:[],wealth:{plat:10,gold:9,elec:8,silv:7,copp:6}},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getAll()}},{key:"render",value:function(){var e=this;Object(E.a)({},this.state.wealth);return r.a.createElement("div",null,r.a.createElement(u.b,{to:"/homepage"},"Home"),r.a.createElement("form",{method:"POST",action:"/playerapi/deleteplayer/".concat(this.props.match.params.playerID,"/").concat(this.props.match.params.partyID,"?_method=DELETE")},r.a.createElement("input",{type:"submit",value:"Delete Player"})),r.a.createElement(u.b,{to:"/partylist/".concat(this.props.match.params.partyID)},"Back to Party"),this.state.items.map(function(t){return r.a.createElement(g,{item:t,playerID:e.props.match.params.playerID,partyID:e.props.match.params.partyID})}),r.a.createElement(f,{addItem:this.AddItem,playerID:this.props.match.params.playerID}))}}]),t}(n.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Bag Of Holding"),r.a.createElement(u.b,{to:"/homepage"},"Home"))}}]),t}(n.Component),I=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null," This is some Footer Text"))}}]),t}(n.Component),D=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u.a,null,r.a.createElement(j,null),r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:y}),r.a.createElement(h.a,{exact:!0,path:"/homepage",component:d}),r.a.createElement(h.a,{path:"/partylist/:partyID",component:b}),r.a.createElement(h.a,{path:"/partybag/:/bagID/:partyID",component:O}),r.a.createElement(h.a,{path:"/playerpage/:playerID/:partyID",component:v})),r.a.createElement(I,null)))}}]),t}(n.Component);c.a.render(r.a.createElement(D,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.2ed8150f.chunk.js.map