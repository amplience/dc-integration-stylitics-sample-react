import { FC, useEffect, useState } from 'react'
import Generic from "./Generic";
import { defaultAmpClient, IdOrKey } from '../amplience-api';

interface Props {
    request: IdOrKey; 
}

const ContentBlock: FC<Props> = ({request}) => {

    const [content, setContent] = useState<any>(null)

    useEffect(() => {
        const fetchData = async () => {
            const items = await defaultAmpClient.fetchContent([request], {})
            setContent(items)
        }
        fetchData()
    }, [request])
    
    return <>
        {
            content?.map((entry: any, index: number) => {
                return <Generic key={index} {...entry} />
            })
        }
    </>
}

export default ContentBlock;