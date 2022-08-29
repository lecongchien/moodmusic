import styles from './HeaderBox.module.scss';
import classNames from 'classnames/bind';
import svg from '~/assets/svg';
import image from '~/assets/svg/CH.gif';
import Tippy from '@tippyjs/react';
import { useEffect, useRef, useState } from 'react';
import lofi from '~/assets/music/moodmusic/ocean.mp3';
import lofi2 from '~/assets/music/moodmusic/wind.mp3';
import lofi3 from '~/assets/music/moodmusic/waves.mp3';

const cx = classNames.bind(styles);

function HeaderBox({ max, refvolumn, volumn, categori, filterItems, changecolor, opacity }) {
    const flex = useRef();
    const change1 = useRef();
    const change2 = useRef();
    const change3 = useRef();
    const curentSong = useRef();
    const curentSong2 = useRef();
    const curentSong3 = useRef();
    const audio = useRef();
    const audio2 = useRef();
    const audio3 = useRef();
    const [changewidth1, setChangewidth1] = useState();
    const [changewidth2, setChangewidth2] = useState();
    const [changewidth3, setChangewidth3] = useState();
    const [waves, setwaves] = useState(0);
    const [ocean, setocean] = useState(0);
    const [wind, setwind] = useState(0);

    useEffect(() => {
        flex.current.style.width = `${max}%`;
        change1.current.style.width = `calc(${changewidth1}% - 10px)`;
        change2.current.style.width = `calc(${changewidth2}% - 10px)`;
        change3.current.style.width = `calc(${changewidth3}% - 10px)`;
    });

    const mouse = (e) => {
        audio.current.volume = curentSong.current.value / 100;
        e.target.value = audio.current.volume * 100;
        setChangewidth1(e.target.value);
        setwaves(e.target.value);
        curentSong.current.value >= 1 ? audio.current.play() : audio.current.pause();
    };

    const mouse2 = (e) => {
        audio2.current.volume = curentSong2.current.value / 100;
        e.target.value = audio2.current.volume * 100;
        setChangewidth2(e.target.value);
        setocean(e.target.value);
        curentSong2.current.value >= 1 ? audio2.current.play() : audio2.current.pause();
    };

    const mouse3 = (e) => {
        audio3.current.volume = curentSong3.current.value / 100;
        e.target.value = audio3.current.volume * 100;
        setChangewidth3(e.target.value);
        setwind(e.target.value);
        curentSong3.current.value >= 1 ? audio3.current.play() : audio3.current.pause();
    };

    return (
        <div ref={opacity} className={cx('mixer-panel')}>
            <div className={cx('header')}>
                <h4>Mood</h4>
                <div className={cx('header_selection')}>
                    <Tippy
                        content={
                            <div className={cx('switch')}>
                                <button className={cx('spotify')}>
                                    <img src={svg.Spotify} alt="spotify" />
                                </button>
                            </div>
                        }
                        placement="left"
                        interactive="true"
                        duration={[500, 0]}
                    >
                        <button className={cx('clear')}>
                            <img src={image} alt="logoch" />
                        </button>
                    </Tippy>
                </div>
            </div>
            <div className={cx('container-content')}>
                {categori.map((element) => {
                    const { id, title, image } = element;
                    return (
                        <div
                            key={id}
                            className={cx('player-container')}
                            style={changecolor === title ? { opacity: 1, color: '#f3a952' } : {}}
                            onClick={() => filterItems(element.title)}
                        >
                            <img src={image} alt={title} />
                            <p>{title}</p>
                        </div>
                    );
                })}
            </div>
            <div className={cx('volumn-content')}>
                <div className={cx('psvg')}>
                    <img src={svg.min} alt="min" />
                </div>
                <div className={cx('level-input')}>
                    <div className={cx('track-full')}>
                        <div className={cx('filter-start')}></div>
                        <div ref={flex} className={cx('track-start')}></div>
                    </div>
                    <input
                        type="range"
                        className={cx('volume')}
                        name="volume"
                        min="0"
                        max="100"
                        value={max ?? ''}
                        ref={refvolumn}
                        onChange={volumn}
                    />
                </div>
                <div className={cx('psvg')}>
                    <img src={svg.max} alt="max" />
                </div>
            </div>
            <div className={cx('sounds')}>Sounds</div>
            <div className={cx('effects-container')}>
                <>
                    <div className={cx('effects-item')}>
                        <p className={cx('effects-labale')}>Waves</p>
                        <div className={cx('level-input')}>
                            <div className={cx('track-input')}>
                                <div className={cx('filter')}></div>
                                <div ref={change1} className={cx('track')}></div>
                            </div>
                            <input
                                type="range"
                                ref={curentSong}
                                className={cx('volume', 'inputImage')}
                                min="0"
                                max="100"
                                value={waves ?? ''}
                                onChange={mouse}
                            />
                        </div>
                        <audio loop ref={audio} src={lofi}></audio>
                    </div>
                    <div className={cx('effects-item')}>
                        <p className={cx('effects-labale')}>Wind</p>
                        <div className={cx('level-input')}>
                            <div className={cx('track-input')}>
                                <div className={cx('filter')}></div>
                                <div ref={change2} className={cx('track')}></div>
                            </div>
                            <input
                                type="range"
                                ref={curentSong2}
                                className={cx('volume', 'inputImage')}
                                min="0"
                                max="100"
                                value={ocean ?? ''}
                                onChange={mouse2}
                            />
                        </div>
                        <audio loop ref={audio2} src={lofi2}></audio>
                    </div>
                    <div className={cx('effects-item')}>
                        <p className={cx('effects-labale')}>Ocean</p>
                        <div className={cx('level-input')}>
                            <div className={cx('track-input')}>
                                <div className={cx('filter')}></div>
                                <div ref={change3} className={cx('track')}></div>
                            </div>
                            <input
                                type="range"
                                ref={curentSong3}
                                className={cx('volume', 'inputImage')}
                                min="0"
                                max="100"
                                value={wind ?? ''}
                                onChange={mouse3}
                            />
                        </div>
                        <audio loop ref={audio3} src={lofi3}></audio>
                    </div>
                </>
            </div>
            <div className={cx('footer')}>
                <p>mix mode</p>
            </div>
        </div>
    );
}

export default HeaderBox;
