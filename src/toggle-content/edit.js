// Parrent - dblocks/dblocks-toggle-content

import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import './editor.scss';

export default function Edit(props) {
	const { clientId } = props;
	const [isVisible, setIsVisible] = useState(true);
	const toggleContent = () => {
		setIsVisible(!isVisible);
	};

	const ALLOWED_BLOCKS = [ 'dblocks/dblocks-toggle-content-inner' ];
	const TEMPLATE = [
		[ 'dblocks/dblocks-toggle-content-inner'],
		[ 'dblocks/dblocks-toggle-content-inner'],
	];

	const MAX_ITEMS = 3;

	const innerBlockCount = useSelect(
		(select) => select('core/block-editor').getBlock(clientId).innerBlocks.length,
		[clientId]
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
						/>
					) : (
						<p>{ __( 'Maximum number of items reached. Remove one', 'toggle-content' ) }</p>
					)}
				</div>
			)}
		</div>
	);
}

