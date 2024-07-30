<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import PatternImg from '../../assets/images/patternImg.jpg';
import { ReactComponent as RightDownIcon } from '../../lib/icons/RightDown.svg';
import { portfolio } from '../../data/portfolio';
import { SectionTitle } from '../SectionTitles';

const Portfolio = () => {
  return (
    <section
      id='portfolio'
      className='portWrap py-[4.5rem] md:py-[5.5rem] lg:py-[6.5rem] xl:py-[7.5rem] relative w-full'
    >
      <div
        className='fixedBg bg-left-top bg-no-repeat opacity-20'
        style={{ backgroundImage: `url(${PatternImg})` }}
      ></div>
      <div className='container sm:container md:container lg:container xl:container 2xl:container mx-auto'>
        <SectionTitle
          title='My Amazing'
          titleInner='Works'
          desc='These projects demonstrate my expertise with practical examples of some of my work, including brief descriptions and links to code repositories and live demos. They showcase my ability to tackle intricate challenges, adapt to various technologies, and efficiently oversee projects.'
        />
        <div className='portList flex flex-wrap relative mx-[-.9375rem] mb-[-1.875rem]'>
          {portfolio.map(
            (item, index) =>
              index < 5 && (
                <div className={item.portBox} key={index}>
                  <div className='portBox group mb-[1.875rem] before:transition-all before:ease-in-out before:duration-500 before:bg-accent before:absolute before:opacity-0 before:hover:opacity-90 before:inset-[10%] before:hover:inset-0 relative overflow-hidden rounded-[10px] sm:rounded-[1.25rem] lg:rounded-[1.875rem] xl:rounded-[3.125rem] before:z-[1] text-center w-full'>
                    <img
                      className='w-full'
                      src={item.portImg}
                      alt={item.portTitle}
                    />
                    <div className='projInfo transition-all ease-in-out duration-500 delay-200 absolute left-0 group-hover:top-2/4 top-3/4 translate-y-[-50%] p-5 text-center w-full z-[1] opacity-0 invisible group-hover:opacity-100 group-hover:visible'>
                      <h3 className='text-white text-[1.375rem] md:text-[1.625rem] font-Poppins font-bold'>
                      <a
                            href="https://iidglobalinstitute.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            title={item.portTitle}
                          >
                            {item.portTitle}
                          </a>
                      </h3>
                      <p className='text-white font-NunitoSans text-[1rem] md:text-[1.125rem] mt-1'>
                        {item.portSubTitle}
                      </p>
                      {item.id === 'iid-global' ? (
                        <RightDownIcon
                        onClick={() => {
                          window.open(
                            'https://iidglobalinstitute.com/',
                            '_blank'
                          );
                        }}
                         className='h-2.5 w-2.5 sm:h-4 sm:w-4 fill-white' />
                      ) : (
                        <ScrollLink
                          className='inline-flex items-center justify-center border-[2px] sm:border-[5px] border-[rgba(255,255,255,.25)] hover:border-white rounded-[10px] h-[2.5rem] w-[2.5rem] sm:h-[3.5625rem] sm:w-[3.5625rem] mt-5'
                          to='projects'
                          spy={true}
                          smooth={true}
                          offset={-80}
                          duration={500}
                          title={item.portTitle}
                        >
                          <RightDownIcon
                            onClick={() => {
                              window.open(
                                'https://designook.vercel.app/',
                                '_blank'
                              );
                            }}
                            className='h-2.5 w-2.5 sm:h-4 sm:w-4 fill-white'
                          />
                        </ScrollLink>
                      )}
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
};
        
export default Portfolio;

=======
import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import PatternImg from '../../assets/images/patternImg.jpg';
import { ReactComponent as RightDownIcon } from '../../lib/icons/RightDown.svg';
import { portfolio } from '../../data/portfolio';
import { SectionTitle } from '../SectionTitles';

const Portfolio = () => {
  return (
    <section id="portfolio" className="portWrap py-[4.5rem] md:py-[5.5rem] lg:py-[6.5rem] xl:py-[7.5rem] relative w-full">
      <div className="fixedBg bg-left-top bg-no-repeat opacity-20" style={{ backgroundImage: `url(${PatternImg})` }}></div>
      <div className="container sm:container md:container lg:container xl:container 2xl:container mx-auto">
        <SectionTitle
          title="My Amazing"
          titleInner="Works"
          desc="These projects demonstrate my expertise with practical examples of some of my work, including brief descriptions and links to code repositories and live demos. They showcase my ability to tackle intricate challenges, adapt to various technologies, and efficiently oversee projects."
        ></SectionTitle>
        <div className="portList flex flex-wrap relative mx-[-.9375rem] mb-[-1.875rem]">
          {portfolio.map(
            (item, index) =>
              index < 5 && (
                <div className={item.portBox} key={index}>
                  <div className="portBox group mb-[1.875rem] before:transition-all before:ease-in-out before:duration-500 before:bg-accent before:absolute before:opacity-0 before:hover:opacity-90 before:inset-[10%] before:hover:inset-0 relative overflow-hidden rounded-[10px] sm:rounded-[1.25rem] lg:rounded-[1.875rem] xl:rounded-[3.125rem] before:z-[1] text-center w-full">
                    <img className="w-full" src={item.portImg} alt={item.portTitle}></img>
                    <div className="projInfo transition-all ease-in-out duration-500 delay-200 absolute left-0 group-hover:top-2/4 top-3/4 translate-y-[-50%] p-5 text-center w-full z-[1] opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                      <h3 className="text-white text-[1.375rem] md:text-[1.625rem] font-Poppins font-bold">
                        {item.id === 'iid-global' ? (
                          <a href="https://iidglobalinstitute.com/"  target="_blank" rel="noopener noreferrer">
                            
                          </a>
                        ) : (
                          <Link to={`/portfolio/${item.id}`} title={item.portTitle}>
                            {item.portTitle}
                          </Link>
                        )}
                      </h3>
                      <p className="text-white font-NunitoSans text-[1rem] md:text-[1.125rem] mt-1">
                        {item.portSubTitle}
                      </p>
                      {item.id === 'iid-global' ? (
                        <a
                          className="inline-flex items-center justify-center border-[2px] sm:border-[5px] border-[rgba(255,255,255,.25)] hover:border-white rounded-[10px] h-[2.5rem] w-[2.5rem] sm:h-[3.5625rem] sm:w-[3.5625rem] mt-5"
                          href="https://iidglobalinstitute.com/"
                          title={item.portTitle}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <RightDownIcon className="h-2.5 w-2.5 sm:h-4 sm:w-4 fill-white"></RightDownIcon>
                        </a>
                      ) : (
                        <ScrollLink
                          className="inline-flex items-center justify-center border-[2px] sm:border-[5px] border-[rgba(255,255,255,.25)] hover:border-white rounded-[10px] h-[2.5rem] w-[2.5rem] sm:h-[3.5625rem] sm:w-[3.5625rem] mt-5"
                          to="projects" 
                          spy={true}
                          smooth={true}
                          offset={-80}
                          duration={500}
                          title={item.portTitle}
                        >
                          <RightDownIcon className="h-2.5 w-2.5 sm:h-4 sm:w-4 fill-white"></RightDownIcon>
                        </ScrollLink>
                      )}
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
>>>>>>> f057f81 (Updated Site)
