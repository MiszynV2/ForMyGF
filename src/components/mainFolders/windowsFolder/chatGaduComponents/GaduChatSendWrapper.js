import React, { useState } from "react";
import GaduChatMessage from "./GaduChatMessage";
import GaduChatTextbox from "./GaduChatTextbox";

function GaduChatSendWrapper() {
  const [status, setStatus] = useState(false);

  const handleMessageSent = () => {
    // Update the status to trigger a fetch
    setStatus(!status);
  };

  return (
    <div>
      <GaduChatMessage state={status} />
      <GaduChatTextbox onMessageSent={handleMessageSent} />
    </div>
  );
}

export default GaduChatSendWrapper;
