import * as React from 'react';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

export const App = () => {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>1</Tab>
          <Tab>2</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>One</TabPanel>
          <TabPanel>Two</TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};
