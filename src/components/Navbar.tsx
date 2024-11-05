import { Bell, Calendar, Gift, Home, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Gift className="h-8 w-8 text-[#F08080]" />
              <span className="text-xl font-bold bg-gradient-to-r from-[#ADD8E6] to-[#F08080] bg-clip-text text-transparent">
                RemindsGift
              </span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <NavLink icon={<Home className="h-5 w-5" />} text="Home" to="/" />
            <NavLink icon={<Calendar className="h-5 w-5" />} text="Events" to="/events" />
            <NavLink icon={<Gift className="h-5 w-5" />} text="Gifts" to="/gifts" />
            <NavLink icon={<Bell className="h-5 w-5" />} text="Notifications" to="/notifications" />
            <NavLink icon={<User className="h-5 w-5" />} text="Profile" to="/profile" />
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ icon, text, to }: { icon: React.ReactNode; text: string; to: string }) {
  return (
    <Link
      to={to}
      className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-[#F08080] hover:bg-gray-50 transition-colors"
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}