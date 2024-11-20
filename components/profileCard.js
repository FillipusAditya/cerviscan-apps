import { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { card, fonts, colors } from "../styles/base";

import { AccentCard } from "./accentCard";

export const ProfileCard = () => {
    const [patientFirstName, setPatientFirstName] = useState("");
    const [patientLastName, setPatientLastName] = useState("");
    return (
        <View style={{ ...card }}>
            <Text style={styles.profileText}>Profile</Text>

            <View style={styles.formContainer}>
                <Text style={styles.inputLabel}>First Name :</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Patient's First Name"
                    onChangeText={setPatientFirstName}
                />

                <Text style={styles.inputLabel}>Last Name :</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={setPatientLastName}
                    placeholder="Patient's Last Name"
                />

                <Text style={styles.inputLabel}>Date Of Birth :</Text>
                <TextInput style={styles.textInput} />

                <Text style={styles.inputLabel}>Age: </Text>
                <AccentCard text="30" color={colors.color_accent} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    // Text Styles
    profileText: {
        fontSize: fonts.lg,
        fontWeight: "bold",
        marginBottom: 15, // Spasi bawah untuk pemisahan
    },
    inputLabel: {
        fontSize: fonts.md,
        marginBottom: 5, // Spasi bawah untuk jarak ke input
    },
    textInput: {
        fontSize: fonts.sm,
        height: 45,
        padding: 15,
        marginBottom: 15, // Jarak antar input
        backgroundColor: colors.background_primary,
        borderWidth: 1,
        borderColor: colors.color_muted, // Warna border input
        borderRadius: 15, // Sudut border melengkung
        elevation: 15, // Efek bayangan untuk Android
    },
});
