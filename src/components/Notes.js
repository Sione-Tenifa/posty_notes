import React from 'react';
import { connect, } from 'react-redux';
import { Link, } from 'react-router-dom';
import { getNotes, } from '../reducers/notes';
import { Container, Header, Card, Image, } from 'semantic-ui-react';

class Notes extends React.Component {
  componentDidMount() {
    this.props.dispatch(getNotes())
  }

  notes = () => {
    return this.props.notes.map( note =>
      <Card key={ note.id }>
        <Card.Content>
          <Card.Header>
            {note.name}
          </Card.Header>
          <Card.Meta>
            <span>
              { note.description }
            </span>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Link to={`/notes/${note.id}`}>
            View Note
          </Link>
        </Card.Content>
      </Card>
    )
  }

  render() {
    return (
      <Container>
        <Header as="h3" textAlign="center">Notes</Header>
          <Card.Group itemsPerRow={5}>
           { this.notes() }
          </Card.Group>
        </Container>
      )
    }
  }

  const mapStateToProps = (state) => {
    return { notes: state.notes, };
  }

export default connect(mapStateToProps)(Notes);