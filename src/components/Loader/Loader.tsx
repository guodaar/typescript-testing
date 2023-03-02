import { MutatingDots } from 'react-loader-spinner';
import { darkBlue } from '../../const/styles';

type Props = {
  isLoading: boolean;
};

const Loader = ({ isLoading }: Props) => {
  return (
    <MutatingDots
      height="100"
      width="100"
      color={`${darkBlue}`}
      secondaryColor={`${darkBlue}`}
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{ justifyContent: 'center', height: '100vh', alignItems: 'center' }}
      wrapperClass=""
      visible={isLoading}
    />
  );
};

export default Loader;
