# -*- coding: utf-8 -*-
import json, re, collections
C=[c for c in json.load(open('comentarios.json',encoding='utf-8')) if c['text'] and not c['is_reply']]
def show(t,p,n=12):
    rx=re.compile(p,re.I); h=sorted([c for c in C if rx.search(c['text'])],key=lambda x:-x['likes'])
    print('\n### '+t+f' (n={len(h)})')
    for c in h[:n]: print(f'  {c["likes"]:>7,d} | {c["text"][:240]}')
show('JUNTOS / SOLO / UNIDAD (el copy)', r'\b(together|on your own|alone|unity|united|collective|community|as one|powerful)')
show('SET / FONDO / ESCENOGRAFIA', r'\b(set\b|background|backdrop|white (box|room|wall)|studio|stage|lighting|camera|shot|tracking|one.?take|cinematograph|transition)')
show('CRITICAS / NEGATIVOS', r'\b(cringe|overrated|mid\b|hate|bad ad|don.?t (like|get)|boring|worst|flop|ruined|hybe|exploit|problem|weird)')
show('EDAD / GENERACION DEL ESPECTADOR', r'\b(\d{2} year old|millennial|gen z|my (mom|mother|daughter|kid|son)|my age|as a (teen|adult|woman|man|mom))')
show('ESCUELA / CLASE / ACADEMIA', r'\b(class|school|teacher|professor|university|college|marketing class|studying|thesis|case study|lesson)')
show('APRENDER LA COREO / REPLICA', r'\b(learn(ed|ing)? (the|this) (choreo|dance|moves)|tiktok|trend|recreate|cover|dance challenge|practiced|performed)')
print('\n=== FRECUENCIA DE PALABRAS CLAVE (todo el corpus) ===')
txt=' '.join(c['text'].lower() for c in C)
for w in ['ad','jeans','denim','katseye','gap','diverse','diversity','marketing','genius','choreo','dance','era','peak','music video','buy','comfortable','flexible','together','milkshake','kelis','sweeney','american eagle','genes','skip','rewatch','iconic','nostalgi','raise']:
    print(f'  {w:16s} {len(re.findall(r"\b"+re.escape(w), txt)):5d}')
