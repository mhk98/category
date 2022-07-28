import React from 'react';
import { faArrowLeftLong, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Banner = () => {
    return (
        <div className='grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 text-white py-8'>
            <div><h1 className='text-3xl'><FontAwesomeIcon icon={faArrowLeftLong}></FontAwesomeIcon></h1></div>
        <div><h1 className='text-3xl'>Romantic</h1></div>
        <div><h1 className='text-3xl border border-white rounded-lg h-16 w-16 pt-4'><FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon></h1></div>
        </div>
    );
};

export default Banner;