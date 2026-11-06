export interface CheerMessage {
  id: string;
  category: 'dias_dificiles' | 'fuerza' | 'mimos' | 'autoamor' | 'sonrisas';
  categoryLabel: string;
  title: string;
  message: string;
  kittyIcon: string;
  quote?: string;
}

export interface SecretLetter {
  id: string;
  title: string;
  subtitle: string;
  envelopeColor: string;
  sealIcon: string;
  content: string[];
  signature: string;
}

export interface OrigamiStar {
  id: number;
  color: string;
  text: string;
  authorNote: string;
}

export const CHEER_MESSAGES: CheerMessage[] = [
  {
    id: 'm-1',
    category: 'dias_dificiles',
    categoryLabel: 'Días Difíciles',
    title: 'Respira hondo, Sofi 🌸',
    message: 'Hay días en los que todo parece costar el doble, pero recuerda: no tienes que resolver toda tu vida hoy. Basta con dar un pasito a la vez. Eres más fuerte de lo que te imaginas y este momento difícil también pasará.',
    kittyIcon: '🐾',
    quote: 'Las nubes siempre se van, y el sol vuelve a salir para ti.'
  },
  {
    id: 'm-2',
    category: 'fuerza',
    categoryLabel: 'Fuerza & Valentía',
    title: '¡Eres pura magia y determinación! ✨',
    message: 'Mira hacia atrás por un segundo y contempla todo lo que has superado. Cada obstáculo al que le temías quedó atrás porque no te rendiste. Sofía, tienes un brillo único y una capacidad infinita de salir adelante.',
    kittyIcon: '🎀',
    quote: 'Nunca subestimes el poder de un corazón bondadoso y valiente.'
  },
  {
    id: 'm-3',
    category: 'mimos',
    categoryLabel: 'Mimos & Ternura',
    title: 'Un abrazo suave como patita de gato 🐱',
    message: 'Cierra los ojos e imagina a un gatito blanco haciéndote compañía en tus piernas, ronroneando suavecito y recordándote que mereces toda la paz del mundo. Aquí tienes un abrazo gigante lleno de cariño.',
    kittyIcon: '🤍',
    quote: 'Un ronroneo al día aleja todas las tristezas.'
  },
  {
    id: 'm-4',
    category: 'autoamor',
    categoryLabel: 'Autoamor & Pausa',
    title: 'Tienes permiso para descansar 🍓',
    message: 'No eres una máquina, eres un ser humano maravilloso. Si hoy te sientes cansada, haz una pausa. Prepárate algo rico, ponte cómoda y date el cariño que tan generosamente le das a los demás.',
    kittyIcon: '🍵',
    quote: 'Cuidar de ti no es egoísmo, es el acto más valiente de amor.'
  },
  {
    id: 'm-5',
    category: 'sonrisas',
    categoryLabel: 'Sonrisas Kitty',
    title: '¡Sonríe, que tu carita se ilumina! 🌟',
    message: 'Hello Kitty vino hoy con su moñito más lindo solo para sacarte una sonrisa. ¡Choca esas patitas! Hoy es un buen día para reír, comer algo dulce y recordar que eres profundamente querida.',
    kittyIcon: '🌸',
    quote: 'La sonrisa de Sofía tiene el poder de alegrar el día de cualquiera.'
  },
  {
    id: 'm-6',
    category: 'dias_dificiles',
    categoryLabel: 'Días Difíciles',
    title: 'No estás sola, Sofía 🌷',
    message: 'Incluso en los momentos de silencio o cuando sientes que nadie comprende lo que llevas dentro, recuerda que hay personas que te quieren con el alma y que siempre quieren verte bien. No dudes en pedir un abrazo.',
    kittyIcon: '🫂',
    quote: 'Incluso la noche más oscura termina con la luz del amanecer.'
  },
  {
    id: 'm-7',
    category: 'fuerza',
    categoryLabel: 'Fuerza & Valentía',
    title: 'Cree en tu propio talento 💫',
    message: 'A veces tu mente puede hacerte dudar, pero no te creas esos pensamientos de duda. Eres sumamente inteligente, creativa y capaz de lograr cosas hermosas. Lo estás haciendo mucho mejor de lo que crees.',
    kittyIcon: '⭐',
    quote: 'Lo que sueñas está esperando a que des el siguiente paso.'
  },
  {
    id: 'm-8',
    category: 'mimos',
    categoryLabel: 'Mimos & Ternura',
    title: 'Gatito guardián de tus sueños 💤',
    message: 'Deja las preocupaciones en la puerta. Esta noche déjate arropar por mantas suaves, sueña con campos de flores de cerezo y duerme con la certeza de que mañana es una página nueva en blanco.',
    kittyIcon: '🌙',
    quote: 'Descansa, pequeña soñadora, mañana florecerán nuevas sonrisas.'
  },
  {
    id: 'm-9',
    category: 'autoamor',
    categoryLabel: 'Autoamor & Pausa',
    title: 'Sé amable contigo misma hoy 🧁',
    message: 'Háblate como le hablarías a tu mejor amiga. No te juzgues por lo que no alcanzaste a hacer hoy; celebra lo que sí lograste, incluso si fue levantarte y continuar. Eres un tesoro inmenso, Sofía.',
    kittyIcon: '💖',
    quote: 'La bondad que das al mundo empieza por la que te tienes a ti misma.'
  },
  {
    id: 'm-10',
    category: 'sonrisas',
    categoryLabel: 'Sonrisas Kitty',
    title: 'Recordatorio oficial de Hello Kitty 🎀',
    message: '¡Atención Sofía! La liga internacional de gatitos esponjosos ha emitido un comunicado: "Se le declara a Sofía la chica más encantadora, talentosa y digna de apapachos del universo". ¡Caso cerrado!',
    kittyIcon: '🐱',
    quote: 'Amistad, ternura y un moño rosa para alegrar la vida.'
  },
  {
    id: 'm-11',
    category: 'dias_dificiles',
    categoryLabel: 'Días Difíciles',
    title: 'Llorar también está bien 🌧️',
    message: 'Si necesitas soltar lágrimas, hazlo sin culpa. La lluvia limpia el aire para que luego todo vuelva a brotar fresco y verde. Limpia tu corazón y vuelve a respirar hondo. Todo se irá acomodando poco a poco.',
    kittyIcon: '💧',
    quote: 'Después de la lluvia siempre viene el arcoíris más brillante.'
  },
  {
    id: 'm-12',
    category: 'fuerza',
    categoryLabel: 'Fuerza & Valentía',
    title: 'Tu brillo nadie lo puede apagar 🌺',
    message: 'Tu ternura no es debilidad, es tu mayor superpoder en un mundo que a veces olvida ser dulce. Sigue siendo esa persona especial, generosa y llena de luz. El mundo necesita más de ti, Sofi.',
    kittyIcon: '✨',
    quote: 'Tu luz es un faro que abriga a los que te rodean.'
  }
];

export const SECRET_LETTERS: SecretLetter[] = [
  {
    id: 'letter-1',
    title: 'Abre cuando sientas que no puedes más',
    subtitle: 'Para los días de sobrecarga y cansancio',
    envelopeColor: 'from-pink-100 to-rose-200 border-pink-300 text-pink-700',
    sealIcon: '🌸',
    content: [
      'Querida Sofía,',
      'Si estás leyendo esta cartita, probablemente estás sintiendo que las cosas pesan demasiado o que tus fuerzas no alcanzan. Quiero pedirte algo muy importante: suelta la carga por un momento.',
      'No tienes que demostrarle nada a nadie. Tu valor no depende de cuántas cosas hagas en un día, ni de que todo salga perfecto. El simple hecho de que existas, con tu dulzura y tu corazón, ya hace que este mundo sea un lugar infinitamente mejor.',
      'Siéntate, respira profundo tres veces y pon tus manos sobre tu pecho. Siente el latido de tu corazón. Estás viva, estás a salvo y esto es solo un día difícil, no una vida difícil.',
      'Te mando un abrazo apretado con olor a fresas y mimos de gatitos.'
    ],
    signature: 'Con todo el cariño del mundo, tu refugio felino 🐾'
  },
  {
    id: 'letter-2',
    title: 'Abre cuando dudes de tu talento y valor',
    subtitle: 'Un recordatorio de tu capacidad infinita',
    envelopeColor: 'from-rose-100 to-pink-200 border-rose-300 text-rose-700',
    sealIcon: '⭐',
    content: [
      'Mi querida Sofía,',
      'A veces la vocecita de la inseguridad habla muy fuerte, pero hoy vengo a recordarte la verdad: eres brillante, inteligente y profundamente capaz.',
      'Tienes una forma única de ver las cosas, una sensibilidad hermosa y una capacidad de aprender y crecer que te va a llevar a donde sueñes llegar. No te compares con nadie más, porque nadie camina con tus mismos pasitos ni tiene tu misma chispa.',
      'Confía en tus manos, confía en tu mente y sobre todo, confía en tu corazón. Lo que hoy te asusta, mañana será una anécdota de cómo lo lograste.',
      'Ponte tu moñito rosa imaginario y sal a conquistar lo que te propongas.'
    ],
    signature: 'Hello Kitty & tus mayores admiradores 🎀'
  },
  {
    id: 'letter-3',
    title: 'Abre cuando necesites una sonrisa inmediata',
    subtitle: 'Terapia de gatitos y ternura pura',
    envelopeColor: 'from-amber-50 to-pink-100 border-pink-300 text-pink-800',
    sealIcon: '🐱',
    content: [
      '¡Hola, hermosa Sofi!',
      '¿Sabías que los gatitos amasan con sus patitas las mantas porque recuerdan cuando eran bebés y se sentían completamente protegidos y felices?',
      'Bueno, imagínate que hoy una tropa de mini gatitos con lazos rosados están amasando tu almohada, haciendo purr purr al unísono y preparándote una taza de té con galletas en forma de corazón.',
      'La vida es muy corta para tomársela con demasiada seriedad. Ríete de las cosas pequeñas, come algo que te encante y regálate una sonrisa en el espejo ahora mismo.',
      '¡Te ves preciosa sonriendo!'
    ],
    signature: 'La liga de gatitos mimosos 🍓'
  },
  {
    id: 'letter-4',
    title: 'Abre antes de ir a dormir',
    subtitle: 'Paz nocturna y dulces sueños',
    envelopeColor: 'from-purple-50 to-pink-100 border-purple-200 text-purple-800',
    sealIcon: '🌙',
    content: [
      'Buenas noches, Sofía.',
      'El día de hoy ya terminó. Lo que se pudo hacer, estuvo bien; lo que quedó pendiente, puede esperar pacientemente a mañana.',
      'Ahora es momento de soltar la mente, apagar las pantallas del alma y cobijarte calientita. Eres suficiente. Eres amada. No hay nada malo en ti.',
      'Que tus sueños sean ligeros, llenos de campos de nubes de algodón y melodías suaves. Descansa profundamente, princesa.',
      'Mañana el sol volverá a salir para iluminar tu camino.'
    ],
    signature: 'Dulces sueños siempre, Sofi 💤✨'
  },
  {
    id: 'letter-5',
    title: 'Abre cuando hayas tenido un logro (chico o grande)',
    subtitle: '¡Vamos a celebrar juntas!',
    envelopeColor: 'from-emerald-50 to-pink-100 border-emerald-200 text-emerald-800',
    sealIcon: '🎉',
    content: [
      '¡BRAVO, SOFÍA! 🎊🥳',
      '¡Estoy tan pero tan orgullosa de ti! Sea que hayas terminado una tarea pesada, aprobado un desafío, o simplemente tenido la valentía de levantarte y enfrentar el día: ¡mereces una fiesta!',
      'Muchas veces nos olvidamos de aplaudirnos a nosotras mismas por miedo a parecer presumidas, pero hoy no: hoy te toca sentirte orgullosa y celebrar tu esfuerzo.',
      '¡Te mereces un postre delicioso y un aplauso de 100 patitas felinas!'
    ],
    signature: '¡Orgullosísimos de ti! 💖'
  },
  {
    id: 'letter-6',
    title: 'Abre para recordar cuánto se te quiere',
    subtitle: 'Un mensaje directo al corazón',
    envelopeColor: 'from-pink-100 to-fuchsia-100 border-pink-300 text-pink-900',
    sealIcon: '💝',
    content: [
      'Para la niña más especial, Sofía:',
      'Si alguna vez sientes que eres invisible o que a nadie le importa, borra de inmediato ese pensamiento. Ocupas un espacio irreemplazable en este mundo.',
      'Tu risa contagia alegría, tu presencia reconforta y tienes una manera de ser que deja huella donde vas. Gracias por ser tú, tal y como eres.',
      'Nunca dejes que el mundo cambie tu bondad ni apague tu ternura. Eres un regalo para quienes tenemos la fortuna de conocerte.'
    ],
    signature: 'Siempre contigo, en las buenas y en las malas 💕'
  }
];

export const ORIGAMI_STARS: OrigamiStar[] = [
  { id: 1, color: '#fbcfe8', text: 'Tu sonrisa ilumina cualquier habitación donde entras.', authorNote: 'Dato 100% verificado por la ciencia felina.' },
  { id: 2, color: '#fce7f3', text: 'Eres mucho más valiente de lo que tú misma crees.', authorNote: 'Has vencido el 100% de tus peores días.' },
  { id: 3, color: '#fbcfe8', text: 'Mereces cosas bonitas, personas buenas y mucha paz.', authorNote: 'Nunca te conformes con menos.' },
  { id: 4, color: '#fed7aa', text: 'Tu corazón compasivo y tierno es una joya escasa.', authorNote: 'Cuídalo con mucho amor.' },
  { id: 5, color: '#e9d5ff', text: 'Hoy te ves hermosa, pero tu alma es aún más linda.', authorNote: 'Sofi glow up infinito ✨' },
  { id: 6, color: '#fbcfe8', text: 'Tienes una creatividad e inteligencia admirables.', authorNote: 'Tus ideas valen oro.' },
  { id: 7, color: '#fce7f3', text: 'Está bien decir "no" y poner tus límites en paz.', authorNote: 'Cuidar tu energía es prioridad.' },
  { id: 8, color: '#fed7aa', text: 'Un paso pequeño sigue siendo avanzar hacia adelante.', authorNote: 'A tu propio ritmo, sin prisas.' },
  { id: 9, color: '#e9d5ff', text: 'Alguien sonrió hoy al acordarse de ti.', authorNote: 'Dejas huellas bonitas en la gente.' },
  { id: 10, color: '#fbcfe8', text: 'Los errores son solo maestros disfrazados de lecciones.', authorNote: 'Sé paciente con tu proceso.' },
  { id: 11, color: '#fce7f3', text: 'Hello Kitty te mandó un cargamento extra de abrazos.', authorNote: 'Llegan directamente a tu corazón.' },
  { id: 12, color: '#fed7aa', text: 'Eres capaz de aprender cualquier cosa que te propongas.', authorNote: 'Tu mente es brillante y curiosa.' },
  { id: 13, color: '#e9d5ff', text: 'Permítete sentir orgullo por lo lejos que has llegado.', authorNote: '¡Mira todo el camino recorrido!' },
  { id: 14, color: '#fbcfe8', text: 'Tu dulzura hace que los días pesados sean más suaves.', authorNote: 'Gracias por ser tan tierna.' },
  { id: 15, color: '#fce7f3', text: 'Las cosas buenas tardan, pero siempre llegan a su tiempo.', authorNote: 'Todo se acomodará a tu favor.' },
];

export const KITTY_STICKERS = [
  { id: 'st-1', label: 'Lazo Rosa Kitty', emoji: '🎀', desc: 'Moñito icónico de Hello Kitty' },
  { id: 'st-2', label: 'Gatito Blanco Tierno', emoji: '🐱', desc: 'Amigo felino siempre contigo' },
  { id: 'st-3', label: 'Leche de Fresa', emoji: '🍓', desc: 'Dulce cajita de strawberry milk' },
  { id: 'st-4', label: 'Patita de Gato', emoji: '🐾', desc: 'Mimos y pasos suaves' },
  { id: 'st-5', label: 'Corazón Brillante', emoji: '💖', desc: 'Amor incondicional' },
  { id: 'st-6', label: 'Estrellita de los Deseos', emoji: '⭐', desc: 'Pide un deseo' },
  { id: 'st-7', label: 'Flor de Cerezo', emoji: '🌸', desc: 'Renovación y frescura' },
  { id: 'st-8', label: 'Curita con Amor', emoji: '🩹', desc: 'Para sanar cualquier herida' },
  { id: 'st-9', label: 'Taza de Té Calentita', emoji: '🍵', desc: 'Calma para el alma' },
  { id: 'st-10', label: 'Gatito Durmiente', emoji: '💤', desc: 'Paz y descanso profundo' },
];
