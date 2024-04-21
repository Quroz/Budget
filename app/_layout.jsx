import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from "expo-router"
import { useFonts } from 'expo-font';

const HomeLayout = () => {
    const [fontsLoaded, fontError] = useFonts({
        "outfit": require("../assets/fonts/Outfit-Regular.ttf"),
        "outfit-bold": require("../assets/fonts/Outfit-Bold.ttf"),
        "outfit-medium": require("../assets/fonts/Outfit-Medium.ttf"),
    })
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="add-new-category" options={{ headerShown: true, presentation: "modal", headerTitle: "Add New Category" }} />
        </Stack>
    )
}

export default HomeLayout

const styles = StyleSheet.create({})