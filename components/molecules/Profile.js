import { View, Text, SafeAreaView, TextInput, StyleSheet, Button } from "react-native";
import { callApi } from "../services/httpService";
import { useState } from "react";
import { useLoginContext } from "../../cntextProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Profile() {

    const { setUserData } = useLoginContext();
    const [mobNo, setMobNo] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        const bodyParams = {
            mobileNumber: mobNo,
            password: password
        }
        if (mobNo.length === 10) {
            callApi("post", '/login', bodyParams).then((res) => {
                if (res?.success) {
                    setUserData({
                        isLoggedIn: true,
                        token: res?.token
                    });
                    AsyncStorage.setItem('token', res?.token)
                }
            }).catch((err) => {
                alert(err.error ? err?.error : err?.message);
            })
        } else {
            alert("Please Enter Valid Mobile Number")
        }
    }

    return (
        <View style={styles.Profile}>
            <Text style={styles.login}>Login or Signup</Text>
            <TextInput
                style={styles.input}
                onChangeText={(e) => {
                    setMobNo(e);
                }}
                value={mobNo}
                placeholder=" Mobile Number "
                keyboardType="phone-pad"
            />
            <TextInput
                style={styles.input}
                onChangeText={(e) => {
                    setPassword(e);
                }}
                value={password}
                placeholder=" Password "
                keyboardType="visible-password"
            />
            <Text style={{ margin: 10 }}>By continuing, I agree to the Terms of Use & Privacy Policy and I am above 18 years old.</Text>
            <Button
                color={"rgb(97, 218, 251)"}
                title={"Continue"}
                onPress={handleLogin}
            ></Button>
            <Text style={{ margin: 10 }}>Have trouble logging in? Get Help</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Profile: {
        flex: 1,
        padding: 40,
        margin: 5
    },
    conatiner: {
        padding: 5,
        backgroundColor: "#61dafb",
    },
    input: {
        margin: 5,
        height: 40,
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 5
    },
    login: {
        margin: 10,
        fontWeight: 500,
        fontSize: 20
    }
});


export default Profile;