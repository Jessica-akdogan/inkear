export interface Project {
  title: string;
  category: string;
  difficulty: string;
  duration: string;
  participants: number;
  rating: number;
  description: string;
  tags: string[];
  image: string;
  author?: string;
  comments?: number;
}