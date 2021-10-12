const Loading = () => {
  return (
    <div className="fixed w-full h-full text-white top-0 left-0 z-50 bg-s-transparent flex justify-center items-center loading">
      <svg className="uppercase" width="205" height="250" viewBox="0 0 40 50">
        <polygon
          stroke="#fff"
          strokeWidth="1"
          fill="none"
          points="20,1 40,40 1,40"
        />
        <text fill="#fff" x="5" y="47">
          Loading
        </text>
      </svg>
    </div>
  );
};

export default Loading;
