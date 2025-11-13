import React from "react";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>🛍️ Ecommerce</div>
      <ul style={styles.links}>
        <li><a style={styles.link} href="#">Inicio</a></li>
        <li><a style={styles.link} href="#">Productos</a></li>
        <li><a style={styles.link} href="#">Ofertas</a></li>
        <li><a style={styles.link} href="#">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 30px",
    backgroundColor: "#282c34",
    color: "white",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  links: {
    display: "flex",
    gap: "20px",
    listStyle: "none",
    margin: 0,
    padding: 0,
    color: "white",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
};

export default NavBar;
