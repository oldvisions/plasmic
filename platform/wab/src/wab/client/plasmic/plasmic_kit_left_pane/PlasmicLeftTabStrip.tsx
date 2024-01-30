// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aukbrhkegRkQ6KizvhdUPT
// Component: l7y_rhJyMt2

import * as React from "react";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName,
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions,
} from "@plasmicapp/react-web/lib/host";

import AddButton from "../../../../AddButton"; // plasmic-import: ss1yYyG4Pi/component
import LeftTabButton from "../../components/studio/LeftTabButton"; // plasmic-import: 1q_JapBg7U/component
import IconButton from "../../components/widgets/IconButton"; // plasmic-import: LPry-TF4j22a/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_deprecated_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import plasmic_plasmic_kit_new_design_system_former_style_controls_css from "../plasmic_kit_style_controls/plasmic_plasmic_kit_styles_pane.module.css"; // plasmic-import: gYEVvAzCcLMHDVPvuYxkFh/projectcss
import projectcss from "../PP__plasmickit_left_pane.module.css"; // plasmic-import: aukbrhkegRkQ6KizvhdUPT/projectcss
import sty from "./PlasmicLeftTabStrip.module.css"; // plasmic-import: l7y_rhJyMt2/css

import WarningTrianglesvgIcon from "../q_4_icons/icons/PlasmicIcon__WarningTrianglesvg"; // plasmic-import: S0L-xosWD/icon
import TreeIcon from "../plasmic_kit/PlasmicIcon__Tree"; // plasmic-import: 4KZjuPY_m0VTb/icon
import ComponentssvgIcon from "../q_4_icons/icons/PlasmicIcon__Componentssvg"; // plasmic-import: coPzxnFyi/icon
import GearIcon from "../plasmic_kit/PlasmicIcon__Gear"; // plasmic-import: ZmVZmXEc9f_SR/icon
import DotsHorizontalCirclesvgIcon from "../q_4_icons/icons/PlasmicIcon__DotsHorizontalCirclesvg"; // plasmic-import: xdn8wiJBv/icon
import WandIcon from "../plasmic_kit/PlasmicIcon__Wand"; // plasmic-import: vTVU9zQnDPZGl/icon
import DiamondssvgIcon from "../plasmic_kit_q_4_icons/icons/PlasmicIcon__Diamondssvg"; // plasmic-import: uzBbTcdyE/icon
import MixinIcon from "../plasmic_kit/PlasmicIcon__Mixin"; // plasmic-import: XA82Nhrgqj98Z/icon
import ComponentsvgIcon from "../plasmic_kit_q_4_icons/icons/PlasmicIcon__Componentsvg"; // plasmic-import: vJVrKlrDD/icon
import File2SvgIcon from "../q_4_icons/icons/PlasmicIcon__File2Svg"; // plasmic-import: zldfLXBdc/icon
import PhotosvgIcon from "../q_4_icons/icons/PlasmicIcon__Photosvg"; // plasmic-import: BzQDBpjA9/icon
import PaintbrushsvgIcon from "../q_4_icons/icons/PlasmicIcon__Paintbrushsvg"; // plasmic-import: WPHwb7V6d/icon
import FontFamily2SvgIcon from "../plasmic_kit_icons/icons/PlasmicIcon__FontFamily2Svg"; // plasmic-import: mlYvYWbm5/icon
import DevicessvgIcon from "../plasmic_kit_q_4_icons/icons/PlasmicIcon__Devicessvg"; // plasmic-import: bbAxEiIwy/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: CD14l2YUnk/icon
import DownloadsvgIcon from "../q_4_icons/icons/PlasmicIcon__Downloadsvg"; // plasmic-import: Bu7POPssl/icon
import ClocksvgIcon from "../q_4_icons/icons/PlasmicIcon__Clocksvg"; // plasmic-import: 9MhqTIkUT/icon
import Settings2SvgIcon from "../q_4_icons/icons/PlasmicIcon__Settings2Svg"; // plasmic-import: jFYH6BL9T/icon
import PlugsvgIcon from "../q_4_icons/icons/PlasmicIcon__Plugsvg"; // plasmic-import: s2iV8XTPW/icon
import HelpCirclesvgIcon from "../q_4_icons/icons/PlasmicIcon__HelpCirclesvg"; // plasmic-import: zY-2PPrFT/icon
import ChevronDownsvgIcon from "../q_4_icons/icons/PlasmicIcon__ChevronDownsvg"; // plasmic-import: xZrB9_0ir/icon
import FigmasvgIcon from "../q_4_icons/icons/PlasmicIcon__Figmasvg"; // plasmic-import: cReVjwCaJ/icon
import KeyboardIcon from "../plasmic_kit_design_system/PlasmicIcon__Keyboard"; // plasmic-import: tSLSUCy1RH/icon
import SpeechBubblesvgIcon from "../q_4_icons/icons/PlasmicIcon__SpeechBubblesvg"; // plasmic-import: nkJ1joJAv/icon
import UsersvgIcon from "../q_4_icons/icons/PlasmicIcon__Usersvg"; // plasmic-import: ejczgMIkT/icon
import image9D5NIfkhj from "./images/image.svg"; // plasmic-import: 9D5nIFKHJ/picture

createPlasmicElementProxy;

export type PlasmicLeftTabStrip__VariantMembers = {
  activeTab:
    | "outline"
    | "tokens"
    | "mixins"
    | "components"
    | "images"
    | "themes"
    | "fonts"
    | "imports"
    | "versions"
    | "pages"
    | "responsiveness"
    | "settings"
    | "splits"
    | "endpoints"
    | "insert"
    | "copilot"
    | "lint";
  showAvatar: "showAvatar";
  withInsertButton: "withInsertButton";
};
export type PlasmicLeftTabStrip__VariantsArgs = {
  activeTab?: SingleChoiceArg<
    | "outline"
    | "tokens"
    | "mixins"
    | "components"
    | "images"
    | "themes"
    | "fonts"
    | "imports"
    | "versions"
    | "pages"
    | "responsiveness"
    | "settings"
    | "splits"
    | "endpoints"
    | "insert"
    | "copilot"
    | "lint"
  >;
  showAvatar?: SingleBooleanChoiceArg<"showAvatar">;
  withInsertButton?: SingleBooleanChoiceArg<"withInsertButton">;
};
type VariantPropType = keyof PlasmicLeftTabStrip__VariantsArgs;
export const PlasmicLeftTabStrip__VariantProps = new Array<VariantPropType>(
  "activeTab",
  "showAvatar",
  "withInsertButton"
);

export type PlasmicLeftTabStrip__ArgsType = {
  buttons?: React.ReactNode;
};
type ArgPropType = keyof PlasmicLeftTabStrip__ArgsType;
export const PlasmicLeftTabStrip__ArgProps = new Array<ArgPropType>("buttons");

export type PlasmicLeftTabStrip__OverridesType = {
  root?: Flex__<"div">;
  insert?: Flex__<typeof AddButton>;
  divider?: Flex__<"div">;
  copilot?: Flex__<typeof LeftTabButton>;
  tokens?: Flex__<typeof LeftTabButton>;
  mixins?: Flex__<typeof LeftTabButton>;
  components?: Flex__<typeof LeftTabButton>;
  pages?: Flex__<typeof LeftTabButton>;
  images?: Flex__<typeof LeftTabButton>;
  themes?: Flex__<typeof LeftTabButton>;
  fonts?: Flex__<typeof LeftTabButton>;
  responsiveness?: Flex__<typeof LeftTabButton>;
  splits?: Flex__<typeof LeftTabButton>;
  imports?: Flex__<typeof LeftTabButton>;
  versions?: Flex__<typeof LeftTabButton>;
  settings?: Flex__<typeof LeftTabButton>;
  endpoints?: Flex__<typeof LeftTabButton>;
  helpGroup?: Flex__<typeof IconButton>;
  figma?: Flex__<typeof IconButton>;
  keyboard?: Flex__<typeof IconButton>;
  slack?: Flex__<typeof IconButton>;
  help?: Flex__<typeof IconButton>;
  players?: Flex__<"div">;
  avatar?: Flex__<"img">;
};

export interface DefaultLeftTabStripProps {
  buttons?: React.ReactNode;
  activeTab?: SingleChoiceArg<
    | "outline"
    | "tokens"
    | "mixins"
    | "components"
    | "images"
    | "themes"
    | "fonts"
    | "imports"
    | "versions"
    | "pages"
    | "responsiveness"
    | "settings"
    | "splits"
    | "endpoints"
    | "insert"
    | "copilot"
    | "lint"
  >;
  showAvatar?: SingleBooleanChoiceArg<"showAvatar">;
  withInsertButton?: SingleBooleanChoiceArg<"withInsertButton">;
  className?: string;
}

const $$ = {};

function PlasmicLeftTabStrip__RenderFunc(props: {
  variants: PlasmicLeftTabStrip__VariantsArgs;
  args: PlasmicLeftTabStrip__ArgsType;
  overrides: PlasmicLeftTabStrip__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants,
  };

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "activeTab",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.activeTab,
      },
      {
        path: "showAvatar",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.showAvatar,
      },
      {
        path: "withInsertButton",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props.withInsertButton,
      },
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs,
  });

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_plasmic_kit_design_system_deprecated_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        plasmic_plasmic_kit_new_design_system_former_style_controls_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootactiveTab_mixins]: hasVariant($state, "activeTab", "mixins"),
          [sty.rootactiveTab_outline]: hasVariant(
            $state,
            "activeTab",
            "outline"
          ),
          [sty.rootactiveTab_versions]: hasVariant(
            $state,
            "activeTab",
            "versions"
          ),
          [sty.rootshowAvatar]: hasVariant($state, "showAvatar", "showAvatar"),
          [sty.rootwithInsertButton]: hasVariant(
            $state,
            "withInsertButton",
            "withInsertButton"
          ),
        }
      )}
    >
      <AddButton
        data-plasmic-name={"insert"}
        data-plasmic-override={overrides.insert}
        className={classNames("__wab_instance", sty.insert, {
          [sty.insertwithInsertButton]: hasVariant(
            $state,
            "withInsertButton",
            "withInsertButton"
          ),
        })}
      />

      <div className={classNames(projectcss.all, sty.freeBox__s2Zn2)}>
        {renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <LeftTabButton
                className={classNames(
                  "__wab_instance",
                  sty.leftTabButton__xnfKt
                )}
                icon={
                  <WarningTrianglesvgIcon
                    className={classNames(projectcss.all, sty.svg__fJuLy)}
                    role={"img"}
                  />
                }
              />

              <LeftTabButton
                className={classNames(
                  "__wab_instance",
                  sty.leftTabButton__ro6Iy
                )}
                icon={
                  <TreeIcon
                    className={classNames(projectcss.all, sty.svg__rJYem)}
                    role={"img"}
                  />
                }
              />

              <LeftTabButton
                className={classNames(
                  "__wab_instance",
                  sty.leftTabButton__uOnAi
                )}
                icon={
                  <ComponentssvgIcon
                    className={classNames(projectcss.all, sty.svg__p2MgB)}
                    role={"img"}
                  />
                }
              />

              <LeftTabButton
                className={classNames(
                  "__wab_instance",
                  sty.leftTabButton___8X6Fn
                )}
                icon={
                  <GearIcon
                    className={classNames(projectcss.all, sty.svg__qPkMk)}
                    role={"img"}
                  />
                }
              />

              <LeftTabButton
                className={classNames(
                  "__wab_instance",
                  sty.leftTabButton___5AwUj
                )}
                icon={
                  <DotsHorizontalCirclesvgIcon
                    className={classNames(projectcss.all, sty.svg___7Cd9B)}
                    role={"img"}
                  />
                }
              />
            </React.Fragment>
          ),
          value: args.buttons,
        })}
      </div>
      <div
        data-plasmic-name={"divider"}
        data-plasmic-override={overrides.divider}
        className={classNames(projectcss.all, sty.divider, {
          [sty.divideractiveTab_mixins]: hasVariant(
            $state,
            "activeTab",
            "mixins"
          ),
          [sty.dividerwithInsertButton]: hasVariant(
            $state,
            "withInsertButton",
            "withInsertButton"
          ),
        })}
      />

      <LeftTabButton
        data-plasmic-name={"copilot"}
        data-plasmic-override={overrides.copilot}
        className={classNames("__wab_instance", sty.copilot, {
          [sty.copilotactiveTab_copilot]: hasVariant(
            $state,
            "activeTab",
            "copilot"
          ),
          [sty.copilotactiveTab_endpoints]: hasVariant(
            $state,
            "activeTab",
            "endpoints"
          ),
          [sty.copilotactiveTab_outline]: hasVariant(
            $state,
            "activeTab",
            "outline"
          ),
          [sty.copilotshowAvatar]: hasVariant(
            $state,
            "showAvatar",
            "showAvatar"
          ),
          [sty.copilotwithInsertButton]: hasVariant(
            $state,
            "withInsertButton",
            "withInsertButton"
          ),
        })}
        icon={
          <WandIcon
            className={classNames(projectcss.all, sty.svg__wujwR)}
            role={"img"}
          />
        }
        isSelected={
          hasVariant($state, "activeTab", "copilot") ? true : undefined
        }
      />

      <LeftTabButton
        data-plasmic-name={"tokens"}
        data-plasmic-override={overrides.tokens}
        className={classNames("__wab_instance", sty.tokens, {
          [sty.tokensactiveTab_mixins]: hasVariant(
            $state,
            "activeTab",
            "mixins"
          ),
          [sty.tokensactiveTab_tokens]: hasVariant(
            $state,
            "activeTab",
            "tokens"
          ),
          [sty.tokenswithInsertButton]: hasVariant(
            $state,
            "withInsertButton",
            "withInsertButton"
          ),
        })}
        icon={
          <DiamondssvgIcon
            className={classNames(projectcss.all, sty.svg__mn5Uf, {
              [sty.svgactiveTab_tokens__mn5UfdVhrq]: hasVariant(
                $state,
                "activeTab",
                "tokens"
              ),
            })}
            role={"img"}
          />
        }
        isSelected={
          hasVariant($state, "activeTab", "tokens") ? true : undefined
        }
      />

      <LeftTabButton
        data-plasmic-name={"mixins"}
        data-plasmic-override={overrides.mixins}
        className={classNames("__wab_instance", sty.mixins, {
          [sty.mixinsactiveTab_mixins]: hasVariant(
            $state,
            "activeTab",
            "mixins"
          ),
        })}
        icon={
          <MixinIcon
            className={classNames(projectcss.all, sty.svg__nxYe)}
            role={"img"}
          />
        }
        isSelected={
          hasVariant($state, "activeTab", "mixins") ? true : undefined
        }
      />

      <LeftTabButton
        data-plasmic-name={"components"}
        data-plasmic-override={overrides.components}
        className={classNames("__wab_instance", sty.components, {
          [sty.componentsactiveTab_components]: hasVariant(
            $state,
            "activeTab",
            "components"
          ),
          [sty.componentsactiveTab_images]: hasVariant(
            $state,
            "activeTab",
            "images"
          ),
          [sty.componentsactiveTab_pages]: hasVariant(
            $state,
            "activeTab",
            "pages"
          ),
        })}
        icon={
          <ComponentsvgIcon
            className={classNames(projectcss.all, sty.svg__kca03, {
              [sty.svgshowAvatar__kca039NVfe]: hasVariant(
                $state,
                "showAvatar",
                "showAvatar"
              ),
            })}
            role={"img"}
          />
        }
        isSelected={
          hasVariant($state, "activeTab", "components") ? true : undefined
        }
      />

      <LeftTabButton
        data-plasmic-name={"pages"}
        data-plasmic-override={overrides.pages}
        className={classNames("__wab_instance", sty.pages, {
          [sty.pagesactiveTab_components]: hasVariant(
            $state,
            "activeTab",
            "components"
          ),
          [sty.pagesactiveTab_images]: hasVariant(
            $state,
            "activeTab",
            "images"
          ),
          [sty.pagesactiveTab_pages]: hasVariant($state, "activeTab", "pages"),
        })}
        icon={
          <File2SvgIcon
            className={classNames(projectcss.all, sty.svg__g5Iby)}
            role={"img"}
          />
        }
        isSelected={hasVariant($state, "activeTab", "pages") ? true : undefined}
      />

      <LeftTabButton
        data-plasmic-name={"images"}
        data-plasmic-override={overrides.images}
        className={classNames("__wab_instance", sty.images, {
          [sty.imagesactiveTab_images]: hasVariant(
            $state,
            "activeTab",
            "images"
          ),
          [sty.imagesactiveTab_themes]: hasVariant(
            $state,
            "activeTab",
            "themes"
          ),
        })}
        icon={
          <PhotosvgIcon
            className={classNames(projectcss.all, sty.svg___75XmC, {
              [sty.svgactiveTab_tokens___75XmCdVhrq]: hasVariant(
                $state,
                "activeTab",
                "tokens"
              ),
              [sty.svgshowAvatar___75XmC9NVfe]: hasVariant(
                $state,
                "showAvatar",
                "showAvatar"
              ),
            })}
            role={"img"}
          />
        }
        isSelected={
          hasVariant($state, "activeTab", "images") ? true : undefined
        }
      />

      <LeftTabButton
        data-plasmic-name={"themes"}
        data-plasmic-override={overrides.themes}
        className={classNames("__wab_instance", sty.themes, {
          [sty.themesactiveTab_fonts]: hasVariant($state, "activeTab", "fonts"),
          [sty.themesactiveTab_themes]: hasVariant(
            $state,
            "activeTab",
            "themes"
          ),
        })}
        icon={
          <PaintbrushsvgIcon
            className={classNames(projectcss.all, sty.svg___15AOq)}
            role={"img"}
          />
        }
        isSelected={
          hasVariant($state, "activeTab", "themes") ? true : undefined
        }
      />

      <LeftTabButton
        data-plasmic-name={"fonts"}
        data-plasmic-override={overrides.fonts}
        className={classNames("__wab_instance", sty.fonts, {
          [sty.fontsactiveTab_fonts]: hasVariant($state, "activeTab", "fonts"),
        })}
        icon={
          <FontFamily2SvgIcon
            className={classNames(projectcss.all, sty.svg__odrDh)}
            role={"img"}
          />
        }
        isSelected={hasVariant($state, "activeTab", "fonts") ? true : undefined}
      />

      <LeftTabButton
        data-plasmic-name={"responsiveness"}
        data-plasmic-override={overrides.responsiveness}
        className={classNames("__wab_instance", sty.responsiveness, {
          [sty.responsivenessactiveTab_fonts]: hasVariant(
            $state,
            "activeTab",
            "fonts"
          ),
          [sty.responsivenessactiveTab_pages]: hasVariant(
            $state,
            "activeTab",
            "pages"
          ),
          [sty.responsivenessactiveTab_responsiveness]: hasVariant(
            $state,
            "activeTab",
            "responsiveness"
          ),
        })}
        icon={
          <DevicessvgIcon
            className={classNames(projectcss.all, sty.svg__qjH4W)}
            role={"img"}
          />
        }
        isSelected={
          hasVariant($state, "activeTab", "responsiveness") ? true : undefined
        }
      />

      <LeftTabButton
        data-plasmic-name={"splits"}
        data-plasmic-override={overrides.splits}
        className={classNames("__wab_instance", sty.splits, {
          [sty.splitsactiveTab_fonts]: hasVariant($state, "activeTab", "fonts"),
          [sty.splitsactiveTab_pages]: hasVariant($state, "activeTab", "pages"),
          [sty.splitsactiveTab_responsiveness]: hasVariant(
            $state,
            "activeTab",
            "responsiveness"
          ),
          [sty.splitsactiveTab_splits]: hasVariant(
            $state,
            "activeTab",
            "splits"
          ),
        })}
        icon={
          <IconIcon
            className={classNames(projectcss.all, sty.svg___2ZAk3)}
            role={"img"}
          />
        }
        isSelected={
          hasVariant($state, "activeTab", "splits") ? true : undefined
        }
      />

      <LeftTabButton
        data-plasmic-name={"imports"}
        data-plasmic-override={overrides.imports}
        className={classNames("__wab_instance", sty.imports, {
          [sty.importsactiveTab_fonts]: hasVariant(
            $state,
            "activeTab",
            "fonts"
          ),
          [sty.importsactiveTab_imports]: hasVariant(
            $state,
            "activeTab",
            "imports"
          ),
          [sty.importsactiveTab_versions]: hasVariant(
            $state,
            "activeTab",
            "versions"
          ),
        })}
        icon={
          <DownloadsvgIcon
            className={classNames(projectcss.all, sty.svg__c7UmG)}
            role={"img"}
          />
        }
        isSelected={
          hasVariant($state, "activeTab", "imports") ? true : undefined
        }
      />

      <LeftTabButton
        data-plasmic-name={"versions"}
        data-plasmic-override={overrides.versions}
        className={classNames("__wab_instance", sty.versions, {
          [sty.versionsactiveTab_versions]: hasVariant(
            $state,
            "activeTab",
            "versions"
          ),
          [sty.versionsshowAvatar]: hasVariant(
            $state,
            "showAvatar",
            "showAvatar"
          ),
        })}
        icon={
          <ClocksvgIcon
            className={classNames(projectcss.all, sty.svg__pfWid)}
            role={"img"}
          />
        }
        isSelected={
          hasVariant($state, "activeTab", "versions") ? true : undefined
        }
      />

      <LeftTabButton
        data-plasmic-name={"settings"}
        data-plasmic-override={overrides.settings}
        className={classNames("__wab_instance", sty.settings, {
          [sty.settingsactiveTab_settings]: hasVariant(
            $state,
            "activeTab",
            "settings"
          ),
        })}
        icon={
          <Settings2SvgIcon
            className={classNames(projectcss.all, sty.svg__kWpBc, {
              [sty.svgactiveTab_settings__kWpBcpqVqJ]: hasVariant(
                $state,
                "activeTab",
                "settings"
              ),
            })}
            role={"img"}
          />
        }
        isSelected={
          hasVariant($state, "activeTab", "settings") ? true : undefined
        }
      />

      <LeftTabButton
        data-plasmic-name={"endpoints"}
        data-plasmic-override={overrides.endpoints}
        className={classNames("__wab_instance", sty.endpoints, {
          [sty.endpointsactiveTab_endpoints]: hasVariant(
            $state,
            "activeTab",
            "endpoints"
          ),
          [sty.endpointsactiveTab_settings]: hasVariant(
            $state,
            "activeTab",
            "settings"
          ),
        })}
        icon={
          <PlugsvgIcon
            className={classNames(projectcss.all, sty.svg__sZo1B, {
              [sty.svgactiveTab_endpoints__sZo1By0Hm3]: hasVariant(
                $state,
                "activeTab",
                "endpoints"
              ),
              [sty.svgactiveTab_settings__sZo1BpqVqJ]: hasVariant(
                $state,
                "activeTab",
                "settings"
              ),
            })}
            role={"img"}
          />
        }
        isSelected={
          hasVariant($state, "activeTab", "endpoints") ? true : undefined
        }
      />

      <IconButton
        data-plasmic-name={"helpGroup"}
        data-plasmic-override={overrides.helpGroup}
        children2={
          <ChevronDownsvgIcon
            className={classNames(projectcss.all, sty.svg__b3F)}
            role={"img"}
          />
        }
        className={classNames("__wab_instance", sty.helpGroup, {
          [sty.helpGroupshowAvatar]: hasVariant(
            $state,
            "showAvatar",
            "showAvatar"
          ),
        })}
        size={"large"}
      >
        <HelpCirclesvgIcon
          className={classNames(projectcss.all, sty.svg__tupD, {
            [sty.svgshowAvatar__tupD9NVfe]: hasVariant(
              $state,
              "showAvatar",
              "showAvatar"
            ),
          })}
          role={"img"}
        />
      </IconButton>
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox___3AubH, {
          [sty.freeBoxshowAvatar___3AubH9NVfe]: hasVariant(
            $state,
            "showAvatar",
            "showAvatar"
          ),
        })}
      >
        <IconButton
          data-plasmic-name={"figma"}
          data-plasmic-override={overrides.figma}
          children2={
            <ChevronDownsvgIcon
              className={classNames(projectcss.all, sty.svg__gjOa1)}
              role={"img"}
            />
          }
          className={classNames("__wab_instance", sty.figma, {
            [sty.figmashowAvatar]: hasVariant(
              $state,
              "showAvatar",
              "showAvatar"
            ),
          })}
          size={"large"}
        >
          <FigmasvgIcon
            className={classNames(projectcss.all, sty.svg__r87Op, {
              [sty.svgshowAvatar__r87Op9NVfe]: hasVariant(
                $state,
                "showAvatar",
                "showAvatar"
              ),
              [sty.svgwithInsertButton__r87Op9Mm6M]: hasVariant(
                $state,
                "withInsertButton",
                "withInsertButton"
              ),
            })}
            role={"img"}
          />
        </IconButton>
        <IconButton
          data-plasmic-name={"keyboard"}
          data-plasmic-override={overrides.keyboard}
          children2={
            <ChevronDownsvgIcon
              className={classNames(projectcss.all, sty.svg__zTmmf)}
              role={"img"}
            />
          }
          className={classNames("__wab_instance", sty.keyboard, {
            [sty.keyboardshowAvatar]: hasVariant(
              $state,
              "showAvatar",
              "showAvatar"
            ),
          })}
          size={"large"}
        >
          <KeyboardIcon
            className={classNames(projectcss.all, sty.svg__isDmf)}
            role={"img"}
          />
        </IconButton>
        <IconButton
          data-plasmic-name={"slack"}
          data-plasmic-override={overrides.slack}
          children2={
            <ChevronDownsvgIcon
              className={classNames(projectcss.all, sty.svg__rPpbx)}
              role={"img"}
            />
          }
          className={classNames("__wab_instance", sty.slack, {
            [sty.slackshowAvatar]: hasVariant(
              $state,
              "showAvatar",
              "showAvatar"
            ),
          })}
          size={"large"}
        >
          <div className={classNames(projectcss.all, sty.freeBox__hJJr6)}>
            <SpeechBubblesvgIcon
              className={classNames(projectcss.all, sty.svg__pqmVd)}
              role={"img"}
            />
          </div>
        </IconButton>
        <IconButton
          data-plasmic-name={"help"}
          data-plasmic-override={overrides.help}
          children2={
            <ChevronDownsvgIcon
              className={classNames(projectcss.all, sty.svg__t8IHm)}
              role={"img"}
            />
          }
          className={classNames("__wab_instance", sty.help, {
            [sty.helpshowAvatar]: hasVariant(
              $state,
              "showAvatar",
              "showAvatar"
            ),
          })}
          size={"large"}
        >
          <HelpCirclesvgIcon
            className={classNames(projectcss.all, sty.svg__tlcC1, {
              [sty.svgshowAvatar__tlcC19NVfe]: hasVariant(
                $state,
                "showAvatar",
                "showAvatar"
              ),
            })}
            role={"img"}
          />
        </IconButton>
      </Stack__>
      <div
        className={classNames(projectcss.all, sty.freeBox__igmvF, {
          [sty.freeBoxshowAvatar__igmvF9NVfe]: hasVariant(
            $state,
            "showAvatar",
            "showAvatar"
          ),
        })}
      >
        <div
          data-plasmic-name={"players"}
          data-plasmic-override={overrides.players}
          className={classNames(projectcss.all, sty.players, {
            [sty.playersshowAvatar]: hasVariant(
              $state,
              "showAvatar",
              "showAvatar"
            ),
          })}
        >
          {(hasVariant($state, "showAvatar", "showAvatar") ? true : false) ? (
            <img
              alt={""}
              className={classNames(
                projectcss.all,
                projectcss.img,
                sty.img__fZbIh,
                {
                  [sty.imgshowAvatar__fZbIh9NVfe]: hasVariant(
                    $state,
                    "showAvatar",
                    "showAvatar"
                  ),
                }
              )}
              src={image9D5NIfkhj}
            />
          ) : null}
          {(hasVariant($state, "showAvatar", "showAvatar") ? true : false) ? (
            <UsersvgIcon
              className={classNames(projectcss.all, sty.svg__jFq8B, {
                [sty.svgshowAvatar__jFq8B9NVfe]: hasVariant(
                  $state,
                  "showAvatar",
                  "showAvatar"
                ),
              })}
              role={"img"}
            />
          ) : null}
          {(hasVariant($state, "showAvatar", "showAvatar") ? true : false) ? (
            <img
              alt={""}
              className={classNames(
                projectcss.all,
                projectcss.img,
                sty.img__hptuc,
                {
                  [sty.imgshowAvatar__hptuc9NVfe]: hasVariant(
                    $state,
                    "showAvatar",
                    "showAvatar"
                  ),
                }
              )}
              src={image9D5NIfkhj}
            />
          ) : null}
          {(hasVariant($state, "showAvatar", "showAvatar") ? true : false) ? (
            <img
              alt={""}
              className={classNames(
                projectcss.all,
                projectcss.img,
                sty.img__l76QL,
                {
                  [sty.imgshowAvatar__l76QL9NVfe]: hasVariant(
                    $state,
                    "showAvatar",
                    "showAvatar"
                  ),
                }
              )}
              src={image9D5NIfkhj}
            />
          ) : null}
        </div>
        <img
          data-plasmic-name={"avatar"}
          data-plasmic-override={overrides.avatar}
          alt={""}
          className={classNames(projectcss.all, projectcss.img, sty.avatar, {
            [sty.avatarshowAvatar]: hasVariant(
              $state,
              "showAvatar",
              "showAvatar"
            ),
          })}
          src={image9D5NIfkhj}
        />
      </div>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "insert",
    "divider",
    "copilot",
    "tokens",
    "mixins",
    "components",
    "pages",
    "images",
    "themes",
    "fonts",
    "responsiveness",
    "splits",
    "imports",
    "versions",
    "settings",
    "endpoints",
    "helpGroup",
    "figma",
    "keyboard",
    "slack",
    "help",
    "players",
    "avatar",
  ],
  insert: ["insert"],
  divider: ["divider"],
  copilot: ["copilot"],
  tokens: ["tokens"],
  mixins: ["mixins"],
  components: ["components"],
  pages: ["pages"],
  images: ["images"],
  themes: ["themes"],
  fonts: ["fonts"],
  responsiveness: ["responsiveness"],
  splits: ["splits"],
  imports: ["imports"],
  versions: ["versions"],
  settings: ["settings"],
  endpoints: ["endpoints"],
  helpGroup: ["helpGroup"],
  figma: ["figma"],
  keyboard: ["keyboard"],
  slack: ["slack"],
  help: ["help"],
  players: ["players"],
  avatar: ["avatar"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  insert: typeof AddButton;
  divider: "div";
  copilot: typeof LeftTabButton;
  tokens: typeof LeftTabButton;
  mixins: typeof LeftTabButton;
  components: typeof LeftTabButton;
  pages: typeof LeftTabButton;
  images: typeof LeftTabButton;
  themes: typeof LeftTabButton;
  fonts: typeof LeftTabButton;
  responsiveness: typeof LeftTabButton;
  splits: typeof LeftTabButton;
  imports: typeof LeftTabButton;
  versions: typeof LeftTabButton;
  settings: typeof LeftTabButton;
  endpoints: typeof LeftTabButton;
  helpGroup: typeof IconButton;
  figma: typeof IconButton;
  keyboard: typeof IconButton;
  slack: typeof IconButton;
  help: typeof IconButton;
  players: "div";
  avatar: "img";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLeftTabStrip__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLeftTabStrip__VariantsArgs;
    args?: PlasmicLeftTabStrip__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLeftTabStrip__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLeftTabStrip__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicLeftTabStrip__ArgProps,
          internalVariantPropNames: PlasmicLeftTabStrip__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicLeftTabStrip__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLeftTabStrip";
  } else {
    func.displayName = `PlasmicLeftTabStrip.${nodeName}`;
  }
  return func;
}

export const PlasmicLeftTabStrip = Object.assign(
  // Top-level PlasmicLeftTabStrip renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    insert: makeNodeComponent("insert"),
    divider: makeNodeComponent("divider"),
    copilot: makeNodeComponent("copilot"),
    tokens: makeNodeComponent("tokens"),
    mixins: makeNodeComponent("mixins"),
    components: makeNodeComponent("components"),
    pages: makeNodeComponent("pages"),
    images: makeNodeComponent("images"),
    themes: makeNodeComponent("themes"),
    fonts: makeNodeComponent("fonts"),
    responsiveness: makeNodeComponent("responsiveness"),
    splits: makeNodeComponent("splits"),
    imports: makeNodeComponent("imports"),
    versions: makeNodeComponent("versions"),
    settings: makeNodeComponent("settings"),
    endpoints: makeNodeComponent("endpoints"),
    helpGroup: makeNodeComponent("helpGroup"),
    figma: makeNodeComponent("figma"),
    keyboard: makeNodeComponent("keyboard"),
    slack: makeNodeComponent("slack"),
    help: makeNodeComponent("help"),
    players: makeNodeComponent("players"),
    avatar: makeNodeComponent("avatar"),

    // Metadata about props expected for PlasmicLeftTabStrip
    internalVariantProps: PlasmicLeftTabStrip__VariantProps,
    internalArgProps: PlasmicLeftTabStrip__ArgProps,
  }
);

export default PlasmicLeftTabStrip;
/* prettier-ignore-end */
