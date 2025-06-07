import { NavLink } from "react-router-dom";

type BtnCustomProps = {
	text?: string;
	to: string;
	node?: React.ReactNode;
	children?: React.ReactNode;
	className?: string;
	disabled?: boolean;
	type?: "button" | "submit" | "reset";
};

export function BtnCustom({
	text,
	to,
	className,
	disabled,
	node,
	children,
	type = "button",
}: Readonly<BtnCustomProps>) {
	return (
		<NavLink
			className={`w-fit bg-bio-contraste text-white font-bold rounded-[8px] py-2 px-4 hover:bg-kawral-red/50 ${className} ${
				disabled ? "opacity-50" : ""
			}`}
			to={to}
			type={type}
			style={{ cursor: disabled ? "not-allowed" : "pointer" }}
		>
			{children || node || text}
		</NavLink>
	);
}

export function BtnLightCustom({
	text,
	to,
	className,
	disabled,
	children,
	type = "button",
}: Readonly<BtnCustomProps>) {
	return (
		<NavLink
			className={`w-fit bg-bio text-bio-contraste rounded-[8px] font-bold py-2 px-4 hover:bg-bio/50 ${className} ${
				disabled ? "opacity-50" : ""
			}`}
			to={to}
			type={type}
			style={{ cursor: disabled ? "not-allowed" : "pointer" }}
		>
			{children || text}
		</NavLink>
	);
}
