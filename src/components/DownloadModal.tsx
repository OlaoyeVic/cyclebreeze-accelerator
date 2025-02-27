interface DownloadModalProps {
  closeModal: () => void;
}

const DownloadModal = ({ closeModal }: DownloadModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-8 w-96 relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={closeModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <form
          className="flex flex-col justify-center items-start gap-4 mt-8"
          action="https://drive.google.com/file/d/1KWF9oZFq1Ks9gD-x-fM5rcnXY2KLqeMD/view"
          method="POST"
        >
          <div className="w-full">
            <label
              htmlFor="name"
              className="block text-left text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="firstName"
              className="block text-left text-gray-700 font-medium mb-2"
            >
              Surname
            </label>
            <input
              type="text"
              id="surName"
              name="surname"
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="email"
              className="block text-left text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="message"
              className="block text-left text-gray-700 font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              maxLength={200}
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="w-full">
            <button
              type="submit"
              className="bg-[#6FC446] text-white font-medium py-2 px-4 rounded-md w-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default DownloadModal;
