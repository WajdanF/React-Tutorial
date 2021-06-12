import Navbar from './navbar'; //importing navbar component
import Home from './home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './create';
import BlogDetails from './blogdetails';
import NotFound from './notfound'
function App() {


  return (
      <Router>
          <div className="App">
              <Navbar />
              <div className="content">
                  <Switch>

                      <Route exact path="/">
                          <Home />
                      </Route>

                      <Route path="/create">
                          <Create />
                      </Route>

                      <Route path="/blogs/:id">
                          <BlogDetails />
                          
                      </Route>

                      <Route path ="*"> {/*Catches all other route if its not present*/ }  
                          <NotFound />
                      </Route>
                  </Switch>
              </div>
          </div>
      </Router>
  );
}

export default App;
