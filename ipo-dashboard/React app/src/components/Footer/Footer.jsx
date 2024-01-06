import React from 'react'
import {  useSelector } from 'react-redux';


const Footer = () => {
    const { theme, colors } = useSelector((state) => state.theme);


    return (
        <div className="main text-center footer" style={{
            background: colors[theme].footer,
            color: colors[theme].text,
        }}>

            {/* risk text  */}
            <div className="container pt-4">
                <p>
                    Explore the world of stock markets and discover the opportunities it brings. Investing in stocks can offer both financial growth and challenges. It's essential to understand the benefits, such as potential returns and wealth creation, as well as the risks associated with market fluctuations.
                </p>
            </div>
            {/* <!-- Grid container --> */}
            <div className="container pt-4">
                {/* <!-- Section: Social media --> */}
                <section className="mb-4">
                    {/* <!-- Facebook --> */}
                    <a
                        data-mdb-ripple-init
                        className="btn btn-link btn-floating btn-lg text-body m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i className="fab fa-facebook-f"></i
                    ></a>

                    {/* <!-- Twitter --> */}
                    <a
                        data-mdb-ripple-init
                        className="btn btn-link btn-floating btn-lg text-body m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i className="fab fa-twitter"></i
                    ></a>

                    {/* <!-- Google --> */}
                    <a
                        data-mdb-ripple-init
                        className="btn btn-link btn-floating btn-lg text-body m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i className="fab fa-google"></i
                    ></a>

                    {/* <!-- Instagram --> */}
                    <a
                        data-mdb-ripple-init
                        className="btn btn-link btn-floating btn-lg text-body m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i className="fab fa-instagram"></i
                    ></a>

                    {/* <!-- Linkedin --> */}
                    <a
                        data-mdb-ripple-init
                        className="btn btn-link btn-floating btn-lg text-body m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i className="fab fa-linkedin"></i
                    ></a>
                    {/* <!-- Github --> */}
                    <a
                        data-mdb-ripple-init
                        className="btn btn-link btn-floating btn-lg text-body m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i className="fab fa-github"></i
                    ></a>
                </section>
                {/* <!-- Section: Social media --> */}
            </div>

            <div className="text-center p-3 " >
                IPO App @2024 by <a className=" text-primary" href="https://github.com/shazam99"><u>Siddharth</u></a>
            </div>

        </div>
    )
}

export default Footer