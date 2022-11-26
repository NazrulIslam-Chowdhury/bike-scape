import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import AdvertiseItems from '../AdvertiseItems/AdvertiseItems';
import Categories from '../Category/Categories';
import Stat from '../extraSection/Stat';
import Banner from './Banner/Banner';

const Home = () => {
    const { isLoading } = useContext(AuthContext);
    if (isLoading) {
        return <progress className="progress w-56"></progress>;
    }
    return (
        <div>
            <Banner></Banner>
            <AdvertiseItems></AdvertiseItems>
            <Categories></Categories>
            <Stat></Stat>
        </div>
    );
};

export default Home;