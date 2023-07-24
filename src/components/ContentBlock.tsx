import { FC, useEffect, useState } from 'react'
import Classic from "./Classic";
import Gallery from "./Gallery";
import Generic from "./Generic";
import Hotspots from "./Hotspots";
import MainAndDetail from "./MainAndDetail";
import Moodboard from "./Moodboard";
import { defaultAmpClient, IdOrKey } from '../amplience-api';

interface Props {
    request: IdOrKey; 
}

const ComponentMapping: any = {
    'generic': Generic,
    'classic': Classic,
    'hotspots': Hotspots,
    'moodboard': Moodboard,
    'mainAndDetail': MainAndDetail,
    'gallery': Gallery
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
                if (entry.view && ComponentMapping[entry.view]) {
                    const ComponentType = ComponentMapping[entry.view]
                    return <ComponentType key={index} {...content} />
                } else {
                    return null
                }
            })
        }
    </>
}

export default ContentBlock;