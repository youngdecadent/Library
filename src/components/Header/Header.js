import React from 'react';

import { Menu, Header as SHeader, MenuItem } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

import { constants  } from '../../i18n';
import { UserIcon } from '../../components';

import './style.scss';

function Header({user}) {
  return (
    <header>
        <Menu>
            <Menu.Item as={Link} to='/' className='app__header__logo'>
                <SHeader>
                    {constants.title}
                </SHeader>
            </Menu.Item>
            <Menu.Item as={Link} to='/account'>
                <SHeader>
                    <UserIcon />
                </SHeader>
            </Menu.Item> 
            <Menu.Item as={Link} to='/admin'>
                <SHeader>
                    {constants.admin}
                </SHeader>
            </Menu.Item>
            <Menu.Item as={Link} to='/login'>
                <SHeader>
                    {constants.login}
                </SHeader>
            </Menu.Item>
            <Menu.Item as={Link} to='/author'>
                <SHeader>
                    {constants.bookAuthors}
                </SHeader>
            </Menu.Item>
            <Menu.Item as={Link} to='/book'>
                <SHeader>
                    {constants.books}
                </SHeader>
            </Menu.Item>
        </Menu>
    </header>
  );
}

export {  Header };