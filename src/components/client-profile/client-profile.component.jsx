
import React from 'react'
import './client-profile.style.css'

const ClientProfile = ()  => {
    return (
        <div className="client-profile-container">
          <div className="client-profile">
            <ul className="profile-tabs" >
                <li>Chat</li>
                <li>Attendance</li>
                <li className="active">Details</li>              
            </ul>
            <div className="profile-image-and-name">               
                <img src={process.env.PUBLIC_URL + '/images/romana francois.jpg'} alt="Nancy Williams" />
                <span className="status"></span>
                <h3>ROMANA FRANCOIS</h3>
            </div>
            <div className="information-section">
                <section className="personal-info">
                    <div className="icon-and-title">
                        <i class="fas fa-id-card-alt fa-lg"></i>
                        <h5>Personal Info</h5>
                    </div>
                    <div className="name-and-value">
                        <span>Title</span>
                        <span>Madame</span>
                    </div>
                    <div className="name-and-value">
                        <span>First name</span>
                        <span>Romana</span>
                    </div>
                    <div className="name-and-value">
                        <span>Last name</span>
                        <span>Francois</span>
                    </div>
                    <div className="name-and-value">
                        <span>Gander</span>
                        <span>Female</span>
                    </div>
                    <div className="name-and-value">
                        <span>Date of Birth</span>
                        <span>1964-04-24T06:25:40.777z</span>
                    </div>
                    <div className="name-and-value">
                        <span>Age</span>
                        <span>57</span>
                    </div>
                    <div className="name-and-value">
                        <span>ID name</span>
                        <span>AVS</span>
                    </div>
                    <div className="name-and-value">
                        <span>ID value</span>
                        <span>756.9989.7526.17</span>
                    </div>

                </section>

                <section className="personal-info">
                    <div className="icon-and-title">
                        <i class="fas fa-address-card fa-lg"></i>
                        <h5>Contact</h5>
                    </div>
                    <div className="name-and-value">
                        <span>phone</span>
                        <span>078 225 75 50</span>
                    </div>
                    <div className="name-and-value">
                        <span>Cell</span>
                        <span>075 437 25 80</span>
                    </div>
                    <div className="name-and-value">
                        <span>Email</span>
                        <span>romana.francois@example.com</span>
                    </div>                  
                </section>
               
                <section className="personal-info">
                    <div className="icon-and-title">
                    <i class="fas fa-map-marker-alt fa-lg"></i>
                        <h5>Location</h5>
                    </div>
                    <div className="name-and-value">
                        <span>Street number</span>
                        <span>3471</span>
                    </div>
                    <div className="name-and-value">
                        <span>Street name</span>
                        <span>Reu Dubois</span>
                    </div>
                    <div className="name-and-value">
                        <span>City</span>
                        <span>Brutten</span>
                    </div>                  
                    <div className="name-and-value">
                        <span>State</span>
                        <span>Fribourg</span>
                    </div>                  
                    <div className="name-and-value">
                        <span>Country</span>
                        <span>Switzerland</span>
                    </div>                  
                    <div className="name-and-value">
                        <span>Postcode</span>
                        <span>6951</span>
                    </div>                  
                    <div className="name-and-value">
                        <span>Coordinates:latitude</span>
                        <span>-54.4721</span>
                    </div>                  
                    <div className="name-and-value">
                        <span>Coordinate:longtude</span>
                        <span>30.6940</span>
                    </div>                  
                    <div className="name-and-value">
                        <span>Timezone:offset</span>
                        <span>+6:00</span>
                    </div>                  
                    <div className="name-and-value">
                        <span>Timezone:description</span>
                        <span>Almaty, Dhaka, Colombo</span>
                    </div>                                  
                </section>
                <section className="personal-info">
                    <div className="icon-and-title">
                    <i class="fas fa-map-marker-alt fa-lg"></i>
                        <h5>Location</h5>
                    </div>
                    <div className="name-and-value">
                        <span>Street number</span>
                        <span>3471</span>
                    </div>
                    <div className="name-and-value">
                        <span>Street name</span>
                        <span>Reu Dubois</span>
                    </div>
                    <div className="name-and-value">
                        <span>City</span>
                        <span>Brutten</span>
                    </div>                  
                    <div className="name-and-value">
                        <span>State</span>
                        <span>Fribourg</span>
                    </div>    
                </section>              
                <section className="personal-info">
                    <div className="icon-and-title">
                    <i class="fas fa-map-marker-alt fa-lg"></i>
                        <h5>Login details</h5>
                    </div>
                    <div className="name-and-value">
                        <span>uuid</span>
                        <span>d5ac5d23-f1f2-41c7-87fe-6d5d4eaa448c</span>
                    </div>
                    <div className="name-and-value">
                        <span>Usernname</span>
                        <span>tinykoala839</span>
                    </div>
                    <div className="name-and-value">
                        <span>Password</span>
                        <span>wp2003wp</span>
                    </div>                                        
                </section>
                <section className="personal-info">
                    <div className="icon-and-title">
                    <i class="fas fa-map-marker-alt fa-lg"></i>
                        <h5>Info</h5>
                    </div>
                    <div className="name-and-value">
                        <span>uuid</span>
                        <span>d5ac5d23-f1f2-41c7-87fe-6d5d4eaa448c</span>
                    </div>
                    <div className="name-and-value">
                        <span>Usernname</span>
                        <span>tinykoala839</span>
                    </div>
                    <div className="name-and-value">
                        <span>Password</span>
                        <span>wp2003wp</span>
                    </div>                                        
                </section>
              
            </div>
          </div>
        </div>
    )
}

export default ClientProfile;