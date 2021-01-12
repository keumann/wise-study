import React from 'react';
import { Row } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Record from '../pages/Record';
import Chatting from '../pages/Chatting';
import Etc from '../pages/Etc';



export default function Content() {
  return (
    <Row>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/record" component={Record} />
        <Route path="/chatting" component={Chatting} />
        <Route path="/etc" component={Etc} />
      </Switch>
    </Row>
  )
}