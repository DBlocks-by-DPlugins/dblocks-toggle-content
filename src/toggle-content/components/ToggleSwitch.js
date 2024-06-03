// ToggleSwitch.js
import { __ } from '@wordpress/i18n';

export default function ToggleSwitch({ isChecked, onChange }) {
    return (

        <div className="toggle-switch-wrap">
            <p>Label Before</p>
            <label>           
                <div className="toggle-switch">
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={onChange}
                        />
                    <span className="slider"></span>
                </div>                
            </label>
            <p>Label After</p>
        </div>    

    );
}
