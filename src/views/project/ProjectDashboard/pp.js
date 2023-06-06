
import React from 'react'
import { Card, Avatar } from 'components/ui'

const HeaderFooterBorder = () => {
    const cardFooter = (
        <div className="flex items-center">

        </div>
    )

    const cardHeader = (
        <div className="rounded-tl-lg rounded-tr-lg overflow-hidden">
            <img src="/img/others/img-1.jpg" alt="image" />
        </div>
    )

    return (
        <div className="max-w-xs">
            <Card
                clickable
                className="hover:shadow-lg transition duration-150 ease-in-out dark:border dark:border-gray-600 dark:border-solid"
                header={cardHeader}
                footer={cardFooter}
                headerClass="p-0"
                footerBorder={false}
                headerBorder={false}
            >
                <span className="text-emerald-600 font-semibold">
                    Life Style
                </span>
                <h4 className="font-bold my-3">
                    Bienvenue dans l'espace dédié à votre chirurgie cardio-vasculaire</h4>
                <p>
                    Vous êtes sur le point d’être pris en charge par l’équipe du service de chirurgie cardio-vasculaire.

                    Cet espace personnalisé a été conçu, à votre intention, dans le but de faciliter votre prise en charge.

                    Vous y trouverez divers renseignements utiles concernant le déroulement de votre préparation, de votre hospitalisation puis de votre suivi ainsi que des questionnaires médicaux à compléter.

                    Nos équipes médicales et paramédicales seront à votre écoute tout au long de votre séjour.

                    L'équipe du service de chirurgie cardio-vasculaire

                </p>
            </Card>
        </div>
    )
}

export default HeaderFooterBorder

