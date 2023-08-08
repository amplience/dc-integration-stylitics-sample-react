import { FC, useEffect, useState } from 'react'
import Generic from "./Generic";
import { defaultAmpClient, FetchParams, IdOrKey } from '../amplience-api';

interface Props {
    request: IdOrKey;
    params?: FetchParams;
}

const ContentBlock: FC<Props> = ({request, params}) => {

    const [content, setContent] = useState<any>(null)

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
                if (entry.account) {
                    return <Generic key={index} {...entry} />
                }
            })
        }
    </>
}

export default ContentBlock;