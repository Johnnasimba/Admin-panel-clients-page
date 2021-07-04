import React from 'react'

import './header.styles.css'

const Header =() => {
    return (
        <div id="header">
            
           <div className="menu-plus-logo">
                <i className="fas fa-bars fa-lg menu-bars"></i> 
               <div className="logo">Fitness<span >Lab</span></div> 
           </div>
           
           <div className="admin-panel">
                <div>Admin panel</div>
           </div>.
           <div className="admin">
                <img src={process.env.PUBLIC_URL + '/images/john nasimba.jpg'} alt="admin" />
                <div className="name-and-email">
                    <div className="admin-name">
                        John Nasimba
                    </div>
                    <div className="admin-email">
                        nasimba4john@gmail.com
                    </div>
                </div>
                <i className="fas fa-chevron-down fa-lg "></i>
           </div>
        </div>
    )
}

export default Header;