import ItemMenu from './itemMenu';

function MenuMusic({ refvolumn, volumn, max, categori, filterItems, changecolor }) {
    return (
        <ItemMenu
            volumn={volumn}
            refvolumn={refvolumn}
            max={max}
            categori={categori}
            filterItems={filterItems}
            changecolor={changecolor}
        />
    );
}

export default MenuMusic;
