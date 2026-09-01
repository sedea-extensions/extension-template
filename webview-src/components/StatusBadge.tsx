import type { CSSProperties } from 'react';

export type StatusBadgeVariant = 'default' | 'loading' | 'empty' | 'error';

export interface StatusBadgeProps {
	label: string;
	variant?: StatusBadgeVariant;
}

const variantStyles: Record<StatusBadgeVariant, CSSProperties> = {
	default: {
		backgroundColor: '#e0f2fe',
		color: '#0369a1',
		border: '1px solid #7dd3fc',
	},
	loading: {
		backgroundColor: '#fef3c7',
		color: '#92400e',
		border: '1px solid #fcd34d',
	},
	empty: {
		backgroundColor: '#f1f5f9',
		color: '#475569',
		border: '1px solid #cbd5e1',
	},
	error: {
		backgroundColor: '#fee2e2',
		color: '#b91c1c',
		border: '1px solid #fca5a5',
	},
};

export function StatusBadge({ label, variant = 'default' }: StatusBadgeProps) {
	return (
		<span
			style={{
				display: 'inline-flex',
				alignItems: 'center',
				padding: '4px 10px',
				borderRadius: '999px',
				fontFamily: 'system-ui, sans-serif',
				fontSize: '13px',
				fontWeight: 600,
				...variantStyles[variant],
			}}
		>
			{label}
		</span>
	);
}
