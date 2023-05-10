import images from "./images";

const wines = [
  {
    title: "Chapel Hill Shiraz",
    price: "$56",
    tags: "AU | Bottle",
  },
  {
    title: "Catena Malbee",
    price: "$59",
    tags: "AU | Bottle",
  },
  {
    title: "La Vieillw Rose",
    price: "$44",
    tags: "FR | 750 ml",
  },
  {
    title: "Rhino Pale Ale",
    price: "$28",
    tags: "CA | 750 ml",
  },
  {
    title: "Irish Guinness",
    price: "$25",
    tags: "IE | 750 ml",
  },
];

const cocktails = [
  {
    title: "Aperol Sprtiz",
    price: "$18",
    tags: "Aperol | Prosecco | Soda",
  },
  {
    title: "Dark 'N' Stormy",
    price: "$16",
    tags: "Dark Rum | Ginger Beer | Lime",
  },
  {
    title: "Daiquiri",
    price: "$18",
    tags: "White Rum | Citrus | Sugar",
  },
  {
    title: "Old Fashioned",
    price: "$16",
    tags: "Bourbon | Brown Sugar | Angostura Bitters",
  },
  {
    title: "Negroni",
    price: "$18",
    tags: "Gin | Sweet Vermouth | Campari | Orange Twist",
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Bib Gourmond",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award01,
    title: "Rising Star",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award05,
    title: "AA Hospitality",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
  {
    imgUrl: images.award03,
    title: "Outstanding Chef",
    subtitle: "Lorem ipsum dolor sit amet, consectetur.",
  },
];

export default { wines, cocktails, awards };
