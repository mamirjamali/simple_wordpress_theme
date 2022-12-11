import {registerBlockType} from '@wordpress/blocks'
import {RichText, useBlockProps, InspectorControls} from '@wordpress/block-editor'
import {PanelBody, ColorPalette} from '@wordpress/components'
import { __ } from '@wordpress/i18n'
import block from './block.json'
import icons from '../../icons.js'
import './main.css'

registerBlockType(block.name, {
    icon: icons.header,
    edit({ attributes, setAttributes }){
        
        const {content, underline_color } = attributes
        const blockProps = useBlockProps({
            className: 'fancy-header'
        })

        return (
        <>
            <InspectorControls>
              <PanelBody title={__('Colors', 'thunder-plus')}>
                <ColorPalette 
                    colors={[
                        {name: 'Red', color: '#f87171'},
                        {name: 'Indigo', color: '#818cf8'}
                    ]}
                    value= {underline_color}
                    onChange= {(newVal)=> setAttributes({underline_color: newVal})}
                />
              </PanelBody>
            </InspectorControls>
            <div {...blockProps}>
                <RichText 
                tagName='h2'
                className= 'fancy-header'
                placeholder={__('Enter Heading', 'thunder-plus')}
                value= {content}
                onChange= {newVal => setAttributes({content: newVal})}
                allowedFormats= {['core/bold', 'core/italic']}
                />
            </div>
        </>
        )
    },

    save({ attributes }){
        const { content, underline_color } = attributes
        const blockProps = useBlockProps.save({
            className: 'fancy-header',
            style:{
                'background-image':`
                 linear-gradient(transparent, transparent),
                 linear-gradient(${underline_color}, ${underline_color})
                `
            }
        })

        return (
        <RichText.Content
        {...blockProps} 
         tagName='h2'
         value= { content }
        />
        )

    }
})