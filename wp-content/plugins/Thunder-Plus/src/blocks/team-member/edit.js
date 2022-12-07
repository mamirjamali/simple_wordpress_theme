import { 
    useBlockProps,
    InspectorControls,
    RichText, 
    MediaPlaceholder,
    BlockControls,
    MediaReplaceFlow
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import {  
    PanelBody,
    TextareaControl,
    Spinner,
    ToolbarButton,
    Tooltip,
    Icon
} from '@wordpress/components';
import { isBlobURL, revokeBlobURL } from '@wordpress/blob'
import { useState } from '@wordpress/element'


export default function ({ attributes, setAttributes, context, isSelected }) {
    const { 
      name, title, bio, imgID, imgAlt, imgURL, socialHandles
    } = attributes;
    const blockProps = useBlockProps();
    const [imgPreview, setImgPreview] = useState(imgURL)

    const selectingImg = img => {
        let newImgURL = null

        if(isBlobURL(img.url)){
          newImgURL = img.url
        }else{
          newImgURL = img.sizes ?
           img.sizes.teamMember.url : 
           img.media_details.sizes.teamMember.source_url

           setAttributes({
            imgID: img.id,
            imgAlt: img.alt,
            imgURL: newImgURL
          })
          revokeBlobURL(imgPreview)
        }

        setImgPreview(newImgURL)
      };
    const selectImgFromURL = url=>{
        setAttributes({
          imgAlt: null,
          imgID: null,
          imgURL: url
        })
        setImgPreview(url)
      };

      const imageClass = `wp-image-${imgID} img-${context["thunder-plus/image-shape"]}`;


    return (
      <>
        <BlockControls group="inline">
            {
                imgPreview &&
                <ToolbarButton 
                onClick={ () => {
                   setAttributes({
                       imgID:0,
                       imgAlt:'',
                       imgURL:''
                   });
   
                   setImgPreview('');
                }}
               >
                   {__('Remove Image', 'thunder-plus')}
               </ToolbarButton>
            }
            {
                imgPreview &&
                <MediaReplaceFlow 
                name= {__('Replace Image', 'thunder-plus')}
                mediaId={imgID}
                mediaURL={imgURL}
                allowedTypes={['image']}
                accept={'image/*'}
                onError={error => console.error(error)}
                onSelect={selectingImg}
                onSelectURL={selectImgFromURL}
                />
            }
            
        </BlockControls>
        <InspectorControls>
          <PanelBody title={__('Settings', 'thunder-plus')}>
            {
                imgPreview && !isBlobURL(imgPreview) &&
                <TextareaControl 
                label={__('Alt Attribute', 'thunder-plus')}
                value={imgAlt}
                onChange={imgAlt => setAttributes({imgAlt})}
                help={__(
                  'Description of your image for screen readers.',
                  'thunder-plus'
                )}
              />
            }

          </PanelBody>
        </InspectorControls>
        <div {...blockProps}>
          <div className="author-meta">
            {imgPreview && <img src={imgPreview} alt={imgAlt} className={imageClass}/>}
            {isBlobURL(imgPreview) && <Spinner/>}
            <MediaPlaceholder 
            allowedTypes={['image']}
            accept={'image/*'}
            icon="admin-users"
            onSelect={selectingImg}
            onError={error => console.error(error)}
            disableMediaButtons={imgPreview}
            onSelectURL={selectImgFromURL}
            />
            <p>
              <RichText 
                placeholder={__('Name', 'thunder-plus')}
                tagName="strong"
                onChange={name => setAttributes({name})}
                value={name}
              />
              <RichText 
                placeholder={__('Title', 'thunder-plus')}
                tagName="span"
                onChange={title => setAttributes({title})}
                value={title}
              />
            </p>
          </div>
          <div className="member-bio">
            <RichText 
              placeholder={__('Member bio', 'thunder-plus')}
              tagName="p"
              onChange={bio => setAttributes({bio})}
              value={bio}
            />
          </div>
          <div className="social-links">
            {socialHandles.map((handle, index) => {
              return( 
              <a href={handle.url} key={index}>
                <i class={`bi bi-${handle.icon}`}></i>
               </a>);
            })}
            {
              isSelected &&
              <Tooltip text={__("Add Social Media Icons", "thunder-plus")}>
              <a
               href='#'
               onClick={(event) => {
                event.preventDefault();
                setAttributes({
                  socialHandles:[
                    ...socialHandles,
                    {
                      icon: "question",
                      url: ""
                    },
                  ],
                });

               }}
              >
                <Icon icon="plus"/>
              </a>
            </Tooltip>
            }

            </div>
        </div>
      </>
    );
  }