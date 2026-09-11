// TODO: reemplazar las fotos de muestra (picsum.photos) por las imágenes reales de cada
// novedad, y completar título, fecha, resumen y contenido.
// Para usar fotos propias: importalas (import foto from '../assets/...') y usá la variable
// en vez de la URL de stock.

const stock = (id, w = 1000, h = 650) => `https://picsum.photos/id/${id}/${w}/${h}`;

export const novedades = [
  {
    id: 'nueva-obra-casa-tres-patios',
    titulo: 'Comenzó la construcción de Casa Tres Patios',
    fecha: '2026-08-10',
    resumen: 'Arrancamos con los trabajos de fundación de nuestro nuevo proyecto en Pilar.',
    contenido:
      'Texto completo de la novedad. Acá va la descripción larga: contexto de la obra, hitos alcanzados, fotos del avance y cualquier detalle que quieras compartir sobre el proyecto. Podés escribir varios párrafos.',
    imagen: stock(1029),
  },
  {
    id: 'estudio-en-feria-arquitectura',
    titulo: 'Participamos de la Feria de Arquitectura del Litoral',
    fecha: '2026-06-22',
    resumen: 'Presentamos nuestros últimos proyectos residenciales ante colegas y clientes.',
    contenido:
      'Texto completo de la novedad. Contá cómo fue la participación en la feria, qué proyectos se expusieron, fotos del stand y devoluciones recibidas.',
    imagen: stock(1050),
  },
  {
    id: 'premio-diseno-sustentable',
    titulo: 'Reconocimiento por diseño sustentable',
    fecha: '2026-04-15',
    resumen: 'Uno de nuestros proyectos fue distinguido por su integración con el entorno natural.',
    contenido:
      'Texto completo de la novedad. Detallá el premio recibido, el jurado, y qué aspectos del proyecto fueron destacados.',
    imagen: stock(1060),
  },
  {
    id: 'ampliacion-equipo',
    titulo: 'Ampliamos el equipo de arquitectos',
    fecha: '2026-02-03',
    resumen: 'Sumamos nuevos profesionales para acompañar el crecimiento del estudio.',
    contenido:
      'Texto completo de la novedad. Presentá a los nuevos integrantes del equipo y sus roles.',
    imagen: stock(1074),
  },
];