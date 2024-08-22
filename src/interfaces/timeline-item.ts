export interface TimelineItem {
  title: string;
  description: string;
  technologies?: Technology[];
  imageUrl?: string;
}

export interface Technology {
  name: string;
  color: string;
  iconName: string;
}

export interface TechnologyTag {
  [key: string]: Technology;
}