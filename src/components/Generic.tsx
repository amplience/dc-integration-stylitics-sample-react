import React, { createRef, useEffect } from 'react';
import { Typography } from '@mui/material';
import { fromContentItem, createWidget, StyliticsWidget } from 'dc-integration-stylitics';

/**
 * Generic props
 */
interface Props {
    className?: string;
    style?: React.CSSProperties;
    header?: string;
    gallery?: any;
    moodboard?: any;
    mainAndDetail?: any;
    hotspots?: any;
    classic?: any;
    api?: any;
    display?: any;
    price?: any;
    account?: string;
    sku?: string;
    view?:string;
    variant?:string;
    min: number;
    max: number;
}

/**
 * Generic Component that can handle all the different views
 * @param props 
 * @returns 
 */
const Generic: React.FunctionComponent<Props> = (props) => {
    const {
        header,
    } = props;

    const container = createRef<HTMLDivElement>();

    useEffect(() => {
        if (!window || !container.current) {
            return;
        }

        let target = container.current;
        let active = true;
        let widgetInstance: StyliticsWidget;

        // Item can be modified
        const item = {
            ...props
        }

        const args = fromContentItem(item as any);

        createWidget(target, args).then((widget: StyliticsWidget) => {
            if (active) {
                widgetInstance = widget;
                widget.start();
            } else {
                widget.destroy();
            }
        })

        // Cleanup
        return () => {
            if (widgetInstance) {
                widgetInstance.destroy();
            }

            if (target) {
                target.innerHTML = '';
            }

            active = false;
        };
    }, [container, props]);

    return (
        <div>
            {
                header && ( 
                    <Typography variant="h2" component="h2">
                        {header}
                    </Typography>
                )
            }
            <div ref={container} className="stylitics"></div>
        </div>
    );
};

export default Generic;