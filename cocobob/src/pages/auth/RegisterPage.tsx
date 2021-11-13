import { useState, useCallback } from 'react';

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import Header from '../../components/common/Header';
import RegisterHeader from '../../components/auth/Register/RegisterHeader';
import RegisterForm from '../../components/auth/Register/RegisterForm';
import RegisterButton from '../../components/auth/Register/RegisterButton';
import { signUpData } from '../../types/types';
import { useDispatch } from 'react-redux';
import { register } from '../../features/auth/slices';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      textAlign: 'center',
    },
    card: {
      marginTop: theme.spacing(10),
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      border: '1px solid black',
      boxShadow: 'none',
    },
  })
);

const RegisterPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [birthday, setBirthday] = useState<Date | null>(new Date());
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');

  const [signUpInfo, setSignUpInfo] = useState<signUpData>({
    email: '',
    user_pw: '',
    sex: '',
    birth: '',
  });

  const checkPassword = (passwordConfirm: string): boolean => {
    if (passwordConfirm === signUpInfo.user_pw) return false;
    else return true;
  };

  const onSubmit = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (birthday instanceof Date)
        setSignUpInfo({
          ...signUpInfo,
          birth: birthday.toISOString().slice(0, 10).replace(/-/g, ''),
        });
      dispatch(register(signUpInfo));
    },
    [birthday, signUpInfo, dispatch]
  );

  const onChange = useCallback(
    (e) => {
      console.log(e.target);
      const { name, value } = e.target;
      if (name === 'passwordConfirm') {
        setPasswordConfirm(value);
      } else
        setSignUpInfo({
          ...signUpInfo,
          [name]: value,
        });
    },
    [signUpInfo]
  );

  return (
    <Container className={classes.container}>
      <Header />
      <Card className={classes.card} variant={'outlined'}>
        <RegisterHeader />
        <Container>
          <RegisterForm
            signUpInfo={signUpInfo}
            passwordConfirm={passwordConfirm}
            onChange={onChange}
            checkPassword={checkPassword}
            birthday={birthday}
            setBirthday={setBirthday}
          />
          {/* {error.error?.message !== undefined && (
            <ErrorMessage>{'회 원 가 입  실 패 !'}</ErrorMessage>
          )} */}
          <RegisterButton onSubmit={onSubmit} />
        </Container>
      </Card>
    </Container>
  );
};

export default RegisterPage;
