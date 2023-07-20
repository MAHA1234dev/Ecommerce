import { ScrollView, Text, StyleSheet, View, Image, Alert } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Card, Surface } from "react-native-paper";
import { Divider, useTheme } from "@rneui/themed";
import { useState } from "react";
import EditAccoount from "./subComponents/EditAccount";
import HeaderComp from "./molecules/HeaderComp";

function MyAccount({ navigation }) {

    const { theme } = useTheme();
    const [openEdit, setOpenEdit] = useState(false);

    const handleLogout = () => {
        Alert.alert('Log out', 'Are you sure you want exit the app ?', [
            {
                text: 'Cancel',
                onPress: () => { },
                style: 'cancel',
            },
            { text: 'OK', onPress: () => navigation.navigate("Home") },
        ]);
    }

    const gotoEditAcc = () => {
        setOpenEdit(true);
    }

    return (
        <>
            {
                !openEdit ? (
                    <>
                        <HeaderComp handleNavigate={() => navigation.navigate("Home")} title={"My Account"} />
                        <ScrollView style={{ backgroundColor: "#61dafb" }}>
                            <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: "center", padding: 25 }}>
                                <View style={{ flexDirection: "row" }}>
                                    <Image
                                        source={require('../assets/maha.png')}
                                        style={{ height: 70, width: 80, borderRadius: 50 }}
                                    >
                                    </Image>
                                    <View style={{ marginLeft: 10, flexDirection: "column", justifyContent: "center", }}>
                                        <Text style={{
                                            color: "#FFFFFF",
                                            fontSize: 18
                                        }}>Mahadev N</Text>
                                        <Text style={{
                                            color: "#FFFFFF",
                                            fontSize: 10
                                        }}>mnedode5@gmail.com</Text>
                                        <Text style={{
                                            color: "#FFFFFF",
                                            fontSize: 10
                                        }}>8861601472</Text>
                                    </View>
                                </View>
                                <Icon name="edit" size={20} color="#FFFFFF" onPress={() => gotoEditAcc()} />
                            </View>
                            <View style={styles.body}>
                                <Card style={styles.card} >
                                    <View style={{ flexDirection: "column", padding: 10 }} >
                                        <View style={styles.layout}>
                                            <Icon
                                                name={"https"}
                                                size={25}
                                            />
                                            <Text style={styles.content} onPress={() => navigation.navigate("My Order")}>Orders</Text>
                                        </View>
                                        <Divider width={1} color={theme?.colors?.primary} />
                                        <View style={styles.layout}>
                                            <Icon
                                                name={"shopping-basket"}
                                                size={25}
                                            />
                                            <Text style={styles.content} onPress={() => navigation.navigate("My Cart")}>My Cart</Text>
                                        </View>
                                        <Divider width={1} color={theme?.colors?.primary} />
                                        <View style={styles.layout}>
                                            <Icon
                                                name={"notifications"}
                                                size={25}
                                            />
                                            <Text style={styles.content} onPress={() => navigation.navigate("Notifications")}>Notifications</Text>
                                        </View>
                                        <Divider width={1} color={theme?.colors?.primary} />
                                        <View style={styles.layout}>
                                            <Icon
                                                name={"logout"}
                                                size={25}
                                            />
                                            <Text style={styles.content} onPress={() => handleLogout()}>Log Out</Text>
                                        </View>
                                    </View>
                                </Card>
                            </View>
                        </ScrollView>
                    </>
                ) : (
                    <EditAccoount
                        navigation={navigation}
                        setOpenEdit={setOpenEdit}
                    />
                )
            }
        </>
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
        flexWrap: "wrap",
        // marginTop: "30%"
    },
    content: {
        fontSize: 16,
        fontWeight: "400",
        marginLeft: 20,
    },
    layout: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: 'center'
    },
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 15,
        elevation: 0,
        width: "100%"
    },
})

export default MyAccount;