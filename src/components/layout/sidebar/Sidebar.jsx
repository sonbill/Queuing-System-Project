import React, { } from 'react'
//INTERNAL
import MenuItem from '../menu item/MenuItem'
import Dropdown from '../dropdown/Dropdown'
import Logo from '../../../assets/Logo-alta.png'
//DRAWER
import GridViewIcon from '@mui/icons-material/GridView';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import LayersIcon from '@mui/icons-material/Layers';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AdjustIcon from '@mui/icons-material/Adjust';
import { Drawer, List } from '@mui/material/';

//ROUTE
import Routes from '../../routes'
//CSS
import './sidebar.css';


const Sidebar = () => {
  return (
    <div className="logo__container">
      <Drawer className="sidebar__drawer" variant="permanent" open={true} >
        <div className='logo__container'>
          <img src={Logo} alt="Logo" />
        </div>
        <List>
          <MenuItem label='Dashboard' color="secondary" icon={< GridViewIcon />} activeIcon='DashboardIconActive' path='/' />
          <MenuItem label='Thiết bị' color="secondary" icon={<DesktopMacIcon />} activeIcon='DashboardIconActive' path='/thietbi' />
          <MenuItem label='Dịch vụ' color="secondary" icon={<QuestionAnswerIcon />} activeIcon='DashboardIconActive' path='/dichvu' />
          <MenuItem label='Cấp số' color="secondary" icon={<LayersIcon />} activeIcon='DashboardIconActive' path='/capso' />
          <MenuItem label='Báo cáo' color="secondary" icon={<AssessmentIcon />} activeIcon='DashboardIconActive' path='/baocao' />
          <Dropdown icon={<AdjustIcon />} />

        </List>
      </Drawer>
    </div >
  )
}

export default Sidebar
