import './App.css';
import OrdersList from './components/OrdersList';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/" >Home page</Link> | 
        <Link to="/orders" >Orders</Link>

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/orders" component={OrdersList}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
