const Emoji = ({ symbol }: any) => {
  return (
    <span className="emoji" role="img">
      {symbol}
    </span>
  );
};

export default Emoji;
