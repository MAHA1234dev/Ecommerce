import React from "react";
import { StyleSheet, Button, View, Text, Image, ScrollView, ImageBackground, SafeAreaView, TextInput } from "react-native";
import HeaderComp from "../molecules/HeaderComp";
import { useState } from "react";

function EditAccoount({ navigation, setOpenEdit }) {

    const [userDetails, setUserDetails] = useState({
        name: "Mahadev N",
        email: "mnedode5@gmail.com",
        phoneNo: "8861601472",
    })

    return (
        <View style={styles.main}>
            <HeaderComp
                title={"Edit Account"}
                navigateTo={"My Account"}
                navigation={navigation}
                handleNavigate={() => setOpenEdit(false)}
            />
            <ScrollView style={{ backgroundColor: "#61dafb" }}>
                <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center", padding: 25 }}>
                    <ImageBackground
                        imageStyle={{
                            borderRadius: 50
                        }}
                        source={require('../../assets/maha.png')}
                        style={{ height: 70, width: 80, }}
                    >
                    </ImageBackground>
                </View>
                <View style={styles.body}>
                    <SafeAreaView>
                        <TextInput
                            style={styles.input}
                            onChangeText={(e) => setUserDetails({
                                ...userDetails,
                                name: e
                            })}
                            value={userDetails?.name}
                            placeholder="Name*"
                            keyboardType="default"
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={(e) => setUserDetails({
                                ...userDetails,
                                email: e
                            })}
                            value={userDetails?.email}
                            placeholder="Email*"
                            keyboardType="email-address"
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={(e) => setUserDetails({
                                ...userDetails,
                                phoneNo: e
                            })}
                            value={userDetails?.phoneNo}
                            placeholder="Phone Number*"
                            keyboardType="number-pad"
                        />
                    </SafeAreaView>
                    <Button
                        color={"rgb(33 197 243)"}
                        title={"Save"}
                    // onPress={handleNewAddress}
                    ></Button>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {

    },
    body: {
        backgroundColor: "#E9F8FA",
        borderTopEndRadius: 20,
        borderTopLeftRadius: 20,
        padding: 10,
    },
    input: {
        height: 40,
        margin: 10,
        borderBottomWidth: 1,
        borderColor: "#d4d5d9",
        padding: 10,
        borderRadius: 5
    },
})

export default EditAccoount