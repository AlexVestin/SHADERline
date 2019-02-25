import React, { PureComponent } from "react";
import classes from "./App.module.css";
import AceEditor from "react-ace";
import './Navbar.css'
import "brace/mode/glsl";
import "brace/theme/github";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";


import Button from "react-bootstrap/Button";

const startShader = `void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = fragCoord/iResolution.xy;

    // Time varying pixel color
    vec3 col = 0.5 + 0.5*cos(iTime+uv.xyx+vec3(0,2,4));

    // Output to screen
    fragColor = vec4(col,1.0);
}
`;

export default class Editor extends PureComponent {
  constructor() {
    super();

    this.latestValue = startShader;
    this.ref = React.createRef();
  }

  onChange = e => {
    this.latestValue = e;
  };

  render() {

    const firstColumnWidth = 2;
    const rowStyle = {margin: 0, padding: 0};

    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Container >

          <Row style={rowStyle}>
          <Col xs={firstColumnWidth}></Col>
            <Col>
              <Nav variant="tabs" defaultActiveKey="/home">
                  <Nav.Item>
                    <Nav.Link >Active</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-1">Option 2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                      Disabled
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                </Col>
          </Row>

          <Row style={rowStyle}>
            <Col xs={firstColumnWidth} style={{  backgroundColor: "green", ...rowStyle,margin: 3, }}>
              <div ></div>
            </Col >
            <Col style={rowStyle}>
              <AceEditor
                mode="glsl"
                theme="github"
                onChange={this.onChange}
                name={classes.editor}
                editorProps={{ $blockScrolling: true }}
                class={classes.editor}
                value={this.latestValue}
                ref={this.ref}
                annotations={this.props.annotations}
                style={{ width: "100%", minHeight: 600 }}
              />
            </Col>
          </Row>

          <Row style={rowStyle}>
            <Col xs={firstColumnWidth} style={{...rowStyle, margin: 6}}></Col>
            <Col style={rowStyle}>
              <div className={classes.buttonGroup}>
                <Button onClick={() => this.props.onRun(this.latestValue)}>
                  RUN!
                </Button>
                <Button onClick={() => this.props.onRun(this.latestValue)}>
                  RUN!
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
