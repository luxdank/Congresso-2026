export interface Speaker {
  id: string;
  name: string;
  role: string;
  photoUrl: string;
  description?: string;
}

export interface ScheduleItem {
  day: string;
  time: string;
  activity: string;
}

export interface RSVPData {
  name: string;
  phone: string;
  church: string;
  city: string;
}
