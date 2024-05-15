import React, {useEffect} from 'react';
import './App.css';
import {useDispatch} from "react-redux";
import {products} from "./data/ProductData";
import {loadProduct} from "./store/Action";
import {Outlet} from "react-router-dom";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadProduct(products));
    })
    return (
        <div className="App">
           <Outlet></Outlet>
        </div>
    );
}

export default App;
