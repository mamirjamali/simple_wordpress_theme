import './neon.css';
import { registerFormatType, toggleFormat } from '@wordpress/rich-text';
import { RichTextToolbarButton } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { useSelect } from '@wordpress/data'


registerFormatType("thunder-plus/neon", {
    title: __("Neon", "thunder-plus"),
    tagName: "span",
    className: "neon",
    edit({ isActive, onChange, value }){
        const selectedBlock = useSelect((select) => 
            {select('core/block-editor').getSelectedBlock()}
        );

        return(
            <>
            {
                selectedBlock?.name === "core/paragraph" &&(
                <RichTextToolbarButton 
                title={__("Neon", "thunder-plus")}
                icon="superhero"
                isActive={isActive}
                onClick={() => {
                    onChange(toggleFormat(value,{
                        type:"thunder-plus/neon",
                    })
                  );
                }}

                />
            )}
            
            </>
            
        );
    },
})