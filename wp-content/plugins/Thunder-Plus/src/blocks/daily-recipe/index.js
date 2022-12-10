import { registerBlockType } from '@wordpress/blocks'
import { useBlockProps, RichText } from '@wordpress/block-editor'
import { __ } from '@wordpress/i18n';
import apiFetch  from '@wordpress/api-fetch';
import {useState, useEffect} from '@wordpress/element';
import {Spinner} from '@wordpress/components';
import icons from '../../icons.js';
import './main.css';

registerBlockType('thunder-plus/daily-recipe', {
  icon: {
    src: icons.random
  },
	edit({ attributes, setAttributes }) {
    const { title } = attributes;
    const blockProps = useBlockProps();
    console.log(title)
    const[post, setPost] = useState({
      isLoading: true,
      url: null,
      img: null,
      title: null,
    });

    useEffect(async () => {
      const response = await apiFetch({
        path: "thp/v1/daily-recipe",
      });

      setPost({
        isLoading:false,
        ...response
      });
    });

    return (
      <div {...blockProps}>
        <RichText
          tagName="h6"
          value={ title } 
          withoutInteractiveFormatting
          onChange={ title => setAttributes({ title }) }
          placeholder={ __('Title', 'thunder-plus') }
        />
        {
          post.isLoading ? <Spinner/> :
          <a href={post.url}>
            <img src={post.img} />
            <h3>{post.title}</h3>
          </a>
        }
        
      </div>
    );
  },
});