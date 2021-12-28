import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {Home, Berita, Setting, Detail} from '../pages'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const DetailBerita = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen
                name='Berita'
                component={Berita}
                options={{
                headerTitleAlign: 'center'
            }}/>
            <Stack.Screen
                name="Detail"
                component={Detail}
                options={{
                headerTitleAlign: 'center'
            }}/>
        </Stack.Navigator>
    )
}


const Router = () => {
    return (

        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                headerShown: false
            }}/>
            <Tab.Screen
                name=" GLS Berita"
                component={DetailBerita}
                options={{
                headerShown: false
            }}/>
            <Tab.Screen
                name="Setting"
                component={Setting}
                options={{
                headerShown: false
            }}/>
        </Tab.Navigator>
    )
}


export default Router

const styles = StyleSheet.create({})
