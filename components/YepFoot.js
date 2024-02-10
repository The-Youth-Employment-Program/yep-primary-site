import Link from 'next/link';
import { useTina } from "tinacms/dist/react";
import client from '../tina/__generated__/client';
import { BranchContact, queries } from '../tina/__generated__/types';


export const YepFoot = () => {
  
  return (
    <>
    <svg className="text-salmon-red" viewBox="0 0 1920 126.45264" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(0,-622.7781)">
        <path fill="currentColor" d="m 1920,628.35567 c -17.6641,2.2692 -39.5106,-1.92125 -52.9924,6.80759 -9.522,6.16506 -9.6384,5.75875 -28.5661,18.49519 -2.8679,1.92981 -6.3997,1.75301 -10.3526,0.60279 -1.6794,-1.75049 -4.2957,-5.60039 -7.5236,-6.26142 -15.0358,11.6592 -21.778,10.70687 -41.6395,10.98851 -6.9976,-3.33868 -11.7454,-5.12291 -18.743,-8.46159 0,0 -44.3744,5.20471 -57.2435,0.76804 -13.0184,2.56351 -12.4798,2.4963 -20.3956,3.21909 -10.9397,7.44447 -14.9042,12.37773 -21.5105,14.08111 -29.0016,8.24797 -79.1129,33.15449 -79.1129,33.15449 0,0 -51.9795,-15.83152 -91.4485,-31.99096 -5.4895,1.99172 -17.172,-0.10514 -44.115,-2.74533 -37.0346,-6.23912 -53.2719,-34.74536 -82.7475,-32.30019 -19.0495,1.91897 -20.3845,-6.12564 -34.4521,-6.79567 -40.2542,0.36993 -8.5332,-5.75699 -47.2882,-5.08814 -50.9813,1.73003 -58.943,0.0438 -92.4262,11.42104 -65.7211,-7.87539 -124.7062,45.11736 -143.0177,42.55155 -29.9947,-4.20287 -109.7852,18.60125 -139.90883,41.34717 -6.32808,4.77824 -17.64592,-5.8496 -65.57653,11.82292 -17.59217,6.48642 -25.68617,-1.38149 -25.68617,-1.38149 -4.10281,-2.65661 -29.82375,0.49124 -32.67619,1.47183 -11.50978,3.95676 -26.08948,15.35302 -34.52933,11.87029 -1.30994,-0.54055 -3.74637,-1.88024 -3.92982,-1.62165 -1.04171,1.46841 -1.87547,4.19943 -3.12512,4.40523 -0.70458,0.11604 -1.57282,0.59323 -2.11373,0.34811 -1.64016,-0.74326 -3.28031,-1.48652 -4.92047,-2.22978 -3.53201,1.53877 -7.06403,3.07754 -10.59604,4.61631 -5.80218,2.5278 2.31146,-7.24208 -57.71976,-1.04871 0,0 -114.25995,-21.51144 -139.42203,-28.3921 -70.7418,-40.51174 -132.60244,-34.28969 -132.60244,-34.28969 -13.39129,0.53425 -26.78257,1.06851 -40.17386,1.60277 -6.90293,0.2754 -17.98476,-0.62841 -24.73872,-2.08098 -10.75724,-2.31356 -26.62491,-5.84103 -39.2838,-9.13178 -69.79187,5.03783 -60.49718,-8.33563 -124.38757,-4.01325 -7.56544,-0.85158 -53.73062,41.00352 -56.48862,39.57045 C 53.642879,671.69662 0,650.3517 0,650.3517 V 1080 h 1920 z"/>
      </g>
    </svg>

    <footer className="py-6 bg-salmon-red text-salmon-light-g2">
      <div className="container px-6 mx-auto space-y-6 divide-y dark:divide-salmon-tan md:space-y-12 divide-opacity-50">
      <div className="grid grid-cols-12">
        <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
          <a rel="noopener noreferrer" href="/" className="flex justify-center space-x-3 md:justify-start">
            <div className="flex items-center justify-center w-20 h-20 rounded-full dark:bg-salmon-red">
              <img src="/logo.svg" alt="Home" className="flex-shrink-0 w-20 h-20 cursor-pointer"/>
            </div>
            <span className="self-center text-2xl font-bold">The Youth Employment Program</span>
          </a>
        </div>
        <div className="col-span-6 text-center md:text-left md:col-span-3">
          <p className="pb-1 text-lg font-semibold">Take Action</p>
          <ul>
            <li>
              <a rel="noopener noreferrer" href="/work" className="hover:text-salmon-green">Work</a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="/volunteer" className="hover:text-salmon-green">Volunteer</a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="/join" className="hover:text-salmon-green">Partner</a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="/donate" className="hover:text-salmon-green">Donate</a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="/sponsor" className="hover:text-salmon-green">Sponsor</a>
            </li>
          </ul>
        </div>
        <div className="col-span-6 text-center md:text-left md:col-span-3">
          <p className="pb-1 text-lg font-semibold">Learn</p>
          <ul>
            <li>
              <a rel="noopener noreferrer" href="/articles/newsletters" className="hover:text-salmon-green">Newsletter</a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="/articles/posts" className="hover:text-salmon-green">Articles</a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="/history" className="hover:text-salmon-green">History</a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="/mission" className="hover:text-salmon-green">Mission</a>
            </li>
            <li>
              <a rel="noopener noreferrer" href="#" className="hover:text-salmon-green"></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid justify-center pt-6 lg:justify-between">
        <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
          <span>©2024 All rights reserved</span>
          {/* <a rel="noopener noreferrer" href="#">
            <span>Privacy policy</span>
          </a>
          <a rel="noopener noreferrer" href="#">
            <span>Terms of service</span>
          </a> */}
        </div>
        <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
          <a rel="noopener noreferrer" href="mailto:youthemployment14@gmail.com" title="Email" className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-salmon-green dark:text-salmon-light-g2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
          </a>
          <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/YEPDillon" title="Facebook" className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-salmon-green dark:text-salmon-light-g2">
            <svg className="place-self-center w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
              <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
            </svg>
          </a>
          <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/yepdillonmt" title="Instagram" className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-salmon-green dark:text-salmon-light-g2">
            <svg className='place-self-center w-5 h-5' xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 21">
              <path d="M20.7 18.1c0 1.4-1.2 2.6-2.6 2.6H2.8c-1.4 0-2.6-1.2-2.6-2.6V2.8C.2 1.4 1.4.2 2.8.2h15.3c1.4 0 2.6 1.2 2.6 2.6v15.3zm-2.3-9.3h-1.8c.2.5.3 1.2.3 1.8 0 3.4-2.9 6.2-6.4 6.2-3.5 0-6.4-2.8-6.4-6.2 0-.6.1-1.2.3-1.8H2.5v8.7c0 .5.4.8.8.8h14.3c.5 0 .8-.4.8-.8V8.8zm-7.9-2.4c-2.3 0-4.1 1.8-4.1 4s1.8 4 4.1 4 4.1-1.8 4.1-4-1.8-4-4.1-4zm7.9-3c0-.5-.4-.9-.9-.9h-2.3c-.5 0-.9.4-.9.9v2.2c0 .5.4.9.9.9h2.3c.5 0 .9-.4.9-.9V3.4z"/>
            </svg>
          </a>
          <a rel="noopener noreferrer" target="_blank" href="https://github.com/The-Youth-Employment-Program/yep-primary-site" title="GitHub" className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-salmon-green dark:text-salmon-light-g2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
              <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
    </footer>
{/* 
      <footer className='mt-16'>

          <svg className="text-salmon-red" viewBox="0 0 1920 126.45264" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(0,-622.7781)">
              <path fill="currentColor" d="m 1920,628.35567 c -17.6641,2.2692 -39.5106,-1.92125 -52.9924,6.80759 -9.522,6.16506 -9.6384,5.75875 -28.5661,18.49519 -2.8679,1.92981 -6.3997,1.75301 -10.3526,0.60279 -1.6794,-1.75049 -4.2957,-5.60039 -7.5236,-6.26142 -15.0358,11.6592 -21.778,10.70687 -41.6395,10.98851 -6.9976,-3.33868 -11.7454,-5.12291 -18.743,-8.46159 0,0 -44.3744,5.20471 -57.2435,0.76804 -13.0184,2.56351 -12.4798,2.4963 -20.3956,3.21909 -10.9397,7.44447 -14.9042,12.37773 -21.5105,14.08111 -29.0016,8.24797 -79.1129,33.15449 -79.1129,33.15449 0,0 -51.9795,-15.83152 -91.4485,-31.99096 -5.4895,1.99172 -17.172,-0.10514 -44.115,-2.74533 -37.0346,-6.23912 -53.2719,-34.74536 -82.7475,-32.30019 -19.0495,1.91897 -20.3845,-6.12564 -34.4521,-6.79567 -40.2542,0.36993 -8.5332,-5.75699 -47.2882,-5.08814 -50.9813,1.73003 -58.943,0.0438 -92.4262,11.42104 -65.7211,-7.87539 -124.7062,45.11736 -143.0177,42.55155 -29.9947,-4.20287 -109.7852,18.60125 -139.90883,41.34717 -6.32808,4.77824 -17.64592,-5.8496 -65.57653,11.82292 -17.59217,6.48642 -25.68617,-1.38149 -25.68617,-1.38149 -4.10281,-2.65661 -29.82375,0.49124 -32.67619,1.47183 -11.50978,3.95676 -26.08948,15.35302 -34.52933,11.87029 -1.30994,-0.54055 -3.74637,-1.88024 -3.92982,-1.62165 -1.04171,1.46841 -1.87547,4.19943 -3.12512,4.40523 -0.70458,0.11604 -1.57282,0.59323 -2.11373,0.34811 -1.64016,-0.74326 -3.28031,-1.48652 -4.92047,-2.22978 -3.53201,1.53877 -7.06403,3.07754 -10.59604,4.61631 -5.80218,2.5278 2.31146,-7.24208 -57.71976,-1.04871 0,0 -114.25995,-21.51144 -139.42203,-28.3921 -70.7418,-40.51174 -132.60244,-34.28969 -132.60244,-34.28969 -13.39129,0.53425 -26.78257,1.06851 -40.17386,1.60277 -6.90293,0.2754 -17.98476,-0.62841 -24.73872,-2.08098 -10.75724,-2.31356 -26.62491,-5.84103 -39.2838,-9.13178 -69.79187,5.03783 -60.49718,-8.33563 -124.38757,-4.01325 -7.56544,-0.85158 -53.73062,41.00352 -56.48862,39.57045 C 53.642879,671.69662 0,650.3517 0,650.3517 V 1080 h 1920 z"/>
            </g>
          </svg>

          <div className='grid grid-flow-row-dense items-center grid-cols-2 sm:grid-cols-3 md:gird-cols-4 pt-8 pb-4 px-20 h-32 min-h-40 bg-salmon-red text-salmon-tan'>
            
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/about">
              <a>About</a>
            </Link>
            <Link href="/support">
              <a>Support</a>
            </Link>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
            <Link href="/posts">
              <a>Posts</a>
            </Link>
          </div>

          <div className="grid grid-flow-col items-center justify-between border-t-salmon-tan border-t-2 p-4 sm:p-8 bg-salmon-red text-salmon-tan">
            <span>© 2024</span>
            <div className='grid grid-flow-col items-center sm:justify-center'>
              <a href="https://www.facebook.com/YEPDillon" target='_blank' className=''>
                <svg className="place-self-center w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                  <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                </svg>
                <span className='sr-only'>Facebook page</span>
              </a>
              <a href="gitlab.com" target="_blank">
                <svg className='place-self-center w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380 380" fill="currentColor" >
                  <path d="M282.83,170.73l-.27-.69-26.14-68.22a6.81,6.81,0,0,0-2.69-3.24,7,7,0,0,0-8,.43,7,7,0,0,0-2.32,3.52l-17.65,54H154.29l-17.65-54A6.86,6.86,0,0,0,134.32,99a7,7,0,0,0-8-.43,6.87,6.87,0,0,0-2.69,3.24L97.44,170l-.26.69a48.54,48.54,0,0,0,16.1,56.1l.09.07.24.17,39.82,29.82,19.7,14.91,12,9.06a8.07,8.07,0,0,0,9.76,0l12-9.06,19.7-14.91,40.06-30,.1-.08A48.56,48.56,0,0,0,282.83,170.73Z"/>
                </svg>
              </a>
            </div>
          </div>

      </footer> */}

    </>
  )
}

// export const getStaticProps = async() => {
//   const { data, query, variables } = await client.queries.branchContactConnection();

//   return {
//     props: {
//       data,
//       query,
//       variables
//     },
//   };
// };
// new
// <svg className="text-salmon-red stroke-salmon-tan" strokeWidth={5} viewBox="0 0 1920 457.22189" xmlns="http://www.w3.org/2000/svg">
//   <path fill="currentColor" d="m 1920,628.35567 c -17.6641,2.2692 -39.5106,-1.92125 -52.9924,6.80759 -9.522,6.16506 -9.6384,5.75875 -28.5661,18.49519 -2.8679,1.92981 -6.3997,1.75301 -10.3526,0.60279 -1.6794,-1.75049 -4.2957,-5.60039 -7.5236,-6.26142 -15.0358,11.6592 -21.778,10.70687 -41.6395,10.98851 -6.9976,-3.33868 -11.7454,-5.12291 -18.743,-8.46159 0,0 -44.3744,5.20471 -57.2435,0.76804 -13.0184,2.56351 -12.4798,2.4963 -20.3956,3.21909 -10.9397,7.44447 -14.9042,12.37773 -21.5105,14.08111 -29.0016,8.24797 -79.1129,33.15449 -79.1129,33.15449 0,0 -51.9795,-15.83152 -91.4485,-31.99096 -5.4895,1.99172 -17.172,-0.10514 -44.115,-2.74533 -37.0346,-6.23912 -53.2719,-34.74536 -82.7475,-32.30019 -19.0495,1.91897 -20.3845,-6.12564 -34.4521,-6.79567 -40.2542,0.36993 -8.5332,-5.75699 -47.2882,-5.08814 -50.9813,1.73003 -58.943,0.0438 -92.4262,11.42104 -65.7211,-7.87539 -124.7062,45.11736 -143.0177,42.55155 -29.9947,-4.20287 -109.7852,18.60125 -139.90883,41.34717 -6.32808,4.77824 -17.64592,-5.8496 -65.57653,11.82292 -17.59217,6.48642 -25.68617,-1.38149 -25.68617,-1.38149 -4.10281,-2.65661 -29.82375,0.49124 -32.67619,1.47183 -11.50978,3.95676 -26.08948,15.35302 -34.52933,11.87029 -1.30994,-0.54055 -3.74637,-1.88024 -3.92982,-1.62165 -1.04171,1.46841 -1.87547,4.19943 -3.12512,4.40523 -0.70458,0.11604 -1.57282,0.59323 -2.11373,0.34811 -1.64016,-0.74326 -3.28031,-1.48652 -4.92047,-2.22978 -3.53201,1.53877 -7.06403,3.07754 -10.59604,4.61631 -5.80218,2.5278 2.31146,-7.24208 -57.71976,-1.04871 0,0 -114.25995,-21.51144 -139.42203,-28.3921 -70.7418,-40.51174 -132.60244,-34.28969 -132.60244,-34.28969 -13.39129,0.53425 -26.78257,1.06851 -40.17386,1.60277 -6.90293,0.2754 -17.98476,-0.62841 -24.73872,-2.08098 -10.75724,-2.31356 -26.62491,-5.84103 -39.2838,-9.13178 -69.79187,5.03783 -60.49718,-8.33563 -124.38757,-4.01325 -7.56544,-0.85158 -53.73062,41.00352 -56.48862,39.57045 C 53.642879,671.69662 0,650.3517 0,650.3517 V 1080 h 1920 z" />
// </svg>
// old
// <svg className="text-salmon-red stroke-salmon-tan" strokeWidth={5} viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
//   <path fill="currentColor" d="m 1920,628.35567 c -17.6641,2.2692 -39.5106,-1.92125 -52.9924,6.80759 -9.522,6.16506 -9.6384,5.75875 -28.5661,18.49519 -2.8679,1.92981 -6.3997,1.75301 -10.3526,0.60279 -1.6794,-1.75049 -4.2957,-5.60039 -7.5236,-6.26142 -15.0358,11.6592 -21.778,10.70687 -41.6395,10.98851 -6.9976,-3.33868 -11.7454,-5.12291 -18.743,-8.46159 0,0 -44.3744,5.20471 -57.2435,0.76804 -13.0184,2.56351 -12.4798,2.4963 -20.3956,3.21909 -10.9397,7.44447 -14.9042,12.37773 -21.5105,14.08111 -29.0016,8.24797 -79.1129,33.15449 -79.1129,33.15449 0,0 -51.9795,-15.83152 -91.4485,-31.99096 -5.4895,1.99172 -17.172,-0.10514 -44.115,-2.74533 -37.0346,-6.23912 -53.2719,-34.74536 -82.7475,-32.30019 -19.0495,1.91897 -20.3845,-6.12564 -34.4521,-6.79567 -40.2542,0.36993 -8.5332,-5.75699 -47.2882,-5.08814 -50.9813,1.73003 -58.943,0.0438 -92.4262,11.42104 -65.7211,-7.87539 -124.7062,45.11736 -143.0177,42.55155 -29.9947,-4.20287 -109.7852,18.60125 -139.90883,41.34717 -6.32808,4.77824 -17.64592,-5.8496 -65.57653,11.82292 -17.59217,6.48642 -25.68617,-1.38149 -25.68617,-1.38149 -4.10281,-2.65661 -29.82375,0.49124 -32.67619,1.47183 -11.50978,3.95676 -26.08948,15.35302 -34.52933,11.87029 -1.30994,-0.54055 -3.74637,-1.88024 -3.92982,-1.62165 -1.04171,1.46841 -1.87547,4.19943 -3.12512,4.40523 -0.70458,0.11604 -1.57282,0.59323 -2.11373,0.34811 -1.64016,-0.74326 -3.28031,-1.48652 -4.92047,-2.22978 -3.53201,1.53877 -7.06403,3.07754 -10.59604,4.61631 -5.80218,2.5278 2.31146,-7.24208 -57.71976,-1.04871 0,0 -114.25995,-21.51144 -139.42203,-28.3921 -70.7418,-40.51174 -132.60244,-34.28969 -132.60244,-34.28969 -13.39129,0.53425 -26.78257,1.06851 -40.17386,1.60277 -6.90293,0.2754 -17.98476,-0.62841 -24.73872,-2.08098 -10.75724,-2.31356 -26.62491,-5.84103 -39.2838,-9.13178 -69.79187,5.03783 -60.49718,-8.33563 -124.38757,-4.01325 -7.56544,-0.85158 -53.73062,41.00352 -56.48862,39.57045 C 53.642879,671.69662 0,650.3517 0,650.3517 V 1080 h 1920 z" />
// </svg>


// <footer className="py-6">
//  <svg className="text-salmon-red" viewBox="0 0 1920 126.45264" xmlns="http://www.w3.org/2000/svg">
//    <g transform="translate(0,-622.7781)">
//      <path fill="currentColor" d="m 1920,628.35567 c -17.6641,2.2692 -39.5106,-1.92125 -52.9924,6.80759 -9.522,6.16506 -9.6384,5.75875 -28.5661,18.49519 -2.8679,1.92981 -6.3997,1.75301 -10.3526,0.60279 -1.6794,-1.75049 -4.2957,-5.60039 -7.5236,-6.26142 -15.0358,11.6592 -21.778,10.70687 -41.6395,10.98851 -6.9976,-3.33868 -11.7454,-5.12291 -18.743,-8.46159 0,0 -44.3744,5.20471 -57.2435,0.76804 -13.0184,2.56351 -12.4798,2.4963 -20.3956,3.21909 -10.9397,7.44447 -14.9042,12.37773 -21.5105,14.08111 -29.0016,8.24797 -79.1129,33.15449 -79.1129,33.15449 0,0 -51.9795,-15.83152 -91.4485,-31.99096 -5.4895,1.99172 -17.172,-0.10514 -44.115,-2.74533 -37.0346,-6.23912 -53.2719,-34.74536 -82.7475,-32.30019 -19.0495,1.91897 -20.3845,-6.12564 -34.4521,-6.79567 -40.2542,0.36993 -8.5332,-5.75699 -47.2882,-5.08814 -50.9813,1.73003 -58.943,0.0438 -92.4262,11.42104 -65.7211,-7.87539 -124.7062,45.11736 -143.0177,42.55155 -29.9947,-4.20287 -109.7852,18.60125 -139.90883,41.34717 -6.32808,4.77824 -17.64592,-5.8496 -65.57653,11.82292 -17.59217,6.48642 -25.68617,-1.38149 -25.68617,-1.38149 -4.10281,-2.65661 -29.82375,0.49124 -32.67619,1.47183 -11.50978,3.95676 -26.08948,15.35302 -34.52933,11.87029 -1.30994,-0.54055 -3.74637,-1.88024 -3.92982,-1.62165 -1.04171,1.46841 -1.87547,4.19943 -3.12512,4.40523 -0.70458,0.11604 -1.57282,0.59323 -2.11373,0.34811 -1.64016,-0.74326 -3.28031,-1.48652 -4.92047,-2.22978 -3.53201,1.53877 -7.06403,3.07754 -10.59604,4.61631 -5.80218,2.5278 2.31146,-7.24208 -57.71976,-1.04871 0,0 -114.25995,-21.51144 -139.42203,-28.3921 -70.7418,-40.51174 -132.60244,-34.28969 -132.60244,-34.28969 -13.39129,0.53425 -26.78257,1.06851 -40.17386,1.60277 -6.90293,0.2754 -17.98476,-0.62841 -24.73872,-2.08098 -10.75724,-2.31356 -26.62491,-5.84103 -39.2838,-9.13178 -69.79187,5.03783 -60.49718,-8.33563 -124.38757,-4.01325 -7.56544,-0.85158 -53.73062,41.00352 -56.48862,39.57045 C 53.642879,671.69662 0,650.3517 0,650.3517 V 1080 h 1920 z"/>
//  </g>
//  </svg>
// 	<div className="container px-6 mx-auto space-y-6 divide-y dark:divide-gray-400 md:space-y-12 divide-opacity-50">
//   <div className="grid grid-cols-12">
//     <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
//       <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 md:justify-start">
//         <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="flex-shrink-0 w-5 h-5 rounded-full dark:text-gray-900">
//             <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
//           </svg>
//         </div>
//         <span className="self-center text-2xl font-semibold">Brand name</span>
//       </a>
//     </div>
//     <div className="col-span-6 text-center md:text-left md:col-span-3">
//       <p className="pb-1 text-lg font-medium">Category</p>
//       <ul>
//         <li>
//           <a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-400">Link</a>
//         </li>
//         <li>
//           <a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-400">Link</a>
//         </li>
//         <li>
//           <a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-400">Link</a>
//         </li>
//         <li>
//           <a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-400">Link</a>
//         </li>
//         <li>
//           <a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-400">Link</a>
//         </li>
//       </ul>
//     </div>
//     <div className="col-span-6 text-center md:text-left md:col-span-3">
//       <p className="pb-1 text-lg font-medium">Category</p>
//       <ul>
//         <li>
//           <a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-400">Link</a>
//         </li>
//         <li>
//           <a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-400">Link</a>
//         </li>
//         <li>
//           <a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-400">Link</a>
//         </li>
//         <li>
//           <a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-400">Link</a>
//         </li>
//         <li>
//           <a rel="noopener noreferrer" href="#" className="hover:dark:text-violet-400">Link</a>
//         </li>
//       </ul>
//     </div>
//   </div>
//   <div className="grid justify-center pt-6 lg:justify-between">
//     <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
//       <span>©2024 All rights reserved</span>
//       <a rel="noopener noreferrer" href="#">
//         <span>Privacy policy</span>
//       </a>
//       <a rel="noopener noreferrer" href="#">
//         <span>Terms of service</span>
//       </a>
//     </div>
//     <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
//       <a rel="noopener noreferrer" href="#" title="Email" className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-gray-900">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
//           <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
//           <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
//         </svg>
//       </a>
//       <a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-gray-900">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="currentColor" className="w-5 h-5">
//           <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
//         </svg>
//       </a>
//       <a rel="noopener noreferrer" href="#" title="GitHub" className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-gray-900">
//         <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
//           <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
//         </svg>
//       </a>
//     </div>
//   </div>
// </div>
// </footer>