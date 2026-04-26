import React from 'react';
import errorImage from '../../assets/Error404.png'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <img src={errorImage} className='h-[calc(100vh-286px)] w-auto mx-auto' alt="Error 404" />
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;