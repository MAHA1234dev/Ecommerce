import { Divider, useTheme } from "@rneui/themed";
import { useState } from "react";
import { ImageBackground, SafeAreaView, Text, TextInput, Button } from "react-native";
import { View, Modal, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

function AddressModal({ open, setOpen, setAddressData, address }) {

    const { theme } = useTheme();
    const [addressDetails, setAddressDetails] = useState({
        deliveryTo: "",
        pincode: "",
        address: "",
        phoneNo: "",
    })

    const handleNewAddress = async () => {
        setAddressData([...address, addressDetails]);
        setOpen(false);
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={open}
            onRequestClose={() => {
                setOpen(false)
            }}>
            <ImageBackground style={styles.centeredView} source={require('../../assets/profile.png')}>
                <View style={styles.modalView}>
                    <View style={styles.header}>
                        <Text style={styles.modalText}>Add New Address</Text>
                        <Icon
                            name={"close"}
                            size={25}
                            onPress={() => setOpen(false)}
                        />
                    </View>
                    <Divider width={1} color={theme?.colors?.primary} style={{ marginTop: 10, marginBottom: 10 }} />
                    <Text style={styles.modalText}>Contact Details</Text>
                    <SafeAreaView style={styles.conatiner}>
                        <TextInput
                            style={styles.input}
                            onChangeText={(e) => setAddressDetails({
                                ...addressDetails,
                                deliveryTo: e
                            })}
                            value={addressDetails?.deliveryTo}
                            placeholder="Name*"
                            keyboardType="default"
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={(e) => setAddressDetails({
                                ...addressDetails,
                                phoneNo: e
                            })}
                            value={addressDetails?.phoneNo}
                            placeholder="Mobile No*"
                            keyboardType="decimal-pad"
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={(e) => setAddressDetails({
                                ...addressDetails,
                                pincode: e
                            })}
                            value={addressDetails?.pincode}
                            placeholder="Pincode*"
                            keyboardType="phone-pad"
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={(e) => setAddressDetails({
                                ...addressDetails,
                                address: e
                            })}
                            value={addressDetails?.address}
                            placeholder="Address*"
                            keyboardType="default"
                        />
                    </SafeAreaView>
                    <Button
                        color="#61dafb"
                        title={"Add New Address"}
                        onPress={handleNewAddress}
                    ></Button>
                </View>
            </ImageBackground>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        width: "85%",
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        fontWeight: "500",
        marginLeft: 10
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    input: {
        height: 40,
        margin: 10,
        borderWidth: 1,
        borderColor: "#d4d5d9",
        padding: 10,
        borderRadius: 5
    },
})

export default AddressModal;
