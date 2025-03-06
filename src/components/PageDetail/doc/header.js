const { Header } = _JobDetail;
const BaseExample = () => {
  return (
    <Header
      name="Senior Product Manager"
      options={[
        {
          children: 'Singapore'
        },
        {
          children: '5+Years'
        },
        {
          children: "Master's Degree"
        }
      ]}
      buttons={[
        {
          children: 'Practice Questions'
        },
        {
          type: 'primary',
          children: 'Start Interview'
        }
      ]}
    />
  );
};

render(<BaseExample />);
