import { PropsWithChildren } from 'react';
import { ChildrenType, Tooltip as TooltipOriginal } from 'react-tooltip';
import { tooltipClassName } from './constants';
import styles from './Tooltip.module.scss';
import { Placement } from './types';

type TooltipProps = PropsWithChildren<{
  uniqueId?: string;
  /**
   * Position relative to the anchor element where the tooltip will be rendered (if possible)
   * @default 'top'
   */
  place?: Placement;
  /**
   * @default false
   */
  isClickable?: boolean;
  /**
   * @default 10
   */
  offset?: number;
  delayShow?: number;
  delayHide?: number;
  /**
   * @default false
   */
  shouldFollowMouse?: boolean;
  /**
   * @default false
   */
  shouldOpenOnClick?: boolean;
  /**
   * @default false
   */
  hide?: boolean;
  /**
   * @default false
   */
  noArrow?: boolean;
  render?: (render: { content: string | null; activeAnchor: HTMLElement | null }) => ChildrenType;
}>;

export default function Tooltip(props: TooltipProps) {
  const {
    uniqueId,
    place = Placement.Top,
    isClickable,
    offset,
    delayShow,
    delayHide,
    shouldFollowMouse,
    shouldOpenOnClick,
    hide,
    noArrow,
    children,
    render,
  } = props;

  return (
    <div className={styles.tooltip}>
      <TooltipOriginal
        anchorSelect={`.${uniqueId ?? tooltipClassName}`}
        place={place}
        clickable={isClickable}
        offset={offset}
        delayShow={delayShow}
        delayHide={delayHide}
        float={shouldFollowMouse}
        openOnClick={shouldOpenOnClick}
        hidden={hide}
        noArrow={noArrow}
        render={render}
        // content='placeholder...' // <--- DO NOT USE THIS! It takes precedence over `children`.
        // isOpen={isOpen}
        // setIsOpen={setIsOpen}
        // afterShow={() => {}}
        // afterHide={() => {}}
        // border='1px solid red'
        // opacity={0.9} // <--- defaults to 0.9
        // arrowColor='blue'
        // positionStrategy='fixed' // <--- defaults to 'absolute'. Set to 'fixed' if you run into issues with overflow: hidden on the tooltip parent container.
      >
        {children ?? 'Empty tooltip...'}
      </TooltipOriginal>
    </div>
  );
}

/*
:root {
  --rt-color-white: #fff;
  --rt-color-dark: #222;
  --rt-color-success: #8dc572;
  --rt-color-error: #be6464;
  --rt-color-warning: #f0ad4e;
  --rt-color-info: #337ab7;
  --rt-opacity: 0.9;
  --rt-transition-show-delay: 0.15s;
  --rt-transition-closing-delay: 0.15s;
}
*/
