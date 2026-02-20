import React, { useState } from 'react'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full px-4 md:px-14 py-4 flex items-center justify-between" style={{ marginTop: '44px' }}>
      {/* Hamburger Menu Button */}
      <button 
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex items-center justify-center"
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '40px',
          border: '1px solid #E6E6E6',
          backgroundColor: '#FFFFFF'
        }}
        aria-label="Toggle menu"
      >
        <div className="flex flex-col gap-1.5">
          <span className="block w-4 h-0.5 bg-gray-600"></span>
          <span className="block w-4 h-0.5 bg-gray-600"></span>
        </div>
      </button>

      {/* Comfort Toolkit Button */}
      <button
        className="flex items-center justify-center"
        style={{
          background: 'transparent',
          border: 'none',
          padding: 0,
          cursor: 'pointer'
        }}
      >
        <img 
          src="Frame 1618872018.svg" 
          alt="Comfort Toolkit"
          className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto transition-all duration-200"
        />
      </button>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/20 z-40" onClick={() => setMenuOpen(false)}>
          <div 
            className="absolute left-4 top-20 w-64 bg-white rounded-2xl shadow-xl p-4 z-50"
            onClick={e => e.stopPropagation()}
          >
            <nav className="space-y-2">
              <a href="#" className="block px-4 py-3 rounded-xl hover:bg-green-50 text-gray-700 transition-colors">
                Home
              </a>
              <a href="#" className="block px-4 py-3 rounded-xl hover:bg-green-50 text-gray-700 transition-colors">
                Profile
              </a>
              <a href="#" className="block px-4 py-3 rounded-xl hover:bg-green-50 text-gray-700 transition-colors">
                Settings
              </a>
              <a href="#" className="block px-4 py-3 rounded-xl hover:bg-green-50 text-gray-700 transition-colors">
                Help
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
