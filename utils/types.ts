export interface Tech {
  name: string;
  imageUrl: string;
  sourceUrl: string;
}

export interface Project {
  title: string;
  name: string;
  description: string;
  overview: string[];
  techStack: string[];
  imageUrl: string;
  imageIsPortrait: boolean;
  sourceUrl?: string;
  previewUrl?: string;
}

export interface Experience {
  title: string;
  type: string;
  location: string;
  period: string;
}
