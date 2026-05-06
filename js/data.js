// Beethoven · Sonata n.º 5, Op. 10 n.º 1 · I. Allegro molto e con brio
// Do menor · 2/2 · ♩=69 · Forma sonata
// Análisis armónico: compases exactos según análisis académico
//
// ESTRUCTURA:
//   Exposición  cc. 1–104    (Tema 1 · Puente · Tema 2 · Coda exp.)
//   Desarrollo  cc. 105–168  (Zona 1 · Zona 2 · Zona 3 · Coda des.)
//   Reexposición cc. 169–262 (Tema 1 · Puente · Tema 2)
//   Coda final  cc. 263–fin

const PASAJES = [

    // ── EXPOSICIÓN ───────────────────────────────────────────────────────────
    {
        numero: 1,
        titulo: "Exposición · Tema 1 y Puente",
        compases: "1–33",
        imagen: "img/pagina_1.png",
        texto: "Tema 1 en Do menor: dos periodos (antecedente–consecuente) con reafirmación armónica mediante la sensible Bdim en los cc. 10, 14 y 15. Finaliza con progresión I–II–V–I (ff) y silencio súbito que provoca una sensación de reposo. Este gesto da inicio al Puente, que se desarrolla en Mi♭ mayor (relativa mayor de Cm), con diálogo constante entre el I grado (Eb) y el V grado dominante (Bb7).",
        seccion: "exposicion"
    },
    {
        numero: 2,
        titulo: "Exposición · Fin Puente y Tema 2",
        compases: "34–66",
        imagen: "img/pagina_2.png",
        texto: "El Puente continúa reafirmando Eb mediante Bb7. En el c. 56 cambia la intención rítmica (mayor velocidad) marcando el Fin del Puente y el inicio del Tema 2. Este segundo tema, en Mi♭ mayor (p dolce), actúa como gran consecuente del Tema 1. Se reafirma Eb con Bb como dominante y Ab como IV grado subdominante.",
        seccion: "exposicion"
    },
    {
        numero: 3,
        titulo: "Exposición · Coda",
        compases: "67–104",
        imagen: "img/pagina_3.png",
        texto: "Continuación del Tema 2: en los cc. 87 y 89 aparece F#dim como sensible del tercer grado de Eb (Gm), confirmando esta tonalidad. En el c. 93 comienza la Coda de la Exposición con Bb→Eb; toda la sección se mantiene en Eb. El diálogo armónico resuelve en el c. 104 sobre Ddim —sensible de Eb— dando por finalizada la Exposición e iniciando el Desarrollo.",
        seccion: "exposicion"
    },

    // ── DESARROLLO ───────────────────────────────────────────────────────────
    {
        numero: 4,
        titulo: "Desarrollo · Zona 1 y Zona 2",
        compases: "105–134",
        imagen: "img/pagina_4.png",
        texto: "El Desarrollo comienza con un intercambio modal de Cm a C mayor, que actúa como V grado de Fa menor (centro tonal del Desarrollo). La Zona 1 (cc. 105–117) retoma el Tema 1 de la Exposición en Fm. La Zona 2 (cc. 118–134) usa el Tema 2: Fm como centro tonal con Bb (IV) y C7 (V). En el c. 129 aparece F7 como función transitoria —dominante de Bb—, y en el c. 134 Ab7 funciona como dominante del VI grado (Db), dando fin a la Zona 2.",
        seccion: "desarrollo"
    },
    {
        numero: 5,
        titulo: "Desarrollo · Zona 3 y Coda",
        compases: "135–168",
        imagen: "img/pagina_5.png",
        texto: "La Zona 3 (cc. 136–158) evoca el Puente de la Exposición. Su primer acorde es Db, napolitano de Cm. Se desarrolla Fm sin acordes ajenos a esa tonalidad. En el c. 158 aparece un acorde de G (V del V), que sirve como acorde pivote hacia Cm. La Coda del Desarrollo (cc. 159–168) recorre todos los grados de Do en el orden IV–III–II–I–VII–VI–V–IV–III–II–I–VII–V–IV–I–VII–I, concluyendo en el c. 168 e iniciando la Reexposición.",
        seccion: "desarrollo"
    },

    // ── REEXPOSICIÓN ─────────────────────────────────────────────────────────
    {
        numero: 6,
        titulo: "Reexposición · Tema 1 y Puente",
        compases: "169–200",
        imagen: "img/pagina_6.png",
        texto: "La Reexposición comienza en el c. 169/180 con el Tema 1 en Do menor, esta vez con variaciones: se suprime la sección final de la Exposición (cc. 22–30). El Puente de la Reexposición comienza con un acorde de Db, napolitano de Cm —distinto al de la Exposición, que lo presentó en Eb—. En el c. 200 la progresión Bb7→Ebm→Ddim inicia el descenso hacia el Tema 2 reexpuesto.",
        seccion: "reexposicion"
    },
    {
        numero: 7,
        titulo: "Reexposición · Tema 2",
        compases: "201–232",
        imagen: "img/pagina_7.png",
        texto: "El Tema 2 reaparece ahora en Do menor (no en Eb como en la Exposición), cumpliendo el principio de reexposición en la tonalidad principal. Db actúa simultáneamente como napolitano de Cm y como dominante de Gb. La presencia de Fdim como intercambio modal acerca la armonía a Fa, desde donde se re-expone en la tonalidad del IV grado de Cm. La llegada a Cm se hace gradual gracias a la cercanía entre los acordes del camino armónico.",
        seccion: "reexposicion"
    },

    // ── CODA FINAL ───────────────────────────────────────────────────────────
    {
        numero: 8,
        titulo: "Coda Final",
        compases: "233–fin",
        imagen: "img/pagina_8.png",
        texto: "En el c. 263 Beethoven retoma el gesto inicial de la obra (motivo anacrúsico) para dar paso a la Coda final. La Reexposición del Puente y del Tema 2 junto a la Coda reafirman definitivamente Do menor. El movimiento concluye con un contundente acorde de tónica en Cm sobre fermata.",
        seccion: "coda"
    }
];
