import { Link } from 'react-router-dom';
import clsx from 'clsx';

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      color: 'white',
      height: 50,
      fontSize: 25,
    },
    buttonLogin: {
      marginTop: theme.spacing(2),
      backgroundColor: '#95519B',
      marginBottom: theme.spacing(1),
    },
    buttonSignUp: {
      backgroundColor: '#6E6B6F',
    },
  })
);

const LoginButtons = () => {
  const classes = useStyles();

  return (
    <Box>
      <Button className={clsx(classes.button, classes.buttonLogin)} fullWidth>
        로그인
      </Button>

      <Link to="/register">
        <Button
          fullWidth
          className={clsx(classes.button, classes.buttonSignUp)}
        >
          회원가입
        </Button>
      </Link>
    </Box>
  );
};

export default LoginButtons;
