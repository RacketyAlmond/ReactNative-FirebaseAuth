import React, { useState } from "react";
import { View } from "react-native";
import { AuthProvider } from "./src/contexts/AuthContext";
import AuthScreen from "./src/screens/AuthScreen";
import BirthdateScreen from "./src/screens/BirthdateScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import {UserProvider} from "./src/contexts/UserContext";

interface User {
    uid: string;
    email: string;
}




const App = () => {
    const [screen, setScreen] = useState<"Auth" | "Birthdate" | "Profile">("Auth");
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    return (
        <UserProvider>
            <AuthProvider>
                <View style={{ flex: 1 }}>
                    {screen === "Auth" && (
                        <AuthScreen
                            onAuthenticated={(user, isNewUser) => {
                                setCurrentUser(user);
                                setScreen(isNewUser ? "Birthdate" : "Profile");
                            }}
                        />
                    )}
                    {screen === "Birthdate" && <BirthdateScreen user={currentUser!} onComplete={() => setScreen("Profile")} />}
                    {screen === "Profile" && <ProfileScreen user={currentUser!} onSignOut={() => setScreen("Auth")} />}
                </View>
            </AuthProvider>
        </UserProvider>
    );
};


export default App;
