function ListGroup() {
    const items = ['NYC', 'BAN', 'HYD'];

    
  return (
    <div>
        <h1>List Names</h1>
        {items.length === 0 && <p>No items found</p>}
        <ul className="list-group">
            {items.map((item, index) => (
                <li key={index} className="list-group-item" 
                onClick={() => console.log(item)}>
                    {item}
                </li>
            ))}
        </ul>
    </div>
  );
}
export default ListGroup;