"use client"
import Image from 'next/image';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setallproducts, setcategoryproducts ,setcurrentpage} from '../redux/slices/product_slice';

export function Products() {

    // get values from redux
    const selectedCategory = useSelector((state) => state.category); 
    const { cate_products, search , currentPage,productsPerPage } = useSelector((state) => state.products);

    const dispatch = useDispatch();
    useEffect(() => {
        const getdata = async () => {

            const response = await axios.get('https://dummyjson.com/products?limit=50');
            dispatch(setallproducts(response.data.products));

        }
        getdata();
    }, [dispatch]);

    useEffect(() => {
        dispatch(setcategoryproducts(selectedCategory)); 
    }, [selectedCategory, dispatch]);

    // for search 
    const results = cate_products.filter(product =>
        product.title.toLowerCase().includes(search.toLowerCase())
    );

     // Pagination logic
     const indexOfLastProduct = currentPage * productsPerPage;
     const indexOfFirstProduct = indexOfLastProduct - productsPerPage; 
     const currentProducts = results.slice(indexOfFirstProduct, indexOfLastProduct);
 
     const totalPages = Math.ceil(results.length / productsPerPage);
 
     const handlePageChange = (pageNumber) => {
         dispatch(setcurrentpage(pageNumber)); // Update the current page
     };

    return (
        <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProducts.length > 0 ? (
            currentProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <Image src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover"
                        width={100}
                        height={192}
                    />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                        <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
                        <span>{product.category}</span>
                        {/* <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 flex items-center justify-center">
                <ShoppingCart size={20} className="mr-2" />
                Add to Cart
              </button> */}
                    </div>
                </div>
            ))
        ) : (
            <p className="col-span-3 text-center">No products found.</p> // Handle no results
        )}
        </div>

<div className="flex justify-center mt-6">
{Array.from({ length: totalPages }, (_, index) => (
    <button
        key={index + 1}
        onClick={() => handlePageChange(index + 1)}
        className={`mx-1 px-3 py-1 rounded-md ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
    >
        {index + 1}
    </button>
))}
</div>
</div>
    )
}