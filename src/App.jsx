import './App.css'
import Navbar from './Navbar'
import Body from './Body'
import Footer from './Footer'
import { useEffect, useState } from 'react'

// const libros = [
//   {
//     name: "El principito",
//     description: "Un clásico de la literatura que narra la historia de un pequeño príncipe y sus reflexiones sobre la vida y la amistad.",
//     price: 9.99,
//     isStarred: false
//   },
//   {
//     name: "1984",
//     description: "Una novela distópica de George Orwell que explora los peligros del totalitarismo y la vigilancia extrema.",
//     price: 12.50,
//     isStarred: false

//   },
//   {
//     name: "Cien años de soledad",
//     description: "La obra maestra de Gabriel García Márquez, que narra la historia de la familia Buendía en el pueblo de Macondo.",
//     price: 14.99,
//     isStarred: false
//   },
//   {
//     name: "Don Quijote",
//     description: "La novela de Miguel de Cervantes que sigue las aventuras de un caballero idealista y su fiel escudero, Sancho Panza.",
//     price: 19.99,
//     isStarred: false
//   },
//   {
//     name: "Orgullo y prejuicio",
//     description: "Una novela de Jane Austen que explora el amor, la clase social y los malentendidos en la Inglaterra del siglo XIX.",
//     price: 11.75,
//     isStarred: false
//   },
//   {
//     name: "Matar a un ruiseñor",
//     description: "Un libro de Harper Lee que trata sobre la justicia y el racismo en el sur de los Estados Unidos.",
//     price: 13.25,
//     isStarred: false
//   },
//   {
//     name: "Crimen y castigo",
//     description: "Un clásico de Dostoievski que sigue la lucha moral de un joven después de cometer un crimen.",
//     price: 15.50,
//     isStarred: false
//   },
//   {
//     name: "Los juegos del hambre",
//     description: "Una novela distópica de Suzanne Collins sobre una sociedad opresiva y un torneo mortal.",
//     price: 10.99,
//     isStarred: false
//   },
//   {
//     name: "La metamorfosis",
//     description: "Una novela de Franz Kafka que narra la historia de un hombre que se despierta transformado en un insecto gigante.",
//     price: 8.99,
//     isStarred: false
//   },
//   {
//     name: "Dorian Gray",
//     description: "Una novela de Oscar Wilde que explora la moralidad y la decadencia a través de la historia de un joven que no envejece.",
//     price: 11.50,
//     isStarred: false
//   },
//   {
//     name: "Fahrenheit 451",
//     description: "Una novela de Ray Bradbury que describe una sociedad futura donde los libros están prohibidos y son quemados.",
//     price: 10.75,
//     isStarred: false
//   },
//   {
//     name: "El guardián",
//     description: "Una novela de J.D. Salinger que sigue las experiencias de un adolescente rebelde en Nueva York.",
//     price: 9.50,
//     isStarred: false
//   }
// ]

async function fetchApi(url) {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data  
  } catch (error) {
    console.error("Error del fetching data:", error)
  }
}


function App() {

  // ESTADOS
  const [search, setSearch] = useState('')
  const [products, setProducts] = useState([])

  // Funcion para guardar nuevo valor en el input
  function handleSearchChange(e) {
    setSearch(e.target.value)
  }

  // Funcion para guardar en nuevo arreglo el libro seleccionado en favoritos
  function handleFavorite(id) {
    const newProducts = products.map((product) => {
      if (product.id === id) {
        return { ...product, isStarred: !product.isStarred }
      }
      return product
    })
    setProducts(newProducts)
  }

useEffect(() => {
  async function fetchData() {
    const data = await fetchApi("https://fakestoreapi.com/products")
    const newData = data.map(p => { return {
      ...p,
      isStarred:false
    }
  })
    setProducts(newData) // Guarda los productos en el estado
  }
  
  fetchData() // Llamamos a la función al montar el componente

}, []) // Si dependencias esta vacio, se ejecuta solo una vez

console.log(products)

  return (
    <>
      <div>
        <Navbar search={search} handleSearchChange={handleSearchChange} ></Navbar>
        <Body products={products} search={search} handleFavorite={handleFavorite}></Body>
        <Footer></Footer>
      </div>
    </>
  )
}
export default App
