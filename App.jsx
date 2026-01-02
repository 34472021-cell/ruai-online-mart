import { useState } from "react";
import { CartProvider } from "./context/CartContext";
import Shop from "./pages/Shop";
import Checkout from "./components/Checkout";
import OrderConfirmation from "./components/OrderConfirmation";

const products = [
  { id: 1, name: "Item A", price: 500, image: "/item.jpg", description: "Nice item" }
];

const App = () => {
  const [step, setStep] = useState("shop");

  return (
    <CartProvider>
      {step === "shop" && <Shop products={products} onCheckout={() => setStep("checkout")} />}
      {step === "checkout" && <Checkout onComplete={() => setStep("done")} />}
      {step === "done" && <OrderConfirmation />}
    </CartProvider>
  );
};

export default App;
