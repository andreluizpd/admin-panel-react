export interface Agency {
  id: string;
  name: string;
  location: string;
  subtitle: string;
  highlight: boolean;
  contact: string;
  icon: string;
  highlightPhoto: string;
  detailsBackgroundImage: string;
  // tour?: Tour[];
}

export interface CreateAgencyDto {
  name: string;
  location: string;
  subtitle: string;
  highlight: boolean;
  contact: string;
  icon: string;
  highlightPhoto: string;
  detailsBackgroundImage: string;
}

export interface UpdateAgencyDto {
  id: string;
  name: string;
  location: string;
  subtitle: string;
  highlight: boolean;
  contact: string;
  icon: string;
  highlightPhoto: string;
  detailsBackgroundImage: string;
}

export interface RemoveAgencyDto {
  id: string;
  token: string;
}
