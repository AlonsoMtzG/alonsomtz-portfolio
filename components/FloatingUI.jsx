import Typewriter from 'typewriter-effect';

const strings = [
  ['Hey there!', 'Nice to meet you!'],
  ['Cool, Right?', 'Move to the next!', 'You can have one like this!'],
];

export const FloatingUI = ({ currentSection }) => {
  return (
    <div
      className="fixed rounded-lg w-fit bg-zinc-800 px-3 py-2"
      style={{
        top: '11vh',
        right: '3.5rem',
        zIndex: 1000,
      }}
    >
      <span className="text-white text-lg">
        <Typewriter
          options={{
            strings: strings[currentSection],
            autoStart: true,
            loop: true,
          }}
        />
      </span>
    </div>
  );
};
