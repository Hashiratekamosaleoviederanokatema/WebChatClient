# 🖥 Webchat Client
Version 1.0  
License: MIT

## 📝 What is WebChat?
WebChat is an educational project created by me. I wanted to create something cool involving sockets, connections, etc., and so I did.

**REMEMBER THAT THIS PROJECT IS SOLELY EDUCATIONAL.  
IT IS UNOPTIMIZED, AND MANY THINGS DESERVE BETTER SOLUTIONS. 😓**

## 🕵🏻 How do I use it?
It's really simple. In this repository, you can find the client which you will be using to connect to the server (the server can be found in the WebChatServer repository).

**Step by step:**
- Download everything by clicking the green code button and then downloading the zip.
- Unzip it anywhere you would like.
- Run **index.html**.
- And that's it. Happy chatting! 🥳

## 🔧 Known issues
There are a few known issues that I might fix in the future, but to be honest, it's just an educational project.

**Issues:**
- As of now, the whole chat history is downloaded from the server. It can cause performance issues when there are a lot of messages on the server.
- Channels are not working (well, it's not a real issue; the channel system is just not implemented lol).
- ~~The client website is very unresponsive.~~ I updated client and it's a bit more responsive. **I didn't design it to be responsive, so it will look bad on mobile and on small windows in general** (I should've used Bootstrap).
- Possible very small memory leak on the server? Probably caused by sockets not clearing themselves (changing library to hadnle connections can help?)
