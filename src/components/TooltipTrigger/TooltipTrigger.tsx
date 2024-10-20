import { PropsWithChildren, useMemo } from 'react';
import clsx from 'clsx';
import { tooltipClassName } from '../Tooltip/constants';
import { Placement } from '../Tooltip/types';

type TooltipTriggerProps = PropsWithChildren<{
  /**
   * Content to be displayed in the tooltip.
   */
  offsetOverride?: number;
  contentOverride?: string;
  placeOverride?: Placement;
  delayShowOverride?: number;
  delayHideOverride?: number;
  /**
   * @default false
   */
  shouldFollowMouse?: boolean;
  /**
   * @default false
   */
  hide?: boolean;
  uniqueId?: string;
  className?: string;
}>;

export default function TooltipTrigger(props: TooltipTriggerProps) {
  const {
    children,
    offsetOverride,
    contentOverride,
    placeOverride,
    delayShowOverride,
    delayHideOverride,
    shouldFollowMouse,
    hide,
    className,
    uniqueId,
  } = props;

  const tooltipDataProps = useMemo(() => {
    const dataProps: any = {};

    if (offsetOverride) dataProps['data-tooltip-offset'] = offsetOverride;
    if (contentOverride) dataProps['data-tooltip-content'] = contentOverride;
    if (placeOverride) dataProps['data-tooltip-place'] = placeOverride;
    if (shouldFollowMouse) dataProps['data-tooltip-float'] = shouldFollowMouse;
    if (delayShowOverride) dataProps['data-tooltip-delay-show'] = delayShowOverride;
    if (delayHideOverride) dataProps['data-tooltip-delay-hide'] = delayHideOverride;
    if (hide) dataProps['data-tooltip-hidden'] = hide;

    // dataProps['data-tooltip-variant'] = 'info'; // <--- defaults to 'dark'. Options are: dark | light | success | warning | error | info
    // dataProps['data-tooltip-class-name'] = 'custom-classname';

    return dataProps;
  }, [offsetOverride, contentOverride, placeOverride, delayShowOverride, delayHideOverride, shouldFollowMouse, hide]);

  return (
    <a {...tooltipDataProps} className={clsx(uniqueId ?? tooltipClassName, className)}>
      {children}
    </a>
  );
}
