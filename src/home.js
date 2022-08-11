import React from "react";
import one from './images/slide1.jpg';
import two from './images/slide2.jpg';
import three from './images/slide3.jpg';
import four from './images/y.jpg';
import five from './images/slide4.jpg';
import six from './images/slide5.jpg';
import seven from './images/slide6.jpg';
import y from './images/image1.png';

function Home() {
    return (
        <>
            <div id="carouselExampleIndicators" class="carousel slide mt-5" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100 image-fluid" src={five} alt="First slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 image-fluid" src={six} alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 image-fluid" src={seven} alt="Third slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 image-fluid" src={four} alt="Four slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 image-fluid" src={five} alt="Five slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 image-fluid" src={six} alt="Six slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 image-fluid" src={seven} alt="Seven slide" />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </>
    )
}

export default Home;