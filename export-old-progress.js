(()=>{const R={};let d=0,o=0;const norm=s=>s.replace(/\s+/g,' ').trim();
document.querySelectorAll('.q').forEach(el=>{const key=norm([...el.querySelectorAll('.qb>p')].map(p=>p.textContent).join(' '));
const q=DATA.qs.find(q=>norm(q.body.filter(b=>b.t==='txt').map(b=>b.s).join(' '))===key);if(!q)return;let ok=null;
if(q.dd){const sl=[...el.querySelectorAll('.slot')];if(sl.some(s=>s.querySelector('.chip')))ok=sl.every(s=>{const c=s.querySelector('.chip');return c&&c.dataset.v===s.dataset.a})}
else{const ps=[...el.querySelectorAll('.ch li.pick')];if(ps.length){const ks=ps.map(li=>{const tx=norm(li.textContent.replace(/^[A-Z]\.\s*/,'').replace(/Most Voted$/,''));const c=q.choices.find(c=>norm(c.s)===tx);return c?c.k:'?'}).sort().join('');ok=ks===q.answer.split('').sort().join('')}}
if(ok===null)return;d++;o+=ok;R[q.topic+'-'+q.num]={c:ok?1:0,t:Date.now()}});
const s=JSON.stringify(R);console.log('푼 문제 '+d+'개, 맞음 '+o+'개, 정답률 '+(d?Math.round(o/d*100):0)+'%');try{copy(s);console.log('기록을 클립보드에 복사했어요. 새 페이지의 "이전 기록 가져오기"에 붙여 넣으세요.')}catch(e){console.log(s)}})();
