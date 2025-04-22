/** @format */

import { useRef, useEffect } from "react";
import { useDrop } from "react-dnd";

const DropZone = ({ onDrop, children }) => {
	const dropRef = useRef(null);
	const scrollThreshold = 50;

	const [{ isOver, canDrop }, drop] = useDrop({
		accept: "TEMPLATE",
		drop: (item) => onDrop(item),
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
	});

	useEffect(() => {
		const handleMouseMove = (e) => {
			const el = dropRef.current;
			if (!el) return;

			const { bottom } = el.getBoundingClientRect();
			if (e.clientY >= bottom - scrollThreshold) {
				el.scrollTop += 10;
			}
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => window.removeEventListener("mousemove", handleMouseMove);
	}, []);

	const borderStyle =
		isOver && canDrop ? "2px dashed #ccc" : "2px solid transparent";

	return (
		<div
			ref={(node) => {
				drop(node);
				dropRef.current = node;
			}}
			style={{
				minHeight: "200px",
				background: "#fff",
				border: borderStyle,
				padding: "10px",
				borderRadius: "10px",
				overflowY: "auto",
				transition: "border 0.2s ease-in-out",
			}}>
			{children}
		</div>
	);
};

export default DropZone;
