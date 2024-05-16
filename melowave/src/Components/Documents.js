import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../assets/css/main.css';
import logo from './../assets/img/logo.png';
import Footer from './Footer';
import Header from './Header';
import hansi from '../assets/Docs/finalReports/hansi.pdf';


function Documents() {

    const handleDownload = () => {
        const filePath = '../assets/Docs/finalReports/hansi.pdf'; // Relative path from the public folder
        const fileName = 'hansi.pdf';
        hansi(filePath, fileName);
    };

    return (
        <>
            <Header />

            <br /><br /><br />


            <section id="services" class="services section">

                <div class="container section-title" data-aos="fade-up">
                    <h2>Common Documents </h2>
                </div>

                <div class="container">

                    <div class="row g-5 justify-content-center mb-3">

                        <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                            <div class="service-item item-cyan position-relative">
                                <i class="fa fa-user icon"></i>
                                <div>
                                    <h3>Topic Assessment Document</h3>
                                    <a href={hansi} class="read-more stretched-link">Download<i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                            <div class="service-item item-cyan position-relative">
                                <i class="fa fa-user icon"></i>
                                <div>
                                    <h3>Progress Presentation 01</h3>
                                    <a href={hansi} class="read-more stretched-link">Download<i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                            <div class="service-item item-cyan position-relative">
                                <i class="fa fa-user icon"></i>
                                <div>
                                    <h3>Progress Presentation 02</h3>
                                    <a href={hansi} class="read-more stretched-link">Download<i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                            <div class="service-item item-cyan position-relative">
                                <i class="fa fa-user icon"></i>
                                <div>
                                    <h3>Research Paper</h3>
                                    <a href={hansi} class="read-more stretched-link">Download<i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                            <div class="service-item item-cyan position-relative">
                                <i class="fa fa-user icon"></i>
                                <div>
                                    <h3>Final Theases</h3>
                                    <a href={hansi} class="read-more stretched-link">Download<i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <br /><br />


                    <div class="container section-title" data-aos="fade-up">
                        <h2>Individual Documents</h2>
                        <p>Individual Project Proposal Documents</p>
                    </div>

                    <div class="row g-5 justify-content-center">

                        <div class="col-lg-3" data-aos="fade-up" data-aos-delay="100">
                            <div class="service-item item-orange position-relative">
                                <i class="bi bi-activity icon"></i>
                                <div>
                                    <h3>IT20665616</h3>
                                    <p>Sumanasekara H.P.</p>
                                    <a href="service-details.html" class="read-more stretched-link">Download <i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3" data-aos="fade-up" data-aos-delay="100">
                            <div class="service-item item-orange position-relative">
                                <i class="bi bi-activity icon"></i>
                                <div>
                                    <h3>IT20667078</h3>
                                    <p>Dhananjaya W.K.S.</p>
                                    <a href="service-details.html" class="read-more stretched-link">Download <i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3" data-aos="fade-up" data-aos-delay="100">
                            <div class="service-item item-orange position-relative">
                                <i class="bi bi-activity icon"></i>
                                <div>
                                    <h3>IT20665852</h3>
                                    <p>Gunasekara <br />C.M.</p>
                                    <a href="service-details.html" class="read-more stretched-link">Download <i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3" data-aos="fade-up" data-aos-delay="100">
                            <div class="service-item item-orange position-relative">
                                <i class="bi bi-activity icon"></i>
                                <div>
                                    <h3>IT20610652</h3>
                                    <p>Fernando M.P.T.K.</p>
                                    <a href="service-details.html" class="read-more stretched-link">Download <i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <br /><br />

                    <div class="container section-title" data-aos="fade-up">
                        <p>Status Document 01</p>
                    </div>

                    <div class="row g-5 justify-content-center">

                        <div class="col-lg-3" data-aos="fade-up" data-aos-delay="100">
                            <div class="service-item item-teal position-relative">
                                <i class="bi bi-activity icon"></i>
                                <div>
                                    <h3>IT20665616</h3>
                                    <p>Sumanasekara H.P.</p>
                                    <a href="service-details.html" class="read-more stretched-link">Download <i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3" data-aos="fade-up" data-aos-delay="100">
                            <div class="service-item item-teal position-relative">
                                <i class="bi bi-activity icon"></i>
                                <div>
                                    <h3>IT20667078</h3>
                                    <p>Dhananjaya W.K.S.</p>
                                    <a href="service-details.html" class="read-more stretched-link">Download <i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3" data-aos="fade-up" data-aos-delay="100">
                            <div class="service-item item-teal position-relative">
                                <i class="bi bi-activity icon"></i>
                                <div>
                                    <h3>IT20665852</h3>
                                    <p>Gunasekara <br />C.M.</p>
                                    <a href="service-details.html" class="read-more stretched-link">Download <i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3" data-aos="fade-up" data-aos-delay="100">
                            <div class="service-item item-teal position-relative">
                                <i class="bi bi-activity icon"></i>
                                <div>
                                    <h3>IT20610652</h3>
                                    <p>Fernando M.P.T.K.</p>
                                    <a href="service-details.html" class="read-more stretched-link">Download <i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <br /><br />


                    <div class="container section-title" data-aos="fade-up">
                        <p>Status Document 02</p>
                    </div>

                    <div class="row g-5 justify-content-center">

                        <div class="col-lg-3" data-aos="fade-up" data-aos-delay="100">
                            <div class="service-item item-indigo position-relative">
                                <i class="bi bi-activity icon"></i>
                                <div>
                                    <h3>IT20665616</h3>
                                    <p>Sumanasekara H.P.</p>
                                    <a href="service-details.html" class="read-more stretched-link">Download <i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3" data-aos="fade-up" data-aos-delay="100">
                            <div class="service-item item-indigo position-relative">
                                <i class="bi bi-activity icon"></i>
                                <div>
                                    <h3>IT20667078</h3>
                                    <p>Dhananjaya W.K.S.</p>
                                    <a href="service-details.html" class="read-more stretched-link">Download <i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3" data-aos="fade-up" data-aos-delay="100">
                            <div class="service-item item-indigo position-relative">
                                <i class="bi bi-activity icon"></i>
                                <div>
                                    <h3>IT20665852</h3>
                                    <p>Gunasekara <br />C.M.</p>
                                    <a href="service-details.html" class="read-more stretched-link">Download <i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3" data-aos="fade-up" data-aos-delay="100">
                            <div class="service-item item-indigo position-relative">
                                <i class="bi bi-activity icon"></i>
                                <div>
                                    <h3>IT20610652</h3>
                                    <p>Fernando M.P.T.K.</p>
                                    <a href="service-details.html" class="read-more stretched-link">Download <i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <br /><br /><br />



                    <br /><br />

                    <div class="container section-title" data-aos="fade-up">
                        <p>Individual Final Reports</p>
                    </div>

                    <div class="row g-5 justify-content-center">

                        <div class="col-lg-3" data-aos="fade-up" data-aos-delay="100">
                            <div class="service-item item-pink position-relative">
                                <i class="bi bi-activity icon"></i>
                                <div>
                                    <h3>IT20665616</h3>
                                    <p>Sumanasekara H.P.</p>
                                    <a href="service-details.html" class="read-more stretched-link">Download <i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3" data-aos="fade-up" data-aos-delay="100">
                            <div class="service-item item-pink position-relative">
                                <i class="bi bi-activity icon"></i>
                                <div>
                                    <h3>IT20667078</h3>
                                    <p>Dhananjaya W.K.S.</p>
                                    <a href="service-details.html" class="read-more stretched-link">Download <i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3" data-aos="fade-up" data-aos-delay="100">
                            <div class="service-item item-pink position-relative">
                                <i class="bi bi-activity icon"></i>
                                <div>
                                    <h3>IT20665852</h3>
                                    <p>Gunasekara <br />C.M.</p>
                                    <a href="service-details.html" class="read-more stretched-link">Download <i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-3" data-aos="fade-up" data-aos-delay="100">
                            <div class="service-item item-pink position-relative">
                                <i class="bi bi-activity icon"></i>
                                <div>
                                    <h3>IT20610652</h3>
                                    <p>Fernando M.P.T.K.</p>
                                    <a href="service-details.html" class="read-more stretched-link">Download <i class="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="container individual-container">
                    <a href="/" class="back-button"><span>Back</span><i class="bi bi-arrow-right"></i></a>
                </div>

            </section>

            <Footer />

        </>
    );
}

export default Documents;
