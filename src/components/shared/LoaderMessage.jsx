import { View, ActivityIndicator, Text, StyleSheet } from "react-native";

export default function LoaderMessage() {
    return (
        <View style={styles.container}>
            <ActivityIndicator
                size="large"
                color="#000"
            />

            <Text style={styles.text}>
                Cargando publicaciones...
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
    },

    text: {
        marginTop: 15,
        fontSize: 16,
        color: "#666",
    },
});