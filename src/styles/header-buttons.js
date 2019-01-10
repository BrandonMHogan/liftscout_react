import React from "react";
import HeaderButtons, { HeaderButton } from "react-navigation-header-buttons";
import Icon from "react-native-vector-icons/FontAwesome5";
import { actionBarTextColor } from "app/styles/constants";

/**
 * Allows customizing of header buttons.
 *
 * Styles kept here, so they can be consistent across the application
 * @param {*} passMeFurther
 */
export const HeaderButtonsStyles = passMeFurther => (
  // the `passMeFurther` variable here contains props from <Item .../> as well as <HeaderButtons ... />
  // and it is important to pass those props to `HeaderButton`
  // then you may add some information like icon size or color (if you use icons)
  <HeaderButton
    {...passMeFurther}
    IconComponent={Icon}
    iconSize={24}
    color={actionBarTextColor}
  />
);
