"use strict";
window.addEventListener("load", () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");
    form === null || form === void 0 ? void 0 : form.addEventListener("submit", (e) => {
        e.preventDefault();
        const task = input === null || input === void 0 ? void 0 : input.value;
        if (!task) {
            alert("Please fill out your tasks");
            return;
        }
        const task_el = document.createElement("div");
        task_el.classList.add("task");
        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");
        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");
        list_el === null || list_el === void 0 ? void 0 : list_el.appendChild(task_el);
        input.value = "";
    });
});
