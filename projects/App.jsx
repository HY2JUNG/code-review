import React from 'react';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import './App.css';

const isActiveLink = (match, location) => {
    console.log(match, location, location.search);

    if (location.search && /number=(\d{2})/.test(location.search)) return true;
    return false;
};

const Links = () => (

    <nav>
        <NavLink exact activeClassName="active" to="/">
            Home
        </NavLink>
        <NavLink activeStyle={{ color :'green'}} to={{pathname:'/about'}}>
            About
        </NavLink>
        <NavLink isActive={isActiveLink} activeClassName="active" replace to="/contact?number">
            Contact
        </NavLink>
    </nav>
);

/*
const App = () => (
    <Router>
        <div>
            <Links/>
            <Route path="/:page/:subpage"
                render={({match}) => {
                console.log(match);
                return (
                    <div>
                        <h1>
                            PAGE:, {match.params.page || 'Home'} <br/>
                            SUB page : {match.params.subpage || 'Sub'} <br/>
                        </h1>
                    </div>
                )
            }}
            />
        </div>
    </Router>
);
*/

const App = () => (
    <Router>
        <div>
            <Links/>
            <Route path="/:date(\d{4}-\d{2}-\d{2}):ext(\.[a-z]+)"
                render={({match}) => (
                    <>
                        <h1>YES Matched!</h1>
                        <div> date: {match.params.date}</div>
                        <div> ext: {match.params.ext}</div>
                    </>
                )}
            />
        </div>
    </Router>
);

export default App;