import React, { Fragment, } from 'react';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
// import Notes from './components/Notes';
import FetchNotes from './components/FetchNotes';
import { Container, } from "semantic-ui-react";
import { Route, Switch, } from "react-router-dom";
// import NoteView from'./components/NoteView'


const App = () => (
  <Fragment>
    <Navbar />
    <Container>
        <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/notes" component={Notes} />
        <Route exact path="/notes/:id" component={NoteView} /> */}
        <Route path='/notes' component={FetchNotes}/>
        <Route component={NoMatch} />
        </Switch>
    </Container>
  </Fragment>
)

export default App;


