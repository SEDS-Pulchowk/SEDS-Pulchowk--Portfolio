import { Program } from "@/types";

const programs: Program[] = [
  {
    id: 2403,
    title: "A planetarium Observation",
    description:
      "Over 500 participants stepped into our program, experiencing an extraordinary 360-degree immersive journey through the cosmos. Together, we explored distant constellation, planets, and celestial wonders through cutting-edge technology that brought the universe to life. The event culminated in captivating Solar and Night Sky Observation sessions, where attendees witnessed the sun's magnificent features and marveled at the stars in real-time.",
    image: "/images/Programs/space_dome.jpg",
    start: new Date("20 Dec 2024"),
    end: new Date("20 Dec 2024"),
    location: "In front of D2 Block, Pulchowk Campus",
    register_url: "https://forms.gle/AWSee96FUgNC5W438",
    collection_url:
      "https://drive.google.com/drive/folders/1QTtuobZ-WCVAVR-4M3b81FjKSsmVBD5F?usp=sharing",
    giveawayDeadline: new Date("22 Dec 2024"),
    giveawayMessage:
      "🎁 Share Your Cosmic Moments!\nShare your favorite event photos for a chance to win our exclusive merchandise bundle. Visit our Social Media for giveaway details. \n✨ Let Your Space Journey Continue ✨",
  },
  {
    id: 2402,
    title: "Canset Workshop",
    description:
      "With 70+ participants from different colleges and diverse fields in association with FSU Pulchowk, a CanSat workshop was an educational event where participants designed and build small satellite models, called CanSats, about the size of a soda can. This workshop  provides practical exposure to space technology and fosters skills in STEM fields, inspiring the next generation of engineers and scientists.",
    image: "/images/Programs/cansat_workshop.jpg",
    start: new Date("22 Jan 2024"),
    end: new Date("27 Jan 2024"),
    location: "G Hall, Pulchowk Campus",
  },
  {
    id: 2303,
    title: "Space A.I Art Challenges",
    description:
      "With 30+ participants from diverse fields, the AI Space Art Challenge, organized by SEDS-Pulchowk, explored the fusion of artificial intelligence and artistic expression by using AI tools to create innovative and imaginative space-themed artworks. The challenge encourages participants to push the boundaries of creativity and technology, resulting in unique visual representations of space.",
    image: "/images/Programs/ai_space_art_cover.png",
    start: new Date("Dec 02 2023"),
    end: new Date("Dec 18 2023"),
    location: "Online",
  },
  {
    id: 2302,
    title: "NASA Space Apps Challenge",
    description:
      "SEDS - Pulchowk and NRCC teamed up to host the NASA Space Apps Challenges 2023. Participants accepted the challenge and did their best to tackle them using the data provided by world's leading space agencies. The hackathon was a physical and straight 36 hours event. The event embraced collaborative problem solving with a goal of producing relevant open-source solutions to address global needs applicable to both life on Earth and in space.",
    image: "/images/Programs/space_app_challenge.png",
    start: new Date("07 Oct 2023"),
    end: new Date("08 Oct 2023"),
    location: "Library Hall, Pulchowk Campus",
  },
  {
    id: 2301,
    title: "Solar Observation",
    description:
      "Despite challenging weather conditions, we managed to conduct a brief but meaningful solar observation session during the SEDS (Students for the Exploration and Development of Space) orientation program in collaboration with Nepal Astronomical Society (NASO). Although visibility was limited, participants had the opportunity to glimpse our nearest star, making the orientation program even more engaging and educational. We thank NASO for their expert guidance in making this celestial observation possible despite the circumstances.",
    image: "/images/Programs/solar_observation.JPG",
    start: new Date("13 Jul 2023"),
    end: new Date("13 Jul 2023"),
    location: "Library Hall, Pulchowk Campus",
  },
];

export default programs;
