(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{140:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(74),i=a.n(o),l=(a(84),a(9)),s=a(16),c=a(18),u=a(17),m=a(19);function f(e,t,a){var n=e.createShader(t);if(e.shaderSource(n,a),e.compileShader(n),!e.getShaderParameter(n,e.COMPILE_STATUS)){var r=String(e.getShaderInfoLog(n));return e.deleteShader(n),r}return n}var h=a(46),d=a(7),g=a.n(d),E=a(75),p=a.n(E),v=(a(93),a(94),a(95),a(31)),b=a.n(v),R=a(20),y=a.n(R),A=a(6),T=a.n(A),_=a(10),C=a.n(_),O=a(41),P=a.n(O),L="void mainImage( out vec4 fragColor, in vec2 fragCoord )\n{\n    // Normalized pixel coordinates (from 0 to 1)\n    vec2 uv = fragCoord/iResolution.xy;\n\n    // Time varying pixel color\n    vec3 col = 0.5 + 0.5*cos(iTime+uv.xyx+vec3(0,2,4));\n\n    // Output to screen\n    fragColor = vec4(col,1.0);\n}\n",x=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).onChange=function(t){e.latestValue=t},e.latestValue=L,e.ref=r.a.createRef(),e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t={margin:0,padding:0};return r.a.createElement("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center"}},r.a.createElement(b.a,null,r.a.createElement(y.a,{style:t},r.a.createElement(T.a,{xs:2}),r.a.createElement(T.a,null,r.a.createElement(C.a,{variant:"tabs",defaultActiveKey:"/home"},r.a.createElement(C.a.Item,null,r.a.createElement(C.a.Link,null,"Active")),r.a.createElement(C.a.Item,null,r.a.createElement(C.a.Link,{eventKey:"link-1"},"Option 2")),r.a.createElement(C.a.Item,null,r.a.createElement(C.a.Link,{eventKey:"disabled",disabled:!0},"Disabled"))))),r.a.createElement(y.a,{style:t},r.a.createElement(T.a,{xs:2,style:Object(h.a)({backgroundColor:"green"},t,{margin:3})},r.a.createElement("div",null)),r.a.createElement(T.a,{style:t},r.a.createElement(p.a,{mode:"glsl",theme:"github",onChange:this.onChange,name:g.a.editor,editorProps:{$blockScrolling:!0},class:g.a.editor,value:this.latestValue,ref:this.ref,annotations:this.props.annotations,style:{width:"100%",minHeight:600}}))),r.a.createElement(y.a,{style:t},r.a.createElement(T.a,{xs:2,style:Object(h.a)({},t,{margin:6})}),r.a.createElement(T.a,{style:t},r.a.createElement("div",{className:g.a.buttonGroup},r.a.createElement(P.a,{onClick:function(){return e.props.onRun(e.latestValue)}},"RUN!"),r.a.createElement(P.a,{onClick:function(){return e.props.onRun(e.latestValue)}},"RUN!"))))))}}]),t}(n.PureComponent),S=a(78),w=(a(139),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:g.a.boxContainer},r.a.createElement("h2",{style:{color:"#efefef"}},"TITLE - by whoever"),r.a.createElement("div",null,this.props.children,r.a.createElement("div",{style:{height:"5%",backgroundColor:"gray",display:"flex",justifyContent:"space-around"}},"HELLO COTNROLS ABOUT SHADER HERE",r.a.createElement("div",null)),r.a.createElement("div",{style:{height:"15%",backgroundColor:"green"}},"HELLO TEXT ABOUT SHADER HERE"),r.a.createElement("div",{style:{height:1e3,backgroundColor:"blue",marginBottom:15}},"HELLO COMMENTS ABOUT SHADER HERE")))}}]),t}(n.PureComponent)),F="#version 300 es\nin vec4 aVertexPosition;\nvoid main() {\n  gl_Position =  aVertexPosition;\n}",j="#version 300 es\n  precision mediump float;\n  uniform vec2 iResolution;\n  uniform float iTime;\n  uniform vec2 iMouse;\n  out vec4 fragColor;\n\n  void mainImage(out vec4 fragColor, in vec2 fragCoord);\n  void main() {\n    mainImage(fragColor, gl_FragCoord.xy);\n  }\n\n\n",k=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).initPass=function(t){if(e.shaderProgram=function(e,t,a){var n=f(e,e.VERTEX_SHADER,t),r=f(e,e.FRAGMENT_SHADER,a);if("object"!==typeof r)return r;var o=e.createProgram();return e.attachShader(o,n),e.attachShader(o,r),e.linkProgram(o),e.getProgramParameter(o,e.LINK_STATUS)?o:(alert("Unable to initialize the shader program: "+e.getProgramInfoLog(o)),null)}(e.gl,F,j+t),e.setState({errors:[]}),"object"!==typeof e.shaderProgram){var a=e.shaderProgram.split(":"),n=Number(a[2])-j.split("\n").length,r=a.slice(3).join(" ");return e.setState({errors:[{row:n,text:r,type:"error"}]}),void setTimeout(2e3,function(){return e.setState({errors:null})})}e.passes.push({screenWidth:1280,screenHeight:720,program:e.shaderProgram,attribLocations:{vertexPosition:e.gl.getAttribLocation(e.shaderProgram,"aVertexPosition")},uniformLocations:{iTime:e.gl.getUniformLocation(e.shaderProgram,"iTime"),resolution:e.gl.getUniformLocation(e.shaderProgram,"iResolution")}}),e.buffers=function(e){var t=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,t),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,1,1,1,-1,-1,1,-1]),e.STATIC_DRAW),{position:t}}(e.gl),requestAnimationFrame(e.animate)},e.onRun=function(t){e.passes=[],e.initPass(t)},e.animate=function(){e.passes.forEach(function(t,a){!function(e,t,a,n,r,o){e.clearColor(0,0,0,1),e.clearDepth(1),e.enable(e.DEPTH_TEST),e.depthFunc(e.LEQUAL),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT);var i=e.FLOAT;e.bindBuffer(e.ARRAY_BUFFER,a.position),e.vertexAttribPointer(t.attribLocations.vertexPosition,2,i,!1,0,0),e.enableVertexAttribArray(t.attribLocations.vertexPosition),e.useProgram(t.program);var l=[1280,720];e.uniform2f(t.uniformLocations.resolution,l[0],l[1]),e.uniform1f(t.uniformLocations.iTime,performance.now()/1e3),o?(e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,t.screenWidth,t.screenHeight)):(e.bindFramebuffer(e.FRAMEBUFFER,n.fbo),e.bindTexture(e.TEXTURE_2D,r.texture),e.uniform1i(t.bufferLocations[0],0),e.viewport(0,0,n.width,n.height)),e.drawArrays(e.TRIANGLE_STRIP,0,4)}(e.gl,t,e.buffers,e.readBuffer,e.writeBuffer,a===e.passes.length-1)}),requestAnimationFrame(e.animate)},e.canvasRef=r.a.createRef(),e.state={errors:[]},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.canvas=this.canvasRef.current,this.canvas.width=720,this.canvas.height=480,this.canvas.style.backgroundColor="black",this.gl=this.canvas.getContext("webgl2"),this.passes=[]}},{key:"render",value:function(){return r.a.createElement("div",{className:g.a.App},r.a.createElement("header",{className:g.a.header},r.a.createElement("h1",null,"SHADERline")),r.a.createElement(b.a,{fluid:!0,style:{height:"92.5%",overflow:"hidden"}},r.a.createElement(y.a,{style:{height:"100%"}},r.a.createElement(S.a,{style:{width:"45%",height:"100%"}},r.a.createElement(T.a,{style:{marginTop:"5%"}},r.a.createElement(w,null,r.a.createElement("canvas",{ref:this.canvasRef,className:"canvas"})))),r.a.createElement(T.a,{style:{marginTop:"5%"}},r.a.createElement(x,{annotations:this.state.errors,onRun:this.onRun}))),">"))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,t,a){e.exports={App:"App_App__ta45O",buttonGroup:"App_buttonGroup__6d5pK",header:"App_header__il85O",canvas:"App_canvas__38sae",editor:"App_editor__Eu0fx",canvasContainer:"App_canvasContainer__1S2pZ",boxContainer:"App_boxContainer__3bEwn"}},79:function(e,t,a){e.exports=a(140)},84:function(e,t,a){},93:function(e,t,a){}},[[79,1,2]]]);
//# sourceMappingURL=main.e1e2335e.chunk.js.map