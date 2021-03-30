import React, { useState } from 'react'
import Login from './components/Login'
import Signup from './components/SignUp'
import DashNav from './components/DashNav'
import Dashboard from './pages/Dashboard'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css';

function App() {

  const [showComponent, setShowComponent] = useState(false)
  const [edit, setEdit ] = useState({
    title: '',
    description: '',
    prepTime: '',
    cookTime: '',
    servings: '',
    calories: '',
    recipe_image: '',
    ingredients: '',
    directions: '',
  })

return (
  <Router>
    <>
    <Switch>
    <Route exact path='/login' component={Login} />
    <Route exact path='/signup' component={Signup} /> 
    <Route exact path='/dashboard' component={Dashboard} />
    </Switch>
  </>
  </Router>
)
}


export default connect( )(App);
