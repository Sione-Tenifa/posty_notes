import React from 'react'
import { connect,} from 'react-redux'
import { Route,} from 'react-router-dom'
import Notes from './Notes'
import NoteView from './NoteView'
import {getNotes,} from '../reducers/notes'
import { Loader, Segment, Dimmer, } from 'semantic-ui-react'

class FetchNotes extends React.Component {

  state = { loaded: false,}

  componentDidMount() {
    this.props.dispatch(getNotes(this.setLoaded));
  }

  setLoaded = () => {
    this.setState({ loaded: true, });
  }

  render() {
    const { loaded, } = this.state;

    if (loaded) {
      return (
        <div>
          <Route exact path="/notes" component={Notes} />
          <Route exact path="/notes/:id" component={NoteView} />
        </div>
      )
    } else {
      return (
        <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>
        </Segment>
      )
    }
  }
}

export default connect()(FetchNotes);

