import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/', label: '首页' },
  { to: '/guide', label: '领养指南' },
  { to: '/contact', label: '联系我们' },
]

export default function Navbar() {
  const location = useLocation()

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">🐱</span>
            <span className="text-xl font-bold text-orange-500">糖糖猫咪领养</span>
          </Link>
          <div className="flex gap-6">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'text-orange-500'
                    : 'text-gray-600 hover:text-orange-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
