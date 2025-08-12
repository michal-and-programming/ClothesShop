import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';

const Products = () => {
  const [products]  = useState(productsData);
  const [currentColor, setCurrentColor] = useState(products.map(color => color.colors[0]));
  const [currentSize, setCurrentSize] = useState(products.map(size => size.sizes[0].name));

  const colorChange = (colorId, newColor) => {
    setCurrentColor(prev => {
      return prev.map((color, index) => {
        return products[index].id === colorId ? newColor : color
      });
    });
  };

  const sizeChange = (sizeId, newSize) => {
    setCurrentSize(prev => {
      return prev.map((size, index) => {
        return products[index].id === sizeId ? newSize : size
      });
    });
  };

  return (
    <section>
      {products.map((product, index) => (
        <Product
          key={product.id}
          data={product}
          currentColor={currentColor[index]}
          colorChange={colorChange}
          currentSize={currentSize[index]}
          sizeChange={sizeChange}
        />
      ))}
    </section>
  );
};

export default Products;