import React, { useState } from 'react';
import { useAuth } from '../../hooks/auth';

const Login = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const { logInUser } = useAuth();

  const onLoginClick = () => {
    if (email && password) {
      logInUser({ email, password });
    }
  };

  return (
    <div>
      <p>Login</p>
      <input
        type='email'
        name='email'
        onChange={event => setEmail(event.target.value)}
      />
      <input
        type='password'
        name='password'
        onChange={event => setPassword(event.target.value)}
      />
      <button onClick={onLoginClick}>Acessar</button>
    </div>
  );
};

export default Login;
