interface PropsList {
  id: string;
  name: string;
  imageUrl: string;
  reservation: string;
  status: boolean;
  rating: number;
}

export const listCars: PropsList[] = [
  {
    id: "01",
    name: "BMW 320i 2020",
    imageUrl:
      "https://github.com/DevJoaoPeu/teste-vaga/blob/develop/public/bmw.jpg?raw=true",
    reservation: "11/02",
    status: true,
    rating: 1,
  },
  {
    id: "02",
    name: "Creta 2017",
    imageUrl: "https://github.com/DevJoaoPeu/teste-vaga/blob/develop/public/creta.jpg?raw=true",
    reservation: "15/10",
    status: true,
    rating: 2,
  },
  {
    id: "03",
    name: "Jeep Compass 2018",
    imageUrl: "https://github.com/DevJoaoPeu/teste-vaga/blob/develop/public/jeep-compass-2022.jpg?raw=true",
    reservation: "20/05",
    status: true,
    rating: 3,
  },
  {
    id: "04",
    name: "Mini Cooper 2023",
    imageUrl: "https://github.com/DevJoaoPeu/teste-vaga/blob/develop/public/miniCooper.jpg?raw=true",
    reservation: "19/06",
    status: false,
    rating: 4,
  },
  {
    id: "05",
    name: "Nivus 2019",
    imageUrl: "https://github.com/DevJoaoPeu/teste-vaga/blob/develop/public/nivus.jpg?raw=true",
    reservation: "03/01",
    status: true,
    rating: 4,
  },
  {
    id: "06",
    name: "X2 2023",
    imageUrl: "https://github.com/DevJoaoPeu/teste-vaga/blob/develop/public/x2.jpg?raw=true",
    reservation: "05/05",
    status: false,
    rating: 4,
  },
];
