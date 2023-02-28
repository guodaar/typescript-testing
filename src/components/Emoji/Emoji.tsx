type Props = {
  symbol: string;
};

const Emoji = ({ symbol }: Props) => {
  return (
    <span className="emoji" role="img">
      {symbol}
    </span>
  );
};

export default Emoji;
