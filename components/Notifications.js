import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

function Notifications({ navigation }) {

    const notifications = [
        {
            date: "10/12/2023",
            time: "10:40 AM",
            message: "Brand new solid quilted jocket for men"
        },
        {
            date: "12/12/2023",
            time: "10:40 AM",
            message: "New arrival men's latest shoes, cotton  and flipflops blend T-shirt"
        },
        {
            date: "13/12/2023",
            time: "10:40 AM",
            message: "New arrival men's latest shirt and jogger pants, flipflops and cotton blend T-shirt"
        },
        {
            date: "10/12/2023",
            time: "10:40 AM",
            message: "Brand new solid quilted jocket for men"
        },
        {
            date: "12/12/2023",
            time: "10:40 AM",
            message: "New arrival men's latest shoes, cotton  and flipflops blend T-shirt"
        },
        {
            date: "13/12/2023",
            time: "10:40 AM",
            message: "New arrival men's latest shirt and jogger pants, flipflops and cotton blend T-shirt"
        },
    ]

    return (
        <View style={{}}>
            <ScrollView style={{ backgroundColor: "#61dafb" }}>
                <View style={styles.body}>
                    {
                        notifications.map((val, i) => {
                            return (
                                <View style={styles.container} key={i}>
                                    <Image source={require('../assets/cart/notifications.png')} style={{ height: 60, width: 60, resizeMode: 'contain' }}></Image>
                                    <View style={{ flexDirection: "column", margin: 5, width: "80%", }}>
                                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                            <Text>{val?.date} {val?.time}</Text>
                                            <Icon
                                                name={"brightness-1"}
                                                size={15}
                                                color={"#61dafb"}
                                            />
                                        </View>
                                        <Text style={{ flex: 1, flexWrap: 'wrap' }}>{val?.message}</Text>
                                    </View>
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
    },
    container: {
        padding: 10,
        flexDirection: "row",
    }
})
export default Notifications