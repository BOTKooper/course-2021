import React from 'react';
import './App.css';
import { useQuery } from '@apollo/client';
import StoreTable from './StoreTable';
import DistrictTable from './DistrictTable';
import SpdTable from './SpdTable';
import { GET_ALL_DISTRICTS, GET_ALL_SPDS, GET_ALL_STORES } from './api/schemas';
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';


function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function App() {
  const [currentTabId, setCurrentTabId] = React.useState(0);
  
  const { loading: storesLoading, data: stores } = useQuery(GET_ALL_STORES);
  const { loading: spdsLoading, data: spds } = useQuery(GET_ALL_SPDS);
  const { loading: districtsLoading, data: districts } = useQuery(GET_ALL_DISTRICTS);

  if (storesLoading || spdsLoading || districtsLoading) return <p>Loading...</p>;

  return (
    <div>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Tabs value={currentTabId} onChange={(_, n) => setCurrentTabId(n)} centered>
          <Tab label="SPD" />
          <Tab label="DISTRICTS" />
          <Tab label="STORES" />
        </Tabs>
      </Box>
      <TabPanel value={currentTabId} index={0}>
        <SpdTable spds={spds.getAllSpds}/>
      </TabPanel>
      <TabPanel value={currentTabId} index={1}>
       <DistrictTable districts={districts.getAllDistricts}/>
      </TabPanel>
      <TabPanel value={currentTabId} index={2}>
       <StoreTable
        districts={districts.getAllDistricts}
        spds={spds.getAllSpds}
        stores={stores.getAllStores}
        />
      </TabPanel>
    </div>
  )
}

export default App;

