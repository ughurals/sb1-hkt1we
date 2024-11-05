import { Bell, Calendar, Gift } from 'lucide-react';

const notifications = [
  {
    id: '1',
    type: 'reminder',
    message: "Mom's Birthday is coming up in 2 weeks!",
    date: '2 hours ago',
    icon: Calendar,
    color: 'bg-[#ADD8E6]'
  },
  {
    id: '2',
    type: 'gift',
    message: 'New gift suggestions available for Wedding Anniversary',
    date: '1 day ago',
    icon: Gift,
    color: 'bg-[#F08080]'
  }
];

export default function NotificationsPage() {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
          <button className="flex items-center px-4 py-2 text-sm font-medium text-[#F08080]">
            <Bell className="h-5 w-5 mr-2" />
            Mark all as read
          </button>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <ul className="divide-y divide-gray-200">
            {notifications.map((notification) => (
              <li key={notification.id} className="p-4 hover:bg-gray-50">
                <div className="flex items-center">
                  <div className={`${notification.color} p-2 rounded-full`}>
                    <notification.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="ml-4 flex-1">
                    <p className="text-sm font-medium text-gray-900">{notification.message}</p>
                    <p className="text-sm text-gray-500">{notification.date}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}