import React, { createRef, useEffect } from 'react';
import { Typography } from '@mui/material';

/**
 * Hotspots props
 */
interface Props {
    className?: string;
    style?: React.CSSProperties;
    header?: string;
    account?: string;
    sku?: string;
    api?: any;
    display?: any;
    display_extra?: any;
    navigation?: any;
    text?: any;
    price?: any;
}

/**
 * Hotspots Component
 * @param props 
 * @returns 
 */
const Hotspots: React.FunctionComponent<Props> = (props) => {
    const {
        header,
        account = 'demo-womens',
        sku = "536693_22",
        api,
        display,
        display_extra,
        navigation,
        text,
        price
    } = props;

    const container = createRef<HTMLDivElement>();

    useEffect(() => {
        if (!window || !container.current) {
            return;
        }

        let target = container.current;
        const {StyliticsHotspotsWidget} = window as any;
        
        const config = {
            api: {
                item_number: 'BG654_BL8133',
                max: api?.max || 6,
                min: api?.min || 3
            },
            display: {
                ...display,
                ...display_extra    
            },
            navigation,
            text,
            price
        } 

        const styliticsAccount = account

        // Instantiating Stylitics Widget
        let widgetInstance = new StyliticsHotspotsWidget(styliticsAccount, target, config)
        widgetInstance.start();
        
        // Cleanup
        return () => {
            if (target) {
                target.innerHTML = '';
            }
        };

    }, [account, container, sku, api, display, display_extra, navigation, text, price]);

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

export default Hotspots;