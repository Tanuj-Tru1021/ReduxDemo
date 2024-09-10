import React, { useEffect, useState } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from './redux/action';

const Product = ({ product }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.reducer.cart)
    const [isInCart, setIsInCart] = useState(false)

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    }
    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product.id));
    }

    useEffect(() => {
        let result = cartItems.filter(el => el.id === product.id)
        if (result.length) {
            setIsInCart(true)
        } else {
            setIsInCart(false)
        }
    }, [cartItems])
    return (
        <View style={{
            backgroundColor: 'white', borderRadius: 8,
            shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1, shadowRadius: 4,
            elevation: 3, margin: 10, overflow: 'hidden',
        }}>
            <Image
                source={{ uri: product?.image }}
                style={{ width: 150, height: 150, alignSelf: 'center' }}
            />
            <View style={{ padding: 16 }}>
                <Text style={{ fontSize: 20, fontWeight: '600', color: (product?.color).toLowerCase(), marginBottom: 8 }}>
                    {product?.name}
                </Text>
                <Text style={{ fontSize: 14, color: '#666', marginBottom: 8 }}>
                    {product?.description}
                </Text>
                <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 16 }}>
                    {product?.price}
                </Text>
            </View>
            {isInCart ?
                <Button
                    title="Remove from Cart"
                    onPress={() => handleRemoveFromCart(product)}
                />
                :
                <Button
                    title="Add to Cart"
                    onPress={() => handleAddToCart(product)}
                />
            }
        </View>
    );
}

export default Product;
