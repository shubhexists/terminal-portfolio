import { getOutput } from "./commands";

export const keybindings = (
  e,
  setCommand,
  setUpArrowKeyPressed,
  setCurrentCommand,
  currentCommand,
  command,
  upArrowKeyPressed
) => {
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
  } else if (e.key === "Tab") {
    e.preventDefault();
    if (currentCommand.toLowerCase().startsWith("so")) {
      setCurrentCommand("socials");
    } else if (currentCommand.toLowerCase().startsWith("sk")) {
      setCurrentCommand("skills");
    } else if (currentCommand.toLowerCase().startsWith("a")) {
      setCurrentCommand("about");
    } else if (currentCommand.toLowerCase().startsWith("p")) {
      setCurrentCommand("projects");
    } else if (currentCommand.toLowerCase().startsWith("r")) {
      setCurrentCommand("resume");
    } else if (currentCommand.toLowerCase().startsWith("c")) {
      setCurrentCommand("clear");
    } else if (currentCommand.toLowerCase().startsWith("h")) {
      setCurrentCommand("help");
    }
  }
};
