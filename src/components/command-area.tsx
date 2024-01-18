import React, { useState, useRef, useEffect } from "react";
import { keybindings } from "../utils/keybindings";

interface CommandItem {
  command: string;
  output: string | JSX.Element;
}

const Command: React.FC = () => {
  const [command, setCommand] = useState<CommandItem[]>([]);
  const [currentCommand, setCurrentCommand] = useState<string>("");
  const [upArrowKeyPressed, setUpArrowKeyPressed] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        inputRef.current.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "start",
        });
        inputRef.current.focus();
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div>
      {command.map((item, index) => (
        <div key={index}>
          <div className="flex flex-row mb-0.5">
            <div className="text-teal-500 font-bold ml-10  selection:bg-yellow-900">
              {" "}
              visitor@jerry~${" "}
            </div>
            <div className="ml-2 font-mono selection:bg-yellow-900">
              {item.command}
            </div>
          </div>
          <div
            className="font-mono text-left ml-16 mb-3 selection:bg-yellow-900 mr-10"
            id="output-content"
          >
            {item.output}
          </div>
        </div>
      ))}
      <div className="flex flex-row">
        <div className="text-teal-500 font-bold ml-10 selection:bg-yellow-900">
          {" "}
          visitor@jerry~${" "}
        </div>
        <input
          className="bg-transparent outline-none border-none font-mono ml-2 text-amber-500 w-2/3"
          type="text"
          ref={inputRef}
          value={currentCommand}
          autoFocus={true}
          onChange={(e) => setCurrentCommand(e.target.value)}
          onKeyDown={(e) => {
            keybindings(
              e,
              setCommand,
              setUpArrowKeyPressed,
              setCurrentCommand,
              currentCommand,
              command,
              upArrowKeyPressed
            );
          }}
        />
      </div>
    </div>
  );
};

export default Command;
