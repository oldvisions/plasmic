// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import { ProjectPanelTop } from "@/wab/client/components/sidebar-tabs/ProjectPanel/ProjectPanelTop";
import { useResizableHandle } from "@/wab/client/hooks/useResizableHandle";
import {
  DefaultArenaSwitcherProps,
  PlasmicArenaSwitcher,
} from "@/wab/client/plasmic/plasmic_kit_top_bar/PlasmicArenaSwitcher";
import { useStudioCtx } from "@/wab/client/studio-ctx/StudioCtx";
import { useInteractOutsideWithCommonExceptions } from "@/wab/commons/components/OnClickAway";
import { useSignalListener } from "@/wab/commons/components/use-signal-listener";
import {
  getArenaName,
  isComponentArena,
  isPageArena,
} from "@/wab/shared/Arenas";
import { Popover } from "antd";
import { observer } from "mobx-react";
import * as React from "react";
import { XDraggable } from "src/wab/commons/components/XDraggable";

export type ArenaSwitcherProps = DefaultArenaSwitcherProps

const ArenaSwitcher = observer(function ArenaSwitcher(
  props: ArenaSwitcherProps
) {
  const studioCtx = useStudioCtx();
  const [visible, setVisible] = React.useState(false);
  const popoverRef = React.useRef<HTMLDivElement>(null);

  useSignalListener(
    studioCtx.showProjectPanelRequested,
    () => {
      setVisible(true);
      setTimeout(() => {
        studioCtx.focusOnProjectSearchInput();
      }, 100);
    },
    [studioCtx]
  );

  useInteractOutsideWithCommonExceptions({
    ref: popoverRef,
    isDisabled: !visible,
    exceptSelectors: ["#proj-nav-button", ".left-pane-resizer"],
    onInteractOutside: (e) => {
      if (!resizingState.current) {
        setVisible(false);
      }
    },
  });

  const currentArena = studioCtx.currentArena;
  const currentArenaName = currentArena ? getArenaName(currentArena) : "";

  const [popoverWidth, setPopoverWidth] = React.useState(300);
  const { onDrag, onDragStart, onDragStop, resizingState } = useResizableHandle(
    {
      panelRef: popoverRef,
      onChange: (width) => {
        setPopoverWidth(width);
      },
    }
  );

  return (
    <Popover
      placement="bottomLeft"
      content={
        <>
          <ProjectPanelTop
            ref={popoverRef}
            onClose={() => {
              setVisible(false);
            }}
          />
          <XDraggable onStart={onDragStart} onDrag={onDrag} onStop={onDragStop}>
            <div className="left-pane-resizer auto-pointer-events" />
          </XDraggable>
        </>
      }
      overlayInnerStyle={{ width: popoverWidth }}
      visible={visible}
      id="proj-nav-popover"
      overlayClassName={"ant-popover--dropdown-like"}
      destroyTooltipOnHide
    >
      <PlasmicArenaSwitcher
        onClick={() => {
          studioCtx.showProjectPanel();
        }}
        arenaType={
          isComponentArena(currentArena)
            ? "component"
            : isPageArena(currentArena)
            ? "page"
            : "mixed"
        }
        root={{
          children: (
            <span
              className="fill-width text-ellipsis inline-block"
              style={{ maxWidth: 300 }}
            >
              {currentArenaName}
            </span>
          ),
        }}
        id="proj-nav-button"
        {...props}
      />
    </Popover>
  );
});

export default ArenaSwitcher;
