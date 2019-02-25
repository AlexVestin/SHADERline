import React, { Component } from "react";
import { setShader, initBuffers, drawScene, createTexture } from "./gl.js";
import "./App.css";

const vsSource = `#version 300 es
in vec4 aVertexPosition;
void main() {
  gl_Position =  aVertexPosition;
}`;

const fsSource = `#version 300 es
  precision mediump float;
  uniform vec2 iResolution;
  uniform float iTime;
  uniform vec2 iMouse;
  out vec4 fragColor;

  void mainImage(out vec4 fragColor, in vec2 fragCoord);
  void main() {
    mainImage(fragColor, gl_FragCoord.xy);
  }
  \n
  `;

class App extends Component {
  constructor() {
    super();
    this.ref = React.createRef();
  }
  componentDidMount() {
    this.canvas = this.ref.current;
    this.canvas.width = 1280;
    this.canvas.height = 720;
    this.canvas.style.backgroundColor = "black";
    this.gl = this.canvas.getContext("webgl2");

    const key = "ftrKwh";
    const shaderId = "3s23Wt";
    const url = `https://www.shadertoy.com/api/v1/shaders/${shaderId}?key=${key}`;

    fetch(url)
      .then(response => response.json())
      .then(text => this.parseResponse(text.Shader));

    this.passes = [];
    //this.initGl("");
  }

  initPass = pass => {
    const buffers = pass.inputs.filter(input => input.ctype === "buffer");
    const channels = buffers.map(pass =>"iChannel" + String(pass.channel));

    let fsShader = fsSource.split("\n");
    channels.forEach(channel => {
      fsShader.splice(3, 0, "uniform sampler2D " + channel + ";\n");
    });

    this.shaderProgram = setShader(this.gl, vsSource, fsShader.join("\n") + pass.code);;
    const channelLocations = channels.map(channel =>this.gl.getUniformLocation(this.shaderProgram, channel));
    

    this.passes.push({
      screenWidth: 1280,
      screenHeight: 720,
      program: this.shaderProgram,
      attribLocations: {
        vertexPosition: this.gl.getAttribLocation(
          this.shaderProgram,
          "aVertexPosition"
        )
      },
      uniformLocations: {
        iTime:  this.gl.getUniformLocation(
          this.shaderProgram,
          "iTime"
        ),
        resolution: this.gl.getUniformLocation(
          this.shaderProgram,
          "iResolution"
        )
      },
      bufferLocations: {
        ...channelLocations
      }
    });

    this.buffers = initBuffers(this.gl);
    requestAnimationFrame(this.animate);
  };

  animate = () => {
    this.passes.forEach((pass, i) => {
      if(i < this.passes.length)
      drawScene(this.gl, pass, this.buffers, this.readBuffer, this.writeBuffer, i === this.passes.length - 1);
    })
    
    requestAnimationFrame(this.animate);
  };

  parseResponse = response => {
    console.log(response)
    if(response) {
      this.readBuffer = createTexture(this.gl, 1280, 720);
      this.writeBuffer = createTexture(this.gl, 1280, 720);
  
      response.renderpass.forEach(pass => {
        this.initPass(pass);
      })
    }else {
      console.log("no api")
    }
   
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <canvas ref={this.ref} />
        </header>
      </div>
    );
  }
}

export default App;
