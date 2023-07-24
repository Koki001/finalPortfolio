import Button from "@mui/material/Button";
import { useState } from "react";

const MessengetProject = function () {
  const [popup, setPopup] = useState(false);

  const handlePropagation = function (e) {
    e.stopPropagation();
    setPopup(false);
  };
  return (
    <div className="singleProject">
      <h3>
        ChatSpace Messenger
        <span className="inProgress">- work in progress -</span>
      </h3>
      <div className="linkButtons">
        <a
          className="liveLink"
          href="https://sprightly-dango-b642da.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Live Link</Button>
        </a>
        <a
          className="codeLink"
          href="https://github.com/Koki001/realtime-messenger"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>Code Link</Button>
        </a>
      </div>
      <h4>
        NextJS <span>||</span> Typescript <span>||</span> PostgreSQL{" "}
        <span>||</span> Redux
      </h4>
      <p>
        * The site is currently not responsive on small screen sizes but is
        otherwise functional. Please{" "}
        <button onClick={() => setPopup(true)} className="listOfChanges">
          click here{" "}
        </button>
        for a list of features currently being worked on* <br /> <br /> A
        real-time chat application with authentication, direct messaging, and
        group conversations. <br /> <br /> The user can easily add to and keep
        track of their contact list, private chats, and group conversations. There are
        active notifications for the number of unread messages in each group
        chat the user is a participant of, as well as separate notifications for
        private messaging.
      </p>
      {popup && (
        <div onClick={handlePropagation} className="popupContainer">
          <div onClick={(e) => e.stopPropagation()} className="popupContent">
            <ol className="changesList">
              <li>
                User-facing error handling for auth and throughout project.
              </li>
              <li>
                Merge recent/active private conversations with groups in "recent
                chats".
              </li>
              <li>
                Add notifications when an unread message is present in "groups"
                and "contacts" sidebar tabs.
              </li>
              <li>
                Enable editing of profile information and sign out options when
                selecting the avatar tab.
              </li>
              <li>
                Add features to settings tab (privacy, security, help, etc.).
              </li>
              <li>Make website responsive on smaller screen sizes.</li>
              <li>
                Implement uploading profile images and sending files within
                chats.
              </li>
              <li>Implement dark mode.</li>
            </ol>
            <button onClick={() => setPopup(false)}>dismiss</button>
          </div>
        </div>
      )}
      <img className="wrenchGif" src="./assets/wrench.gif" />
    </div>
  );
};

export default MessengetProject;
