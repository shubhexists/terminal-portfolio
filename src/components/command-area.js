import React from "react";
import { useState, useRef, useEffect } from "react";
const Command = () => {
  const [command, setCommand] = useState([]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [upArrowKeyPressed, setUpArrowKeyPressed] = useState(0);
  const inputRef = useRef(null);
  useEffect(() => {
    const handleClick = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        inputRef.current.focus();
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  const getOutput = (command) => {
    switch (command.toLowerCase()) {
      case "help":
        return (
          <div>
            {" "}
            Available commands: <br />
            <span className="text-teal-400 ml-3"> about</span> - If your only
            goal is to stalk me, go ahead with this one :) <br />
            <span className="text-teal-400 ml-3"> socials</span> - If I seem
            interesting enough to you <br />
            <span className="text-teal-400 ml-3"> skills</span> - I guess, I am
            good at certain things <br />
            <span className="text-teal-400 ml-3"> projects</span> - I have made
            some cool stuff too ;) <br />
            <span className="text-teal-400 ml-3"> resume</span> - Checkout my
            Resume (PDF) <br />
            <span className="text-teal-400 ml-3"> clear</span> - Clear the
            terminal
          </div>
        );
      case "about":
        return (
          <div>
            Hi! Thanks for stalking me, lol! <br />I am{" "}
            <span className="text-teal-400">Shubham Singh</span>, a 3rd year
            undergraduate student at{" "}
            <span className="text-purple-400 ml-3">
              {" "}
              <a href="http://dtu.ac.in">
                Delhi Technological University{" "}
              </a>{" "}
            </span>
            pursuing my B.Tech in Software Engineering. Although, I rarely go
            there. I am mostly found in my room, working on some project or
            learning something new. I am also a huge{" "}
            <span className="text-teal-400">Linux </span>fanboy. I love being
            inside the <span className="text-teal-400">terminal </span> for
            absolutely no reason xD. I fact all I use in my laptop is my
            terminal, IDE and browser that's it!!
            <br />
            <span className="text-teal-400"> Wierd Fact </span> - I have a
            nickname - <span className="text-teal-400">Jerry </span>(Yes the one
            from Tom and Jerry!). Why, you ask? Well, it was to counter a friend
            who had a nickname Tom. 😎 <br />
            Coming to my interests, I love to build stuff. You can get my
            professional experience on my LinkedIn... <br />I also have watched
            all of the science fiction movies out there !{" "}
            <span className="text-teal-400">Interstellar Rocks!! </span> 🤘{" "}
            <br />
          </div>
        );
      case "socials":
        return (
          <div>
            First of all, thanks for showing interest in me! <br />
            Here are my internet coordinates - <br />
            <span className="text-purple-400 ml-3">
              <a href="https://github.com/shubhexists">Github </a> -{" "}
            </span>
            Here you can find all my projects and contributions. <br />
            <span className="text-purple-400 ml-3">
              <a href="https://www.linkedin.com/in/shubham-singh-36204b238/">
                LinkedIn{" "}
              </a>{" "}
              -{" "}
            </span>
            Here you can find my professional profile. (DMs preferred here){" "}
            <br />
            <span className="text-purple-400 ml-3">
              <a href="mailto:shubh622005@gmail.com">Mail </a> -{" "}
            </span>
            shubh622005@gmail.com <br />I guess, that's all :/ , I am not very
            active on other platforms.
          </div>
        );
      case "skills":
        return (
          <div>
            <span className="text-teal-400 ml-3">
              Languages (in decreasing order of proficiency) -{" "}
            </span>
            <br />
            <span className="ml-7">
              JavaScript, Go, Python, Dart (Flutter), Rust, C, Java{" "}
            </span>
            <br />
            <span className="text-teal-400 ml-3">Frameworks/Libraries - </span>
            <br />
            <span className="ml-7">
              {" "}
              React(NextJS), Express, Flutter, Gorrilla Mux, Flask
            </span>
            <br />
            <span className="text-teal-400 ml-3">
              Databases/Infrastructures -{" "}
            </span>
            <br />
            <span className="ml-7">
              {" "}
              MongoDB, SQL, Redis, Docker, AWS EC2 , Prometheus, Grafana , Loki
              , Nginx
            </span>
          </div>
        );
      case "projects":
        return (
          <div>
            <span className="text-teal-400 ml-3">1. </span>
            <a
              className="text-purple-400"
              href="https://github.com/shubhexists/proximity"
            >
              {" "}
              Proximity{" "}
            </a>
            - Clearly, I love terminals! This is a{" "}
            <span className="text-teal-400 ml-3">
              terminal based group chat application
            </span>{" "}
            built using <span className="text-teal-400 ml-3">sockets</span>{" "}
            written in C!
            <br />
            <span className="text-teal-400 ml-3">2. </span>
            <a
              className="text-purple-400"
              href="https://github.com/shubhexists/2048"
            >
              {" "}
              2048{" "}
            </a>
            - This is a implementation of the popular game{" "}
            <span className="text-teal-400 ml-3">2048</span> in Flutter. (Dart)
            <br />
            <span className="text-teal-400 ml-3">3. </span>
            <a
              className="text-purple-400"
              href="https://github.com/shubhexists/vault"
            >
              {" "}
              Vault{" "}
            </a>
            - An oversimplified version control system similar to{" "}
            <span className="text-teal-400 ml-3">Git </span> written in Rust
            (Incomplete but functional)
            <br />
            <span className="text-teal-400 ml-3">4. </span>
            <a
              className="text-purple-400"
              href="https://github.com/shubhexists/go-json-db"
            >
              Go-JSON-DB
            </a>
            - A simple <span className="text-teal-400 ml-3">JSON Database</span>{" "}
            written in Go. (Functional)
          </div>
        );
      case "clear":
        setCommand([]);
        return "";
      case "resume":
        window.open(
          "https://drive.google.com/file/d/1QFsmevWTR6zvqrInKiD3zWFRDWpTzXdT/view?usp=sharing",
          "_blank"
        );
        return "Heading to resume...";
      default:
        return (
          <div>
            <span className="text-red-500"> Command not found. </span> <br />
            Type <span className="text-teal-400">help</span> to get a list of
            available commands.
          </div>
        );
    }
  };
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
          <div className="font-mono text-left ml-16 mb-3 selection:bg-yellow-900">
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
          className="bg-transparent outline-none border-none font-mono ml-2 text-amber-500"
          type="text"
          ref={inputRef}
          value={currentCommand}
          autoFocus={true}
          onChange={(e) => setCurrentCommand(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setCommand((prevCommand) => [
                ...prevCommand,
                {
                  command: currentCommand.toLowerCase(),
                  output: getOutput(currentCommand),
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
          }}
        />
      </div>
    </div>
  );
};

export default Command;
