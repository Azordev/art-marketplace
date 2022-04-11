const types = [
  {
    id: 'amulets',
    en: 'Amulets',
    es: 'Amuletos',
  },
  {
    id: 'apparatus',
    en: 'Apparatus',
    es: 'Aparatos',
  },
  {
    id: 'arms-and-armor',
    en: 'Arms and Armor',
    es: 'Armas y Armaduras',
  },
  {
    id: 'basketry',
    en: 'Basketry',
    es: 'Cestas y Cajas',
  },
  {
    id: 'book-binding',
    en: 'Book Binding',
    es: 'Cosido, pegado y fijado de libros',
  },
  {
    id: 'bound-volume',
    en: 'Bound Volume',
    es: 'Encuadernacion o entapado de libros',
  },
  {
    id: 'calligraphy',
    en: 'Calligraphy',
    es: 'Caligrafía',
  },
  {
    id: 'carpet',
    en: 'Carpet',
    es: 'Carpetas',
  },
  {
    id: 'ceramic',
    en: 'Ceramic',
    es: 'Cerámica',
  },
  {
    id: 'coins',
    en: 'Coins',
    es: 'Monedas',
  },
  {
    id: 'cosmetic-objects',
    en: 'Cosmetic Objects',
    es: 'Objetos de Cosmética',
  },
  {
    id: 'drawing',
    en: 'Drawing',
    es: 'Dibujos',
  },
  {
    id: 'embroidery',
    en: 'Embroidery',
    es: 'Tejido',
  },
  {
    id: 'enamel',
    en: 'Enamel',
    es: 'Arte con Esmaltes',
  },
  {
    id: 'forgery',
    en: 'Forgery',
    es: 'Forjas',
  },
  {
    id: 'frame',
    en: 'Frame',
    es: 'Marco',
  },
  {
    id: 'funerary-equipment',
    en: 'Funerary Equipment',
    es: 'Equipo Funerario',
  },
  {
    id: 'furniture-and-woodwork',
    en: 'Furniture and woodwork',
    es: 'Muebles y madera',
  },

  {
    id: 'garment',
    en: 'Garment',
    es: 'Ropa',
  },
  {
    id: 'glass',
    en: 'Glass',
    es: 'Vidrio',
  },
  {
    id: 'glyptic',
    en: 'Glyptic',
    es: 'Glíptica o tallo fino',
  },
  {
    id: 'illumination',
    en: 'Illumination',
    es: 'Iluminación',
  },
  {
    id: 'implements',
    en: 'Implements',
    es: 'Implementos',
  },
  {
    id: 'inlays',
    en: 'Inlays',
    es: 'Incrustaciones inlay',
  },
  {
    id: 'ivory',
    en: 'Ivory',
    es: 'Marfil',
  },
  {
    id: 'jade',
    en: 'Jade',
    es: 'Jade',
  },
  {
    id: 'jewelry',
    en: 'Jewelry',
    es: 'Joyería',
  },
  {
    id: 'knitting',
    en: 'Knitting',
    es: 'Tejido',
  },
  {
    id: 'lace',
    en: 'Lace',
    es: 'Lacés o cordones',
  },
  {
    id: 'lacquer',
    en: 'Lacquer',
    es: 'Barniz',
  },
  {
    id: 'leather',
    en: 'Leather',
    es: 'Cuero',
  },
  {
    id: 'linoleum-block',
    en: 'Linoleum Block',
    es: 'Bloque de Linoleum',
  },
  {
    id: 'lithographic-stone',
    en: 'Lithographic Stone',
    es: 'Piedra lítográfica',
  },
  {
    id: 'manuscript',
    en: 'Manuscript',
    es: 'Manuscrito',
  },
  {
    id: 'metalwork',
    en: 'Metalwork',
    es: 'Metal',
  },
  {
    id: 'miniature',
    en: 'Miniature',
    es: 'Miniatura',
  },
  {
    id: 'miscellaneous',
    en: 'Miscellaneous',
    es: 'Misceláneo',
  },
  {
    id: 'mixed-media',
    en: 'Mixed Media',
    es: 'Medios Mixtos',
  },
  {
    id: 'monotype',
    en: 'Monotype',
    es: 'Monotipo',
  },
  {
    id: 'mosaic',
    en: 'Mosaic',
    es: 'Mosaico',
  },
  {
    id: 'musical-instrument',
    en: 'Musical Instrument',
    es: 'Instrumento Musical',
  },
  {
    id: 'netsuke',
    en: 'Netsuke',
    es: 'Netsuke',
  },
  {
    id: 'painting',
    en: 'Painting',
    es: 'Pintura',
  },
  {
    id: 'paper',
    en: 'Paper',
    es: 'Papel',
  },
  {
    id: 'papyri',
    en: 'Papyri',
    es: 'Papiro',
  },
  {
    id: 'photograph',
    en: 'Photograph',
    es: 'Fotografía',
  },
  {
    id: 'plaque',
    en: 'Plaque',
    es: 'Placa',
  },
  {
    id: 'plate',
    en: 'Plate',
    es: 'Placa',
  },
  {
    id: 'portfolio',
    en: 'Portfolio',
    es: 'Portafolio',
  },
  {
    id: 'portrait-miniature',
    en: 'Portrait Miniature',
    es: 'Miniatura de retrato',
  },
  {
    id: 'print',
    en: 'Print',
    es: 'Impresión',
  },
  {
    id: 'relief',
    en: 'Relief',
    es: 'Relieve',
  },
  {
    id: 'rock-crystal',
    en: 'Rock Crystal',
    es: 'Cristal de roca',
  },
  {
    id: 'rubbing',
    en: 'Rubbing',
    es: 'Rugosidad',
  },
  {
    id: 'sampler',
    en: 'Sampler',
    es: 'Muestras',
  },
  {
    id: 'scarabs',
    en: 'Scarabs',
    es: 'Escarabajos',
  },
  {
    id: 'sculpture',
    en: 'Sculpture',
    es: 'Escultura',
  },
  {
    id: 'seals',
    en: 'Seals',
    es: 'Sellos',
  },
  {
    id: 'silver',
    en: 'Silver',
    es: 'Plata',
  },
  {
    id: 'spindle-whorl',
    en: 'Spindle Whorl',
    es: 'Espiral',
  },
  {
    id: 'stencil',
    en: 'Stencil',
    es: 'Estuche',
  },
  {
    id: 'stone',
    en: 'Stone',
    es: 'Piedra',
  },
  {
    id: 'tapestry',
    en: 'Tapestry',
    es: 'Tela',
  },
  {
    id: 'textile',
    en: 'Textile',
    es: 'Tela',
  },
  {
    id: 'time-based-media',
    en: 'Time-based Media',
    es: 'Medios temporales',
  },
  {
    id: 'tool',
    en: 'Tool',
    es: 'Herramienta',
  },
  {
    id: 'velvet',
    en: 'Velvet',
    es: 'Terciopelo',
  },
  {
    id: 'vessels',
    en: 'Vessels',
    es: 'Vasos',
  },
  {
    id: 'wood',
    en: 'Wood',
    es: 'Madera',
  },
  {
    id: 'woodblock',
    en: 'Woodblock',
    es: 'Bloque de madera',
  },
];

export default types;
