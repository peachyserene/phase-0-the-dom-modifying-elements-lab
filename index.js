const mainElement = document.getElementById("main");
mainElement.remove();

const newHeader = document.createElement("h1");
//newHeader.nodeName = "h1"
newHeader.id = 'victory'
//newHeader.setAttribute("id", "victory");

newHeader.innerHTML = "Peachy is the champion!";
document.body.append(newHeader);