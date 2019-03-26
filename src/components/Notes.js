import React from 'react';
import { connect, } from 'react-redux';
import NoteForm from './NoteForm'
import { Link, } from 'react-router-dom';
import { getNotes, } from '../reducers/notes';
import { Container, Header, Card, Image, Button, } from 'semantic-ui-react';
import styled from 'styled-components';


class Notes extends React.Component {

  state = { showForm: false,}

  componentDidMount() {
    this.props.dispatch(getNotes())
  }

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm, };
    })
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
    const{ showForm, } = this.state; 
    return (
      <AppContainer>
        <Header as="h3" textAlign="center">Notes</Header>
          <Button color='blue' onClick={this.toggleForm}>
            { showForm ? 'Hide Form' : 'Show Form' }
          </Button>
          { showForm ?
            <NoteForm closeForm={this.toggleForm}/>
            :
            <Card.Group itemsPerRow={5}>
            { this.notes() }
            </Card.Group>
          }
        </AppContainer>
      )
    }
  }

  const mapStateToProps = (state) => {
    return { notes: state.notes, };

  }

  const AppContainer = styled.div`
  background: linear-gradient(to bottom right, aliceblue, blue);
`;


export default connect(mapStateToProps)(Notes);