const DESCRIPTION = 'Momentum is what drives something still into an unstoppable force of motion, power, energy and most importantly, change. It fuels motivation, defies stagnancy and demands the spurring of action. People who are constantly in momentum are those that make change, those that pursue something more and those that see in the world the potential for something better.';

export default {
    title: 'TEDxCMU Momentum',
    description: DESCRIPTION,
    canonical: 'https://momentum.tedxcmu.org',
    twitter: {
        cardType: 'summary',
        site: '@tedxcmu',
        handle: '@tedxcmu',
    },
    openGraph: {
        url: 'https://momentum.tedxcmu.org',
        type: 'website',
        title: 'TEDxCMU Momentum',
        description: DESCRIPTION,
        images: [
            {
                url: 'https://momentum.tedxcmu.org/banner.png',
                alt: 'TEDxCMU Momentum Banner',
            },
        ],
        locale: 'en_IE',
    },
    additionalMetaTags: [
        {
            name: 'author',
            content: 'TEDxCMU',
        },
        {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1, viewport-fit=cover',
        },
    ],
};
