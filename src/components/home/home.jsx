import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './home.scss'

const Home = () => (
  <div className='home'>
    <div className='container-home'>
      <div className='container-text-home'>
        <h3 className='title-home'>Cyberia</h3>
        <p className='text-home'>
          The city lights in midnight
          enticied strolling man into a space, called "Cyberia"
        </p>
      </div>
      <div className="container-link">
        <Link className='link'>
          <h4 className='text-link'>ENTER
            <FontAwesomeIcon className='icon-link' icon={['fas', 'angle-double-right']} />
          </h4>
        </Link>
      </div>
      
    </div>
  </div>
)

export default Home