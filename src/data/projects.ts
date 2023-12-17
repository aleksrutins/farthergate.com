export type Project = {
    name: string,
    github?: string,
    site?: string,
    description: string
};

export default {
    featured: <Project[]>[
        {
            name: 'Harknology',
            github: 'aleksrutins/harknology',
            site: 'https://harknology.farthergate.com',
            description: 'Easily manage your class discussions.',
        },
    ]
}