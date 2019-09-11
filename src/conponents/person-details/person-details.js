import React from 'react';

import './person-details.css';

const PersonDetails = () => {
    return (
        <div className='person-details'>
            <img src="https://starwars-visualguide.com/assets/img/characters/1.jpg" className="person-img"/>
            <div>
                <h4>Luke Skywalker</h4>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <span className='term'>Gender male</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='term'>YeeColor blue</span>
                    </li>
                    <button className='person-btn'>Throw Error</button>
                </ul>
            </div>
        </div>
    )
};
export default PersonDetails;