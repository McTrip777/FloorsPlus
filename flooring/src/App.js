import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import './styles/app.scss'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Contact from './components/Contact'
import Services from './components/Services'
import WhyWork from './components/WhyWork'

const App = () => {

  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/ourServices" component={Services} />
        <Route path="/whyWorkWithUs" component={WhyWork} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  )
}
export default App