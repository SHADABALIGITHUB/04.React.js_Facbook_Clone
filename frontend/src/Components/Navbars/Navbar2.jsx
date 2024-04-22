import { useState } from 'react';

import IconRoutes from './IconRoutes';

import { MessageCircle, Bell, Store } from 'lucide-react'
import HomeNormal from '@mui/icons-material/HomeRounded';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleNormal from '@mui/icons-material/PeopleAltRounded';
import PeopleOutlinedIcon from '@mui/icons-material/GroupOutlined';
import MonitorNormal from '@mui/icons-material/OndemandVideoRounded';
import MonitorOulinedIcon from '@mui/icons-material/OndemandVideo';
import BellNormal from '@mui/icons-material/Notifications';
import BellOulinedIcon from '@mui/icons-material/NotificationsNone';
import StoreNormal from '@mui/icons-material/Store';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';




import { NavLink } from 'react-router-dom';
const Navbar2 = () => {

    const [check, setcheck] = useState(true);



    return (
        <div className='flex text-slate-500 p-2 m-1 justify-between items-center'>

            <NavLink to='/'

                style={({ isActive }) => {
                    return isActive ? { borderBottom: '2px solid #0000FF', paddingLeft: '4px', paddingRight: '4px' } : {};
                }}
            >    {
                    ({ isActive }) => {

                        return <IconRoutes isActive={isActive} children1={<HomeNormal color="primary" />} children2={<HomeOutlinedIcon />} />
                    }
                }
            </NavLink>
            <NavLink to='/friends'
                style={({ isActive }) => {
                    return isActive ? { borderBottom: '2px solid #0000FF', paddingLeft: '4px', paddingRight: '4px' } : {};
                }}
            > 
             {
                    ({ isActive }) => {

                        return <IconRoutes isActive={isActive} children1={<PeopleNormal color="primary" />} children2={<PeopleOutlinedIcon /> } />
                    }
            }
            
            
            
            </NavLink>


            <NavLink to='/messenger'

                style={({ isActive }) => {
                    return isActive ? { borderBottom: '2px solid #0000FF', paddingLeft: '4px', paddingRight: '4px' } : {};
                }}

            > <MessageCircle /> </NavLink>


            <NavLink to='/watch'
                style={({ isActive }) => {
                    return isActive ? { borderBottom: '2px solid #0000FF', paddingLeft: '4px', paddingRight: '4px' } : {};
                }}

            >
                {
                    ({ isActive }) => {

                        return <IconRoutes isActive={isActive} children1={<MonitorNormal  color="primary" />} children2={<MonitorOulinedIcon/> } />
                    }
            }
                 </NavLink>


            <NavLink to='/notify'
                style={({ isActive }) => {
                    return isActive ? { borderBottom: '2px solid #0000FF', paddingLeft: '4px', paddingRight: '4px' } : {};
                }} >
                    {
                    ({ isActive }) => {

                        return <IconRoutes isActive={isActive} children1={<BellNormal  color="primary" />} children2={<BellOulinedIcon/> } />
                    }
            }

                </NavLink>


            <NavLink to='/shop' style={({ isActive }) => {
                return isActive ? { borderBottom: '2px solid #0000FF', paddingLeft: '4px', paddingRight: '4px' } : {};
            }}  > 
            
            {
                    ({ isActive }) => {

                        return <IconRoutes isActive={isActive} children1={<StoreNormal color="primary" />} children2={<StoreOutlinedIcon/> } />
                    }
            }

            
            
            
            
            </NavLink>





        </div>
    );
}

export default Navbar2;
