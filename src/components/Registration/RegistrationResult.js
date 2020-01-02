import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Header,
} from 'semantic-ui-react';

import { constants } from "../../i18n";
import { colors } from "../../assets/semantic-colors";

const RegistrationResult = () => 
  <>
    <Header textAlign="center">
      {constants.registered}
    </Header>
    <Button 
      as={Link} to='/login' 
      color={colors.primary}>
      {constants.login}
    </Button>
  </>

export { RegistrationResult };