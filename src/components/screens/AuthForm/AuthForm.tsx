import { useState } from 'react';
import { Button, CheckBox, ErrorBox, TextInput } from 'components/ui';
import { useForm, SubmitHandler } from 'react-hook-form';
import { UserService } from 'services/user.service';
import { User } from 'shared/models/User';
import { Form } from './Form.style';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type AuthFormType = {
  onAccess: (result: string | Error) => void;
};

const schema = yup.object().shape({
  login: yup.string().required('Обязательное поле'),
  password: yup.string().required('Обязательное поле'),
});

const AuthForm = ({ onAccess }: AuthFormType) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });
  const [error, setError] = useState<string | false>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleAuth: SubmitHandler<User> = (user) => {
    setLoading(true);
    UserService.authorization(user)
      .then((result) => {
        localStorage.setItem('user', JSON.stringify(result));
        onAccess(result);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  };

  return (
    <Form onSubmit={handleSubmit(handleAuth)}>
      {error && <ErrorBox>{error}</ErrorBox>}
      <TextInput
        {...register('login')}
        label='Логин'
        type='email'
        error={!!errors.login}
        errorMesage={errors?.login?.message}
      />
      <TextInput
        {...register('password')}
        label='Пароль'
        type='password'
        error={!!errors.password}
        errorMesage={errors?.password?.message}
      />
      <CheckBox>Запомнить пароль</CheckBox>
      <Button disabled={loading} type='submit'>
        Войти
      </Button>
    </Form>
  );
};

export default AuthForm;
