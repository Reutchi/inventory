import React, { useState } from 'react';
import './add-product.scss'
import {TOGGLE_MODAL} from "../../store/modules/products.js";
import {useDispatch} from "react-redux";

const AddProduct = ({ onAddProduct }) => {
    const dispatch = useDispatch()
    const [productName, setProductName] = useState('');
    const [productQuantity, setProductQuantity] = useState('');
    const [sold, setSold] = useState(0)
    const handleAddProduct = () => {
        if (productName && productQuantity) {
            const newProduct = {
                id: new Date().toLocaleTimeString(),
                name: productName,
                sold: sold,
                quantity: productQuantity,
            };

            onAddProduct(newProduct);
            setProductName('');

        } else {
            alert('Completează toate câmpurile.');
        }
    };


    return (
        <form className='add-production-section'>
            <h2>Adaugă Produs Nou</h2>
            <div>
                    <label>Nume Produs:</label> <br/>
                    <input
                        placeholder='Aici adauga denumirea produsului'
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}/>
                </div>
                <div>
                    <label>Cantitate:</label> <br/>
                    <input placeholder='Aici adauga cantitatea buc / kg / ml'
                           type="text"
                           value={productQuantity}
                           onChange={(e) => setProductQuantity(e.target.value)}/>
                </div>
                <button type="button" onClick={handleAddProduct}>Adaugă Produs</button>
        </form>
    );
};

export default AddProduct;
