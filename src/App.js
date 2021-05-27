
import Header from "./components/Header"
import About from "./components/About"
import Users from "./components/Users"
import Main from "./components/Main"
import UserId from "./components/UserId"
import error from "./components/error"

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Router>
      {/* <nav>
            <li><Link to="/main">Main</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/users">Users</Link></li>
      </nav> */}

        <Switch>
          <Route exact path="/main" component={Main} />
          <Route path="/about" component={About} />
          <Route exact path="/users" component={Users} />
          <Route path="/users/:userName" component={UserId} />
          <Route component={error} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
