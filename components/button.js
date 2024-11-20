import { View, Text, Pressable, StyleSheet } from "react-native";
import { fonts, colors } from "../styles/base";

export const ButtonCustom = ({ text }) => {
    return (
        <Pressable>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        minWidth: 150,
        paddingHorizontal: 20,
        paddingVertical: 5,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-start",
        backgroundColor: colors.color_primary,
        borderRadius: 15,
    },
    buttonText: {
        fontSize: fonts.md,
        fontWeight: "bold",
        color: colors.text_light,
    },
});
