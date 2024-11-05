import { useState } from 'react';
import { Gift, Search } from 'lucide-react';
import GiftFilters from '../components/GiftFilters';

const initialGiftSuggestions = [
  {
    id: '1',
    title: 'Personalized Photo Album',
    price: '$29.99',
    category: 'personalized',
    occasion: 'birthday',
    image: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    interests: ['art', 'photography']
  },
  {
    id: '2',
    title: 'Smart Watch',
    price: '$199.99',
    category: 'electronics',
    occasion: 'anniversary',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    interests: ['technology', 'fitness']
  }
];

export default function GiftsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState({});
  const [giftSuggestions, setGiftSuggestions] = useState(initialGiftSuggestions);

  const handleFilterChange = (filters: any) => {
    setActiveFilters(filters);
    // Apply filters to gift suggestions
    let filtered = initialGiftSuggestions;

    if (filters.category) {
      filtered = filtered.filter(gift => gift.category === filters.category);
    }

    if (filters.occasion) {
      filtered = filtered.filter(gift => gift.occasion === filters.occasion);
    }

    if (filters.interests && filters.interests.length > 0) {
      filtered = filtered.filter(gift =>
        gift.interests.some(interest => filters.interests.includes(interest))
      );
    }

    setGiftSuggestions(filtered);
  };

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="mb-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Gift Suggestions</h1>
            <GiftFilters onFilterChange={handleFilterChange} />
          </div>
          <div className="mt-4 relative">
            <input
              type="text"
              placeholder="Search gifts..."
              className="w-full px-4 py-2 pl-10 pr-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F08080] focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {giftSuggestions.map((gift) => (
            <div key={gift.id} className="bg-white overflow-hidden shadow-sm rounded-lg">
              <img src={gift.image} alt={gift.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <div className="flex items-center">
                  <Gift className="h-5 w-5 text-[#F08080]" />
                  <h3 className="ml-2 text-lg font-medium text-gray-900">{gift.title}</h3>
                </div>
                <p className="mt-1 text-sm text-gray-500">{gift.category}</p>
                <p className="mt-2 text-lg font-semibold text-[#F08080]">{gift.price}</p>
                <button className="mt-4 w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#F08080] hover:bg-[#F08080]/90">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}