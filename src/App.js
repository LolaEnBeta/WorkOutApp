import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CalendarPage from './routers/CalendarPage';
import ActivityFormPage from './routers/ActivityFormPage';

function FormPage() {
return(<ActivityFormPage />)
}

function Home() {
  return(<CalendarPage />)
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activities: [],
    }
  }
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-light bg-light">
            <ul>
              <Link className="btn btn-secondary mr-3" to="/">Home</Link>
              <Link className="btn btn-secondary mr-3" to="/form/">Form</Link>
            </ul>
          </nav>

          <div>
            <Route exact path="/" component={Home} />
            <Route path="/form/" component={FormPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
