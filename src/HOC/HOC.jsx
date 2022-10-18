
import React from "react";
import { Route,Routes} from "react-router-dom";
import Layout from '../Layout/Layout';

const HOC = ({element:Component,...rest})=>{
    const fun = (props) =>{
        return (<Layout> <Component {...props} /> </Layout>);
    }
    return(
        <>
            <Routes>
                {/* <Route {...rest} element={fun(rest)}/> */}
                <Route {...rest} element={fun(rest)}/>
            </Routes>
        </>
    );
}

export default HOC;