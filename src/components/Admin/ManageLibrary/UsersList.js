import React from 'react';

import { User } from './User';
import { ItemsList } from '../../ItemsList';

const UsersList = ({data, changeRole}) => 
    <ItemsList data={data} changeRole={changeRole} Component={User} />

export { UsersList };