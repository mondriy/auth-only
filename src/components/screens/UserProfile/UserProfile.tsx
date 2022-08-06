import { Button } from 'components/ui';
import { useAuth } from 'hooks';
import { Message, ProfileContainer } from './Profile.style';

type UserProfileType = {
  onExit: () => void;
};

const UserProfile = ({ onExit }: UserProfileType) => {
  const { user, outAuth } = useAuth();

  const handleExit = () => {
    outAuth();
    onExit();
  };

  return (
    <ProfileContainer>
      <Message>
        Здравствуйте, <b>{user}</b>
      </Message>
      <Button color='#F5F5F5' textColor='#000' width={200} onClick={handleExit}>
        Выйти
      </Button>
    </ProfileContainer>
  );
};

export default UserProfile;
