import { FC, useEffect, useState } from 'react';
import Generic from "./Generic";
import { defaultAmpClient, FetchParams, IdOrKey } from '../amplience-api';
import { VisualizationSDK, init } from 'dc-visualization-sdk';

interface Props {
    request: IdOrKey;
    params?: FetchParams;
}

let visSdkPromise: Promise<VisualizationSDK> | undefined

const ContentBlock: FC<Props> = ({request, params}) => {

    const [rtvContent, setRtvContent] = useState<any>(null)
    const [content, setContent] = useState<any>(null)

    // This effect enables the content to be replaced by data
    // from Amplience real-time visualization.
    useEffect(() => {
        if (visSdkPromise == null) {
            visSdkPromise = init()
        }

        let active = true
        let removeChangedSubscription: any

        visSdkPromise.then(sdk => {
            if (active) {
                sdk.form.get().then((model) => {
                    if (active) setRtvContent(model.content)
                })

                removeChangedSubscription = sdk.form.changed((model) => {
                    setRtvContent(model.content)
                })
            }
        })

        return () => {
            active = false
            if (removeChangedSubscription) {
                removeChangedSubscription()
            }
        }
    },
    [request])

    useEffect(() => {
        const fetchData = async () => {
            const items = await defaultAmpClient.fetchContent([request], params || {})
            setContent(items)
        }
        fetchData()
    }, [request, params])
    
    return <>
        {
            content?.map((entry: any, index: number) => {
                const item = rtvContent ?? entry
                if (item.account) {
                    return <Generic key={index} {...item} />
                }
            })
        }
    </>
}

export default ContentBlock;