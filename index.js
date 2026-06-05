let currentTab='all';
const tabActive=['bg-navy', 'border-navy', 'text-white']
const tabInactive=['bg-transparent', 'text-slate-700','border-slate-200', 'text-black']
const allContainer=document.getElementById('all-container');
const interviewContainer=document.getElementById('interview-container');
const rejectContainer=document.getElementById('reject-container');

function switchTab(tab){
const tabs=['all','interview','rejected']
for(const t of tabs){

const tabName=document.getElementById('tab-'+t);
if(t===tab){
        
tabName.classList.remove(...tabInactive)
tabName.classList.add(...tabActive)
}
else{
    tabName.classList.remove(...tabActive)
    tabName.classList.add(...tabInactive)
}
}
const pages=[allContainer, interviewContainer, rejectContainer]
for(const section of pages){
    section.classList.add('hidden');
}
if(tab==='all'){
    allContainer.classList.remove('hidden');
}
else if(tab==='interview'){
    interviewContainer.classList.remove('hidden')
}
else{
    rejectContainer.classList.remove('hidden')
}
}
//stat update
const totalStat=document.getElementById('stat-total')
const interviewStat=document.getElementById('stat-interview')
const rejectStat=document.getElementById('stat-rejected')
totalStat.innerText=allContainer.children.length
switchTab(currentTab)
document.getElementById('jobs-container').addEventListener('click',function(event){
  const clickElement=event.target
const card=clickElement.closest('.card')
const parent=card.parentNode
const status=card.querySelector('.status')

  if(clickElement.classList.contains('interview')){
    status.innerText='Interviewed'
    interviewContainer.appendChild(card)
  }
  if(clickElement.classList.contains('reject')){
    status.innerText='Rejected'
    rejectContainer.appendChild(card)
  }
  if(clickElement.classList.contains('delete')){
    parent.removeChild(card)
  }
})