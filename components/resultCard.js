import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { card, fonts, colors } from "../styles/base";
import { AccentCard } from "./accentCard";
import features_dummy from "../features_dummy.json";

export const ResultCard = () => {
    return (
        <View style={{ ...card }}>
            <View style={styles.dateNTime}>
                <AccentCard text="mm/dd/yyyy" color={colors.color_accent} />
                <AccentCard text="1 min 2 sec" color={colors.color_accent} />
            </View>
            <View style={styles.resultContainer}>
                <Text style={styles.resultText}>Result</Text>
                <AccentCard text="Abnormal" color={colors.color_error} />
            </View>
            <View style={styles.detailContainer}>
                <View style={styles.subDetailContainer}>
                    <Text style={styles.detailText}>1. VIA Image</Text>
                    <Image
                        source={require("../assets/via-image.jpg")}
                        style={styles.detailImage}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.subDetailContainer}>
                    <Text style={styles.detailText}>2. Gray Image</Text>
                    <Image
                        source={require("../assets/grayscale-image.jpg")}
                        style={styles.detailImage}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.subDetailContainer}>
                    <Text style={styles.detailText}>3. Segmented Image</Text>
                    <Image
                        source={require("../assets/segmented.jpg")}
                        style={styles.detailImage}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.subDetailContainer}>
                    <Text style={styles.detailText}>4. Extracted Features</Text>
                    {features_dummy.map((item, index) => {
                        return (
                            <View style={styles.featuresContainer} key={index}>
                                <Text style={styles.featureText}>
                                    {index + 1}. {item.featureName} :{" "}
                                    {item.featureValue}
                                </Text>
                            </View>
                        );
                    })}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    dateNTime: { flexDirection: "row", justifyContent: "space-between" },
    resultContainer: {
        marginTop: 15,
    },
    resultText: {
        fontSize: fonts.lg,
        fontWeight: "bold",
        marginBottom: 10,
    },
    detailContainer: {
        marginTop: 15,
    },
    detailText: {
        fontSize: fonts.md,
        marginBottom: 10,
    },
    subDetailContainer: {
        marginBottom: 15,
    },
    detailImage: {
        height: 150,
        alignSelf: "center",
    },
    featureText: {
        fontSize: fonts.md,
        marginBottom: 5,
    },
    featuresContainer: {
        paddingLeft: 20,
    },
});
