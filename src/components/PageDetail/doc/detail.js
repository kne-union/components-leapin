const { Detail } = _JobDetail;
const BaseExample = () => {
  return (
    <Detail
      sections={[
        {
          title: 'Job Description',
          children:
            'LeapIn is a Next-Gen Skills-based Talent Intelligence Platform that enables companies to build agile workforce plans to transform the future workforce. Headquarter base in Singapore with office in Shanghai.   Our mission is to create an equal and inclusive talent world where everyone has access to work regardless of background, gender, or religion.   We have developed a skills-based talent intelligence platform that empowers leaders to leverage sophisticated data and skills insights to build the best team with the right talent at the right time.  Why us  LeapIn boasts a talented team of machine learnings, engineers and business-driven folk. We are passionate about technology and how it can transform people’s lives. We pride ourselves on providing cutting edge solutions in hiring and talent development.  We’re looking for an outstanding Senior Product Manager who’s excited about building the next generation of talent experience. In this role, you’ll have the opportunity to work with a world-class to revolutionize the future workforce.'
        },
        {
          title: 'Job Requirements',
          children:
            'Responsibilities/Duties  1. Own the creation, roadmap, and features definition for part of our product portfolio  2. Work alongside with CEO to develop product vision, management and execution-short term and long-term strategic vision, product strategy  3. Collaborate with all teams; Dev, Data, Integration, Sales, CS, and UX to create a competitive product  4. Own both front-end and back-end product modules  5. Manage product backlog and prioritization to drive the successful rollout of features. 6. Own the product lifecycle from definition to client delivery with extreme quality demands 7. Deeply creative and resourceful in your approach to solving problems elegantly  8. Able to translate high-level concepts into user flows and detailed implementation  9. Committed to delivering a fantastic user experience  10. A strong communicator, able to make a compelling case for your point of view  11. Design and implement testing frameworks    Desired Expertise & Experience  1. 6+ years of experience as a product manager in Saas or HR industry  2. A team player with curious and constantly learning  3. Ability to stand up an organization and hire engineering talent  4. An entrepreneurial spirit that is flexible, experimental, and resourceful  5. Good command of English'
        }
      ]}
    />
  );
};

render(<BaseExample />);
