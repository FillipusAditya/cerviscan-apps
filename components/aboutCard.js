import { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { card, fonts, colors } from "../styles/base";

import { AccentCard } from "./accentCard";

export const AboutCard = () => {
    return (
        <View style={{ ...card }}>
            <Text style={styles.aboutText}>About CerviScan</Text>
            <Text style={styles.aboutParagraph}>
                <View style={styles.indentation}></View>CerviScan is an
                innovative application designed for the early detection of
                cervical cancer using Visual Inspection with Acetic Acid (VIA)
                images. This detection is powered by a machine learning model,
                ensuring accurate and efficient results.
            </Text>
            <Text style={styles.aboutParagraph}>
                <View style={styles.indentation}></View>This project is
                supervised by{" "}
                <Text style={{ fontWeight: "bold" }}>
                    Prof. Dr. Eng. Retno Supriyanti, S.T., M.T.
                </Text>{" "}
                and developed by a team of Electrical Engineering students from
                Universitas Jenderal Soedirman:
            </Text>
            <View style={styles.memberContainer}>
                <Text style={styles.aboutParagraph}>1. M. Saujana Shafi</Text>
                <Text style={styles.aboutParagraph}>
                    2. Fillipus Aditya Nugroho
                </Text>
                <Text style={styles.aboutParagraph}>
                    3. Tegar Dwi Agung Saputra
                </Text>
                <Text style={styles.aboutParagraph}>
                    4. Muhammad Rizqy Maulana Sarwono{" "}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    aboutText: { fontSize: fonts.lg, fontWeight: "bold", marginBottom: 8 },
    indentation: { width: 30 },
    aboutParagraph: {
        fontSize: fonts.md,
        textAlign: "justify",
    },
    memberContainer: {
        marginLeft: 30,
    },
});
