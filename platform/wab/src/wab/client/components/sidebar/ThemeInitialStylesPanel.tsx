// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import { RuleSet } from "@/wab/classes";
import { ColumnsStyleOnlySection } from "@/wab/client/components/sidebar-tabs/columns-section";
import { LayoutSection } from "@/wab/client/components/sidebar-tabs/LayoutSection";
import { SizeSection } from "@/wab/client/components/sidebar-tabs/SizeSection";
import { SpacingSection } from "@/wab/client/components/sidebar-tabs/SpacingSection";
import {
  mkStyleComponent,
  providesStyleComponent,
  SingleRsExpsProvider,
} from "@/wab/client/components/style-controls/StyleComponent";
import {
  DefaultThemeInitialStylesPanelProps,
  PlasmicThemeInitialStylesPanel,
} from "@/wab/client/plasmic/plasmic_kit_left_pane/PlasmicThemeInitialStylesPanel";
import { StudioCtx, useStudioCtx } from "@/wab/client/studio-ctx/StudioCtx";
import { spawn } from "@/wab/common";
import { AddItemKey } from "@/wab/shared/add-item-keys";
import { getDefaultStyles } from "@/wab/shared/default-styles";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { kebabCase, mapKeys } from "lodash";
import { observer } from "mobx-react";
import * as React from "react";

export type ThemeInitialStylesPanelProps = DefaultThemeInitialStylesPanelProps;

const InitialsForm = observer(function InitialsForm(props: {
  studioCtx: StudioCtx;
  rs: RuleSet;
  addItemKey: AddItemKey;
}) {
  const { studioCtx, rs, addItemKey } = props;
  const expsProvider = new SingleRsExpsProvider(rs, studioCtx, ["display"]);
  return providesStyleComponent(
    mkStyleComponent({ expsProvider }),
    `${rs.uid}`
  )(
    <>
      <SizeSection expsProvider={expsProvider} />
      {addItemKey == AddItemKey.columns ? (
        <ColumnsStyleOnlySection expsProvider={expsProvider} />
      ) : (
        <LayoutSection expsProvider={expsProvider} />
      )}
      <SpacingSection expsProvider={expsProvider} />
    </>
  );
});

const ThemeInitialStylesPanel = observer(
  React.forwardRef(function ThemeInitialStylesPanel_(
    props: ThemeInitialStylesPanelProps,
    ref: HTMLElementRefOf<"div">
  ) {
    const studioCtx = useStudioCtx();
    const [addItemKey, setAddItemKey] = React.useState<AddItemKey | undefined>(
      undefined
    );
    if (!studioCtx.site.activeTheme) {
      return null;
    }
    const rs = addItemKey
      ? studioCtx.site.activeTheme.addItemPrefs[addItemKey]
      : undefined;
    return (
      <PlasmicThemeInitialStylesPanel
        root={{ ref }}
        {...props}
        elementSelect={{
          props: {
            options: [
              { value: AddItemKey.hstack, label: "Horizontal stack" },
              { value: AddItemKey.vstack, label: "Vertical stack" },
              { value: AddItemKey.grid, label: "Grid" },
              { value: AddItemKey.section, label: "Section" },
              { value: AddItemKey.columns, label: "Responsive column" },
              { value: AddItemKey.box, label: "Free container" },
            ],
            placeholder: "Pick an element type to configure",
            onChange: (newKey) => {
              if (!newKey) {
                setAddItemKey(undefined);
              } else {
                setAddItemKey(newKey as AddItemKey);
                const newRs = studioCtx.site.activeTheme!.addItemPrefs[newKey];
                if (!newRs) {
                  spawn(
                    studioCtx.changeUnsafe(() => {
                      const initialStyles = mapKeys(
                        getDefaultStyles(newKey as AddItemKey, undefined),
                        (_, key) => kebabCase(key)
                      );
                      const initialRs = new RuleSet({
                        values: { ...initialStyles },
                        mixins: [],
                      });
                      studioCtx.site.activeTheme!.addItemPrefs[newKey] =
                        initialRs;
                    })
                  );
                }
              }
            },
          },
        }}
        form={
          rs && addItemKey ? (
            <InitialsForm
              studioCtx={studioCtx}
              rs={rs}
              addItemKey={addItemKey}
            />
          ) : null
        }
      />
    );
  })
);

export default ThemeInitialStylesPanel;
