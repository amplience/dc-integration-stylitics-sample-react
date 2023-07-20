import React, { createRef, useEffect } from 'react';
import { Typography } from '@mui/material';

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
}

/**
 * Generic Component that can handle all the different views
 * @param props 
 * @returns 
 */
const Generic: React.FunctionComponent<Props> = (props) => {
    const {
        header,
        view,
        api,
        display,
        price,
        gallery,
        moodboard,
        mainAndDetail,
        hotspots,
        classic,
        account = 'demo',
        variant = "classic",
        sku
    } = props;

    const container = createRef<HTMLDivElement>();

    useEffect(() => {
        if (!window || !container.current) {
            return;
        }

        let target = container.current;
        const {StyliticsClassicWidget, StyliticsHotspotsWidget, StyliticsMoodboardWidget, StyliticsGalleryWidget, StyliticsMainAndDetailWidget } = window as any;        
        
        const config: any = {
            api: {
                item_number: 'BG654_BL8133',
                max: api?.max || 6,
                min: api?.min || 3
            },
            display,
            price
        }

        const styliticsAccount = account

        let widgetInstance

        const viewSelector = view || variant;

        // Configuring and instantiating Stylitics Widget instance
        switch( viewSelector ){
            case "classic":
                if (classic?.display) {
                    config.display = { ...config.display, ...classic.display }
                }
                config.navigation = classic?.navigation
                config.text = classic?.text
                widgetInstance = new StyliticsClassicWidget(styliticsAccount, target, config)
                break;
            case "hotspots":
                if (hotspots?.display) {
                    config.display = { ...config.display, ...hotspots.display }
                }
                config.text = hotspots?.text
                if (config?.display?.hotspotsOverlayOrder) {
                    config.display.hotspotsOverlayOrder = config.display.hotspotsOverlayOrder.map((item: string) => {
                        return item.split(',')
                    })
                }
                widgetInstance = new StyliticsHotspotsWidget(styliticsAccount, target, config)
                break;
            case "moodboard":
                if (moodboard?.display) {
                    config.display = { ...config.display, ...moodboard.display }
                }
                config.navigation = moodboard?.navigation
                config.text = moodboard?.text
                widgetInstance = new StyliticsMoodboardWidget(styliticsAccount, target, config)
                break;
            case "gallery":
                if (gallery?.display) {
                    config.display = { ...config.display, ...gallery.display }
                }
                if (gallery?.api) {
                    config.api = { ...config.api, ...gallery.api }
                }
                config.navigation = gallery?.navigation
                config.text = gallery?.text
                widgetInstance = new StyliticsGalleryWidget(styliticsAccount, target, config)
                break;
            case "mainAndDetail":
                if (mainAndDetail?.display) {
                    config.display = { ...config.display, ...mainAndDetail.display }
                }
                widgetInstance = new StyliticsMainAndDetailWidget(styliticsAccount, target, config)
                break;
            default:
                if (classic?.display) {
                    config.display = { ...config.display, ...classic.display }
                }
                config.navigation = classic?.navigation
                config.text = classic?.text
                widgetInstance = new StyliticsClassicWidget(styliticsAccount, target, config)
                break;
        }

        widgetInstance.start();
        
        // Cleanup
        return () => {
            if (target) {
                target.innerHTML = '';
            }
        };
    }, [account, variant, container, view, sku, api, display, price, classic, moodboard, gallery, hotspots, mainAndDetail]);

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