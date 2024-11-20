import { cloneElement, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ProfileCard } from "../components/profileCard";
import { ButtonCustom } from "../components/button";
import { card, colors, fonts } from "../styles/base";
import { ResultCard } from "../components/resultCard";

export default function GoScanScreen() {
    return (
        <ScrollView
            contentContainerStyle={styles.container}
            keyboardShouldPersistTaps="handled"
        >
            <ProfileCard style={{ marginTop: 30 }} />
            <View
                style={[
                    card,
                    {
                        backgroundColor: colors.background_primary,
                        alignItems: "center",
                        elevation: 0,
                    },
                ]}
            >
                <Pressable>
                    <View style={styles.uploadImageContainer}>
                        <Ionicons name="camera" size={100} color="#5081E2" />
                        <Text style={styles.uploadImageText}>
                            Upload VIA Image
                        </Text>
                    </View>
                </Pressable>
                <ButtonCustom text="Go Scan" />
            </View>
            <ResultCard />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1, // pastikan ScrollView dapat mengisi seluruh ruang yang tersedia
        alignItems: "center",
        paddingHorizontal: 30,
        paddingBottom: 30,
        backgroundColor: colors.background_primary,
    },
    uploadImageContainer: {
        width: 200,
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15,
        borderRadius: 15,
        borderWidth: 3,
        borderStyle: "dashed",
        borderColor: colors.color_secondary,
    },
    uploadImageText: {
        fontSize: fonts.md,
        color: colors.text_muted,
    },
});
