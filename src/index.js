import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";

import Index from "views/Index";

import ContactUs from "views/index-sections/ContactUs";
import AboutUs from "views/index-sections/AboutUs";
import Iso9001Certification from "views/services/Iso9001Certification";
import Iso14001Certification from "views/services/Iso14001Certification";
import Iso45001Certification from "views/services/Iso45001Certification";
import HipaaCertification from "views/services/HipaaCertification";
import ScrollToTop from "components/ScrollToTop";
import CmmiCertification from "views/services/CmmiCertification";
import Iso27001Certification from "views/services/cybersecurity/Iso27001Certification";
import GdprCertification from "views/services/cybersecurity/GdprCertification";
import PcidssCertification from "views/services/cybersecurity/PcidssCertification";
import Soc1Certification from "views/services/cybersecurity/Soc1Certification";
import VaptCertification from "views/services/cybersecurity/VaptCertification";
import CeMarking from "views/services/CeMarking";
import ServicesPage from "views/services/ServicesPage";
import PrivacyPolicy from "views/index-sections/PrivacyPolicy";
import TermsNConditions from "views/index-sections/TermsNConditions";
import ReactGA from "react-ga4";
import ThankYou from "views/index-sections/ThankYou";
import StatsWithForm from "views/index-sections/StatsWithForm";
import Soc2Certification from "views/services/cybersecurity/Soc2Certification";
import Bangalore9001 from "pages/india/bangalore/Bangalore9001";
import Bangalore27001 from "pages/india/bangalore/Bangalore27001";
import BangaloreCmmi from "pages/india/bangalore/BangaloreCmmi";
import BangaloreHipaa from "pages/india/bangalore/BangaloreHipaa";
import BangaloreVapt from "pages/india/bangalore/BangaloreVapt";
import BangaloreGdpr from "pages/india/bangalore/BangaloreGdpr";
import BangaloreSoc2 from "pages/india/bangalore/BangaloreSoc2";
import BangaloreSoc1 from "pages/india/bangalore/BangaloreSoc1";
import Hyderabad9001 from "pages/india/hyderabad/Hyderabad9001";
import HyderabadCmmi from "pages/india/hyderabad/HyderabadCmmi";
import HyderabadHipaa from "pages/india/hyderabad/HyderabadHipaa";
import HyderabadVapt from "pages/india/hyderabad/HyderabadVapt";
import HyderabadGdpr from "pages/india/hyderabad/HyderabadGdpr";
import HyderabadSoc1 from "pages/india/hyderabad/HyderabadSoc1";
import HyderabadSoc2 from "pages/india/hyderabad/HyderabadSoc2";
import Hyderabad27001 from "pages/india/hyderabad/Hyderabad27001";
import Mumbai9001 from "pages/india/mumbai/Mumbai9001";
import Mumbai27001 from "pages/india/mumbai/Mumbai27001";
import MumbaiCmmi from "pages/india/mumbai/MumbaiCmmi";
import MumbaiHipaa from "pages/india/mumbai/MumbaiHipaa";
import MumbaiVapt from "pages/india/mumbai/MumbaiVapt";
import MumbaiGdpr from "pages/india/mumbai/MumbaiGdpr";
import MumbaiSoc1 from "pages/india/mumbai/MumbaiSoc1";
import MumbaiSoc2 from "pages/india/mumbai/MumbaiSoc2";
import Pune9001 from "pages/india/pune/Pune9001";
import Pune27001 from "pages/india/pune/Pune27001";
import PuneCmmi from "pages/india/pune/PuneCmmi";
import PuneHipaa from "pages/india/pune/PuneHipaa";
import PuneVapt from "pages/india/pune/PuneVapt";
import PuneGdpr from "pages/india/pune/PuneGdpr";
import PuneSoc1 from "pages/india/pune/PuneSoc1";
import PuneSoc2 from "pages/india/pune/PuneSoc2";
import Delhi9001 from "pages/india/delhi/Delhi9001";
import Delhi27001 from "pages/india/delhi/Delhi27001";
import DelhiCmmi from "pages/india/delhi/DelhiCmmi";
import DelhiHipaa from "pages/india/delhi/DelhiHipaa";
import DelhiVapt from "pages/india/delhi/DelhiVapt";
import DelhiGdpr from "pages/india/delhi/DelhiGdpr";
import DelhiSoc1 from "pages/india/delhi/DelhiSoc1";
import DelhiSoc2 from "pages/india/delhi/DelhiSoc2";
import Mexico9001 from "pages/North-America/Mexico/Mexico9001";
import Mexico27001 from "pages/North-America/Mexico/Mexico27001";
import MexicoCmmi from "pages/North-America/Mexico/MexicoCmmi";
import MexicoHipaa from "pages/North-America/Mexico/MexicoHipaa";
import MexicoVapt from "pages/North-America/Mexico/MexicoVapt";
import MexicoGdpr from "pages/North-America/Mexico/MexicoGdpr";
import MexicoSoc1 from "pages/North-America/Mexico/MexicoSoc1";
import MexicoSoc2 from "pages/North-America/Mexico/MexicoSoc2";
import Iso9001 from "pages/North-America/USA/Iso9001";
import Iso27001 from "pages/North-America/USA/Iso27001";
import Cmmi from "pages/North-America/USA/Cmmi";
import Hipaa from "pages/North-America/USA/Hipaa";
import Vapt from "pages/North-America/USA/Vapt";
import Gdpr from "pages/North-America/USA/Gdpr";
import Soc1 from "pages/North-America/USA/Soc1";
import Soc2 from "pages/North-America/USA/Soc2";
import Philippines9001 from "pages/Asia/Philippines/Philippines9001";
import Philippines27001 from "pages/Asia/Philippines/Philippines27001";
import PhilippinesCmmi from "pages/Asia/Philippines/PhilippinesCmmi";
import PhilippinesHipaa from "pages/Asia/Philippines/PhilippinesHipaa";
import PhilippinesVapt from "pages/Asia/Philippines/PhilippinesVapt";
import PhilippinesGdpr from "pages/Asia/Philippines/PhilippinesGdpr";
import PhilippinesSoc1 from "pages/Asia/Philippines/PhilippinesSoc1";
import PhilippinesSoc2 from "pages/Asia/Philippines/PhilippinesSoc2";
import Kuwait9001 from "pages/middle-east/kuwait/Kuwait9001";
import Kuwait27001 from "pages/middle-east/kuwait/Kuwait27001";
import KuwaitCmmi from "pages/middle-east/kuwait/KuwaitCmmi";
import KuwaitHipaa from "pages/middle-east/kuwait/KuwaitHipaa";
import KuwaitVapt from "pages/middle-east/kuwait/KuwaitVapt";
import KuwaitGdpr from "pages/middle-east/kuwait/KuwaitGdpr";
import KuwaitSoc1 from "pages/middle-east/kuwait/KuwaitSoc1";
import KuwaitSoc2 from "pages/middle-east/kuwait/KuwaitSoc2";
import Qatar9001 from "pages/middle-east/qatar/Qatar9001";
import Qatar27001 from "pages/middle-east/qatar/Qatar27001";
import QatarCmmi from "pages/middle-east/qatar/QatarCmmi";
import QatarHipaa from "pages/middle-east/qatar/QatarHipaa";
import QatarVapt from "pages/middle-east/qatar/QatarVapt";
import QatarGdpr from "pages/middle-east/qatar/QatarGdpr";
import QatarSoc1 from "pages/middle-east/qatar/QatarSoc1";
import QatarSoc2 from "pages/middle-east/qatar/QatarSoc2";
import Saudi9001 from "pages/middle-east/saudi-arabia/Saudi9001";
import Saudi27001 from "pages/middle-east/saudi-arabia/Saudi27001";
import SaudiCmmi from "pages/middle-east/saudi-arabia/SaudiCmmi";
import SaudiHipaa from "pages/middle-east/saudi-arabia/SaudiHipaa";
import SaudiSoc1 from "pages/middle-east/saudi-arabia/SaudiSoc1";
import SaudiSoc2 from "pages/middle-east/saudi-arabia/SaudiSoc2";
import SaudiVapt from "pages/middle-east/saudi-arabia/SaudiVapt";
import SaudiGdpr from "pages/middle-east/saudi-arabia/SaudiGdpr";
import Yemen9001 from "pages/middle-east/yemen/Yemen9001";
import Yemen27001 from "pages/middle-east/yemen/Yemen27001";
import YemenCmmi from "pages/middle-east/yemen/YemenCmmi";
import YemenHipaa from "pages/middle-east/yemen/YemenHipaa";
import YemenVapt from "pages/middle-east/yemen/YemenVapt";
import YemenGdpr from "pages/middle-east/yemen/YemenGdpr";
import YemenSoc1 from "pages/middle-east/yemen/YemenSoc1";
import YemenSoc2 from "pages/middle-east/yemen/YemenSoc2";
import Uae9001 from "pages/middle-east/uae/Uae9001";
import Uae27001 from "pages/middle-east/uae/Uae27001";
import UaeCmmi from "pages/middle-east/uae/UaeCmmi";
import UaeHipaa from "pages/middle-east/uae/UaeHipaa";
import UaeVapt from "pages/middle-east/uae/UaeVapt";
import UaeGdpr from "pages/middle-east/uae/UaeGdpr";
import UaeSoc1 from "pages/middle-east/uae/UaeSoc1";
import UaeSoc2 from "pages/middle-east/uae/UaeSoc2";
import Singapore9001 from "pages/Asia/Singapore/Singapore9001";
import Singapore27001 from "pages/Asia/Singapore/Singapore27001";
import SingaporeCmmi from "pages/Asia/Singapore/SingaporeCmmi";
import SingaporeHipaa from "pages/Asia/Singapore/SingaporeHipaa";
import SingaporeVapt from "pages/Asia/Singapore/SingaporeVapt";
import SingaporeGdpr from "pages/Asia/Singapore/SingaporeGdpr";
import SingaporeSoc1 from "pages/Asia/Singapore/SingaporeSoc1";
import SingaporeSoc2 from "pages/Asia/Singapore/SingaporeSoc2";
import Malaysia9001 from "pages/Asia/Malaysia/Malaysia9001";
import Malaysia27001 from "pages/Asia/Malaysia/Malaysia27001";
import MalaysiaCmmi from "pages/Asia/Malaysia/MalaysiaCmmi";
import MalaysiaHipaa from "pages/Asia/Malaysia/MalaysiaHipaa";
import MalaysiaVapt from "pages/Asia/Malaysia/MalaysiaVapt";
import MalaysiaGdpr from "pages/Asia/Malaysia/MalaysiaGdpr";
import MalaysiaSoc1 from "pages/Asia/Malaysia/MalaysiaSoc1";
import MalaysiaSoc2 from "pages/Asia/Malaysia/MalaysiaSoc2";
import MTCTE from "views/services/MTCTE";
import Indonesia9001 from "pages/Asia/Indonesia/Indonesia9001";
import Indonesia27001 from "pages/Asia/Indonesia/Indonesia27001";
import IndonesiaCmmi from "pages/Asia/Indonesia/IndonesiaCmmi";
import IndonesiaHipaa from "pages/Asia/Indonesia/IndonesiaHipaa";
import IndonesiaVapt from "pages/Asia/Indonesia/IndonesiaVapt";
import IndonesiaGdpr from "pages/Asia/Indonesia/IndonesiaGdpr";
import IndonesiaSoc1 from "pages/Asia/Indonesia/IndonesiaSoc1";
import IndonesiaSoc2 from "pages/Asia/Indonesia/IndonesiaSoc2";
import Thailand9001 from "pages/Asia/Thailand/Thailand9001";
import Thailand27001 from "pages/Asia/Thailand/Thailand27001";
import ThailandCmmi from "pages/Asia/Thailand/ThailandCmmi";
import ThailandHipaa from "pages/Asia/Thailand/ThailandHipaa";
import ThailandVapt from "pages/Asia/Thailand/ThailandVapt";
import ThailandGdpr from "pages/Asia/Thailand/ThailandGdpr";
import ThailandSoc1 from "pages/Asia/Thailand/ThailandSoc1";
import ThailandSoc2 from "pages/Asia/Thailand/ThailandSoc2";
import Cambodia9001 from "pages/Asia/Cambodia/Cambodia9001";
import Cambodia27001 from "pages/Asia/Cambodia/Cambodia27001";
import CambodiaCmmi from "pages/Asia/Cambodia/CambodiaCmmi";
import CambodiaHipaa from "pages/Asia/Cambodia/CambodiaHipaa";
import CambodiaVapt from "pages/Asia/Cambodia/CambodiaVapt";
import CambodiaGdpr from "pages/Asia/Cambodia/CambodiaGdpr";
import CambodiaSoc1 from "pages/Asia/Cambodia/CambodiaSoc1";
import CambodiaSoc2 from "pages/Asia/Cambodia/CambodiaSoc2";
import Oman9001 from "pages/middle-east/oman/Oman9001";
import Oman27001 from "pages/middle-east/oman/Oman27001";
import OmanCmmi from "pages/middle-east/oman/OmanCmmi";
import OmanHipaa from "pages/middle-east/oman/OmanHipaa";
import OmanVapt from "pages/middle-east/oman/OmanVapt";
import OmanGdpr from "pages/middle-east/oman/OmanGdpr";
import OmanSoc1 from "pages/middle-east/oman/OmanSoc1";
import OmanSoc2 from "pages/middle-east/oman/OmanSoc2";
import Bahrain9001 from "pages/middle-east/Bahrain/Bahrain9001";
import Bahrain27001 from "pages/middle-east/Bahrain/Bahrain27001";
import BahrainCmmi from "pages/middle-east/Bahrain/BahrainCmmi";
import BahrainHipaa from "pages/middle-east/Bahrain/BahrainHipaa";
import BahrainVapt from "pages/middle-east/Bahrain/BahrainVapt";
import BahrainGdpr from "pages/middle-east/Bahrain/BahrainGdpr";
import BahrainSoc1 from "pages/middle-east/Bahrain/BahrainSoc1";
import BahrainSoc2 from "pages/middle-east/Bahrain/BahrainSoc2";
import Iraq9001 from "./pages/middle-east/Iraq/Iraq9001";
import Iraq27001 from "pages/middle-east/Iraq/Iraq27001";
import IraqCmmi from "pages/middle-east/Iraq/IraqCmmi";
import IraqHipaa from "pages/middle-east/Iraq/IraqHipaa";
import IraqVapt from "pages/middle-east/Iraq/IraqVapt";
import IraqGdpr from "pages/middle-east/Iraq/IraqGdpr";
import IraqSoc1 from "pages/middle-east/Iraq/IraqSoc1";
import IraqSoc2 from "pages/middle-east/Iraq/IraqSoc2";
import Iran9001 from "pages/middle-east/Iran/Iran9001";
import Iran27001 from "pages/middle-east/Iran/Iran27001";
import IranCmmi from "pages/middle-east/Iran/IranCmmi";
import IranHipaa from "pages/middle-east/Iran/IranHipaa";
import IranVapt from "pages/middle-east/Iran/IranVapt";
import IranGdpr from "pages/middle-east/Iran/IranGdpr";
import IranSoc1 from "pages/middle-east/Iran/IranSoc1";
import IranSoc2 from "pages/middle-east/Iran/IranSoc2";
import Egypt9001 from "pages/Africa/Egypt/Egypt9001";
import Egypt27001 from "pages/Africa/Egypt/Egypt27001";
import EgyptCmmi from "pages/Africa/Egypt/EgyptCmmi";
import EgyptHipaa from "pages/Africa/Egypt/EgyptHipaa";
import EgyptVapt from "pages/Africa/Egypt/EgyptVapt";
import EgyptGdpr from "pages/Africa/Egypt/EgyptGdpr";
import EgyptSoc1 from "pages/Africa/Egypt/EgyptSoc1";
import EgyptSoc2 from "pages/Africa/Egypt/EgyptSoc2";
import Ghana9001 from "pages/Africa/Ghana/Ghana9001";
import Ghana27001 from "pages/Africa/Ghana/Ghana27001";
import GhanaCmmi from "pages/Africa/Ghana/GhanaCmmi";
import GhanaHipaa from "pages/Africa/Ghana/GhanaHipaa";
import GhanaVapt from "pages/Africa/Ghana/GhanaVapt";
import GhanaGdpr from "pages/Africa/Ghana/GhanaGdpr";
import GhanaSoc1 from "pages/Africa/Ghana/GhanaSoc1";
import GhanaSoc2 from "pages/Africa/Ghana/GhanaSoc2";
import Nigeria9001 from "pages/Africa/Nigeria/Nigeria9001";
import Nigeria27001 from "pages/Africa/Nigeria/Nigeria27001";
import NigeriaCmmi from "pages/Africa/Nigeria/NigeriaCmmi";
import NigeriaHipaa from "pages/Africa/Nigeria/NigeriaHipaa";
import NigeriaVapt from "pages/Africa/Nigeria/NigeriaVapt";
import NigeriaGdpr from "pages/Africa/Nigeria/NigeriaGdpr";
import NigeriaSoc1 from "pages/Africa/Nigeria/NigeriaSoc1";
import NigeriaSoc2 from "pages/Africa/Nigeria/NigeriaSoc2";
import SouthAfrica9001 from "pages/Africa/South-Africa/SouthAfrica9001";
import SouthAfrica27001 from "pages/Africa/South-Africa/SouthAfrica27001";
import SouthAfricaCmmi from "pages/Africa/South-Africa/SouthAfricaCmmi";
import SouthAfricaHipaa from "pages/Africa/South-Africa/SouthAfricaHipaa";
import SouthAfricaVapt from "pages/Africa/South-Africa/SouthAfricaVapt";
import SouthAfricaGdpr from "pages/Africa/South-Africa/SouthAfricaGdpr";
import SouthAfricaSoc1 from "pages/Africa/South-Africa/SouthAfricaSoc1";
import SouthAfricaSoc2 from "pages/Africa/South-Africa/SouthAfricaSoc2";
import Mauritius9001 from "pages/Africa/Mauritius/Mauritius9001";
import Mauritius27001 from "pages/Africa/Mauritius/Mauritius27001";
import MauritiusCmmi from "pages/Africa/Mauritius/MauritiusCmmi";
import MauritiusHipaa from "pages/Africa/Mauritius/MauritiusHipaa";
import MauritiusVapt from "pages/Africa/Mauritius/MauritiusVapt";
import MauritiusGdpr from "pages/Africa/Mauritius/MauritiusGdpr";
import MauritiusSoc1 from "pages/Africa/Mauritius/MauritiusSoc1";
import MauritiusSoc2 from "pages/Africa/Mauritius/MauritiusSoc2";
import Maldives9001 from "pages/Asia/Maldives/Maldives9001";
import Maldives27001 from "pages/Asia/Maldives/Maldives27001";
import MaldivesCmmi from "pages/Asia/Maldives/MaldivesCmmi";
import MaldivesHipaa from "pages/Asia/Maldives/MaldivesHipaa";
import MaldivesVapt from "pages/Asia/Maldives/MaldivesVapt";
import MaldivesGdpr from "pages/Asia/Maldives/MaldivesGdpr";
import MaldivesSoc1 from "pages/Asia/Maldives/MaldivesSoc1";
import MaldivesSoc2 from "pages/Asia/Maldives/MaldivesSoc2";
import Chennai9001 from "pages/india/Chennai/Chennai9001";
import Chennai27001 from "pages/india/Chennai/Chennai27001";
import ChennaiCmmi from "pages/india/Chennai/ChennaiCmmi";
import ChennaiHipaa from "pages/india/Chennai/ChennaiHipaa";
import ChennaiVapt from "pages/india/Chennai/ChennaiVapt";
import ChennaiGdpr from "pages/india/Chennai/ChennaiGdpr";
import ChennaiSoc1 from "pages/india/Chennai/ChennaiSoc1";
import ChennaiSoc2 from "pages/india/Chennai/ChennaiSoc2";
import Coimbatore9001 from "pages/india/Coimbatore/Coimbatore9001";
import Coimbatore27001 from "pages/india/Coimbatore/Coimbatore27001";
import CoimbatoreCmmi from "pages/india/Coimbatore/CoimbatoreCmmi";
import CoimbatoreHipaa from "pages/india/Coimbatore/CoimbatoreHipaa";
import CoimbatoreVapt from "pages/india/Coimbatore/CoimbatoreVapt";
import CoimbatoreGdpr from "pages/india/Coimbatore/CoimbatoreGdpr";
import CoimbatoreSoc1 from "pages/india/Coimbatore/CoimbatoreSoc1";
import CoimbatoreSoc2 from "pages/india/Coimbatore/CoimbatoreSoc2";
import Kerala9001 from "pages/india/Kerala/Kerala9001";
import Kerala27001 from "pages/india/Kerala/Kerala27001";
import KeralaCmmi from "pages/india/Kerala/KeralaCmmi";
import KeralaHipaa from "pages/india/Kerala/KeralaHipaa";
import KeralaVapt from "pages/india/Kerala/KeralaVapt";
import KeralaGdpr from "pages/india/Kerala/KeralaGdpr";
import KeralaSoc1 from "pages/india/Kerala/KeralaSoc1";
import KeralaSoc2 from "pages/india/Kerala/KeralaSoc2";
const root = ReactDOM.createRoot(document.getElementById("root"));
export const ThemeContext = createContext();

const App = () => {
  const [theme, setTheme] = useState(false);
  const tracking_id="G-C89V11LN51";
  ReactGA.initialize(tracking_id);
  ReactGA.send({ hitType: "pageview", page: "/contact", title: "Contact Us" });
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Switch>
          <Route exact path="/" render={(props) => <Index {...props} />} />
          <Route path="/aboutus" render={(props) => <AboutUs />} />
          <Route path="/privacypolicy" render={(props) => <PrivacyPolicy />} />
          <Route path="/tnc" render={(props) => <TermsNConditions />} />
          <Route path="/contact" render={(props) => <ContactUs />} />
          <Route path="/iso-9001-certification" render={(props) => <Iso9001Certification />} />
          <Route path="/cmmi-certification" render={(props) => <CmmiCertification />} />
          <Route path="/iso-45001-certification" render={(props) => <Iso45001Certification />} />
          <Route path="/hipaa-certification" render={(props) => <HipaaCertification />} />
          <Route path="/iso-14001-certification" render={(props) => <Iso14001Certification />} />          
          <Route path="/iso-27001-certification" render={(props) => <Iso27001Certification />} />
          <Route path="/gdpr-certification" render={(props) => <GdprCertification />} />
          <Route path="/pci-dss-certification" render={(props) => <PcidssCertification />} />
          <Route path="/soc-1-certification" render={(props) => <Soc1Certification />} />
          <Route path="/soc-2-certification" render={(props) => <Soc2Certification />} />
          <Route path="/vapt-certification" render={(props) => <VaptCertification />} />
          <Route path="/ce-mark-certification" render={(props) => <CeMarking />} />
          <Route path="/mtcte" render={(props) => <MTCTE />} />
          <Route path="/services" render={(props) => <ServicesPage />} />
          <Route path="/thankyou" render={(props) => <ThankYou />} />

          <Route path="/stats" render={(props) => <StatsWithForm />} />


          {/* ------------INDIA-------- */}
          {/* ------------bangalore-------- */}
          <Route path="/iso-9001-certification-in-bangalore" render={(props) => <Bangalore9001 />} />
          <Route path="/iso-27001-certification-in-bangalore" render={(props) => <Bangalore27001 />} />
          <Route path="/cmmi-certification-in-bangalore" render={(props) => <BangaloreCmmi />} />
          <Route path="/hipaa-certification-in-bangalore" render={(props) => <BangaloreHipaa />} />
          <Route path="/vapt-certification-in-bangalore" render={(props) => <BangaloreVapt />} />
          <Route path="/gdpr-certification-in-bangalore" render={(props) => <BangaloreGdpr />} />
          <Route path="/soc-1-certification-in-bangalore" render={(props) => <BangaloreSoc1 />} />
          <Route path="/soc-2-certification-in-bangalore" render={(props) => <BangaloreSoc2 />} />

          {/* -----------hyderabad-------------- */}
          <Route path="/iso-9001-certification-in-hyderabad" render={(props) => <Hyderabad9001 />} />
          <Route path="/cmmi-certification-in-hyderabad" render={(props) => <HyderabadCmmi />} />
          <Route path="/hipaa-certification-in-hyderabad" render={(props) => <HyderabadHipaa />} />
          <Route path="/vapt-certification-in-hyderabad" render={(props) => <HyderabadVapt />} />
          <Route path="/gdpr-certification-in-hyderabad" render={(props) => <HyderabadGdpr />} />
          <Route path="/soc-1-certification-in-hyderabad" render={(props) => <HyderabadSoc1 />} />
          <Route path="/soc-2-certification-in-hyderabad" render={(props) => <HyderabadSoc2 />} />
          <Route path="/iso-27001-certification-in-hyderabad" render={(props) => <Hyderabad27001 />} />

          {/* -----------mumbai-------------- */}
          <Route path="/iso-9001-certification-in-mumbai" render={(props) => <Mumbai9001 />} />
          <Route path="/iso-27001-certification-in-mumbai" render={(props) => <Mumbai27001 />} />
          <Route path="/cmmi-certification-in-mumbai" render={(props) => <MumbaiCmmi />} />
          <Route path="/hipaa-certification-in-mumbai" render={(props) => <MumbaiHipaa />} />
          <Route path="/vapt-certification-in-mumbai" render={(props) => <MumbaiVapt />} />
          <Route path="/gdpr-certification-in-mumbai" render={(props) => <MumbaiGdpr />} />
          <Route path="/soc-1-certification-in-mumbai" render={(props) => <MumbaiSoc1 />} />
          <Route path="/soc-2-certification-in-mumbai" render={(props) => <MumbaiSoc2 />} />

        {/* -----------pune-------------- */}
        <Route path="/iso-9001-certification-in-pune" render={(props) => <Pune9001 />} />
        <Route path="/iso-27001-certification-in-pune" render={(props) => <Pune27001 />} />
        <Route path="/cmmi-certification-in-pune" render={(props) => <PuneCmmi />} />
        <Route path="/hipaa-certification-in-pune" render={(props) => <PuneHipaa />} />
        <Route path="/vapt-certification-in-pune" render={(props) => <PuneVapt />} />
        <Route path="/gdpr-certification-in-pune" render={(props) => <PuneGdpr />} />
        <Route path="/soc-1-certification-in-pune" render={(props) => <PuneSoc1 />} />
        <Route path="/soc-2-certification-in-pune" render={(props) => <PuneSoc2 />} />


        {/* -----------delhi-------------- */}
        <Route path="/iso-9001-certification-in-delhi" render={(props) => <Delhi9001 />} />
        <Route path="/iso-27001-certification-in-delhi" render={(props) => <Delhi27001 />} />
        <Route path="/cmmi-certification-in-delhi" render={(props) => <DelhiCmmi />} />
        <Route path="/hipaa-certification-in-delhi" render={(props) => <DelhiHipaa />} />
        <Route path="/vapt-certification-in-delhi" render={(props) => <DelhiVapt />} />
        <Route path="/gdpr-certification-in-delhi" render={(props) => <DelhiGdpr />} />
        <Route path="/soc-1-certification-in-delhi" render={(props) => <DelhiSoc1 />} />
        <Route path="/soc-2-certification-in-delhi" render={(props) => <DelhiSoc2 />} />


        {/* -----------Chennai-------------- */}
        <Route path="/iso-9001-certification-in-chennai" render={(props) => <Chennai9001 />} />
        <Route path="/iso-27001-certification-in-chennai" render={(props) => <Chennai27001 />} />
        <Route path="/cmmi-certification-in-chennai" render={(props) => <ChennaiCmmi />} />
        <Route path="/hipaa-certification-in-chennai" render={(props) => <ChennaiHipaa />} />
        <Route path="/vapt-certification-in-chennai" render={(props) => <ChennaiVapt />} />
        <Route path="/gdpr-certification-in-chennai" render={(props) => <ChennaiGdpr />} />
        <Route path="/soc-1-certification-in-chennai" render={(props) => <ChennaiSoc1 />} />
        <Route path="/soc-2-certification-in-chennai" render={(props) => <ChennaiSoc2 />} />


        {/* -----------Coimbatore-------------- */}
        <Route path="/iso-9001-certification-in-coimbatore" render={(props) => <Coimbatore9001 />} />
        <Route path="/iso-27001-certification-in-coimbatore" render={(props) => <Coimbatore27001 />} />
        <Route path="/cmmi-certification-in-coimbatore" render={(props) => <CoimbatoreCmmi />} />
        <Route path="/hipaa-certification-in-coimbatore" render={(props) => <CoimbatoreHipaa />} />
        <Route path="/vapt-certification-in-coimbatore" render={(props) => <CoimbatoreVapt />} />
        <Route path="/gdpr-certification-in-coimbatore" render={(props) => <CoimbatoreGdpr />} />
        <Route path="/soc-1-certification-in-coimbatore" render={(props) => <CoimbatoreSoc1 />} />
        <Route path="/soc-2-certification-in-coimbatore" render={(props) => <CoimbatoreSoc2 />} />


        {/* -----------Kerala-------------- */}
        <Route path="/iso-9001-certification-in-kerala" render={(props) => <Kerala9001 />} />
        <Route path="/iso-27001-certification-in-kerala" render={(props) => <Kerala27001 />} />
        <Route path="/cmmi-certification-in-kerala" render={(props) => <KeralaCmmi />} />
        <Route path="/hipaa-certification-in-kerala" render={(props) => <KeralaHipaa />} />
        <Route path="/vapt-certification-in-kerala" render={(props) => <KeralaVapt />} />
        <Route path="/gdpr-certification-in-kerala" render={(props) => <KeralaGdpr />} />
        <Route path="/soc-1-certification-in-kerala" render={(props) => <KeralaSoc1 />} />
        <Route path="/soc-2-certification-in-kerala" render={(props) => <KeralaSoc2 />} />




        {/* -----------north america-------------- */}
        {/* -----------Mexico-------------- */}
        <Route path="/iso-9001-certification-in-mexico" render={(props) => <Mexico9001 />} />
        <Route path="/iso-27001-certification-in-mexico" render={(props) => <Mexico27001 />} />
        <Route path="/cmmi-certification-in-mexico" render={(props) => <MexicoCmmi />} />
        <Route path="/hipaa-certification-in-mexico" render={(props) => <MexicoHipaa />} />
        <Route path="/vapt-certification-in-mexico" render={(props) => <MexicoVapt />} />
        <Route path="/gdpr-certification-in-mexico" render={(props) => <MexicoGdpr />} />
        <Route path="/soc-1-certification-in-mexico" render={(props) => <MexicoSoc1 />} />
        <Route path="/soc-2-certification-in-mexico" render={(props) => <MexicoSoc2 />} />


        {/* -----------USA-------------- */}
        <Route path="/iso-9001-certification-in-usa" render={(props) => <Iso9001 />} />
        <Route path="/iso-27001-certification-in-usa" render={(props) => <Iso27001 />} />
        <Route path="/cmmi-certification-in-usa" render={(props) => <Cmmi />} />
        <Route path="/hipaa-certification-in-usa" render={(props) => <Hipaa />} />
        <Route path="/vapt-certification-in-usa" render={(props) => <Vapt />} />
        <Route path="/gdpr-certification-in-usa" render={(props) => <Gdpr />} />
        <Route path="/soc-1-certification-in-usa" render={(props) => <Soc1 />} />
        <Route path="/soc-2-certification-in-usa" render={(props) => <Soc2 />} />


        {/* -----------Asia-------------- */}
        {/* -----------philippines-------------- */}
        <Route path="/iso-9001-certification-in-philippines" render={(props) => <Philippines9001 />} />
        <Route path="/iso-27001-certification-in-philippines" render={(props) => <Philippines27001 />} />
        <Route path="/cmmi-certification-in-philippines" render={(props) => <PhilippinesCmmi />} />
        <Route path="/hipaa-certification-in-philippines" render={(props) => <PhilippinesHipaa />} />
        <Route path="/vapt-certification-in-philippines" render={(props) => <PhilippinesVapt />} />
        <Route path="/gdpr-certification-in-philippines" render={(props) => <PhilippinesGdpr />} />
        <Route path="/soc-1-certification-in-philippines" render={(props) => <PhilippinesSoc1 />} />
        <Route path="/soc-2-certification-in-philippines" render={(props) => <PhilippinesSoc2 />} />

        {/* -----------Singapore -------------- */}
        <Route path="/iso-9001-certification-in-singapore" render={(props) => <Singapore9001 />} />
        <Route path="/iso-27001-certification-in-singapore" render={(props) => <Singapore27001 />} />
        <Route path="/cmmi-certification-in-singapore" render={(props) => <SingaporeCmmi />} />
        <Route path="/hipaa-certification-in-singapore" render={(props) => <SingaporeHipaa />} />
        <Route path="/vapt-certification-in-singapore" render={(props) => <SingaporeVapt />} />
        <Route path="/gdpr-certification-in-singapore" render={(props) => <SingaporeGdpr />} />
        <Route path="/soc-1-certification-in-singapore" render={(props) => <SingaporeSoc1 />} />
        <Route path="/soc-2-certification-in-singapore" render={(props) => <SingaporeSoc2 />} />

        {/* -----------Malaysia -------------- */}
        <Route path="/iso-9001-certification-in-malaysia" render={(props) => <Malaysia9001 />} />
        <Route path="/iso-27001-certification-in-malaysia" render={(props) => <Malaysia27001 />} />
        <Route path="/cmmi-certification-in-malaysia" render={(props) => <MalaysiaCmmi />} />
        <Route path="/hipaa-certification-in-malaysia" render={(props) => <MalaysiaHipaa />} />
        <Route path="/vapt-certification-in-malaysia" render={(props) => <MalaysiaVapt />} />
        <Route path="/gdpr-certification-in-malaysia" render={(props) => <MalaysiaGdpr />} />
        <Route path="/soc-1-certification-in-malaysia" render={(props) => <MalaysiaSoc1 />} />
        <Route path="/soc-2-certification-in-malaysia" render={(props) => <MalaysiaSoc2 />} />


        {/* -----------Indonesia -------------- */}
        <Route path="/iso-9001-certification-in-indonesia" render={(props) => <Indonesia9001 />} />
        <Route path="/iso-27001-certification-in-indonesia" render={(props) => <Indonesia27001 />} />
        <Route path="/cmmi-certification-in-indonesia" render={(props) => <IndonesiaCmmi />} />
        <Route path="/hipaa-certification-in-indonesia" render={(props) => <IndonesiaHipaa />} />
        <Route path="/vapt-certification-in-indonesia" render={(props) => <IndonesiaVapt />} />
        <Route path="/gdpr-certification-in-indonesia" render={(props) => <IndonesiaGdpr />} />
        <Route path="/soc-1-certification-in-indonesia" render={(props) => <IndonesiaSoc1 />} />
        <Route path="/soc-2-certification-in-indonesia" render={(props) => <IndonesiaSoc2 />} />


        {/* -----------Thailand -------------- */}
        <Route path="/iso-9001-certification-in-thailand" render={(props) => <Thailand9001 />} />
        <Route path="/iso-27001-certification-in-thailand" render={(props) => <Thailand27001 />} />
        <Route path="/cmmi-certification-in-thailand" render={(props) => <ThailandCmmi />} />
        <Route path="/hipaa-certification-in-thailand" render={(props) => <ThailandHipaa />} />
        <Route path="/vapt-certification-in-thailand" render={(props) => <ThailandVapt />} />
        <Route path="/gdpr-certification-in-thailand" render={(props) => <ThailandGdpr />} />
        <Route path="/soc-1-certification-in-thailand" render={(props) => <ThailandSoc1 />} />
        <Route path="/soc-2-certification-in-thailand" render={(props) => <ThailandSoc2 />} />


        {/* -----------Cambodia -------------- */}
        <Route path="/iso-9001-certification-in-cambodia" render={(props) => <Cambodia9001 />} />
        <Route path="/iso-27001-certification-in-cambodia" render={(props) => <Cambodia27001 />} />
        <Route path="/cmmi-certification-in-cambodia" render={(props) => <CambodiaCmmi />} />
        <Route path="/hipaa-certification-in-cambodia" render={(props) => <CambodiaHipaa />} />
        <Route path="/vapt-certification-in-cambodia" render={(props) => <CambodiaVapt />} />
        <Route path="/gdpr-certification-in-cambodia" render={(props) => <CambodiaGdpr />} />
        <Route path="/soc-1-certification-in-cambodia" render={(props) => <CambodiaSoc1 />} />
        <Route path="/soc-2-certification-in-cambodia" render={(props) => <CambodiaSoc2 />} />


        {/* -----------Maldives-------------- */}
        <Route path="/iso-9001-certification-in-maldives" render={(props) => <Maldives9001 />} />
        <Route path="/iso-27001-certification-in-maldives" render={(props) => <Maldives27001 />} />
        <Route path="/cmmi-certification-in-maldives" render={(props) => <MaldivesCmmi />} />
        <Route path="/hipaa-certification-in-maldives" render={(props) => <MaldivesHipaa />} />
        <Route path="/vapt-certification-in-maldives" render={(props) => <MaldivesVapt />} />
        <Route path="/gdpr-certification-in-maldives" render={(props) => <MaldivesGdpr />} />
        <Route path="/soc-1-certification-in-maldives" render={(props) => <MaldivesSoc1 />} />
        <Route path="/soc-2-certification-in-maldives" render={(props) => <MaldivesSoc2 />} />


        {/* -----------middle-east-------------- */}
        {/* -----------kuwait-------------- */}
        <Route path="/iso-9001-certification-in-kuwait" render={(props) => <Kuwait9001 />} />
        <Route path="/iso-27001-certification-in-kuwait" render={(props) => <Kuwait27001 />} />
        <Route path="/cmmi-certification-in-kuwait" render={(props) => <KuwaitCmmi />} />
        <Route path="/hipaa-certification-in-kuwait" render={(props) => <KuwaitHipaa />} />
        <Route path="/vapt-certification-in-kuwait" render={(props) => <KuwaitVapt />} />
        <Route path="/gdpr-certification-in-kuwait" render={(props) => <KuwaitGdpr />} />
        <Route path="/soc-1-certification-in-kuwait" render={(props) => <KuwaitSoc1 />} />
        <Route path="/soc-2-certification-in-kuwait" render={(props) => <KuwaitSoc2 />} />


        {/* -----------qatar-------------- */}
        <Route path="/iso-9001-certification-in-qatar" render={(props) => <Qatar9001 />} />
        <Route path="/iso-27001-certification-in-qatar" render={(props) => <Qatar27001 />} />
        <Route path="/cmmi-certification-in-qatar" render={(props) => <QatarCmmi />} />
        <Route path="/hipaa-certification-in-qatar" render={(props) => <QatarHipaa />} />
        <Route path="/vapt-certification-in-qatar" render={(props) => <QatarVapt />} />
        <Route path="/gdpr-certification-in-qatar" render={(props) => <QatarGdpr />} />
        <Route path="/soc-1-certification-in-qatar" render={(props) => <QatarSoc1 />} />
        <Route path="/soc-2-certification-in-qatar" render={(props) => <QatarSoc2 />} />


        {/* -----------saudi arabia-------------- */}
        <Route path="/iso-9001-certification-in-saudi-arabia" render={(props) => <Saudi9001 />} />
        <Route path="/iso-27001-certification-in-saudi-arabia" render={(props) => <Saudi27001 />} />
        <Route path="/cmmi-certification-in-saudi-arabia" render={(props) => <SaudiCmmi />} />
        <Route path="/hipaa-certification-in-saudi-arabia" render={(props) => <SaudiHipaa />} />
        <Route path="/soc-1-certification-in-saudi-arabia" render={(props) => <SaudiSoc1 />} />
        <Route path="/soc-2-certification-in-saudi-arabia" render={(props) => <SaudiSoc2 />} />
        <Route path="/vapt-certification-in-saudi-arabia" render={(props) => <SaudiVapt />} />
        <Route path="/gdpr-certification-in-saudi-arabia" render={(props) => <SaudiGdpr />} />


        {/* -----------Yemen-------------- */}
        <Route path="/iso-9001-certification-in-yemen" render={(props) => <Yemen9001 />} />
        <Route path="/iso-27001-certification-in-yemen" render={(props) => <Yemen27001 />} />
        <Route path="/cmmi-certification-in-yemen" render={(props) => <YemenCmmi />} />
        <Route path="/hipaa-certification-in-yemen" render={(props) => <YemenHipaa />} />
        <Route path="/vapt-certification-in-yemen" render={(props) => <YemenVapt />} />
        <Route path="/gdpr-certification-in-yemen" render={(props) => <YemenGdpr />} />
        <Route path="/soc-1-certification-in-yemen" render={(props) => <YemenSoc1 />} />
        <Route path="/soc-2-certification-in-yemen" render={(props) => <YemenSoc2 />} />


        {/* -----------UAE-------------- */}
        <Route path="/iso-9001-certification-in-uae" render={(props) => <Uae9001 />} />
        <Route path="/iso-27001-certification-in-uae" render={(props) => <Uae27001 />} />
        <Route path="/cmmi-certification-in-uae" render={(props) => <UaeCmmi />} />
        <Route path="/hipaa-certification-in-uae" render={(props) => <UaeHipaa />} />
        <Route path="/vapt-certification-in-uae" render={(props) => <UaeVapt />} />
        <Route path="/gdpr-certification-in-uae" render={(props) => <UaeGdpr />} />
        <Route path="/soc-1-certification-in-uae" render={(props) => <UaeSoc1 />} />
        <Route path="/soc-2-certification-in-uae" render={(props) => <UaeSoc2 />} />


        {/* -----------Oman-------------- */}
        <Route path="/iso-9001-certification-in-oman" render={(props) => <Oman9001 />} />
        <Route path="/iso-27001-certification-in-oman" render={(props) => <Oman27001 />} />
        <Route path="/cmmi-certification-in-oman" render={(props) => <OmanCmmi />} />
        <Route path="/hipaa-certification-in-oman" render={(props) => <OmanHipaa />} />
        <Route path="/vapt-certification-in-oman" render={(props) => <OmanVapt />} />
        <Route path="/gdpr-certification-in-oman" render={(props) => <OmanGdpr />} />
        <Route path="/soc-1-certification-in-oman" render={(props) => <OmanSoc1 />} />
        <Route path="/soc-2-certification-in-oman" render={(props) => <OmanSoc2 />} />


        {/* -----------bahrain-------------- */}
        <Route path="/iso-9001-certification-in-bahrain" render={(props) => <Bahrain9001 />} />
        <Route path="/iso-27001-certification-in-bahrain" render={(props) => <Bahrain27001 />} />
        <Route path="/cmmi-certification-in-bahrain" render={(props) => <BahrainCmmi />} />
        <Route path="/hipaa-certification-in-bahrain" render={(props) => <BahrainHipaa />} />
        <Route path="/vapt-certification-in-bahrain" render={(props) => <BahrainVapt />} />
        <Route path="/gdpr-certification-in-bahrain" render={(props) => <BahrainGdpr />} />
        <Route path="/soc-1-certification-in-bahrain" render={(props) => <BahrainSoc1 />} />
        <Route path="/soc-2-certification-in-bahrain" render={(props) => <BahrainSoc2 />} />


        {/* -----------Iraq-------------- */}
        <Route path="/iso-9001-certification-in-iraq" render={(props) => <Iraq9001 />} />
        <Route path="/iso-27001-certification-in-iraq" render={(props) => <Iraq27001 />} />
        <Route path="/cmmi-certification-in-iraq" render={(props) => <IraqCmmi />} />
        <Route path="/hipaa-certification-in-iraq" render={(props) => <IraqHipaa />} />
        <Route path="/vapt-certification-in-iraq" render={(props) => <IraqVapt />} />
        <Route path="/gdpr-certification-in-iraq" render={(props) => <IraqGdpr />} />
        <Route path="/soc-1-certification-in-iraq" render={(props) => <IraqSoc1 />} />
        <Route path="/soc-2-certification-in-iraq" render={(props) => <IraqSoc2 />} />


        {/* -----------Iran-------------- */}
        <Route path="/iso-9001-certification-in-iran" render={(props) => <Iran9001 />} />
        <Route path="/iso-27001-certification-in-iran" render={(props) => <Iran27001 />} />
        <Route path="/cmmi-certification-in-iran" render={(props) => <IranCmmi />} />
        <Route path="/hipaa-certification-in-iran" render={(props) => <IranHipaa />} />
        <Route path="/vapt-certification-in-iran" render={(props) => <IranVapt />} />
        <Route path="/gdpr-certification-in-iran" render={(props) => <IranGdpr />} />
        <Route path="/soc-1-certification-in-iran" render={(props) => <IranSoc1 />} />
        <Route path="/soc-2-certification-in-iran" render={(props) => <IranSoc2 />} />


        {/* -----------Africa-------------- */}
        {/* -----------Egypt-------------- */}
        <Route path="/iso-9001-certification-in-egypt" render={(props) => <Egypt9001 />} />
        <Route path="/iso-27001-certification-in-egypt" render={(props) => <Egypt27001 />} />
        <Route path="/cmmi-certification-in-egypt" render={(props) => <EgyptCmmi />} />
        <Route path="/hipaa-certification-in-egypt" render={(props) => <EgyptHipaa />} />
        <Route path="/vapt-certification-in-egypt" render={(props) => <EgyptVapt />} />
        <Route path="/gdpr-certification-in-egypt" render={(props) => <EgyptGdpr />} />
        <Route path="/soc-1-certification-in-egypt" render={(props) => <EgyptSoc1 />} />
        <Route path="/soc-2-certification-in-egypt" render={(props) => <EgyptSoc2 />} />


        {/* -----------Ghana-------------- */}
        <Route path="/iso-9001-certification-in-ghana" render={(props) => <Ghana9001 />} />
        <Route path="/iso-27001-certification-in-ghana" render={(props) => <Ghana27001 />} />
        <Route path="/cmmi-certification-in-ghana" render={(props) => <GhanaCmmi />} />
        <Route path="/hipaa-certification-in-ghana" render={(props) => <GhanaHipaa />} />
        <Route path="/vapt-certification-in-ghana" render={(props) => <GhanaVapt />} />
        <Route path="/gdpr-certification-in-ghana" render={(props) => <GhanaGdpr />} />
        <Route path="/soc-1-certification-in-ghana" render={(props) => <GhanaSoc1 />} />
        <Route path="/soc-2-certification-in-ghana" render={(props) => <GhanaSoc2 />} />


        {/* -----------Nigeria-------------- */}
        <Route path="/iso-9001-certification-in-nigeria" render={(props) => <Nigeria9001 />} />
        <Route path="/iso-27001-certification-in-nigeria" render={(props) => <Nigeria27001 />} />
        <Route path="/cmmi-certification-in-nigeria" render={(props) => <NigeriaCmmi />} />
        <Route path="/hipaa-certification-in-nigeria" render={(props) => <NigeriaHipaa />} />
        <Route path="/vapt-certification-in-nigeria" render={(props) => <NigeriaVapt />} />
        <Route path="/gdpr-certification-in-nigeria" render={(props) => <NigeriaGdpr />} />
        <Route path="/soc-1-certification-in-nigeria" render={(props) => <NigeriaSoc1 />} />
        <Route path="/soc-2-certification-in-nigeria" render={(props) => <NigeriaSoc2 />} />


        {/* -----------South Africa-------------- */}
        <Route path="/iso-9001-certification-in-south-africa" render={(props) => <SouthAfrica9001 />} />
        <Route path="/iso-27001-certification-in-south-africa" render={(props) => <SouthAfrica27001 />} />
        <Route path="/cmmi-certification-in-south-africa" render={(props) => <SouthAfricaCmmi />} />
        <Route path="/hipaa-certification-in-south-africa" render={(props) => <SouthAfricaHipaa />} />
        <Route path="/vapt-certification-in-south-africa" render={(props) => <SouthAfricaVapt />} />
        <Route path="/gdpr-certification-in-south-africa" render={(props) => <SouthAfricaGdpr />} />
        <Route path="/soc-1-certification-in-south-africa" render={(props) => <SouthAfricaSoc1 />} />
        <Route path="/soc-2-certification-in-south-africa" render={(props) => <SouthAfricaSoc2 />} />


        {/* -----------Mauritius-------------- */}
        <Route path="/iso-9001-certification-in-mauritius" render={(props) => <Mauritius9001 />} />
        <Route path="/iso-27001-certification-in-mauritius" render={(props) => <Mauritius27001 />} />
        <Route path="/cmmi-certification-in-mauritius" render={(props) => <MauritiusCmmi />} />
        <Route path="/hipaa-certification-in-mauritius" render={(props) => <MauritiusHipaa />} />
        <Route path="/vapt-certification-in-mauritius" render={(props) => <MauritiusVapt />} />
        <Route path="/gdpr-certification-in-mauritius" render={(props) => <MauritiusGdpr />} />
        <Route path="/soc-1-certification-in-mauritius" render={(props) => <MauritiusSoc1 />} />
        <Route path="/soc-2-certification-in-mauritius" render={(props) => <MauritiusSoc2 />} />
      


          <Redirect to="/" />
        </Switch>
      </ThemeContext.Provider>
    </BrowserRouter>
    
  );
};

root.render(<App />);

