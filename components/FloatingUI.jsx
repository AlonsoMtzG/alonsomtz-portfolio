export const FloatingUI = ({ indicatorTop }) => {
  return (
    <>
      <div className="fixed top-[26rem] -right-[13.5rem] w-fit h-fit">
        <div className="rotate-90 w-[70dvh] flex items-center justify-center h-24 bg-white">
          <p className="text-black text-2xl">Hey there!</p>
        </div>
        <div
          style={{
            position: 'absolute',
            top: `${Math.min(Math.max(indicatorTop, 0), 80 - 1)}vh`, // El -1 es para asegurarse de que el indicador no exceda el fondo
            left: 0,
            width: '10px',
            height: '10px',
            background: 'red',
          }}
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 15 15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 4L9 11L4.5 7.5L9 4Z" fill="white"></path>
          </svg>
        </div>
      </div>
    </>
  );
};
