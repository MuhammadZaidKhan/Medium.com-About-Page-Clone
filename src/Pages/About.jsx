import React from 'react';
import ArticlesListPage from './ArticlesListPage';
const About = () => {
    return (
        <div>
            <div className='bg-background min-h-screen'>
                <div className='text-white pb-28'>
                    <h1 className='font-serif font-normal text-8xl pt-28 pl-8'>Everyone has a <br /> story to tell.</h1>
                    <p className='font-serif font-normal text-xl leading-8 pt-20 pl-8 flex flex-wrap'>Medium is a home for human stories and ideas. Here, anyone can share <br /> insightful perspectives, useful knowledge, and life wisdom with the <br /> world—without building a mailing list or a following first. The internet is <br /> noisy and chaotic; Medium is quiet yet full of insight. It’s simple, <br /> beautiful, collaborative, and helps you find the right audience for <br /> whatever you have to say.</p>

                    <p className='font-serif font-normal text-xl leading-8 pt-5 pl-8 flex flex-wrap'>We believe that what you read and write matters. Words can divide or <br /> empower us, inspire or discourage us. In a world where the most <br /> sensational and surface-level stories often win, we’re building a system <br /> that rewards depth, nuance, and time well spent. A space for thoughtful <br /> conversation more than drive-by takes, and substance over packaging.</p>

                    <h2 className='pt-10 pl-8 font-sans text-[28px]'>
                        <span className='bg-lightwhite'> Ultimately, our goal is to deepen our collective <br /> understanding of the world through the power of <br /> writing.</span>
                    </h2>

                    <p className='antialiased font-serif font-normal text-xl leading-8 pt-5 pl-8 flex flex-wrap'>Over 100 million people connect and share their wisdom on Medium <br /> every month. Many are professional writers, but just as many aren’t — <br /> they’re CEOs, computer scientists, U.S. presidents, amateur novelists, <br /> and anyone burning with a story they need to get out into the world. They <br /> write about what they’re working on, what’s keeping them up at night, <br /> what they’ve lived through, and what they’ve learned that the rest of us <br /> might want to know too.</p>

                    <p className='antialiased font-serif font-normal text-xl leading-8 pt-5 pl-8 flex flex-wrap'>Instead of selling ads or selling your data, we’re supported by a growing <br />community of Medium members who align with our mission. If you’re <br /> new here, start exploring. Dive deeper into whatever matters to you. Find <br />
                        a post that helps you learn something new, or reconsider something <br /> familiar—and then share your own story.</p>
                </div>
                <ArticlesListPage />
            </div>
        </div>
    );
};

export default About;
