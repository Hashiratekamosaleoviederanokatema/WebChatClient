// Set required variables
const connectedUsersListContainer = document.getElementById("connectedList");

// this function accepts new list of all active users on the server seperated by semicolon. e.g. john smith;adam;lol lol lol
function updateUserList(_newUserList)
{
    connectedUsersListContainer.innerHTML = "<h2 style='margin-left: 5px;'>Connected users:</h2>";
    
    console.log("Updating connected users list...");

    let splittedUserList = _newUserList.split(';');

    console.log("new user list: " + splittedUserList);

    for (let i = 0; i < splittedUserList.length; i++)
    {
        addNewUserToList(splittedUserList[i]);
    }

    console.log("List updated!");
}

function addNewUserToList(_username)
{
    let newDivHTML = "<div id='connectedUserContainer'><div class='connectedUser'><span class='statusDot'></span><span style='margin-left: 10px;'>" + _username + "</span></div></div>";
    let divElement = document.createElement("div");

    divElement.innerHTML = newDivHTML;
    connectedUsersListContainer.appendChild(divElement);
}

function clearConnectedUsersList()
{
    connectedUsersListContainer.innerHTML = "<h2 id='connectedUsersTitle'>Connected users:</h2><p style='margin-left: 5px;'>Not connected to any server</p>";
}