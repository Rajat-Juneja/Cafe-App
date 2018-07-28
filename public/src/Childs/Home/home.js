import React from 'react';
import './home.css';

export const Home = () =>{
    return(
        <div className='home'>
            <h4>We Offer a Full Espresso Bar, Coffee, Loose Leaf Teas, Wine, Beer, Pastries, Bottled
            Beverages, ​and a Full Breakfast and Bistro Menu.</h4>
            <h4><img src={require("../../images/icon1.png")} alt="Welcome"/></h4>
            <h6>Our Cafe is a local favorite, we have been in business for over 15 years thanks to our regular customers.
            The casual atmosphere offers a place for all.</h6>
            <h6>We offer free internet access for our paying customers, Happy Hour Monday -Friday 2:00 P.M. - 6:00 P.M. and Happy Hour
            Tuesday All Day. Thursday is 3/4 Price Wine Day, and on Sunday - Tuesday Nights from 4:00 till close. We offer pet friendly dining on our patios.</h6>
        </div>
    )
}