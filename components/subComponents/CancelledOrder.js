import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import { Divider, useTheme } from "@rneui/themed";

function CancelledOrder({ setToOrderDet }) {

    const items = [
        {
            brandName: "Doc Martin",
            type: "Men Colourblocked Sneackers",
            soldBy: "Rocket Sales Enterprice",
            size: 9,
            qty: 1,
            price: 2000,
            mainprice: 4000,
            offer: "50%",
            uri: require('../../assets/cart/doc.png'),
            date: "25/07/2023"
        },
        {
            brandName: "SAMSUNG Galaxy F13",
            type: "4 GB RAM",
            soldBy: "MYTHANGLORYRetai",
            size: 9,
            qty: 1,
            price: 10000,
            mainprice: 12000,
            offer: "20%",
            uri: require('../../assets/cart/sumsung.webp'),
            date: "25/07/2023"
        },
    ]

    const { theme } = useTheme();

    return (
        <ScrollView>
            <Card style={styles.subCard} contentStyle={{ padding: 10 }}>
                {
                    items.map((val, index) => {
                        return (
                            <TouchableOpacity onPress={() => setToOrderDet(true)} key={index}>
                                <View key={index}>
                                    <View style={styles.main}>
                                        <Text style={styles.header}>{val?.brandName}</Text>
                                        <Text style={styles.silent}>{val?.date}</Text>
                                    </View>
                                    <View style={styles.main}>
                                        <View style={styles.main}>
                                            <Text style={styles.silent}> items : </Text>
                                            <Text style={styles.header}>{val?.qty}</Text>
                                        </View>
                                        <Text style={styles.header}>{val?.price}</Text>
                                    </View>
                                    <Divider style={{ marginTop: 10, marginBottom: 10 }} width={1} color={theme?.colors?.primary} />
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </Card>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    subCard: {
        backgroundColor: "#FFFFFF",
        borderRadius: 15,
        elevation: 0,
        marginTop: 10,
        marginBottom: 10
    },
    main: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    button: {
        marginHorizontal: 0
    },
    header: {
        fontWeight: "500"
    },
    silent: {
        color: "#CAD2D3",
        fontWeight: "500",
    },
});


export default CancelledOrder;