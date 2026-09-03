import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import foto1 from '../assets/1-vista-3d.jpeg'; 
import foto2 from '../assets/Arq.webp';
import foto3 from '../assets/Arq1.jpg';

import './home2.css'; 

function Home2() {
  return (
    <div className="home2-container">
      <div className="carrusel-seccion">
        <Swiper
          modules={[Pagination, Navigation, Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          spaceBetween={0}
          slidesPerView={1}
          navigation={true} 
          pagination={{ clickable: true }} 
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          loop={true}
          className="mi-swiper"
        >
          <SwiperSlide>
            <img src={foto1} alt="Obra 1" className="foto-carrusel" />
          </SwiperSlide>
          
          <SwiperSlide>
            <img src={foto2} alt="Obra 2" className="foto-carrusel" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={foto3} alt="Obra 3" className="foto-carrusel" />
          </SwiperSlide>
        </Swiper>
      </div>
      <footer className="home-footer">
        <span className="footer-span">©2026 aquino pasotti</span>
      </footer>
    </div>
  );
}

export default Home2;