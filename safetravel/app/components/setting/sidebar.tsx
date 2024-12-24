interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void; // Function to update active section
}

export default function Sidebar({
  activeSection,
  setActiveSection,
}: SidebarProps) {
  return (
    <div className="w-2/3 pr-4 bg-white mt-4 rounded-lg shadow-lg p-8">
      <h2 className="text-lg font-semibold mb-6">Settings Page</h2>
      <ul>
        <li className="mb-4 text-center">
          <button
            onClick={() => setActiveSection("account")}
            className={`block font-medium ${
              activeSection === "account"
                ? "text-blue-500 font-semibold"
                : "text-gray-700 hover:text-blue-500"
            }`}
          >
            Account Information
          </button>
        </li>
        <li className="mb-4">
          <button
            onClick={() => setActiveSection("password")}
            className={`block font-medium ${
              activeSection === "password"
                ? "text-blue-500 font-semibold"
                : "text-gray-700 hover:text-blue-500"
            }`}
          >
            Password
          </button>
        </li>
        <li>
          <button
            onClick={() => setActiveSection("slack")}
            className={`block font-medium ${
              activeSection === "slack"
                ? "text-blue-500 font-semibold"
                : "text-gray-700 hover:text-blue-500"
            }`}
          >
            Slack Bot Config
          </button>
        </li>
      </ul>
    </div>
  );
}