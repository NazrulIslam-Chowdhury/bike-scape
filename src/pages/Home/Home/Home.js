import React from 'react';
import AdvertiseItems from '../AdvertiseItems/AdvertiseItems';
import Categories from '../Category/Categories';
import Stat from '../extraSection/Stat';
import Banner from './Banner/Banner';

const Home = () => {
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