import React, { useState } from 'react';

const Table = () => {
    const data = [
        {
        questionnaire: 'Auto-questionnaire COVID',
            description: 'À compléter 2 jours avant votre arrivée',
            status: 'En attente',
            questions: [
            'Question A',
            'Question B',
            'Question C',
        ],

    },
    {
        questionnaire: 'Préparation préopératoire',
        description: 'À compléter avant votre hospitalisation',
        status: 'Terminé',
        questions: [
            'Question A',
            'Question B',
            'Question C',
        ],

    },
    {
        questionnaire: 'Qualité de vie',
        description: 'À compléter la veille de votre arrivée et 3 mois après votre sortie',
        status: 'Terminé',
        questions: [
            'Question A',
            'Question B',
            'Question C',
        ],

    },
    {
        questionnaire: 'Questionnaire de satisfaction',
        description: 'À compléter 7 jours après votre sortie',
        status: 'Terminé',
        questions: [
            'Question A',
            'Question B',
            'Question C',
        ],

    },
    {
        questionnaire: 'Questionnaire de suivi J15',
        description: 'À compléter 15 jours après votre sortie',
        status: 'Terminé',
        questions: [
            'Question A',
            'Question B',
            'Question C',
        ],

    },
    {
        questionnaire: 'Questionnaire de suivi 3M',
        description: 'À compléter 3 mois après votre sortie',
        status: 'Terminé',
        questions: [
            'Question A',
            'Question B',
            'Question C',
        ],

    },
    {
        questionnaire: 'Mes documents personnalisés',
        description:'Récupérez vos informations personnalisées de prise en charge',
        status: 'Terminé',
        questions: [
            'Question A',
            'Question B',
            'Question C',
        ],}
        // Add more items here with additional fields
    ];

    const [selectedQuestionnaire, setSelectedQuestionnaire] = useState(null);

    const handleRowClick = (questionnaire) => {
        if (selectedQuestionnaire === questionnaire) {
            setSelectedQuestionnaire(null);
        } else {
            setSelectedQuestionnaire(questionnaire);
        }
    };

    return (
        <div className="container mx-auto">
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                <tr>
                    <th className="py-2 px-4 border-b border-gray-300">Questionnaire</th>
                    <th className="py-2 px-4 border-b border-gray-300">Questions</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr
                        key={index}
                        onClick={() => handleRowClick(item.questionnaire)}
                        className={`cursor-pointer ${selectedQuestionnaire === item.questionnaire ? 'bg-gray-200' : ''}`}
                    >
                        <td className="py-2 px-4 border-b border-gray-300">
                            <div className="font-bold">{item.questionnaire}</div>
                            <div>{item.description}</div>
                        </td>
                        <td className="py-2 px-4 border-b border-gray-300">
                            {selectedQuestionnaire === item.questionnaire && (
                                <div>
                                    {item.questions.map((question, index) => (
                                        <div key={index}>{question}</div>
                                    ))}
                                </div>
                            )}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
