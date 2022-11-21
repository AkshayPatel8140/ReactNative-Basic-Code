import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Image, TouchableOpacityProps, View, StyleProp, ImageSourcePropType, ImageResizeMode, ImageURISource, ImageStyle, ViewStyle } from 'react-native';
import FastImage, { ResizeMode } from 'react-native-fast-image';

import CONSTANTS from '@app/data/constants';
import IMAGES from '@app/data/images';
import Loader from '../loaderCom';
import styles from './ImageComStyle';

interface IProps extends TouchableOpacityProps {
  styleContainer?: StyleProp<ViewStyle>,
  isLocal?: boolean,
  image: ImageSourcePropType | string,
  resizeMode?: ImageResizeMode | ResizeMode,
  defaultSource?: ImageURISource,
  imageStyle?: StyleProp<ImageStyle>,
}

const DefaultProps = {
  isLocal: true,
  defaultSource: IMAGES.user,
  resizeMode: CONSTANTS.IMAGE_COVER,
};

const ImageCom = (props: IProps) => {
  const {
    isLocal,
    resizeMode,
    defaultSource,
    imageStyle,
    styleContainer,
  } = props;

  const [imageLoading, setImageLoading] = useState(false);
  const [mainImage, setMainImage] = useState(props.image);

  useEffect(() => {
    setMainImage(props.image);
  }, [mainImage, props.image]);

  return (
    <TouchableOpacity {...props}>
      <View style={[styles.container, styleContainer, {}]}>
        {isLocal ?
          <View>
            <Image
              source={props.image}
              resizeMode={resizeMode}
              defaultSource={defaultSource}
              style={[styles.imageStyle, imageStyle]} />
          </View>
          :
          <View>
            {props?.image ?
              <FastImage
                source={{
                  // uri: `${props.image}?bust=${new Date()}`,
                  uri: mainImage,
                  priority: FastImage.priority.high,
                }}
                resizeMode={resizeMode}
                style={[styles.imageStyle, imageStyle]}
                onLoadStart={() => setImageLoading(true)}
                // onProgress={e => { }}
                // onLoad={e => { }}
                onLoadEnd={() => { setImageLoading(false); }}
              // onError={() => { }}
              />
              :
              <Image
                source={props.image}
                resizeMode={resizeMode}
                defaultSource={defaultSource}
                style={[styles.imageStyle, imageStyle]} />
            }
          </View>
        }
        {imageLoading && <Loader after={true} size="small" />}
      </View>
    </TouchableOpacity>
  );
};

ImageCom.defaultProps = DefaultProps;

export default ImageCom;
