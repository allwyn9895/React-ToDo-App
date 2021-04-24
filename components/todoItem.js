import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function TodoItem({item, pressHandler}) {
    
    return  (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
            <AntDesign name="checkcircle" size={18} color="black" />
            <Text style={styles.itemText}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop:16,
        flexDirection:'row',
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
    },
    itemText: {
        marginLeft: 10,

    }
})