// Set required variables
var modalBox = document.getElementById("modalBox");

function setAllModalBoxListeners()
{
    document.getElementById("headerTitle").addEventListener("click", () =>
    {
        connectBoxSetup();
        modalBox.style.display = "block";
    }); 
    
    document.getElementById("modalClose").addEventListener("click", () =>
    {
        modalBox.style.display = "none";
    });
}

// as of now this function just redirects to other function, no real use for it 
function connectBoxSetup()
{
    /*let htmlToPrint = "";

    htmlToPrint += "<table id='modalBoxTable'>";

    htmlToPrint += "<tr><td><span><b>Username: </b></span></td></tr><tr><td><input type='text' id='usernameInput'></span></td></tr>";

    htmlToPrint += "<tr><td><span><b>Avatar URL: </b></span></td></tr><tr><td><input type='text' id='avatarInput'></span></td></tr>";

    htmlToPrint += "<tr><td><span><b>Server IP: </b> (e.g. 127.0.0.1:8888)</span></td></tr><tr><td><input type='text' id='ipInput'></span></td></tr>";

    htmlToPrint += "</table>";

    htmlToPrint += "<br><br><button id='modalBoxBtn'>Connect</button>";

    document.getElementById("modalBoxTextContent").innerHTML = htmlToPrint;*/

    setupModalBoxListeners();
}

function setupModalBoxListeners()
{
    document.getElementById("modalBoxBtn").addEventListener("click", () =>
    {
        readDataFromModalBox();
    });    
}

function readDataFromModalBox()
{
    console.log("reading data");
    let usernameLocal = document.getElementById("usernameInput").value;
    let avatarUrlLocal = document.getElementById("avatarInput").value;
    let ipLocal = document.getElementById("ipInput").value;

    username = usernameLocal;
    avatarUrl = avatarUrlLocal;

    conenctToServer(ipLocal);

    modalBox.style.display = "none";
}