import { Button } from 'components/ui';
import { useMemo } from 'react';
import { Message, ProfileContainer } from './Profile.style';

type UserProfileType = {
  onExit: () => void;
};

const UserProfile = ({ onExit }: UserProfileType) => {
  const name = useMemo(() => {
    const user = localStorage.getItem('user');
    if (localStorage.getItem('user')) return user?.replaceAll('"', '');
  }, []);

  const handleExit = () => {
    localStorage.removeItem('user');
    onExit();
  };

  return (
    <ProfileContainer>
      <Message>
        Здравствуйте, <b>{name}</b>
      </Message>
      <Button color='#F5F5F5' textColor='#000' width={200} onClick={handleExit}>
        Выйти
      </Button>
    </ProfileContainer>
  );
};

export default UserProfile;
