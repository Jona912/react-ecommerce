import React from "react";

function ItemListContainer({ greeting }) {
  return (
    <div style={styles.container}>
      <h2>{greeting}</h2>
      <p>Estamos cargando los productos</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
};

export default ItemListContainer;
