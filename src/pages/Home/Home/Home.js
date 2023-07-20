import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import AdvertiseItems from '../AdvertiseItems/AdvertiseItems';
import Categories from '../Category/Categories';
import Banner from './Banner/Banner';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Kits from '../Kits/Kits';
import Blog from '../Blog/Blog';
import Search from '../Search/Search';

const Home = () => {
    useTitle('Home');
    const { isLoading } = useContext(AuthContext);
    if (isLoading) {
        return <div className='flex justify-center'><progress className="progress w-56"></progress></div>;
    }
    return (
        <div>
            <Banner />
            <Search />
            <Categories />
            <About />
            <AdvertiseItems />
            <Contact />
            <Kits />
            <Blog />
        </div>
    );
};

export default Home;