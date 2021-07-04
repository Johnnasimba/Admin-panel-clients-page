
import React from 'react'
import './client-profile.style.css'

const ClientProfile = ({ client })  => {
    
    return (
        <div className="client-profile-container">
            {/* looping through given props */}

           {client.length === 0? <p>Loading...</p> : (
                client.map((item, index) => (
                    <div key={index} className="client-profile">
                        <ul className="profile-tabs" >
                            <li>Chat</li>
                            <li>Attendance</li>
                            <li className="active">Details</li>              
                        </ul>
                        <div className="profile-image-and-name">               
                            <img src={process.env.PUBLIC_URL + item.results[0].picture.large }
                             alt={ item.results[0].name.first + " " + item.results[0].name.last} />
                            <span className="status"></span>
                            <h3 className="name"> {item.results[0].name.first} {item.results[0].name.last} </h3>
                        </div>
                        <div className="information-section">
                            <section className="personal-info">
                                <div className="icon-and-title">
                                    <i className="fas fa-id-card-alt fa-lg"></i>
                                    <h5>Personal Info</h5>
                                </div>
                                <div className="name-and-value">
                                    <span>Title</span>
                                    <span>{item.results[0].name.title}</span>
                                </div>
                                <div className="name-and-value">
                                    <span>First name</span>
                                    <span>{item.results[0].name.first}</span>
                                </div>
                                <div className="name-and-value">
                                    <span>Last name</span>
                                    <span>{item.results[0].name.last}</span>
                                </div>
                                <div className="name-and-value">
                                    <span>Gander</span>
                                    <span>{item.results[0].gender}</span>
                                </div>
                                <div className="name-and-value">
                                    <span>Date of Birth</span>
                                    <span>{item.results[0].dob.date}</span>
                                </div>
                                <div className="name-and-value">
                                    <span>Age</span>
                                    <span>{item.results[0].dob.age}</span>
                                </div>
                                <div className="name-and-value">
                                    <span>ID name</span>
                                    <span>{item.results[0].id.name}</span>
                                </div>
                                <div className="name-and-value">
                                    <span>ID value</span>
                                    <span>{item.results[0].id.value}</span>
                                </div>
            
                            </section>
            
                            <section className="personal-info">
                                <div className="icon-and-title">
                                    <i className="fas fa-address-card fa-lg"></i>
                                    <h5>Contact</h5>
                                </div>
                                <div className="name-and-value">
                                    <span>phone</span>
                                    <span>{item.results[0].phone}</span>
                                </div>
                                <div className="name-and-value">
                                    <span>Cell</span>
                                    <span>{item.results[0].cell}</span>
                                </div>
                                <div className="name-and-value">
                                    <span>Email</span>
                                    <span>{item.results[0].email}</span>
                                </div>                  
                            </section>
                            
                            <section className="personal-info">
                                <div className="icon-and-title">
                                <i className="fas fa-map-marker-alt fa-lg"></i>
                                    <h5>Location</h5>
                                </div>
                                <div className="name-and-value">
                                    <span>Street number</span>
                                    <span>{item.results[0].location.street.number}</span>
                                </div>
                                <div className="name-and-value">
                                    <span>Street name</span>
                                    <span>{item.results[0].location.street.name}</span>
                                </div>
                                <div className="name-and-value">
                                    <span>City</span>
                                    <span>{item.results[0].location.city}</span>
                                </div>                  
                                <div className="name-and-value">
                                    <span>State</span>
                                    <span>{item.results[0].location.state}</span>
                                </div>                  
                                <div className="name-and-value">
                                    <span>Country</span>
                                    <span>{item.results[0].location.country}</span>
                                </div>                  
                                <div className="name-and-value">
                                    <span>Postcode</span>
                                    <span>{item.results[0].location.postcode}</span>
                                </div>                  
                                <div className="name-and-value">
                                    <span>Coordinates:latitude</span>
                                    <span>{item.results[0].location.coordinates.latitude}</span>
                                </div>                  
                                <div className="name-and-value">
                                    <span>Coordinate:longitude</span>
                                    <span>{item.results[0].location.coordinates.longitude}</span>
                                </div>                  
                                <div className="name-and-value">
                                    <span>Timezone:offset</span>
                                    <span>{item.results[0].location.timezone.offset}</span>
                                </div>                  
                                <div className="name-and-value">
                                    <span>Timezone:description</span>
                                    <span>{item.results[0].location.timezone.description}</span>
                                </div>                                  
                            </section>         
                            <section className="personal-info">
                                <div className="icon-and-title">
                                <i className="fas fa-sign-in-alt fa-lg"></i>
                                    <h5>Login details</h5>
                                </div>
                                <div className="name-and-value">
                                    <span>uuid</span>
                                    <span>{item.results[0].login.uuid}</span>
                                </div>
                                <div className="name-and-value">
                                    <span>User name</span>
                                    <span>{item.results[0].login.username}</span>
                                </div>
                                <div className="name-and-value">
                                    <span>Password</span>
                                    <span>{item.results[0].login.password}</span>
                                </div>                                        
                            </section>
                            <section className="personal-info">
                                <div className="icon-and-title">
                                <i className="fas fa-info-circle fa-lg"></i>
                                    <h5>Info</h5>
                                </div>
                                <div className="name-and-value">
                                    <span>Seed</span>
                                    <span>{item.info.seed}</span>
                                </div>
                                <div className="name-and-value">
                                    <span>Results</span>
                                    <span>{item.info.results}</span>
                                </div>                                  
                            </section>
                        
                        </div>
                    </div>

                ))
           )
           }
         
        </div>
    )
}

export default ClientProfile;