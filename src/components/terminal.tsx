import Header from './header';
import Command from './command-area';

const Terminal = () => {
  return (
    <div className="bg-[#0d1117] text-[#58a6ff] w-screen min-h-screen overflow-x-hidden">
      <Header />
      <Command />
    </div>
  );
};

export default Terminal;
