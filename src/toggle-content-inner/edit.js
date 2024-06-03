import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InnerBlocksButtonBlockAppender } from '@wordpress/block-editor';
import { IconButton } from '@wordpress/components';
import './editor.scss';

function MyButtonBlockAppender( { rootClientId } ) {
    return (
        <InnerBlocks.ButtonBlockAppender
            rootClientId={ rootClientId }
            renderToggle={ ( { onToggle, disabled } ) => (
                <IconButton
                    className="my-button-block-appender"
                    onClick={ onToggle }
                    disabled={ disabled }
                    label={ __( 'Add a Block', 'text-domain' ) }
                    icon="plus"
                />
            ) }
        />
    );
}

export default function Edit({ clientId }) {

	return (
		<div { ...useBlockProps() }>
			<div className="inner-content">
				<InnerBlocks 
					renderAppender={ () => (
						<MyButtonBlockAppender rootClientId={ clientId } />
					) }
				/>
			</div>
		</div>
	);
}
