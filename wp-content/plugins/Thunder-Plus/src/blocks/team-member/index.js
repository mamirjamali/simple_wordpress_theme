import { registerBlockType } from '@wordpress/blocks';
import icons from '../../icons.js';
import './main.css';
import edit from './edit';
import save from './save';

registerBlockType('thunder-plus/team-member', {
  icon: {
    src: icons.member
  },
  edit,
  save
});