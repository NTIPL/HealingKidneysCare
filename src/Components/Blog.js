import React from 'react';
import BlogContentPage from './BlogContents';
import GoogleFormPage from './GoogleForm';
import Locations from './Locations';
import BlogLocationPage from './BlogLocation';

const BlogPage = () => {

    return (
        <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">

            <section>
                <BlogContentPage />
            </section>

            <section>
                <GoogleFormPage />
            </section>

            <section>
                <Locations />
            </section>

            <section>
                <BlogLocationPage />
            </section>

        </div>
    );
};

export default BlogPage;
