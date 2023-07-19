import React, { createRef, useEffect } from 'react';
import { Typography } from '@mui/material';

/**
 * Gallery props
 */
interface Props {
    className?: string;
    style?: React.CSSProperties;
    header?: string;
    account?: string;
    sku?: string;
    api?: any;
    api_extra?: any;
    display?: any;
    display_extra?: any;
    navigation?: any;
    text?: any;
    price?: any;
}

/**
 * Gallery Component
 * @param props 
 * @returns 
 */
const Gallery: React.FunctionComponent<Props> = (props) => {
    const {
        header,
        account = 'demo-womens',
        api,
        api_extra,
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
        const {StyliticsGalleryWidget} = window as any;
        
        const config = {
            api: {
                tags: api_extra?.tags || 'womens_stylistspicks_gallery',
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
        let widgetInstance = new StyliticsGalleryWidget(styliticsAccount, target, config)
        widgetInstance.start();
        
        // Cleanup
        return () => {
            if (target) {
                target.innerHTML = '';
            }
        };

    }, [account, container, api, api_extra, display, display_extra, navigation, text, price]);

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

export default Gallery;