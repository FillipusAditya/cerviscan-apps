import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet, View, Text, StatusBar } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import InformationScreen from "./Screens/InformationScreen";
import GoScanScreen from "./Screens/GoScanScreen";
import AlbumScreen from "./Screens/AlbumsScreen";

import { colors, fonts } from "./styles/base";

const Tab = createBottomTabNavigator();

const CustomHeader = () => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>CerviScan</Text>
            <Image
                source={require("./assets/unsoed-logo.png")}
                style={styles.imageHeader}
            />
        </View>
    );
};

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarPosition: "bottom",
                    tabBarShowLabel: true,
                    tabBarActiveTintColor: colors.color_accent,
                    tabBarInactiveTintColor: colors.text_light,
                    tabBarStyle: {
                        height: 90,
                        paddingTop: 15,
                        backgroundColor: colors.color_primary,
                    },
                    tabBarLabelStyle: {
                        fontFamily: "latto",
                        fontSize: fonts.md,
                    },
                    headerStyle: { backgroundColor: colors.color_primary },
                    headerTitleStyle: {
                        color: colors.text_light,
                        fontSize: fonts.lg,
                        fontWeight: "bold",
                    },
                }}
            >
                <Tab.Screen
                    name="Information"
                    component={InformationScreen}
                    options={{
                        header: () => <CustomHeader />,
                        tabBarIcon: ({ color }) => (
                            <Ionicons
                                name="information-circle"
                                size={30}
                                color={color}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Go Scan"
                    component={GoScanScreen}
                    options={{
                        header: () => <CustomHeader />,
                        tabBarIcon: ({ color }) => (
                            <Ionicons
                                name="scan-circle"
                                size={30}
                                color={color}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Albums"
                    component={AlbumScreen}
                    options={{
                        header: () => <CustomHeader />,
                        tabBarIcon: ({ color }) => (
                            <Ionicons name="albums" size={30} color={color} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 65,
        paddingHorizontal: 30,
        marginTop: StatusBar.currentHeight,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: colors.color_primary,
    },
    headerText: {
        color: colors.text_light,
        fontSize: fonts.lg,
        fontWeight: "bold",
    },
    imageHeader: {
        height: 40,
        width: 40,
    },
});
