import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import PieChart from 'react-native-pie-chart'
import Colors from '../utils/Colors'

const CircularChart = () => {
    const widthAndHeight = 150
    const [values, setValues] = useState([1])
    const [sliceColor, setSliceColor] = useState([Colors.GRAY])
    return (
        <View style={{ paddingHorizontal: 20, marginTop: -20 }}>
            <View style={{ backgroundColor: Colors.WHITE, padding: 20, borderRadius: 20, gap: 10 }}>
                <Text style={{ fontSize: 20 }}>Total Estimate: <Text style={{ fontWeight: "bold" }}>$5000</Text></Text>
                <View style={{ gap: 10, flexDirection: "row", width: "80%", justifyContent: "space-between" }}>
                    <PieChart
                        widthAndHeight={widthAndHeight}
                        series={values}
                        sliceColor={sliceColor}
                        coverRadius={0.65}
                        coverFill={'#FFF'}
                    />
                    <Text style={{ marginRight: 40 }}>NA</Text>
                </View>
            </View>
        </View>
    )
}

export default CircularChart

const styles = StyleSheet.create({})