import React from 'react';
import AdvertiseItems from '../AdvertiseItems/AdvertiseItems';
import Categories from '../Category/Categories';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdvertiseItems></AdvertiseItems>
            <Categories></Categories>
        </div>
    );
};

export default Home;