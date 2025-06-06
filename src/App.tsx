import "./App.css";
import React, { useEffect, useState } from "react";
import { CometChat } from "@cometchat/chat-sdk-javascript";
import { CometChatUIKitLoginListener } from "@cometchat/chat-uikit-react";
import { CometChatHome } from "CometChat/components/CometChatHome/CometChatHome";
import CometChatLogin from "CometChat/components/CometChatLogin/CometChatLogin";
import { AppContextProvider } from "CometChat/context/AppContext";
import { fontSizes } from "CometChat/styleConfig";
import { useBuilderSettingContext } from "CometChat/context/BuilderSettingsContext";
import useSystemColorScheme from "CometChat/customHooks";
import { generateExtendedColors } from "CometChat/utils/utils";
import '@cometchat/chat-uikit-react/dist/styles/css-variables.css';

function App() {
  const [loggedInUser, setLoggedInUser] = useState<CometChat.User | null>(null);

  /**
   * State to store the logged-in user
   * @type {[CometChat.User | null, Function]}
   */
  const { styleFeatures, setStyleFeatures } = useBuilderSettingContext();
  const systemTheme = useSystemColorScheme();
  const getLoggedInUser = CometChatUIKitLoginListener?.getLoggedInUser();

  /**
   * Effect to handle login and logout listeners
   */
  useEffect(() => {
    CometChat.addLoginListener(
      "runnable-sample-app",
      new CometChat.LoginListener({
        loginSuccess: (user: CometChat.User) => {
          console.log("login success");
          setLoggedInUser(user);
        },
        logoutSuccess: () => {
          console.log("logout success");
          setLoggedInUser(null);
        },
      })
    );

    return () => CometChat.removeLoginListener("runnable-sample-app");
  }, []);

  /**
   * Effect to set the logged-in user from CometChat UIKit
   */
  useEffect(() => {
    setLoggedInUser(getLoggedInUser);
  }, [getLoggedInUser]);

  /**
   * Effect to apply UI customization based on user settings
   */

  /**
   * Updates theme-related styles dynamically based on user settings.
   * It modifies CSS variables for text colors and primary colors.
   */
  useEffect(() => {
    const handleColorPickerChange = () => {
      const checkForRootElement = () => {
        const currentTheme = styleFeatures?.theme;

        if (!currentTheme) {
          console.warn("Theme not found:", currentTheme);
          return;
        }

        const root = document.getElementById(`${currentTheme}-theme`);
        if (!root) {
          console.warn(
            "Root element not found. Ensure the theme data attribute is correctly set."
          );
          return;
        }

        const isLightTheme = currentTheme === "light";
        const isDarkTheme = currentTheme === "dark";
        const isSystemLight =
          currentTheme === "system" && systemTheme === "light";
        const isSystemDark =
          currentTheme === "system" && systemTheme === "dark";

        const brandColor = styleFeatures.color.brandColor;

        const properties = [
          "--cometchat-primary-color",
          "--cometchat-border-color-highlight",
          "--cometchat-text-color-highlight",
          "--cometchat-icon-color-highlight",
          "--cometchat-primary-button-background",
        ];

        properties.forEach((property) =>
          root.style.setProperty(property, brandColor)
        );
        generateExtendedColors();

        // Handle primary text color
        if (
          (isLightTheme || isSystemLight) &&
          styleFeatures.color.primaryTextLight === "#FFFFFF"
        ) {
          setStyleFeatures({
            ...styleFeatures,
            color: { ...styleFeatures.color, primaryTextLight: "#141414" },
          });
          root.style.setProperty("--cometchat-text-color-primary", "#141414");
        } else if (
          (isDarkTheme || isSystemDark) &&
          styleFeatures.color.primaryTextDark === "#141414"
        ) {
          setStyleFeatures({
            ...styleFeatures,
            color: { ...styleFeatures.color, primaryTextDark: "#FFFFFF" },
          });
          root.style.setProperty("--cometchat-text-color-primary", "#FFFFFF");
        } else {
          root.style.setProperty(
            "--cometchat-text-color-primary",
            isLightTheme || isSystemLight
              ? styleFeatures.color.primaryTextLight
              : styleFeatures.color.primaryTextDark
          );
        }

        // Handle secondary text color
        if (
          (isLightTheme || isSystemLight) &&
          styleFeatures.color.secondaryTextLight === "#989898"
        ) {
          setStyleFeatures({
            ...styleFeatures,
            color: { ...styleFeatures.color, secondaryTextLight: "#727272" },
          });
          root.style.setProperty("--cometchat-text-color-secondary", "#727272");
        } else if (
          (isDarkTheme || isSystemDark) &&
          styleFeatures.color.secondaryTextDark === "#727272"
        ) {
          setStyleFeatures({
            ...styleFeatures,
            color: { ...styleFeatures.color, secondaryTextDark: "#989898" },
          });
          root.style.setProperty("--cometchat-text-color-secondary", "#989898");
        } else {
          root.style.setProperty(
            "--cometchat-text-color-secondary",
            isLightTheme || isSystemLight
              ? styleFeatures.color.secondaryTextLight
              : styleFeatures.color.secondaryTextDark
          );
        }
      };

      // Use setTimeout to ensure DOM is ready
      setTimeout(checkForRootElement, 100);
    };
    const handleFontChange = () => {
      document.documentElement.style.setProperty(
        "--cometchat-font-family",
        styleFeatures.typography.font
      );
    };

    const handleFontSizeChange = () => {
      const selectedFontSize =
        fontSizes[styleFeatures.typography.size as keyof typeof fontSizes];
      Object.entries(selectedFontSize).forEach(([key, val]) => {
        document.documentElement.style.setProperty(key, val);
      });
    };

    if (styleFeatures) {
      handleColorPickerChange();
      handleFontChange();
      handleFontSizeChange();
    }
  }, [
    setStyleFeatures,
    styleFeatures,
    styleFeatures.theme,
    systemTheme,
    loggedInUser,
  ]);

  return (
    <div className="App">
      <AppContextProvider>
        {loggedInUser ? <CometChatHome /> : <CometChatLogin />}
      </AppContextProvider>
    </div>
  );
}

export default App;
