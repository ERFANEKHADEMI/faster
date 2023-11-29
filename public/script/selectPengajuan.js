const states = {
    opsi: ""
};

function toggleOpsi(e) {
    const opsi = document.getElementById(`indicator-${e.target.id}`);
    if (!opsi) {
        return;
    }
    const prevOpsi = document.getElementById(`indicator-${states.opsi}`);
    if (prevOpsi) {
        prevOpsi.classList.remove("bg-blue-500");
        prevOpsi.classList.add("bg-white");
    }
    states.opsi = e.target.id;
    opsi.classList.add("bg-blue-500");
    opsi.classList.remove("bg-white");
}

const options = document.getElementsByName("option-surat");
for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("change", toggleOpsi);
}