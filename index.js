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
console.log(card)
  if(clickElement.classList.contains('interview')){
    // console.log('interview clicked')
  }
  if(clickElement.classList.contains('reject')){
    // console.log('reject clicked')
  }
  if(clickElement.classList.contains('delete')){
    // console.log('delete clicked')
  }
})