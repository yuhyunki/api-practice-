import {NavLink} from 'react-router-dom';
import menuStyle from './Menubar.module.css';

function Menubar() {

    const activeStyle={
        backgroundColor: '#ffce00',
        color: '#5e513d'
    };

    return (
        <div className={menuStyle.Menubar}>
            <ul className={menuStyle.MenuComponents}>
                <li><NavLink to="/" style={ ({isActive}) => isActive? activeStyle: undefined } className={menuStyle.NavLink}>홈</NavLink></li>
                <li><NavLink to="/fish" style={ ({isActive}) => isActive? activeStyle: undefined } className={menuStyle.NavLink}>물고기</NavLink></li>
                <li><NavLink to="/houseware" style={ ({isActive}) => isActive? activeStyle: undefined } className={menuStyle.NavLink}>가구</NavLink></li>
            </ul>
        </div>
    )
}

export default Menubar;