import React, { useState, useRef, useEffect } from 'react';
import { keybindings } from '../utils/keybindings';

interface CommandItem {
  command: string;
  output: string | JSX.Element;
}

const Command: React.FC = () => {
  const [command, setCommand] = useState<CommandItem[]>([]);
  const [currentCommand, setCurrentCommand] = useState<string>('');
  const [upArrowKeyPressed, setUpArrowKeyPressed] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = () => {
      inputRef.current?.focus();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="bg-[#0d1117] text-[#58a6ff] w-full h-full font-mono p-4">
      <div className="max-w-3xl mx-auto">
        {command.map((item, index) => (
          <div key={index}>
            <div className="flex flex-row mb-0.5">
              <div className="text-teal-500 font-bold">visitor@jerry~$</div>
              <div className="ml-2 font-mono text-[#c9d1d9]">{item.command}</div>
            </div>
            <div className="font-mono text-left ml-6 mb-3 text-[#c9d1d9]">{item.output}</div>
          </div>
        ))}
        <div className="flex flex-row">
          <div className="text-teal-500 font-bold">visitor@jerry~$</div>
          <input
            className="bg-transparent outline-none border-none font-mono ml-2 text-[#c9d1d9] w-2/3"
            type="text"
            ref={inputRef}
            value={currentCommand}
            autoFocus
            onChange={(e) => setCurrentCommand(e.target.value)}
            onKeyDown={(e) => {
              keybindings(e, setCommand, setUpArrowKeyPressed, setCurrentCommand, currentCommand, command, upArrowKeyPressed);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Command;
