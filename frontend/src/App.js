import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div>
          <div className="d-flex flex-column site-container">
        <header>
           <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>SaaJ</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
        </header>
        <main>
             <Container>
            <Routes>
              <Route path="/product/:slug" element={<ProductPage />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Container>
        </main>
         <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
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