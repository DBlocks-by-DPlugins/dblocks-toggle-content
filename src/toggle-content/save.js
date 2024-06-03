// save.js - parrent
// save.js - parent

import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save() {
    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps}>
            <div className="inner-content">
                <InnerBlocks.Content />
            </div>
        </div>
    );
}
