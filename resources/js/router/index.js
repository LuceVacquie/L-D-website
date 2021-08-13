import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Home from '../pages/Homepage'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Navbar from '../components/Navbar'

function Router() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <div className="py-4">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default Router;