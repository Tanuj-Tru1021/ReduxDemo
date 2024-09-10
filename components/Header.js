import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const Header = () => {

    const cart = useSelector((state) => state.reducer.cart)
    const [cartCount, setCartCount] = useState(0)
    console.log(cart, 'cart')

    useEffect(() => {
        setCartCount(cart.length)
    }, [cart])
    return (
        <View style={{ paddingVertical: 8, paddingHorizontal: 16, backgroundColor: 'black' }}>
            <Text style={{ fontSize: 16, fontWeight: '600', color: 'white', textAlign: 'right' }}>
                Cart - {cartCount}
            </Text>
        </View>
    );
}

export default Header;
