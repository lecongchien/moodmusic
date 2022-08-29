import { useState, useEffect } from 'react';
//css
import classNames from 'classnames/bind';
import styles from './Gifanimation.module.scss';
//component
import NavMenu from './NavMenu/NavMenu';
import PlayMusic from './PlayMusic';
import { lofimusic } from './Datalofi/Datalofi';
const cx = classNames.bind(styles);

function Gifanimation({ changegif }) {
    const categoris = [
        {
            id: 1,
            title: 'Sleepy',
            image: require('~/assets/svg/chill1.svg').default,
        },
        {
            id: 2,
            title: 'Jazzy',
            image: require('~/assets/svg/chill2.svg').default,
        },
        {
            id: 3,
            title: 'Chill',
            image: require('~/assets/svg/chill3.svg').default,
        },
    ];
    const [categori] = useState(categoris);
    const [lofi, setLofi] = useState(filterItem);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(0);
    const [fullScreen, setFullScreen] = useState(false);
    const [changecolor, setChangecolor] = useState('Chill');
    //
    useEffect(() => {
        setNextSongIndex(() => {
            if (currentSongIndex + 1 > lofi.length - 1) {
                return 0;
            } else {
                return currentSongIndex + 1;
            }
        });
    }, [currentSongIndex, lofi.length]);

    //
    function getFullscreenElement() {
        return document.fullscreenElement;
    }
    //fullscreen
    const requestfs = document.documentElement;
    const full = () => {
        getFullscreenElement() ? document.exitFullscreen() : requestfs.requestFullscreen();
    };

    function filterItem() {
        return lofimusic.filter((element) => element.mood === 'Chill');
    }

    const filterItems = (title) => {
        const newItems = lofimusic.filter((element) => element.mood === title);
        setLofi(newItems);
        setChangecolor(title);
    };
    //
    return (
        <div className={cx('containImage')}>
            <img src={changegif} alt="one" />
            <NavMenu fullScreen={fullScreen} setFullScreen={setFullScreen} full={full} nextSongIndex={nextSongIndex} />

            <PlayMusic
                setCurrentSongIndex={setCurrentSongIndex}
                setNextSongIndex={setNextSongIndex}
                currentSongIndex={currentSongIndex}
                lofi={lofi}
                categori={categori}
                filterItems={filterItems}
                changecolor={changecolor}
            />
        </div>
    );
}

export default Gifanimation;
