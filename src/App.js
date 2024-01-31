import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <BrowserRouter>
    <Navbar /> 
    <Switch>
    <Route exact path={"/"} component={Home} />
    <Route exact path={"/movelist"} component={UsersData} />
    <Route exact path={"/movelist"} component={UsersData} />
    <Route exact path={"/user/:id"} component={UserDetails} />
    <Route exact path={"*"} component={NotFound}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
