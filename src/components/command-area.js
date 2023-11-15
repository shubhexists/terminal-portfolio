import React from "react";
import { useState } from "react";
const Command = () => {
  const [command, setCommand] = useState([]);
  const [currentCommand, setCurrentCommand] = useState("");
  const getOutput = (command) => {
    switch (command) {
      case "help":
        return (
          <div>Available commands: about, contact, skills, projects, clear</div>
        );
      case "about":
        return <div> Hi! I'm Shubham, a full-stack developer from India.</div>;
      case "contact":
        return <div> You can contact me at </div>;
      case "skills":
        return (
          <div>
            I'm proficient in JavaScript, React, Node.js, Express.js, MongoDB,
            and Python.
          </div>
        );
      default:
        return (
          <div>
            Command not found. Type help to get a list of available commands.
          </div>
        );
    }
  };
  return (
    <div>
      {command.map((item, index) => (
        <div key={index}>
          <div className="flex flex-row">
            <div className="text-teal-500 font-bold ml-10">
              {" "}
              visitor@jerry~${" "}
            </div>
            <div className="ml-2 font-mono">{item.command}</div>
          </div>
          <div className="font-mono text-left ml-16">{item.output}</div>
        </div>
      ))}
      <div className="flex flex-row">
        <div className="text-teal-500 font-bold ml-10"> visitor@jerry~$ </div>
        <input
          className="bg-transparent outline-none border-none text-slate-300 font-mono ml-2"
          type="text"
          value={currentCommand}
          autoFocus={true}
          onChange={(e) => setCurrentCommand(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              setCommand((prevCommand) => [
                ...prevCommand,
                { command: currentCommand, output: getOutput(currentCommand) },
              ]);
              setCurrentCommand("");
            }
          }}
        />
      </div>
    </div>
  );
};

export default Command;
