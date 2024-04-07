import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='min-h-screen bg-amber-400'>
            <div className='fixed'>
                <div className='flex flex-col pl-16 pt-20'>
                    <h1 className='text-6xl md:text-8xl text-center md:text-left font-serif'>Stay Curious.</h1>
                    <p className='px-2 pt-10 font-serif text-2xl text-center md:text-left'>Discover stories, thinking, and expertise <br /> from writers on any topic.</p>
                </div>
                <Link to='/articles'>
                    <button className='mt-10 px-8 py-3 ml-20 rounded-md bg-black text-white'>
                        Explore Articles
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
