import * as React from 'react';
import {Image} from 'react-native';
import {Images} from '../Theme';

const Icon = props => (
  <Image style={props.style} source={Images[`${props.name}.${props.status}`]} />
);

export default Icon;
