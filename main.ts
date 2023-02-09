window.addEventListener("load", () => {
    const form = document.querySelector("#new-task-form")
    const input: HTMLInputElement | null = document.querySelector("#new-task-input")
    const list_el = document.querySelector("#tasks")

    form?.addEventListener("submit", (e) => {
        e.preventDefault()

        const task = input?.value

        if (!task) {
            alert("Please fill out your tasks")
            return
        }

        const task_el = document.createElement("div")
        task_el.classList.add("task")

        const task_content_el = document.createElement("div")
        task_content_el.classList.add("content")

        const task_input_el = document.createElement("input")
        task_input_el.classList.add("text")
        task_input_el.type = "text"
        task_input_el.value = task
        task_input_el.setAttribute("readonly", "readonly");

        list_el?.appendChild(task_el)

        input.value = ""
    })
})