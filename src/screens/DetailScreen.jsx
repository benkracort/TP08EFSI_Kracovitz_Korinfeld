import { useState } from "react";
import {
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Ionicons, Feather } from "@expo/vector-icons";

import fakeComments from "../data/fakeComments";

export default function DetailScreen({ route }) {
    const { post } = route.params;

    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(post.likes);

    function toggleLike() {
        if (liked) {
            setLiked(false);
            setLikes(likes - 1);
        } else {
            setLiked(true);
            setLikes(likes + 1);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={fakeComments}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={
                    <>
                        <View style={styles.header}>
                            <Image
                                source={{ uri: post.image }}
                                style={styles.avatar}
                            />

                            <View>
                                <Text style={styles.username}>{post.username}</Text>
                                <Text style={styles.location}>{post.location}</Text>
                            </View>
                        </View>

                        <Image
                            source={{ uri: post.image }}
                            style={styles.image}
                        />

                        <View style={styles.actions}>
                            <View style={styles.leftIcons}>
                                <TouchableOpacity onPress={toggleLike}>
                                    <Ionicons
                                        name={liked ? "heart" : "heart-outline"}
                                        size={30}
                                        color={liked ? "#ED4956" : "#000"}
                                    />
                                </TouchableOpacity>

                                <Feather
                                    name="message-circle"
                                    size={28}
                                />

                                <Ionicons
                                    name="paper-plane-outline"
                                    size={28}
                                />
                            </View>

                            <Ionicons
                                name="bookmark-outline"
                                size={28}
                            />
                        </View>

                        <Text style={styles.likes}>
                            {likes.toLocaleString()} Me gusta
                        </Text>

                        <Text style={styles.caption}>
                            <Text style={styles.username}>
                                {post.username}
                            </Text>{" "}
                            {post.caption}
                        </Text>

                        <Text style={styles.commentTitle}>
                            Comentarios
                        </Text>
                    </>
                }
                renderItem={({ item }) => (
                    <View style={styles.comment}>
                        <Text>
                            <Text style={styles.username}>
                                {item.username}
                            </Text>{" "}
                            {item.comment}
                        </Text>
                    </View>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
    },

    avatar: {
        width: 42,
        height: 42,
        borderRadius: 21,
        marginRight: 10,
    },

    username: {
        fontWeight: "600",
        fontSize: 14,
    },

    location: {
        fontSize: 12,
        color: "#666",
    },

    image: {
        width: "100%",
        aspectRatio: 1,
    },

    actions: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 12,
        paddingVertical: 12,
    },

    leftIcons: {
        flexDirection: "row",
        alignItems: "center",
        gap: 18,
    },

    likes: {
        fontWeight: "bold",
        fontSize: 14,
        marginHorizontal: 12,
        marginBottom: 8,
    },

    caption: {
        marginHorizontal: 12,
        marginBottom: 18,
        fontSize: 14,
    },

    commentTitle: {
        marginHorizontal: 12,
        marginBottom: 10,
        fontWeight: "bold",
        fontSize: 16,
    },

    comment: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderBottomWidth: 0.5,
        borderBottomColor: "#EFEFEF",
    },
});