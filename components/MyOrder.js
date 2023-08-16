import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import HeaderComp from "./molecules/HeaderComp";
import {
    Tabs,
    TabScreen,
} from 'react-native-paper-tabs';
import Deliverd from "./subComponents/Deliverd";
import ProcessOrder from "./subComponents/ProcessOrder";
import CancelledOrder from "./subComponents/CancelledOrder";
import OrderDetails from "./subComponents/OrderDetails";

function MyOrder({ navigation }) {

    const [toOrderDet, setToOrderDet] = useState(false);

    return (
        <>
            {
                !toOrderDet ? (
                    <>
                        <HeaderComp handleNavigate={() => navigation.navigate("Home")} title={"My Orders"} />
                        <Tabs style={{ backgroundColor: "rgb(233, 248, 250)" }}>
                            <TabScreen label="Deliverd"  >
                                <View style={styles.body}>
                                    <Deliverd
                                        setToOrderDet={setToOrderDet} />
                                </View>
                            </TabScreen>
                            <TabScreen label="Process" >
                                <View style={styles.body}>
                                    <ProcessOrder
                                        setToOrderDet={setToOrderDet}
                                    />
                                </View>
                            </TabScreen>
                            <TabScreen label="Cancelled" >
                                <View style={styles.body}>
                                    <CancelledOrder
                                        setToOrderDet={setToOrderDet}
                                    />
                                </View>
                            </TabScreen>
                        </Tabs>
                    </>
                ) : (
                    <OrderDetails
                        setToOrderDet={setToOrderDet}
                    />
                )
            }

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