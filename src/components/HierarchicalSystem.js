import React from "react";
import Breadcrumbs from './Breadcrumbs';
import HierarchicalSystemHook from "./HierarchicalSystemHook";

export default function HierarchicalSystem() {

    const accordionData = [
        {
            title: 'Head',
            content: 'You can pet me here as long as you want. I are good boi. Woof!'
        },
        {
            title: 'Belly',
            content: 'You can also pet me here as long as you want. I love belly rubs!'
        },
        {
            title: 'Nose',
            content: 'Guess what? Woof! You can boop my squishy, wet nose but be careful.'
        }
    ];


    return (
        <div>
            <Breadcrumbs></Breadcrumbs>
            <div className="accordion">
                {accordionData.map(({ title, content }) => (
                    <HierarchicalSystemHook title={title} content={content}></HierarchicalSystemHook>
                ))}
            </div>
        </div>
    )

}