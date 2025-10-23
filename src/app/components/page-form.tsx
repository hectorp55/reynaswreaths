"use client"
import React, { ReactNode } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

type PageFormProps = {
    children: ReactNode
}

function PageForm({children}: PageFormProps) {    
    return (
        <div>
        {/* Header */}
        <Header/>
        <main className="">
            {/* Page Content */}
            {children}
        </main>
        {/* Footer */}
        <Footer/>
        </div>
    )
}

export default PageForm