import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Logon from './pages/Logon';
import Resgister from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routes(){

    return(
        <BrowserRouter>
            <Switch>
                <Route  path="/" exact component={Logon} />
                <Route path="/cadastro" component={Resgister} />
                <Route path="/perfil" component={Profile}/>
                <Route path="/casos/novo" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    );
    
}