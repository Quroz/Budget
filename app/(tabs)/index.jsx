import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import services from "../../utils/services"
import { Link, useRouter } from "expo-router"
import { client } from "../../utils/KindeConfig"

const TabsHome = () => {
    const router = useRouter();

    useEffect(() => {
        checkUserAuth()
    }, []);

    const checkUserAuth = async () => {
        console.log("hej")
        const result = await services.getData("login")
        if (result !== "true") {
            router.replace("/login")
        }
    }

    return (
        <View>
            <Text>TEEEST</Text>
        </View>
    );
};

export default TabsHome;
