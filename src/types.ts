export interface Member {
    name: string;
    position: string;
    image?: string;
    level: string;
    college: string;
    links?: Link[];
}

export type SocialIcon = "facebook" | "instagram" | "linkedin";

export interface Link {
    icon: SocialIcon;
    url: string;
}
