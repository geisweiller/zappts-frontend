import React from 'react'
import Slider from "react-slick";
import { data } from '../../assets';
import { Container, SliderContent } from './styles'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Banner() {
  return (
    <Container>
      <Slider
        dots
        arrows={false}
        infinite
        autoplay
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
      >
        <SliderContent>
          <img src={data} alt="Illustration"/>
          <h4>Marcenas mattis egestas</h4>
          <p>
            Erdum et malesuada fames ac ante ileum primmer in faucibus
            uspendisse porta.
          </p>
        </SliderContent>
        <SliderContent>
          <img src={data} alt="Illustration"/>
          <h4>Marcenas mattis egestas</h4>
          <p>
            Erdum et malesuada fames ac ante ileum primmer in faucibus
            uspendisse porta.
          </p>
        </SliderContent>
        <SliderContent>
          <img src={data} alt="Illustration"/>
          <h4>Marcenas mattis egestas</h4>
          <p>
            Erdum et malesuada fames ac ante ileum primmer in faucibus
            uspendisse porta.
          </p>
        </SliderContent>
      </Slider>
    </Container>
  )
}
