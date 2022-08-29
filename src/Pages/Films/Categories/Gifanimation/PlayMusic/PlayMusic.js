//scss
// import classNames from 'classnames/bind';
// import styles from './PlayMusic.module.scss';
// const cx = classNames.bind(styles);
// import lofimusic from '../Datalofi/Datalofi';
import ChangeFunction from './ChangeFunction';
function PlayMusic({ currentSongIndex, setCurrentSongIndex, lofi, categori, filterItems, changecolor }) {
    return (
        <ChangeFunction
            currentSongIndex={currentSongIndex}
            setCurrentSongIndex={setCurrentSongIndex}
            // nextSongIndex={nextSongIndex}
            categori={categori}
            lofi={lofi}
            filterItems={filterItems}
            changecolor={changecolor}
        />
    );
}

export default PlayMusic;
