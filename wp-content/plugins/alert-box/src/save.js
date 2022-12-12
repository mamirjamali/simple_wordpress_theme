import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { Icon } from '@wordpress/components';

export default function save({ attributes }) {
	const { content, icon, bgColor, textColor } = attributes
	const blockProps = useBlockProps.save({
		style: {
			'border-color': bgColor,
			'background-color': bgColor,
			color: textColor
		}
	})

	return (
		<div { ...blockProps }>
			<Icon 
				icon={icon}
			/>
			<div class="alert-box-content">
				<RichText.Content tagName="div" value={content} />
			</div>
		</div>
	)
}