// Parrent

import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import './editor.scss';

export default function Edit() {
	const [isVisible, setIsVisible] = useState(true);
	const toggleContent = () => {
		setIsVisible(!isVisible);
	};

	const ALLOWED_BLOCKS = [ 'dblocks/dblocks-toggle-content-inner' ];
	const TEMPLATE = [
		[ 'dblocks/dblocks-toggle-content-inner', { placeholder: 'Add a paragraph' } ],
		[ 'dblocks/dblocks-toggle-content-inner', {} ],
	];

	const MAX_ITEMS = 5; // Set your maximum number of items here

	const innerBlockCount = useSelect((select) => 
		select('core/block-editor').getBlockCount(useBlockProps().clientId),
		[]
	);

	return (
		<div { ...useBlockProps() }>
			<button onClick={toggleContent}>
				{ __( 'Toggle Content', 'toggle-content' ) }
			</button>
			{isVisible && (
				<div className="inner-content">
					{innerBlockCount < MAX_ITEMS ? (
						<InnerBlocks 
							allowedBlocks={ ALLOWED_BLOCKS } 
							template={ TEMPLATE }
							renderAppender={() => <InnerBlocks.ButtonBlockAppender />}
						/>
					) : (
						<p>{ __( 'Maximum number of items reached.', 'toggle-content' ) }</p>
					)}
				</div>
			)}
		</div>
	);
}
