import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import services from "../../utils/services"
import { Link, useRouter } from "expo-router"
import { client } from "../../utils/KindeConfig"
import Header from '../../components/Header';
import CircularChart from "../../components/CircularChart"
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../utils/Colors';
import Categories from '../../components/Categories';

const TabsHome = () => {
    const router = useRouter();

    useEffect(() => {
        checkUserAuth()
    }, []);

    const checkUserAuth = async () => {
        const result = await services.getData("login")
        if (result !== "true") {
            router.replace("/login")
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <Header />
            <CircularChart />
            <View style={{ padding: 20 }}>
                <Text style={{ marginTop: 20, fontSize: 20, fontWeight: "bold" }}>Latest Budget</Text>
            </View>
            <TouchableOpacity style={{ position: "absolute", right: 16, bottom: 16, zIndex: 100 }} onPress={() => router.push("add-new-category")}>
                <Ionicons name="add-circle" size={64} color={Colors.PRIMARY} />
            </TouchableOpacity>
            <ScrollView style={{ paddingHorizontal: 20 }} showsVerticalScrollIndicator={false}>
                <Categories />
            </ScrollView>
        </View>
    );
};

export default TabsHome;
