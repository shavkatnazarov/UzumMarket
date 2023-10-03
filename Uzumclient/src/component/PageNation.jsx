export const PageNation = ({perPage, totalData, paginate}) => {
    const pageNumber = [];

    for (let i = 0; i < Math.ceil(totalData / perPage); i++) {
        pageNumber.push(i);
    }
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {pageNumber.map(item => (
                    <li key={item} className="page-item">
                        <a onClick={() => paginate(item + 1)} className="page-link"
                           style={{cursor: 'pointer'}}>{item + 1}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}