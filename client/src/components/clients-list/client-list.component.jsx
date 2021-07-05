
import React from 'react'
import './client-list.style.css'

const ClientsList = ({client})  => {
    return (
        <div className="clients-list-section">
           <div className="title">
               Clients <span>5</span>
           </div>
            <div className="search-form">
                <input type="text" placeholder="Search" />
            </div>
            <div className="client-list" >
               {/* client */}
                <div className="single-client">
                    <img src={process.env.PUBLIC_URL + '/images/melissa adam.jpg'} alt="Melissa Adam" />
                    <div className="client-name-and-email">
                        <div className="client-name">
                             Melissa Adam 
                        </div>
                        <div className="client-email">
                            adammelissa@gmail.com
                        </div>

                    </div>
                </div>
               {/* In real world situation, you will loop through clients list */}
              
                {client.length > 0 ?  (
                   client.map((item, index) => (
                    <div key={index} className="single-client romana-francois">
                        <img src={item[0].results[0].picture.medium}
                             alt={ item[0].results[0].name.first + " " + item[0].results[0].name.last}  />
                        <div className="client-name-and-email">
                            <div className="client-name">
                                {item[0].results[0].name.first} {item[0].results[0].name.last} 
                            </div>
                            <div className="client-email">
                                {item[0].results[0].email}
                            </div>

                        </div>
                    </div>
                    ))
                ): <p>Loading...</p> 
            }
            
               {/* client */}
                <div className="single-client">
                    <img src={process.env.PUBLIC_URL + '/images/james robert.jpg'} alt="James Robert" />
                    <div className="client-name-and-email">
                        <div className="client-name">
                             James Robert
                        </div>
                        <div className="client-email">
                            robertjames@gmail.com
                        </div>

                    </div>
                </div>
               {/* client */}
                <div className="single-client ">
                    <img src={process.env.PUBLIC_URL + '/images/nancy williams.jpg'} alt="Nancy Williams" />
                    <div className="client-name-and-email">
                        <div className="client-name">
                             Nancy Williams 
                        </div>
                        <div className="client-email">
                           nancywilliams95@outlook.com
                        </div>

                    </div>
                </div>
               {/* client */}
                <div className="single-client">
                    <img src={process.env.PUBLIC_URL + '/images/mueen agherdien.jpg'} alt="Melissa Adam" />
                    <div className="client-name-and-email">
                        <div className="client-name">
                            Mueen Smith
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