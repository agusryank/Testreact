import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity, ActivityIndicator} from 'react-native'
import axios from 'axios'
import {useState, useEffect} from 'react'
import {FlatList} from 'react-native-gesture-handler'


const index = ({navigation}) => {
    const [users,
        setUsers] = useState([]);

    const [curentPage,
        setCurrentPage] = useState(1);

    const [isLoading,
        setIsLoading] = useState(false);

    const getUser = () => {
        setIsLoading(true);
        axios
            .get('https://gorest.co.in/public/v1/posts?page=' + curentPage)
            .then(res => {
                setUsers([
                    ...users,
                    ...res.data.data
                ])
                setIsLoading(false);
            });
    };

    const renderItem = ({item}) => {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Id :{item.id}
                </Text>
                <Text style={styles.text}>User Id :{item.user_id}
                </Text>
                <Text style={styles.text}>Tittle :{item.title}
                </Text>
                <View style={styles.container1}>
                    <TouchableOpacity
                        style={styles.text}
                        onPress={() => navigation.navigate('Detail', {data:item})}>
                        <Text style={styles.tombol}>More Detail</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.line}></View>
            </View>
        )
    };

    const renderLoader = () => {
        return (isLoading
            ? <View style={styles.loaderstyle}>
                    <ActivityIndicator size={'large'} color={"#aaa"}/>
                </View>
            : null)
    }

    const loadMoreItem = () => {
        setCurrentPage(curentPage + 1);
    }

    useEffect(() => {
        getUser();
    }, [curentPage])

    return ( 
     <FlatList
        data={users}
        keyExtractor={item => item.user_id}
        renderItem={renderItem}
        ListFooterComponent={renderLoader}
        onEndReached={loadMoreItem}
        onEndReachedThreshold={0}/> 
)
}

export default index

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    container1: {
        alignItems: 'center'
    },
    text: {
        color: "black",
        marginTop: 5,
        fontStyle: 'italic',
        fontSize: 18,
        fontFamily: 'Arial'
    },
    line: {
        height: 1,
        backgroundColor: 'black',
        marginVertical: 20
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: "black"
    },
    tombol: {
        backgroundColor: 'skyblue',
        fontSize: 18,
        color: 'black',
        padding: 10,
        borderRadius: 5,
        width: '100%'
    },
    loaderstyle: {
        marginVertical: 16,
        alignItems: 'center' 
    }
})