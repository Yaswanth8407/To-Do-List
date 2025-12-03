const slider = document.querySelector('.progressbar input');
const giventask = document.querySelector("#giventask")
const prio = document.querySelector('.addtasks select')
const addtask = document.querySelector('.addtasks button')
const elbeforecard = document.querySelector('.addedtasksouter')
const tasks = []
let i = 0


slider.addEventListener('input', e => {
    e.target.value = e.target.dataset.value;
});
slider.dataset.value = slider.value;

function taskcard(task,pri,time){
    elbeforecard.innerHTML += `<div class="addedtask">
                <div class="check">
                    <input type="checkbox" name="" class="status">
                </div>
                <div class="taskandtime">
                    <div class="task">${task}</div>
                    <div class="timecreated">${time}</div>
                </div>
                <div class="tools">
                    <select name="" id="">
                        <option value="Low" ${pri === "Low"?"selected":""}>Low</option>
                        <option value="Medium" ${pri === "Medium"?"selected":""}>Medium</option>
                        <option value="High" ${pri === "High"?"selected":""}>High</option>
                    </select>
                    <button class="edit"><i class="ri-pencil-line"></i></button>
                    <button class="delete"><i class="ri-delete-bin-line"></i></button>
                </div>
            </div>` 
}

addtask.addEventListener("click", ()=>{
    tasks.push({
        task: giventask.value,
        priority: prio.value,
        time: Date.now(),
        status: "pending"
    })
    taskcard(tasks[i].task,tasks[i].priority,tasks[i].time)
    console.log(tasks[i]); i++
    giventask.value = ""
})

document.addEventListener("change", (e) => {
    if (e.target.matches(".addedtask .check input[type='checkbox']")) {

        const card = e.target.closest(".addedtask"); // ← finds that specific card

        if (e.target.checked) {
            card.classList.add("completed");
            
        } else {
            card.classList.remove("completed");
        }
    }
});



