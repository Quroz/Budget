import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { client } from '../utils/KindeConfig'
import { supabase } from '../utils/SupabaseConfig'

const Categories = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategory()
    }, [])

    const getCategory = async () => {
        const user = await client.getUserDetails()
        const { data, error } = await supabase.from("Category").select("*, CategoryItems(*)").eq("created_by", user.email)
        console.log("Data", data)
        console.log("Error", error)
        setCategories(data)
    }
    return (
        <View style={{ gap: 10 }}>
            {categories?.map((category, index) => (
                <View style={{ padding: 10, backgroundColor: "white", borderRadius: 15, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} key={index}>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                        <View style={{ backgroundColor: category?.color, height: 70, width: 70, borderRadius: 20, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ fontSize: 35 }}>{category?.icon}</Text>
                        </View>
                        <View>
                            <Text style={{ fontFamily: "outfit-bold", fontSize: 20, }}>{category?.name}</Text>
                            <Text style={{ fontFamily: "outfit-regular" }}>{category?.CategoryItems?.length} items</Text>
                        </View>
                    </View>
                    <Text style={{ fontFamily: "outfit-bold", fontSize: 20 }}>$5000</Text>
                </View>
            ))}
        </View>

    )
}

export default Categories

const styles = StyleSheet.create({})