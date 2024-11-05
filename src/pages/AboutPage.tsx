import { Gift, Heart, Shield, Users } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-[#F08080] tracking-wide uppercase">About Us</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Making every moment special
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            We help you remember and celebrate life's important moments with the people who matter most.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: 'Thoughtful Reminders',
                description: 'Never miss an important date with smart notifications.',
                icon: Gift,
              },
              {
                name: 'Personal Touch',
                description: 'Customize your experience for each special person.',
                icon: Heart,
              },
              {
                name: 'Safe & Secure',
                description: 'Your data is protected with enterprise-grade security.',
                icon: Shield,
              },
              {
                name: 'Growing Community',
                description: 'Join thousands of thoughtful gift-givers worldwide.',
                icon: Users,
              },
            ].map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-[#F08080] rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
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