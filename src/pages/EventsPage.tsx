import { useState } from 'react';
import { Calendar as CalendarIcon, Plus } from 'lucide-react';
import { Event } from '../types';
import AddEventModal from '../components/AddEventModal';

export default function EventsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [events, setEvents] = useState<Event[]>([
    {
      id: '1',
      title: "Mom's Birthday",
      date: new Date('2024-04-15'),
      type: 'birthday',
      recipientId: '1'
    },
    {
      id: '2',
      title: "Wedding Anniversary",
      date: new Date('2024-06-20'),
      type: 'anniversary',
      recipientId: '2'
    }
  ]);

  const handleAddEvent = (eventData: any) => {
    const newEvent = {
      id: String(events.length + 1),
      title: eventData.title,
      date: new Date(eventData.date),
      type: eventData.type,
      recipientId: String(events.length + 1)
    };
    setEvents([...events, newEvent]);
  };

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Your Events</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#F08080] hover:bg-[#F08080]/90"
          >
            <Plus className="h-5 w-5 mr-2" />
            Add Event
          </button>
        </div>
        
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <ul className="divide-y divide-gray-200">
            {events.map((event) => (
              <li key={event.id}>
                <div className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <CalendarIcon className="h-5 w-5 text-[#ADD8E6]" />
                      <p className="ml-2 text-sm font-medium text-gray-900">{event.title}</p>
                    </div>
                    <div className="ml-2 flex-shrink-0">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-[#FFFACD] text-[#F08080]">
                        {event.date.toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <AddEventModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddEvent}
      />
    </div>
  );
}