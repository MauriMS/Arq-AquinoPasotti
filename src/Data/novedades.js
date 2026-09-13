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
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letrasets Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.',

    imagen: stock(1029),
  },
  {
    id: 'estudio-en-feria-arquitectura',
    titulo: 'Participamos de la Feria de Arquitectura del Litoral',
    fecha: '2026-06-22',
    resumen: 'Presentamos nuestros últimos proyectos residenciales ante colegas y clientes.',
    contenido:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letrasets Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.',
    imagen: stock(1050),
  },
  {
    id: 'premio-diseno-sustentable',
    titulo: 'Reconocimiento por diseño sustentable',
    fecha: '2026-04-15',
    resumen: 'Uno de nuestros proyectos fue distinguido por su integración con el entorno natural.',
    contenido:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letrasets Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.',
    imagen: stock(1060),
  },
  {
    id: 'ampliacion-equipo',
    titulo: 'Ampliamos el equipo de arquitectos',
    fecha: '2026-02-03',
    resumen: 'Sumamos nuevos profesionales para acompañar el crecimiento del estudio.',
    contenido: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letrasets Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.'
      ,
    imagen: stock(1074),
  },
];


