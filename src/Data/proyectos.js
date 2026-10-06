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
    nombre_en: 'nazca',
    ubicacion: 'desierto de nazca (400km al sur de lima), perú.',
    ubicacion_en: 'nazca desert (400km south of lima), peru.',
    superficieTerreno: '1ha',
    superficieConstruida: '1400 m2',
    anio: '2005',
    rama: 'arquitectura',
    tipo: 'comercial',
    cliente: 'arquitectum.com.',
    cliente_en: 'arquitectum.com.',
    memoria: 'este albergue destinado a turistas que visitan las famosas "líneas de nazca" -que dispongan de un equipaje mínimo- puedan disfrutar de un lugar higiénico, seguro y económico donde pernoctar y despertar frente a "las pampas de nazca", haciendo de su estadía algo efímero y pasajero, pero precisamente por esto, mucho más trascendente y vital. \n consta de recepción, salón de estar, comedor, 20 habitaciones dobles, sanitarios comunes, cocina y lavandería industrial, administración, 3 habitaciones para personal, enfermería, depósitos varios, balcones-mirador, azotea-terraza-mirador, mirador sobre cumbre de meseta y mirador elevado a través de globo aerostático (entre 100 a 200 mts de altura) y cocheras.',
    memoria_en: 'this lodge designed for tourists visiting the famous "nazca lines" -who have minimal luggage- allows them to enjoy a hygienic, safe, and economical place to spend the night and wake up facing the "nazca pampas", making their stay something ephemeral and fleeting, but precisely because of this, much more transcendent and vital. \n it consists of a reception, living room, dining room, 20 double rooms, shared bathrooms, industrial kitchen and laundry, administration, 3 staff rooms, infirmary, various storage rooms, balcony-viewpoints, roof-terrace-viewpoint, viewpoint on the plateau summit and an elevated viewpoint via a hot air balloon (between 100 to 200 meters high) and parking.',
    carpeta: 'nazca',
    ...fotosDe('nazca'),
  },
  {
    id: 'proyecto-2',
    nombre: 'Concurso Nazca',
    nombre_en: 'Nazca Competition',
    ubicacion: 'desierto de nazca (400km al sur de lima), perú.',
    ubicacion_en: 'nazca desert (400km south of lima), peru.',
    superficieTerreno: '1ha',
    superficieConstruida: '1400 m2',
    anio: '2005',
    rama: 'arquitectura',
    tipo: 'concursos',
    cliente: 'arquitectum.com.',
    cliente_en: 'arquitectum.com.',
    memoria: "concurso de ideas organizado por arquitectum.com.\nel objetivo del observatorio-albergue intenta ser un nuevo modelo de prototipo de hospedaje a nivel mundial, uno en el que lo importante sea el disfrute del paisaje, del medio ambiente y no tanto del confort que pueda brindarle.\nel objetivo de este albergue es en que los turistas -que dispongan de un equipaje mínimo- puedan disfrutar de un lugar higiénico, seguro y económico donde pernoctar y despertar frente a “las pampas de nazca”, haciendo de su estadía algo efímero y pasajero, pero precisamente por esto, mucho más trascendente y vital.\nel concepto básico es evitar un impacto ecológico importante en el lugar. la belleza natural y el paisaje único constituyen las premisas básicas de partida, las cuales serán preservadas, sino que es el principal punto de referencia del proyecto: la arquitectura es creada a partir de la particular atmósfera del lugar, el intenso diálogo con la impresionante escenografía del paisaje y con el clima estático y homogéneo.\ncreo que una torre impacta agresivamente al paisaje, propongo un globo ecológico que respete el ambiente, crea nuevas experiencias y el logro de mayores alturas para la observación.\nedificio escultórico y armónico con el entorno, poderoso por su forma, pero amable porque no agrede. monumental por su grandeza y sereno ya que levita sobre su lecho.\nun objeto que atrae su curiosidad y espíritu aventurero sin distraer su poderío y grandeza.",
    memoria_en: "ideas competition organized by arquitectum.com.\nthe objective of the observatory-lodge attempts to be a new prototype model for lodging worldwide, one in which the important thing is the enjoyment of the landscape, the environment, and not so much the comfort it can provide.\nthe objective of this lodge is that tourists -who have minimal luggage- can enjoy a hygienic, safe and economical place to spend the night and wake up facing the 'nazca pampas', making their stay something ephemeral and fleeting, but precisely because of this, much more transcendent and vital.\nthe basic concept is to avoid a major ecological impact on the site. the natural beauty and the unique landscape constitute the basic starting premises, which will be preserved, but it is also the main reference point of the project: the architecture is created from the particular atmosphere of the place, the intense dialogue with the impressive scenery of the landscape and with the static and homogeneous climate.\ni believe that a tower aggressively impacts the landscape, i propose an ecological balloon that respects the environment, creates new experiences and achieves greater heights for observation.\nsculptural building harmonious with the environment, powerful for its form, but friendly because it does not attack. monumental for its greatness and serene as it levitates over its bed.\nan object that attracts their curiosity and adventurous spirit without distracting its power and greatness.",
    carpeta: 'concurso_nazca',
    ...fotosDe('concurso_nazca'),
  }
];