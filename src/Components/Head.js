import { HiMenu } from "react-icons/hi";
import logo from '../assets/sentineai-logo.png';

const Head = ({ onMenuClick }) => {
  return (
    <div className="bg-[#1F2937] px-4 py-2 shadow-md flex items-center justify-between relative">
      
      <HiMenu
        className="text-white text-2xl cursor-pointer"
        onClick={onMenuClick}
      />

      <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center leading-tight">
        <h1 className="text-white font-bold text-xl tracking-wide">
          SentineAI
        </h1>
        <h2 className="text-white font-medium text-xs mt-0.5 tracking-wide">
          Military Cyber Threat Detection System
        </h2>
      </div>

      
      <img src={logo} alt="SentineAI Logo" className="h-12 w-15" />
    </div>
  );
};

export default Head;
