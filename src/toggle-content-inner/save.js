// save.js - child
// save.js - child

import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { className } = attributes;
    const blockProps = useBlockProps.save({
        className: className,
    });

    return (
        <div {...blockProps}>
            <div className="inner-content">
                <InnerBlocks.Content />
            </div>
        </div>
    );
}
