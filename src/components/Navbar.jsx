function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
            </svg>
            <span className="text-xl font-bold text-blue-600">Razorpay</span>
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Payments
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Banking+
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Payroll
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Engage
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Partners
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Resources
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Pricing
            </a>
          </div>

          {/* Right: Support, India Flag, Login, Sign Up */}
          <div className="flex items-center gap-4">
            {/* Support Icon */}
            <button className="p-2 hover:bg-gray-100 rounded-lg transition hidden md:block">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </button>

            {/* India Flag Dropdown */}
            <button className="hidden md:flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition">
              <div className="flex gap-0 items-center">
                <div className="w-6 h-4 bg-gradient-to-b from-orange-500 via-white to-green-600 rounded-sm border border-gray-300"></div>
              </div>
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Login Button */}
            <button className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition font-medium border border-gray-300">
              Login
            </button>

            {/* Sign Up Button */}
            <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium flex items-center gap-2">
              Sign Up
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar