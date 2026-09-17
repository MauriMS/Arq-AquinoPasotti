import React from 'react';
import './servicios.css';

import foto1 from '../assets/logo2.jpg';
import foto2 from '../assets/logo2.jpg';

function Servicios() {
  return (
    <div className="servicios-page">
      <div className="servicios-container">

        <div className="servicios-texto">
          <h1 className="servicios-titulo">oficina + servicios</h1>
          <div className="servicios-content">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit assumenda quis animi porro, odio hic dolor quas obcaecati. Magni commodi ratione ad. Eius, quaerat excepturi ea sit quas omnis quos.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat doloribus voluptatum eius numquam hic neque inventore quaerat totam dolorem harum, quisquam consequuntur animi nihil laboriosam, sapiente alias reprehenderit nisi similique!
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum architecto minus asperiores aut, quam maiores delectus aspernatur tempore facere pariatur, perferendis, explicabo iste labore aperiam? Deleniti quod itaque tempore incidunt!
            </p>
          </div>
        </div>

        <div className="servicios-fotos">
          <div className="servicio-foto-wrap">
            <img src={foto1} alt="Servicios 1" className="servicio-foto" />
          </div>
          <div className="servicio-foto-wrap">
            <img src={foto2} alt="Servicios 2" className="servicio-foto" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Servicios;
