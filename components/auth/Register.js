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
import { registerUser } from "../../src/api";

const Register = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleRegister = async () => {
        if (!name || !email || !password) {
            Alert.alert("Error", "All fields are required");
            return;
        }

        setLoading(true); // Tampilkan loading spinner
        try {
            const response = await registerUser({ name, email, password });
            Alert.alert("Success", response.message);
            navigation.navigate("Login"); // Navigasi ke halaman login
        } catch (error) {
            Alert.alert(
                "Error",
                error.response?.data?.message || "Registration failed"
            );
        } finally {
            setLoading(false); // Sembunyikan loading spinner
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
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
                <Button title="Register" onPress={handleRegister} />
            )}
            <Text
                style={styles.link}
                onPress={() => navigation.navigate("Login")}
            >
                Already have an account? Login here
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

export default Register;
