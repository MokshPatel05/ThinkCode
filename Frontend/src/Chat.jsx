import "./Chat.css";
import React, { useContext, useState, useEffect } from "react";
import { MyContext } from "./MyContext";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

function Chat() {
    const { newChat, prevChats, reply } = useContext(MyContext);
    const [latestReply, setLatestReply] = useState(null);

    useEffect(() => {
        if (reply === null) {
            setLatestReply(null); //prevchat load
            return;
        }

        if (!prevChats?.length) return;

        const lastMessage = prevChats[prevChats.length - 1];
        if (lastMessage.role !== "assistant" || !lastMessage.content) return;

        const content = lastMessage.content.split(" "); //individual words

        let idx = 0;
        const interval = setInterval(() => {
            setLatestReply(content.slice(0, idx + 1).join(" "));

            idx++;
            if (idx >= content.length) clearInterval(interval);
        }, 40);

        return () => clearInterval(interval);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [prevChats?.length, reply])

    // Determine which messages to show normally and which to animate
    const lastMsg = prevChats?.length > 0 ? prevChats[prevChats.length - 1] : null;
    const isLastAssistant = lastMsg?.role === "assistant";
    const messagesToShow = isLastAssistant ? prevChats.slice(0, -1) : prevChats;

    return (
        <>
            {newChat && <h1>Start a New Chat!</h1>}
            <div className="chats">
                {
                    messagesToShow?.map((chat, idx) =>
                        <div className={chat.role === "user" ? "userDiv" : "gptDiv"} key={idx}>
                            {
                                chat.role === "user" ?
                                    <p className="userMessage">{chat.content}</p> :
                                    <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{chat.content}</ReactMarkdown>
                            }
                        </div>
                    )
                }

                {
                    isLastAssistant && (
                        <>
                            {
                                latestReply === null ? (
                                    <div className="gptDiv" key={"non-typing"} >
                                        <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{lastMsg.content}</ReactMarkdown>
                                    </div>
                                ) : (
                                    <div className="gptDiv" key={"typing"} >
                                        <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{latestReply}</ReactMarkdown>
                                    </div>
                                )

                            }
                        </>
                    )
                }

            </div>
        </>
    )
}

export default Chat;