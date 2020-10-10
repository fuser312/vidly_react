import React from "react";

function ListGroup(props) {
    const {items, textProperty, valueProperty, onItemSelect, selectedItem} = props;
    return (
        <ul className="list-group">

            {items.map(item =>
                <li
                    key={item[valueProperty]}
                    onClick={() => onItemSelect(item)}
                    className={selectedItem[valueProperty] === item[valueProperty] ? "list-group-item active" : "list-group-item"}>
                    {item[textProperty]}
                </li>
            )}
        </ul>
    )
}

ListGroup.defaultProps = {
    textProperty: 'name',
    valueProperty: '_id'
}
export default ListGroup;