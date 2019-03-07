import React, { PureComponent } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

var divStyle = {
  width: "100%",
  margin: "10px"
};

class CommentInfo {
  constructor(text, date, who) {
    this.text = text;
    this.date = date;
    this.who = who;
  }
}

export default class Comments extends PureComponent {
  constructor() {
    super();

    this.state = { comments: [] };
  }

  componentDidMount() {
    let array = [];
    for (let i = 0; i < 10; ++i) {
      let comment = new CommentInfo(i, "2019-03-07", "flipper");
      array.push(comment);
    }
    this.setState({ comments: array });
  }

  /*Idén är att texter och sådant kommer fetchas från
  // någon form av databas. 
  // typ någon "factory" som skapar korten med text, namn, dess barn.
  //  Detta är en template för hur ett kort kommer se ut 
  // och är just nu en temp component :P
  */

  render() {
    return (
      <CardDeck>
        {this.state.comments.map(comment => (
          <div style={divStyle}>
            <Card>
              <Card.Body>
                <Card.Title>{comment.who}</Card.Title>
                <Card.Text>{comment.text}</Card.Text>
                <Card.Link href="#">{comment.date}</Card.Link>
                <Card.Link href="#">Respond</Card.Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </CardDeck>
    );
  }
}
