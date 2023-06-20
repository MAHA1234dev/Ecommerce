import { Divider, useTheme } from "@rneui/themed";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import { Card, Surface } from "react-native-paper";

function Home({ navigation }) {

    const { theme } = useTheme();

    const items =
        [{
            label: "Grocery",
            uri: require("../assets/grocery.png")
        },
        {
            label: "Fashions",
            uri: require("../assets/fashion.png")
        },
        {
            label: "Electronics",
            uri: require("../assets/electronics.png")
        },
        {
            label: "Food",
            uri: require("../assets/food.png")
        }];

    const cardCoves = [
        {
            label: "",
            uri: require("../assets/summerParty.png")
        },
        {
            label: "",
            uri: require("../assets/food1.jpg")
        },
        {
            label: "",
            uri: require("../assets/summerparty2.jpg")
        },
        {
            label: "",
            uri: require("../assets/electronics1.png")
        },
    ]

    const specialDeals = [
        {
            label: 'Lenove K6 Power',
            offer: "20%",
            price: "10000",
            uri: require('../assets/mobile.png')
        },
        {
            label: 'Redmi Mi Air Buds',
            offer: "50%",
            price: "10000",
            uri: require('../assets/airbuds.png')
        },
        {
            label: 'Groceries',
            offer: "70%",
            price: "10000",
            uri: require('../assets/groceries.png')
        },
        {
            label: 'Adidas Shoe',
            offer: "40%",
            price: "10000",
            uri: require('../assets/shoe.png')
        },
        {
            label: 'Food Items',
            offer: "50%",
            price: "10000",
            uri: require('../assets/eat.png')
        },
        {
            label: 'Casuals',
            offer: "50%",
            price: "10000",
            uri: require('../assets/casuals.png')
        },
    ]

    const handlePress = () => {
        navigation.navigate('Notifications')
    }

    return (
        <ScrollView style={{ backgroundColor: "#61dafb" }}>
            <SafeAreaView style={styles.conatiner}>
                <TextInput
                    style={styles.input}
                    // onChangeText={onChangeNumber}
                    // value={number}
                    placeholder="Search any items"
                    keyboardType="default"
                />
            </SafeAreaView>
            <SafeAreaView style={styles.body}>
                <Card style={styles.card} >
                    <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", padding: 10 }}>
                        {items.map((val, i) => {
                            return (
                                <View key={i}>
                                    <Image source={val.uri} style={styles.itemsImg}></Image>
                                    <Text onPress={handlePress} style={styles.headLines}>{val.label}</Text>
                                </View>
                            )
                        })}
                    </View>
                </Card>
                <Card style={styles.subCard} contentStyle={{ flexDirection: "row" }}>
                    <ScrollView horizontal={true}>
                        {
                            cardCoves.map((val, i) => {
                                return (
                                    <Card.Cover style={styles.cardCovers} source={val?.uri} key={i} />
                                )
                            })
                        }
                    </ScrollView>
                </Card>
                <Card style={styles.subCard} contentStyle={{ padding: 10 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 8 }}>
                        <Text style={styles.headLines}>Special Deals</Text>
                        <Text style={styles.seeAll} >Sel All</Text>
                    </View>
                    <Divider width={1} color={theme?.colors?.primary} />
                    <View style={{
                        flexDirection: 'row', width: '100%', flexWrap: "wrap",
                    }}>
                        {
                            specialDeals.map((val, i) => {
                                return (
                                    <Surface key={i} style={styles.surface} elevation={0}>
                                        <Image source={val.uri} style={{ height: 100, width: 100 }}></Image>
                                    </Surface>
                                )
                            })
                        }
                    </View>
                </Card>
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    conatiner: {
        padding: 5,
        backgroundColor: "#61dafb",
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor: "white",
        padding: 10,
        borderRadius: 5
    },
    body: {
        backgroundColor: "#E9F8FA",
        borderTopEndRadius: 20,
        borderTopLeftRadius: 20,
        padding: 20
    },
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 15,
        elevation: 0,
    },
    itemsImg: {
        width: 50,
        height: 50,
    },
    subCard: {
        backgroundColor: "#FFFFFF",
        borderRadius: 15,
        elevation: 0,
        marginTop: 10,
    },
    cardCovers: {
        width: 280,
        height: 180,
        margin: 10
    },
    seeAll: {
        color: "red",
        fontWeight: "500"
    },
    headLines: {
        fontWeight: "500"
    },
    surface: {
        marginTop: 8,
        // width: "48%",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: "#E9F8FA",
        padding: 20,
        marginLeft: 8
    }
});


export default Home