import React from "react";
import Breadcrumbs from './Breadcrumbs';
import HierarchicalSystemHook from "./HierarchicalSystemHook";

export default function HierarchicalSystem() {

    const accordionData = [
        {
            title: 'Head',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore.'
        },
        {
            title: 'Belly',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore'
        },
        {
            title: 'Chest',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore'
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