import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import "./Carousel.css";


function UncontrolledExample() {
    return (
        <div className='mainDiv-add'>
          
            <Carousel>

                <Carousel.Item>
                <button className='carosel-btn'>See More</button>
                    <img
                        className="d-block w-100 carouselImgs"
                        src="https://i.etsystatic.com/17042832/r/il/4b6157/4452681708/il_fullxfull.4452681708_jcc2.jpg"
                        alt="First slide"

                    />
                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <button className='carosel-btn'>See More</button>
                    <img
                        className="d-block w-100 carouselImgs"
                        src="https://hips.hearstapps.com/hmg-prod/images/hbz-clear-lip-gloss-index-1594043471.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <button className='carosel-btn'>See More</button>
                    <img
                        className="d-block w-100 carouselImgs"
                        src="https://fashionista.com/.image/t_share/MTI3OTEyMDExNjM0ODQ2MzM5/titlejpg.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className='second-add'>
                <img className='addImg' src='https://1sa.com.ua/media/catalog/product/cache/1/image/1000x1231/9df78eab33525d08d6e5fb8d27136e95/t/m/tmp_9957_1.jpg' /> <br />
                <h6 className='titleOfAdd'>La Roche-Posay Effaclar</h6> <h6 className='price-of-add'> 7,700 dr</h6>
                <button className='addBtn'>Add in Basket </button>

            </div>
        </div>

    );
}

export default UncontrolledExample;