# -*- coding: utf-8 -*-
import json, re, collections
C=[c for c in json.load(open('comentarios.json',encoding='utf-8')) if c['text'] and not c['is_reply']]

def show(title, pat, n=14, minlikes=0):
    rx=re.compile(pat, re.I)
    h=[c for c in C if rx.search(c['text']) and c['likes']>=minlikes]
    h.sort(key=lambda x:-x['likes'])
    print('\n### '+title+f'  (n={len(h)})')
    for c in h[:n]:
        print(f'  {c["likes"]:>7,d} | {c["text"][:230]}')

show('ATRIBUTO: flexibilidad / movimiento / comodidad', r'\b(flexib|comfort|comfy|move (in|freely)|moving in|movement|stretch|restrict|dance in|breathab)')
show('ATRIBUTO: variedad de fits, lavados, siluetas', r'\b(different (styles|colours|colors|fits)|range of|all (the )?(styles|fits)|low.?rise|high.?rise|baggy|skirt|roster of clothing|every body|body type|silhouett)')
show('BENEFICIO: intencion / accion de compra', r'\b(buy|bought|purchase|shop|sold me|made me want|gonna get|want (gap|these|those|a pair)|check them out)')
show('CREENCIA: diversidad, representacion, cuerpos', r'\b(divers|represent|skin|body|curves|inclusi|everyone|all backgrounds|belong|equal|ethnic|culture)')
show('CREENCIA: contra la superioridad / genes', r'(eugenic|genes|genetic|superior|supremac|race|racial|우월|인종)')
show('OFICIO: reconocimiento del equipo creativo', r'\b(raise|promotion|genius|brilliant|director|choreograph|editor|editing|creative|team|marketing)')
show('RECATEGORIZACION: no parece un anuncio', r'\b(music video|\bmv\b|not an ad|superbowl|super bowl|tour|dance practice|mtv|movie|art\b)')
show('HERENCIA: comerciales viejos de Gap', r'\b(90s|90.s|2000s|y2k|nostalg|throwback|old gap|golden age|classic gap|millennial|khaki)')
show('MUSICA: Kelis / Milkshake', r'\b(kelis|milkshake|song|remix|streams|spotify)')
show('SIN DIALOGO / no explica', r'\b(no (words|dialogue|slogan|text)|without (saying|a word)|didn.?t (even )?say|no mention|doesn.?t (try to )?explain|silent)')

print('\n\n=== DISTRIBUCION TEMPORAL ===')
def bucket(d):
    d=d.lower()
    if 'año' in d or 'anos' in d or 'años' in d: return '1+ año (lanzamiento)'
    if 'mes' in d: return 'meses (2025-2026)'
    if 'semana' in d: return 'semanas (reciente)'
    if 'día' in d or 'dia' in d or 'hora' in d: return 'días/horas (muy reciente)'
    return 'otro'
b=collections.Counter(bucket(c['date']) for c in C)
tot=len(C)
lk=collections.defaultdict(int)
for c in C: lk[bucket(c['date'])]+=c['likes']
for k,v in b.most_common():
    print(f'  {k:28s} {v:5d} coment. ({v/tot*100:5.1f}%)   likes: {lk[k]:>9,d}')

print('\n=== MENCIONES POR INTEGRANTE ===')
for m in ['manon','lara','daniela','megan','sophia','yoonchae']:
    rx=re.compile(r'\b'+m, re.I)
    h=[c for c in C if rx.search(c['text'])]
    print(f'  {m.capitalize():10s} {len(h):4d} menciones   likes: {sum(x["likes"] for x in h):>8,d}')

print('\n=== MARCAS DE TIEMPO CITADAS POR EL PUBLICO ===')
ts=collections.Counter()
for c in C:
    for m in re.findall(r'\b(\d{1,2}:\d{2})\b', c['text']): ts[m]+=1
for t,n in ts.most_common(20): print(f'  {t}  -> {n} menciones')
