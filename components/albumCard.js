import { View, Text, Pressable, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { fonts, colors, card } from "../styles/base";
import { AccentCard } from "./accentCard";

export const AlbumCard = ({ patientName, date, status }) => {
    return (
        <Pressable style={{ ...card }}>
            <View>
                <View style={styles.head}>
                    <Text style={styles.headText}>{patientName}</Text>
                </View>
                <View style={styles.body}>
                    <AccentCard text={date} color={colors.color_accent} />
                    <AccentCard
                        text={status}
                        color={
                            status == "Abnormal"
                                ? colors.color_error
                                : colors.color_success
                        }
                    />
                    <Ionicons
                        name="arrow-forward-circle"
                        size={30}
                        style={styles.arrowCircle}
                    />
                </View>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    head: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15,
    },
    body: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 10,
        marginBottom: 15,
    },
    arrowCircle: {
        flexDirection: "row",
        marginLeft: "auto",
        alignSelf: "flex-end",
    },
    headText: {
        fontSize: fonts.md,
        fontWeight: "bold",
    },
});
