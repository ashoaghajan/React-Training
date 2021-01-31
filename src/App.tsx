import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Create from './components/Create';
import BlogDetails from './components/Blog/BlogDetails';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/create' component={Create}/>
            <Route exact path='/blog/:id' component={BlogDetails}/>
            <Route path='*' component={NotFound}/>
          </Switch>
        </div>
      </div> 
    </BrowserRouter> 
  );
}

export default App;
