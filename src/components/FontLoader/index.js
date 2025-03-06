import Fetch from '@kne/react-fetch';
import { getPublicPath, createWithRemoteLoader } from '@kne/remote-loader';

const FontLoader = createWithRemoteLoader({
  modules: ['components-core:Icon@FontLoader']
})(({ remoteModules, children }) => {
  const [FontLoader] = remoteModules;
  return (
    <Fetch
      url={getPublicPath('components-leapin') + '/icon-build/manifest.json'}
      cache="leapin-colorful-manifest"
      ignoreSuccessState
      render={({ data }) => {
        const path = getPublicPath('components-leapin') + '/icon-build/' + data['leapin-colorful'];
        return (
          <>
            <FontLoader path={path + '/iconfont.js'} />
            {typeof children === 'function' ? children({ path }) : children}
          </>
        );
      }}
    />
  );
});

export default FontLoader;
