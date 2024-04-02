// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import { BranchPanelTop } from "@/wab/client/components/sidebar-tabs/ProjectPanel/ProjectPanelTop";
import {
  DefaultBranchSwitcherProps,
  PlasmicBranchSwitcher,
} from "@/wab/client/plasmic/plasmic_kit_top_bar/PlasmicBranchSwitcher";
import { useStudioCtx } from "@/wab/client/studio-ctx/StudioCtx";
import { useInteractOutsideWithCommonExceptions } from "@/wab/commons/components/OnClickAway";
import { Popover } from "antd";
import { observer } from "mobx-react";
import * as React from "react";

export interface BranchSwitcherProps extends DefaultBranchSwitcherProps {}

const BranchSwitcher = observer(function BranchSwitcher(
  props: BranchSwitcherProps
) {
  const studioCtx = useStudioCtx();
  const currentBranch = studioCtx.dbCtx().branchInfo;
  const currentBranchName = currentBranch?.name ?? "main";
  const [visible, setVisible] = React.useState(false);
  const popoverRef = React.useRef<HTMLDivElement>(null);

  useInteractOutsideWithCommonExceptions({
    ref: popoverRef,
    isDisabled: !visible,
    exceptSelectors: ["#branch-nav-button"],
    onInteractOutside: (e) => {
      setVisible(false);
    },
  });
  return (
    <Popover
      placement="bottomLeft"
      content={
        visible && (
          <BranchPanelTop ref={popoverRef} onClose={() => setVisible(false)} />
        )
      }
      overlayInnerStyle={{ width: "300px" }}
      overlayClassName={"ant-popover--dropdown-like"}
      open={visible}
      id="branch-nav-popover"
    >
      <PlasmicBranchSwitcher
        children={currentBranchName}
        onClick={() => {
          setVisible(!visible);
        }}
        id="branch-nav-button"
        {...props}
      />
    </Popover>
  );
});

export default BranchSwitcher;
