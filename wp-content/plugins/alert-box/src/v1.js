import blockData from "./block.json";
import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import { Icon } from "@wordpress/components";
//Changes where made to {
//     Block.jason ->  content -> selector
//     edit.js -> tagName -> div
//     save.js -> tagName -> div 
// }
export default {
	supports: {
		...blockData.supports,
	},
	attributes: {
		...blockData.attributes,
		content: {
			type: "string",
			source: "html",
			selector: ".alert-box-content p",
		},
	},
	save({ attributes }) {
		const { content, icon, bgColor, textColor } = attributes;
		const blockProps = useBlockProps.save({
			style: {
				"border-color": bgColor,
				"background-color": bgColor,
				color: textColor,
			},
		});

		return (
			<div {...blockProps}>
				<Icon icon={icon} />
				<div class="alert-box-content">
					<RichText.Content tagName="p" value={content} />
				</div>
			</div>
		);
	},
};
