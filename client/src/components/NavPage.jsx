import * as React from 'react';
import {Tabs, Tab, Box} from '@mui/material';
import Blogs from './Blogs';
 


const NavPage =() => {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: '85%'}}>
      <Tabs
      className='navbox'
        value={value}
        onChange={handleChange}
        textColor="secondary"
        
        aria-label="secondary tabs example"
        centered
      >
        <Tab value="one" label="Item One" onClick={() =>{ return <Blogs/>}}></Tab>
        <Tab value="two" label="Item Two" />
        <Tab value="three" label="Item Three" />
      </Tabs>
    </Box>
  );
}

export default NavPage;