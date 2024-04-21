import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Colors from "../utils/Colors"

const AddNewCategory = () => {

    const [colorSelect, setColorSelect] = useState(Colors.PRIMARY)
    const [name, setName] = useState("")
    const [selectedIcon, setSelectedIcon] = useState("IC")
    const [budget, setBudget] = useState(0)

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <View style={{ alignItems: "center" }}>
                <TextInput onChangeText={text => setSelectedIcon(text)} maxLength={2} style={{ backgroundColor: colorSelect, width: 80, height: 80, borderRadius: 99, color: "white", fontSize: 30, textAlign: "center" }}>{selectedIcon}</TextInput>
                <View style={{ marginTop: 20, flexDirection: "row", alignItems: "center", gap: 20 }}>
                    {Colors.COLOR_LIST.map((item, index) => (
                        <TouchableOpacity key={index} onPress={() => setColorSelect(item)}>
                            <View style={[{ height: 40, width: 40, borderRadius: 99, backgroundColor: item }, colorSelect === item && { borderWidth: 4 }]} />
                        </TouchableOpacity>
                    ))}
                </View>
                <TextInput onChangeText={text => setName(text)} style={{ backgroundColor: "white", borderRadius: 10, width: "100%", borderWidth: 1, borderColor: Colors.GRAY, padding: 20, marginTop: 20 }} placeholder='Category Name' />
                <TextInput onChangeText={text => setName(text)} style={{ backgroundColor: "white", borderRadius: 10, width: "100%", borderWidth: 1, borderColor: Colors.GRAY, padding: 20, marginTop: 20 }} placeholder='Total Budget' />
            </View>
        </View>
    )
}

export default AddNewCategory

const styles = StyleSheet.create({})