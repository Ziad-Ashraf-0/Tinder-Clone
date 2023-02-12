import React from "react";
const Chat = ({ desendingOrderMessages }) => {
  return (
    <>
      <div className="chat-display">
        {desendingOrderMessages.map((message, _index) => (
          <div key={_index}>
            <div className="chat-message-header">
              <div className="img-container">
                <img src={message.img} alt={message.first_name + " profile"} />
              </div>
              <p>{message.name}</p>
            </div>
            <p>{message.message}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Chat;
