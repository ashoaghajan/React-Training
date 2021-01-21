import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Create from './components/Create';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/create' component={Create}/>
          </Switch>
        </div>
      </div> 
    </BrowserRouter> 
  );
}

export default App;
