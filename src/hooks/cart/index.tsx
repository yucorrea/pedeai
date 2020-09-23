import React, { useContext, createContext, useState, useEffect } from 'react';

import { products } from '../../mock';

interface RemoveToCart {
  id: number | string;
  amount: number;
}

interface AddToCart {
  id: number | string;
  amount: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  ingredients: [];
  quantity: 0;
  image?: string;
}

interface Amount {
  [key: number]: number;
}

interface SubTotal {
  [key: number]: number;
}

interface CartContext {
  cart: Product[];
  total: number;
  setCart(product: Product[]): void;
  amount: Amount;
  subTotal: SubTotal;
  addToCart({ id, amount }: AddToCart): void;
  removeToCart({ id, amount }: RemoveToCart): void;
  remove(id: number): void;
}

const CartContext = createContext({} as CartContext);

function useCart(): CartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('Context not provider');
  }

  return context;
}

const CartProvider: React.FC = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([] as Product[]);
  const [total, setTotal] = useState(0);
  const [amount, setAmount] = useState<Amount>({} as Amount);
  const [subTotal, setSubTotal] = useState<SubTotal>({} as SubTotal);

  const addToCart = ({ id, amount }: AddToCart) => {
    const findIndex = cart.findIndex(product => product.id === id);

    if (findIndex > -1) {
      const products = cart.map(prod => prod);

      const newCart = products.map(product => {
        if (product.id === id) {
          product.quantity += amount;
        }
        return product;
      });
      setCart(newCart);
      return;
    }

    const product = products.all.find(prod => prod.id === id);

    if (!product) {
      return;
    }

    Object.assign(product, { quantity: 1 });
    setCart(prevState => [...prevState, product]);
  };

  useEffect(() => {
    const amount: Amount = cart.reduce((amount: Amount, item) => {
      amount[item.id] = item.quantity;

      return amount;
    }, {});

    const subTotal: SubTotal = cart.reduce((subTotal: SubTotal, item) => {
      subTotal[item.id] = item.quantity * item.price;

      return subTotal;
    }, {});

    const total = cart.reduce(
      (total, item) => total + Number(subTotal[item.id]),
      0
    );

    setAmount(amount);
    setSubTotal(subTotal);
    setTotal(total);
  }, [cart]);

  const removeToCart = ({ id, amount }: RemoveToCart) => {
    const findIndex = cart.findIndex(product => product.id === id);

    if (findIndex > -1) {
      const products = cart.map(prod => prod);

      const newCart = products.map(product => {
        if (product.id === id && product.quantity > 1) {
          product.quantity -= amount;
        }

        return product;
      });

      setCart(newCart);
    }
  };

  const remove = (id: number) => {
    const products = cart.filter(product => product.id !== id);

    setCart(products);
  };

  return (
    <CartContext.Provider
      value={{
        remove,
        amount,
        setCart,
        subTotal,
        addToCart,
        cart,
        total,
        removeToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, useContext, useCart };
