import React from 'react';
import banner from '../images/banner.png'
const Sidebar = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 justify-items-center '>
            <div><img src={banner} alt="" /></div>
            <div><img src={banner} alt="" /></div>
            <div><img src={banner} alt="" /></div>
            
        </div>
    );
};

export default Sidebar;