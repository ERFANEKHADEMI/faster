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

    const nextBtn = document.getElementById("next-btn");
    switch (states.opsi) {
        case "lomba":
            nextBtn.href = "/surat-lomba/hal-1.html";
            break;
        case "aktif":
            nextBtn.href = "/surat-aktif/hal-1.html";
            break;
        case "pns":
            nextBtn.href = "/surat-pns/hal-1.html";
            break;
        case "non-pns":
            nextBtn.href = "/surat-non-pns/hal-1.html";
            break;
        case "reward":
            nextBtn.href = "/surat-reward/hal-1.html";
            break;
        default:
            nextBtn.href = "#";
            break;
    }
}

const options = document.getElementsByName("option-surat");
for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("change", toggleOpsi);
}