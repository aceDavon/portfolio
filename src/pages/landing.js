import * as React from 'react';
import CommonCard from '../components/common/commonCard';
import { Calendar } from '../components/common/icons';
import NativeCard from '../components/common/nativeCard';
import TimeAgo from '../components/common/timeAgo';
import Contact from '../components/contact';
import { featuredRepo, FeaturedRepoImg, RepoLinks } from '../data/featuredcards';
import { allRepo } from '../data/reposData';

const Landing = () => {
  const [modal, setModal] = React.useState(false);
  const [modalData, setModalData] = React.useState({});
  const [data, setData] = React.useState([]);
  const [featured, setFeatured] = React.useState([]);
  const local = JSON.parse(localStorage.getItem('allRepo'));
  const featuredCards = [];

  const handleModal = (info) => {
    setModal(!modal);
    setModalData(info);
  };

  React.useEffect(() => {
    allRepo(RepoLinks, 'allRepo');
    setData(local ?? []);
    featuredRepo.map((repo) => {
      const card = local.find((x) => x.full_name == repo);
      featuredCards.push(card);
      setFeatured(featuredCards);
    });
  }, []);

  return (
    <div className='relative'>
      {modal && (
        <CommonCard
          sx={
            'fixed left-5 md:left-44 top-5 bottom-5 right-5 md:right-44 rounded-xl bg-purple-100 backdrop-blur-lg wiggle z-50'
          }
          others={{ handleModal, modalData, data, FeaturedRepoImg }}
        />
      )}
      <div
        className='p-12 text-center relative overflow-hidden bg-no-repeat bg-cover'
        style={{
          backgroundImage: `url('https://media.tarkett-image.com/large/IN_27098014_0002.jpg')`,
          height: '400px',
        }}
      >
        <div
          className='absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed'
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
        >
          <div className='flex justify-center h-full' id='about'>
            <div className='text-white py-14 banner'>
              <h2 className='font-semibold text-4xl mb-4 transition ease-linear infinite delay-350 hover:animate-bounce'>
                Onate Makoji David
              </h2>
              <h4 className='font-semibold text-xl mb-6'>
                Front-End Developer
              </h4>
              <p className='text-sm text-white px-5 sm:px-52 hover:scale-110'>
                I build products, features and websites. You should look through
                some of my works and experiences. If you like what you see, do
                not hestiate to contact me.
              </p>
              <a
                className='inline-block px-7 py-3 mb-1 mt-10 border-2 border-gray-200 text-gray-200 font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out hover:scale-110'
                href='https://drive.google.com/file/d/1-5wXqyJlRCeuhSdOIkHKFuE1FbgllWW0/view?usp=sharing'
                target={'_blank'}
                role='button'
                data-mdb-ripple='true'
                data-mdb-ripple-color='light'
                norefferer
              >
                See My Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='text-center pt-10 border-0 relative btxt'>
        <p className='text-4xl text-blue-300 font-bold'>Recent Projects</p>
      </div>

      <ol
        className='px-8 py-6 mt-10 md:flex md:justify-center md:gap-6'
        id='portfolio'
      >
        {featured &&
          featured.map((x) => {
            return (
              <li key={x.id}>
                <div className='md:flex flex-start'>
                  <div className='bg-purple-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3'>
                    <Calendar />
                  </div>
                  <div className='block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10'>
                    <div className='flex justify-between mb-4'>
                      <a
                        href='#!'
                        className='font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm'
                      >
                        {x.name}
                      </a>
                      <a
                        href='#!'
                        className='font-medium text-purple-600 hover:text-purple-700 focus:text-purple-800 duration-300 transition ease-in-out text-sm'
                      >
                        <TimeAgo content={x} />
                      </a>
                    </div>
                    <p className='text-gray-700 mb-6'>
                      {x.description.length > 100
                        ? x.description.slice(0, 65).concat('...')
                        : x.description}
                    </p>
                    <div className='flex gap-2 md:block'>
                      <button
                        type='button'
                        className='inline-block px-4 py-1.5 mx-auto bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out'
                        data-mdb-ripple='true'
                        onClick={() => handleModal({ x })}
                      >
                        Preview
                      </button>
                      <button
                        type='button'
                        className='inline-block px-3.5 py-1 mx-3 my-0 md:my-2 border-2 border-purple-600 text-purple-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out'
                        data-mdb-ripple='true'
                      >
                        <a
                          href={x.html_url}
                          target={'_blank'}
                          rel='noreferrer'
                          className='text-purple-600'
                        >
                          See Source
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
      </ol>

      <div className='text-center pt-10 border-0 relative btxt'>
        <p className='text-4xl text-blue-300 font-bold'>Featured Projects</p>
      </div>

      <div className='flex justify-evenly flex-col gap-4 w-full px-8 py-8'>
        {data.map((x) => {
          return (
            <div
              key={x.id}
              className='w-full md:w-10/12 lg:w-8/12 mx-auto h-auto bg-purple-400 shadow-md shadow-purple-600 border-0 rounded-md'
            >
              <NativeCard cardMedia={x.repoImg} cardContent={x} />
            </div>
          );
        })}
      </div>
      <div className='w-10/12 md:6/12 mx-auto my-10' id='contact'>
        <Contact />
      </div>
    </div>
  );
};

export default Landing;
