import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "./Home";
import { About } from './About';
import { Features } from './Features';
import { Team } from './Team';
import { Testimonial } from './Testimonial';
import { Faq } from './Faq';
import { Contact } from './Contact';
import { Works } from './Works';

export const Index = () => {

    return(
        
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>   
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/features" element={<Features />} />
                <Route path="/team" element={<Team />} />
                <Route path="/testimonials" element={<Testimonial />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/works" element={<Works />} />
            </Route>
        </Routes>
    </BrowserRouter>
    )
}