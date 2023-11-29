function setPrint() {
    const closePrint = () => {
        document.body.removeChild(this);
    };
    this.contentWindow.onbeforeunload = closePrint;
    this.contentWindow.onafterprint = closePrint;
    this.contentWindow.print();
}

function doPrint(url) {
    const hideFrame = document.createElement("iframe");
    hideFrame.onload = setPrint;
    hideFrame.style.display = "none"; // hide iframe
    hideFrame.src = url;
    document.body.appendChild(hideFrame);
}