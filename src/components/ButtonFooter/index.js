import { createWithRemoteLoader } from '@kne/remote-loader';
import { useState } from 'react';
import classnames from 'classnames';
import style from './style.module.scss';

const ButtonFooter = createWithRemoteLoader({
  modules: ['components-core:Common@useResize']
})(({ remoteModules, children, className }) => {
  const [useResize] = remoteModules;
  const [height, setHeight] = useState(0);
  const ref = useResize(dom => {
    setHeight(dom.clientHeight);
  });
  return (
    <div
      className={classnames(style['button-footer'], className)}
      style={{
        '--footer-height': `${height}px`
      }}
    >
      <div ref={ref} className={style['inner']}>
        {children}
      </div>
    </div>
  );
});

export default ButtonFooter;
