import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import AdvertiseItems from '../AdvertiseItems/AdvertiseItems';
import Categories from '../Category/Categories';
import Stat from '../extraSection/Stat';
import Banner from './Banner/Banner';
import About from '../About/About';
import Contact from '../Contact/Contact';

const Home = () => {
    useTitle('Home');
    const { isLoading } = useContext(AuthContext);
    if (isLoading) {
        return <div className='flex justify-center'><progress className="progress w-56"></progress></div>;
    }
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <div>
                <About />
            </div>
            <div>
                <AdvertiseItems></AdvertiseItems>
            </div>
            <Contact />
            <Stat></Stat>
        </div>
    );
};

export default Home;