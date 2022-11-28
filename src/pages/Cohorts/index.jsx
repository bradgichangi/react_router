import React from "react";
import { Link, Outlet } from "react-router-dom";

function Cohorts() {

    return (
        <>
            <Link to='sholes'>Sholes</Link><br />
            <Link to='bhatia'>Bhatia</Link><br />
            <Outlet />
        </>
    )

}

export default Cohorts
