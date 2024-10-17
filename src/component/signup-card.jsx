import AuthCard from './auth-card';

function Signup() {
  const handleSignupSubmit = () => {
    console.log('Signup submitted');
  };
  return <AuthCard type='Signup' onSubmit={handleSignupSubmit} />;
}

export default Signup;
