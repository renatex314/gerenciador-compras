import { createGlobalStyle } from 'styled-components';
import nunitoFont from '../../resources/fonts/Nunito/nunito-regular.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'nunito';
        src: url('${nunitoFont}');
    }

    * {
        margin: 0;
        padding: 0;
        font-family: nunito;
        list-style: none;
    }

    
`;