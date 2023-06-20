import { Button } from "@rneui/themed";
import { useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { View } from "react-native";
import { Card, RadioButton } from "react-native-paper";
import AddressModal from "../molecules/AddressModal";

function Address({ address, setAddressData }) {


    const [open, setOpen] = useState(false)

    const handleNewAddress = () => {
        setOpen(true)
    }

    return (
        <>
            <ScrollView style={{ padding: 10 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <Text style={{ fontSize: 15 }}>Select Delivery Address</Text>
                    <Button
                        title={"Add New Address"}
                        buttonStyle={styles.button}
                        titleStyle={styles.textStyle}
                        onPress={handleNewAddress}
                    >
                    </Button>
                </View>
                <View style={{ marginBottom: 10 }}>
                    {
                        address.map((val, i) => {
                            return (
                                <Card style={styles.card} contentStyle={{ padding: 10 }} key={i}>
                                    {
                                        i === 0 && (
                                            <Text style={{ fontWeight: "500" }}>Default Address</Text>
                                        )
                                    }
                                    <View key={i}>
                                        <View key={i} style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                                            <RadioButton
                                                value="first"
                                                status={i === 0 ? 'checked' : "unchecked"}
                                            // onPress={() => setChecked('first')}
                                            />
                                            <Text style={styles.title}>{val.deliveryTo} , {val.pincode} </Text>
                                        </View>
                                        <Text>{val.address}</Text>
                                        <Text>Mobile : {val.phoneNo}</Text>
                                    </View>
                                </Card>
                            )
                        })
                    }
                </View>
            </ScrollView>
            <AddressModal
                open={open}
                setOpen={setOpen}
                setAddressData={setAddressData}
                address={address}
            />
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "",
        margin: 1,
        height: 30,
        borderWidth: 1,
        borderColor: "black"
    },
    textStyle: {
        color: 'black',
        marginVertical: -5,
        fontSize: 13,
        fontWeight: "200",
    },
    card: {
        marginTop: 10,
        backgroundColor: "#FFFFFF",
        elevation: 0,
    },
    title: {
        fontWeight: "500",
    },
})

export default Address;