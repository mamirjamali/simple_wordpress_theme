import { registerPlugin } from '@wordpress/plugins';
import { PluginSidebar } from '@wordpress/edit-post';
import { __ } from '@wordpress/i18n';
import { useSelect, useDispatch } from '@wordpress/data';
import { 
    PanelBody,
    TextControl,
    TextareaControl,
    ToggleControl,
} from '@wordpress/components'


registerPlugin("thp-sidebar", {
    render (){
        const {og_title, og_image, og_description, og_override_image} = useSelect((select) =>{
            const {getEditedPostAttribute} = select('core/editor');
            return(getEditedPostAttribute('meta'))

        })

        const {editPost} =useDispatch('core/editor');

        return(
            <PluginSidebar
            name='thp_sidebar_og'
            icon='share'
            title={__("Thunder Plus Sidebar", "thunder-plus")}
            >
                <PanelBody title={__("Opengraph Options", "thunder-plus")}>
                <TextControl 
                    label={__("Title", "thunder-plus")}
                    value={og_title}
                    onChange={og_title =>
                         editPost({
                            meta: {
                                og_title,
                            },
                        })
                    }
                />
                <TextareaControl 
                    label={__("Description", "thunder-plus")}
                    value={og_description}
                    onChange={og_description => 
                        editPost({
                            meta: {
                                og_description,
                            },
                        })
                    }
                />
                <ToggleControl 
                    label={__("Override Featured Image", "thunder-plus")}
                    checked={og_override_image}
                    help={__(
                    "By default, the featured image will be used as the image. Check this option to use a different image.",
                    "thunder-plus"
                    )}
                    onChange={og_override_image => 
                        editPost({
                            meta: {
                                og_override_image,
                            },
                        })
                    }
                />
                </PanelBody>
            </PluginSidebar>
        )
    }
})