import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { getCategories } from 'src/services/categoriesService';

function Navigation() {

    const [categories, setCategories] = useState<string[]>([])

    useEffect(() => {

        const fetchCategories = async () => {
            try {
                const categoriesData = await getCategories()
                console.log(`[🚀] Navigation.tsx → fetchCategories -> categoriesData ::`, categoriesData);
                setCategories(categoriesData)
            } catch (error) {
                console.error('Error fetching Categories:', error)
            }
        }

        console.log("Hey")
        fetchCategories();

    }, [])

    return (
        <header>
            <nav className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="flex flex-1 items-center justify-center">
                            <div className="flex flex-shrink-0 items-center">
                                <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
                            </div>
                            <div className="sm:ml-6 sm:block">
                                <div className="flex space-x-4">
                                    {categories.map((category, idx) => (
                                        <Link className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" key={idx} href={category}>{category}</Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </header>
    )
}

export default Navigation
