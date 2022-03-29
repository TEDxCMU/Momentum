import { useState, useEffect } from 'react';
import { getInnovators } from 'utils/content';
import ExpoComponent from 'components/expo' 


function InnovationExpo() {
    const [data, setData] = useState(null);

    useEffect(() => {
        init();
    }, []);

    async function init() {
        const content = await getInnovators();
        setData(content, true);
    }

    return (
        <ExpoComponent />
    );
}

export default InnovationExpo;
