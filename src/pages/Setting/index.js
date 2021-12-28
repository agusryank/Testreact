import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const index = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Setting</Text>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center'
        
    },
    text:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    }
})
