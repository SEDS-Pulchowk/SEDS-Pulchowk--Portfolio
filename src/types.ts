export interface Program {
  id: number;
  title: string;
  description: string;
  image: string;
  start: Date;
  end: Date;
  location: string;
  register_url?: string;
  collection_url?: string;
  giveawayDeadline?: Date;
  giveawayMessage?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  year: number;
}

export interface EventButtonProps {
    start?: Date | null;
    collectionUrl?: string | null;
    registerUrl?: string | null;
    giveawayDeadline?: Date | null;
    giveawayMessage?: string | null;
  }

export interface Member {
  name: string;
  position: string;
  image?: string;
  level: string;
  college: string;
  links?: Link[];
}

export interface Advisor {
  name: string;
  message: string;
  position: string;
  department: string;
  workArea: string;
  image?: string;
  url?: string;
}

export type SocialIcon = "facebook" | "instagram" | "linkedin";

export interface Link {
  icon: SocialIcon;
  url: string;
}
