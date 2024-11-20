import { View, Text, StyleSheet, StatusBar } from "react-native";

export default function AlbumScreen() {
    return (
        <View style={styles.container}>
            <Text>AlbumScreen</Text>
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
