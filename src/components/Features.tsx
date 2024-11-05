import { Bell, Calendar, Gift, Users, Heart, ShoppingBag, Share2 } from 'lucide-react';

const features = [
  {
    name: 'Smart Reminders',
    description: 'Get intelligent notifications for important dates through your preferred channels',
    icon: Bell,
  },
  {
    name: 'Gift Planning',
    description: 'AI-powered gift suggestions based on recipient preferences and occasions',
    icon: Gift,
  },
  {
    name: 'Recipient Profiles',
    description: 'Create detailed profiles to make gift-giving more personal',
    icon: Heart,
  },
  {
    name: 'Shopping Integration',
    description: 'Direct links to trusted stores with the best gift deals',
    icon: ShoppingBag,
  },
  {
    name: 'Social Sharing',
    description: 'Collaborate with friends and family on gift ideas',
    icon: Share2,
  },
  {
    name: 'Event Calendar',
    description: 'Keep track of all special occasions in one place',
    icon: Calendar,
  },
];

export default function Features() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-[#F08080] font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to be thoughtful
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="group relative">
                <div className="flex items-center space-x-4 transition-all duration-200 ease-in-out group-hover:transform group-hover:translate-x-2">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#ADD8E6] text-white group-hover:bg-[#F08080] transition-colors duration-200">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                    <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}