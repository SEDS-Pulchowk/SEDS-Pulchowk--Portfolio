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
