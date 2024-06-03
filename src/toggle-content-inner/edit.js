import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import './editor.scss';

export default function Edit() {
	const [isVisible, setIsVisible] = useState(true);
	const toggleContent = () => {
		setIsVisible(!isVisible);
	};

	const ALLOWED_BLOCKS = [ 'core/paragraph', 'core/image', 'core/heading' ];
	const TEMPLATE = [
		[ 'core/paragraph', { placeholder: 'Add a paragraph' } ],
		[ 'core/image', {} ],
		[ 'core/heading', { placeholder: 'Add a heading' } ],
	];

	return (
		<div { ...useBlockProps() }>
			<button onClick={toggleContent}>
				{ __( 'Toggle Content', 'toggle-content' ) }
			</button>
			{isVisible && (
				<div className="inner-content">
					<InnerBlocks 
						allowedBlocks={ ALLOWED_BLOCKS } 
						template={ TEMPLATE }
					/>
				</div>
			)}
		</div>
	);
}
