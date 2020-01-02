import React, { useState } from 'react';
import { Button, Dropdown } from 'semantic-ui-react';

import { constants } from '../../i18n';
import { LoadingComponent } from '../hocs/LoadingComponent';
import { ErrorMessage } from '../UITable/ErrorMessage';
import { useRequest } from '../../hooks';
import { getAllBooks, getCustomers, order as orderRequest } from '../../services/http-client';
import { getDropdownOptions } from '../../utils/utils';

function Order() {
    const allUsersResponse = useRequest(getCustomers);
    const allBooksResponse = useRequest(getAllBooks);

    const [ orderProcess, setOrderProcess ] = useState(false);
    const [ selectedUser, setSelectedUser ] = useState(null);
    const [ selectedBook, setSelectedBook ] = useState(null);
    const response = useRequest(orderRequest, [selectedUser, selectedBook], orderProcess);
  
    const bookToDropdownOption = book => {
        return {
            key: book.bookId, 
            value: book.bookId,
            text: book.name
        };
    };

    const userToDropdownOption = user => {
        return {
            key: user.id,
            value: user.id, 
            text: `${user.firstName} ${user.lastName} (${user.email})`
        };
    };

    return (
      <div className="admin__order">
        {
          orderProcess &&  <LoadingComponent {...response} />
        }
        <div className="admin__order__items">
          {
            allBooksResponse.error.message ?
              <ErrorMessage text={allBooksResponse.error.message} /> 
                :
              <Dropdown 
                search
                selection
                loading={allBooksResponse.loading} 
                onChange={(e, {value}) => {
                    setOrderProcess(false);
                    setSelectedBook(value);
                }}
                value={selectedBook}
                placeholder={constants.books}
                options={getDropdownOptions(allBooksResponse.data, bookToDropdownOption)}
              />
          }
          {
            allUsersResponse.error.message ?
              <ErrorMessage text={allUsersResponse.error.message} /> 
                :
              <Dropdown 
                search
                selection
                loading={allUsersResponse.loading} 
                onChange={(e, {value}) => {
                    setOrderProcess(false);
                    setSelectedUser(value);
                }}
                value={selectedUser}
                placeholder={constants.userslist}
                options={getDropdownOptions(allUsersResponse.data, userToDropdownOption)}
              />
          }
        </div>
        <Button 
          className='registration__button'
          onClick={() => setOrderProcess(true)}
          disabled={!selectedUser || !selectedBook}>
          {constants.order}
        </Button>
      </div>
    );
  }

export { Order };