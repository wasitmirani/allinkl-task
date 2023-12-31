import React, { useEffect, useState } from 'react';
import {Routes as ReactRoutes, Route} from 'react-router-dom';
import {routes}  from "../routes/router";

import { BrowserRouter } from "react-router-dom";


const Master : React.FC=()=>{
return (
    <>
     {/* <Routes> */}
     <BrowserRouter>
     <ReactRoutes>

        {routes.map((route,i) => {
            return (
                <Route   path={route.path} key={i} element={<route.page.component />}></Route>
            )})}
        </ReactRoutes>
    </BrowserRouter>
    </>
);
}

export default Master;
