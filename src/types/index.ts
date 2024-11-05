export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Event {
  id: string;
  title: string;
  date: Date;
  type: 'birthday' | 'anniversary' | 'holiday' | 'other';
  recipientId: string;
}

export interface Recipient {
  id: string;
  name: string;
  relationship: string;
  interests: string[];
  preferences: string[];
  birthdate?: Date;
}