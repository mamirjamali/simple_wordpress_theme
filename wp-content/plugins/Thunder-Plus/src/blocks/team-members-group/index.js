import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InspectorControls, InnerBlocks} from '@wordpress/block-editor';
import {PanelBody, RangeControl, SelectControl} from '@wordpress/components'
import { __ } from '@wordpress/i18n';
import icons from '../../icons.js';
import './main.css';

registerBlockType('thunder-plus/team-members-group', {
  icon: {
    src: icons.team_members
  },
  edit({ attributes, setAttributes }) {
    const { columns, imageShape } = attributes;
    const blockProps = useBlockProps({
      className:`cols-${columns}`
    });
   
    return (
      <>
        <InspectorControls>
          <PanelBody title={__('Settings', 'thunder-plus')}>
            <RangeControl 
              label={__('Columns', 'thunder-plus')}
              onChange={columns => setAttributes({columns})}
              value={columns}
              min={2}
              max={4}
            />
            <SelectControl 
              label={__('Image Shape', 'thunder-plus')}
              value={ imageShape }
              options={[
                  { label: __('Hexagon', 'thunder-plus'), value: 'hexagon' },
                  { label: __('Rabbet', 'thunder-plus'), value: 'rabbet' },
                  { label: __('Pentagon', 'thunder-plus'), value: 'pentagon' },
              ]}
              onChange={imageShape => setAttributes({ imageShape })}
            />
          </PanelBody>
        </InspectorControls>
        <div {...blockProps}>
          <InnerBlocks 
          orientation="horizontal"
          allowedBlocks={['thunder-plus/team-member']}
          template={[
            [
              'thunder-plus/team-member',
              {
                name: 'John Smith',
                title: 'Founder of Google',
                bio: 'This is an example of a bio.'
              }
            ],
            ['thunder-plus/team-member'],
            ['thunder-plus/team-member']
          ]
          }
          />
        </div>
      </>
    );
  },
  save({ attributes }) {
    const {columns} = attributes
    const blockProps = useBlockProps.save({
      className:`cols-${columns}`
    });

    return (
      <div {...blockProps}>
        <InnerBlocks.Content/>
      </div>
    )
  }
})