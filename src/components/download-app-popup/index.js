import React       from 'react';
import { connect } from 'react-redux';

import iosStore     from './ios-store.png';
import androidStore from './android-store.png';

import './styles.scss';

const ANDROID_URL = 'https://play.google.com/store/apps/details?id=com.reactrpgnative';
const IOS_URL = 'https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=1450907766&mt=8';

const DownloadAppPopup = ({ onClose, optOut }) => {

  function handleOptOut() {
    optOut();
    onClose();
  }

  return(
    <div className='download-app__container'>

      <div onClick={onClose} className='background-close' />

      <div className='download-app__box white-border'>

        <span className='download-app__title'>
          {'React RPG is now on iOS and Android!'}
        </span>

        <div className='download-app__buttons'>
          <a href={IOS_URL} target='_blank' rel="noopener noreferrer">
            <img className='ios-icon' src={iosStore} alt='ios-store' />
          </a>

          <a href={ANDROID_URL} target='_blank' rel="noopener noreferrer">
            <img className='android-icon' src={androidStore} alt='android-store' />
          </a>
        </div>

        <div className='flex-row space-between'>
          <button className='close-option' onClick={handleOptOut}>
            {`Don't show again`}
          </button>

          <button className='close-option' onClick={onClose}>
            {`Close`}
          </button>
        </div>

      </div>

    </div>
  );
}

const optOut = () => {
  return dispatch => {
    dispatch({
      type: 'OPT_OUT_DOWNLOAD',
      payload: {}
    });
  }
}

export default connect(null, { optOut })(DownloadAppPopup);