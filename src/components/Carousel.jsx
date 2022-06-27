import React, { useRef ,useEffect, useCallback } from "react";
import "../styles/components/Carousel.scss";

// Imágenes de prueba
import img__1 from "../assets/img/cable.jpg";
import img__2 from "../assets/img/correa.jpg";
import img__3 from "../assets/img/correa_cable.jpg";

export const Carousel = () => {
    const Slideshow = useRef(null);
    const Intervalo__Slideshow = useRef(null);

    const Siguiente = useCallback(() => {
        if (Slideshow.current.children.length > 0) {
            const primer__elemento = Slideshow.current.children[0];

            Slideshow.current.style.transition = `1000ms ease-out all`;

            const tamaño__slide = Slideshow.current.children[0].offsetWidth;
            Slideshow.current.style.transform = `translateX(-${tamaño__slide}px)`;

            const transicion = () => {
                Slideshow.current.style.transition = 'none';
                Slideshow.current.style.transform = `translateX(0)`;

                Slideshow.current.appendChild(primer__elemento);
            }

            Slideshow.current.addEventListener('transitionend', transicion);
        }
    });

    useEffect(() => {
      Intervalo__Slideshow.current = setInterval(() => {
            Siguiente();
        }, 5000);

        Slideshow.current.addEventListener('mouseenter', () => {
            clearInterval(Intervalo__Slideshow.current);
        });
    }, []);
    return (
        <div className="container">
            <div className="container__slideshow" ref={Slideshow}>
                <div className="container__slide">
                    <a>
                        <img src={img__1} alt="Primera imagen" />
                    </a>
                    <div className="container__slide__text">
                        <p>cable MIDI de 3m</p>
                    </div>
                </div>

                <div className="container__slide">
                    <a>
                        <img src={img__2} alt="Segunda imagen" />
                    </a>
                    <div className="container__slide__text">
                        <p>correa para acordeón</p>
                    </div>
                </div>

                <div className="container__slide">
                    <a>
                        <img src={img__3} alt="Tercera imagen" />
                    </a>
                    <div className="container__slide__text">
                        <p>juego de correa y cable</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel;