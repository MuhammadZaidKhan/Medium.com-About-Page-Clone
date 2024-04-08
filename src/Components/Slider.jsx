import React from "react";
import Slider from "react-slick";

function Responsive() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 200,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="slider-container">
            <h2 className="text-center mt-16 font-bold text-3xl pb-10">Slider</h2>
            <Slider {...settings}>
                {/* Each slide should directly contain the content (e.g., images) */}
                <div>
                    <img src="https://th.bing.com/th?id=OIP.vHHBwcUFUaHWXntSnqKdCAAAAA&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="" />
                </div>
                <div>
                    <img src="https://th.bing.com/th?id=OIP.WUBExTXB_NgfzKOv7KYUOAAAAA&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="" />
                </div>
                <div>
                    <img src="https://th.bing.com/th?id=OIP.eWUjOCd3NX0YumGQSDNQAwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="" />
                </div>
                <div>
                    <img src="https://th.bing.com/th?id=OIP.vHHBwcUFUaHWXntSnqKdCAAAAA&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="" />
                </div>
                <div>
                    <img src="https://th.bing.com/th?id=OIP.eWUjOCd3NX0YumGQSDNQAwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="" />
                </div>
                <div>
                    <img src="https://th.bing.com/th?id=OIP.eWUjOCd3NX0YumGQSDNQAwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="" />
                </div>
            </Slider>
        </div>
    );
}

export default Responsive;
