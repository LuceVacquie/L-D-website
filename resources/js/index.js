import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import '../css/app.css';

//PAGES
import Home from './pages/Homepage'
import Features from './pages/Features'
import Stats from './pages/Stats'
import Pricing from './pages/Pricing'
import Help from './pages/Help'
import Contact from './pages/Contact'

//COMPONENTS
import Navbar from './components/Navbar'
import CTA from './components/CTA'
import Footer from './components/Footer'

function Router() {
    return (
        <div>
            <BrowserRouter>
                <div className="min-h-screen">
                    <div className="flex">      
                        <Navbar/>         
                    </div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/features" component={Features} />
                        <Route exact path="/stats" component={Stats} />
                        <Route exact path="/pricing" component={Pricing} />
                        <Route path="/help" component={Help} />
                        <Route path="/contact" component={Contact} />
                    </Switch>
                    <div>
                        <CTA/>   
                    </div>
                    <div className="flex inset-x-0 bottom-0">
                        <Footer/>         
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default Router;