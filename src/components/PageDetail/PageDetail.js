import Header from './Header';
import Detail from './Detail';
import RightPanel from './RightPanel';
import { Flex, Row, Col } from 'antd';
import style from './style.module.scss';

const PageDetail = ({ name, options, buttons, detailTitle, sections, rightOptions }) => {
  return (
    <Flex vertical gap={20} flex={1}>
      <Header name={name} options={options} buttons={buttons} />
      <Row className={style['main']} gutter={[20, 20]} wrap={false}>
        <Col className={style['main-left']}>
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
