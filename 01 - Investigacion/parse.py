# -*- coding: utf-8 -*-
import re, csv, json, unicodedata

lines = open('comentarios_raw.txt', encoding='utf-8').read().split('\n')
lines = [l.replace('\xa0',' ').strip() for l in lines]

def is_author(i):
    return (lines[i].startswith('@') and i+1 < len(lines)
            and re.match(r'^hace ', lines[i+1]))

def parse_likes(s):
    s = s.strip().replace(' ', '')
    m = re.match(r'^([\d.,]+)\s*([KkMm]?)$', s)
    if not m: return None
    try: n = float(m.group(1).replace(',', '.'))
    except: return None
    suf = m.group(2).lower()
    if suf == 'k': n *= 1000
    if suf == 'm': n *= 1000000
    return int(n)

starts = [i for i in range(len(lines)-1) if is_author(i)]
comments = []
for idx, s in enumerate(starts):
    end = starts[idx+1] if idx+1 < len(starts) else len(lines)
    block = lines[s:end]
    author = block[0]
    date = block[1]
    body, likes, replies = [], None, 0
    j = 2
    while j < len(block):
        ln = block[j]
        if ln == 'Responder':
            # likes is the line just before, if numeric
            if body:
                cand = parse_likes(body[-1])
                if cand is not None:
                    likes = cand
                    body = body[:-1]
            # look ahead for replies count
            for k in range(j+1, min(j+4, len(block))):
                m = re.match(r'^(\d+)\s+respuestas?$', block[k])
                if m: replies = int(m.group(1))
            break
        if ln: body.append(ln)
        j += 1
    text = ' '.join(body).strip()
    is_reply = text.startswith('\u200b') or bool(re.match(r'^\u200b?\s*@', text))
    text = text.replace('\u200b','').strip()
    comments.append({'author': author, 'date': date, 'text': text,
                     'likes': likes if likes is not None else 0,
                     'replies': replies, 'is_reply': is_reply})

top = [c for c in comments if not c['is_reply']]
print('TOTAL bloques parseados:', len(comments))
print('Comentarios de primer nivel:', len(top))
print('Respuestas:', len(comments)-len(top))
print('Con texto vacio:', sum(1 for c in comments if not c['text']))
print('Suma de likes (primer nivel):', sum(c['likes'] for c in top))
print('Suma de respuestas declaradas:', sum(c['replies'] for c in top))

with open('comentarios.csv','w',encoding='utf-8',newline='') as f:
    w = csv.DictWriter(f, fieldnames=['author','date','text','likes','replies','is_reply'])
    w.writeheader(); w.writerows(comments)
json.dump(comments, open('comentarios.json','w',encoding='utf-8'), ensure_ascii=False)
print('OK -> comentarios.csv / comentarios.json')
