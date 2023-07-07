import React, { useState } from 'react';

const Table = () => {
    const data = [
        {
            questionnaire: 'Auto-questionnaire COVID',
            description: 'À compléter 2 jours avant votre arrivée',
            status: 'En attente',
            questions: [
                {
                    question: 'Question 1',
                    answer: 'Answer 1',
                },
                {
                    question: 'Question 2',
                    answer: 'Answer 2',
                },
                {
                    question: 'Question 3',
                    answer: 'Answer 3',
                },
            ],
        },
        {
            questionnaire: 'Préparation préopératoire',
            description: 'À compléter avant votre hospitalisation',
            status: 'Terminé',
            questions: [
                {
                    question: 'Question A',
                    answer: 'Answer A',
                },
                {
                    question: 'Question B',
                    answer: 'Answer B',
                },
                {
                    question: 'Question C',
                    answer: 'Answer C',
                },
            ],
        },
        {
            questionnaire: 'Qualité de vie',
            description: 'À compléter la veille de votre arrivée et 3 mois après votre sortie',
            status: 'En attente',
            questions: [
                {
                    question: 'Question 1',
                    answer: 'Answer 1',
                },
                {
                    question: 'Question 2',
                    answer: 'Answer 2',
                },
                {
                    question: 'Question 3',
                    answer: 'Answer 3',
                },
            ],
        },
        {
            questionnaire: 'Questionnaire de satisfaction',
            description: 'À compléter 7 jours après votre sortie',
            status: 'En attente',
            questions: [
                {
                    question: 'Question 1',
                    answer: 'Answer 1',
                },
                {
                    question: 'Question 2',
                    answer: 'Answer 2',
                },
                {
                    question: 'Question 3',
                    answer: 'Answer 3',
                },
            ],
        },
        {
            questionnaire: 'Questionnaire de suivi J15',
            description: 'À compléter 15 jours après votre sortie',
            status: 'En attente',
            questions: [
                {
                    question: 'Question 1',
                    answer: 'Answer 1',
                },
                {
                    question: 'Question 2',
                    answer: 'Answer 2',
                },
                {
                    question: 'Question 3',
                    answer: 'Answer 3',
                },
            ],
        },
        {
            questionnaire: 'Questionnaire de suivi 3M',
            description: 'À compléter 3 mois après votre sortie',
            status: 'En attente',
            questions: [
                {
                    question: 'Question 1',
                    answer: 'Answer 1',
                },
                {
                    question: 'Question 2',
                    answer: 'Answer 2',
                },
                {
                    question: 'Question 3',
                    answer: 'Answer 3',
                },
            ],
        },
        {
            questionnaire: 'Mes documents personnalisés',
            description: 'Récupérez vos informations personnalisées de prise en charge',
            status: 'En attente',
            questions: [
                {
                    question: 'Question 1',
                    answer: 'Answer 1',
                },
                {
                    question: 'Question 2',
                    answer: 'Answer 2',
                },
                {
                    question: 'Question 3',
                    answer: 'Answer 3',
                },
            ],
        },
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
                    <th className="py-2 px-4 border-b border-gray-300">Answers</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr
                        key={index}
                        onClick={() => handleRowClick(item.questionnaire)}
                        className={`cursor-pointer ${
                            selectedQuestionnaire === item.questionnaire ? 'bg-gray-200' : ''
                        }`}
                    >
                        <td className="py-2 px-4 border-b border-gray-300">
                            <div className="font-bold">{item.questionnaire}</div>
                            <div>{item.description}</div>
                        </td>
                        <td className="py-2 px-4 border-b border-gray-300">
                            {selectedQuestionnaire === item.questionnaire && (
                                <div>
                                    {item.questions.map((question, index) => (
                                        <div key={index}>{question.question}</div>
                                    ))}
                                </div>
                            )}
                        </td>
                        <td className="py-2 px-4 border-b border-gray-300">
                            {selectedQuestionnaire === item.questionnaire && (
                                <div>
                                    {item.questions.map((question, index) => (
                                        <div key={index}>{question.answer}</div>
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
