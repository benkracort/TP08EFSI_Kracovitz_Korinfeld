import { View, Text, StyleSheet } from "react-native";

export default function ErrorMessage() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                ¡Ups!
            </Text>

            <Text style={styles.message}>
                No se pudieron cargar las publicaciones.
            </Text>

            <Text style={styles.message}>
                Verificá tu conexión e intentá nuevamente.
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
        paddingHorizontal: 30,
    },

    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 12,
    },

    message: {
        fontSize: 15,
        color: "#666",
        textAlign: "center",
        marginBottom: 4,
    },
});