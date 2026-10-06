import './TituloPagina.css';

// Título de página: misma posición y tamaño en todas las vistas.
// Va como primer hijo de la página (después de <SubNav />), fuera del container.
function TituloPagina({ children, className = '' }) {
  return <h1 className={`titulo-pagina ${className}`}>{children}</h1>;
}

export default TituloPagina;
