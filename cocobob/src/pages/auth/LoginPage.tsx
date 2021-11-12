import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import LoginHeader from '../../components/common/Header';
import LoginForm from '../../components/auth/LoginForm';
import LoginFooter from '../../components/auth/LoginFooter';
import LoginButtons from '../../components/auth/LoginButtons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      textAlign: 'center',
    },
    card: {
      marginTop: theme.spacing(10),
      border: 'none',
      boxShadow: 'none',
    },
  })
);
const LoginPage = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Card className={classes.card}>
        <LoginHeader />
        <LoginForm />
        <LoginFooter />
        <LoginButtons />
      </Card>
    </Container>
  );
};

export default LoginPage;
