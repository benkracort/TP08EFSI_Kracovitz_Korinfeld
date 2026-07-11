import { useState } from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import {
    Ionicons,
    Feather,
    Entypo,
} from "@expo/vector-icons";
import Avatar from '../shared/Avatar'

export default function PostCard({ post, navigation }) {

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
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.userInfo}>
                    <Avatar
                        image={post.image}
                        size={36}
                    />

                    <View style={styles.infoPost}>
                        <Text style={styles.username}>
                            {post.username}
                        </Text>

                        <Text style={styles.location}>
                            {post.location}
                        </Text>
                    </View>
                </View>

                <Entypo
                    name="dots-three-vertical"
                    size={16}
                />
            </View>

            <TouchableOpacity
                activeOpacity={0.95}
                onPress={() =>
                    navigation.navigate("Detail", {
                        post,
                    })
                }
            >

                <Image
                    source={{ uri: post.image }}
                    style={styles.image}
                />

            </TouchableOpacity>

            <View style={styles.actions}>
                <View style={styles.leftActions}>
                    <TouchableOpacity
                        onPress={toggleLike}
                    >

                        <Ionicons
                            name={liked ? "heart" : "heart-outline"}
                            size={28}
                            color={liked ? "#ED4956" : "#000"}
                        />
                    </TouchableOpacity>

                    <Feather
                        name="message-circle"
                        size={26}
                    />

                    <Ionicons
                        name="paper-plane-outline"
                        size={26}
                    />
                </View>

                <Ionicons
                    name="bookmark-outline"
                    size={26}
                />
            </View>

            <Text style={styles.likes}>
                {likes.toLocaleString()} Me gusta
            </Text>

            <Text style={styles.caption}>
                <Text style={styles.username}>{post.username}</Text>
                {" "}
                {post.caption}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        marginBottom: 12,
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
    },

    userInfo: {
        flexDirection: "row",
        alignItems: "center",
    },

    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginRight: 10,
    },

    username: {
        fontWeight: "600",
        fontSize: 13,
    },

    location: {
        fontSize: 11,
        color: "#666",
    },

    image: {
        width: "100%",
        aspectRatio: 1,
    },

    actions: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingTop: 10,
    },

    leftActions: {
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
    },

    likes: {
        fontWeight: "600",
        marginHorizontal: 10,
        marginTop: 8,
    },

    caption: {
        marginHorizontal: 10,
        marginTop: 5,
        marginBottom: 12,
        fontSize: 13,
    },
    infoPost: {
        marginLeft: 10
    }
});