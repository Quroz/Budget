import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Colors from "../utils/Colors"
import { client } from "../utils/KindeConfig"
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import services from '../utils/services';
import { useRouter } from "expo-router"

const Header = () => {

    const [user, setUser] = useState("")
    const router = useRouter()

    useEffect(() => {
        getUserDetails()
    }, [])

    const getUserDetails = async () => {
        const user = await client.getUserDetails()
        setUser(user)
    }

    const handleLogout = async () => {
        const loggedOut = await client.logout();
        console.log(loggedOut)
        if (loggedOut) {
            await services.storeData("login", "false")
            router.replace("/login")
        }
    }

    return (
        <View style={{ backgroundColor: Colors.PRIMARY, width: "100%", height: 150, padding: 20, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                <Image source={{ uri: user.picture }} style={{ height: 50, width: 50, borderRadius: 99 }} />
                <View>
                    <Text style={{ color: "white", fontFamily: "outfit", fontSize: 17 }}>Welcome,</Text>
                    <Text style={{ color: "white", fontFamily: "outfit-bold", fontSize: 19 }}>{user.given_name}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={handleLogout}>
                <SimpleLineIcons name="logout" size={20} color="white" />
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})