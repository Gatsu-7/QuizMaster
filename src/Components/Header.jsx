import { IoMenu } from "react-icons/io5";
import { PiBrainDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className=" shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200"
            >
              <PiBrainDuotone className="h-8 w-8 text-red-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                QuizMaster
              </span>
            </Link>
          </div>

          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <Link
                  to="/"
                  className="hover:bg-gray-300 text-lg font-semibold py-2 px-4 rounded-lg transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/quizzes"
                  className="hover:bg-gray-300 text-lg font-semibold py-2 px-4 rounded-lg transition duration-300"
                >
                  Quizzes
                </Link>
              </li>
              <li>
                <Link
                  to="/leaderboard"
                  className="hover:bg-gray-300 text-lg font-semibold py-2 px-4 rounded-lg transition duration-300"
                >
                  Leaderboard
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:bg-gray-300 text-lg font-semibold py-2 px-4 rounded-lg transition duration-300"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center">
            <Link
              to="/signin"
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full shadow-lg transition duration-300"
            >
              Sign In
            </Link>
          </div>
          <div className="md:hidden">
            <IoMenu className="hover:scale-110 transition-transform duration-200" />
          </div>
        </div>
      </div>
    </header>
  );
}
