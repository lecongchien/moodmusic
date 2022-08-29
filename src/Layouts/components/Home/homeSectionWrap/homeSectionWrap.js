import styles from './homeSectionWrap.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
const cx = classNames.bind(styles);

function HomeSectionWrap({ sectionbox, sectionboxwrap }) {
    const titlebrother = [
        {
            text: 'brother music',
            textfilm: 'brother film',
        },
        {
            text: 'brother music',
            textfilm: 'brother film',
        },
        {
            text: 'brother music',
            textfilm: 'brother film',
        },
        {
            text: 'brother music',
            textfilm: 'brother film',
        },
        {
            text: 'brother music',
            textfilm: 'brother film',
        },
        {
            text: 'brother music',
            textfilm: 'brother film',
        },
        {
            text: 'brother music',
            textfilm: 'brother film',
        },
        {
            text: 'brother music',
            textfilm: 'brother film',
        },
        {
            text: 'brother music',
            textfilm: 'brother film',
        },
        {
            text: 'brother music',
            textfilm: 'brother film',
        },
    ];
    return (
        <div className={cx('home-section-wrap')}>
            <div className={cx('home_section')}>
                <div ref={sectionbox} className={cx('home-section-box')}>
                    <Button hometext>Scroll down for Brother Music</Button>
                    <div className={cx('home-section-title')}>
                        Brother music
                        <div className={cx('home_section_title_shape_wrap')}>
                            <div ref={sectionboxwrap} className={cx('home_section_title_shape')}>
                                {titlebrother.map((element, index) => {
                                    return (
                                        <div key={index}>
                                            <span>{element.text}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeSectionWrap;
