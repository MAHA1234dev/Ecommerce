import { Divider, useTheme } from "@rneui/themed";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Image, Text } from "react-native";
import { View } from "react-native";
import { Card, RadioButton } from "react-native-paper";

const paymentOptions = [
    {
        type: "Paytm",
        uri: require('../../assets/cart/paytm.webp')

    },
    {
        type: "Google Pay",
        uri: require('../../assets/cart/googlepay.png')
    },
    {
        type: "Cash on Delivery(cash/upi)",
        uri: require('../../assets/cart/cash.webp')
    },
    {
        type: "Debit Card",
        uri: require('../../assets/cart/visa.jpg')
    },
]

function Payment() {

    const { theme } = useTheme();
    const [isCheck, setIsCheck] = useState('');

    const handleRadio = (val) => {
        setIsCheck(val?.type)
    }

    return (
        <View style={{ padding: 10 }}>
            <Text style={styles.title}>Select Payment Mode </Text>
            {
                paymentOptions.map((val, i) => {
                    return (
                        <View key={i} style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center", margin: 3 }}>
                            <RadioButton status={isCheck === val?.type ? "checked" : "unchecked"} value={isCheck} onPress={() => handleRadio(val)} />
                            <Text>{val.type}</Text>
                            <Image source={val.uri} style={{ height: 30, width: 30, marginLeft: 5 }} />
                        </View>
                    )
                })
            }
            <Card style={styles.card}>
                <Text style={styles.title}>Price Details(2 item)</Text>
                <View style={styles.priceDetails}>
                    <Text>Total MRP</Text>
                    <Text>₹14000</Text>
                </View>
                <View style={styles.priceDetails}>
                    <Text>Discont on MRP</Text>
                    <Text>-₹4000</Text>
                </View>
                <View style={styles.priceDetails}>
                    <Text>Convenience fee</Text>
                    <Text>₹20</Text>
                </View>
                <Divider width={1} color={theme?.colors?.primary} style={{ marginTop: 10, marginBottom: 10 }} />
                <View style={styles.priceDetails}>
                    <Text style={styles.title}>Total Amount</Text>
                    <Text style={styles.title}>₹12000</Text>
                </View>
            </Card>
        </View >
    )
}

const styles = StyleSheet.create({
    card: {
        marginTop: 10,
        backgroundColor: "white",
        elevation: 0,
        borderRadius: 3,
        padding: 10
    },
    priceDetails: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10
    },
    title: {
        fontSize: 15,
        fontWeight: "500"
    }
})

export default Payment;