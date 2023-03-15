import Menubar from "../components/Menubar";
import {Outlet} from 'react-router-dom';

function Layout() {

    return (
        <>
            <Menubar/>
            <Outlet/>
        </>
    );
}

export default Layout;