import React from 'react';

const IconRoutes = ({ isActive ,children1,children2 }) => {
    return (
        <div className=''>

            {isActive?children1:children2}
           
        </div>
    );
}

export default IconRoutes;
