function ListImages({ PrintTheList }) {
    return (
        <>
            {PrintTheList.map((element, index) => {
                const { image } = element;

                return (
                    <li key={index}>
                        <img src={image} alt={image} />
                    </li>
                );
            })}
        </>
    );
}

export default ListImages;
