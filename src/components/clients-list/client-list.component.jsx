
import React from 'react'
import './client-list.style.css'

const ClientsList = ()  => {
    return (
        <div className="clients-list-section">
           <div className="title">
               Clients <span>5</span>
           </div>
            <div className="search-form">
                <input type="text" placeholder="Search" />
            </div>
            <div className="client-list" >
                <div className="single-client">
                    <img src={process.env.PUBLIC_URL + '/images/john nasimba.jpg'} alt="admin" />
                    <div className="client-name-and-email">
                        <div className="client-name">
                             Melissa Adam 
                        </div>
                        <div className="client-email">
                            adammelissa@gmail.com
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientsList;