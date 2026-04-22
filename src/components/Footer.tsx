import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold text-white mb-1">🐱 糖糖猫咪领养</p>
            <p className="text-sm">用爱为流浪猫找到一个温暖的家</p>
          </div>
          <div className="flex gap-6 text-sm">
            <Link to="/" className="hover:text-orange-400 transition-colors">首页</Link>
            <Link to="/guide" className="hover:text-orange-400 transition-colors">领养指南</Link>
            <Link to="/contact" className="hover:text-orange-400 transition-colors">联系我们</Link>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-xs text-gray-500">
          © 2026 糖糖猫咪领养 · 善待每一个生命
        </div>
      </div>
    </footer>
  )
}
