// Edit.js
import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import ToggleSwitch from './components/ToggleSwitch';
import './editor.scss';

export default function Edit(props) {
	const { clientId } = props;
	const [isVisible, setIsVisible] = useState(true);
	const [isEditing, setIsEditing] = useState(true);

	const toggleContent = () => {
		setIsVisible(!isVisible);
	};

	const toggleEditing = () => {
		setIsEditing(!isEditing);
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

	const innerClassName = isEditing ? (isVisible ? 'hide-inner-1' : 'hide-inner-2') : 'inner-in-preview';

	return (
		<div { ...useBlockProps() }>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon={isEditing ? 'visibility' : 'edit'}
						label={isEditing ? __('Switch to Preview', 'toggle-content') : __('Switch to Edit', 'toggle-content')}
						onClick={toggleEditing}
					/>
				</ToolbarGroup>
			</BlockControls>
			<ToggleSwitch isChecked={isVisible} onChange={toggleContent} />
			<div className={innerClassName}>
				{innerBlockCount < MAX_ITEMS ? (
					<InnerBlocks 
						allowedBlocks={ ALLOWED_BLOCKS } 
						template={ TEMPLATE }
					/>
				) : (
					<p>{ __( 'Maximum number of items reached. Remove one', 'toggle-content' ) }</p>
				)}
			</div>
		</div>
	);
}
