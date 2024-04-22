import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native'
import React, { useState } from 'react'
import Colors from "../utils/Colors"
import { client } from "../utils/KindeConfig"
import { useRouter } from "expo-router"
import { supabase } from "../utils/SupabaseConfig"


const AddNewCategory = () => {


    const [colorSelect, setColorSelect] = useState(Colors.PRIMARY)
    const [name, setName] = useState()
    const [selectedIcon, setSelectedIcon] = useState("IC")
    const [budget, setBudget] = useState(0)
    const router = useRouter()

    const createCategory = async () => {
        const user = await client.getUserDetails()
        const { data, error } = await supabase.from("Category").insert([{
            name: name,
            assigned_budget: budget,
            icon: selectedIcon,
            color: colorSelect,
            created_by: user.email
        }]).select()

        if (data) {
            Alert.alert("Success", "Category created successfully")
            router.replace({
                pathname: "/add-new-category-item",
                params: { categoryId: data[0].id }
            })
        }
    }

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <KeyboardAvoidingView style={{ alignItems: "center" }}>
                <TextInput onChangeText={text => setSelectedIcon(text)} maxLength={2} style={{ backgroundColor: colorSelect, width: 80, height: 80, borderRadius: 99, color: "white", fontSize: 30, textAlign: "center" }}>{selectedIcon}</TextInput>
                <View style={{ marginTop: 20, flexDirection: "row", alignItems: "center", gap: 20 }}>
                    {Colors.COLOR_LIST.map((item, index) => (
                        <TouchableOpacity key={index} onPress={() => setColorSelect(item)}>
                            <View style={[{ height: 40, width: 40, borderRadius: 99, backgroundColor: item }, colorSelect === item && { borderWidth: 4 }]} />
                        </TouchableOpacity>
                    ))}
                </View>
                <TextInput onChangeText={text => setName(text)} style={{ backgroundColor: "white", borderRadius: 10, width: "100%", borderWidth: 1, borderColor: Colors.GRAY, padding: 20, marginTop: 20 }} placeholder='Category Name' />
                <TextInput onChangeText={text => setName(text)} style={{ backgroundColor: "white", borderRadius: 10, width: "100%", borderWidth: 1, borderColor: Colors.GRAY, padding: 20, marginTop: 20 }} placeholder='Total Budget' keyboardType='number-pad' />
                <TouchableOpacity style={{ backgroundColor: Colors.PRIMARY, borderRadius: 10, width: "100%", padding: 20, marginTop: 20 }}
                    onPress={createCategory}
                >
                    <Text style={{ color: "white", textAlign: "center" }}>Create</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
}

export default AddNewCategory

const styles = StyleSheet.create({})