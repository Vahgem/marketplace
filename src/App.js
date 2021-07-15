
import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';
import Card from './components/card.js';




function App() {

  return (
    <div className="App">
     <Tabs >
    <TabList>
      <Tab style={{ width:"35%",textAlign:"center"}}>BUY</Tab>
      <Tab style={{ width:"35%",textAlign:"center"}}>SELL</Tab>
    </TabList>

    <TabPanel>
     <div><Card/></div>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
    </div>
  );
}

export default App;
