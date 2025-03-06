const { Company } = _JobDetail;
const BaseExample = () => {
  return (
    <Company
      name="LeapIn"
      logo={{ src: '/favicon.svg' }}
      homepage="https://www.leapin-ai.com"
      images={[{ src: '/images/1.jpg' }, { src: '/images/2.jpg' }, { src: '/images/3.png' }]}
      options={[
        {
          children: '50 Employee'
        },
        {
          children: 'https://www.leapin-ai.com'
        },
        {
          children: '21 Collyer Quay,Singapore'
        }
      ]}
    />
  );
};

render(<BaseExample />);
