import React from "react";

interface CommandItem {
  command: string;
  output: JSX.Element | string;
}

export const getOutput = (
  command: string,
  setCommand: React.Dispatch<React.SetStateAction<CommandItem[]>>
): JSX.Element | string => {
  switch (command.toLowerCase()) {
    case "help":
      return (
        <div>
          {" "}
          Available commands: <br />
          <span className="text-teal-400 ml-3"> about</span> - If your only goal
          is to stalk me, go ahead with this one :) <br />
          <span className="text-teal-400 ml-3"> socials</span> - If I seem
          interesting enough to you <br />
          <span className="text-teal-400 ml-3"> skills</span> - I guess, I am
          good at certain things <br />
          <span className="text-teal-400 ml-3"> projects</span> - I have made
          some cool stuff too ;) <br />
          <span className="text-teal-400 ml-3"> resume</span> - Checkout my
          Resume <br />
          <span className="text-teal-400 ml-3"> clear</span> - Clear the
          terminal
          <br />
          <span className="text-teal-400 ml-3"> experience</span> - Checkout my
          professional experience <br />
          <span className="text-teal-400 ml-3"> goals</span> - My future plans
          <br />
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
            <a href="http://dtu.ac.in">Delhi Technological University </a>{" "}
          </span>
          pursuing my B.Tech in Software Engineering. Although, I rarely go
          there. I am mostly found in my room, working on some project or
          learning something new. I am also a huge{" "}
          <span className="text-teal-400">Linux </span>fanboy. I love being
          inside the <span className="text-teal-400">terminal </span> for
          absolutely no reason xD. I fact all I use in my laptop is my terminal,
          IDE and browser that's it!!
          <br />
          <span className="text-teal-400"> Wierd Fact </span> - I have a
          nickname - <span className="text-teal-400">Jerry </span>(Yes the one
          from Tom and Jerry!). Why, you ask? Well, it was to counter a friend
          who had a nickname Tom. 😎 <br />
          Coming to my interests, I love to build stuff. You can get my
          professional experience on my LinkedIn... <br />I also have watched
          all of the science fiction movies out there !{" "}
          <span className="text-teal-400">Interstellar Rocks!! </span> 🤘 <br />
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
          Here you can find my professional profile. (DMs preferred here) <br />
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
            JavaScript, TypeScript, Rust, Go, Python, Dart (Flutter), C, Java{" "}
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
            Databases/Infrastructures -
          </span>
          <br />
          <span className="ml-7">
            {" "}
            MongoDB, SQL, Redis, Docker, AWS EC2 , Prometheus, Grafana , Loki ,
            Nginx
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
            Go-JSON-DB{" "}
          </a>
          - A simple <span className="text-teal-400 ml-3">JSON Database</span>{" "}
          written in Go. (Functional)
          <br />
          <span className="text-teal-400 ml-3">5. </span>
          <a
            className="text-purple-400"
            href="https://github.com/shubhexists/react-maps"
          >
            React Maps{" "}
          </a>
          - A collection of light-weight React components for interactive maps
          by parsing SVG Images.
          <br />
          <span className="text-teal-400 ml-3">6. </span>
          <a
            className="text-purple-400"
            href="https://github.com/shubhexists/prism"
          >
            Prism{" "}
          </a>
          - Prism is a replica of ExpressJS written from scratch for learning
          purpose.{" "}
          <span className="text-red-500">
            (Still has a lot of bugs though :( ).
          </span>
        </div>
      );
    case "clear":
      setCommand([]);
      return "";
    case "resume":
      window.open(
        "https://drive.google.com/file/d/1IKx6bvwpaMueK7BAwQp-a5GkBJoZNj9u/view?usp=sharing",
        "_blank"
      );
      return "Heading to resume...";
    case "experience":
      return (
        <div>
          <span className="text-teal-400 ml-3">1. </span>
          <span className="text-purple-400">INDOTABI TOURS</span> - I am working
          as a <span className="text-teal-400 ml-3">Sole Developer </span> to
          build and deploy the company’s website. It has a primary language{" "}
          <span className="text-teal-400 ml-3">Japanese </span> and is a mobile
          centric website, aimed to display the companies products.
          <br />
          <span className="text-red-400 ml-3"> Accomplishments</span>
          <br />
          <span className="ml-7">
            <span className="text-teal-400 ml-3"> a) </span> I built the website
            using <span className="text-teal-400 ml-3">NextTS </span> as the
            frontend and with{" "}
            <span className="text-teal-400 ml-3">ExpressJS </span> as the
            backend.
          </span>
          <br />
          <span className="ml-7">
            <span className="text-teal-400 ml-3"> b) </span> I worked with
            roughly <span className="text-teal-400 ml-3">3000+ lines </span> of{" "}
            <span className="text-teal-400 ml-3">PostgreSQL </span> scripts to
            successfully construct a good database schema
          </span>
          <br />
          <span className="ml-7">
            <span className="text-teal-400 ml-3"> c) </span> The website is
            currently in production -
            <span className="text-teal-400 ml-3">(Mobile Centric UI) </span>
            <a href="https://indotabi.com" className="text-purple-400">
              indotabi.com
            </a>
          </span>
          <br />
          <span className="text-teal-400 ml-3">2. </span>
          <span className="text-purple-400">Zoomtod</span> - As a{" "}
          <span className="text-teal-400 ml-3">Sole Developer </span>
          for the company, my role was to get the product up and running. It was
          a stable, feature rich,{" "}
          <span className="text-teal-400 ml-3">
            Voice only communication application{" "}
          </span>
          built using<span className="text-teal-400 ml-3">WebRTC </span>. Now
          the application is successfully in production with
          <span className="text-teal-400 ml-3">500+ Users</span> and More that
          100+ users actively using the App for more than{" "}
          <span className="text-teal-400 ml-3">8 hrs/day</span>.
          <br />
          <span className="text-red-400 ml-3"> Accomplishments</span>
          <br />
          <span className="ml-7">
            <span className="text-teal-400 ml-3"> a) </span> Built a cross
            platform application using{" "}
            <span className="text-teal-400 ml-3">Flutter(Dart) </span> Deployed
            on Play Store -
            <a
              href="https://play.google.com/store/apps/details?id=io.livekit.zoomtod"
              className="text-purple-400"
            >
              {" "}
              Zoomtod
            </a>
          </span>
          <br />
          <span className="ml-7">
            <span className="text-teal-400 ml-3"> b) </span> Built an Admin
            Panel in <span className="text-teal-400 ml-3">ReactJS </span> that
            tracks constant activities of all the rooms using Web Sockets.
          </span>
          <br />
          <span className="ml-7">
            <span className="text-teal-400 ml-3"> c) </span>Built the entire
            Back-end stack using{" "}
            <span className="text-teal-400 ml-3">NodeJS </span>,{" "}
            <span className="text-teal-400 ml-3">Livekit </span>,
            <span className="text-teal-400 ml-3">WebRTC </span> and
            <span className="text-teal-400 ml-3">SocketIO </span>.
          </span>
          <br />
          <span className="ml-7">
            <span className="text-teal-400 ml-3"> d) </span>Deployed the project
            using <span className="text-teal-400 ml-3">Docker </span> and{" "}
            <span className="text-teal-400 ml-3">NGINX</span> on an{" "}
            <span className="text-teal-400 ml-3">EC2 </span> AWS Instance.
          </span>
          <br />
          <span className="ml-7">
            <span className="text-teal-400 ml-3"> e) </span>Set Up Server and
            API Monitoring using{" "}
            <span className="text-teal-400 ml-3">Grafana</span>,{" "}
            <span className="text-teal-400 ml-3">Prometheus </span>and used{" "}
            <span className="text-teal-400 ml-3">Loki </span>
            for logs collection.
          </span>
          <br />
          <span className="text-teal-400 ml-3">3. </span>
          <span className="text-purple-400">Vitalth Pvt. Ltd.</span> - I was
          responsible for using Govt. of India’s UHI (Unified Health Interface)
          architecture to build a robust backend for the company.
          <br />
          <span className="text-red-400 ml-3"> Accomplishments</span>
          <br />
          <span className="ml-7">
            <span className="text-teal-400 ml-3"> a) </span> I successfully
            completed the M1 and M2 phases of the
            <span className="text-teal-400 ml-3">UHI </span>on-boarding process.
            (There are 3 steps in total).
          </span>
          <br />
          <span className="ml-7">
            <span className="text-teal-400 ml-3"> b) </span> Developed the
            backend in<span className="text-teal-400 ml-3">NodeJS </span>
          </span>
        </div>
      );
    case "goals":
      return (
        <div>
          This is a tough one actually and honestly I am not sure where would
          life take me. There are so many things I find so appealing that it
          sometimes becomes a mess what I actually want to do. The basic
          philosophy is simple, do something that makes me{" "}
          <span className="text-teal-400 ml-3">happy </span>. (Isn't that what
          everyone wants Haha?). Overall I want to be a part of{" "}
          <span className="text-teal-400 ml-3">something big </span>, something
          that has a <span className="text-teal-400 ml-3">huge impact </span> on
          the world (And big doesn't mean monetarily here). The bucket list is
          so big that I can't even list it all here :/ . Some of the fields are
          <span className="text-teal-400 ml-3">
            Artificial Intellligence{" "}
          </span>, <span className="text-teal-400 ml-3">Space</span>,{" "}
          <span className="text-teal-400 ml-3">Nuclear Energy</span>,
          <span className="text-teal-400 ml-3">Hydroponics </span>(I know Wierd
          :)) And who knows, I might end up doing something completely
          different. That's life isn't it?
          <br />
        </div>
      );
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
