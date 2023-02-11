/**
 * Obfuscate email links to prevent scraping.
 *
 * Usage;
 * ```html
 *  <a class="email-link"></a>
 * ```
 */
(() => {
    const me = 'vinkomlacic';
    const emailHost = 'outlook.com'
    const email = `${me}@${emailHost}`;

    const links = document.getElementsByClassName('email-link');
    for (const link of links) {
        link.href = `mailto:${email}`;
        link.textContent = email;
    }
})();
