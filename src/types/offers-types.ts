export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type OfferCity = {
    name: string;
    location: Location;
};

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: OfferCity;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  };

