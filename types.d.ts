interface ComponentDetails {
    title: string;
    slug: string;
    excerpt: string;
    sections: {
        preview: {
            render: React.ComponentType;
            code: string;
        };
        installation: {
            cli: {
                pnpm: string;
                npm: string;
                yarn: string;
                bun: string;
            };
            code: string;
        };
        usage: {
            code: string[];
        };
        example?: {
            [key: string]: {
                render: React.ComponentType;
                code: string;
            };
        };
    };
}

type ComponentsMap = Record<string, ComponentDetails>;