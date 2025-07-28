import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home/home'
import Header from './components/Header/header'
import Projects from './components/Projects/project'
import Contact from './components/Contact/contact'
import About from './components/About/about'
import NotFound from './components/NotFound/notfound'

const App = () => (
    <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path="/project" component={Projects} />
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/about" component={About}/>
          <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default App