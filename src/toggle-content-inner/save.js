// save.js
import { useBlockProps } from '@wordpress/block-editor';


export default function save() {
	return (
		<p { ...useBlockProps.save() }>
			{ 'Toggle Content – hello from the saved content!' }
		</p>
	);
}
