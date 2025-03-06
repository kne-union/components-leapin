import { createWithRemoteLoader } from '@kne/remote-loader';
import get from 'lodash/get';
import { useState } from 'react';

const VerificationCodeButton = createWithRemoteLoader({
  modules: ['components-core:LoadingButton', 'components-core:FormInfo@useFormContext', 'components-core:FormInfo@formUtils']
})(({ remoteModules, target, duration = 60, onClick, children, ...props }) => {
  const [LoadingButton, useFormContext, formUtils] = remoteModules;
  const { formState } = useFormContext();

  const targetField = formUtils.findField(formState, target);
  const [time, setTime] = useState(0);

  const setCountdown = time => {
    setTime(time);
    const timer = setInterval(() => {
      setTime(time => {
        if (time - 1 === 0) {
          clearInterval(timer);
        }
        return time - 1;
      });
    }, 1000);
  };
  return (
    <LoadingButton
      {...props}
      disabled={get(targetField, 'validate.status') !== 'PASS' || time > 0}
      onClick={async () => {
        const res = onClick && (await onClick());
        res !== false && setCountdown(duration);
      }}
    >
      {time === 0 ? children : `${time}s`}
    </LoadingButton>
  );
});

export default VerificationCodeButton;
