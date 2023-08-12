export interface Tech {
  name: string;
  imageUrl: string;
  sourceUrl: string;
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  sourceUrl?: string;
  previewUrl?: string;
}

export interface Experience {
  title: string;
  type: string;
  location: string;
  period: string;
}
