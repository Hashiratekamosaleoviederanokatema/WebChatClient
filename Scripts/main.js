var socket;

function conenctToServer(_ip)
{
    socket = new WebSocket('ws://'+ _ip);

    loadAllChatFunctions();
}

setAllModalBoxListeners();