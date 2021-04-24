import React from 'react';
import {StyleSheet, Button, View, Text } from 'react-native';

export default function Sandbox() {
    return(
        <View style={styles.container}>
        <Text style={styles.onebox}>one</Text>
        <Text style={styles.twobox}>two</Text>
        <Text style={styles.threebox}>three</Text>
        <Text style={styles.fourbox}>four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        backgroundColor:'#eee',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems: 'flex-end',
    },
    onebox: {
        flex: 5,
        backgroundColor:'violet',
        padding:10,
    },
    twobox: {
        flex: 10,
        backgroundColor:'coral',
        padding:20,
    },
    threebox: {
        flex: 5,
        backgroundColor:'gold',
        padding:30,
    },
    fourbox: {
        flex: 2,
        backgroundColor:'yellow',
        padding:40,
    },
});