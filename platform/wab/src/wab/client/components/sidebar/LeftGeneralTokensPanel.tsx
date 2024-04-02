// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import { ProjectDependency, StyleToken } from "@/wab/classes";
import MultiAssetsActions from "@/wab/client/components/sidebar/MultiAssetsActions";
import { Matcher } from "@/wab/client/components/view-common";
import { useClientTokenResolver } from "@/wab/client/components/widgets/ColorPicker/client-token-resolver";
import { Icon } from "@/wab/client/components/widgets/Icon";
import Select from "@/wab/client/components/widgets/Select";
import TokenIcon from "@/wab/client/plasmic/plasmic_kit/PlasmicIcon__Token";
import { PlasmicLeftGeneralTokensPanel } from "@/wab/client/plasmic/plasmic_kit_left_pane/PlasmicLeftGeneralTokensPanel";
import { useStudioCtx } from "@/wab/client/studio-ctx/StudioCtx";
import { ensure } from "@/wab/common";
import { TokenType, tokenTypeDefaults } from "@/wab/commons/StyleToken";
import Chroma from "@/wab/shared/utils/color-utils";
import { VariantedStylesHelper } from "@/wab/shared/VariantedStylesHelper";
import { isScreenVariant } from "@/wab/shared/Variants";
import { extractTokenUsages } from "@/wab/styles";
import { Tooltip } from "antd";
import { orderBy } from "lodash";
import { observer } from "mobx-react";
import * as React from "react";
import { isHostLessPackage } from "src/wab/sites";
import { FindReferencesModal } from "./FindReferencesModal";
import { useDepFilterButton } from "./left-panel-utils";
import { StyleTokenControl } from "./token-controls";
import { TokenEditModal } from "./TokenEditModal";
import { ItemOrGroup, VirtualGroupedList } from "./VirtualGroupedList";

type TokenTypeExpanded = {
  [TokenType.Color]: boolean;
  [TokenType.Spacing]: boolean;
  [TokenType.FontFamily]: boolean;
  [TokenType.FontSize]: boolean;
  [TokenType.LineHeight]: boolean;
  [TokenType.Opacity]: boolean;
};

const LeftGeneralTokensPanel = observer(function LeftGeneralTokensPanel() {
  const studioCtx = useStudioCtx();
  const [query, setQuery] = React.useState("");
  const matcher = new Matcher(query);
  const readOnly = studioCtx.getLeftTabPermission("tokens") === "readable";

  const { filterDeps, filterProps } = useDepFilterButton({
    studioCtx,
    deps: studioCtx.site.projectDependencies.filter(
      (dep) => dep.site.styleTokens.length > 0
    ),
  });
  const [justAdded, setJustAdded] = React.useState<StyleToken | undefined>(
    undefined
  );

  const [editToken, setEditToken] = React.useState<StyleToken | undefined>(
    undefined
  );

  const [vsh, setVsh] = React.useState<VariantedStylesHelper | undefined>(
    undefined
  );

  const [isTargeting, setIsTargeting] = React.useState(false);

  const [findReferenceToken, setFindReferenceToken] = React.useState<
    StyleToken | undefined
  >(undefined);

  const [isTokenTypeExpanded, setIsTokenTypeExpanded] =
    React.useState<TokenTypeExpanded>({
      [TokenType.Color]: true,
      [TokenType.Spacing]: false,
      [TokenType.FontFamily]: false,
      [TokenType.FontSize]: false,
      [TokenType.LineHeight]: false,
      [TokenType.Opacity]: false,
    });

  const resolver = useClientTokenResolver();

  const onDuplicate = (token: StyleToken) =>
    studioCtx.changeUnsafe(() => {
      const newToken = studioCtx.tplMgr().duplicateToken(token);
      setJustAdded(newToken);
      setEditToken(newToken);
    });

  const onAdd = (type: TokenType) =>
    studioCtx.changeUnsafe(() => {
      const initialValue = tokenTypeDefaults(type);
      const token = studioCtx.tplMgr().addToken({
        tokenType: type,
        value: initialValue,
      });
      setJustAdded(token);
      setEditToken(token);
    });

  const onSelect = (token: StyleToken) => {
    setEditToken(token);
  };

  const onFindReferences = (token: StyleToken) => {
    setFindReferenceToken(token);
  };

  const nonScreenGlobalVariants = studioCtx.site.globalVariantGroups.flatMap(
    (variantGroup) => variantGroup.variants.filter((v) => !isScreenVariant(v))
  );

  const handleGlobalVariantChange = (variantId) => {
    if (variantId === "base") {
      setVsh(undefined);
      setIsTargeting(false);
    } else {
      const globalVariants = [
        nonScreenGlobalVariants.some((v) => v.uuid === variantId)
          ? ensure(
              nonScreenGlobalVariants.find((v) => v.uuid === variantId),
              () => `Picked unknown screen variant`
            )
          : ensure(
              studioCtx.site.activeScreenVariantGroup?.variants.find(
                (v) => v.uuid === variantId
              ),
              () => `Picked unknown global variant`
            ),
      ];
      setVsh(
        new VariantedStylesHelper(
          studioCtx.site,
          globalVariants,
          globalVariants
        )
      );
      setIsTargeting(true);
    }
  };

  const onExpandButtonClicked = (type: TokenType) => () => {
    setIsTokenTypeExpanded((state) => ({
      ...state,
      [type]: !state[type],
    }));
  };

  const tokensSection = (type: TokenType) => {
    if (!isTokenTypeExpanded[type]) {
      return null;
    }

    const editableTokens = new Set(
      studioCtx.site.styleTokens.filter((t) => !t.isRegistered)
    );

    const makeTokensItems = (tokens: StyleToken[]) => {
      tokens = tokens.filter((token) => {
        let resolved = resolver(token, vsh);
        if (token.type === TokenType.Color) {
          resolved = Chroma.stringify(resolved);
        }
        return (
          token.type === type &&
          (matcher.matches(token.name) ||
            matcher.matches(resolved) ||
            justAdded === token)
        );
      });
      tokens = orderBy(tokens, (token) => token.name.toLowerCase());
      return tokens.map((token) => ({
        type: "item" as const,
        item: token,
        key: token.uuid,
      }));
    };

    const makeDepsItems = (deps: ProjectDependency[]) => {
      deps = deps.filter(
        (dep) => filterDeps.length === 0 || filterDeps.includes(dep)
      );
      deps = orderBy(deps, (dep) =>
        studioCtx.projectDependencyManager.getNiceDepName(dep)
      );
      return deps.map((dep) => ({
        type: "group" as const,
        key: dep.uuid,
        group: dep,
        // We only include registered tokens if they're from a hostless
        // package; otherwise, registered tokens from custom host will
        // already show up in the RegisteredTokens section.
        items: makeTokensItems(
          isHostLessPackage(dep.site)
            ? dep.site.styleTokens
            : dep.site.styleTokens.filter((t) => !t.isRegistered)
        ),
        defaultCollapsed: true,
      }));
    };

    const items: ItemOrGroup<ProjectDependency | string, StyleToken>[] = [
      ...(filterDeps.length === 0
        ? [
            ...makeTokensItems(
              studioCtx.site.styleTokens.filter((t) => !t.isRegistered)
            ),
            {
              type: "group" as const,
              group: "Registered tokens",
              key: "registered",
              items: makeTokensItems(
                studioCtx.site.styleTokens.filter((t) => t.isRegistered)
              ),
              defaultCollapsed: false,
            },
          ]
        : []),
      ...makeDepsItems(
        studioCtx.site.projectDependencies.filter(
          (d) => !isHostLessPackage(d.site)
        )
      ),
      ...makeDepsItems(
        studioCtx.site.projectDependencies.filter((d) =>
          isHostLessPackage(d.site)
        )
      ),
    ];

    const selectableTokens = makeTokensItems(studioCtx.site.styleTokens).map(
      (t) => t.key
    );

    return (
      <MultiAssetsActions
        type="token"
        selectableAssets={selectableTokens}
        onDelete={async (selected: string[]) => {
          const tokens = studioCtx.site.styleTokens.filter((t) =>
            selected.includes(t.uuid)
          );
          return await studioCtx.siteOps().tryDeleteTokens(tokens);
        }}
      >
        <VirtualGroupedList
          items={items}
          renderItem={(token) => (
            <StyleTokenControl
              studioCtx={studioCtx}
              token={token}
              onDuplicate={readOnly ? undefined : () => onDuplicate(token)}
              onFindReferences={() => onFindReferences(token)}
              matcher={matcher}
              readOnly={readOnly || !editableTokens.has(token)}
              onClick={
                editableTokens.has(token) && !readOnly
                  ? () => onSelect(token)
                  : undefined
              }
              resolver={resolver}
              vsh={vsh}
            />
          )}
          itemHeight={32}
          renderGroupHeader={(group) => {
            if (typeof group === "string") {
              return group;
            } else {
              return `Imported from "${studioCtx.projectDependencyManager.getNiceDepName(
                group
              )}"`;
            }
          }}
          headerHeight={50}
          hideEmptyGroups
          forceExpandAll={matcher.hasQuery() || filterDeps.length > 0}
        />
      </MultiAssetsActions>
    );
  };

  return (
    <>
      <PlasmicLeftGeneralTokensPanel
        leftPaneHeader={{
          actions: null,
        }}
        leftSearchPanel={{
          searchboxProps: {
            value: query,
            onChange: (e) => setQuery(e.target.value),
            autoFocus: true,
          },
          filterProps,
        }}
        globalVariantsSelectContainer={{
          wrap: (x) => (
            <Tooltip
              title={
                "You can change the token value for different responsive breakpoints or global variants."
              }
            >
              {x}
            </Tooltip>
          ),
        }}
        isTargeting={isTargeting}
        globalVariantSelect={{
          onChange: (e) => handleGlobalVariantChange(e),
          children: (
            <>
              <Select.Option value="base">Base</Select.Option>
              {studioCtx.site.activeScreenVariantGroup?.variants &&
                studioCtx.site.activeScreenVariantGroup.variants.length > 0 && (
                  <Select.OptionGroup title="Screen Variants">
                    {studioCtx.site.activeScreenVariantGroup.variants.map(
                      (variant) => (
                        <Select.Option value={variant.uuid} key={variant.uuid}>
                          {variant.name}
                        </Select.Option>
                      )
                    )}
                  </Select.OptionGroup>
                )}
              {nonScreenGlobalVariants.length > 0 && (
                <Select.OptionGroup title="Global Variants">
                  {nonScreenGlobalVariants.map((variant) => (
                    <Select.Option value={variant.uuid} key={variant.uuid}>
                      {variant.name}
                    </Select.Option>
                  ))}
                </Select.OptionGroup>
              )}
            </>
          ),
        }}
        colorTokenHeader={{
          readOnly,
          onAdd: () => onAdd(TokenType.Color),
          isExpanded: isTokenTypeExpanded[TokenType.Color],
          onExpandClick: onExpandButtonClicked(TokenType.Color),
        }}
        colorTokens={{
          children: tokensSection(TokenType.Color),
        }}
        spacingTokenHeader={{
          readOnly,
          onAdd: () => onAdd(TokenType.Spacing),
          isExpanded: isTokenTypeExpanded[TokenType.Spacing],
          onExpandClick: onExpandButtonClicked(TokenType.Spacing),
        }}
        spacingTokens={{
          children: tokensSection(TokenType.Spacing),
        }}
        fontFamilyTokenHeader={{
          readOnly,
          onAdd: () => onAdd(TokenType.FontFamily),
          isExpanded: isTokenTypeExpanded[TokenType.FontFamily],
          onExpandClick: onExpandButtonClicked(TokenType.FontFamily),
        }}
        fontFamilyTokens={{
          children: tokensSection(TokenType.FontFamily),
        }}
        fontSizeTokenHeader={{
          readOnly,
          onAdd: () => onAdd(TokenType.FontSize),
          isExpanded: isTokenTypeExpanded[TokenType.FontSize],
          onExpandClick: onExpandButtonClicked(TokenType.FontSize),
        }}
        fontSizeTokens={{
          children: tokensSection(TokenType.FontSize),
        }}
        lineHeightTokenHeader={{
          readOnly,
          onAdd: () => onAdd(TokenType.LineHeight),
          isExpanded: isTokenTypeExpanded[TokenType.LineHeight],
          onExpandClick: onExpandButtonClicked(TokenType.LineHeight),
        }}
        lineHeightTokens={{
          children: tokensSection(TokenType.LineHeight),
        }}
        opacityTokenHeader={{
          readOnly,
          onAdd: () => onAdd(TokenType.Opacity),
          isExpanded: isTokenTypeExpanded[TokenType.Opacity],
          onExpandClick: onExpandButtonClicked(TokenType.Opacity),
        }}
        opacityTokens={{
          children: tokensSection(TokenType.Opacity),
        }}
      />

      {editToken && (
        <TokenEditModal
          studioCtx={studioCtx}
          token={editToken}
          onClose={() => {
            setEditToken(undefined);
            setJustAdded(undefined);
          }}
          autoFocusName={justAdded === editToken}
          vsh={vsh}
        />
      )}

      {findReferenceToken && (
        <FindReferencesModal
          studioCtx={studioCtx}
          displayName={findReferenceToken.name}
          icon={
            <Icon
              icon={TokenIcon}
              className="token-fg custom-svg-icon--lg monochrome-exempt"
            />
          }
          usageSummary={
            extractTokenUsages(studioCtx.site, findReferenceToken)[1]
          }
          onClose={() => {
            setFindReferenceToken(undefined);
          }}
        />
      )}
    </>
  );
});

export default LeftGeneralTokensPanel;
