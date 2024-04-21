import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import loginBg from "./../../assets/loginBg.jpeg"
import Colors from '../../utils/Colors'
import { client } from "../../utils/KindeConfig"
import services from '../../utils/services'
import { useRouter } from "expo-router"

const LoginScreen = () => {

    const router = useRouter();

    const handleLogin = async () => {
        try {
            const token = await client.login();
            if (token) {
                await services.storeData("login", "true")
                router.replace("/")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ marginTop: 70, alignItems: "center" }}>
                <Image source={loginBg} style={{
                    width: 200,
                    height: 400,
                    borderWidth: 5,
                    borderRadius: 20,
                    borderColor: Colors.BLACK
                }} />
            </View>
            <View style={{
                backgroundColor: Colors.PRIMARY,
                width: "100%",
                flex: 1,
                padding: 20,
                marginTop: -30,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30
            }}>
                <Text style={{ fontSize: 35, fontWeight: "bold", color: Colors.WHITE, textAlign: "center" }}>Personal Budget Planner</Text>
                <Text style={{ color: Colors.WHITE, textAlign: "center", fontSize: 17, marginTop: 20 }}>Stay on Track, Event by Event. Your Personal Budget Planner App!</Text>
                <TouchableOpacity style={{ marginTop: 20, padding: 17, backgroundColor: Colors.WHITE, borderRadius: 99, color: Colors.PRIMARY }}>
                    <Text style={{ textAlign: "center" }} onPress={handleLogin}>Login/Signup</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 13, color: Colors.GRAY, marginTop: 10 }}>* By login/signup you will agree to our terms and conditions</Text>
            </View>
        </View >
    )
}

export default LoginScreen

const styles = StyleSheet.create({})