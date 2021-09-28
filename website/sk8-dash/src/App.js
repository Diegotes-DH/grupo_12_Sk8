import logo from './logo.svg';
import './App.css';
import Productos from './Components/Productos';
import Usuarios from './Components/Usuarios';
import Home from './Components/Home';
import Persona from './Components/Persona'
import Error from './Components/Error';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/productos'>Productos</Link></li>
        <li><Link to='/usuarios'>Usuarios</Link></li>
      </ul>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/productos' component={Productos}/>
        <Route exact path='/usuarios' component={Usuarios}/>
        <Route exact path='/users' component={Persona}/>
        <Route component={Error}/>
      </Switch>
    </div>
  );
}

export default App;
