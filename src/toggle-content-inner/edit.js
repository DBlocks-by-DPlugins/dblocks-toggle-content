import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { useBlockProps, InnerBlocks, InnerBlocksButtonBlockAppender } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit(props) {
    const { clientId } = props;
    const innerBlockCount = useSelect( ( select ) => select( 'core/block-editor' ).getBlock( clientId ).innerBlocks.length, [clientId] );

    const appenderToUse = () => {
        if ( innerBlockCount < 1 ) {
            return (
                <InnerBlocks.ButtonBlockAppender/>
            );
        } else {
            return null;
        }
    }

    return (
        <div { ...useBlockProps() }>
            <div className="inner-content">
                <InnerBlocks
                    renderAppender={ appenderToUse }
                />
            </div>
        </div>
    );
}
