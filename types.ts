export interface PriceItem {
  service: string;
  price?: string; // Optional because "Other Services" might not have explicit prices listed
  detail?: string; // For "Extra" or "From" annotations
}

export interface ServiceSection {
  title: string;
  items: PriceItem[];
  policy: string[]; // Array of strings for paragraphs
}