import { FaGithub, FaTwitter } from 'react-icons/fa';

export default function Footer({}) {
  return (
    <div className="flex flex-col gap-2 items-center">
      <span className="text-base dark:text-white">© Kaiso</span>
      <div className="flex flex-row gap-2">
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <FaGithub />
        </button>
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <FaTwitter />
        </button>
      </div>
    </div>
  );
}
