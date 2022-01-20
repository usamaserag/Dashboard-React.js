import React from 'react';
import './styles.scss';
import { NotificationsNone, Language, Settings } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';

const Navbar = () => {
  return(
    <div className='navbar'>
        <div className="navbar__wrapper">
            <div className="navbar__left">
                <h2 className='logo'>Dashboard</h2>
            </div>
            <div className="navbar__right">
                <div className='navbar__right__item'>
                    <NotificationsNone />
                    <div className="navbar__right__item__patch">2</div>
                </div>
                <div className='navbar__right__item'>
                    <Language />
                    <div className="navbar__right__item__patch">2</div>
                </div>
                <div className='navbar__right__item'>
                    <Settings />
                </div>
                <Avatar src="/broken-image.jpg" sx={{ width: 34, height: 34 }} />
            </div>
        </div>
    </div>
  ) ;
};

export default Navbar;