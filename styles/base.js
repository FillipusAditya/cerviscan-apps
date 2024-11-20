import { StyleSheet } from "react-native";

export const colors = {
    // Text Colors
    text_dark: "#040316", // Warna teks gelap
    text_light: "#FFFFFF", // Warna teks terang
    text_muted: "#9C9C9C", // Warna teks redup atau sekunder

    // Background Colors
    background_primary: "#FBFBFE", // Warna latar utama
    background_secondary: "#FFFFFF", // Warna latar sekunder

    // Main Colors
    color_primary: "#4056D4", // Warna utama
    color_secondary: "#5081E2", // Warna sekunder
    color_accent: "#4FE0B6", // Warna aksen
    color_muted: "#9C9C9C",

    // Status Colors
    color_error: "#FE0000", // Warna untuk status kesalahan
    color_success: "#00DA19", // Warna untuk status berhasil
};

export const fonts = {
    sm: 12,
    md: 16,
    lg: 24,
};

export const card = {
    width: "100%",
    marginTop: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: colors.background_secondary,
    elevation: 15,
    borderRadius: 15,
};
