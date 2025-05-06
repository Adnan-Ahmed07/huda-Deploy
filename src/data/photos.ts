export interface Photo {
  url: string;
  caption: string;
  date: string;
}

// Using the provided personal photos
export const photos: Photo[] = [
  {
    url: "/public/images/photo1.jpg",
    caption: "Our first selfie together",
    date: "March 15, 2023",
  },
  {
    url: "/public/images/ph6.png",
    caption: "Beautiful moments by Us",
    date: "April 2, 2022",
  },
  {
    url: "/public/images/ph7.png",
    caption: "our first trip together",
    date: "April 2, 2022",
  },
  {
    url: "/public/images/Photo2.jpeg",
    caption: "Beautiful moments by the lake",
    date: "April 2, 2023",
  },
  {
    url: "/public/images/Photo3.jpeg",
    caption: "Celebrating our anniversary",
  
    date: "April 15, 2023",
  },
  {
    url: "/public/images/Photo4.jpeg",
    caption: "Group photo with our closest friends",
    date: "May 1, 2023",
  },
  {
    url: "/public/images/Photo5.jpeg",
    caption: "Just the two of us",
    date: "May 15, 2023",
  }
];