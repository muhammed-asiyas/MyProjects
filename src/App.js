import {Route, Switch, Redirect} from 'react-router-dom'
import Login from './components/Login/login'
import Home from './components/Home/home'
import Projects from './components/Projects/project'
import Contact from './components/Contact/contact'
import About from './components/About/about'
import NotFound from './components/NotFound/notfound'
import NotesApp from './components/Projects/ProjectItem/NotesApp/app'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => (
    <Switch>
      <Route exact path='/login' component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/project" component={Projects} />
      <ProtectedRoute exact path="/contact" component={Contact}/>
      <ProtectedRoute exact path="/about" component={About}/>
      <ProtectedRoute exact path="/project/NotesApp" component={NotesApp} />
      <Route exact path="/bad-path" component={NotFound} />
      <Redirect to="bad-path"/>
    </Switch>
)

export default App