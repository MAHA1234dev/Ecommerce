import { View, Text, ScrollView, StyleSheet } from "react-native";
import HeaderComp from "./molecules/HeaderComp";
import {
    Tabs,
    TabScreen,
    useTabIndex,
    useTabNavigation,
} from 'react-native-paper-tabs';


function MyOrder({ navigation }) {
    return (
        <>
            <HeaderComp handleNavigate={() => navigation.navigate("Home")} title={"My Orders"} />
            <Tabs style={{ backgroundColor: "rgb(233, 248, 250)" }}>
                <TabScreen label="Explore">
                    <View style={{}}>
                        <Text>djsdhghj </Text>
                        <Text>djsdhghj </Text>
                        <Text>djsdhghj </Text>
                    </View>
                </TabScreen>
                <TabScreen label="Flights" >
                    <View style={{ backgroundColor: '', flex: 1 }} />
                </TabScreen>
                <TabScreen label="Flights" >
                    <View style={{ backgroundColor: '', flex: 1 }} />
                </TabScreen>
            </Tabs>
        </>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#E9F8FA",
        borderTopEndRadius: 20,
        borderTopLeftRadius: 20,
    },

})
export default MyOrder