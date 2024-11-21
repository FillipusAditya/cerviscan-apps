import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    ScrollView,
    TextInput,
} from "react-native";
import { card, colors, fonts } from "../styles/base";
import { AlbumCard } from "../components/albumCard";
import album_dummy from "../album_dummy.json";

export default function AlbumScreen() {
    const [searchQuery, setSearchQuery] = useState(""); // State untuk input pencarian

    // Fungsi untuk memfilter data berdasarkan pencarian
    const filteredAlbums = album_dummy.filter((item) =>
        item.patientName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <ScrollView
            contentContainerStyle={styles.container}
            keyboardShouldPersistTaps="handled"
        >
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.textSearch}
                    placeholder="Search By Patient's Name"
                    value={searchQuery}
                    onChangeText={setSearchQuery} // Mengupdate state saat input berubah
                    keyboardType="default"
                />
            </View>

            {filteredAlbums.map((item, index) => (
                <AlbumCard
                    patientName={item.patientName}
                    date={item.date}
                    status={item.status}
                    key={index}
                />
            ))}

            {filteredAlbums.length === 0 && ( // Pesan jika tidak ada hasil
                <Text style={styles.noResults}>No patients found.</Text>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: "center",
        paddingHorizontal: 30,
        paddingBottom: 30,
        backgroundColor: colors.background_primary,
    },
    searchContainer: {
        width: "100%",
    },
    textSearch: {
        fontSize: fonts.sm,
        height: 45,
        width: "100%", // Gunakan seluruh lebar container
        padding: 15,
        marginBottom: 15,
        marginTop: 30,
        backgroundColor: colors.background_secondary,
        borderWidth: 1,
        borderColor: colors.color_muted,
        borderRadius: 15,
        elevation: 15,
    },
    noResults: {
        fontSize: fonts.md,
        color: colors.color_muted,
        marginTop: 20,
        textAlign: "center",
    },
});
