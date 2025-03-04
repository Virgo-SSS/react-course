import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ProductList from './ProductList'

createRoot(document.getElementById('root')).render(
  // Strict mode lets you find common bugs in your components early during development
  // Ingat strictmode itu react mencoba untuk memanggil component sebanyak 2x
  <StrictMode>
    <ProductList />
  </StrictMode>,
)
