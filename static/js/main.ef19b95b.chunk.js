(this.webpackJsonpfacerec=this.webpackJsonpfacerec||[]).push([[0],{332:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(36),i=a.n(c),r=(a(91),a(79)),s=a(80),l=a(85),u=a(84),A=(a(92),function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("a",{href:"https://github.com/pullani/react-clarifai-face-detection",target:"_blank",rel:"noopener noreferrer",className:"f4 link dim black underline pa3 pointer"},"Git-hub"))}),m=a(81),g=a.n(m),p=(a(93),a(82)),d=a.n(p),f=function(){return o.a.createElement("div",{className:"ma4 mt0 pa3 center"},o.a.createElement(g.a,{className:"Tilt br3 shadow-1",options:{max:55},style:{height:120,width:120}},o.a.createElement("div",{className:"Tilt-inner pa3"},o.a.createElement("img",{style:{paddingTop:"1px"},alt:"logo",src:d.a}))))},v=(a(94),function(e){var t=e.onInputChange,a=e.onButtonSubmit;return o.a.createElement("div",{className:"ma3"},o.a.createElement("p",{className:"f3"},"Detect faces in your pictures. Give it a try!"),o.a.createElement("p",{className:"f6 white"},"Your URL should end with a valid image extension."),o.a.createElement("div",{className:"center"},o.a.createElement("div",{className:"form center pa4 br3 shadow-5"},o.a.createElement("input",{className:"f4 pa2 w-70 center",type:"text",placeholder:"Paste your image URL.",onChange:t})," ",o.a.createElement("button",{className:"w-30 grow f5 link ph3 pv2 dib ba white bg-light-purple",onClick:a},"Detect"))))}),w=(a(95),function(e){var t=e.imageUrl,a=e.box,n=e.faceCountPrompt;return o.a.createElement("div",{className:"center pa1"},o.a.createElement("div",{className:"absolute mt2"},o.a.createElement("img",{id:"inputImage",alt:"",position:"absolute",src:t,width:"auto",height:"250px"}),void 0!==a&&a.map((function(e){return o.a.createElement("div",{key:e.topRow,className:"bounding-box",style:{top:e.topRow,right:e.rightCol,bottom:e.bottomRow,left:e.leftCol}})})),o.a.createElement("h4",{className:"absolute w-100"},n)))}),b=(a(96),a(83)),C=a.n(b),B=a(37),I=a.n(B),h={particles:{number:{value:100,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"window",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0},N=new I.a.App({apiKey:"3cc0ce0cb8ac415c9965bf3eaa387aa4"}),E=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).calculateFaceLocation=function(e){var t=document.getElementById("inputImage"),a=Number(t.width),n=Number(t.height);if(void 0!==e.outputs[0].data.regions)return e.outputs[0].data.regions.map((function(e){var t=e.region_info.bounding_box;return{leftCol:t.left_col*a,topRow:t.top_row*n,rightCol:a-t.right_col*a,bottomRow:n-t.bottom_row*n}}))},e.getNumOfFaces=function(t){if(void 0!==t.outputs[0].data.regions){var a=Object.keys(t.outputs[0].data.regions).length;e.setState({faceCountPrompt:a+" faces found!"})}else e.setState({faceCountPrompt:"0 faces found!"})},e.displayFaceBox=function(t){e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),N.models.predict(I.a.FACE_DETECT_MODEL,e.state.input).then((function(t){return e.displayFaceBox(e.calculateFaceLocation(t)),t})).then((function(t){e.getNumOfFaces(t)})).catch((function(e){return console.log(e)}))},e.state={input:"",imageUrl:"",box:[],faceCountPrompt:""},e}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(C.a,{className:"particles",params:h}),o.a.createElement(f,null),o.a.createElement(v,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),o.a.createElement(w,{imageUrl:this.state.imageUrl,box:this.state.box,faceCountPrompt:this.state.faceCountPrompt}),o.a.createElement(A,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(331);i.a.render(o.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},82:function(e,t){e.exports="data:image/png;base64,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"},86:function(e,t,a){e.exports=a(332)},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.ef19b95b.chunk.js.map