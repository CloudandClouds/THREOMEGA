import { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/">
                <h1 className="text-3xl font-bold tracking-wide">
                  <span className="text-[#C4973C]">THREOMEGA - CV</span>
                  <span className="text-[#C4973C] align-super text-sm">™</span>
                    <span className="text-[#DC2626] ml-1">3ω</span>
                  </h1>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8">
              <Link
                to="/"
                className="text-gray-900 hover:text-[#C4973C] px-3 py-2 text-sm font-medium transition-colors"
              >
                HOME
              </Link>
              <Link
                to="/doctors"
                className="text-gray-900 hover:text-[#C4973C] px-3 py-2 text-sm font-medium transition-colors"
              >
                FOR DOCTORS
              </Link>
              <Link
                to="/patients"
                className="text-gray-900 hover:text-[#C4973C] px-3 py-2 text-sm font-medium transition-colors"
              >
                FOR PATIENTS
              </Link>
              <a
                href="#science"
                className="text-gray-900 hover:text-[#C4973C] px-3 py-2 text-sm font-medium transition-colors"
              >
                SCIENCE
              </a>
              <a
                href="#order"
                className="text-gray-900 hover:text-[#C4973C] px-3 py-2 text-sm font-medium transition-colors"
              >
                ORDER NOW
              </a>
            </div>

            {/* Right Side - Login and Cart */}
            <div className="flex items-center space-x-4">
              <button className="border-2 border-[#C4973C] text-[#C4973C] px-6 py-2 rounded-md text-sm font-medium hover:bg-[#C4973C] hover:text-white transition-all">
                LOGIN
              </button>
              <div className="relative">
                <button className="p-2 relative">
                  <svg
                    className="w-6 h-6 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="absolute -top-1 -right-1 bg-[#DC2626] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    0
                  </span>
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-4">
              <Link
                to="/"
                className="text-xs font-bold text-gray-900 border-b-2 border-transparent hover:border-[#C4973C]"
              >
                HOME
              </Link>
              <Link
                to="/doctors"
                className="text-xs font-bold text-gray-900 border-b-2 border-transparent hover:border-[#C4973C]"
              >
                DOCTORS
              </Link>
              <Link
                to="/patients"
                className="text-xs font-bold text-gray-900 border-b-2 border-transparent hover:border-[#C4973C]"
              >
                PATIENTS
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
