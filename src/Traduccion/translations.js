// Diccionario central de traducciones. Para agregar un texto nuevo en algún
// componente: sumalo acá (en "es" y en "en") y usalo con t('seccion.clave').
export const translations = {
  es: {
    footer: '©2026 aquino pasotti',

    nav: {
      subtitle: 'arquitectura + ingenieria',
      proyectos: 'proyectos',
      oficina: 'oficina',
      novedades: 'novedades',
      contacto: 'contacto',
    },

    subnav: {
      oficina: 'oficina',
      servicios: 'servicios',
      arquitectura: 'arquitectura',
      ingenieria: 'ingeniería',
      legales: 'legales',
    },

    home: {},

    proyectos: {
      title: 'proyectos',
    },

    proyectosPorRama: {
      tituloArquitectura: 'proyectos arquitectura ',
      tituloIngenieria: 'proyectos ingeniería ',
      volver: 'volver',
      todos: 'todos',
      vacio: 'Todavía no hay proyectos cargados en esta categoría.',
      // El "value" de cada filtro tiene que coincidir con el campo "tipo" de
      // Data/proyectos.js (que está en español) — solo el "label" cambia de idioma.
      filtros: {
        arquitectura: [
          { value: 'viviendas', label: 'viviendas' },
          { value: 'comercial', label: 'comercial' },
          { value: 'urbanismo', label: 'urbanismo' },
          { value: 'concursos', label: 'concursos' },
        ],
        ingenieria: [
          { value: 'edificios', label: 'edificios' },
          { value: 'casas', label: 'casas' },
          { value: 'viviendas', label: 'viviendas' },
        ],
      },
    },

    detalle: {
      volver: 'volver',
      ubicacion: 'ubicación:',
      superficieLote: 'superficie lote:',
      superficie: 'superficie:',
      anio: 'año:',
      cliente: 'cliente:',
      memoria: 'memoria',
      noEncontrado: 'No se encontró el proyecto.',
    },

    oficina: {
      title: 'oficina',
      p1: 'somos un estudio internacional de arquitectura, diseño, urbanismo e ingeniería civil con más de 60 años de trayectoria.',
      p2: 'nuestra historia se ha forjado brindando asistencia técnica estratégica a colegas, empresas constructoras y del sector inmobiliario, labor que consolidamos en paralelo con el asesoramiento técnico para el ministerio de gobierno de la provincia del chaco.',
      p3: 'los últimos 25 años de ejercicio profesional independiente, celebramos hoy la integración formal de la arquitectura y la ingeniería, ofreciendo soluciones integrales y multidisciplinarias.',
      visionTitulo: 'nuestra visión',
      vision: [
        'crear y modelar espacios para ser habitados por el hombre y su entorno.',
        'diseñar el universo.',
      ],
      misionTitulo: 'nuestra misión',
      mision: [
        'la meta es proveer amplios servicios de arquitectura e ingeniería para los ámbitos de la vivienda, el comercio, la industria, el urbanismo y actividades especiales;',
        'proveer servicios de asistencia técnica profesional a colegas, comercios, industrias y la vivienda;',
        'entendemos que la construcción es la materialización estética de una organización determinada, por lo tanto el proyecto debe basarse en condiciones de escalabilidad, flexibilidad, ecología e integración de nuevas tecnologías;',
        'crear con calidad, equidad e inclusión los espacios, en sus formas y en sus detalles. cuidando el medioambiente e incorporando tecnología innovadora;',
        'concentrarnos en pocos elementos a fin de obtener una síntesis constructiva y eliminar así futuros factores de desperfectos y simplificar el mantenimiento;',
        '“tratamos de dar respuestas simples a necesidades complejas” arq. mario roberto álvarez.',
      ],
      pilaresTitulo: 'nuestra labor se fundamenta en los siguientes pilares estratégicos',
      pilares: [
        { fuerte: 'excelencia multidisciplinaria:', texto: ' Proveer servicios integrales de arquitectura e ingeniería con altos estándares de calidad en los sectores residencial, comercial, industrial y urbanístico.' },
        { fuerte: 'soporte técnico especializado:', texto: ' Brindar asistencia profesional estratégica a colegas, empresas e instituciones, compartiendo nuestra sólida trayectoria técnica.' },
        { fuerte: 'innovación y sostenibilidad:', texto: ' Concebir la construcción como la materialización de sistemas organizados, priorizando la escalabilidad, la flexibilidad funcional y la integración de tecnologías de vanguardia bajo criterios de respeto ambiental.' },
        { fuerte: 'compromiso social y detalle:', texto: ' Diseñar con un enfoque de equidad, inclusión y calidad, garantizando que cada detalle constructivo aporte valor al tejido social y al entorno.' },
        { fuerte: 'síntesis constructiva:', texto: ' Priorizar la eficiencia mediante la reducción de elementos innecesarios, optimizando la ejecución técnica para minimizar desperfectos y simplificar el mantenimiento a largo plazo.' },
      ],
      filosofiaTitulo: 'nuestra filosofía de trabajo',
      filosofiaQuote: '“tratamos de dar respuestas simples a necesidades complejas” — arq. mario roberto álvarez.',
    },

    servicios: {
      titulo: 'oficina + servicios',
      // TODO: contenido de ejemplo (lorem ipsum), reemplazar por el texto real.
      p1: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit assumenda quis animi porro, odio hic dolor quas obcaecati. Magni commodi ratione ad. Eius, quaerat excepturi ea sit quas omnis quos.',
      p2: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat doloribus voluptatum eius numquam hic neque inventore quaerat totam dolorem harum, quisquam consequuntur animi nihil laboriosam, sapiente alias reprehenderit nisi similique!',
      p3: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum architecto minus asperiores aut, quam maiores delectus aspernatur tempore facere pariatur, perferendis, explicabo iste labore aperiam? Deleniti quod itaque tempore incidunt!',
    },

    legales: {
      title: 'términos y condiciones legales',
      intro: 'el acceso a este sitio implica la aceptación de los siguientes términos y condiciones de uso de documentos electrónicos, tal como se describe a continuación.',
      s1Titulo: '1- garantías y responsabilidad.',
      s1Texto: 'si bien hacemos todo lo posible para garantizar la precisión del contenido de este sitio web, este se proporciona "tal cual" y aquino pasotti consultora no ofrece garantías en relación con la exactitud o integridad de la información que contiene. si bien el contenido de este sitio se proporciona de buena fe, no garantizamos que la información se mantenga actualizada, sea veraz y no engañosa, ni que este sitio esté siempre (o nunca) disponible para su uso. no garantizamos que los servidores que hacen posible el acceso a este sitio web estén libres de errores, virus o fallos, y usted acepta que es su responsabilidad tomar las medidas adecuadas para la protección contra dichas amenazas.',
      s2Titulo: '2- uso del contenido.',
      s2Texto: 'se permite la duplicación o copia del contenido para su distribución por cualquier medio, siempre y cuando se mencione la fuente de origen es decir de “aquino pasotti consultora". aquino pasotti consultora fomenta y permite los enlaces de texto a su sitio web, siempre que: (a) el propósito del enlace no sea perjudicar la reputación de aquino pasotti consultora ni de sus clientes ni proveedores de servicios; (b) al activarse, el enlace se abra a pantalla completa y no como una ventana emergente enmarcada en el sitio web enlazado; y (c) aquino pasotti consultora se reserva el derecho de revocar el consentimiento para cualquier enlace en cualquier momento, a su entera discreción, modificando este acuerdo. caso contrario aquino pasotti consultora indicara el material que no permita su duplicación, copia o acceso.',
      s3Titulo: '3- información personal.',
      s3Texto: 'aquino pasotti consultora no recopila información personal (por ejemplo: nombre, dirección o número de teléfono, etc) a menos que usted nos la proporcione voluntariamente por correo electrónico. aquino pasotti consultora no comparte información personal con terceros. cuando visita este sitio web, aquino pasotti consultora recopila automáticamente cierta información, como: – dominio, país, dirección ip – navegador, plataforma, resolución – páginas de entrada y salida, referencias – fecha, hora, términos de búsqueda y motores de búsqueda. esta es una práctica estándar en sitios web y solo se utiliza para evaluar cómo aquino pasotti consultora puede diseñar el sitio para satisfacer mejor sus necesidades.',
      footer: 'copyright 2026 - aquinopasotti.com – todos los derechos reservados',
    },

    contacto: {
      heroTitle: 'contacto',
      taglineMid: 'arquitectura + ingenieria',
      ubicacion: 'ubicación:',
      telefonos: 'telefonos:',
      mail: 'mail:',
    },

    novedades: {
      title: 'novedades',
      localeFecha: 'es-AR',
    },
  },

  en: {
    footer: '©2026 aquino pasotti',

    nav: {
      subtitle: 'architecture + engineering',
      proyectos: 'projects',
      oficina: 'office',
      novedades: 'news',
      contacto: 'contact',
    },

    subnav: {
      oficina: 'office',
      servicios: 'services',
      arquitectura: 'architecture',
      ingenieria: 'engineering',
      legales: 'legal',
    },

    home: {},

    proyectos: {
      title: 'projects',
    },

    proyectosPorRama: {
      tituloArquitectura: 'architecture projects ',
      tituloIngenieria: 'engineering projects ',
      volver: 'back',
      todos: 'all',
      vacio: 'No projects have been added to this category yet.',
      filtros: {
        arquitectura: [
          { value: 'viviendas', label: 'housing' },
          { value: 'comercial', label: 'commercial' },
          { value: 'urbanismo', label: 'urban planning' },
          { value: 'concursos', label: 'competitions' },
        ],
        ingenieria: [
          { value: 'edificios', label: 'buildings' },
          { value: 'casas', label: 'houses' },
          { value: 'viviendas', label: 'housing' },
        ],
      },
    },

    detalle: {
      volver: 'back',
      ubicacion: 'location:',
      superficieLote: 'lot area:',
      superficie: 'built area:',
      anio: 'year:',
      cliente: 'client:',
      memoria: 'summary',
      noEncontrado: 'Project not found.',
    },

    oficina: {
      title: 'office',
      p1: 'We are an international architecture, design, urban planning and civil engineering firm with over 60 years of experience.',
      p2: 'Our history has been built by providing strategic technical assistance to colleagues, construction companies and the real estate sector, work we have carried out alongside technical advisory services for the government of the Province of Chaco.',
      p3: 'Over the last 25 years of independent professional practice, we now celebrate the formal integration of architecture and engineering, offering comprehensive, multidisciplinary solutions.',
      visionTitulo: 'our vision',
      vision: [
        'to create and shape spaces to be inhabited by people and their environment.',
        'to design the universe.',
      ],
      misionTitulo: 'our mission',
      mision: [
        'our goal is to provide comprehensive architecture and engineering services for housing, commerce, industry, urban planning and special projects;',
        'to provide professional technical assistance to colleagues, businesses, industries and homeowners;',
        'we understand that construction is the aesthetic realization of a given organization, so every project must be based on scalability, flexibility, ecology and the integration of new technologies;',
        'to design with quality, equity and inclusion in every space, form and detail, caring for the environment and incorporating innovative technology;',
        'to focus on few elements in order to achieve constructive synthesis and eliminate future defects, simplifying maintenance;',
        '"we try to give simple answers to complex needs" — arch. mario roberto álvarez.',
      ],
      pilaresTitulo: 'our work is based on the following strategic pillars',
      pilares: [
        { fuerte: 'multidisciplinary excellence:', texto: ' Provide comprehensive architecture and engineering services with high quality standards across residential, commercial, industrial and urban sectors.' },
        { fuerte: 'specialized technical support:', texto: ' Offer strategic professional assistance to colleagues, companies and institutions, sharing our solid technical track record.' },
        { fuerte: 'innovation and sustainability:', texto: ' Conceive construction as the realization of organized systems, prioritizing scalability, functional flexibility and the integration of cutting-edge technologies under environmentally responsible criteria.' },
        { fuerte: 'social commitment and attention to detail:', texto: ' Design with a focus on equity, inclusion and quality, ensuring every constructive detail adds value to the social fabric and its surroundings.' },
        { fuerte: 'constructive synthesis:', texto: ' Prioritize efficiency by reducing unnecessary elements, optimizing technical execution to minimize defects and simplify long-term maintenance.' },
      ],
      filosofiaTitulo: 'our work philosophy',
      filosofiaQuote: '"we try to give simple answers to complex needs" — arch. mario roberto álvarez.',
    },

    servicios: {
      titulo: 'office + services',
      
      p1: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit assumenda quis animi porro, odio hic dolor quas obcaecati. Magni commodi ratione ad. Eius, quaerat excepturi ea sit quas omnis quos.',
      p2: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat doloribus voluptatum eius numquam hic neque inventore quaerat totam dolorem harum, quisquam consequuntur animi nihil laboriosam, sapiente alias reprehenderit nisi similique!',
      p3: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum architecto minus asperiores aut, quam maiores delectus aspernatur tempore facere pariatur, perferendis, explicabo iste labore aperiam? Deleniti quod itaque tempore incidunt!',
    },

    legales: {
      title: 'terms and conditions',
      intro: 'Access to this site implies acceptance of the following terms and conditions for the use of electronic documents, as described below.',
      s1Titulo: '1- warranties and liability.',
      s1Texto: 'While we make every effort to ensure the accuracy of the content on this website, it is provided "as is" and aquino pasotti consultora offers no warranties regarding the accuracy or completeness of the information it contains. While the content of this site is provided in good faith, we do not guarantee that the information will remain up to date, truthful or non-misleading, nor that this site will always (or ever) be available for use. We do not guarantee that the servers that make access to this website possible are free of errors, viruses or failures, and you agree that it is your responsibility to take appropriate measures to protect against such threats.',
      s2Titulo: '2- use of content.',
      s2Texto: 'Duplication or copying of the content for distribution through any medium is permitted, provided that the source is credited, i.e. "aquino pasotti consultora". aquino pasotti consultora encourages and allows text links to its website, provided that: (a) the purpose of the link is not to harm the reputation of aquino pasotti consultora, its clients or service providers; (b) upon activation, the link opens in full screen rather than as a pop-up window framed within the linked site; and (c) aquino pasotti consultora reserves the right to revoke consent for any link at any time, at its sole discretion, by amending this agreement. Otherwise, aquino pasotti consultora will indicate material that may not be duplicated, copied or accessed.',
      s3Titulo: '3- personal information.',
      s3Texto: 'aquino pasotti consultora does not collect personal information (such as name, address or phone number, etc.) unless you voluntarily provide it to us by email. aquino pasotti consultora does not share personal information with third parties. When you visit this website, aquino pasotti consultora automatically collects certain information, such as: domain, country, IP address — browser, platform, resolution — entry and exit pages, referrers — date, time, search terms and search engines. This is standard practice on websites and is used solely to evaluate how aquino pasotti consultora can design the site to better meet your needs.',
      footer: 'copyright 2026 - aquinopasotti.com – all rights reserved',
    },

    contacto: {
      heroTitle: 'contact',
      taglineMid: 'architecture + engineering',
      ubicacion: 'location:',
      telefonos: 'phone:',
      mail: 'email:',
    },

    novedades: {
      title: 'news',
      localeFecha: 'en-US',
    },
  },
};