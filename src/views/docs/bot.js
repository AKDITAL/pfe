import React from 'react';

const Table = () => {
    const data = [
        {
            questionnaire: 'Auto-questionnaire COVID',
            description: 'À compléter 2 jours avant votre arrivée',
            status: 'En attente',
        },
        {
            questionnaire: 'Préparation préopératoire',
            description: 'À compléter avant votre hospitalisation',
            status: 'Terminé',
        },
        // Add more items here with additional fields
    ];

    const handleRowClick = (questionnaire) => {
        console.log(`Clicked on questionnaire: ${questionnaire}`);
    };

    return (
        <div className="container mx-auto">
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                <tr>
                    <th className="py-2 px-4 border-b border-gray-300">Questionnaire</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={index} onClick={() => handleRowClick(item.questionnaire)} className="cursor-pointer">
                        <td colSpan="2" className="py-2 px-4 border-b border-gray-300">
                            <div className="font-bold">{item.questionnaire}</div>
                            <div>{item.description}</div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
