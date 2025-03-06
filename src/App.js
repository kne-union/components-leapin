import { HashRouter } from 'react-router-dom';
import createEntry from '@kne/modules-dev/dist/create-entry';
import '@kne/modules-dev/dist/create-entry.css';
import readme from 'readme';
import FontLoader from '@components/FontLoader';
import React from 'react';

const ExampleRoutes = createEntry.ExampleRoutes;

const App = ({ globalPreset, ...props }) => {
  return (
    <HashRouter>
      <FontLoader />
      <ExampleRoutes
        {...props}
        paths={[
          {
            key: 'components',
            path: '/',
            title: '首页'
          }
        ]}
        preset={globalPreset}
        themeToken={globalPreset.themeToken}
        readme={readme}
      />
    </HashRouter>
  );
};

export default App;
