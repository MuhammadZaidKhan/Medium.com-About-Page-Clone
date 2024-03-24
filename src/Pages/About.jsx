import React from 'react';
import ArticlesListPage from './ArticlesListPage';

const About = () => {
    return (
        <div className='bg-background min-h-screen flex flex-col'>
            <div className='text-white flex-1'>
                <h1 className='font-serif text-8xl pt-28 pl-8'>Everyone has a story to tell.</h1>
                <p className='font-serif font-normal text-xl leading-8 pt-20 pl-8'>Medium is a home for human stories and ideas. Here, anyone can share insightful perspectives, useful knowledge, and life wisdom with the world—without building a mailing list or a following first. The internet is noisy and chaotic; Medium is quiet yet full of insight. It’s simple, beautiful, collaborative, and helps you find the right audience for whatever you have to say.</p>

                <p className='font-serif font-normal text-xl leading-8 pt-5 pl-8'>We believe that what you read and write matters. Words can divide or empower us, inspire or discourage us. In a world where the most sensational and surface-level stories often win, we’re building a system that rewards depth, nuance, and time well spent. A space for thoughtful conversation more than drive-by takes, and substance over packaging.</p>

                <h2 className='pt-10 pl-8 font-sans text-[28px]'>
                    <span className='bg-lightwhite'> Ultimately, our goal is to deepen our collective understanding of the world through the power of writing.</span>
                </h2>

                <p className='antialiased font-serif font-normal text-xl leading-8 pt-5 pl-8'>Over 100 million people connect and share their wisdom on Medium every month. Many are professional writers, but just as many aren’t — they’re CEOs, computer scientists, U.S. presidents, amateur novelists, and anyone burning with a story they need to get out into the world. They write about what they’re working on, what’s keeping them up at night, what they’ve lived through, and what they’ve learned that the rest of us might want to know too.</p>

                <p className='antialiased font-serif font-normal text-xl leading-8 pt-5 pl-8'>Instead of selling ads or selling your data, we’re supported by a growing community of Medium members who align with our mission. If you’re new here, start exploring. Dive deeper into whatever matters to you. Find a post that helps you learn something new, or reconsider something familiar—and then share your own story.</p>
            </div>
            <ArticlesListPage />
        </div>
    );
};

export default About;
