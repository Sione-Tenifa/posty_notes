import React from 'react';
import { connect } from 'react-redux';
import { Header, Image, Container, Table, Button, } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';
import NoteForm from './NoteForm';
import { deleteNote, } from "../reducers/notes";
import styled from 'styled-components';


class NoteView extends React.Component {
  state = { showForm: false, };

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm, };
    })
  }

  handleDelete = () => {
    const { note, dispatch, history: { push, }, } = this.props;
    dispatch(deleteNote(note.id));
    push("/notes");
  }

  render() {
    const { showForm, } = this.state;
    const { note = {}, } = this.props;

    return (
      <AppContainer>
        <Link to="/notes">View All Notes</Link>
        <Button onClick={this.toggleForm}>
          { showForm ? 'Cancel' : 'Edit' }
        </Button>
        <Button onClick={this.handleDelete}>
          Delete
        </Button>
        { showForm ?
            <NoteForm {...note} closeForm={this.toggleForm} />
            :
            <div>
              <Header as="h3" textAlign="center">{note.name}</Header>
              <Table definition>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell />
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell>Description</Table.Cell>
                    <Table.Cell>{note.description}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          }
      </AppContainer>
    )
  }
}

const mapStateToProps = (state, props) => {
  return { note: state.notes.find( a => a.id === parseInt(props.match.params.id, )) };
}

const AppContainer = styled.div`
  background: linear-gradient(to bottom right, aliceblue, black);
`;


export default connect(mapStateToProps)(NoteView);