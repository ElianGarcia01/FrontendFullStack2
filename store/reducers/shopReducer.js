import { createReducer } from "@reduxjs/toolkit";
import { changeSearch, changeCategory } from "../actions/shopActios";

const initialBooks = [
  {
    id: 1,
    nombre: "El Principito",
    descripcion:
      "Una historia clásica sobre un niño de otro planeta que aprende sobre la vida y la amistad.",
    precio: 12.99,
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXVTPyNheQHkjIE5CgPpyQbx79J35zvIOiVA&s",
    category: "Fábula",
  },
  {
    id: 2,
    nombre: "1984",
    descripcion:
      "Una novela distópica que explora un futuro totalitario donde el Gran Hermano todo lo ve.",
    precio: 14.5,
    imagen:
      "https://m.media-amazon.com/images/I/91jHOlKEPwL._AC_UF894,1000_QL80_.jpg",
    category: "Distopía",
  },
  {
    id: 3,
    nombre: "Cien años de soledad",
    descripcion:
      "Un relato mágico sobre la familia Buendía en el pueblo ficticio de Macondo.",
    precio: 18.75,
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIDFNH0euXSuFigfxkROYlUHzX272k3KK-qA&s",
    category: "Realismo mágico",
  },
  {
    id: 4,
    nombre: "Don Quijote de la Mancha",
    descripcion:
      "Las aventuras de un caballero que confunde la realidad con la fantasía.",
    precio: 22.0,
    imagen:
      "https://imagenes.elpais.com/resizer/v2/7BN7MROFVTFLCFQ2FXZPUC3Y3E.jpg?auth=97fa728dc1daaf5ea998df3241a3cb4d3f59a8c89df4626cd54b91006ff6af49&width=1200",
    category: "Clásico",
  },
  {
    id: 5,
    nombre: "Los Juegos del Hambre",
    descripcion:
      "Una historia de supervivencia y revolución en una sociedad distópica.",
    precio: 16.9,
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW76H1riOdyBO_QHJbHcI-zTqxcD_cV89TKw&s",
    category: "Juvenil",
  },
  {
    id: 6,
    nombre: "Harry Potter y la piedra filosofal",
    descripcion:
      "El inicio de la saga del joven mago Harry Potter en Hogwarts.",
    precio: 19.99,
    imagen: "https://m.media-amazon.com/images/I/81iqZ2HHD-L.jpg",
    category: "Fantasía",
  },
  {
    id: 7,
    nombre: "Crónica de una muerte anunciada",
    descripcion:
      "Un relato periodístico sobre un asesinato que todo el pueblo sabía que ocurriría.",
    precio: 13.45,
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-9gpqYdiImK5LtNUj7GBmzJNvH7JTkxpiBg&s",
    category: "Narrativa",
  },
  {
    id: 8,
    nombre: "Matar a un ruiseñor",
    descripcion:
      "Una historia sobre justicia y racismo en el sur de Estados Unidos.",
    precio: 15.8,
    imagen: "https://m.media-amazon.com/images/I/81+j6JIEweL._AC_UF894,1000_QL80_.jpg",
    category: "Drama",
  },
  {
    id: 9,
    nombre: "El Hobbit",
    descripcion:
      "Las aventuras de Bilbo Bolsón en su viaje para recuperar un tesoro robado por un dragón.",
    precio: 17.6,
    imagen: "https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg",
    category: "Fantasía",
  },
  {
    id: 10,
    nombre: "Orgullo y prejuicio",
    descripcion:
      "Una historia de amor y diferencias sociales en la Inglaterra del siglo XIX.",
    precio: 14.2,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjair-DRByCIYUgsH32dD1xmaKllGBm3LBZA&s",
    category: "Romance",
  },
];


const initialState = {
  books: initialBooks,
  category: "Todas",
  search: "",
};

export const shopReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCategory, (state, action) => {
    state.category = action.payload;
  });

  builder.addCase(changeSearch, (state, action) => {
    state.search = action.payload;
  });
});
