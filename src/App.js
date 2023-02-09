import logo from "./icon.png";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <div class="menu">
          <img src="./logo-pasteleria.png" alt="" />
          <nav>
            <ul>
              <li>
                <a href="#">Inicio</a>
              </li>
              <li>
                <a href="#">Tienda</a>
              </li>
              <li>
                <a href="#">Nosotros</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="container-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="icon-cart"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          <div class="count-products">
            <span id="contador-productos">0</span>
          </div>
          <div class="container-cart-products hidden-cart">
            <div class="cart-product">
              <div class="info-cart-product">
                <span class="cantidad-producto-carrito">1</span>
                <p class="titulo-producto-carrito">Zapatos Nike</p>
                <span class="precio-producto-carrito">$1,800</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon-close"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div class="cart-total">
              <h3>Total:</h3>
              <span class="total-pagar">$200</span>
            </div>
          </div>
        </div>
      </header>
      <div class="container-items">
        <div class="item">
          <figure>
            <img
              src="https://cdn.shopify.com/s/files/1/0262/5080/5306/products/ONL_ELGLOBO_PastelSalo_unFamiliar_3_500x.jpg?v=1647033227"
              alt="producto"
            />
          </figure>
          <div class="info-product">
            <h2>Pastel salón cero azúcar</h2>
            <p class="price">$520</p>
            <button>Añadir al carrito</button>
          </div>
        </div>
        <div class="item">
          <figure>
            <img
              src="https://cdn.shopify.com/s/files/1/0262/5080/5306/products/ONL_ELGLOBO_GaribaldiRojoCorazo_un_2_1100x.jpg?v=1643133128"
              alt="producto"
            />
          </figure>
          <div class="info-product">
            <h2>Garibaldi corazón</h2>
            <p class="price">$25</p>
            <button>Añadir al carrito</button>
          </div>
        </div>
        <div class="item">
          <figure>
            <img
              src="https://cdn.shopify.com/s/files/1/0262/5080/5306/products/ONL_ELGLOBO_PastelStrawberryCeroAzu_ucarFamiliar_3_500x.jpg?v=1673289196"
              alt="producto"
            />
          </figure>
          <div class="info-product">
            <h2>Pastel strawberry</h2>
            <p class="price">$480</p>
            <button>Añadir al carrito</button>
          </div>
        </div>
        <div class="item">
          <figure>
            <img
              src="https://cdn.shopify.com/s/files/1/0262/5080/5306/products/ML_ELGLOBO_pastel-snickers-e-commerce-512X402-A_500x.jpg?v=1671737942"
              alt="producto"
            />
          </figure>
          <div class="info-product">
            <h2>Paster snickers</h2>
            <p class="price">$510</p>
            <button>Añadir al carrito</button>
          </div>
        </div>
        <div class="item">
          <figure>
            <img
              src="https://cdn.shopify.com/s/files/1/0262/5080/5306/products/ONL_ELGLOBO_PastelOteloCorazo_un_2_1100x.jpg?v=1643133202"
              alt="producto"
            />
          </figure>
          <div class="info-product">
            <h2>Otelo corazón</h2>
            <p class="price">$145</p>
            <button>Añadir al carrito</button>
          </div>
        </div>
      </div>
      <script src="index.js"></script>
    </>
  );
}

export default App;
