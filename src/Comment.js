import React, { PureComponent } from "react";
import Card from "react-bootstrap/Card";

export default class Comment extends PureComponent {
  constructor() {
    super();

    this.state = {};
  }

  /*Idén är att texter och sådant kommer fetchas från
  // någon form av databas. 
  // typ någon "factory" som skapar korten med text, namn, dess barn.
  //  Detta är en template för hur ett kort kommer se ut 
  // och är just nu en temp component :P
  */

  render() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>Fab comment</Card.Title>
          <Card.Text>
            God would have said that this is why he created mankind.
          </Card.Text>
          <Card.Link href="#">Like</Card.Link>
          <Card.Link href="#">Respond</Card.Link>
        </Card.Body>
      </Card>
    );
  }
}
