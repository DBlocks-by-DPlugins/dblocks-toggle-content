// Child - dblocks/dblocks-toggle-content-inner

import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import './editor.scss';

export default function Edit(props) {
    const { clientId, attributes, setAttributes } = props;
    const { className } = attributes;
    const innerBlockCount = useSelect(
        (select) => select('core/block-editor').getBlock(clientId).innerBlocks.length,
        [clientId]
    );

    useEffect(() => {
        const parentBlockId = wp.data.select('core/block-editor').getBlockParents(clientId)[0];
        const siblings = wp.data.select('core/block-editor').getBlocks(parentBlockId);
        const currentIndex = siblings.findIndex(block => block.clientId === clientId) + 1;
        setAttributes({ className: `toggle-block-inner-${currentIndex}` });
    }, [clientId, setAttributes]);

    const appenderToUse = () => {
        if (innerBlockCount < 1) {
            return <InnerBlocks.ButtonBlockAppender />;
        } else {
            return null;
        }
    };

    const blockProps = useBlockProps({
        className: className,
    });

    return (
        <div {...blockProps}>
            <div className="inner-content">
                <InnerBlocks renderAppender={appenderToUse} />
            </div>
        </div>
    );
}
