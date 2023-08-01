import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Card, Avatar, Surface } from "react-native-paper";
import { Divider, useTheme } from "@rneui/themed";
import Icon from 'react-native-vector-icons/Fontisto';

function Deliverd() {

    const items = [
        {
            brandName: "Roadstar Men Shirt",
            type: "Men Colourblocked Shirt",
            soldBy: "Rocket Sales Enterprice",
            size: 9,
            qty: 1,
            price: 2000,
            mainprice: 4000,
            offer: "50%",
            uri: require('../../assets/casuals.png'),
            date: "25/07/2023"
        },
        {
            brandName: "APPLE Airpods Pro",
            type: "MagSafe Charging Case Bluetooth Headset",
            soldBy: "rocket sale enterprice",
            size: 9,
            qty: 1,
            price: 4000,
            mainprice: 2500,
            offer: "20%",
            uri: require('../../assets/airbuds.png'),
            date: "25/07/2023"
        },
        {
            brandName: "Roadstar T-shirt",
            type: "Men blue Black Polo collar T-shirt",
            soldBy: "rocket sale enterprice",
            size: 9,
            qty: 1,
            price: 700,
            mainprice: 1000,
            offer: "30%",
            uri: require('../../assets/t-shirt.webp'),
            date: "25/07/2023"
        },
    ]

    const iconMap = [
        {
            id: 1,
            color: ""
        },
        {
            id: 2,
            color: ""
        },
        {
            id: 3,
            color: ""
        },
        {
            id: 4,
            color: ""
        },
        {
            id: 5,
            color: ""
        },
    ]

    const { theme } = useTheme();
    const [icons, setIcons] = useState(iconMap);
    const [orderId, setIsOrderID] = useState("");

    const handleIconPress = (id, name) => {
        setIsOrderID(name);
        const updatedIcons = icons.map((val, i) => ({
            ...val,
            color: i + 1 > id ? "" : "#61dafb",
        }));
        setIcons(updatedIcons);
    };

    return (
        <View>
            {
                items.map((val, i) => {
                    return (
                        <Card style={styles.subCard} contentStyle={{ padding: 5 }} key={i}>
                            <View style={styles.avatar}>
                                <Avatar.Icon size={24} icon="truck-delivery-outline" color="white" style={{ backgroundColor: "#61dafb" }} />
                                <Text style={styles.title}> Deliverd</Text>
                            </View>
                            <Surface style={styles.surface} elevation={0}>
                                <View style={styles.avatar}>
                                    <Image source={val.uri} style={styles.itemsImg}></Image>
                                    <View style={{ marginLeft: 5, width: "100%" }}>
                                        <Text style={styles.subTitle}>{val?.brandName}</Text>
                                        <View style={styles.type}>
                                            <Text>{val?.type}</Text>
                                            <Icon
                                                key={i}
                                                name={"caret-right"}
                                                size={15}
                                                color={"#DDD7D7"}
                                            // onPress={() => hanleIconPress()}
                                            />
                                        </View>

                                        <View style={{ flexDirection: "row" }}>
                                            <Text style={styles.silent}> Size : </Text>
                                            <Text style={styles.subTitle}>{val?.size}</Text>
                                        </View>
                                    </View>
                                </View>
                                <Divider style={{ marginTop: 5, marginBottom: 5 }} width={1} color={theme?.colors?.secondary} />
                                <View style={styles.avatar}>
                                    <Text style={styles.silent}>Rate Product</Text>
                                    {
                                        icons.map((item, i) => {
                                            return (
                                                <Icon
                                                    key={i}
                                                    style={{ marginLeft: 10 }}
                                                    name={"star"}
                                                    size={25}
                                                    color={(orderId === val?.brandName && item?.color) ? item?.color : "#DDD7D7"}
                                                    onPress={() => handleIconPress(item?.id, val?.brandName)}
                                                />
                                            )
                                        })
                                    }
                                </View>
                            </Surface>
                        </Card>
                    )
                })
            }
        </View>
    )
}


const styles = StyleSheet.create({
    subCard: {
        backgroundColor: "#FFFFFF",
        borderRadius: 5,
        elevation: 0,
        marginTop: 10,
    },
    avatar: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%"
    },
    title: {
        fontWeight: "500",
        marginLeft: 5
    },
    surface: {
        backgroundColor: "#f5f5f5",
        marginTop: 5,
        padding: 3,
        width: "100%"
    },
    itemsImg: {
        width: 50,
        height: 50,
    },
    silent: {
        color: "#CAD2D3",
        fontWeight: "500",
    },
    subTitle: {
        fontWeight: "500",
    },
    type: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "83%"
    }
});

export default Deliverd;