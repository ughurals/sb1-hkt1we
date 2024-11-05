import { User, Mail, Phone, Settings } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <div className="flex items-center">
                <div className="h-16 w-16 rounded-full bg-[#ADD8E6] flex items-center justify-center">
                  <User className="h-8 w-8 text-white" />
                </div>
                <div className="ml-4">
                  <h1 className="text-2xl font-bold text-gray-900">John Doe</h1>
                  <p className="text-sm text-gray-500">Member since 2024</p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
              <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500 flex items-center">
                    <Mail className="h-5 w-5 mr-2" />
                    Email
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">john.doe@example.com</dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-500 flex items-center">
                    <Phone className="h-5 w-5 mr-2" />
                    Phone
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">+1 (555) 123-4567</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-sm font-medium text-gray-500 flex items-center">
                    <Settings className="h-5 w-5 mr-2" />
                    Notification Preferences
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900">
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded text-[#F08080]" defaultChecked />
                        <span className="ml-2">Email notifications</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded text-[#F08080]" defaultChecked />
                        <span className="ml-2">SMS notifications</span>
                      </label>
                    </div>
                  </dd>
                </div>
              </dl>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#F08080] hover:bg-[#F08080]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F08080]">
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}