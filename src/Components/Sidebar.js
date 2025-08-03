const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`bg-[#273444] text-white w-64 h-[calc(100vh-60px)] p-6 space-y-6 shadow-md fixed top-[60px] left-0 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <ul className="space-y-4 text-lg">
        <li className="hover:text-[#3B82F6] cursor-pointer">Dashboard</li>
        <li className="hover:text-[#3B82F6] cursor-pointer">Threat Analysis</li>
        <li className="hover:text-[#3B82F6] cursor-pointer">Network Status</li>
        <li className="hover:text-[#3B82F6] cursor-pointer">Reports</li>
      </ul>
    </div>
  );
};

export default Sidebar;
