import React, {useState} from 'react';
import "./FAQComponent.css";
import {styled} from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const faqData = [
    {
        id: 'panel1',
        title: 'Accordion 1',
        content: 'aaaaaaaaaaa',
    },
    {
        id: 'panel2',
        title: 'Accordion 2',
        content: 'bbbbbbbbbbb',
    },
];

export default function FAQComponent() {
    const [expanded, setExpanded] = useState("");

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : "");
    };

    return (
        <>
            <div className="faq-section">
                <div className="faq-section-title">
                    <h1>Frequently Asked Questions</h1>
                    <p>Got questions? We've got answers! Check out our FAQ section to find answers to the most common
                        questions about StreamVibe.</p>
                </div>

                <div className="faq-section-content">
                    {faqData.map((item) => (
                        <Accordion key={item.id} expanded={expanded === item.id} onChange={handleChange(item.id)}>
                            <AccordionSummary
                                expandIcon={expanded === item.id ? <RemoveIcon/> : <AddIcon/>}
                            >
                                <Typography>{item.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {item.content}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            </div>
        </>
    );
}