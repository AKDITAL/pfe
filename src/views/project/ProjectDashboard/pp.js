import React from 'react'
import {Card} from 'components/ui'
import Date from "./date";
import DemoBoxContent from "../../../components/docs/DemoBoxContent";

const HeaderFooterBorder = () => {
    const cardFooter = (<div className="flex items-center">

    </div>)

    const cardHeader = (<div className="rounded-tl-lg rounded-tr-lg overflow-hidden">

    </div>)

    return (<div className="  grid grid-rows-3 grid-flow-col gap-4">
            <div className="row-span-3 ..."><Card
                clickable
                className="hover:shadow-lg transition duration-150 ease-in-out dark:border dark:border-gray-600 dark:border-solid"
                header={cardHeader}
                footer={cardFooter}
                headerClass="p-0"
                footerBorder={false}
                headerBorder={false}
            >
                <div>

                    <p>
                        Vous êtes sur le point d’être pris en charge par l’équipe du service de chirurgie
                        cardio-vasculaire.
                        Cet espace personnalisé a été conçu, à votre intention, dans le but de faciliter votre prise en
                        charge.
                        Vous y trouverez divers renseignements utiles concernant le déroulement de votre préparation, de
                        votre hospitalisation puis de votre suivi ainsi que des questionnaires médicaux à compléter.
                        Nos équipes médicales et paramédicales seront à votre écoute tout au long de votre séjour.
                        L'équipe du service de chirurgie cardio-vasculaire
                    </p>

                </div>
            </Card>
                <DemoBoxContent className="bg-sky-200"><h4 className="font-bold my-3">
                    Bienvenue dans l'espace dédié à votre chirurgie cardio-vasculaire</h4>
                    <p className="text-gray-500"><Date/></p>
                    <div>
                        <p><Card bordered>
                            <h5> Coordonnées de la programmation:
                            </h5>
                            <p className="text-gray-500">
                                05 61 32 38 76
                                (Du lundi au vendredi de 9h à 16h)
                            </p>
                        </Card>
                        </p>
                    </div>
                </DemoBoxContent>
            </div>


            <div className="col-span-2 bg-blue-600 rounded">
                <DemoBoxContent className=" text-red-700 shadow-lg bg-blue-600 ">
                    <p className="text-center bg-white rounded">Pour toute date où la pharmacie serait fermée (le
                        dimanche par exemple),
                        veuillez réaliser la tâche assignée le samedi ou le lundi.</p>
                </DemoBoxContent>
                <DemoBoxContent>
                    <div className="rounded-tl-lg rounded-tr-lg overflow-hidden">
                        <Card bordered>
                            <h5> Mon programme de la semaine
                            </h5>
                            <p className="text-gray-500">
                                Vous avez tâche(s) en retard </p>
                        </Card></div>
                    <div className="rounded-tl-lg rounded-tr-lg overflow-hidden">
                        <p>
                            <p>mardi 29 mars 2022</p>

                            <p>Compléter mon questionnaire de suivi 3M</p>
                        </p>
                    </div>
                </DemoBoxContent>
                {/* <Card >
                    <p className=" text-red-400 text-lg text-justify ">Pour toute date où la pharmacie serait fermée (le dimanche par exemple),
                        veuillez réaliser la tâche assignée le samedi ou le lundi.</p>
                </Card>*/}


            </div>
        </div>


    )
}

export default HeaderFooterBorder

