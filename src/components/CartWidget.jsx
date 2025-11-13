import React from "react";

function CartWidget() {
  return (
    <div style={styles.cart}>
      🛒
      <span style={styles.badge}>0</span>
    </div>
  );
}

const styles = {
  cart: {
    position: "relative",
    fontSize: "1.5rem",
    cursor: "pointer",
  },
  badge: {
    position: "absolute",
    top: "-5px",
    right: "-10px",
    backgroundColor: "red",
    color: "white",
    borderRadius: "50%",
    padding: "2px 6px",
    fontSize: "0.8rem",
  },
};

export default CartWidget;
