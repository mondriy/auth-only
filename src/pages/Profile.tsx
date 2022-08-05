import { Section } from 'components/layout';
import { UserProfile } from 'components/screens';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  return (
    <Section width={'min(640px, 80%)'} padding='10vh 0'>
      <UserProfile onExit={() => navigate('/login', { replace: true })} />
    </Section>
  );
};

export default Profile;
