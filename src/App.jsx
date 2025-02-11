import './App.css'
import Navbar from './Navbar'
import Body from './Body'
import Footer from './Footer'

const libros = [
  {
    name: "El principito",
    description: "Un clásico de la literatura que narra la historia de un pequeño príncipe y sus reflexiones sobre la vida y la amistad.",
    price: 9.99
  },
  {
    name: "1984",
    description: "Una novela distópica de George Orwell que explora los peligros del totalitarismo y la vigilancia extrema.",
    price: 12.50
  },
  {
    name: "Cien años de soledad",
    description: "La obra maestra de Gabriel García Márquez, que narra la historia de la familia Buendía en el pueblo de Macondo.",
    price: 14.99
  },
  {
    name: "Don Quijote",
    description: "La novela de Miguel de Cervantes que sigue las aventuras de un caballero idealista y su fiel escudero, Sancho Panza.",
    price: 19.99
  },
  {
    name: "Orgullo y prejuicio",
    description: "Una novela de Jane Austen que explora el amor, la clase social y los malentendidos en la Inglaterra del siglo XIX.",
    price: 11.75
  },
  {
    name: "Matar a un ruiseñor",
    description: "Un libro de Harper Lee que trata sobre la justicia y el racismo en el sur de los Estados Unidos.",
    price: 13.25
  },
  {
    name: "Crimen y castigo",
    description: "Un clásico de Dostoievski que sigue la lucha moral de un joven después de cometer un crimen.",
    price: 15.50
  },
  {
    name: "Los juegos del hambre",
    description: "Una novela distópica de Suzanne Collins sobre una sociedad opresiva y un torneo mortal.",
    price: 10.99
  },
  {
    name: "La metamorfosis",
    description: "Una novela de Franz Kafka que narra la historia de un hombre que se despierta transformado en un insecto gigante.",
    price: 8.99
  },
  {
    name: "Dorian Gray",
    description: "Una novela de Oscar Wilde que explora la moralidad y la decadencia a través de la historia de un joven que no envejece.",
    price: 11.50
  },
  {
    name: "Fahrenheit 451",
    description: "Una novela de Ray Bradbury que describe una sociedad futura donde los libros están prohibidos y son quemados.",
    price: 10.75
  },
  {
    name: "El guardián",
    description: "Una novela de J.D. Salinger que sigue las experiencias de un adolescente rebelde en Nueva York.",
    price: 9.50
  }
];

function App() {

  console.log("Se renderizo el componente App");


  return (
    <>
    <div>
      <Navbar></Navbar>
      <Body books={libros}></Body>
      <Footer></Footer>
    </div>
    </>
  ) 
}
export default App;
