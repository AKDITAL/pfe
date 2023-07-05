import DemoBoxContent from "../../../components/docs/DemoBoxContent";

export default function () {
    return (

        <div className="grid grid-flow-row auto-rows-max gap-4 ">
            <DemoBoxContent className="shadow-lg bg-sky-500 text-white-500">
                <p className="text-white-500 text-xl text-center bg-blue-600 rounded">AVANT LA CHIRURGIE</p>
                Madame, Monsieur,

                Vous venez de vous faire opérer du coeur dans notre service. Nous espérons que votre séjour s’est bien
                passé. Nous tenons à vous fournir quelques conseils pour un retour à domicile dans les meilleures
                conditions.

                Lisez attentivement les informations contenues sur cette page avant votre départ et n’hésitez pas à
                poser des questions à l’équipe soignante si nécessaire.

                L’équipe de chirurgie cardiaque
            </DemoBoxContent>
            <DemoBoxContent className="text-white-500 shadow-lg bg-sky-500">
                <p className="text-center text-xl bg-blue-600 rounded">  CONSEILS ET CONSIGNES POST OPÉRATOIRES
                </p>

                <div className="text-justify">
                    <p> 🔵 Arrêter de fumer</p>
                    <p> 🔵 Dormir sur le dos pendant 1 mois</p>
                    <p> 🔵 Ne pas porter de poids pendant 2 mois</p>
                    <p> 🔵 Marcher tous les jours, 2 fois par jour pendant 30min à 1h
                    </p>
                    <p> 🔵 Conseils d’hygiène corporelle :
                    </p></div>


            </DemoBoxContent>
            <DemoBoxContent className=" text-justify text-white-500 shadow-lg bg-sky-500">
                <p className="text-xl text-center bg-blue-600 rounded">CICATRICE - STERNUM</p>

                <p className="text-xl text-center"> Le sternum met 6 à 8 semaines pour être consolidé.</p>

                <p> - Mettre la ceinture de contention jour et nuit pour les hommes pendant 1 mois
                </p>
                <p> - Mettre la ceinture de contention jour et nuit pour les hommes pendant 1 mois
                </p>
                <p> - Mettre le soutien-gorge jour et nuit pour les femmes pendant 1 mois
                </p>
            </DemoBoxContent>
            <DemoBoxContent className=" text-justify text-white-500 shadow-lg bg-sky-500">
                <p className="text-xl text-center bg-blue-600 rounded">SURVEILLANCE</p>

                <p className="text-red-500 text-xl text-center"> Lors de votre retour à domicile :</p>

                <p> - Contactez votre médecin traitant pour mettre en place un suivi régulier (tous les 2 à 3 mois)</p>
                <p> - Contactez votre cardiologue pour prendre RDV à 1 mois après la chirurgie
                </p>
                <p> - Prenez bien le traitement prescrit
                </p>
            </DemoBoxContent>
        </div>


    )
}