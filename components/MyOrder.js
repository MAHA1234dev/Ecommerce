import { View, Text, StyleSheet } from "react-native";
import HeaderComp from "./molecules/HeaderComp";
import {
    Tabs,
    TabScreen,
} from 'react-native-paper-tabs';
import Deliverd from "./subComponents/Deliverd";
import ProcessOrder from "./subComponents/ProcessOrder";
import CancelledOrder from "./subComponents/CancelledOrder";

function MyOrder({ navigation }) {
    return (
        <>
            <HeaderComp handleNavigate={() => navigation.navigate("Home")} title={"My Orders"} />
            <Tabs style={{ backgroundColor: "rgb(233, 248, 250)" }}>
                <TabScreen label="Deliverd"  >
                    <View style={styles.body}>
                        <Deliverd />
                    </View>
                </TabScreen>
                <TabScreen label="Process" >
                    <View style={styles.body}>
                        <ProcessOrder />
                    </View>
                </TabScreen>
                <TabScreen label="Cancelled" >
                    <View style={styles.body}>
                        <CancelledOrder />
                    </View>
                </TabScreen>
            </Tabs>
        </>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#E9F8FA",
        padding: 10

    },

})
export default MyOrder