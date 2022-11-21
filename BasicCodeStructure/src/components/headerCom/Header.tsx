import React from 'react';
import { StatusBar, Text } from 'react-native';
import { HStack, Box, View } from 'native-base';

import COLORS from '@app/data/colors';
import IMAGES from '@app/data/images';
import PF from '@app/utils/functions';
import ImageCom from '../imageCom';
import GLOBAL_STYLES from '@app/utils/globalStyles';
import styles from './HeaderStyle';

interface IProps {
  showBack?: boolean,
  showMenu?: boolean,
  viewProfile?: boolean,
  disabledLeftIcon?: boolean,
  disabledRightIcon?: boolean,
  profile: string | undefined,
  title: string | undefined,
  handleMenuPress: () => void,
  handleBackPress: () => void,
  handleProfilePress: () => void,
}

const DefaultProps = {
  showBack: true,
  showMenu: false,
  viewProfile: false,
  disabledLeftIcon: false,
  disabledRightIcon: false,
  profile: '',
  title: '',
  handleMenuPress: () => { },
  handleBackPress: () => { },
  handleProfilePress: () => { },
};


const Header = (props: IProps) => {
  const { showBack, showMenu, viewProfile, disabledLeftIcon, disabledRightIcon, title = '', profile = '', handleMenuPress, handleBackPress, handleProfilePress } = props;
  const profilePic = PF.checkVariable(profile);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Box safeAreaTop bg={COLORS.gray} zIndex={99999999999999} />
      <HStack height={PF.setValuesByDevice(50)} bg={COLORS.gray}>

        <View style={[styles.container]}>

          {/* header left content */}
          <View style={[styles.leftContainer]}>
            {(showBack || showMenu) &&
              <ImageCom
                isLocal={true}
                image={showMenu ? IMAGES.menu : IMAGES.left}
                defaultSource={IMAGES.user}
                styleContainer={[GLOBAL_STYLES.image40, GLOBAL_STYLES.justifyCenter, GLOBAL_STYLES.alignItemCenter, {}]}
                imageStyle={[GLOBAL_STYLES.image20]}
                onPress={showMenu ? handleMenuPress : handleBackPress}
                disabled={disabledLeftIcon}
              />
            }
          </View>

          {/* header center content */}
          <View style={[styles.centerContainer]}>
            <Text style={styles.titleStyle}>{title}</Text>
          </View>

          {/* header right content */}
          <View style={[styles.rightContainer]}>
            {viewProfile &&
              <ImageCom
                isLocal={false}
                image={profilePic}
                defaultSource={IMAGES.user}
                styleContainer={styles.rightImageContainer}
                onPress={handleProfilePress}
                disabled={disabledRightIcon}
              />
            }
          </View>
        </View>

      </HStack>
    </>

  );
};

Header.defaultProps = DefaultProps;

export default Header;
