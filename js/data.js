// Beethoven · Sonata n.º 5, Op. 10 n.º 1 · I. Allegro molto e con brio
// Do menor · 2/2 · ♩=69 · Forma sonata
// Edición: Breitkopf & Härtel / E.R.1

const PASAJES = [

    // ── EXPOSICIÓN ───────────────────────────────────────────────────────────
    {
        numero: 1,
        titulo: "Exposición · 1er Tema",
        compases: "1–34",
        imagen: "img/pagina_1.png",
        texto: "Tema principal en Do menor. Motivo anacrúsico ff-p con acorde inicial sfz y respuesta piano. Beethoven opone energía y lirismo desde el compás 1. Atención al acorde de dominante con séptima en los bajos y a la digitación de las terceras de la mano derecha.",
        seccion: "exposicion"
    },
    {
        numero: 2,
        titulo: "Exposición · 2º Tema y Codetta",
        compases: "35–88",
        imagen: "img/pagina_2.png",
        texto: "Transición modulante hacia Mi♭ mayor. Segundo tema «p dolce» de carácter cantabile con acompañamiento en acordes ligados. Codetta que cierra la exposición con material del 1er tema y brillantes escalas. Fijar el carácter lírico frente al enérgico del 1er tema.",
        seccion: "exposicion"
    },

    // ── DESARROLLO ───────────────────────────────────────────────────────────
    {
        numero: 3,
        titulo: "Desarrollo · 1ª fase",
        compases: "89–134",
        imagen: "img/pagina_3.png",
        texto: "El desarrollo arranca con el motivo anacrúsico en tonos lejanos (Fa menor, Re♭ mayor). Trabajo imitativo entre las dos manos. Destaca el pasaje «con forza» con grandes saltos y la sección «p espress.» que prepara la llegada de la dominante de Do menor.",
        seccion: "desarrollo"
    },
    {
        numero: 4,
        titulo: "Desarrollo · 2ª fase",
        compases: "135–162",
        imagen: "img/pagina_4.png",
        texto: "Segunda fase del desarrollo. Sección «cantabile» en el registro agudo con acompañamiento de corcheas en el bajo. Escritura «p legatissimo» que demanda una paleta sonora íntima. El crescendo final conduce a la reexposición.",
        seccion: "desarrollo"
    },

    // ── REEXPOSICIÓN ─────────────────────────────────────────────────────────
    {
        numero: 5,
        titulo: "Reexposición · 1er Tema",
        compases: "163–194",
        imagen: "img/pagina_5.png",
        texto: "El 1er tema regresa en Do menor con mayor densidad orquestal. Beethoven añade el «stacc. molto» y el «f subito» para aumentar el dramatismo. La sección «una corda / pp sottovoce» crea un contraste extremo antes del clímax fff.",
        seccion: "reexposicion"
    },
    {
        numero: 6,
        titulo: "Reexposición · 2º Tema",
        compases: "195–222",
        imagen: "img/pagina_6.png",
        texto: "El 2º tema reaparece ahora en Do menor (no mayor), respetando el principio de reexposición beethoveniana. «Ped. come prima» y escritura «espr.» Textura progresivamente más densa con diseños ascendentes que preparan la coda.",
        seccion: "reexposicion"
    },

    // ── CODA ─────────────────────────────────────────────────────────────────
    {
        numero: 7,
        titulo: "Coda · 1ª parte",
        compases: "223–238",
        imagen: "img/pagina_7.png",
        texto: "La coda desarrolla el material anacrúsico con nuevas armonizaciones. Cresc. sostenido hacia el fff. El trino largo precede a la explosión ff final. Beethoven apura la tensión rítmica con sincopas y sforzandi en tiempos débiles.",
        seccion: "coda"
    },
    {
        numero: 8,
        titulo: "Coda · 2ª parte",
        compases: "239–246",
        imagen: "img/pagina_8.png",
        texto: "Conclusión del movimiento. Alternancia sf-p que recuerda el contraste inicial. Los últimos acordes en ff sobre la tónica Do menor cierran la forma con la misma energía del principio. El movimiento termina con una fermata sobre el acorde de tónica.",
        seccion: "coda"
    }
];
