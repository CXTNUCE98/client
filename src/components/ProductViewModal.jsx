import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import productData from '../assets/fake-data/products';

import { remove } from '../redux/product-modal/productModalSlice';

import ProductView from './ProductView';
import Button from './Button';

const ProductViewModal = () => {
    const productSlug = useSelector((state) => state.productModal.value);

    const dispatch = useDispatch();

    const [product, setProduct] = useState(undefined);

    // const product = productData.getProductBySlug('quan-jean-phong-cach-18');

    useEffect(() => {
        setProduct(productData.getProductBySlug(productSlug));
    }, [productSlug]);

    return (
        <div className={`product-view__modal ${product === undefined ? '' : 'active'}`}>
            <div className="product-view__modal__content">
                <ProductView product={product} />
                <div className="product-view__modal__content__close">
                    <Button size="sm" onClick={() => dispatch(remove())}>
                        Đóng
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductViewModal;
