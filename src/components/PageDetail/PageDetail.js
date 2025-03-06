import Header from './Header';
import Detail from './Detail';
import RightPanel from './RightPanel';
import { Flex, Row, Col } from 'antd';

const PageDetail = ({ name, options, buttons, detailTitle, sections, rightOptions }) => {
  return (
    <Flex vertical gap={20}>
      <Header name={name} options={options} buttons={buttons} />
      <Row gutter={[20, 20]} wrap={false}>
        <Col flex={1}>
          <Detail sections={sections} title={detailTitle} />
        </Col>
        {rightOptions && (
          <Col>
            <RightPanel {...rightOptions} />
          </Col>
        )}
      </Row>
    </Flex>
  );
};

export default PageDetail;
