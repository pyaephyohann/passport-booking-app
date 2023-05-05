export interface Station {
  id: number;
  label: string;
}

export interface Bus {
  id: number;
  name: string;
  stations: Station[];
}
