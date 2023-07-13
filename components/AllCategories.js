import { Image } from "react-native";
import { ScrollView, StyleSheet, Text, View } from "react-native";

function AllCategories() {

    const categories =
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
        },
        {
            label: "Books",
            uri: require("../assets/books.png")
        },
        {
            label: "Travel",
            uri: require("../assets/travel.png")
        },
        {
            label: "Gifts",
            uri: require("../assets/gift.png")
        },
        {
            label: "Jewellary",
            uri: require("../assets/jewellary.png")
        },
        {
            label: "Beauty",
            uri: require("../assets/beauty.png")
        },
        {
            label: "Agriculture",
            uri: require("../assets/agriculture.png")
        },
        {
            label: "Furniture",
            uri: require("../assets/furniture.png")
        }
        ];

    return (
        <View style={{ height: "100%" }}>
            <ScrollView style={{ backgroundColor: "#61dafb" }}>
                <View style={styles.body}>
                    {
                        categories.map((val, i) => {
                            return (
                                <View key={i} style={{ margin: 5 }}>
                                    <Image source={val.uri} style={styles.itemsImg}></Image>
                                    <Text style={styles.headLines}>{val.label}</Text>
                                </View>
                            )
                        })
                    }
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#E9F8FA",
        borderTopEndRadius: 20,
        borderTopLeftRadius: 20,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap"
    },
    itemsImg: {
        width: 50,
        height: 50,
    },

})

export default AllCategories;