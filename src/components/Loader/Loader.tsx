import { MutatingDots } from 'react-loader-spinner';

type Props = {
  isLoading: boolean;
};

const Loader = ({ isLoading }: Props) => {
  return (
    <MutatingDots
      height="100"
      width="100"
      color="rgb(18,0,108)"
      secondaryColor="rgb(18,0,108)"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{ justifyContent: 'center', height: '100vh', alignItems: 'center' }}
      wrapperClass=""
      visible={isLoading}
    />
  );
};

export default Loader;
