import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { Icon, justifyLeft, justifyCenter, justifyRight, visibility, edit } from '@wordpress/icons';
import ToggleSwitch from './components/ToggleSwitch';
import './editor.scss';

export default function Edit(props) {
	const { clientId } = props;
	const [isVisible, setIsVisible] = useState(true);
	const [isEditing, setIsEditing] = useState(true);
	const [alignment, setAlignment] = useState('justify-left');

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

	const alignmentIcons = {
		'justify-left': <Icon icon={justifyLeft} />,
		'justify-center': <Icon icon={justifyCenter} />,
		'justify-right': <Icon icon={justifyRight} />
	};

	const blockProps = useBlockProps({
		className: alignment,
	});

	return (
		<div { ...blockProps }>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon={isEditing ? 'visibility' : 'edit'}
						label={isEditing ? __('Switch to Preview', 'toggle-content') : __('Switch to Edit', 'toggle-content')}
						onClick={toggleEditing}
					/>
				</ToolbarGroup>
				<ToolbarGroup
					icon={alignmentIcons[alignment]}
					controls={[
						{
							icon: <Icon icon={justifyLeft} />,
							title: 'Left',
							isActive: alignment === 'justify-left',
							onClick: () => setAlignment('justify-left'),
						},
						{
							icon: <Icon icon={justifyCenter} />,
							title: 'Center',
							isActive: alignment === 'justify-center',
							onClick: () => setAlignment('justify-center'),
						},
						{
							icon: <Icon icon={justifyRight} />,
							title: 'Right',
							isActive: alignment === 'justify-right',
							onClick: () => setAlignment('justify-right'),
						}
					]}
					isCollapsed
					title={__('More rich text controls')}
				/>
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
