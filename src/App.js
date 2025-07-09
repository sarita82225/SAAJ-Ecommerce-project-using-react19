import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">SAAJ</Link>
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<ProductPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;




// import data from './data';

// function App() {
//   return (
//     <BrowserRouter>
//     <div>
//       <header>
//         <a href="/">SAAJ</a>
//       </header>
//       <main>
//         <Router>

//         </Router>
//         <h1>Featured Products</h1>
//         <div className="products">
//           {data.products.map((product) => (
//             <div className="product" key={product.slug}>
//               <a href={`/product/${product.slug}`}>
//                 <img src={product.image} alt={product.name} />
//               </a>
//               <div className="product-info">
//                 <a href={`/product/${product.slug}`}>
//                   <p>{product.name}</p>
//                 </a>
//                 <p>
//                   <strong>${product.price}</strong>
//                 </p>
//                 <button>Add to cart</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//     </BrowserRouter>
//   );
// }

// export default App;