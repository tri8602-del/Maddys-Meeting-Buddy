"""Usage: python3 tools/build_songs.py path/to/sjjsm_E.pdf   (needs poppler-utils + Pillow)
Render the 'Sing Out Joyfully' lead-sheet PDF (sjjsm_E.pdf, songs 1-151, 225 pages) into per-song PNGs
+ songs/songs.js (number -> title + pages). Song start pages come from the PDF text itself (first line = 'N  Title')."""
import subprocess, re, json, pathlib, tempfile
from PIL import Image
import sys
PDF=sys.argv[1] if len(sys.argv)>1 else 'sjjsm_E.pdf'   # lead-sheet PDF from jw.org (pub sjjsm)
OUT=pathlib.Path(__file__).resolve().parent.parent/'songs'
NP=int(re.search(r'Pages:\s+(\d+)',subprocess.run(['pdfinfo',PDF],capture_output=True,text=True).stdout).group(1))
start={}; title={}
for p in range(1,NP+1):
    t=subprocess.run(['pdftotext','-f',str(p),'-l',str(p),'-layout',PDF,'-'],capture_output=True,text=True).stdout
    lines=[l for l in t.split('\n') if l.strip()]
    m=re.match(r'^\s*(\d{1,3})\s+(\S.*?)\s*$',lines[0]) if lines else None
    if m: n=int(m.group(1)); assert n not in start; start[n]=p; title[n]=m.group(2)
nums=sorted(start); assert nums==list(range(1,max(nums)+1)), 'gap in songs'
pages={}
for i,n in enumerate(nums):
    end=(start[nums[i+1]]-1) if i+1<len(nums) else NP
    pages[n]=list(range(start[n],end+1))
tmp=pathlib.Path(tempfile.mkdtemp())
subprocess.run(['pdftoppm','-gray','-scale-to-x','1100','-scale-to-y','-1','-png',PDF,str(tmp/'p')],check=True)
files={}
for n in nums:
    files[n]=[]
    for k,p in enumerate(pages[n],1):
        src=next(tmp.glob(f'p-{p:03d}.png'))
        name=f'{n:03d}-{k}.png'
        Image.open(src).quantize(4).save(OUT/name,optimize=True)
        files[n].append(name)
js='/* Song lead sheets from the "Sing Out Joyfully" lead-sheet PDF (sjjsm_E.pdf, 2017/2021), one PNG per page.\n   Built by build_songs.py from the PDF text (song number + title on each start page). */\nself.SONGBOOK={\n'
js+=',\n'.join(f'{n}:{{t:{json.dumps(title[n],ensure_ascii=False)},p:{json.dumps(files[n])}}}' for n in nums)+'\n};\n'
(OUT/'songs.js').write_text(js)
print(len(nums),'songs', sum(len(v) for v in files.values()),'pages', {n:pages[n] for n in (1,4,7,35,55,150,151)})
