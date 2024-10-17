import AuthCard from './auth-card';

function Login() {
  const handleLoginSubmit = () => {
    console.log('Login submitted');
  };

  return <AuthCard type='Login' onSubmit={handleLoginSubmit}/>;
}

export default Login;
