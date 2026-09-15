# Presentación · GAP × «Better in Denim»
### Politécnico Grancolombiano · Publicidad 2 · Tercer semestre
**William Fonseca · Mariana Silva · Juan Martínez**

---

## Abrir

Doble clic en **`index.html`**. Los dos videos están **dentro de la carpeta**, así que se reproducen aunque no haya internet. La conexión solo hace falta para las tipografías.

## Las seis láminas

| # | Lámina | Qué se ve |
|---|---|---|
| **01** | **Portada** | Institución, asignatura, marca e integrantes |
| **02** | **¿Qué es GAP?** | Qué vende · de dónde viene · qué significa el nombre · con quién compite. Más la línea de tiempo animada de cinco hitos |
| **03** | **Los dos videos** | 2003 a la izquierda (marco rosado), 2025 a la derecha (marco verde). En cada cuadro: el video, su ficha técnica al lado, quiénes lo hicieron, el mensaje, y un botón que abre el análisis completo. Abajo, por qué apareció el anuncio justo en agosto de 2025 |
| **04** | **Atributos · Beneficios · Creencias** | **Seis de cada uno.** Cada tarjeta trae una frase que lo explica; al tocarla se abre la ficha completa |
| **05** | **Frase de posicionamiento** | La frase citada, escribiéndose en tiempo real (unos 11 segundos). La firma va dentro de la cita |
| **06** | **Cierre** | Gracias |

## Navegar

| Acción | Cómo |
|---|---|
| Avanzar / retroceder | **← →** o **↑ ↓**, barra espaciadora, o **‹ ›** del pie |
| Ir a una lámina | Clic en las rayas de la barra inferior |
| **Reproducir un video** | Clic en el botón redondo. Aparecen los controles: volumen, barra de avance y **pantalla completa** |
| **Ver el análisis de un video** | Botón «Ver el análisis completo» debajo de cada uno |
| **Ver una ficha** | Clic en cualquier elemento de la lámina 4 |
| Saltar o repetir la frase | Clic sobre la frase de la lámina 5 |
| Cerrar una ficha | **Esc**, la **✕**, o clic afuera |

Los dos videos **no suenan a la vez**: al darle play a uno, el otro se pausa. Al cambiar de lámina se pausan los dos.

## Exportar a PDF

`Ctrl + P` → **Guardar como PDF** → activar **«Gráficos de fondo»** → márgenes «Ninguno». Los videos saldrán como imagen fija.

---

## Tres cosas que conviene saber antes de sustentar

**❶ Agregamos un sexto beneficio: «Durabilidad».** El cuadro original traía seis atributos, **cinco** beneficios y seis creencias. Los atributos «Materiales de buena calidad» y «Flexible y resistente» no tenían ningún beneficio enganchado, y el que se desprende de ellos es justamente que la prenda te dure. Con eso la matriz queda **6 · 6 · 6**.

**❷ «Materiales de buena calidad» quedó en Atributos, no en Beneficios.** En el cuadro original estaba del otro lado, pero su propia justificación habla de composición y estándar de fabricación, y eso es la definición de un atributo. *Esto no aparece en pantalla.*

**❸ «Variedad de prendas» es un atributo del portafolio, no de una prenda.** Si alguien lo pregunta, esa es la respuesta: se refiere a la amplitud del catálogo.

## Los datos de la lámina 3, por si preguntan

**American Eagle y Sydney Sweeney.** El 23 de julio de 2025 American Eagle lanzó *«Sydney Sweeney has great jeans»*. En inglés *jeans* y *genes* suenan igual, y con una actriz rubia de ojos azules el chiste se leyó como un guiño a la **eugenesia**. GAP estrenó «Better in Denim» **27 días después**, el 19 de agosto. Gap negó que fuera una respuesta. Ojo con el matiz: **lo criticado fue el anuncio, no la actriz** — ella no dijo nada xenófobo.

**Quién hizo qué.** El anuncio lo dirigió **Bethany Vargas**, lo fotografió **Bjorn Iooss** y lo coreografió **Robbie Blue**, con 6 integrantes de KATSEYE y **30 bailarines** más. El video de «Milkshake» lo dirigió **Jake Nava**, el mismo de «Crazy in Love» y «Single Ladies» de Beyoncé.

**Grammy 2026: nominadas, no ganaron.** Mejor Artista Nuevo y Mejor Interpretación Pop de Dúo o Grupo por «Gabriela». Ganaron Olivia Dean y Cynthia Erivo con Ariana Grande. Sí cantaron en la ceremonia.

**Coachella no es un premio.** Es un festival en California; estuvieron en el cartel de 2026.

**La gira son arenas** — recintos techados de 10.000 a 20.000 personas. El *Wildworld Tour*: del 1 de septiembre de 2026 en Dublín al 27 de noviembre en Ciudad de México, por 10 países.

---

## El diseño

| Elemento | De dónde viene |
|---|---|
| **Azul profundo** | El azul institucional de GAP |
| **Verde lima, cian y rosa** | Los tres niveles del posicionamiento y los acentos Y2K de la campaña |
| **Anton** | Titulares condensados, tipo cartel |
| **Space Grotesk** | Texto, grande y legible desde el fondo del salón |
| **Íconos SVG** | Dibujados dentro del archivo. No son imágenes |
| **Bailarines** | Figuras SVG generadas por código, al compás de la canción (~117 BPM) |

**Nota técnica:** cada lámina es un lienzo fijo de **1600 × 900 px** escalado para caber en cualquier pantalla. Nadie hace scroll dentro de una lámina. *Verificado: las seis caben.*

---

## Archivos

```
02 - Presentacion/
├── index.html          · 6 láminas + 20 fichas
├── css/style.css       · Sistema de diseño
├── js/app.js           · Escalado, navegación, reproductores, fichas, animaciones
└── assets/
    ├── img/            · Logos del Politécnico y las carátulas de los videos
    └── video/          · Los dos videos, en 720p para web
```

Los videos originales en 1080p están en `../Raw Data/video-original/`, fuera de la presentación.
El respaldo de investigación está en **`../01 - Investigacion/`**.
