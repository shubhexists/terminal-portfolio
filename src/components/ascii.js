import React from "react";

// This is a placeholder component for the ASCII art.
// Write the name Shubham in ASCII Art
const Ascii = () => {
  return (
    <div>
      <pre className="text-left text-teal-400 font-bold mb-2 drop-shadow-xl"> 
        {`
     ____  _           _     _                     
    / ___|| |__  _   _| |__ | |__   __ _ _ __ ___  
    \\___ \\| '_ \\| | | | '_ \\| '_ \\ / _' | '_ ' _ \\ 
    ___) | | | | |_| | |_) | | | | (_| | | | | | |
   |____/|_| |_|\\__,_|_.__/|_| |_|\\__,_|_| |_| |_|             
            `}
      </pre>
    </div>
  );
};

export default Ascii;
