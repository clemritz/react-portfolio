import Home from './Home';
import Work from './Work';
import About from './About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/work">Work</Link>
              </li>
              <li>
                <Link to="/about">About me</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route exact path="/" component={Home} />
            <Route path="/work" component={Work} />
            <Route path="/about" component={About} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
