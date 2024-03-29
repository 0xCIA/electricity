import { useState } from 'react';
import Periods from './Periods'
import SideBar from './SideBar'
import DataSwitcher from './DataSwitcher';

function Footer(props) {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <>
      <DataSwitcher {...props}/>
      <Periods setShowSideBar={setShowSideBar} {...props} />
      <SideBar show={showSideBar} handleClose={() => setShowSideBar(false)} {...props} />
    </>
  )
}

export default Footer