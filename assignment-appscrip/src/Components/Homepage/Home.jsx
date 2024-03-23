



import React, { useState, useEffect } from 'react';

import "./Home.css";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [showFilter, setShowFilter] = useState(false);
    const [showIdealForOptions, setShowIdealForOptions] = useState(false);
    const [showShortingOption, setShowShortingOption] = useState(false);
    const [filters, setFilters] = useState({
        category: [],
        price: []
    });

    const getProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    };

    useEffect(() => {
        fetchProducts(); // Fetch products when component mounts
    }, []);

    const fetchProducts = async () => {
        try {
            const data = await getProducts();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const toggleFilter = () => {
        setShowFilter(!showFilter);
    };

    const toggleIdealForOptions = () => {
        setShowIdealForOptions(!showIdealForOptions);
    };
    const toggleShortinOptions = () => {
        setShowShortingOption(!showShortingOption);
    };

    // Handle filter selection
    const handleFilterChange = (filterType, value) => {
        const updatedFilters = { ...filters };

        if (filterType === 'sort') {
            updatedFilters.sort = value; // Set the sorting option
        } else {
            if (!updatedFilters[filterType]) {
                updatedFilters[filterType] = []; // Initialize filter array if not exists
            }

            if (updatedFilters[filterType].includes(value)) {
                updatedFilters[filterType] = updatedFilters[filterType].filter(item => item !== value);
            } else {
                updatedFilters[filterType].push(value);
            }
        }
        setFilters(updatedFilters);
    };

    const renderFilters = () => {
        return (
            <div className="filters">
                
                <div className="filter-option">
                    <div onClick={toggleIdealForOptions} style={{cursor:"pointer"}}>{showIdealForOptions ?<h4>Ideal For &#x25B2;</h4> : <h4>Ideal For &#x25BC;</h4>}</div>
                    {showIdealForOptions && (
                        <div>
                            <label>
                                <input type="checkbox" value="men's clothing" onChange={(e) => handleFilterChange('category', e.target.value)} />
                                Men's Clothing
                            </label>
                            <br />
                            <label>
                                <input type="checkbox" value="women's clothing" onChange={(e) => handleFilterChange('category', e.target.value)} />
                                Women's Clothing
                            </label>
                            <br />
                            <label>
                                <input type="checkbox" value="electronics" onChange={(e) => handleFilterChange('category', e.target.value)} />
                                Electronics
                            </label>
                            <br />
                            <label>
                                <input type="checkbox" value="jewelery" onChange={(e) => handleFilterChange('category', e.target.value)} />
                                Jewelry
                            </label>
                        </div>
                    )}
                </div>

                <div className="filter-option">
                    <div onClick={toggleShortinOptions} style={{cursor:"pointer"}}>{showShortingOption ? <h4>Sorting &#x25B2;</h4> : <h4>Sorting &#x25BC;</h4>}</div>
                    {showShortingOption && (
                        <div>
                            <label>
                                <input type="radio" name="sort" value="lowToHigh" onChange={(e) => handleFilterChange('sort', e.target.value)} />
                                Low to High Price
                            </label>
                            <br />
                            <label>
                                <input type="radio" name="sort" value="highToLow" onChange={(e) => handleFilterChange('sort', e.target.value)} />
                                High to Low Price
                            </label>
                        </div>
                    )}
                </div>

            </div>
        );
    };

    const renderProducts = () => {
        let filteredProducts = [...products];
        // Apply sorting
        if (filters.sort === 'lowToHigh') {
            filteredProducts.sort((a, b) => a.price - b.price);
        } else if (filters.sort === 'highToLow') {
            filteredProducts.sort((a, b) => b.price - a.price);
        }

        // Apply filters
        if (filters.category.length > 0) {
            filteredProducts = filteredProducts.filter(product => filters.category.includes(product.category));
        }

        return (
            <div className='main-container'>
                <div className='filters'> 
                     {showFilter && renderFilters()}
                </div>
            <div className={`products ${showFilter ? 'grid-3' : 'grid-4'}`}>
                {filteredProducts.map(product => (
                    <div key={product.id} className="product">
                        <img src={product.image} alt={product.title} />
                        <p>{product.title}</p>
                    </div>
                ))}
            </div>
            </div>
        );
    };
    // {showFilter && renderFilters()}
    return (
        <div>
            <div className='Discover-text'>
                <h1>DISCOVER OUR PRODUCTS</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, <br />soluta inventore, deleniti fugit id aliasadipisicing elit. Modi consectetur</p>
            </div>

            <div className="filter-and-products">
                <div>
                    <p>3425 Items</p>
                    <div className="filter">
                        <div className="toggle-filter" onClick={toggleFilter}>
                            {showFilter ? <p style={{cursor:"pointer"}}>&gt;  Hide Filter</p> : <p style={{cursor:"pointer"}}>&lt;  Show Filter</p>}
                        </div>
                        
                    </div>
                </div>
                
            </div>

            {renderProducts()}
        </div>
    );
}

export default Home;








