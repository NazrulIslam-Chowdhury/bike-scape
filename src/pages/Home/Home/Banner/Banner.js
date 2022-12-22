import React from 'react';
import Navbar from '../../../../shared/Navbar/Navbar';


const Banner = () => {
    return (
        <section style={{
            backgroundImage: 'url(https://i.pinimg.com/originals/88/35/a9/8835a9d711eed8cf04b96142a48fdebf.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: 'auto',
            height: '120vh',
            filter: 'brightness(85%)'
        }}>
            <Navbar></Navbar>
        </section>
    );
};

export default Banner;