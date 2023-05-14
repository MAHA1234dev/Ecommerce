import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Chip } from "react-native-paper";
import { useState } from "react";
import { Divider, useTheme, Button } from "@rneui/themed";
import Icon from 'react-native-vector-icons/FontAwesome';
import Address from "./subComponents/Address";

const cartItems = [
    {
        brandName: "Doc Martin",
        type: "Men Colourblocked Sneackers",
        soldBy: "Rocket Sales Enterprice",
        size: 9,
        qty: 1,
        price: 2000,
        mainprice: 4000,
        offer: "50%",
        uri: require('../assets/cart/doc.png')
    },
    {
        brandName: "SAMSUNG Galaxy F13 (Nightsky Green, 64 GB)",
        type: "4 GB RAM",
        soldBy: "MYTHANGLORYRetai",
        size: 9,
        qty: 1,
        price: 10000,
        mainprice: 12000,
        offer: "20%",
        uri: require('../assets/cart/sumsung.webp')
    }
]

const address = [
    {
        deliveryTo: "Mahadev",
        pincode: 560102,
        address: "PSR boys pg, 13th cross Road, 560102, 19th Main Road Sector 4 HSR Layout..."
    },
    {
        deliveryTo: "Mahadev",
        pincode: 560102,
        address: "PSR boys pg, 14th cross Road, 560102, 10th Main Road Sector 7 HSR Layout..."
    },
]

function MyCart() {

    const [stepper, setStepper] = useState(1)
    const { theme } = useTheme();

    const handlPlaceOrder = () => {
        setStepper(2)
    }

    return (
        <View style={{ height: "100%" }}>
            <ScrollView style={{ backgroundColor: "#61dafb", }}>
                <View style={styles.body}>
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", padding: 10 }}>
                        <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <Chip style={[stepper === 1 ? styles.pressChip : styles.chip]}>1</Chip>
                            <Text style={[stepper === 1 ? styles.action : styles.silent]}>Bag</Text>
                        </View>
                        <View style={styles.line}></View>
                        <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <Chip style={[stepper === 2 ? styles.pressChip : styles.chip]}>2</Chip>
                            <Text style={[stepper === 2 ? styles.action : styles.silent]}>Address</Text>
                        </View>
                        <View style={styles.line}></View>
                        <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <Chip style={[stepper === 3 ? styles.pressChip : styles.chip]}>3</Chip>
                            <Text style={[stepper === 3 ? styles.action : styles.silent]}>Payment</Text>
                        </View>
                    </View>
                    {
                        stepper === 1 ? (
                            <>
                                <Divider width={1} color={theme?.colors?.primary} ></Divider>
                                <View style={{ padding: 5, flexDirection: "row", width: "100%", justifyContent: "center", alignItems: "center" }}>
                                    <View style={{ width: "80%" }}>
                                        {
                                            [address[0]].map((val, i) => {
                                                return (
                                                    <View key={i} >
                                                        <View key={i} style={{ flexDirection: "row", justifyContent: "flex-start" }}>
                                                            <Text>Deliver To : </Text>
                                                            <Text style={styles.title}>{val.deliveryTo} , {val.pincode} </Text>
                                                        </View>
                                                        <Text>{val.address}</Text>
                                                    </View>
                                                )
                                            })
                                        }
                                    </View>
                                    <View style={{ width: "20%", paddingLeft: 5 }}>
                                        <Text style={styles.seeAll}>Change</Text>
                                    </View>
                                </View>
                                <Divider width={1} color={theme?.colors?.primary} ></Divider>
                                <View style={{ padding: 5 }}>
                                    {
                                        cartItems.map((val, i) => {
                                            return (
                                                <View key={i} style={{ flexDirection: "row", marginBottom: 5, marginTop: 5 }}>
                                                    <Image source={val.uri} style={{ height: 100, width: 100, resizeMode: 'contain' }}></Image>
                                                    <View>
                                                        <Text style={styles.title}>{val.brandName}</Text>
                                                        <Text style={styles.type}>{val.type}</Text>
                                                        <View style={{ flexDirection: "row" }}>
                                                            <Text style={styles.soldby}>Sold by : </Text>
                                                            <Text style={styles.soldby}>{val.soldBy}</Text>
                                                        </View>
                                                        <View style={{ flexDirection: "row" }}>
                                                            <Button
                                                                title={`Size: ${val.size}`}
                                                                buttonStyle={styles.button}
                                                                titleStyle={styles.textStyle}
                                                                icon={{
                                                                    name: 'caret-down',
                                                                    type: 'font-awesome',
                                                                    size: 15,
                                                                    color: 'black',
                                                                }}
                                                                iconRight
                                                            >
                                                            </Button>
                                                            <Button
                                                                title={`Qty : ${val.qty}`}
                                                                buttonStyle={styles.button}
                                                                titleStyle={styles.textStyle}
                                                                icon={{
                                                                    name: 'caret-down',
                                                                    type: 'font-awesome',
                                                                    size: 15,
                                                                    color: 'black',
                                                                }}
                                                                iconRight
                                                            >
                                                            </Button>
                                                        </View>
                                                        <View style={{ flexDirection: "row", padding: 5 }}>
                                                            <Icon name="rupee" size={15} color="black" style={{ marginTop: 2 }} />
                                                            <Text style={styles.action}>{val.price}</Text>
                                                            <View style={{ flexDirection: "row" }}>
                                                                <Icon name="rupee" size={10} color="#CAD2D3" style={{ marginTop: 5, marginLeft: 7 }} />
                                                                <Text style={styles.mainprice}>{val.mainprice}</Text>
                                                            </View>
                                                            <Text style={styles.offer}>{val.offer}</Text>
                                                            <Text style={styles.off}>OFF</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            )
                                        })
                                    }
                                </View>
                            </>
                        ) : stepper === 2 ? (
                            <Address />
                        ) : ""
                    }

                </View>
            </ScrollView>
            <View>
                <Button
                    title={"Place Order"}
                    buttonStyle={{
                        width: '100%',
                        height: 45,
                        backgroundColor: '#082222',
                    }}
                    onPress={handlPlaceOrder}
                ></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#E9F8FA",
        borderTopEndRadius: 20,
        borderTopLeftRadius: 20,
    },
    pressChip: {
        backgroundColor: "#61dafb",
        width: 40,
        height: 40,
        borderRadius: 100
    },
    chip: {
        backgroundColor: "#CAD2D3",
        width: 40,
        height: 40,
        borderRadius: 100
    },
    line: {
        width: 100,
        borderWidth: 0.5,
        marginBottom: 10,
        borderColor: "#CAD2D3"
    },
    action: {
        fontWeight: "500",
    },
    silent: {
        color: "#CAD2D3",
        fontWeight: "500",
    },
    card: {
        marginTop: 10,
        backgroundColor: "#FFFFFF",
        borderRadius: 3,
        borderWidth: 1,
        borderColor: "#eaeaec",
        elevation: 0
    },
    title: {
        fontWeight: "500",
    },
    type: {
        fontWeight: "300",
    },
    soldby: {
        fontWeight: "400",
        color: "#CAD2D3"
    },
    seeAll: {
        color: "red",
        fontWeight: "500"
    },
    cartImg: {
        height: 100
    },
    button: {
        backgroundColor: "#CAD2D3",
        margin: 1,
        height: 30
    },
    textStyle: {
        color: 'black',
        marginVertical: -5
    },
    mainprice: {
        color: "#CAD2D3",
        textDecorationColor: "#CAD2D3",
        textDecorationLine: "line-through"
    },
    offer: {
        paddingLeft: 5,
        fontWeight: "300"
    },
    off: {
        fontWeight: "300",
        paddingLeft: 2,
        color: "red"
    }
})
export default MyCart