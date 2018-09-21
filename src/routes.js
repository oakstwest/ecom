import React  from 'react'
import { Switch, Route, } from 'react-router-dom';
import User_Main from './components/User_Main/User_Main';
import Arms_Armament from './components/Products/Arms_Armament';
import Product_Build from './components/Product_Build/Product_Build';


export default (
    <Switch>
        <Route path='/' component={User_Main} exact/>
        <Route path='/arms_armament' component={Arms_Armament}/>
        <Route path='/Product_Build' component={Product_Build}/>
    </Switch>
);
