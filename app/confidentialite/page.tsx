export default function Confidentialite() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '80px 24px', color: '#1a1a1a' }}>
      <a href="/" style={{ color: '#667eea', textDecoration: 'none', fontSize: '14px' }}>&larr; Retour</a>

      <h1 style={{ fontSize: '36px', fontWeight: 800, marginTop: '32px', marginBottom: '40px' }}>
        Politique de confidentialité
      </h1>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px', color: '#667eea' }}>1. Responsable du traitement</h2>
        <p style={{ lineHeight: '1.8', color: '#444' }}>
          Le responsable du traitement des données est :<br />
          <strong>Codaya Agency</strong><br />
          Email : contact@codaya.agency
        </p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px', color: '#667eea' }}>2. Données collectées</h2>
        <p style={{ lineHeight: '1.8', color: '#444', marginBottom: '12px' }}>
          Dans le cadre de notre service, nous collectons les données suivantes :
        </p>
        <ul style={{ lineHeight: '2', color: '#444', paddingLeft: '24px' }}>
          <li><strong>Clients (artisans) :</strong> nom de l&apos;entreprise, nom du dirigeant, email, téléphone, adresse, description des services, informations de paiement (traitées par Stripe)</li>
          <li><strong>Visiteurs du site :</strong> aucune donnée personnelle n&apos;est collectée. Nous n&apos;utilisons pas de cookies de tracking, pas de Google Analytics, pas de pixel publicitaire</li>
          <li><strong>Avis Google :</strong> les avis sont publiquement accessibles sur Google et sont affichés en l&apos;état (nom de l&apos;auteur, note, texte, date)</li>
        </ul>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px', color: '#667eea' }}>3. Finalité du traitement</h2>
        <p style={{ lineHeight: '1.8', color: '#444' }}>
          Les données des clients sont utilisées exclusivement pour :
        </p>
        <ul style={{ lineHeight: '2', color: '#444', paddingLeft: '24px', marginTop: '12px' }}>
          <li>La création et la gestion du site vitrine du client</li>
          <li>La facturation et la gestion de l&apos;abonnement</li>
          <li>La communication relative au service (support, mises à jour)</li>
        </ul>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px', color: '#667eea' }}>4. Base légale</h2>
        <p style={{ lineHeight: '1.8', color: '#444' }}>
          Le traitement des données repose sur l&apos;exécution du contrat entre Codaya Agency et le client (article 6.1.b du RGPD).
        </p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px', color: '#667eea' }}>5. Durée de conservation</h2>
        <p style={{ lineHeight: '1.8', color: '#444' }}>
          Les données du client sont conservées pendant toute la durée de l&apos;abonnement, puis supprimées dans un délai de 30 jours après la résiliation, à l&apos;exception des données de facturation conservées conformément aux obligations légales (10 ans).
        </p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px', color: '#667eea' }}>6. Partage des données</h2>
        <p style={{ lineHeight: '1.8', color: '#444' }}>
          Nous ne vendons ni ne partageons les données personnelles de nos clients. Les seuls sous-traitants ayant accès aux données sont :
        </p>
        <ul style={{ lineHeight: '2', color: '#444', paddingLeft: '24px', marginTop: '12px' }}>
          <li><strong>Stripe</strong> : traitement des paiements</li>
          <li><strong>Netlify</strong> : hébergement du site</li>
        </ul>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px', color: '#667eea' }}>7. Cookies</h2>
        <p style={{ lineHeight: '1.8', color: '#444' }}>
          Nos sites n&apos;utilisent aucun cookie publicitaire ni cookie de tracking. Seuls des cookies strictement nécessaires au fonctionnement technique du site peuvent être utilisés.
        </p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px', color: '#667eea' }}>8. Vos droits</h2>
        <p style={{ lineHeight: '1.8', color: '#444' }}>
          Conformément au RGPD, vous disposez des droits suivants :
        </p>
        <ul style={{ lineHeight: '2', color: '#444', paddingLeft: '24px', marginTop: '12px' }}>
          <li><strong>Droit d&apos;accès :</strong> obtenir une copie de vos données personnelles</li>
          <li><strong>Droit de rectification :</strong> corriger des données inexactes</li>
          <li><strong>Droit de suppression :</strong> demander l&apos;effacement de vos données</li>
          <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
          <li><strong>Droit d&apos;opposition :</strong> vous opposer au traitement de vos données</li>
        </ul>
        <p style={{ lineHeight: '1.8', color: '#444', marginTop: '16px' }}>
          Pour exercer ces droits, contactez-nous à <strong>contact@codaya.agency</strong>.
        </p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px', color: '#667eea' }}>9. Réclamation</h2>
        <p style={{ lineHeight: '1.8', color: '#444' }}>
          Si vous estimez que le traitement de vos données ne respecte pas la réglementation, vous pouvez introduire une réclamation auprès de la CNIL (Commission Nationale de l&apos;Informatique et des Libertés) sur <strong>cnil.fr</strong>.
        </p>
      </section>

      <p style={{ fontSize: '13px', color: '#999', marginTop: '60px', paddingTop: '24px', borderTop: '1px solid #eee' }}>
        Dernière mise à jour : février 2025
      </p>
    </div>
  )
}
