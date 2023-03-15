import { View, Text, StyleSheet, ScrollView, SafeAreaView, } from "react-native";
import { Card, Button } from "react-native-paper";

function MyCart() {
    return (
        <ScrollView style={{ backgroundColor: "#61dafb" }}>
            <View style={styles.body}>
                <Card style={styles.card}>
                    <Text>dssdF</Text>
                </Card>
                {/* <Button icon="camera" style={styles.button} mode="contained" onPress={() => console.log('Pressed')}>
                    Press me
                </Button> */}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#E9F8FA",
        borderTopEndRadius: 20,
        borderTopLeftRadius: 20,
        padding: 15,
    },
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 15,
        elevation: 0,
    },
})
export default MyCart