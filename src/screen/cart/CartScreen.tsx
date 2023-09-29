import React from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import TouchableOpacityButton from '../../components/button/TouchableOpacityButton';
import { assets_images } from '../../assets/assets_images';

export default function CartScreen() {
    return (
        <View style={styles.page} >
            {/* subtotal and checkout  */}
            <View>
                {/* <Text style={styles.subtotalText}>Subtotal ({products.length} items):
                    <Text style={styles.subtotalAmount}> ₹{totalPrice.toFixed(2)}</Text>
                </Text> */}
                <TouchableOpacityButton
                    containerStyles={{ backgroundColor: 'red' }}
                    onPress={() => console.log(345435)}
                    text='fsdlffl'
                    image={assets_images.arrow_right_dark}
                />
            </View>

            {/* Render Product Items  */}
            {/* <FlatList
                data={products}
                renderItem={
                    ({ item }) =>
                        //    render product item
                        <CartProductItem cartItem={item} />
                }
                showsVerticalScrollIndicator={false}
            /> */}
        </View>
    );
}


const styles = StyleSheet.create({
    page: {
        padding: 10,
    },
    subtotalText: {
        fontSize: 15,
    },
    subtotalAmount: {
        color: '#e47911',
        fontWeight: 'bold',
    },
});
