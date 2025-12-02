const slider = document.querySelector('.progressbar input');
const giventask = document.querySelector('.addtasks input')
const prio = document.querySelector('.addtasks select')
const addtask = document.querySelector('.addtasks button')
const tasks = []
let i = 0

slider.addEventListener('input', e => {
    e.target.value = e.target.dataset.value;
});
slider.dataset.value = slider.value;

addtask.addEventListener("click", ()=>{
    tasks[i] = {
        task: giventask,
        priority: prio,
        time: Date.now()
    }

    console.log(tasks[i])
    i++
})
