import { View, Text, StyleSheet, StatusBar, ScrollView } from "react-native";
import { card, colors, fonts } from "../styles/base";
import { AboutCard } from "../components/aboutCard";
import { UsageCard } from "../components/usageCard";

export default function InformationScreen() {
    return (
        <ScrollView
            contentContainerStyle={styles.container}
            keyboardShouldPersistTaps="handled"
        >
            <AboutCard />
            <UsageCard />
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
});
