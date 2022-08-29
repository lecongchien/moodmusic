import Controls from '../Controls';
import { useEffect, useRef, useState } from 'react';
import MenuMusic from '../MenuMusic';

function ChangeFunction({ currentSongIndex, setCurrentSongIndex, lofi, categori, filterItems, changecolor }) {
    const [pause, setPause] = useState(false);
    const [max, Setmax] = useState(50);
    const audioEl = useRef();
    const volumMM = useRef();

    useEffect(() => {
        if (pause) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    });

    document.title = lofi[currentSongIndex].name;

    const skipsongs = (setcurent = true) => {
        if (setcurent) {
            setCurrentSongIndex(() => {
                let temp = currentSongIndex;
                temp++;

                if (temp > lofi.length - 1) {
                    temp = 0;
                }

                return temp;
            });
        } else {
            setCurrentSongIndex(() => {
                let temp = currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = lofi.length - 1;
                }

                return temp;
            });
        }
    };

    const volumns = (e) => {
        audioEl.current.volume = volumMM.current.value / 100;
        e.target.value = audioEl.current.volume * 100;
        Setmax(e.target.value);
    };

    return (
        <>
            <Controls
                skipsong={skipsongs}
                pause={pause}
                setPause={setPause}
                lofi={lofi}
                currentSongIndex={currentSongIndex}
            />
            <MenuMusic
                volumn={volumns}
                refvolumn={volumMM}
                max={max}
                categori={categori}
                filterItems={filterItems}
                changecolor={changecolor}
            />
            <audio loop ref={audioEl} src={lofi[currentSongIndex].src}></audio>
        </>
    );
}

export default ChangeFunction;
