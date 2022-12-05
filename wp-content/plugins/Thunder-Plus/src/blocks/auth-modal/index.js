import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import icons from '../../icons.js'
import './main.css'

registerBlockType('thunder-plus/auth-modal', {
  icon: {
    src: icons.modal
  },
  edit({ attributes, setAttributes }) {
    const { showRegister } = attributes;
    const blockProps = useBlockProps();

    return (
      <>
        <InspectorControls>
          <PanelBody title={ __('General', 'thunder-plus') }>
            <ToggleControl
              label={__("Show Register", "thunder-plus")}
              help={
                showRegister?
                __("Showing registeration form"):
                __("Hiding registeration form")
              }
              checked={showRegister}
              onChange={ showRegister => setAttributes({showRegister}) }
            />
          </PanelBody>
        </InspectorControls>
        <div { ...blockProps }>
          {__('This block is not previewable from the editor. View your site for a live demo. You should be logged out to see the modal', 'thunder-plus')}
        </div>
      </>
    );
  }
});