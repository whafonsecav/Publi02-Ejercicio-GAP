# 05 · Análisis de la audiencia
**1.264 comentarios reales del video, procesados y clasificados**
*Fuente: `Raw Data/Comentarios Video.xlsx`*

---

## 0. Método

| Dato | Valor |
|---|---|
| **Fuente** | Excel con el volcado de la sección de comentarios del video |
| **Filas procesadas** | 9.085 |
| **Bloques de comentario reconstruidos** | 1.274 |
| **Comentarios de primer nivel analizados** | **1.264** (1.247 con texto) |
| **Likes acumulados en la muestra** | **1.440.573** |
| **Respuestas declaradas bajo esos comentarios** | 4.604 |
| **Universo total del video** | 35.949 comentarios · 1.497.508 likes |
| **Cobertura de la muestra** | ≈ 3,5% de los comentarios, pero **≈96% de todos los likes del video** |

> **Lo que eso significa:** la muestra es pequeña en número y casi total en peso. Contiene prácticamente **toda la conversación que la comunidad validó**. Es, para efectos de posicionamiento, el mejor tipo de muestra posible.

**Archivos generados:** `comentarios-procesados.csv` (tabla limpia: autor, fecha, texto, likes, respuestas) · `09 - Salida cuantitativa (datos crudos).txt` · scripts `parse.py`, `analyze.py`, `analyze2.py`, `analyze3.py`.

> Los comentarios son texto escrito por terceros. Se tratan como **evidencia de percepción**, no como verdad factual sobre la marca. Cuando alguien afirma un hecho no verificado (por ejemplo, que Kelis regrabó la canción), se marca como tal.

---

## 1. ⚠ EL HALLAZGO PRINCIPAL: volumen ≠ consenso

Si se cuentan **comentarios**, la conversación parece ser de fans. Si se cuentan **likes** —es decir, aquello con lo que la gente estuvo de acuerdo— la conversación es de **producto, oficio y valores**.

| Tema | Comentarios | % del total | Likes | **% de los likes** |
|---|---:|---:|---:|---:|
| KATSEYE (fandom) | 357 | 28,6% | 294.923 | 20,5% |
| Vínculo emocional / "era" / aniversario | 311 | 24,9% | 62.103 | **4,3%** |
| Música y coreografía | 112 | 9,0% | 136.541 | 9,5% |
| **Producto y atributos** | 89 | **7,1%** | 453.672 | **31,5%** |
| Atención / no-skip / rewatch | 70 | 5,6% | 120.288 | 8,4% |
| **Oficio, marketing y equipo creativo** | 68 | **5,5%** | 414.375 | **28,8%** |
| **Diversidad, creencias y representación** | 53 | **4,3%** | 176.510 | **12,3%** |
| Competencia (American Eagle / Sweeney) | 38 | 3,0% | 155.285 | 10,8% |
| Recategorización ("no es un anuncio") | 18 | 1,4% | 115.071 | 8,0% |
| Nostalgia por los comerciales viejos de Gap | 14 | 1,1% | 3.195 | 0,2% |
| Intención y acción de compra | 14 | 1,1% | 9.652 | 0,7% |

**Traducción:**
- Hablar de **producto** representa 1 de cada 14 comentarios, pero **1 de cada 3 likes**.
- Hablar de **oficio publicitario** representa 1 de cada 18 comentarios, pero **casi 1 de cada 3 likes**.
- Hablar de **"esta era"** representa 1 de cada 4 comentarios, pero **menos de 1 de cada 20 likes**.

> **El fandom pone el volumen. El producto, el oficio y los valores ponen el acuerdo.** Y el acuerdo es lo que constituye un posicionamiento.

---

## 2. La dimensión temporal: dos conversaciones distintas

| Antigüedad del comentario | Comentarios | % | Likes | % de los likes |
|---|---:|---:|---:|---:|
| **1+ año (lanzamiento, ago. 2025)** | 246 | 19,7% | **1.327.609** | **92,2%** |
| Meses (fin 2025 – 2026) | 146 | 11,7% | 103.635 | 7,2% |
| Semanas (reciente) | 511 | 41,0% | 9.140 | 0,6% |
| Días / horas (muy reciente) | 342 | 27,4% | 189 | 0,01% |

**Lo que revela:**

1. **El lanzamiento generó el consenso.** El 19,7% de los comentarios concentra el 92% de los likes. Ahí se decidió lo que la pieza significaba.
2. **El aniversario generó el tráfico.** El 68% de los comentarios son de las últimas semanas — gente que vuelve por el primer aniversario, pero cuyos comentarios ya casi no reciben validación.
3. **La pieza sigue viva 13 meses después.** 342 comentarios en los últimos días. Un anuncio con vida útil de más de un año es un activo, no una campaña.

---

## 3. Distribución por idioma

| Idioma | Comentarios | % |
|---|---:|---:|
| Inglés y otros con alfabeto latino | 1.202 | 96,4% |
| **Coreano** | 22 | 1,8% |
| Español / portugués | 19 | 1,5% |
| Árabe | 3 | 0,2% |
| Chino / japonés | 1 | 0,1% |

Aunque el corpus es abrumadoramente anglófono, **los comentarios en coreano son los de mayor densidad analítica de toda la muestra** (ver §4.3). Son también la evidencia más limpia de que el mensaje cruzó la barrera del idioma.

---

## 4. Las conversaciones, una por una

### 4.1 ATENCIÓN VOLUNTARIA — el techo de la categoría

La palabra más frecuente de todo el corpus **no es "katseye" (170) ni "gap" (84): es "ad" (292)**. La gente no está hablando del grupo ni de la marca: está hablando de **que esto es publicidad y aun así la están viendo**.

| Comentario | Likes |
|---|---:|
| *"The only ad i intentionally searched"* | **151.000** |
| *"The only ad no one is skipping"* | **65.000** |
| *"The fact that I watched a 1:30 long ad willingly says a lot about how smart this marketing team was."* | **64.000** |
| *"I've never watched an ad so many times before in my life"* | **29.000** |
| *"the fact that 33 million people WILLINGLY wanted to watch this ad probably means something."* | **18.000** |
| *"Only Katseye could get me rewatching an ad"* | **19.000** |
| *"oops almost forgot to watch this again today"* | **11.000** |
| *"crazy how this ad is 3 hours long and unskippable"* (ironía) | **6.000** |
| *"I come back to this ad once in a while like its a ritual"* | **6.100** |
| *"It's unhealthy how many times I've watched this"* | **7.200** |

**"Skip" aparece 27 veces. "Rewatch", 7. "Iconic", 34.**

> La publicidad se define por ser una interrupción no solicitada. Esta pieza **dejó de serlo**. El comentario más votado de todo el video —151.000 likes— no habla de jeans ni del grupo: habla de que la persona **fue a buscarlo**.

---

### 4.2 PRODUCTO — la ficha técnica que nadie enunció

**89 comentarios (7,1%) que concentran el 31,5% de los likes.** El público **dedujo los atributos correctos observando cuerpos moverse.**

| Comentario | Likes |
|---|---:|
| *"This ad is brilliant… They're not just showing off their own talent range. **They're showing the range of the jeans: baggy, skirt, low rise, high rise, etc.** Genius!"* | **22.000** |
| *"**We see denim in different styles and colours and how freely you can move in it.** Peak Advertising"* | **17.000** |
| *"Clever advertising by showing that **you can move or dance freely** wearing those jeans. Welp, the advertising really works. **Got new jeans from Gap.**"* | **18.000** |
| *"The fact that they showed **their entire roster of clothing**, showed how well their product moves"* | **12.000** |
| *"the fact that **the denim is comfortable and flexible enough to withstand dance choreography** is great marketing."* | **3.800** |
| *"1) **dancing showing durability and flexibility of jeans** 2) **a wide range of people**… looking great in the denim."* | **1.100** |
| *"the best part is it's actually showing how good the jeans/denim are, showing **how much they can move in the normally restrictive clothing/material**"* | 935 |
| *"How nice to see a person **not struggling to put on a pair of jeans** while writhing around on the floor like a 5'5 toddler. **These jeans actually look comfortable.**"* | 240 |
| *"the denim the girls are dancing in, they make it look so **comfortable and flexible**. meanwhile [the other ad] feels uncomfortable and stiff."* | 109 |
| *"Sydney Sweeney said 'My jeans are blue' but here you can see **different colors and designs from jeans by the same brand**"* | 1.400 |

**🔍 Hallazgo de vestuario aportado por un espectador:**
> *"I js realized. **Lara nd Yoonchae hav flare. Megan nd Sophia hav skirts. Manon nd Daniela hav baggy jeans.**"*

Tres parejas, tres siluetas. La estructura del vestuario reparte el catálogo en bloques de dos, de modo que **ninguna silueta sea "la principal"**. Es la misma lógica del reparto de cámara aplicada al producto.

**Traducción directa al método de clase:**

| Lo que el público nombró | Capa |
|---|---|
| Flexible · cómodo · aguanta coreografía · no es rígido · durable | **ATRIBUTO** |
| Libertad de movimiento · no pelear con la prenda | **BENEFICIO** |
| Baggy, falda, flare, low rise, high rise, distintos colores | **ATRIBUTO** |
| Se ve bien en cuerpos distintos | **BENEFICIO** |

**Ningún plano lo dijo. Todos lo entendieron.**

---

### 4.3 CREENCIAS Y VALORES — diversidad, igualdad y anti-superioridad

**53 comentarios (4,3%) con 176.510 likes (12,3%).** Es la conversación de mayor carga y la que confirma la capa alta del posicionamiento.

| Comentario | Likes |
|---|---:|
| *"Countering THAT controversy ad with a group of successful diverse girls in denim, GAP took that opportunity real fast."* | **95.000** |
| *"they tore 'that my genes are blue' bullshit up! **Diversity and talent always wins!**"* | **5.300** |
| *"**GENES** wait no I mean **JEANS** befitting of all backgrounds! we love to see it!"* | **4.300** |
| *"Love the diversity! The choreo from everyone was so good too, can't believe I actually came to finish watching this whole 1:30 ad"* | **3.600** |
| *"American Eagle can never. **The diversity of beauty in Katseye's roster is the tea.** No visual holes is spotted in the gap."* | **3.100** |
| *"They gave choreography. They gave jeans. **They gave diversity.** They definitely ate GAP, well done."* | **2.200** |
| *"They used the controversy so well… **in a way they are telling all genes are good**"* | 768 |
| *"Love Katseye, and I'm just so glad to see an ad for jeans that **doesn't mention eugenics**."* | 605 |
| *"**This is how branding should work. Not a single mention of eugenics.** It's that easy."* | 287 |
| *"I love this message. **Strong on my own but even better together.** This is what fashion should be about, enhancing the beauty you already have."* | 343 |
| *"**I love how each member gets their own little moment too. nobody steals the spotlight, it's shared equally.**"* | 229 |
| *"notice how this ad is loved globally? **promoting diversity really brings people all around the world together**"* | 380 |
| *"0:28 this made me feel better about my body, **they weren't afraid to show that Manon has curves and folds** either! it made me rlly happy"* | — |

**Los comentarios en coreano — los más precisos del corpus:**

> **"우월함 대신 다양성. 혼자가 아닌 함께. 유전자 대신 노력으로 완성된 퍼포먼스"** — 2.800 likes
> **"Diversidad en lugar de superioridad. Juntos en lugar de solos. Una performance completada con esfuerzo en lugar de con genes."**

> **"광고 ㄹㅇ 잘 찍은 듯 인종 상관없이 누구나 입어도 편하고 멋질 수 있음을 보여주는 것 같아서…"** — 8.600 likes
> **"El anuncio está muy bien hecho. Parece mostrar que cualquiera, sin importar su raza, puede vestirlo cómodamente y verse bien; por eso es aún más simbólico…"**

> **"다양한 인종이 섞인 그룹이 이리 멋지고 아름다웠던적이 있었던가"** — 220 likes
> **"¿Alguna vez un grupo de razas mezcladas había sido tan genial y hermoso?"**

> Ese primer comentario, escrito en coreano por un espectador anónimo, **es literalmente la frase de posicionamiento de Gap**. Nadie se la dio: la dedujo de 91 segundos sin diálogo. Eso, técnicamente, es un posicionamiento transmitido con éxito.

---

### 4.4 OFICIO Y MARKETING — el público como jurado

**68 comentarios (5,5%) con 414.375 likes (28,8%).** La audiencia no solo consumió la pieza: **la evaluó profesionalmente.**

| Comentario | Likes |
|---|---:|
| *"GAP marketing team must be psychics with 'better than yours' as part of the lyrics… **IMPECCABLE TIMING**"* | **51.000** |
| *"**the marketing here is genius. no mention of katseye as a group, no written slogans.** you know a group is lit when you don't need to put their name into the ad title"* | **43.000** |
| *"As a marketing student, this is undeniably successful marketing."* | **41.000** |
| *"**Y'all better give whoever had this idea a RAISE.**"* | **33.000** |
| *"i know we are gagging but can we please have a **HUGE shoutout to the directors, creatives, and editors** behind the scenes… it's so fluid it's insane."* | **22.000** |
| *"Whoever came up with getting Katseye for a jeans ad… deserves a raise"* | **18.000** |
| *"**the way we have been talking about this ad in all of my marketing classes** lol"* | **5.200** |
| *"**Damn Robbie Blue (choreographer), Bethany Vargas (director)** and whole team + katseye, they all should be proud. This commercial is addictive **and they didn't even say a word**"* | 510 |
| *"that one **tracking shot through the split and to the triangle of dancers** was so fricken CLEAN"* | 78 |
| *"**Meagan's little headshake to the reverberation of the 'ting'! at 0:17** IS EVERYTHINGGG. the editing, choreo, outfits, the girls, the dancers."* | **8.800** |
| *"They literally talk about this in marketing classes. Master class"* | — |

**"Raise" (aumento) aparece 5 veces. "Genius", 7. "Marketing", 20.**

> La audiencia reconoció dirección, coreografía, edición, casting y timing estratégico **por nombre propio**. Una campaña que produce admiración por su oficio construye reputación de marca, no solo recuerdo de producto. Y este comentario — *"lo hablamos en todas mis clases de marketing"* — es literalmente por qué este ejercicio existe.

---

### 4.5 RECATEGORIZACIÓN — "esto no es un anuncio"

**18 comentarios (1,4%) con 115.071 likes (8,0%).** La tasa de validación más alta de todo el corpus: pocos lo dijeron, pero casi todos estuvieron de acuerdo.

| Comentario | Likes |
|---|---:|
| *"Not me watching a commercial like it's a music video"* | **51.000** |
| *"This is honestly a **superbowl level ad**"* | **37.000** |
| *"**HOW IS THIS JUST FOR AN AD???** PUT THIS ON THEIR TOUR RNNN"* | **13.000** |
| *"I swear every ad yall do deserves its own **dance practice video**"* | **7.700** |
| *"This ad is basically a mv I revisit often"* | 499 |
| *"Makes me feel like I'm 13 again and excited to watch a favorite music video on MTV"* | 358 |
| *"This isn't an ad, this is a music video! **Should be on MTV**"* | 209 |
| *"**This is not an ad. This is a piece of pop culture history.**"* | 147 |
| *"**This is why human made content/Ads will always beat AI.** People are gonna buy from brands that actually have quality and effort and care put into it."* | **1.900** |

> Cuando el público **le cambia la categoría** a una pieza, desaparece su resistencia como consumidor: ya no está viendo algo que le quieren vender, está viendo algo que eligió. Y ese último comentario —1.900 likes— confirma que la decisión de Bethany Vargas de **construir el set físicamente y no usar efectos digitales** se leyó como una señal de respeto.

---

### 4.6 COMPETENCIA — el posicionamiento relativo, en voz alta

**38 comentarios (3,0%) con 155.285 likes (10,8%).** El profesor define el posicionamiento como el lugar que ocupa la marca *"en relación con los productos o marcas de la competencia"*. Aquí el público hizo ese trabajo solo.

| Comentario | Likes |
|---|---:|
| *"A denim ad war was not on my 2025 bingo card…. But KATSEYE winning it definitely is."* | **73.000** |
| *"**Jealous of my jeans? YES!!!**"* | **66.000** |
| *"This was like a **Kendrick Lamar diss track against Drake but as a jeans ad** lmao"* | **42.000** |
| *"The 'its better than yours' as a snarky reference to American Eagle is crazy… and works insanely well **i want Gap Jeans now**"* | **25.000** |
| *"This after the Sydney Sweeney drama is ICONIC"* | **22.000** |
| *"it's so funny how people were saying we were hating on the sydney sweeney ad just cuz we are jealous… **shows it was never about women hating on women**"* | **11.000** |
| *"It doesn't matter if you're a Katseye fan or not, we all have to agree that this ad was **way better** than AE's flop ad"* | **4.700** |
| *"I like that this is clearly a response… GAP put 6 insanely attractive and immensely talented women to show '**attractive**' **doesn't mean blue hair and blue eyes**"* | **2.100** |
| *"**This ad is genetically superior**"* (ironía) | **7.600** |
| *"This was shot months ago but there are so many incredible coincidences that make it seem like a direct response"* | 308 |

**"Sweeney" aparece 17 veces. "American Eagle", 12. "Genes", 7.**

> **Rigor obligatorio:** Gap negó que la pieza fuera una respuesta y el rodaje es anterior. **Pero el posicionamiento no se decide en la sala de juntas: se decide en la cabeza del público.** Y el público instaló a Gap en el lugar de "la marca que gana sin humillar a nadie". Ese lugar es ahora propiedad de Gap.

---

### 4.7 CONVERSIÓN — de la admiración a la compra

Solo 14 comentarios hablan de comprar. **Pero son la prueba cualitativa de que la campaña movió conducta**, y las cifras de negocio (Gap +7% comparables en Q3 2025, mejor desde 2017) lo confirman.

| Comentario | Likes |
|---|---:|
| *"This is **the only celebrity advertisement that actually influenced me to buy something**. I just purchased the jeans Lara and Yoonchae were wearing"* | **4.500** |
| *"Never wore GAP jeans in my life and now I lowkey want to lol"* | **14.000** |
| *"So this is why **my daughter who has never in her life been inside a GAP just asked me to buy her some GAP jeans**. I'd say the marketing worked"* | **1.100** |
| *"Omg this is the first time that i'm persuaded into buying something because of an ad"* | 747 |
| *"**Not me being reminded that GAP exists for the first time in a decade**, going on their site, and realizing their stuff is actually really nice."* | 197 |
| *"Honestly kinda forgot about GAP but this commercial made me want to go and check them out again."* | 199 |
| *"It's made me want to buy Gap jeans, **even though there are no Gap stores in my country**"* | 84 |
| *"KATSEYE just sold me on GAP"* | 72 |
| *"I'm a 35 year old woman and **was never a Gap shopper until this ad**."* | — |

> Dos hallazgos: la campaña **reclutó no-clientes** ("nunca usé Gap"), y **reabrió una conversación cerrada** ("me acordé de que Gap existe por primera vez en una década"). El comentario de la madre y la hija es la prueba literal del puente generacional: la madre reconoce la canción, la hija pide los jeans.

---

### 4.8 ORIGEN — la audiencia recordaba la herencia mejor que la marca

| Comentario | Likes |
|---|---:|
| *"I usually don't comment on brands, but **thank you GAP for bringing back those amazing dancing GAP commercials from the 90's/2000's**. I have thought about that ad campaign for over 25 years now."* | 978 |
| *"This is giving **the golden age of Gap commercials** — the choreography, the dancers, the music, **no dialogue**, just showing us a range of products in motion."* | 273 |
| *"Did anyone else think that this latest batch of GAP commercials is also a great throwback to the campaigns they did back in the late 90s to early 2000s? **really cool to see the dance video ads making a comeback**."* | 505 |
| *"My cold, bitter millennial heart has warmed up watching this. **I missed the old dancing gap jeans ads.**"* | 97 |

**Y el cierre del círculo, en cuatro comentarios recientes:**
> *"this is already nostalgic"* · *"No cause now, this is considered nostalgia."* · *"this gonna be so damn nostalgic in like 10 years"* · *"Never knew that it could give me feeling of nostalgia"*

> **La pieza que resucitó la nostalgia de Gap se convirtió, en trece meses, en el objeto nostálgico.** Esa es la definición operativa de que una marca recuperó su capacidad de producir cultura.

---

### 4.9 EL VÍNCULO — un anuncio convertido en "era"

**311 comentarios (24,9%).** "Era" aparece **82 veces**; "peak", **65**.

| Comentario | Likes |
|---|---:|
| *"It's December, and I am still not over it yet"* | **8.100** |
| *"Became a year today **this era was so peak**"* | **6.300** |
| *"I love how this ad gets another million views every single day"* | **5.000** |
| *"Didn't know it at the time but **this was peak Katseye**"* | **10.000** |
| *"crying because **i'll never get to watch this ad for the first time**"* | 747 |
| *"viewing the katseye gap ad a day **keeps the depression away**"* | 3.600 |
| *"**You know their company messed up big time when we are calling an ad an 'era'**"* | — |
| *"Tomorrow this is gonna be one year old. **This ad changed lives.**"* | 413 |

> Un anuncio con **aniversario celebrado espontáneamente por el público** dejó de ser comunicación: es patrimonio afectivo compartido. La marca dejó de alquilar atención y pasó a poseer un recuerdo.

---

### 4.10 LA CRÍTICA — qué dijeron los que no aplaudieron

**Por rigor, hay que reportarlo: la crítica al anuncio es prácticamente inexistente.** De 1.264 comentarios, la única objeción estética localizada es una:

> *"that all-hands choreography is so tiktok it's cringiest of cringe."* — **0 likes**

El resto de la negatividad del corpus **no apunta a Gap ni a la pieza**: apunta a la disquera y a la dirección artística posterior del grupo, y **usa el anuncio como vara de medir lo bueno**:

| Comentario | Likes |
|---|---:|
| *"hybe ruined them. They were at their peak last year"* | 3 |
| *"katseye's peak because it truly went all down after this"* | — |
| *"i honestly miss this era of katseye so much, they were in their prime and everyone loved them. now, whatever they do they get hated on."* | 3 |
| *"oh i would kill for this again **this was peak katseye before all the harsh makeup and revealing clothes**"* | 5 |

**Hay un punto de tensión legítimo que sí conviene registrar:** unos pocos comentarios cuestionan el nivel de exposición corporal del vestuario (*"I miss when they covered them up"*, *"0:13 COVER UP"*), con muy poca validación. Es la única fricción real entre el vestuario Y2K —tiro bajo, top corto, minifalda— y una parte de la audiencia.

> **Conclusión de riesgo reputacional: mínimo.** La marca salió ilesa de una conversación de 36.000 comentarios en una categoría que ese mismo mes había incendiado a su competidor directo.

---

## 5. Frecuencia de palabras clave (corpus completo)

| Palabra | Apariciones |
|---|---:|
| **ad** (anuncio) | **292** |
| katseye | 170 |
| gap | 84 |
| era | 82 |
| peak | 65 |
| jeans | 41 |
| iconic | 34 |
| dance | 30 |
| skip | 27 |
| denim | 25 |
| choreo | 23 |
| marketing | 20 |
| sweeney | 17 |
| diverse | 13 |
| american eagle · milkshake | 12 |
| kelis | 11 |
| buy | 8 |
| diversity · genes · genius · rewatch | 7 |
| nostalgi- | 6 |
| raise | 5 |
| music video · together | 4 |
| comfortable · flexible | 3 |

> **La palabra más frecuente del corpus es "ad".** El público no está hablando de la marca ni del grupo: está hablando de **la publicidad misma**. Eso es lo que ocurre cuando una pieza deja de ser un vehículo y se convierte en el acontecimiento.

---

## 6. Menciones por integrante

| Integrante | Menciones | Likes acumulados |
|---|---:|---:|
| **Manon Bannerman** | 95 | 18.575 |
| Lara Raj | 37 | 8.391 |
| Megan Skiendiel | 26 | 2.250 |
| Yoonchae Jeung | 15 | 13.335 |
| Daniela Avanzini | 14 | 2.201 |
| Sophia Laforteza | 10 | 1.909 |

Manon —la integrante afrodescendiente, hija de padre ghanés akan fante— es **la más mencionada del reparto**, y varias menciones señalan que abre el video al centro del encuadre y que su cuerpo se muestra sin corrección. Parte del volumen reciente se explica por su posterior hiato, que convirtió la pieza en un objeto de memoria colectiva.

---

## 7. Marcas de tiempo citadas por el público

El público señaló espontáneamente **20 momentos distintos** de un video de 91 segundos:

| Momento | Menciones | Qué señalan |
|---|---:|---|
| **0:55** | 6 | |
| **0:34** | 5 | Despliegue de flexibilidad de Daniela |
| **1:30** | 5 | El cierre / formación final |
| 0:29 | 4 | Sección de arrastre de Daniela |
| 0:09 | 4 | Momento de Lara |
| 0:52 | 4 | |
| 0:57 · 0:53 · 0:03 | 3 c/u | Mirada de Lara · gesto de Yoonchae |
| 0:17 · 1:05 · 0:45 · 1:00 · 0:14 · 0:35 · 0:13 | 2 c/u | Golpe de talones (0:45) · Manon a cámara (1:00) |
| 0:28 · 0:24 · 1:08 · 0:33 | 1 c/u | |

> **Veinte momentos memorables en noventa y un segundos.** Eso es densidad de contenido, no de mensaje. Y explica el rewatch: cada persona vuelve por un segundo distinto.

---

## 8. Qué le enseñó la audiencia a este análisis

**1. El atributo mejor demostrado gana el consenso.**
La flexibilidad del denim se percibió como el atributo principal — y **nadie la mencionó en el spot**. Los comentarios de producto son 7% del volumen y 31,5% de los likes. Un atributo bien demostrado vale más que un atributo bien enunciado.

**2. La igualdad de reparto se notó explícitamente.**
*"Nadie roba el foco, se comparte en partes iguales."* La composición del encuadre comunicó un valor. **La forma es el mensaje.**

**3. El público decodificó las tres capas del método sin ayuda.**
Nombró la flexibilidad y el rango de fits (**atributos**), la libertad de movimiento y el "se ve bien en cualquiera" (**beneficios**), y la diversidad sin superioridad (**creencias**). Un posicionamiento funciona cuando el consumidor puede repetirlo sin haberlo leído.

**4. La marca recuperó permiso para hablar.**
*"Me acordé de que GAP existe por primera vez en una década"* no es una venta: es la reapertura de una conversación cerrada durante diez años. Ese es el activo real que compró esta campaña.
