import React from 'react';
import { connect, } from 'react-redux';
import { Divider, Header, Image, Container, Table, } from 'semantic-ui-react';
import { Link, } from 'react-router-dom';

const NoteView = ({ note = {} }) => (
  <Container>
    <Link to="/notes">View All Notes</Link>
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
  </Container>
)

const mapStateToProps = (state, props) => {
  return { note: state.notes.find( a => a.id === parseInt(props.match.params.id )) }
}

export default connect(mapStateToProps)(NoteView); 