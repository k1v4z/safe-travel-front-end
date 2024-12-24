export default function PasswordForm() {
  return (
    <form className="space-y-6">
      <div>
        <label
          htmlFor="current-password"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Current Password
        </label>
        <input
          type="password"
          id="current-password"
          className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300 focus:outline-none"
        />
      </div>
      <div>
        <label
          htmlFor="new-password"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          New Password
        </label>
        <input
          type="password"
          id="new-password"
          placeholder="Enter your new password"
          className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300 focus:outline-none"
        />
      </div>
      <div>
        <label
          htmlFor="confirm-password"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Re-enter new password
        </label>
        <input
          type="password"
          id="confirm-password"
          placeholder="Re-enter your new password"
          className="w-full border border-gray-300 rounded-lg p-2 focus:ring focus:ring-blue-300 focus:outline-none"
        />
      </div>
      <div>
        <button
          type="submit"
          className="flex justify-center px-6 py-2 bg-teal-400 text-white font-medium rounded-full shadow-md hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-300"
        >
          Save
        </button>
      </div>
    </form>
  );
}
