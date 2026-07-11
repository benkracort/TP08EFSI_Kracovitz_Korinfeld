import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                headerShown: false,

                tabBarShowLabel: false,

                tabBarActiveTintColor: "#000",

                tabBarInactiveTintColor: "#777",

                tabBarStyle: {
                    backgroundColor: "#fff",
                    borderTopColor: "#ddd",
                    height: 60,
                },

                tabBarIcon: ({ color, size }) => {
                    let icon;

                    switch (route.name) {
                        case "Home":
                            icon = "home";
                            break;

                        case "Search":
                            icon = "search";
                            break;

                        case "Add":
                            icon = "add-circle-outline";
                            break;

                        case "Activity":
                            icon = "heart-outline";
                            break;

                        case "Profile":
                            icon = "person-circle-outline";
                            break;
                    }

                    return (
                        <Ionicons
                            name={icon}
                            size={26}
                            color={color}
                        />
                    );
                },
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
            />

            <Tab.Screen
                name="Search"
                component={HomeScreen}
            />

            <Tab.Screen
                name="Add"
                component={HomeScreen}
            />

            <Tab.Screen
                name="Activity"
                component={HomeScreen}
            />

            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
            />
        </Tab.Navigator>
    );
}

export default function AppNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="MainTabs"
                component={MainTabs}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="Detail"
                component={DetailScreen}
                options={{
                    title: "Publicación",
                    headerTitleAlign: "center",
                }}
            />
        </Stack.Navigator>
    );
}