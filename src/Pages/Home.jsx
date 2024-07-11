import React, { useEffect, useState } from 'react';
import usePageTitle from '../Hooks/usePageTitle';
import fetcher from '../Helpers/fetcher';
import ProductList from '../Components/Home/ProductList';
import fakeData from '../Database/FakeData';

function Home() {

  usePageTitle(`E-Redux | Page d'acceuil`);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // const getData = async () => {
    //   try {
    //     const response = await fetcher.get(`/api/v1/products`);
    //     if (response) {
    //       setProducts(response);
    //     } else {
    //       setProducts([]);
    //     }
    //   } catch (error) {
    //     console.log(error);
    //     setProducts([]);
    //   }
    // };
    // getData();
    const data = fakeData;
    setProducts(data);

  }, []);

  return (<>
    <ProductList products={products} />
  </>);
}

export default Home;
