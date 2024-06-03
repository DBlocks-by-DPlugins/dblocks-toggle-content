// ToggleSwitch.js
import { __ } from '@wordpress/i18n';

export default function ToggleSwitch({ isChecked, onChange }) {
    return (

        <label>           
            <div className="toggle-switch">
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={onChange}
                />
                <span className="slider"></span>
            </div>
            
            {__('Toggle Content', 'toggle-content')}
        </label>


    );
}
