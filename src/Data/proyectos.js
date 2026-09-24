const modulosFotos = import.meta.glob(
  '../assets/img-proyectos/*/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, import: 'default' }
);

// Agrupa esas fotos por carpeta
const fotosPorCarpeta = {};
for (const ruta in modulosFotos) {
  const match = ruta.match(/img-proyectos\/([^/]+)\/([^/]+)$/);
  if (!match) continue;
  const [, carpeta, archivo] = match;
  if (!fotosPorCarpeta[carpeta]) fotosPorCarpeta[carpeta] = [];
  fotosPorCarpeta[carpeta].push({ archivo, url: modulosFotos[ruta] });
}
// Orden numérico "natural" por nombre de archivo dentro de cada carpeta

Object.values(fotosPorCarpeta).forEach((fotos) =>
  fotos.sort((a, b) => a.archivo.localeCompare(b.archivo, undefined, { numeric: true, sensitivity: 'base' }))
);

// Dado el nombre de una carpeta, devuelve imagenes parausar
function fotosDe(carpeta) {
  const fotos = fotosPorCarpeta[carpeta] || [];
  if (fotos.length === 0) return { cover: null, imagenes: [] };

  const portada = fotos.find((f) => /^cover\.(jpg|jpeg|png|webp)$/i.test(f.archivo));

  return {
    cover: (portada || fotos[0]).url,
    imagenes: fotos.map((f) => f.url),
  };
}

export const proyectos = [
  {
    id: 'desierto_nazca',
    nombre: 'nazca',
    ubicacion: 'desierto de nazca (400km al sur de lima), perú.',
    superficieTerreno: '1ha',
    superficieConstruida: '1400 m2',
    anio: '2005',
    rama: 'arquitectura',
    tipo: 'comercial',
    cliente: 'arquitectum.com.',
    memoria:
      'este albergue destinado a turistas que visitan las famosas "líneas de nazca" -que dispongan de un equipaje mínimo- puedan disfrutar de un lugar higiénico, seguro y económico donde pernoctar y despertar frente a "las pampas de nazca", haciendo de su estadía algo efímero y pasajero, pero precisamente por esto, mucho más trascendente y vital. \n consta de recepción, salón de estar, comedor, 20 habitaciones dobles, sanitarios comunes, cocina y lavandería industrial, administración, 3 habitaciones para personal, enfermería, depósitos varios, balcones-mirador, azotea-terraza-mirador, mirador sobre cumbre de meseta y mirador elevado a través de globo aerostático (entre 100 a 200 mts de altura) y cocheras.',
    carpeta: 'nazca',
    ...fotosDe('nazca'),
  },
  {
    id: 'proyecto-2',
    nombre: 'Proyecto 2',
    ubicacion: 'Resistencia, Chaco, Argentina',
    superficieTerreno: '800 m2',
    superficieConstruida: '210 m2',
    anio: '2024',
    rama: 'ingenieria',
    tipo: 'viviendas',
    cliente: 'arquitectum.com.',
    memoria: 'Texto de memoria del proyecto 2.',
    carpeta: 'casa',
    ...fotosDe('casa'),
  },
  {
    id: 'proyecto-3',
    nombre: 'Proyecto 3',
    ubicacion: 'Resistencia, Chaco, Argentina',
    superficieTerreno: '650 m2',
    superficieConstruida: '180 m2',
    anio: '2024',
    rama: 'ingenieria',
    tipo: 'edificios',
    cliente: 'arquitectum.com.',
    memoria: 'Texto de memoria del proyecto 3.',
    carpeta: 'edificio',
    ...fotosDe('edificio'),
  },
  {
    id: 'proyecto-4',
    nombre: 'Concurso Nazca',
    ubicacion: 'desierto de nazca (400km al sur de lima), perú.',
    superficieTerreno: '1ha',
    superficieConstruida: '1400 m2',
    anio: '2005',
    rama: 'arquitectura',
    tipo: 'concursos',
    cliente: 'arquitectum.com.',
    memoria: "concurso de ideas organizado por arquitectum.com.\nel objetivo del observatorio-albergue intenta ser un nuevo modelo de prototipo de hospedaje a nivel mundial, uno en el que lo importante sea el disfrute del paisaje, del medio ambiente y no tanto del confort que pueda brindarle.\nel objetivo de este albergue es en que los turistas -que dispongan de un equipaje mínimo- puedan disfrutar de un lugar higiénico, seguro y económico donde pernoctar y despertar frente a “las pampas de nazca”, haciendo de su estadía algo efímero y pasajero, pero precisamente por esto, mucho más trascendente y vital.\nel concepto básico es evitar un impacto ecológico importante en el lugar. la belleza natural y el paisaje único constituyen las premisas básicas de partida, las cuales serán preservadas, sino que es el principal punto de referencia del proyecto: la arquitectura es creada a partir de la particular atmósfera del lugar, el intenso diálogo con la impresionante escenografía del paisaje y con el clima estático y homogéneo.\ncreo que una torre impacta agresivamente al paisaje, propongo un globo ecológico que respete el ambiente, crea nuevas experiencias y el logro de mayores alturas para la observación.\nedificio escultórico y armónico con el entorno, poderoso por su forma, pero amable porque no agrede. monumental por su grandeza y sereno ya que levita sobre su lecho.\nun objeto que atrae su curiosidad y espíritu aventurero sin distraer su poderío y grandeza.",
    carpeta: 'concurso_nazca',
    ...fotosDe('concurso_nazca'),
  }

];