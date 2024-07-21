import { useContext } from "react"
import { FooterComponent } from "../components/FooterComponent"
import { HeaderComponent } from "../components/HeaderComponent"
import { ThemeContext } from "../contexts/ThemeContext"

export const LegalPage = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <div>
            <HeaderComponent />
                <div className={`p-64 text-${theme}`}>
                    <p>
                        En application de la loi 78-17 du 6 janvier 1978, il est rappelé que les données nominatives qui sont demandés au Client sont nécessaires au traitement de sa commande et à l’établissement des factures, notamment.
                        Ces données peuvent être communiquées aux éventuels partenaires du Vendeur chargés de l’exécution, du traitement, de la gestion et du paiement des commandes.
                        Le traitement des informations communiquées par l’intermédiaire du site www.aventure06.com a fait l’objet a fait l’objet d’une déclaration auprès de la CNIL, numéro 2054588.
                        Le Client dispose, conformément aux réglementations nationales et européennes en vigueur d’un droit d’accès permanent, de modification, de rectification et d’opposition s’agissant des informations le concernant.

                        L’ensemble de ces droits s’exerce auprès de la société SARL Aventure par courrier accompagné d’une copie d’un titre d’identité comportant une signature à adresser à
                        SARL Aventure
                        24 rue Meyerbeer,
                        06000 NICE,
                        France

                        Le site Aventure06 utilise des cookies aux fins suivantes :
                        Collecte des statistiques visiteurs du site et comptage des ventes de nos partenaires. Si vous ne souhaitez pas que nous utilisions des cookies, veuillez configurer votre navigateur en conséquence. Si vous acceptez les cookies, ils resteront stockés dans votre ordinateur pendant 5 ans, à moins que vous ne les supprimiez. Veuillez noter qu’en refusant les cookies, votre utilisation de notre site web et de nos services pourra s’en trouver limitée.”

                        Conditions générales de vente

                        ARTICLE 1 – CHAMP D’APPLICATION

                        Les présentes Conditions Générales de Vente (dites « CGV ») s’appliquent, sans restriction ni réserve à l’ensemble des ventes conclues par le Vendeur auprès d’acheteurs non professionnels (« Les Clients ou le Client »), désirant acquérir les produits proposés à la vente (« Les Produits ») par le Vendeur sur le site www.aventure06.com. Les Produits proposés à la vente sur le site sont les suivants :
                        Service Escape Game, Bon Cadeau, Billet Cadeau
                        Les caractéristiques principales des Produits et notamment les spécifications, illustrations et indications de dimensions ou de capacité des Produits, sont présentées sur le site www.aventure06.fr ce dont le client est tenu de prendre connaissance avant de commander.
                        Le choix et l’achat d’un Produit sont de la seule responsabilité du Client.
                        Les offres de Produits s’entendent dans la limite des stocks disponibles, tels que précisés lors de la passation de la commande.
                        Ces CGV sont accessibles à tout moment sur le site www.aventure06.fr et prévaudront sur toute autre document.
                        Le Client déclare avoir pris connaissance des présentes CGV et les avoir acceptées en cochant la case prévue à cet effet avant la mise en œuvre de la procédure de commande en ligne du site www.aventure06.fr.
                        Sauf preuve contraire, les données enregistrées dans le système informatique du Vendeur constituent la preuve de l’ensemble des transactions conclues avec le Client.
                        Les coordonnées du Vendeur sont les suivantes :
                        Aventure, SARL
                        Capital social de 1000 euros
                        Immatriculé au RCS de Antibes, sous le numéro 810 908 244
                        304 Bd Eric Tabarly, 06270, Villeneuve Loubet
                        mail : info@aventure06.com
                        Numéro de TVA Intracommunautaire FR 52 810908244

                        ARTICLE 2 – PRIX

                        Les Produits sont fournis aux tarifs en vigueur figurant sur le site www.aventure06.fr, lors de l’enregistrement de la commande par le Vendeur.
                        Les prix sont exprimés en Euros, HT et TTC.
                        Les tarifs tiennent compte d’éventuelles réductions qui seraient consenties par le Vendeur sur le site www.aventure06.fr.
                        Ces tarifs sont fermes et non révisables pendant leur période de validité mais le Vendeur se réservent le droit, hors période de validité, d’en modifier les prix à tout moment.
                        Les prix ne comprennent pas les frais de traitement, d’expédition, de transport et de livraison, qui sont facturés en supplément, dans les conditions indiquées sur le site et calculés préalablement à la passation de la commande.
                        Le paiement demandé au Client correspond au montant total de l’achat, y compris ces frais.
                        Une facture est établie par le Vendeur et remise au Client lors de la livraison des Produits commandés.” icon_type=”custom” icon_img=”4256″ size=”32″ pos=”top”][icon-box title=”ARTICLE 3 – COMMANDES” desc=”Il appartient au Client de sélectionner sur le site www.aventure06.fr les Produits qu’il désire commander, selon les modalités suivantes :
                        Sélectionnez un service, ajoutez le au panier, inscrivez-vous et effectuez le paiement..
                        Les offres de Produits sont valables tant qu’elles sont visibles sur le site, dans la limite des stocks disponibles.
                        La vente ne sera considérée comme valide qu’après paiement intégral du prix. Il appartient au Client de vérifier l’exactitude de la commande et de signaler immédiatement toute erreur.
                        Toute commande passée sur le site www.aventure06.fr constitue la formation d’un contrat conclu à distance entre le Client et le Vendeur.
                        Le Vendeur se réserve le droit d’annuler ou de refuser toute commande d’un Client avec lequel il existerait un litige relatif au paiement d’une commande antérieure.
                        Le Client pourra suivre l’évolution de sa commande sur le site.

                        ARTICLE 4 – CONDITIONS DE PAIEMENT

                        Le prix est payé par voie de paiement sécurisé, selon les modalités suivantes : paiement par carte bancaire
                        Le prix est payable comptant par le Client, en totalité au jour de la pasation de la commande.
                        Les données de paiement sont sont échangées en mode crypté grâce au protocole défini par le prestataire de paiement agréé intervenant pour les transactions bancaires réalisée sur le site www.aventure06.com.
                        Les paiements effectués par le Client ne seront considérés comme définitifs qu’après encaissement effectif des sommes dues, par le Vendeur.
                        Le Vendeur ne sera pas tenu de procéder à la délivrance des Produits commandés par le Client si celui-ci ne lui en paye pas le prix en totalité dans les conditions ci-dessus indiquées.

                        ARTICLE 5 – ANNULATION

                        Toute inscription peut être annulée au plus tard jusqu’à 15 jours avant l’événement. L’annulation doit intervenir par un écrit adressé aux organisateurs: info@aventure06.com. L’annulation intervenant après cette échéance ne donnera lieu à aucun remboursement. En cas de non-participation, quelle qu’en soit la raison, l’équipe ne peut réclamer le remboursement du montant de l’inscription.
                        Par ailleurs, l’article 121-21-8 du Code de la Consommation ne prévoit pas de délais de rétractation pour la réservation d’activités de loisirs sur Internet.
                        Une session n’est pas échangeable avec une autre.
                        En cas d’annulation d’une session de la part de Aventure, l’échange sur une autre session ou le remboursement intégral sera proposé. Aventure s’efforcera de prévenir l’acheteur dans les meilleurs délais.
                        En cas de retard du client au delà de l’heure de la session, Aventure se réserve le droit d’annuler cette session, sans qu’aucun remboursement ne soit effectué.

                        ARTICLE 6 – INFORMATIQUES ET LIBERTÉS

                        En application de la loi 78-17 du 6 janvier 1978, il est rappelé que les données nominatives qui sont demandés au Client sont nécessaires au traitement de sa commande et à l’établissement des factures, notamment.
                        Ces données peuvent être communiquées aux éventuels partenaires du Vendeur chargés de l’exécution, du traitement, de la gestion et du paiement des commandes.
                        Le traitement des informations communiquées par l’intermédiaire du site www.florabelle.fr a fait l’objet a fait l’objet d’une déclaration auprès de la CNIL, numéro 2054588 v 0.
                        Le Client dispose, conformément aux réglementations nationales et européennes en vigueur d’un droit d’accès permanent, de modification, de rectification et d’opposition s’agissant des informations le concernant.
                        Ce droit peut être exercé selon les modalités décrites à la rubrique « mentions légales » du site www.aventure06.com.”

                        ARTICLE 7 – PROPRIÉTÉ INTELLECTUELLE

                        Le contenu du site www.aventure06.com est la propriété du Vendeur et de ses partenaires et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
                        Toute reproduction totale ou partielle de ce contenu est strictement interdite et est susceptible de constituer un délit de contrefaçon.

                        ARTICLE 8 – DROIT APPLICABLE – LANGUE

                        Les présentes CGV et les opérations qui en découlent sont régies et soumises au droit français.
                        Les présentes CGV sont rédigées en langue française. Dans le cas où elles seraient traduites en une ou plusieurs langues étrangères, seul le texte français ferait foi en cas de litige.

                        ARTICLE 9 – LITIGES

                        Pour toute réclamation merci de contacter le service clientèle à l’adresse postale ou mail du Vendeur indiquée à l’ARTICLE 1 des présentes CGV.
                        Le Client est informé qu’il peut en tout état de cause recourir à une médiation conventionnelle, auprès des instances de médiation sectorielles existantes ou à tout mode alternatif de règlement des différends (conciliation, par exemple) en cas de contestation.
                        Le Client est également informé qu’il peut, également recourir à la plateforme de Règlement en Ligne des Litige (RLL): https://webgate.ec.europa.eu/odr/main/index.cfm?event=main.home.show
                        Tous les litiges auxquels les opérations d’achat et de vente conclues en application des présentes CGV et qui n’auraient pas fait l’objet d’un règlement amiable entre le vendeur ou par médiation, seront soumis aux tribunaux compétents dans les conditions de droit commun.
                    </p>
                </div>
            <FooterComponent />
        </div>
    )
}