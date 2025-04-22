/** @format */

import { useDrag } from "react-dnd";

const DraggableTemplateItem = ({ item }) => {
	const [{ isDragging }, dragRef] = useDrag({
		type: "TEMPLATE",
		item: { ...item },
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	});

	return (
		<div
			ref={dragRef}
			className="template-list-items"
			style={{ opacity: isDragging ? 0.5 : 1 }}>
			{item.label}
		</div>
	);
};

export default DraggableTemplateItem;
