import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    Alert,
    ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginUser } from "../../src/api";

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert("Error", "All fields are required");
            return;
        }

        setLoading(true); // Tampilkan loading spinner
        try {
            const response = await loginUser({ email, password });

            // Simpan token JWT ke AsyncStorage
            await AsyncStorage.setItem("token", response.token);

            Alert.alert("Success", "Login successful");
            navigation.navigate("GoScan", { userName: response.user.name }); // Navigasi ke halaman utama dengan nama user
        } catch (error) {
            Alert.alert(
                "Error",
                error.response?.data?.message || "Login failed"
            );
        } finally {
            setLoading(false); // Sembunyikan loading spinner
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <Button title="Login" onPress={handleLogin} />
            )}
            <Text
                style={styles.link}
                onPress={() => navigation.navigate("Register")}
            >
                Don't have an account? Register here
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#f5f5f5",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    input: {
        height: 50,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
        backgroundColor: "#fff",
    },
    link: {
        marginTop: 20,
        color: "#007BFF",
        textAlign: "center",
    },
});

export default Login;
