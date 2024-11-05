import { useState } from 'react';
import { Filter, X } from 'lucide-react';

interface FilterProps {
  onFilterChange: (filters: any) => void;
}

export default function GiftFilters({ onFilterChange }: FilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    priceRange: '',
    category: '',
    occasion: '',
    recipient: '',
    interests: [],
  });

  const categories = [
    'Electronics',
    'Fashion',
    'Home & Living',
    'Books',
    'Sports',
    'Art & Craft',
    'Experiences',
    'Personalized',
  ];

  const occasions = [
    'Birthday',
    'Anniversary',
    'Wedding',
    'Graduation',
    'Holiday',
    'Thank You',
    'Other',
  ];

  const interests = [
    'Technology',
    'Fashion',
    'Sports',
    'Cooking',
    'Reading',
    'Music',
    'Travel',
    'Art',
    'Gaming',
    'Fitness',
  ];

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
      >
        <Filter className="h-4 w-4 mr-2" />
        Filters
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-10 border border-gray-200">
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="text-lg font-medium">Filters</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-500">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="p-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Price Range</label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#F08080] focus:ring-[#F08080]"
                value={filters.priceRange}
                onChange={(e) => handleFilterChange({ ...filters, priceRange: e.target.value })}
              >
                <option value="">All Prices</option>
                <option value="0-25">Under $25</option>
                <option value="25-50">$25 - $50</option>
                <option value="50-100">$50 - $100</option>
                <option value="100-200">$100 - $200</option>
                <option value="200+">$200+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#F08080] focus:ring-[#F08080]"
                value={filters.category}
                onChange={(e) => handleFilterChange({ ...filters, category: e.target.value })}
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category.toLowerCase()}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Occasion</label>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#F08080] focus:ring-[#F08080]"
                value={filters.occasion}
                onChange={(e) => handleFilterChange({ ...filters, occasion: e.target.value })}
              >
                <option value="">All Occasions</option>
                {occasions.map((occasion) => (
                  <option key={occasion} value={occasion.toLowerCase()}>
                    {occasion}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Interests</label>
              <div className="mt-2 space-y-2">
                {interests.map((interest) => (
                  <label key={interest} className="flex items-center">
                    <input
                      type="checkbox"
                      className="rounded text-[#F08080] focus:ring-[#F08080]"
                      checked={filters.interests.includes(interest.toLowerCase())}
                      onChange={(e) => {
                        const newInterests = e.target.checked
                          ? [...filters.interests, interest.toLowerCase()]
                          : filters.interests.filter((i) => i !== interest.toLowerCase());
                        handleFilterChange({ ...filters, interests: newInterests });
                      }}
                    />
                    <span className="ml-2 text-sm text-gray-700">{interest}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="pt-4 flex justify-end space-x-3 border-t">
              <button
                onClick={() => handleFilterChange({
                  priceRange: '',
                  category: '',
                  occasion: '',
                  recipient: '',
                  interests: [],
                })}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Reset
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-sm font-medium text-white bg-[#F08080] border border-transparent rounded-md hover:bg-[#F08080]/90"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}