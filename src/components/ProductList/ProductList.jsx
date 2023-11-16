import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SELL_PRODUCT, SET_QUANTITY_SOLD, TOGGLE_MODAL } from '../../store/modules/products.js';
import { Button } from '../index.js';
import './product-list.scss';

const ProductList = ({ products }) => {
    const dispatch = useDispatch();
    const [localQuantity, setLocalQuantity] = useState({});

    const handleSellInputChange = (productId, event) => {
        const quantity = parseInt(event.target.value, 10) || 0;
        setLocalQuantity((prevLocalQuantity) => ({
            ...prevLocalQuantity,
            [productId]: quantity,
        }));
    };

    const handleSellAllProducts = () => {
        // Trimite o acțiune pentru fiecare produs în parte
        Object.keys(localQuantity).forEach((productId) => {
            const quantity = localQuantity[productId] || 0;
            dispatch(SET_QUANTITY_SOLD({ id: parseInt(productId, 10), quantity }));
            dispatch(SELL_PRODUCT({ id: parseInt(productId, 10), quantity }));
        });

        // Resetează localQuantity
        setLocalQuantity({});
    };

    const handleOpenModal = () => {
        dispatch(TOGGLE_MODAL());
    };

    return (
        <div className='product-tabel-container'>
            <h2>Tabel Produse</h2>
            <table className='product-tabel'>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Nume Produs</th>
                    <th>Vândute</th>
                    <th>Cantitate de Vândut</th>
                </tr>
                </thead>
                <tbody>
                {products.map((product) => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.sold}</td>
                        <td>
                            <input
                                type="number"
                                min="0"
                                value={localQuantity[product.id] || ''}
                                onChange={(e) => handleSellInputChange(product.id, e)}
                            />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className='btn-wrapper'>
                <Button onClick={handleSellAllProducts} title='Vinde Toate' />
                <Button onClick={handleOpenModal} title='Adauga un produs' />
            </div>
        </div>
    );
};

export default ProductList;
