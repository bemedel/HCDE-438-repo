import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Header } from './components/Header';
import { Cards } from './components/Cards';
import { Footer } from './components/Footer';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Resources } from './components/Resources';
import { Dashboard } from './components/Dashboard';


export default function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path='/'>
                    <NavBar />
                    <Header />
                    <Cards />
                    <Footer />
                </Route>
                <Route path='/about'>
                    <About />
                </Route>
                <Route path='/contact'>
                    <Contact />
                </Route>
                <Route path='/resources'>
                    <Resources />
                </Route>
                <Route path='/dashboard'>
                    <Dashboard />
                </Route>
            </Switch>
      </div>
    );
  }