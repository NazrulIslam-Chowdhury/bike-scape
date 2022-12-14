import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import AdvertiseItems from '../AdvertiseItems/AdvertiseItems';
import Categories from '../Category/Categories';
import Stat from '../extraSection/Stat';
import Banner from './Banner/Banner';

const Home = () => {
    useTitle('Home');
    const { isLoading } = useContext(AuthContext);
    if (isLoading) {
        return <div className='flex justify-center'><progress className="progress w-56"></progress></div>;
    }
    return (
        <div>
            <Banner></Banner>
            <div className='mt-10'>
                <AdvertiseItems></AdvertiseItems>
            </div>
            <Categories></Categories>
            <Stat></Stat>
        </div>
    );
};

export default Home;