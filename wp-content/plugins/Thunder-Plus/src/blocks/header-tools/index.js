import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, CheckboxControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import blocks from './block.json'
import icons from '../../icons.js'
import './main.css'

registerBlockType(blocks.name, {

  icon: icons.header_tools,

  edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const {showAuth} = attributes

    return (
      <>
        <InspectorControls>
          <PanelBody title={ __('General', 'thunder-plus') }>
            <SelectControl 
              label={__('Show Login/Register Link', 'thunder-plus')}
              value={showAuth}
              options={[
                {label:__('No', 'thunder-plue'), value: false},
                {label:__('Yes', 'thunder-plue'), value: true},
              ]}
              onChange={newVal => setAttributes({showAuth:(newVal==="true")})}
            />
            <CheckboxControl 
              label={__("Show Login/Register Link", "thunder-plus")}
              help={
                showAuth?
                __('Showing Link', 'thunder-plus'):
                __('Hiding Link', 'thunedr-plus')
              }
              checked={showAuth}
              onChange={showAuth => setAttributes({showAuth})}
            />
          </PanelBody>
        </InspectorControls>
        <div { ...blockProps }>
          {
            showAuth &&
              <a className="signin-link open-modal" href="#">
              <div className="signin-icon">
                <i className="bi bi-person-circle"></i>
              </div>
              <div className="signin-text">
                <small>Hello, Sign in</small>
                My Account
              </div>
            </a>           
          }
        </div>
      </>
    );
  }
});