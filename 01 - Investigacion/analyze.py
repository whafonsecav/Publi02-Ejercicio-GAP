# -*- coding: utf-8 -*-
import json, re, collections
C = json.load(open('comentarios.json', encoding='utf-8'))
C = [c for c in C if c['text'] and not c['is_reply']]
N = len(C)
TOT_LIKES = sum(c['likes'] for c in C)
print('N =', N, '| likes totales =', TOT_LIKES)

TEMAS = {
 'PRODUCTO/ATRIBUTOS': r'\b(jean|jeans|denim|fabric|material|stretch|flexib|comfort|comfy|move in|moving in|movement|fit|fits|fitting|quality|durab|low.?rise|high.?rise|baggy|skirt|wash|styles|silhouett|cloth|outfit|wardrobe|pants|tela|comodo|cómod|calidad)',
 'COMPRA/CONVERSION': r'\b(buy|bought|purchase|purchased|shop|shopping|order|want (a|some|these|those)|going to get|getting a pair|sold me|made me want|store|gonna buy|comprar|compré)',
 'DIVERSIDAD/CREENCIAS': r'\b(divers|inclusi|represent|race|racial|ethnic|skin tone|skin colour|skin color|eugenic|genes|culture|cultural|background|together|unity|united|everyone|all body|body type|curves|equal|belong|다양|인종|우월)',
 'COMPETENCIA (AE/Sweeney)': r'(american eagle|sydney|sweeney|\bAE\b|great jeans|아메리칸|그 광고)',
 'ATENCION/NO-SKIP/REWATCH': r'\b(skip|skipping|rewatch|re.?watch|watch(ed|ing)? (this|it) (again|over|\d)|search(ed)? (this|it|up)|on repeat|again and again|every day|everyday|loop|obsess|addict|can.?t stop|볼|반복)',
 'OFICIO/MARKETING': r'\b(marketing|market(ed)?|genius|brilliant|raise|promotion|campaign|advertis|ad team|creative|director|choreograph|editing|editor|cinemat|production|strategy|agency|광고|마케팅)',
 'MUSICA/COREOGRAFIA': r'\b(milkshake|kelis|song|music|beat|choreo|choreography|dance|dancing|dancer|moves|routine|neptunes|pharrell|춤|안무|노래)',
 'NOSTALGIA/HERENCIA GAP': r'\b(90s|90.s|nineties|2000s|y2k|nostalg|throwback|old gap|classic gap|back in the day|golden age|mtv|millennial|khaki|swing)',
 'RECATEGORIZACION (no es ad)': r'\b(music video|\bmv\b|not an ad|isn.?t an ad|this is not an? ad|superbowl|super bowl|short film|movie|tour|dance practice|art)',
 'VINCULO/ERA/ANIVERSARIO': r'\b(era|anniversary|one year|1 year|a year|miss this|i miss|peak|take me back|nostalgi|still (here|watching|not over)|comfort video|ritual)',
 'KATSEYE (fandom)': r'\b(katseye|manon|lara|daniela|dani\b|megan|sophia|yoonchae|ot6|eyekon|gnarly|gabriela|hootie|debut|dream academy)',
}

res = {}
for k, pat in TEMAS.items():
    rx = re.compile(pat, re.I)
    hits = [c for c in C if rx.search(c['text'])]
    res[k] = hits
    print(f'{k:34s} {len(hits):5d}  ({len(hits)/N*100:5.1f}%)   likes: {sum(h["likes"] for h in hits):>9,d}  ({sum(h["likes"] for h in hits)/TOT_LIKES*100:5.1f}%)')

print()
print('=== IDIOMAS ===')
def lang(t):
    if re.search(r'[\uac00-\ud7af]', t): return 'coreano'
    if re.search(r'[\u4e00-\u9fff]', t): return 'chino/jp'
    if re.search(r'[\u0600-\u06ff]', t): return 'arabe'
    if re.search(r'[\u0900-\u097f]', t): return 'devanagari'
    if re.search(r'[\u0e00-\u0e7f]', t): return 'tailandes'
    if re.search(r'[\u0400-\u04ff]', t): return 'cirilico'
    if re.search(r'\b(que|los|las|para|pero|como|esta|este|muy|más|también|así|porque)\b', t, re.I): return 'esp/port'
    return 'ingles/otro'
lc = collections.Counter(lang(c['text']) for c in C)
for k,v in lc.most_common(): print(f'  {k:14s} {v:5d}  ({v/N*100:4.1f}%)')

print()
print('=== TOP 45 COMENTARIOS POR LIKES ===')
for c in sorted(C, key=lambda x:-x['likes'])[:45]:
    print(f'{c["likes"]:>7,d} | {c["replies"]:>4} resp | {c["text"][:185]}')
