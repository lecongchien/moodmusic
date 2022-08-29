function ListText({ PrintTheList }) {
    return (
        <>
            {PrintTheList.map((element, index) => {
                const { title } = element;
                return <li key={index}>{title}</li>;
            })}
        </>
    );
}

export default ListText;
