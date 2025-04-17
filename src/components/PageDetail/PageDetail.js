import Header from './Header';
import Detail from './Detail';
import RightPanel from './RightPanel';
import ButtonFooter from '@components/ButtonFooter';
import { Flex, Row, Col, Button, Space } from 'antd';
import style from './style.module.scss';

const PageDetail = ({ name, options, buttons, detailTitle, sections, rightOptions }) => {
  return (
    <>
      <Flex vertical gap={20} flex={1}>
        <Header name={name} options={options} buttons={buttons} />
        <Row className={style['main']} gutter={[20, 20]}>
          <Col className={style['main-left']} span={24}>
            <Detail sections={sections} title={detailTitle} />
          </Col>
          {rightOptions && (
            <Col>
              <RightPanel {...rightOptions} />
            </Col>
          )}
        </Row>
      </Flex>
      <ButtonFooter className={style['footer-btn']}>
        {buttons.length > 0 &&
          buttons.map((props, index) => {
            return <Button {...props} size="large" shape="round" key={index} />;
          })}
      </ButtonFooter>
    </>
  );
};

export default PageDetail;
