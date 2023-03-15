import {NavLink} from 'react-router-dom';
import menuStyle from './Menubar.module.css';

function Menubar() {

    const activeStyle={
        backgroundColor: 'red'
    };

    return (
        <div className={menuStyle.Menubar}>
            <ul className={menuStyle.MenuComponents}>
                <li><NavLink to="/" style={ ({isActive}) => isActive? activeStyle: undefined }>HOME</NavLink></li>
                <li><NavLink to="/fish" style={ ({isActive}) => isActive? activeStyle: undefined }>FISH</NavLink></li>
                <li><NavLink to="/" style={ ({isActive}) => isActive? activeStyle: undefined }>menu2</NavLink></li>
            </ul>
        </div>
    )
}

export default Menubar;