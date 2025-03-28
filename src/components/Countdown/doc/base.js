const { default: Countdown } = _Countdown;
const { Button, Flex } = antd;
const { useRef } = React;
const BaseExample = () => {
  const ref = useRef(null);
  return (
    <Flex gap={10}>
      <Countdown
        ref={ref}
        onProgress={time => {
          console.log(time);
        }}
        onComplete={() => {
          console.log('complete');
        }}
      />

      <Button
        onClick={() => {
          ref.current.restart();
        }}
      >
        重新开始
      </Button>
      <Button
        onClick={() => {
          ref.current.pause();
        }}
      >
        暂停
      </Button>
      <Button
        onClick={() => {
          ref.current.start();
        }}
      >
        开始
      </Button>
    </Flex>
  );
};

render(<BaseExample />);
