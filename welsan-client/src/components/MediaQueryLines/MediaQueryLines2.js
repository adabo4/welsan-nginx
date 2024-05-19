import Media from 'react-media';
import Lines from '../Lines/Lines';
import useMediaQuery from './useMediaQuery';
import Lines2 from '../Lines2/Lines2';

function MediaQueryLines2(){


    const matches = useMediaQuery("(max-width: 1110px)");
    
    return(
        <>
        {matches ? <Lines2></Lines2> : '' }
        </>
    )
}

export default MediaQueryLines2;