import DemoBoxContent from "../../../components/docs/DemoBoxContent";

export default function Hospitalisation() {
    return (<div className="grid grid-flow-row auto-rows-max gap-4 ">
            <DemoBoxContent className="shadow-lg bg-sky-400 text-white">
                <p className=" text-center bg-blue-600 rounded text-xl">MON SÉJOUR AVANT LA CHIRURGIE</p>

                <div>
                    <iframe className="w-full aspect-video ..." src="https://www.youtube.com/embed/4Lt4nlnmOqc"

                    ></iframe>
                </div>
            </DemoBoxContent>
            <DemoBoxContent className="text-white shadow-lg bg-sky-400 text-justify">
                <p className="text-center bg-blue-600 rounded text-xl">MON SÉJOUR AVANT LA CHIRURGIE</p>

                <p className="text-center text-xl text-gray-600"> Le jour de votre arrivée :</p>

                L’équipe paramédicale vous accueille et vous serez examiné(e) par le médecin du service.

                Pensez à signaler vos régimes alimentaires, allergies et convictions religieuses ou toute spécifiée à
                l’aide-soignante. Votre alimentation, au cours de l’hospitalisation, est ainsi adaptée grâce au
                partenariat avec le service restauration.

            </DemoBoxContent>
            <DemoBoxContent className=" text-white text-justify shadow-lg bg-sky-400">
                <p className="text-center  bg-blue-600 rounded text-xl">DOCUMENTS INDISPENSABLES À MON ADMISSION</p>
                <p>✅ Carte d'assuré social</p>
                <p>✅ Carte de mutuelle</p>
                <p>✅ Carte d'identité
                </p>
                <p>✅ Dossier médical en votre possession</p>
                <p>✅ Attestation d’information signée</p>
                <p>✅ Coordonnées de la personne de confiance</p>

            </DemoBoxContent>
        </div>)
}



