import { MutatingDots } from 'react-loader-spinner';

type Props = {
  isLoading: boolean;
};

const Loader = ({ isLoading }: Props) => {
  return (
    <MutatingDots
      height="100"
      width="100"
      color="#4fa94d"
      secondaryColor="#4fa94d"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{ justifyContent: 'center', height: '100vh', alignItems: 'center' }}
      wrapperClass=""
      visible={isLoading}
    />
  );
};

export default Loader;
