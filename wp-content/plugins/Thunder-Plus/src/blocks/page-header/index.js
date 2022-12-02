import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components'
import {__} from '@wordpress/i18n'
import block from './block.json'
import icons from '../../icons.js'
import './main.css'

registerBlockType( block.name, {
  icon: icons.heading,
	edit({attributes, setAttributes}) {
    const blockProps = useBlockProps();
    const {content, showCategory} = attributes

    return (
      <>
        <InspectorControls>
          <PanelBody title={__('General', 'thunder-plus')}>
            <ToggleControl 
             label={__('Show Category', 'thunder-plus')}
             checked={showCategory}
             onChange={showCategory => setAttributes({showCategory})}
             help={showCategory? 
                   __('Show the page category', 'thunder-plus'):
                   __('Show the Custom Content', 'thunder-plus')
                 }
            />
          </PanelBody>
        </InspectorControls>
        <div { ...blockProps }>
        <div className='inner-page-header'>
           {
            showCategory ? 
            <h1>{__('Category: Some Category', 'thunder-plus')}</h1> :
            <RichText
                  tagName='h2'
                  placeholder={ __('Heading', 'thunder-plus')}
                  value= {content}
                  onChange= {content => setAttributes({content})}
            />
           } 
          </div>
        </div>
      </>
    );
  }
});