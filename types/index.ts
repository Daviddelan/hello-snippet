export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  category: Category;
  image: string;
  featured?: boolean;
}

export type Category = 'Fest' | 'Music' | 'Church' | 'Play' | 'Cars' | 'Party' | 'All';