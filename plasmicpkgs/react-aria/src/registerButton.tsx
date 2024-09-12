import React from "react";
import type { ButtonProps } from "react-aria-components";
import { Button } from "react-aria-components";
import { getCommonProps } from "./common";
import {
  CodeComponentMetaOverrides,
  makeComponentName,
  Registerable,
  registerComponentHelper,
} from "./utils";
import { pickAriaComponentVariants, WithVariants } from "./variant-utils";

const BUTTON_VARIANTS = [
  "hovered" as const,
  "pressed" as const,
  "focused" as const,
  "focusVisible" as const,
  "disabled" as const,
];

const { variants, withObservedValues } =
  pickAriaComponentVariants(BUTTON_VARIANTS);

interface BaseButtonProps
  extends ButtonProps,
    WithVariants<typeof BUTTON_VARIANTS> {
  children: React.ReactNode;
  resetsForm?: boolean;
  submitsForm?: boolean;
}

export function BaseButton(props: BaseButtonProps) {
  const { submitsForm, resetsForm, children, updateVariant, ...rest } = props;

  const type = submitsForm ? "submit" : resetsForm ? "reset" : "button";

  return (
    <Button type={type} {...rest}>
      {({ isHovered, isPressed, isFocused, isFocusVisible, isDisabled }) =>
        withObservedValues(
          children,
          {
            hovered: isHovered,
            pressed: isPressed,
            focused: isFocused,
            focusVisible: isFocusVisible,
            disabled: isDisabled,
          },
          updateVariant
        )
      }
    </Button>
  );
}

export const BUTTON_COMPONENT_NAME = makeComponentName("button");

export function registerButton(
  loader?: Registerable,
  overrides?: CodeComponentMetaOverrides<typeof BaseButton>
) {
  registerComponentHelper(
    loader,
    BaseButton,
    {
      name: BUTTON_COMPONENT_NAME,
      displayName: "Aria Button",
      importPath: "@plasmicpkgs/react-aria/skinny/registerButton",
      importName: "BaseButton",
      variants,
      defaultStyles: {
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "black",
        padding: "2px 10px",
        cursor: "pointer",
      },
      props: {
        ...getCommonProps<BaseButtonProps>("button", [
          "autoFocus",
          "isDisabled",
          "aria-label",
        ]),
        children: {
          type: "slot",
          mergeWithParent: true as any,
          defaultValue: {
            type: "text",
            value: "Button",
          },
        },
        submitsForm: {
          type: "boolean",
          displayName: "Submits form?",
          defaultValueHint: false,
          hidden: (ps: BaseButtonProps) => Boolean(ps.resetsForm),
          description:
            "Whether clicking this button should submit the enclosing form.",
          advanced: true,
        },
        resetsForm: {
          type: "boolean",
          displayName: "Resets form?",
          defaultValueHint: false,
          hidden: (ps: BaseButtonProps) => Boolean(ps.submitsForm),
          description:
            "Whether clicking this button should reset the enclosing form.",
          advanced: true,
        },
        onPress: {
          type: "eventHandler",
          argTypes: [{ name: "event", type: "object" }],
        },
      },
      trapsFocus: true,
    },
    overrides
  );
}
