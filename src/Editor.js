import React, { PureComponent } from 'react'
import './App.css'
import brace from "brace";
import AceEditor from "react-ace";

import "brace/mode/glsl";
import "brace/theme/github";

const startShader = `void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = fragCoord/iResolution.xy;

    // Time varying pixel color
    vec3 col = 0.5 + 0.5*cos(iTime+uv.xyx+vec3(0,2,4));

    // Output to screen
    fragColor = vec4(col,1.0);
}
`


export default class Editor extends PureComponent {

  constructor() {
    super();

    this.latestValue = startShader;
    this.ref = React.createRef();
  }

  onChange = (e) => {
    this.latestValue = e;
  }

  render() {
    return (
        <div className="editorContainer">
        <div>
            <button>BUTTON!</button>
            <button>BUTTON!</button>
            <button>BUTTON!</button>
            <button>BUTTON!</button>
            <button>BUTTON!</button>
            <button>BUTTON!</button>
            <button>BUTTON!</button>
          </div>

        <div className="boxContainer">
          <AceEditor
            mode="glsl"
            theme="github"
            onChange={this.onChange}
            name="editor"
            editorProps={{ $blockScrolling: true }}
            class="editor"
            value={this.latestValue}
            ref= {this.ref}
            annotations={this.props.annotations}
          />

          
        </div>
          <div>
            <button onClick={() => this.props.onRun(this.latestValue)}>RUN!</button>
            <button>RUN!</button>
            <button>RUN!</button>
            <button>RUN!</button>
            <button>RUN!</button>
            <button>RUN!</button>
            <button>RUN!</button>
          </div>
      </div>
    )
  }
}
