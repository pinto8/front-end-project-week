import React, { Component } from 'react';
import "../App.css";
import { Link } from 'react-router-dom';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

import { getNotes } from '../Actions';

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    }
  }


  componentDidMount() {
    this.setState({ notes: this.props.getNotes()})
  }

  render() {
    return(
      <div className='Notes-container'>
      <h2 className='Notes-your-notes'>Your Notes:</h2>
        <div className='Notes-card-container'>
          {this.props.notes.map((note, i) => {
            return (
                <Card key={i} className='Notes-card' body outline color="secondary">
                  <CardBody>
                    <Link to={`notes/${note._id}`}>
                      <CardTitle>{note.title}</CardTitle>
                    </Link>
                    <CardSubtitle>{note.content}</CardSubtitle>
                  </CardBody>
                </Card>
            )
          })}
        </div>
      </div>
      )
  }
} 


export default Notes;