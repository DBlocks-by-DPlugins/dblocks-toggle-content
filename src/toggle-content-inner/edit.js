// Child

import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { useEffect, useState } from '@wordpress/element';
import './editor.scss';

export default function Edit(props) {
    const { clientId } = props;
    const innerBlockCount = useSelect(
        (select) => select('core/block-editor').getBlock(clientId).innerBlocks.length,
        [clientId]
    );

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const parentBlock = wp.data.select('core/block-editor').getBlockParents(clientId)[0];
        const siblings = wp.data.select('core/block-editor').getBlock(parentBlock).innerBlocks;
        const currentIndex = siblings.findIndex(block => block.clientId === clientId) + 1;
        setIndex(currentIndex);
    }, [clientId]);

    const appenderToUse = () => {
        if (innerBlockCount < 1) {
            return <InnerBlocks.ButtonBlockAppender />;
        } else {
            return null;
        }
    };

    const generateClassName = () => {
        return `toggle-block-inner-${index}`;
    };

    return (
        <div {...useBlockProps()}>
            <div className="inner-content">
                <div className={generateClassName()}>
                    <InnerBlocks renderAppender={appenderToUse} />
                </div>
            </div>
        </div>
    );
}
