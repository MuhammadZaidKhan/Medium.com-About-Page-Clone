import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='min-h-screen bg-amber-400'>
            <div className='fixed'>
                <div className='flex flex-col md:pl-16 pt-20'>
                    <h1 className='text-6xl md:text-8xl text-center md:text-left font-serif'>Stay Curious.</h1>
                    <p className='md:px-2 md:w-2/3 pt-10 font-serif px-10 text-2xl md:text-left'>Discover stories, thinking, and expertise from writers on any topic.</p>
                </div>
                <Link to='/articles'>
                    <button className='mt-10 px-8 py-3 md:ml-20 ml-24 rounded-md bg-black text-white'>
                        Explore Articles
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
