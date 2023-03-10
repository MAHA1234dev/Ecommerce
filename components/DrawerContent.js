import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { Image, ImageBackground, Text, View, StyleSheet } from "react-native";

function DrawerContent({ props, navigation }) {

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: '#61dafb' }}>
                <ImageBackground
                    source={require('../assets/profile.png')}
                    style={{ padding: 20 }}
                >
                    <View style={{ flexDirection: 'row', justifyContent: "flex-start", }}>
                        <Image
                            source={require('../assets/maha.png')}
                            style={{ height: 70, width: 80, borderRadius: 50 }}
                        >
                        </Image>
                        <View style={{ width: 100, marginLeft: 10, flexDirection: "column", justifyContent: "flex-start" }}>
                            <Text style={{
                                marginTop: 20,
                                color: "#FFFFFF",
                                fontSize: 18
                            }}>Mahadev N</Text>
                            <Text style={{
                                color: "#FFFFFF",
                                fontSize: 10
                            }}>mnedode5@gmail.com</Text>
                        </View>
                    </View>
                </ImageBackground>
                <View style={{ flex: 1, backgroundColor: "#FFFFFF", padding: 10 }}>
                    <DrawerItemList {...props}/>
                </View>
            </DrawerContentScrollView>
        </View>
    )
}

export default DrawerContent;

