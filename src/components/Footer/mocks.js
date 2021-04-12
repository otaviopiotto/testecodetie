import React from 'react';

import Translator from '../i18n/translator';
import StraubLogo from '../../assets/logos/P&BLogo/StraubLogo.png';
import SaneparLogo from '../../assets/logos/P&BLogo/SaneparLogo.png';
import CTGLogo from '../../assets/logos/P&BLogo/CTGLogo.png';
import CompagasLogo from '../../assets/logos/P&BLogo/CompagasLogo.png';
import BRDELogo from '../../assets/logos/P&BLogo/BRDELogo.png';
import UNESCOLogo from '../../assets/logos/P&BLogo/UNESCOLogo.png';
import TNCLogo from '../../assets/logos/P&BLogo/TNCLogo.png';
import FRLogo from '../../assets/logos/P&BLogo/FRLogo.png';
import FGBLogo from '../../assets/logos/P&BLogo/FGBLogo.png';
import EGEOLogo from '../../assets/logos/P&BLogo/EGEOLogo.png';
import GovLogo from '../../assets/logos/P&BLogo/GovLogo.png';

export const FooterList = [
  {
    id: '0',
    list: [
      {
        title: <Translator path="footer.title1" />,
        logo: <img src={StraubLogo} alt="straub-logo" />,
      },

      {
        title: <Translator path="footer.title2" />,
        logo: <img src={SaneparLogo} alt="sanepar-logo" />,
        logo2: <img src={CTGLogo} alt="ctg-logo" />,
      },

      {
        title: <Translator path="footer.title3" />,
        logo: <img src={CompagasLogo} alt="compagas-logo" />,
      },

      {
        title: <Translator path="footer.title4" />,
        logo: <img src={BRDELogo} alt="brde-logo" />,
      },
    ],
  },

  {
    id: '1',
    list: [
      {
        title: <Translator path="footer.title5" />,
        logo: <img src={UNESCOLogo} alt="unesco-logo" />,
        logo2: <img src={TNCLogo} alt="tnc-logo" />,
        logo3: <img src={FRLogo} alt="fr-logo" />,
        logo4: <img src={FGBLogo} alt="fgb-logo" />,
      },
    ],
  },

  {
    id: '2',
    list: [
      {
        title: <Translator path="footer.title6" />,
        logo: <img src={EGEOLogo} alt="egeo-logo" />,
        logo2: <img src={GovLogo} alt="gov-logo" />,
      },
    ],
  },
];
