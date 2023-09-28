import React from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { global_styles } from '../styles/global';
import Button from '../custom-nativ-components/Button';


const Navbar = () => {
    return (
        <View style={global_styles.navbar}>
            {/* <Button onPress={() => {
                console.log(43534)
            }} /> */}
            <Text style={{ fontSize: 20, fontWeight: '600', color: 'black' }}>
                Gemstore
            </Text>

            {/* <Icon name="search" type="font-awesome" color="#555" /> */}
            {/* <TextInput
                style={styles.input}
                placeholder="Search..."
            // onChangeText={onSearch}
            /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 10,
    },
    input: {
        flex: 1,
        marginLeft: 10,
    },
});

export default Navbar;