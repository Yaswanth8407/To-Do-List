const slider = document.querySelector('.progressbar input');
const giventask = document.querySelector("#giventask")
const prio = document.querySelector('.addtasks select')
const addtask = document.querySelector('.addtasks button')
const elbeforecard = document.querySelector('.addedtasksouter')
const tasks = []
let t = 0; let i = 0; slider.value = slidervalue();

function slidervalue(){
    if (tasks.length === 0)
        return 0
    else
        return (100/((tasks.length)/i))
}

function proinnertext(){
    document.querySelector(".completions").innerHTML = `${i} / ${tasks.length} Tasks Completed`
}

slider.addEventListener('input', e => {
    e.target.value = slidervalue();
    proinnertext()
});

function taskcard(task,pri,time){
    elbeforecard.innerHTML += `<div class="addedtask" data-id="${t}">
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

function priline(card, priority){
    if (priority === "Low"){
        card.style.borderLeft = "5px solid green";
    }
    else if (priority === "Medium"){
        card.style.borderLeft = "5px solid orange";
    }
    else {
        card.style.borderLeft = "5px solid red";
    }
}


addtask.addEventListener("click", ()=>{
    if(giventask.value.trim() === "") return;

    tasks.push({
        task: giventask.value,
        priority: prio.value,
        time: new Date().toLocaleString(),
        status: "pending"
    });

    taskcard(tasks[t].task, tasks[t].priority, tasks[t].time);

    const cards = document.querySelectorAll(".addedtask");
    const currentCard = cards[cards.length - 1];
    priline(currentCard, tasks[t].priority);
    giventask.value = ""; t++;
    proinnertext()
});


document.addEventListener("change", (e) => {
    if (e.target.matches(".addedtask .check input[type='checkbox']")) {

        const card = e.target.closest(".addedtask");
        const id = card.dataset.id;

        if (e.target.checked) {
            card.classList.add("completed");
            tasks[id].status = "completed";
            i++
            slider.value = slidervalue();
            proinnertext()
        } else {
            card.classList.remove("completed");
            tasks[id].status = "pending";
            i--
            slider.value = slidervalue();
            proinnertext()
        }

        console.log(tasks);
    }
});


