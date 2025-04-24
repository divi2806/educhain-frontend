export interface WaitlistFormData {
  name: string;
  email: string;
  userType: 'student' | 'institution' | 'employer';
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}