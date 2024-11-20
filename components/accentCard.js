import { View, Text, StyleSheet } from "react-native";
import { colors, fonts } from "../styles/base";

export const AccentCard = ({ text, color }) => {
    return (
        <View style={[styles.accentCard, { backgroundColor: color }]}>
            <Text style={styles.accentCardText}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    accentCard: {
        minWidth: 70,
        paddingHorizontal: 20,
        paddingVertical: 5,
        justifyContent: "center", // Pusat vertikal
        alignItems: "center", // Pusat horizontal
        alignSelf: "flex-start",
        borderRadius: 15, // Sudut melengkung
        elevation: 10,
    },
    accentCardText: {
        fontSize: fonts.md,
        fontWeight: "bold",
        color: colors.text_light, // Warna teks pada card
    },
});
