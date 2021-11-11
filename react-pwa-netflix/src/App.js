import React from 'react'
import Home from './Pages/Home';
import './styles/styles.css';
import { Router } from "@reach/router"
import TopPicks from './Pages/TopPicks';

export default function App() {
    return (
        <div>
            <Router>
                <Home path="/"/> 
                <TopPicks path="top-picks" />
            </Router>        
        </div>
    )
};
