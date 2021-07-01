import React from 'react';
import { render } from 'react-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Skeleton from '@material-ui/lab/Skeleton';
import PersonIcon from '@material-ui/icons/Person';

// Fails (when cache is clean):
// import Avatar from '@material-ui/core/Avatar';
// import Alert from '@material-ui/lab/Alert';

// Works: also caches other components which makes the previous imports not fail
import { Avatar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

// ^ Both seem to work on build (when there's no alias defined in snowpack.config.js)

function App() {
  return (
    <Container maxWidth="sm">
      <Paper style={{ padding: '2rem' }} variant="outlined">
        <Grid container direction="column" justify="center" alignItems="center">
          <Skeleton variant="circle" width={40} height={40} />
          <Avatar />
          <PersonIcon />
          <Alert severity="success">This is a success alert — check it out!</Alert>
        </Grid>
      </Paper>
    </Container>
  );
}

render(<App />, document.getElementById('root'));
