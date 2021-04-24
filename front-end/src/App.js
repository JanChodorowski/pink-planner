import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from "./Homepage/Homepage";
import CalendarView from "./Calendar/CalendarView";
import DayView from "./Day/DayView";
import WeekView from "./Week/WeekView";
import Music from "./Homepage/Music";
import Focus from "./Focus";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/calendar-month">
          <CalendarView />
        </Route>
        <Route exact path="/date/:date">
          <DayView />
        </Route>
        <Route exact path="/week/:date">
          <WeekView />
        </Route>
        <Route exact path="/focus">
          <Focus />
        </Route>
        <Route exact path="/music">
          <Music />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
