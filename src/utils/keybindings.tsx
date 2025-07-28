import { getOutput } from "./commands";
import React from "react";

interface CommandItem {
  command: string;
  output: JSX.Element | string;
}

export const keybindings = (
  e: React.KeyboardEvent<HTMLInputElement>,
  setCommand: React.Dispatch<React.SetStateAction<CommandItem[]>>,
  setUpArrowKeyPressed: React.Dispatch<React.SetStateAction<number>>,
  setCurrentCommand: React.Dispatch<React.SetStateAction<string>>,
  currentCommand: string,
  command: CommandItem[],
  upArrowKeyPressed: number
): void => {
  if (e.key === "Enter") {
    setCommand((prevCommand) => [
      ...prevCommand,
      {
        command: currentCommand.toLowerCase(),
        output: getOutput(currentCommand, setCommand),
      },
    ]);
    setCurrentCommand("");
    setUpArrowKeyPressed(0);
  } else if (e.keyCode === 38) {
    if (command.length > 0) {
      setUpArrowKeyPressed(upArrowKeyPressed + 1);
      if (command.length - upArrowKeyPressed - 1 >= 0) {
        setCurrentCommand(
          command[command.length - upArrowKeyPressed - 1].command
        );
      }
    }
  }else if (e.keyCode === 40) {
    if (upArrowKeyPressed > 0) {
      const newCount = upArrowKeyPressed - 1;
      setUpArrowKeyPressed(newCount);
      if (newCount === 0) {
        setCurrentCommand("");
      } else {
        const index = command.length - newCount;
        if (index >= 0) {
          setCurrentCommand(command[index].command);
        }
      }
    }
  }
   else if (e.key === "Tab") {
    e.preventDefault();
    if (currentCommand.toLowerCase().startsWith("so")) {
      setCurrentCommand("socials");
    } else if (currentCommand.toLowerCase().startsWith("sk")) {
      setCurrentCommand("skills");
    } else if (currentCommand.toLowerCase().startsWith("a")) {
      setCurrentCommand("about");
    } else if (currentCommand.toLowerCase().startsWith("pr")) {
      setCurrentCommand("projects");
    } else if (currentCommand.toLowerCase().startsWith("r")) {
      setCurrentCommand("resume");
    } else if (currentCommand.toLowerCase().startsWith("cle")) {
      setCurrentCommand("clear");
    } else if (currentCommand.toLowerCase().startsWith("h")) {
      setCurrentCommand("help");
    } else if (currentCommand.toLowerCase().startsWith("g")) {
      setCurrentCommand("goals");
    } else if (currentCommand.toLowerCase().startsWith("e")) {
      setCurrentCommand("experience");
    } else if (currentCommand.toLowerCase().startsWith("b")) {
      setCurrentCommand("blogs");
    } else if (currentCommand.toLowerCase().startsWith("sudo")) {
      setCurrentCommand("sudo rm -rf /*");
    }
  }
};
