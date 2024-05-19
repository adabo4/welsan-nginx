import Media from 'react-media';
import Lines from '../Lines/Lines';
import useMediaQuery from './useMediaQuery';

function MediaQuery(){


    const matches = useMediaQuery("(max-width: 1110px)");
    
    return(
        <>
        {matches ? '' : <Lines></Lines>}
        </>
    )
}

export default MediaQuery;