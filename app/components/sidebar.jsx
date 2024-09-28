"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { chooseCategory } from '../redux/slices/category_slice'; 
import { useRouter } from 'next/navigation'; 


export function Sidebar() {
    const [categories, setCategories] = useState([]);
    const router = useRouter();

    const {  search  } = useSelector((state) => state.products);
    const selectedCategory = useSelector((state) => state.category); 
    
    const dispatch = useDispatch(); 
  

    useEffect(() => {

        const getdata = async () => {

            const getcategory = await axios.get('https://dummyjson.com/products/category-list');
            setCategories(getcategory.data)
        }
        getdata();
    }, []);
    
    const handleCategoryChange = (category) => {
        dispatch(chooseCategory(category));

       
        const query = new URLSearchParams({ category : category || '', search: search || '' }).toString();
        router.push(`?${query}`);
    };
    
    return (
        <ul className="space-y-2">
            {categories.slice(0, 6).map((category) => (
                <li
                    key={category}
                    className={`cursor-pointer p-2 rounded ${selectedCategory === category ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'
                        }`}
                    
                    onClick={()=>handleCategoryChange(category)} 

                >
                    {category}
                </li>
            ))}
        </ul>
    )
}