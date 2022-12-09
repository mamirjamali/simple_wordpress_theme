import { registerBlockType } from '@wordpress/blocks';
import { 
  useBlockProps, InspectorControls, RichText
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { PanelBody, QueryControls } from '@wordpress/components';
import {useSelect} from '@wordpress/data';
import { RawHTML } from '@wordpress/element'
import icons from '../../icons.js';
import './main.css';

registerBlockType('thunder-plus/popular-recipes', {
  icon: {
    src: icons.popular
  },
	edit({ attributes, setAttributes }) {
    const { title, count, cuisines } = attributes;
    const blockProps = useBlockProps();

    const terms = useSelect((select) => {
      return select('core').getEntityRecords(
        'taxonomy',
        'cuisine',
        {
          per_page: -1
        } 
      );
    });
//Turning array into object for use of Query Control
    const suggestion = {}

    terms?.forEach(term => {
      suggestion[term.name] = term;
    });

    const cuisinesIDs = cuisines.map(term => term.id);
    const posts = useSelect(select =>{
      return select('core').getEntityRecords('postType', 'recipe',{
        per_page: count,
        _embed: true,
        cuisine: cuisinesIDs,
        order: "desc",
        oredrByRating:1
      });
     },
     [count, cuisinesIDs]
    );

    // console.log(posts)
    return (
      <>
        <InspectorControls>
          <PanelBody title={__('Settings', 'thunder-plus')}>
            <QueryControls 
             numberOfItems={count}
             minItems={1}
             maxItems={10}
             onNumberOfItemsChange={ count =>{setAttributes({count})}}
             categorySuggestions={suggestion}
             onCategoryChange={newTerms => {
              
               const newCuisines = [];

               newTerms.forEach(cuisine => {
                if(typeof cuisine==='object'){
                  return newCuisines.push(cuisine);
                }

                const cuisineTerm = terms?.find(
                  (term) => term.name === cuisine
                );

                if(cuisineTerm) newCuisines.push(cuisineTerm);
               });

               setAttributes({cuisines: newCuisines});
             }}
             selectedCategories={cuisines}
             
            />
          </PanelBody>
        </InspectorControls>
        <div {...blockProps}>
          <RichText
            tagName="h6"
            value={ title }
            withoutInteractiveFormatting
            onChange={ title => setAttributes({ title }) }
            placeholder={ __('Title', 'thunder-plus') }
          />
          {
            posts?.map( post => {
              const featuredImage = 
              post._embedded &&
              post._embedded["wp:featuredmedia"] &&
              post._embedded["wp:featuredmedia"].length > 0 &&
              post._embedded["wp:featuredmedia"][0];

              return(
                  <div class="single-post">
                    {
                      featuredImage &&
                      <a class="single-post-image" href={post.link}>
                        <img src={
                          featuredImage.media_details.sizes.thumbnail.source_url
                        } alt={featuredImage.alt_text} />
                      </a>
                    }

                  <div class="single-post-detail">
                    <a href={post.link}>
                      {/* <RawHTML> */}
                        {post.title.rendered}
                      {/* </RawHTML> */}
                    </a>
                    <span>
                      by <a href={post.link}>{post._embedded.author[0].name}</a>
                    </span>
                  </div>
                </div>
              );
            })
          }


        </div>
      </>
    );
  }
});