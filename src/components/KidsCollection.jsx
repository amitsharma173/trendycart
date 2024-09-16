import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from '../components/ProductItem';
import Title from '../components/Title';

const KidsCollection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const applyFilter = () => {
    // Filter only "Kids" category products
    let productsCopy = products.slice(0,30);
    productsCopy = productsCopy.filter(item => item.category === 'Kids');

    setFilterProducts(productsCopy);
  };

  // Sort products
  const sortProducts = () => {
    let fpCopy = filterProducts.slice();
    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [products, search, showSearch]);

  useEffect(() => {
    sortProducts();
  }, [sortType]);

  return (
    <div className='my-10'>

<div className='text-center py-8 text-3xl'>
<Title text1={'KIDS'} text2={'COLLECTIONS'} />
  <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
  Let your kids shine in outfits that are as unique and fun as they are! Explore our Kids Collection today and find the perfect look for your little trendsetters.

 </p>  
</div>
      
      {/* Map Products */}
      <div className=' items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4 gap-y-6 '>
        {filterProducts.map((item, index) => (
          <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
        ))}
      </div>
    </div>
  );
};

export default KidsCollection;
