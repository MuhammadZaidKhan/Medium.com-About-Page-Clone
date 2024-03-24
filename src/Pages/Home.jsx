import React from 'react'

const Home = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-amber-400 pb-96 md:pb-28'>
            <h1 className='text-6xl md:text-7xl text-center md:text-left font-serif'>Stay Curious.</h1>
            <p className='px-2 pl-10 pt-16 font-serif text-2xl text-center md:text-left'>Discover stories, thinking, and expertise from writers on any topic.</p>
            <button className='mt-16 px-8 py-3 rounded-md bg-black text-white'>Explore Articles</button>
        </div>


    )
}

export default Home