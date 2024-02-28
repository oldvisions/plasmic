// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: m8VxGcigeLAEXFe8c12w5Q
// Component: BSjTPez6aCjk

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

import SearchInput from "../../components/sidebar-tabs/ProjectPanel/SearchInput"; // plasmic-import: CHoUJxFMpo/component
import IconButton from "../../components/widgets/IconButton"; // plasmic-import: LPry-TF4j22a/component
import FolderItem from "../../components/sidebar-tabs/ProjectPanel/FolderItem"; // plasmic-import: iWeSjEMdI3/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_plasmic_kit_design_system_css from "../PP__plasmickit_design_system.module.css"; // plasmic-import: tXkSR39sgCDWSitZxC5xFV/projectcss
import plasmic_plasmic_kit_color_tokens_css from "../plasmic_kit_q_4_color_tokens/plasmic_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic_project_panel.module.css"; // plasmic-import: m8VxGcigeLAEXFe8c12w5Q/projectcss
import sty from "./PlasmicOutlineTab.module.css"; // plasmic-import: BSjTPez6aCjk/css

import ChevronDownsvgIcon from "../q_4_icons/icons/PlasmicIcon__ChevronDownsvg"; // plasmic-import: xZrB9_0ir/icon
import ExpandAllIcon from "../plasmic_kit_design_system/PlasmicIcon__ExpandAll"; // plasmic-import: zCExKvD0Do/icon
import CollapseAllIcon from "../plasmic_kit_design_system/PlasmicIcon__CollapseAll"; // plasmic-import: Bg-ZlWgLuQ/icon

createPlasmicElementProxy;

export type PlasmicOutlineTab__VariantMembers = {
  noHeader: "noHeader";
};
export type PlasmicOutlineTab__VariantsArgs = {
  noHeader?: SingleBooleanChoiceArg<"noHeader">;
};
type VariantPropType = keyof PlasmicOutlineTab__VariantsArgs;
export const PlasmicOutlineTab__VariantProps = new Array<VariantPropType>(
  "noHeader"
);

export type PlasmicOutlineTab__ArgsType = {
  children?: React.ReactNode;
  filterLabel?: React.ReactNode;
};
type ArgPropType = keyof PlasmicOutlineTab__ArgsType;
export const PlasmicOutlineTab__ArgProps = new Array<ArgPropType>(
  "children",
  "filterLabel"
);

export type PlasmicOutlineTab__OverridesType = {
  root?: Flex__<"div">;
  headerFilter?: Flex__<"div">;
  searchInput?: Flex__<typeof SearchInput>;
  expandAllButton?: Flex__<typeof IconButton>;
  collapseAllButton?: Flex__<typeof IconButton>;
};

export interface DefaultOutlineTabProps {
  children?: React.ReactNode;
  filterLabel?: React.ReactNode;
  noHeader?: SingleBooleanChoiceArg<"noHeader">;
  className?: string;
}

const $$ = {};

function PlasmicOutlineTab__RenderFunc(props: {
  variants: PlasmicOutlineTab__VariantsArgs;
  args: PlasmicOutlineTab__ArgsType;
  overrides: PlasmicOutlineTab__OverridesType;
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
        path: "noHeader",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.noHeader,
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
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_plasmic_kit_design_system_css.plasmic_tokens,
        plasmic_plasmic_kit_color_tokens_css.plasmic_tokens,
        sty.root,
        { [sty.rootnoHeader]: hasVariant($state, "noHeader", "noHeader") }
      )}
    >
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__i3J1M)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__k743O)}>
          <Stack__
            as={"div"}
            data-plasmic-name={"headerFilter"}
            data-plasmic-override={overrides.headerFilter}
            hasGap={true}
            className={classNames(projectcss.all, sty.headerFilter, {
              [sty.headerFilternoHeader]: hasVariant(
                $state,
                "noHeader",
                "noHeader"
              ),
            })}
          >
            {renderPlasmicSlot({
              defaultContents: (
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___3DWbJ
                  )}
                >
                  {"Everything"}
                </div>
              ),
              value: args.filterLabel,
              className: classNames(sty.slotTargetFilterLabel),
            })}
            <ChevronDownsvgIcon
              className={classNames(projectcss.all, sty.svg__fE6EN, {
                [sty.svgnoHeader__fE6ENRfMki]: hasVariant(
                  $state,
                  "noHeader",
                  "noHeader"
                ),
              })}
              role={"img"}
            />
          </Stack__>
        </div>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__qdVl)}
        >
          <SearchInput
            data-plasmic-name={"searchInput"}
            data-plasmic-override={overrides.searchInput}
            className={classNames("__wab_instance", sty.searchInput)}
          />

          <IconButton
            data-plasmic-name={"expandAllButton"}
            data-plasmic-override={overrides.expandAllButton}
            className={classNames("__wab_instance", sty.expandAllButton)}
            size={"vertical"}
            withBackgroundHover={true}
          >
            <ExpandAllIcon
              className={classNames(projectcss.all, sty.svg__lDxU0)}
              role={"img"}
            />
          </IconButton>
          <IconButton
            data-plasmic-name={"collapseAllButton"}
            data-plasmic-override={overrides.collapseAllButton}
            className={classNames("__wab_instance", sty.collapseAllButton)}
            size={"vertical"}
            withBackgroundHover={true}
          >
            <CollapseAllIcon
              className={classNames(projectcss.all, sty.svg___3CdCg)}
              role={"img"}
            />
          </IconButton>
        </Stack__>
      </Stack__>
      <div className={classNames(projectcss.all, sty.freeBox__c0PO)}>
        {renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <FolderItem
                className={classNames("__wab_instance", sty.folderItem__nPdKw)}
                type={"folderopen"}
              >
                {"Folder"}
              </FolderItem>
              <FolderItem
                className={classNames("__wab_instance", sty.folderItem___51U39)}
                nested={true}
                type={"arena"}
              >
                {"Arena"}
              </FolderItem>
              <FolderItem
                className={classNames("__wab_instance", sty.folderItem__wvdkK)}
                type={"arena"}
              >
                {"Arena"}
              </FolderItem>
              <FolderItem
                className={classNames("__wab_instance", sty.folderItem___15OvX)}
              >
                {"Component"}
              </FolderItem>
              <FolderItem
                className={classNames("__wab_instance", sty.folderItem__kvnp4)}
                selected={true}
                type={"page"}
              >
                {"Page"}
              </FolderItem>
            </React.Fragment>
          ),
          value: args.children,
        })}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "headerFilter",
    "searchInput",
    "expandAllButton",
    "collapseAllButton",
  ],
  headerFilter: ["headerFilter"],
  searchInput: ["searchInput"],
  expandAllButton: ["expandAllButton"],
  collapseAllButton: ["collapseAllButton"],
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  headerFilter: "div";
  searchInput: typeof SearchInput;
  expandAllButton: typeof IconButton;
  collapseAllButton: typeof IconButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicOutlineTab__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicOutlineTab__VariantsArgs;
    args?: PlasmicOutlineTab__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicOutlineTab__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicOutlineTab__ArgsType,
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
          internalArgPropNames: PlasmicOutlineTab__ArgProps,
          internalVariantPropNames: PlasmicOutlineTab__VariantProps,
        }),
      [props, nodeName]
    );
    return PlasmicOutlineTab__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicOutlineTab";
  } else {
    func.displayName = `PlasmicOutlineTab.${nodeName}`;
  }
  return func;
}

export const PlasmicOutlineTab = Object.assign(
  // Top-level PlasmicOutlineTab renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    headerFilter: makeNodeComponent("headerFilter"),
    searchInput: makeNodeComponent("searchInput"),
    expandAllButton: makeNodeComponent("expandAllButton"),
    collapseAllButton: makeNodeComponent("collapseAllButton"),

    // Metadata about props expected for PlasmicOutlineTab
    internalVariantProps: PlasmicOutlineTab__VariantProps,
    internalArgProps: PlasmicOutlineTab__ArgProps,
  }
);

export default PlasmicOutlineTab;
/* prettier-ignore-end */
