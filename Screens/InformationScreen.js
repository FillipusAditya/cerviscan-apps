import { View, Text, StyleSheet, StatusBar } from "react-native";

export default function InformationScreen() {
    return (
        <View style={styles.container}>
            <Text>InformationScreen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
