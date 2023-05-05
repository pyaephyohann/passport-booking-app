import { Bus, Station } from "../typings/Typing";

export const stations: Station[] = [
  { id: 1, label: "Hledan" },
  { id: 2, label: "Myaynigone" },
  { id: 3, label: "SanChaung" },
  { id: 4, label: "Tamwe" },
  { id: 5, label: "8 miles" },
  { id: 6, label: "La Tha" },
  { id: 7, label: "Su Lay" },
  { id: 8, label: "Thingangyun" },
  { id: 9, label: "South okkala" },
  { id: 10, label: "North okkala" },
  { id: 11, label: "Kabar Aye" },
  { id: 12, label: "Myanmar Plaza" },
  { id: 13, label: "Insein" },
  { id: 14, label: "South Dagon" },
  { id: 15, label: "North Dagon" },
  { id: 16, label: "Hlaing" },
  { id: 17, label: "Hlaing tha yar" },
  { id: 18, label: "Bayint Naung Junction" },
  { id: 19, label: "Thamine Junction" },
  { id: 20, label: "Kyimyindai" },
  { id: 21, label: "Inya Lake" },
];

export const buses: Bus[] = [
  {
    id: 1,
    name: "YBS 21",
    stations: [
      { id: 19, label: "Thamin Junction" },
      { id: 1, label: "Hle dan" },
      { id: 2, label: "Myaynigone" },
      { id: 6, label: "La Tha" },
      { id: 3, label: "SanChaung" },
      { id: 16, label: "Hlaing" },
      { id: 13, label: "Insein" },
    ],
  },
  {
    id: 2,
    name: "YBS 20",
    stations: [
      { id: 20, label: "Kyimyindai" },
      { id: 2, label: "Myaynigone" },
      { id: 3, label: "SanChaung" },
      { id: 8, label: "Thingangyun" },
      { id: 4, label: "Tamwe" },
    ],
  },
  {
    id: 3,
    name: "YBS 61",
    stations: [
      { id: 1, label: "Hledan" },
      { id: 2, label: "Myaynigone" },
      { id: 3, label: "SanChaung" },
      { id: 18, label: "Bayint Naung Junction" },
      { id: 19, label: "Thamine Junction" },
    ],
  },
  {
    id: 4,
    name: "YBS 83",
    stations: [
      { id: 19, label: "Thamine Junction" },
      { id: 5, label: "8 miles" },
      { id: 11, label: "Kabar Aye" },
    ],
  },
  {
    id: 5,
    name: "YBS 35",
    stations: [
      { id: 5, label: "8 miles" },
      { id: 21, label: "Inya Lake" },
    ],
  },
];
