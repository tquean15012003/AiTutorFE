import { Global } from '@emotion/react';

import ApercuBlack from '/fonts/ApercuPro/Apercu-Black-Pro.ttf';
import ApercuBold from '/fonts/ApercuPro/Apercu-Bold-Pro.ttf';
import ApercuLight from '/fonts/ApercuPro/Apercu-Light-Pro.ttf';
import ApercuRegular from '/fonts/ApercuPro/Apercu-Regular-Pro.ttf';
import ApercuMonoLight from '/fonts/ApercuPro/ApercuMono-Light-Pro.ttf';
import ApercuMonoRegular from '/fonts/ApercuPro/ApercuMono-Regular-Pro.ttf';

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: "ApercuPro";
        src: local("Apercu-Light-Pro"), url(${ApercuLight}) format("truetype");
        font-display: block;
        font-weight: 300;
      }

      @font-face {
        font-family: "ApercuPro";
        src: local("Apercu-Regular-Pro"), url(${ApercuRegular}) format("truetype");
        font-display: block;
        font-weight: 500;
      }
      
      @font-face {
        font-family: "ApercuPro";
        src: local("Apercu-Bold-Pro"), url(${ApercuBold}) format("truetype");
        font-display: block;
        font-weight: 700;
      }

      @font-face {
        font-family: "ApercuPro";
        src: local("Apercu-Black-Pro"), url(${ApercuBlack}) format("truetype");
        font-display: block;
        font-weight: 900;
      }

      @font-face {
        font-family: "ApercuPro Mono";
        src: local("ApercuMono-Light-Pro"), url(${ApercuMonoLight}) format("truetype");
        font-display: block;
        font-weight: 300;
      }

      @font-face {
        font-family: "ApercuPro Mono";
        src: local("ApercuMono-Regular-Pro"), url(${ApercuMonoRegular}) format("truetype");
        font-display: block;
        font-weight: 500;
      }
      `}
  />
);

export default Fonts;
