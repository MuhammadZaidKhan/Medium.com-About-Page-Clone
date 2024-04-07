// Bot.jsx

import React from 'react';

function Bot() {
    return (
        <div>
            {/* <h2>Chatbot Component</h2> */}
            {/* Add your chatbot implementation here */}

            <df-messenger
                intent="WELCOME"
                chat-title="helloworldagent"
                agent-id="045022c3-6bd7-48ad-8f49-61bc9eef95e6"
                language-code="en"
            ></df-messenger>
        </div>
    );
}

export default Bot;
