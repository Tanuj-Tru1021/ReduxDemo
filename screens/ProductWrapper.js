import React from 'react';
import { Button, ScrollView, View } from 'react-native';
import Header from '../components/Header';
import Product from '../components/Product';

const ProductWrapper = ({ navigation }) => {

    const products = [
        {
            id: 1,
            name: 'Samsung S20',
            description: 'Samsung S20 is a smartphone with 5G connectivity.',
            color: 'Black',
            price: 30000,
            image: 'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png'
        },
        {
            id: 2,
            name: 'Apple iPhone 12',
            description: 'Apple iPhone 12 is a smartphone with 5G connectivity.',
            color: 'Green',
            price: 40000,
            image: 'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png'
        },
        {
            id: 3,
            name: 'Google Pixel 6',
            description: 'Google Pixel 6 is a smartphone with 5G connectivity.',
            color: 'Blue',
            price: 35000,
            image: 'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png'
        },
        {
            id: 4,
            name: 'Apple iPhone 15',
            description: 'Apple iPhone 15 is a smartphone with 5G connectivity.',
            color: 'Red',
            price: 60000,
            image: 'https://www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png'
        },
    ];

    return (
        <View style={{ flex: 1 }}>
            <Header />
            <Button title="Go to User List" onPress={() => navigation.navigate('UserList')} />
            <ScrollView>
                {products.map((product) => <Product product={product} key={product.id} />)}
            </ScrollView>
        </View>
    );
}

export default ProductWrapper;
