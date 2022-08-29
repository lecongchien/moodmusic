import config from '~/config';

//Pages
import Clients from '~/Pages/Clients';
import Contact from '~/Pages/Contact';
import Home from '~/Layouts/components/Home';
import Trees from '~/Pages/Films/Pages/Trees';
import LofiAnimeGif from '~/Pages/Films/Pages/Lofianimegif';
import FlowersAndsunset from '~/Pages/Films/Pages/FlowersAndsunset';
import Rain from '~/Pages/Films/Pages/Rain';
import Moonlight from '~/Pages/Films/Pages/Moonlight';
import All from '~/Pages/Films/Pages/All';

const publicRoutes = [
    { path: config.routes.clients, component: Clients },
    { path: config.routes.contact, component: Contact },
    { path: config.routes.brotherfilmco, component: Home },
    //films
    { path: config.routes.all, component: All },
    { path: config.routes.Rain, component: Rain },
    { path: config.routes.trees, component: Trees },
    { path: config.routes.moonlight, component: Moonlight },
    { path: config.routes.lofi, component: LofiAnimeGif },
    { path: config.routes.flowersAndsunset, component: FlowersAndsunset },

];

export { publicRoutes };
