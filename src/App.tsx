import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Create from './components/Create';
import BlogDetails from './components/BlogDetails';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/create' component={Create}/>
            <Route path='/:id' component={BlogDetails}/>
          </Switch>
        </div>
      </div> 
    </BrowserRouter> 
  );
}

export default App;
