function checkValue() {
    let isValid = true;
    document.querySelectorAll("#input input").forEach(inp => {
        if (!inp.value) {
            isValid = false;
        }
    });
    const validate = document.getElementById("validate");
    if (isValid) {
        validate.classList.remove("bg-blue-300");
        validate.classList.remove("bg-opacity-75");
        validate.classList.remove("text-slate-500");

        validate.classList.add("bg-blue-700");
        validate.classList.add("text-slate-50");
        validate.removeAttribute("disabled");
    } else {
        validate.classList.add("bg-blue-300");
        validate.classList.add("bg-opacity-75");
        validate.classList.add("text-slate-500");

        validate.classList.remove("bg-blue-700");
        validate.classList.remove("text-slate-50");
        validate.setAttribute("disabled", true);
    }
}