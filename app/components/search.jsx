"use client"
import { useDispatch, useSelector } from 'react-redux';
import { setsearch } from '../redux/slices/product_slice';
import { useRouter } from 'next/navigation';

export function Search() {

    const searchterm = useSelector((state) => state.products.search);
    const dispatch = useDispatch();
    const router = useRouter();

    const handleSearchChange = (e) => {
        const newSearchTerm = e.target.value;
        dispatch(setsearch(newSearchTerm));

        // Update the URL query parameters
        const query = new URLSearchParams(window.location.search);
        query.set('search', newSearchTerm); //set live search vaule 
        router.push(`${window.location.pathname}?${query.toString()}`);
    };

    return (
        <div className="mb-6">
            <div class="flex items-center p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
                <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span class="sr-only">Info</span>
                <div>
                    <span class="font-medium">Note!</span> Search will only work for Product title.
                </div>
            </div>
            <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchterm}
                onChange={handleSearchChange}
            />
        </div>
    )
}