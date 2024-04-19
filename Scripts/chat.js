// Set required variables
const messagesContainerElement = document.getElementById("messagesContainer");
const chatInputElement = document.getElementById("input_01");
const chatElement = document.getElementById("chat");
const picker = new EmojiButton(
    {
        theme: 'dark'
    }
);
const emojiButton = document.getElementById("emojiButton");

// Global user variables
var username = "Janek";
var avatarUrl = "Media/Images/EmojiIcon.png";

function loadAllChatFunctions()
{
    socket.addEventListener('open', function (event)
    {
        console.log('Connected to server');
    });
    
    socket.addEventListener('message', function (event)
    {
        console.log('Received: ' + event.data);

        if (checkIfSpecialMessage(event.data))
        {
            determineSpecialMessageType(event.data);
        }
        else
        {
            decryptMessage(event.data);
        }
    });
    
    socket.addEventListener('close', function (event)
    {
        console.log('Connection closed');
        changeServerName("Click to connect");
        clearChat();
        clearConnectedUsersList();
    });   

    document.getElementById("sendButton").addEventListener("click", () =>
    {
        if(inputClientSideCheck())
        {
            sendMessage(preventCodeInjection(chatInputElement.value));
            clearInput();
        }
    });

    chatInputElement.addEventListener("keypress", (e) =>
    {
        if(e.key == "Enter")
        {
            e.preventDefault();

            if(inputClientSideCheck())
            {
                sendMessage(chatInputElement.value);
                clearInput();
            }
        }
    });

    document.getElementById("emojiButton").addEventListener("click", () =>
    {
        picker.togglePicker(emojiButton);
    });

    picker.on('emoji', emoji => {
        chatInputElement.value += emoji;
      });
}

function preventCodeInjection(_message)
{
    return _message.replace(/</g,"&lt;");    
}

function clearChat()
{
    chatElement.innerHTML = "";
}

function changeServerName(_newServerName)
{
    document.getElementById("headerTitle").innerHTML = _newServerName;    
    console.log("Changed server name to " + _newServerName);
}

function sendUserInfo()
{
    socket.send("?name " + username)
    socket.send("?avatar " + avatarUrl)
    console.log("sent info");
}

function decryptMessage(_message)
{
    let splittedMessage = _message.split("•");

    displayReceivedMessage(splittedMessage[0], splittedMessage[1], splittedMessage[2]);
}

function checkIfSpecialMessage(_message)
{
    if (_message[0] == "•")
    {
        return true;
    }
    
    return false;
}

function inputClientSideCheck()
{
    if (chatInputElement.value == "")
    {
        return false;    
    }

    for (let i = 0; i < chatInputElement.value.length; i++)
    {
        if (chatInputElement.value[i] == '•')
        {
            return false;
        }
    }
    
    return true;
}

function clearInput()
{
    chatInputElement.value = "";
}

function sendMessage(_message)
{
    socket.send(_message);    
}

function determineSpecialMessageType(_message)
{
    let splittedMessage = _message.split('•');
    
    switch (splittedMessage[1]) // 1 because special messages from server start with '•' char
    {
        case "ready":
            sendUserInfo();
            console.log("sending info...");
            break;

        case "servername":
            console.log("Changing server name...");
            changeServerName(splittedMessage[2]);
            break;
        
        case "updateUserList":
            updateUserList(splittedMessage[2]);
            break;
            
        default:
            break;
    }    
}

function displayReceivedMessage(_message, _username, _avatar)
{
    let isAtBottom = (chatElement.scrollHeight - chatElement.scrollTop === chatElement.clientHeight) ? true : false; // check if user is already at the bottom of the page and if so stay there

    let divToAdd = '<br><br><div class="message"><img src="' + _avatar + '" id="avatar"><span id="nickname"><b>' + _username + '</b></span><span id="messageContent">'+_message+'</span></div>';
    let divElement = document.createElement("div");
    divElement.innerHTML = divToAdd;
    messagesContainerElement.appendChild(divElement);

    if(isAtBottom)
    {
        chatElement.scrollTo(0, chatElement.scrollHeight);
    }
}