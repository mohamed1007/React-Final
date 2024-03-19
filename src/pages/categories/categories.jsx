import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './categories.css';
import { Link } from 'react-router-dom';
import CategoryPoster from '../../components/categoryPoster/categoryPoster';

export default function Categories() {
    const [categories, setCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const categoriesPerPage = 10;

    const getCategories = async () => {
        try {
            const { data } = await axios.get('http://localhost:3000/getAllCategories');
            setCategories(data.allCategories);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    }

    useEffect(() => {
        getCategories();
    }, []);

    // Get current categories
    const indexOfLastCategory = currentPage * categoriesPerPage;
    const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
    const currentCategories = categories.slice(indexOfFirstCategory, indexOfLastCategory);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className='container-fluid'>
            <div className="container">
                <CategoryPoster />
            </div>
            <h2 className="category-header mt-5">All Categories</h2>
            <div className="cards-cont mt-5 mb-5">
                <div className="row">
                    {currentCategories.map((category, index) => (
                        <div className='col-lg-6 p-5' key={index}>
                            <Link to={`/category/${category.name}`} className="category-link">
                                <img src={category.image} alt={category.name} className="category-image" />
                                <h5 className="category-name">{category.name}</h5>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <nav>
                <ul className="pagination justify-content-center">
                    {Array.from({ length: Math.ceil(categories.length / categoriesPerPage) }, (_, i) => (
                        <li className={`page-item ${currentPage === i + 1 ? 'active' : ''}`} key={i}>
                            <button className="page-link" onClick={() => paginate(i + 1)}>{i + 1}</button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
