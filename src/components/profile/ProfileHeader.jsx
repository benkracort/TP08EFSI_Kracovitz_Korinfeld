import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function ProfileHeader({ user }) {
    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Image
                    source={{ uri: user.profilePicture }}
                    style={styles.avatar}
                />

                <View style={styles.stats}>
                    <View style={styles.stat}>
                        <Text style={styles.number}>{user.posts}</Text>
                        <Text style={styles.label}>Publicaciones</Text>
                    </View>

                    <View style={styles.stat}>
                        <Text style={styles.number}>{user.followers}</Text>
                        <Text style={styles.label}>Seguidores</Text>
                    </View>

                    <View style={styles.stat}>
                        <Text style={styles.number}>{user.following}</Text>
                        <Text style={styles.label}>Seguidos</Text>
                    </View>
                </View>
            </View>

            <Text style={styles.name}>{user.name}</Text>

            <Text style={styles.bio}>{user.bio}</Text>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Editar perfil</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        paddingHorizontal: 15,
        paddingTop: 15,
        paddingBottom: 12,
    },

    topSection: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    avatar: {
        width: 90,
        height: 90,
        borderRadius: 45,
    },

    stats: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        marginLeft: 20,
    },

    stat: {
        alignItems: "center",
    },

    number: {
        fontSize: 18,
        fontWeight: "bold",
    },

    label: {
        fontSize: 13,
        color: "#555",
        marginTop: 3,
    },

    name: {
        marginTop: 15,
        fontSize: 15,
        fontWeight: "bold",
    },

    bio: {
        marginTop: 4,
        fontSize: 14,
        color: "#262626",
        lineHeight: 20,
    },

    button: {
        marginTop: 15,
        borderWidth: 1,
        borderColor: "#DBDBDB",
        borderRadius: 6,
        paddingVertical: 8,
        alignItems: "center",
    },

    buttonText: {
        fontWeight: "600",
        fontSize: 14,
    },
});