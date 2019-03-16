import React  from 'react'
import { Switch, Route, } from 'react-router-dom';
import User_Main from './components/User_Main/User_Main';
import Arms_Armament from './components/Products/Arms_Armament';
// import Product_Build from './components/Product_Build/Product_Build';
import Cart from './components/Cart/Cart'
import Check_Out from './components/Check_Out/Check_Out'
import Admin from './components/Admin/Admin'

export default (
    <Switch>
        <Route path='/' component={User_Main} exact/>
        <Route path='/arms_armament' component={Arms_Armament}/>
        <Route path='/cart' component={Cart}/>
        <Route path='/check_out' component={Check_Out}/>
        <Route path='/admin' component={Admin}/>

    </Switch>
);

