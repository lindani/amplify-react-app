import { Amplify } from 'aws-amplify';

import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import styles from '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App({ signOut, user }) {
	console.log(user)
  return (
    <div style={styles.container}>
	      <Heading level={1}>Hello {user.attributes.email}</Heading>
      <Button onClick={signOut}>Sign out</Button>
    </div>
  );
}

export default withAuthenticator(App);