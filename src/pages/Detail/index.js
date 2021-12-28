import React from 'react'
import {StyleSheet, Text, View, ScrollView} from 'react-native'

const index = ({route}) => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>
                {route.params.data.title}
            </Text>
            <View style={styles.line}></View>
            <Text
                    style={{
                    textAlign: 'center',
                    color: "black",
                    marginTop: 5,
                    fontWeight: 'bold',
                    fontSize: 18
                }}>
                    {route.params.data.user_id}
                </Text>
            <View style={styles.container1}>
                
                <Text style={styles.text}>
                    {route.params.data.body}
                </Text>
            </View>
        </ScrollView>

    )
}

export default index

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    container1: {
        padding: 10
    },
    text: {
        color: "black",
        marginTop: 5,
        fontStyle: 'italic',
        fontSize: 18,
        fontFamily: 'Arial',
        textAlign: 'justify'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: "black"
    },
    line: {
        height: 1,
        backgroundColor: 'black',
        marginVertical: 20
    }
})