import { Section } from 'components/layout';
import { AuthForm } from 'components/screens';
import { useNavigate } from 'react-router-dom';

const Authorization = () => {
  const navigate = useNavigate();

  return (
    <Section width={'min(640px, 80%)'} padding='10vh 0'>
      <AuthForm
        onAccess={(result) => navigate('/profile', { replace: true })}
      />
    </Section>
  );
};

export default Authorization;
