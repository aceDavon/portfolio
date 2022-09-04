import React from 'react';
import {
  Facebook,
  Github,
  Google,
  Instagram,
  LinkedIn,
  Twitter,
} from './common/icons';

const Footer = () => {
  return (
    <footer
      className='text-center text-white'
      style={{ backgroundColor: '#f1f1f1' }}
    >
      <div className='container pt-9 mx-auto'>
        <div className='flex justify-center mb-9'>
          <a
            href='https://www.facebook.com/aceDavon/'
            noreferrer='true'
            target={'_blank'}
            className='mr-9 text-gray-800'
          >
            <Facebook />
          </a>
          <a
            href='https://twitter.com/sharkleshevon'
            noreferrer='true'
            target={'_blank'}
            className='mr-9 text-gray-800'
          >
            <Twitter />
          </a>
          <a
            href='mailto:makojidavid@gmail.com'
            noreferrer='true'
            target={'_blank'}
            className='mr-9 text-gray-800'
          >
            <Google />
          </a>
          <a href='#!' className='mr-9 text-gray-800' noreferrer='true'>
            <Instagram />
          </a>
          <a
            href='https://www.linkedin.com/in/david-makoji-b6090971/'
            noreferrer='true'
            target={'_blank'}
            className='mr-9 text-gray-800'
          >
            <LinkedIn />
          </a>
          <a
            href='https://github.com/aceDavon'
            noreferrer='true'
            target={'_blank'}
            className='text-gray-800'
          >
            <Github />
          </a>
        </div>
      </div>

      <div
        className='text-center text-gray-700 p-4'
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        © 2022 Copyright:
        <a className='text-gray-800' href='https://hevons.com/acedavon' noreferrer='true'>
          {' '}
          Makoji David
        </a>
      </div>
    </footer>
  );
};

export default Footer;
