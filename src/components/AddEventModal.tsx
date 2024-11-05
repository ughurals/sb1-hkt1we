import { useState } from 'react';
import { Calendar, Clock, User, X } from 'lucide-react';

interface AddEventModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (event: any) => void;
}

export default function AddEventModal({ isOpen, onClose, onAdd }: AddEventModalProps) {
  const [eventData, setEventData] = useState({
    title: '',
    date: '',
    time: '',
    type: 'birthday',
    recipient: '',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(eventData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-md w-full mx-4">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-900">Add New Event</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Event Title</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#F08080] focus:ring-[#F08080]"
              value={eventData.title}
              onChange={(e) => setEventData({ ...eventData, title: e.target.value })}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <div className="mt-1 relative">
                <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <input
                  type="date"
                  className="block w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-[#F08080] focus:ring-[#F08080]"
                  value={eventData.date}
                  onChange={(e) => setEventData({ ...eventData, date: e.target.value })}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Time</label>
              <div className="mt-1 relative">
                <Clock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <input
                  type="time"
                  className="block w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-[#F08080] focus:ring-[#F08080]"
                  value={eventData.time}
                  onChange={(e) => setEventData({ ...eventData, time: e.target.value })}
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Event Type</label>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#F08080] focus:ring-[#F08080]"
              value={eventData.type}
              onChange={(e) => setEventData({ ...eventData, type: e.target.value })}
            >
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="holiday">Holiday</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Recipient</label>
            <div className="mt-1 relative">
              <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                className="block w-full pl-10 rounded-md border-gray-300 shadow-sm focus:border-[#F08080] focus:ring-[#F08080]"
                placeholder="Who is this event for?"
                value={eventData.recipient}
                onChange={(e) => setEventData({ ...eventData, recipient: e.target.value })}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Notes</label>
            <textarea
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#F08080] focus:ring-[#F08080]"
              rows={3}
              placeholder="Add any additional notes..."
              value={eventData.notes}
              onChange={(e) => setEventData({ ...eventData, notes: e.target.value })}
            />
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-[#F08080] border border-transparent rounded-md hover:bg-[#F08080]/90"
            >
              Add Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}