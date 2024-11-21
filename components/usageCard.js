import { View, Text, StyleSheet } from "react-native";
import { card, fonts, colors } from "../styles/base";

export const UsageCard = () => {
    return (
        <View style={{ ...card }}>
            <Text style={styles.title}>Usage Instructions</Text>
            <Text style={styles.paragraph}>
                1. Go to the <Text style={{ fontWeight: "bold" }}>Go Scan</Text>{" "}
                tab.
            </Text>
            <Text style={styles.paragraph}>
                2. Fill out the{" "}
                <Text style={{ fontWeight: "bold" }}>Profile Card</Text> by
                entering the patient's first name, last name, and date of birth.
            </Text>
            <Text style={styles.paragraph}>
                3. Upload a VIA image. Ensure the image is cropped to focus on
                the region of interest before uploading.
            </Text>
            <Text style={styles.paragraph}>
                4. Press the <Text style={{ fontWeight: "bold" }}>Go Scan</Text>{" "}
                button below the upload field to start the prediction process.
            </Text>
            <Text style={styles.paragraph}>
                5. View the prediction results and details on the{" "}
                <Text style={{ fontWeight: "bold" }}>Result Card</Text>.
            </Text>
            <Text style={styles.paragraph}>
                6. To save the results to the album, press{" "}
                <Text style={{ fontWeight: "bold" }}>Save</Text>. Press{" "}
                <Text style={{ fontWeight: "bold" }}>Retake Scan</Text> to redo
                the detection.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title: { fontSize: fonts.lg, fontWeight: "bold", marginBottom: 10 },
    paragraph: {
        fontSize: fonts.md,
        marginBottom: 8,
        textAlign: "justify",
    },
});
