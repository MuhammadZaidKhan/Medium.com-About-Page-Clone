import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

export default function Header() {
    const location = useLocation();
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    };

    const getBackgroundColor = () => {
        switch (location.pathname) {
            case '/':
                return 'bg-amber-400 text-black';
            case '/about':
                return 'bg-background text-white'; // Set text to white for the about page
            case '/articles':
                return 'bg-white text-black';
            default:
                return 'bg-white text-black'; // Default to home page color
        }
    };


    // Check if the current location is within the articles section
    const isArticlesSection = location.pathname.startsWith('./');

    // Determine the text color based on whether the current page is within the articles section
    // Determine the text color based on whether the current page is within the articles section
    const getTextColor = () => {
        if (isArticlesSection) {
            // If within the articles section, return white text color
            return 'text-white';
        }
    };


    return (
        <>
            {/* Desktop Navbar */}
            <div className={`sticky top-0 w-full h-20 shadow-md z-[100] ${getBackgroundColor()}`}>
                <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16 py-10">
                    <Link to='/'>
                        <img
                            src="https://img.freepik.com/premium-vector/word-concept-color-geometric-shapes-blog_205544-13021.jpg"
                            alt=""
                            width={100}
                            height={100}
                            className="w-16 h-16"
                        />
                    </Link>
                    <div>
                        <ul className="hidden md:flex items-center">
                            <li className="border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-gray">
                                <Link to='/'>Home</Link>
                            </li>
                            <li className="border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-gray">
                                <Link to='/about'>About</Link>
                            </li>
                            <li className={`border-b border-transparent ml-10 text-sm uppercase hover:border-b hover:border-gray ${getTextColor()}`}>
                                <Link to='/articles'>Articles</Link>
                            </li>
                        </ul>
                        <div onClick={handleNav} className="md:hidden">
                            <AiOutlineMenu size="20" />
                        </div>
                    </div>
                </div>
                {/* Mobile Nav */}
                <div
                    className={`${nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}`}
                >
                    <div
                        className={`${nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-background text-white p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}`}
                    >
                        <div className="flex w-full items-center justify-between">
                            <Link to='/'>
                                <img
                                    src="https://img.freepik.com/premium-vector/word-concept-color-geometric-shapes-blog_205544-13021.jpg"
                                    alt=""
                                    width={100}
                                    height={100}
                                    className="w-16 h-16"
                                />
                            </Link>
                            <div
                                onClick={handleNav}
                                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                            >
                                <AiOutlineClose />
                            </div>
                        </div>

                        <div className="py-4 flex flex-col">
                            <ul className="uppercase">
                                <Link to='/' onClick={() => setNav(false)}>
                                    <li className="py-4">Home</li>
                                </Link>
                                <Link to='/about' onClick={() => setNav(false)}>
                                    <li className="py-4">About</li>
                                </Link>
                                <Link to='/articles' onClick={() => setNav(false)} className={getTextColor()}>
                                    <li className="py-4">Articles</li>
                                </Link>
                            </ul>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
