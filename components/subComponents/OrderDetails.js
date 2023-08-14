import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import HeaderComp from "../molecules/HeaderComp";
import { Avatar, Surface } from "react-native-paper";
import Icon from 'react-native-vector-icons/Fontisto';

function OrderDetails({ setToOrderDet }) {

    const items = {
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
    }

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

    const [icons, setIcons] = useState(iconMap);

    const handleIconPress = (id, name) => {
        const updatedIcons = icons.map((val, i) => ({
            ...val,
            color: i + 1 > id ? "" : "#61dafb",
        }));
        setIcons(updatedIcons);
    };


    return (
        <>
            <HeaderComp handleNavigate={() => setToOrderDet(false)} title={"Oder Detils"} />
            <View style={{}}>
                <ScrollView style={{ backgroundColor: "#61dafb" }}>
                    <View style={styles.body}>
                        <View style={styles.container}>
                            <Image source={items.uri} style={styles.itemsImg}></Image>
                            <Text style={{ fontWeight: "500" }}>{items.brandName}</Text>
                            <Text style={styles.text}>{items.type}</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={styles.text}> Size : </Text>
                                <Text style={styles.text}>{items?.size}</Text>
                            </View>
                        </View>
                        <Surface style={styles.surface} elevation={0}>
                            <View style={styles.avatar}>
                                <Avatar.Icon size={24} icon="truck-delivery-outline" color="white" style={{ backgroundColor: "#61dafb" }} />
                                <Text style={styles.title}> Deliverd</Text>
                            </View>
                            <Text style={styles.date}>{items.date}</Text>
                        </Surface>
                        <Surface style={styles.subsurface} elevation={0}>
                            <View style={styles.avatar}>
                                <Avatar.Icon size={15} icon="circle" color="grey" style={{ backgroundColor: "grey" }} />
                                <Text style={styles.silent}>Exachange/Return window closed on 30/07/2023</Text>
                            </View>
                        </Surface>
                        <Surface style={styles.subsurface} elevation={0}>
                            <View style={styles.avatar}>
                                {
                                    icons.map((item, i) => {
                                        return (
                                            <Icon
                                                key={i}
                                                style={{ marginLeft: 10 }}
                                                name={"star"}
                                                size={25}
                                                color={item?.color ? item?.color : "#DDD7D7"}
                                                onPress={() => handleIconPress(item?.id)}
                                            />
                                        )
                                    })
                                }
                                <Text style={styles.silent}>Rate Product</Text>
                            </View>
                        </Surface>
                    </View>
                </ScrollView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#E9F8FA",
        borderTopEndRadius: 20,
        borderTopLeftRadius: 20,
        // padding: 10
    },
    itemsImg: {
        width: 150,
        height: 150,
    },
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    avatar: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%"
    },
    surface: {
        backgroundColor: "#61dafb",
        marginTop: 10,
        padding: 10,
        marginLeft: 10,
        marginRight: 10
    },
    subsurface: {
        backgroundColor: "white",
        marginTop: 20,
        padding: 10,
        height: 50
    },
    text: {
        fontWeight: "300"
    },
    date: {
        color: "white",
        marginLeft: 5
    },
    silent: {
        color: "#CAD2D3",
        fontWeight: "500",
        marginLeft: 10
    },
    title: {
        color: "white"
    }
})

export default OrderDetails;