import React, { Component } from "react";
import { setShader, initBuffers, drawScene } from "./gl.js";
import Editor from "./Editor";


import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import classes from "./App.module.css";
import Canvas from "./Canvas";

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
    this.canvasRef = React.createRef();
    this.state = { errors: [] };
  }
  componentDidMount() {
    this.canvas = this.canvasRef.current;
    this.canvas.width = 720;
    this.canvas.height = 480;
    this.canvas.style.backgroundColor = "black";
    this.gl = this.canvas.getContext("webgl2");
    this.passes = [];
  }

  initPass = pass => {
    this.shaderProgram = setShader(this.gl, vsSource, fsSource + pass);
    this.setState({ errors: [] });

    if (typeof this.shaderProgram !== "object") {
      const split = this.shaderProgram.split(":");
      const row = Number(split[2]) - fsSource.split("\n").length;
      const text = split.slice(3).join(" ");
      this.setState({
        errors: [
          {
            row: row,
            text: text,
            type: "error"
          }
        ]
      });

      setTimeout(2000, () => this.setState({ errors: null }));
      return;
    }

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
        iTime: this.gl.getUniformLocation(this.shaderProgram, "iTime"),
        resolution: this.gl.getUniformLocation(
          this.shaderProgram,
          "iResolution"
        )
      }
    });

    this.buffers = initBuffers(this.gl);
    requestAnimationFrame(this.animate);
  };

  onRun = value => {
    this.passes = [];
    this.initPass(value);
  };

  animate = () => {
    this.passes.forEach((pass, i) => {
      drawScene(
        this.gl,
        pass,
        this.buffers,
        this.readBuffer,
        this.writeBuffer,
        i === this.passes.length - 1
      );
    });

    requestAnimationFrame(this.animate);
  };

  render() {
    const marginTop = "5%";

    return (
      <div className={classes.App}>
        <header className={classes.header} >
          <h1>SHADERline</h1>
        </header>
        <Container fluid style={{height: "92.5%", overflow: "hidden"}}>
          <Row style={{height: "100%"}}> 
          <SimpleBar  style={{width:"45%", height:"100%"}}>
            <Col style={{marginTop}}>
            
                <Canvas>
                  <canvas ref={this.canvasRef} className="canvas" />
                </Canvas>
              
            </Col>
            </SimpleBar>

            <Col style={{marginTop}}>
              <Editor annotations={this.state.errors} onRun={this.onRun} />
            </Col>
          </Row>
          >
        </Container>
      </div>
    );
  }
}

export default App;
